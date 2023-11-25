"use client";

import { Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import knook from "@/public/assets/pieces-svg/knook-white.svg";
import logoText from "@/public/assets/logo-text.svg";
import styles from "./AuthPage.module.scss";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

/**
 * Both the login and signup page are the same but with a different form,
 * so this component groups them together.
 *
 * This component should only be imported to the login/signup pages.
 *
 * @param login - whether to render the login form
 * @param signup - whether to render the signup form
 */
const AuthPage = ({
    login,
    signup,
}: { login: true; signup?: false } | { login?: false; signup: true }) => {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <Image
                    src={logoText}
                    alt="logo"
                    className={styles["logo-text"]}
                />
                <h1>{login ? "Login" : "Signup"}</h1>

                <div className={styles["form-container"]}>
                    {login ? <LoginForm /> : <SignupForm />}
                    <hr />

                    <Button as="a" className="w-100" variant="primary">
                        <Image
                            src="/assets/google.webp"
                            alt="google logo"
                            width={30}
                            height={30}
                            className="me-2"
                        />
                        Continue with Google
                    </Button>

                    <span>
                        Already have an account? Click{" "}
                        {login ? (
                            <Link href="/signup">here to sign up</Link>
                        ) : (
                            <Link href="/login">here to log in</Link>
                        )}
                    </span>
                </div>
            </div>
            <div className={styles["side-image-container"]}>
                <Image src={knook} alt="knook" draggable={false} />
            </div>
        </div>
    );
};
export default AuthPage;