import {
    Card,
    Form,
    Tooltip,
    InputGroup,
    OverlayTrigger,
} from "react-bootstrap";
import { BsPencilFill } from "react-icons/bs";
import { Formik } from "formik";

import { useState } from "react";
import * as yup from "yup";

import { updateProfile, useStore } from "@/app/store";
import PasswordConfirmField from "./helpers/PasswordConfirmField";
import { apiRequest } from "@/app/utils/common";
import { revalidateUser } from "@/app/actions";
import SubmitRow from "../SubmitRow";
import FieldToggler from "./helpers/FieldToggler";
import { updateSettings } from "@/app/settings/page";

const UsernameField = () => {
    const profile = useStore.use.profile();
    const [isEditing, setIsEditing] = useState(false);

    const schema = yup.object().shape({
        username: yup.string().username(),
        password_confirm: yup.string().required("Password confirm is required"),
    });
    const [generalError, setGeneralError] = useState();

    const timeSinceUsernameChange =
        (new Date() - new Date(profile.usernameLastChanged)) / 1000;
    const didUsernameChangeRecently =
        timeSinceUsernameChange < process.env.NEXT_PUBLIC_USERNAME_EDIT_EVERY;

    async function submitUsername(form, helpers) {
        setGeneralError("");

        const settingsResponse = await apiRequest("/profile/update-settings", {
            method: "PUT",
            json: form,
        });
        helpers.setSubmitting(false);
        const msg = (await settingsResponse.json()).msg;

        switch (settingsResponse.status) {
            case 200:
                revalidateUser(profile.userId);
                updateProfile({ username: form.username });
                setIsEditing(false);
                break;
            case 400:
                helpers.setErrors(msg);
                break;
            default:
                setIsEditing(false);
                setGeneralError("Something went wrong.");
                break;
        }
    }

    return (
        <>
            {isEditing ? (
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        username: profile.username,
                        password_confirm: "",
                    }}
                    onSubmit={updateSettings}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        isSubmitting,
                        status,
                    }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Card border="secondary">
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        aria-label="username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        isInvalid={errors.username}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <PasswordConfirmField />

                                <SubmitRow
                                    disableSubmitOn={
                                        errors.username ||
                                        values.username == profile.username ||
                                        isSubmitting
                                    }
                                    onCancel={() => setIsEditing(false)}
                                />
                                <span className="text-invalid">{status}</span>
                            </Card>
                        </Form>
                    )}
                </Formik>
            ) : (
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <InputGroup>
                        <Form.Control
                            aria-label="username"
                            value={profile.username}
                            disabled
                        />

                        <FieldToggler
                            onToggle={() => setIsEditing(true)}
                            error={
                                didUsernameChangeRecently &&
                                "Username changed too recently"
                            }
                        />
                    </InputGroup>
                    <span className="text-invalid">{generalError}</span>
                </Form.Group>
            )}
        </>
    );
};
export default UsernameField;
