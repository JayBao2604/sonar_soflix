"use server";

import { db } from "@/lib/db";

export const removeSongAction = async (songId: number, type: string, userid: string) => {
    const data = await db.songAction.findFirst({
        where: {
            songId: songId,
            userId: userid,
        },
    });

    if (data) {
        const removeData = await db.songAction.delete({
            where: {
                id: data.id,
            },
        });
        return removeData;
    } 
    else {
        return null;
    }
    
}