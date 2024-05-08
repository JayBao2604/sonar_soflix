import { auth } from "@/auth"
import prisma from "@/app/utils/db";

import Image from "next/image";
import { SongCard } from "@/app/components/SongCard";

async function getData(category: string, userId: string) {
    switch (category) {
        case "ost": {
            const data = await prisma.song.findMany({
                where: {
                    category: "ost",
                },
                select: {
                    title: true,
                    id: true,
                    duration: true,
                    artist: true,
                    album: true,
                    singer: true,
                    release: true,
                    imageString: true,
                    youtubeString: true,
                    SongLists: {
                        where: {
                            userId: userId,
                        },
                    },
                },
            });
            return data;
        }
        case "podcast": {
            const data = await prisma.song.findMany({
                where: {
                    category: "podcast",
                },
                select: {
                    title: true,
                    id: true,
                    duration: true,
                    artist: true,
                    album: true,
                    singer: true,
                    release: true,
                    imageString: true,
                    youtubeString: true,
                    SongLists: {
                        where: {
                            userId: userId,
                        },
                    },
                },
            });
            return data;
        }
        case "playlist": {
            const data = await prisma.song.findMany({
                where: {
                    category: "playlist",
                },
                select: {
                    title: true,
                    id: true,
                    duration: true,
                    artist: true,
                    album: true,
                    singer: true,
                    release: true,
                    imageString: true,
                    youtubeString: true,
                    SongLists: {
                        where: {
                            userId: userId,
                        },
                    },
                },
            });
            return data;
        }
        default: {
            throw new Error();
        }
    }
}

export default async function CategoryPage({
    params,
}: { 
    params: { genre: string };
}) {
    const session = await auth();
    const data = await getData(params.genre, session?.user?.email as string);

    return (
        <div className="grid grid-col-1 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-4 px-5 mt-12 mb-[650px] gap-6">
            {data.map((song) => (
                <div key={song.id} className="relative h-60">
                    <Image
                        src={song.imageString}
                        alt="Song"
                        width={500}
                        height={400}
                        className="rounded-sm absolute w-full h-full object-cover"
                    />
                <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                    <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                        <Image
                            src={song.imageString}
                            alt="Song"
                            width={800}
                            height={800}
                            className="absolute w-full h-full -z-10 rounded-lg object-cover"
                        />

                        <SongCard
                            key={song.id}
                            album={song.album}
                            singer={song.singer}
                            songId={song.id}
                            artist={song.artist}
                            time={song.duration}
                            title={song.title}
                            songListId={song.SongLists[0]?.id}
                            songList={song.SongLists.length > 0 ? true : false}
                            year={song.release}
                            youtubeUrl={song.youtubeString}
                        />
                    </div>
                </div>
            </div>
        ))}
        </div>
    );
}