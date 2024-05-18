"use server";

import { db } from "@/lib/db";

export const updateSongAction = async (songId: number, type: string, userid: string) => {
    const songAction = await db.songAction.findFirst({
        where: {
            songId: songId,
            userId: userid,
        },
    });

    if (songAction) {
        const data = await db.songAction.update({
            where: {
                id: songAction.id,
            },
            data: {
                type: type,
            },
        });
        return data;
    } 
    else {
        const data = await db.songAction.create({
            data: {
                type: type,
                songId: songId,
                userId: userid,
            },
        });
        return data;
    }
    
}