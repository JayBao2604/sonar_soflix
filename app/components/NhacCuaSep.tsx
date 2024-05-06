import Image from "next/image";
import prisma from "../utils/db";
import { SongCard } from "./SongCard";
import { auth } from "@/auth"

async function getData(userId: string) {
  const data = await prisma.song.findMany({
    select: {
      id: true,
      singer: true,
      title: true,
      SongLists: {
        where: {
          userId: userId,
        },
      },
      imageString: true,
      youtubeString: true,
      release: true,
      duration: true,
      album: true,
      artist: true,
    },
    where: {
      id: {
        gte: 41, 
        lte: 50, 
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
  });

  return data;
}

export default async function NhacCuaSep() {
  const session = await auth();
  const data = await getData(session?.user?.email as string);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 gap-6">
      {data.map((song) => (
        <div key={song.id} className="relative h-48">
          <Image
            src={song.imageString}
            alt="song"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />

          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={song.imageString}
                alt="song"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

            <SongCard
                songId={song.id}
                singer={song.singer}
                title={song.title}
                songListId={song.SongLists[0]?.id} 
                youtubeUrl={song.youtubeString}
                songList={song.SongLists.length > 0 ? true : false}
                key={song.id}
                album={song.album}
                artist={song.artist}
                time={song.duration}
                year={song.release}
            />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}