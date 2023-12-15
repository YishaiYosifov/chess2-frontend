import userEvent, { UserEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { mockRouter } from "@/lib/utils/testUtils";
import { login } from "@/lib/utils/authUtils";
import LoginForm from "../LoginForm";

jest.mock("@/lib/utils/authUtils", () => ({
    login: jest.fn(),
}));

describe("LoginForm", () => {
    async function fillForm(
        user: UserEvent,
        username: string = "username",
        password: string = "password"
    ): Promise<{ usernameField: HTMLElement; passwordField: HTMLElement }> {
        const usernameField = screen.getByTestId("usernameField");
        const passwordField = screen.getByTestId("passwordField");

        if (username) await user.type(usernameField, username);
        if (password) await user.type(passwordField, password);

        return { usernameField, passwordField };
    }

    async function submit(user: UserEvent): Promise<void> {
        const submitButton = screen.getByTestId("submitLoginForm");
        await user.click(submitButton);
    }

    it("should be able to type", async () => {
        const user = userEvent.setup();
        render(<LoginForm />);

        const { usernameField, passwordField } = await fillForm(
            user,
            "username",
            "password"
        );
        expect(usernameField).toHaveValue("username");
        expect(passwordField).toHaveValue("password");
    });

    it.each([
        ["", ""],
        ["test", ""],
        ["", "test"],
    ])(
        "should not submit when form is incomplete",
        async (username, password) => {
            const user = userEvent.setup();
            render(<LoginForm />);

            await fillForm(user, username, password);
            await submit(user);
            expect(login).not.toHaveBeenCalled();
        }
    );

    it.each([
        [null, "Something went wrong."],
        [{ status: 500, text: jest.fn() }, "Something went wrong."],
        [{ status: 401 }, "Wrong username / password"],
    ])(
        "should correctly handle submit failures",
        async (response, statusText) => {
            const user = userEvent.setup();

            const mockLogin = login as jest.Mock;
            mockLogin.mockResolvedValue(response);

            render(<LoginForm />);
            await fillForm(user);
            await submit(user);

            const status = screen.getByTestId("formStatus");
            expect(status.textContent).toBe(statusText);
        }
    );

    it("should redirect when successfull", async () => {
        const user = userEvent.setup();
        const { replace } = mockRouter();

        const mockLogin = login as jest.Mock;
        mockLogin.mockResolvedValue({ status: 200 });

        render(<LoginForm />);
        await fillForm(user);
        await submit(user);

        expect(replace).toHaveBeenCalledTimes(1);
        expect(replace).toHaveBeenCalledWith("/");
    });
});
