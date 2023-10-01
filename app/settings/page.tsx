import { BsGearFill } from "react-icons/bs";

import ChangeProfilePicture from "@/components/pages/settings/ChangeProfilePicture";
import SettingsForm from "@/components/pages/settings/SettingsForm";
import InitializeStore from "@/components/InitializeStore";
import withAuth from "@/components/hocs/withAuth";
import { useStore } from "../store";

const COL_CLASSES = "col-11 col-lg-9 col-xl-8 col-xxl-7 mx-auto";

const SettingsPage = withAuth(async () => {
    const countries = await (
        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/static/countries.json`)
    ).json();

    const { profile } = useStore.getState();
    return (
        <div className="container-fluid mt-5" style={{ maxWidth: "1426px" }}>
            <InitializeStore values={{ profile: profile }} />

            <header className="row">
                <div className={COL_CLASSES}>
                    <h1 className="text-light">
                        <BsGearFill /> Settings
                    </h1>
                </div>
            </header>

            <section className="mt-4">
                <div className="row">
                    <div className={COL_CLASSES}>
                        <h4>Profile Picture</h4>
                    </div>
                </div>
                <div className="row">
                    <div className={`card ${COL_CLASSES}`}>
                        <ChangeProfilePicture />
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="row">
                    <h4 className={COL_CLASSES}>Profile Settings</h4>
                </div>
                <div className="row">
                    <div className={`card ${COL_CLASSES}`}>
                        <SettingsForm />
                    </div>
                </div>
            </section>
        </div>
    );
});

export default SettingsPage;