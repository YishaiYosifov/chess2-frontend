import { notFound } from "next/navigation";

import styles from "./user.module.scss";

import type { FinishedGame, PublicUserOut } from "@/client";
import { profileApi } from "@/lib/apis";

import RatingCard from "@/components/profile/RatingsCard";
import GamesTable from "@/components/profile/GamesTable";
import Profile from "@/components/profile/Profile";
import { RatingMap } from "@/lib/types";

export const revalidate = 60;
export const metadata = {
    title: "Chess 2 - User",
};

const UserPage = async ({
    params: { username },
}: {
    params: { username: string };
}) => {
    // Find the date a month ago to fetch the ratings since
    const dateMonthAgo = new Date();
    dateMonthAgo.setMonth(dateMonthAgo.getMonth() - 1);

    let profile: PublicUserOut, ratings: RatingMap, games: FinishedGame[];
    try {
        [profile, ratings, games] = await Promise.all([
            profileApi.getInfo({ target: username }),
            profileApi.getRatingsHistory({
                target: username,
                since: dateMonthAgo,
            }),
            profileApi.paginateGames({ target: username }),
        ]);
    } catch {
        // TODO error handing
        notFound();
    }

    return (
        <div className={styles.container}>
            <section className={styles["profile-info-section"]}>
                <Profile profile={profile} />
            </section>

            <section className={styles["games-section"]}>
                <GamesTable games={games} viewingProfile={profile} />
            </section>

            <section className={styles["ratings-section"]}>
                <div className={styles["ratings-container"]}>
                    {Object.entries(ratings).map(([variant, data]) => (
                        <RatingCard
                            key={variant}
                            variant={variant}
                            ratingData={data}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};
export default UserPage;
