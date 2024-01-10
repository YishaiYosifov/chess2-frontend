import { PrivateUserOut } from "@/client";

import ChangeProfilePicture from "@/components/settings/ChangeProfilePicture";
import ProfileSettingsForm from "@/components/settings/profile/ProfileForm";
import StoreInitializer from "@/components/StoreInitializer";
import withAuth from "@/components/hocs/withAuth";

const ProfilePage = withAuth(
    async ({ profile }: { profile: PrivateUserOut }) => {
        return (
            <div style={{ maxWidth: "1426px" }}>
                <StoreInitializer
                    values={{ localProfile: profile }}
                    action="SET_LOCAL_PROFILE"
                />

                <section className="mt-4">
                    <div className="card">
                        <ChangeProfilePicture />
                    </div>
                </section>

                <section className="mt-4">
                    <div className="card">
                        <ProfileSettingsForm />
                    </div>
                </section>
            </div>
        );
    }
);
export default ProfilePage;
