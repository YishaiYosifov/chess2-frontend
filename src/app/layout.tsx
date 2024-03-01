import { Secular_One } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import { ReactNode } from "react";

import constants from "@/lib/constants";
import "./globals.scss";

import NavbarProvider from "@/components/navbar/NavbarProvider";

import { cookies } from "next/headers";

const secularOne = Secular_One({
    weight: ["400"],
    subsets: ["latin"],
});

export const metadata = {
    icons: {
        icon: "./public/favicon.ico",
    },
};

/**
 * The root layout.
 *
 * This will:
 * * Create the navbar element
 * * Initializes the store with whether the user is authorized or not.
 *   Do not use the store to determine whether the user is authorized or not without using the With/WithoutAuth HOCs.
 */
const RootLayout = async ({ children }: { children: ReactNode }) => {
    const nextCookies = cookies();
    const hasAuthCookies =
        nextCookies.has(constants.REFRESH_TOKEN) &&
        nextCookies.has(constants.ACCESS_TOKEN);

    return (
        <html lang="en" data-bs-theme="dark">
            <body className={secularOne.className}>
                <NavbarProvider hasAuthCookies={hasAuthCookies} />
                <main>{children}</main>
            </body>
        </html>
    );
};
export default RootLayout;
