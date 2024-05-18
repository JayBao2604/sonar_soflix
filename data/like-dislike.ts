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

export const getTotalLikes = async (songId: number) => {
    try {
        const likes = await db.songAction.count({
            where: {
                songId,
                type: "like",
            },
        });

        return likes;
    }
    catch {
        return null;
    }
}

export const getTotalDislikes = async (songId: number) => {
    try {
        const dislikes = await db.songAction.count({
            where: {
                songId,
                type: "dislike",
            },
        });

        return dislikes;
    }
    catch {
        return null;
    }
}

export const getMostLikedSongs = async (userId: string) => {
    try {
        const songs = await db.song.findMany();

        const songsWithLikes = await Promise.all(songs.map(async (song) => {
            const totalLikes = await getTotalLikes(song.id);
            return { ...song, totalLikes };
        }));

        const sortedSongs = songsWithLikes.sort((a, b) => (b.totalLikes || 0) - (a.totalLikes || 0));

        return sortedSongs.slice(0, 8);
    } catch {
        return null;
    }
};
