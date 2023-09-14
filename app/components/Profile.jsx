import Image from "next/image";

import classes from "./Profile.module.scss";

const Profile = ({ username, about }) => {
    return (
        <div className="card">
            <div className="card-body row">
                <div className="col-lg-4 d-flex align-items-center justify-content-center">
                    <Image
                        src="/assets/logo.webp"
                        height={220}
                        width={220}
                        className={`rounded border border-white border-3 img-fluid ${classes["profile-picture"]}`}
                        alt="User Profile Picture"
                    />
                </div>
                <div className="col">
                    <h4 className="mt-3">
                        <Image
                            src="/assets/logo.webp"
                            width={40}
                            height={40}
                            className="rounded-1 img-fluid"
                            alt="Country"
                        />{" "}
                        {username}
                    </h4>
                    <textarea
                        className={`form-control ${classes.about}`}
                        readOnly
                        value={about || ""}
                    />
                </div>
            </div>
        </div>
    );
};
export default Profile;
