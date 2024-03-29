import ProfilePictureSettings from "@/components/settings/profile/ProfilePictureSettings";
import ProfileSettings from "@/components/settings/profile/ProfileSettings";
import withAuth from "@/hocs/withAuth";

export const metadata = { title: "Profile - Settings - Chess 2" };

const ProfilePage = withAuth(async () => {
    return (
        <div style={{ maxWidth: "1426px" }}>
            <section className="mt-4">
                <div className="card">
                    <ProfilePictureSettings />
                </div>
            </section>

            <section className="mt-4">
                <div className="card">
                    <ProfileSettings />
                </div>
            </section>
        </div>
    );
});
export default ProfilePage;
