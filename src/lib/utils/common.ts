import * as yup from "yup";

export const titleString = (value: string): string =>
    value.charAt(0).toUpperCase() + value.replaceAll("_", " ").slice(1);

//#region Validators

yup.addMethod(yup.string, "username", function () {
    return this.required("Username must be between 1 and 30 characters")
        .test(
            "username-length",
            "Username must be between 1 and 30 characters",
            (value) => value.length <= 30
        )
        .test(
            "username-spaces",
            "Username can't include spaces",
            (value) => !value.includes(" ")
        )
        .test(
            "username-numbers",
            "Username can't be just numbers",
            (value) => !+value
        );
});

yup.addMethod(yup.string, "email", function () {
    return this.required("Email is required")
        .matches(/[\w\.-]+@[\w\.-]+(\.[\w]+)+/g, "Invalid Email")
        .max(256, "Email Too Long");
});

yup.addMethod(yup.string, "password", function () {
    return this.required("Password is required").matches(
        /^(?=.*[A-Z])(?=.*)(?=.*[0-9])(?=.*[a-z]).{8,}$/g,
        "Invalid Password"
    );
});

//#endregion
