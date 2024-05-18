import { db } from '@/lib/db';

export const getSongFromId = async (id: number) => {
    try {
        const song = await db.song.findUnique({
            where: {
                id,
            },
        });

        return song;
    }
    catch {
        return null;
    }
}

export const getSongAction = async (userId: string, songId: number) => {
    try {
        const songAction = await db.songAction.findFirst({
            where: {
                userId,
                songId,
            },
        });

        return songAction;
    }
    catch {
        return null;
    }
}