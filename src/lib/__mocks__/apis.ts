import { privateProfileMock } from "@/mockUtils/profileMock";

export const apiConfig = {
    basePath: process.env.NEXT_PUBLIC_API_URL,
};

export const authApi = {
    login: vi.fn(async () => ({
        tokenType: "bearer",
        accessToken: "accessToken",
        refreshToken: "refreshToken",
    })),
    signup: vi.fn(async () => privateProfileMock),
};
export const gameRequestApi = {
    startPoolGame: vi.fn(async () => null),
    startPoolGameRaw: vi.fn(async () => ({ raw: { status: 201 } })),
    cancel: vi.fn(async () => null),
};
export const settingsApi = {
    uploadProfilePicture: vi.fn(async () => null),
    updateProfile: vi.fn(async () => null),
};
