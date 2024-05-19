"use server";

import { db } from "@/lib/db";
import prisma from "@/app/utils/db";

export const findSongs = async (userId: string) => {
    const data = await prisma.songList.findMany({
        where: {
            userId: userId,
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