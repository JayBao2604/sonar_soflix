import { SongCard } from "@/app/components/SongCard";
import { auth } from "@/auth"
import prisma from "@/app/utils/db";
import Image from "next/image";

async function getData(userId: string) {
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

export default async function SongList() {
    const session = await auth();
    const data = await getData(session?.user?.email as string);
    return (
        <>
            <h1 className="text-white text-4xl font-bold mt-10 px-5 sm:px-0">
                Your favourite songs
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 mt-12 mb-12 gap-6">
                {data.map((song) => (
                    <div key={song.Song?.id} className="relative h-60">
                        <Image
                            src={song.Song?.imageString as string}
                            alt="Song"
                            width={500}
                            height={400}
                            className="rounded-sm absolute w-full h-full object-cover"
                        />
                        <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                                <Image
                                    src={song.Song?.imageString as string}
                                    alt="Song"
                                    width={800}
                                    height={800}
                                    className="absolute w-full h-full -z-10 rounded-lg object-cover"
                                />
                                <SongCard
                                    key={song.Song?.id}
                                    title={song.Song?.title as string}
                                    album={song.Song?.album as string}
                                    singer={song.Song?.singer as string}
                                    artist={song.Song?.artist as string}
                                    songId={song.Song?.id as number}
                                    songListId={song.Song?.SongLists[0]?.id as string}
                                    time={song.Song?.duration as string}
                                    songList={
                                        (song.Song?.SongLists.length as number) > 0 ? true : false
                                    }
                                    year={song.Song?.release as number}
                                    youtubeUrl={song.Song?.youtubeString as string}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}