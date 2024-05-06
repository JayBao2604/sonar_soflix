"use server";

import { db } from "@/lib/db";

export const findSongs = async (id: string) => {
    const data = await db.songList.findMany({
        where: {
            userId: id,
        },
        select: {
            Song: {
                select: {
                    title: true,
                    album: true,
                    singer: true,
                    artist: true,
                    imageString: true,
                    id: true,
                    SongLists: true,
                    youtubeString: true,
                    release: true,
                    duration: true,
                },
            },
        },
    });
    return data;
}