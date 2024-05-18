"use server";

import { db } from "@/lib/db";

export const updateRating = async (songId: number, type: string) => {
    const data = await db.song.update({
        where: {
            id: songId,
        },
        data: {
            rating: {
                increment: type === "like" ? 10 : 0,
            },
            ratingCount: {
                increment: 1,
            },
            numberOfLikes: {
                increment: type === "like" ? 1 : 0,
            },
            numberOfDislikes: {
                increment: type === "dislike" ? 1 : 0,
            },
        },
    });

    return data;
}