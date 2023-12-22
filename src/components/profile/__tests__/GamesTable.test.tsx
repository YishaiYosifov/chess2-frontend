import { render, screen } from "@testing-library/react";
import GamesTable from "../GamesTable";
import { createGame, profileMock } from "@/mocks/mocks";

const gamesMock = [createGame(), createGame(), createGame()];

describe.skip("GamesTable", () => {
    it("should render the correct table headers", () => {
        render(<GamesTable games={gamesMock} viewingProfile={profileMock} />);
        const expectedHeaders = ["Mode", "Players", "Results", "Date"];

        const headers = screen.getByTestId("gamesTableHeader").children;
        for (const [i, header] of Object.entries(headers)) {
            expect(header.textContent).toBe(expectedHeaders[i]);
        }
    });
});
