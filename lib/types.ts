import { Variant } from "./constants";

export interface Player {
    userId: number;
    username: string;
    color: "white" | "black";
}

export interface Game {
    token: string;
    white: Player;
    black: Player;

    winnerId: number;

    createdAt: string;

    variant: Variant;
    increment: number;
    timeControl: number;
}

export interface RatingHistory {
    achievedAt: number;
    elo: number;
}
export interface RatingData {
    history: RatingHistory[];
    current: number;
    minRating: number;
    maxRating: number;
}

export type RatingsMap = { [key in Variant]: RatingData };

export interface PublicProfile {
    userId: number;
    username: string;

    about: string;
    country: string;
    pfpLastChanged: string;
}
