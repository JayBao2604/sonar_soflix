"use server";

import { db } from "@/lib/db";

export const removeRating = async (songId: number, type: string) => {
    const data = await db.song.update({
        where: {
            id: songId,
        },
        data: {
            rating: {
                decrement: type === "like" ? 10 : 0,
            },
            ratingCount: {
                decrement: 1,
            },
            numberOfLikes: {
                decrement: type === "like" ? 1 : 0,
            },
            numberOfDislikes: {
                decrement: type === "dislike" ? 1 : 0,
            },
        },
    });

    return data;
}