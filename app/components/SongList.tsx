import prisma from "../utils/db";
import Image from "next/image";
import { SongCard } from "./SongCard";

export const getData = async (query: string, userId: string) => {
    try {
      const fieldsToSearch = ['singer', 'title', 'album', 'category']; 
      const conditions = fieldsToSearch.map(field => ({
        [field]: {
          contains: query,
          mode: "insensitive",
        },
      }));
  
      const data = await prisma.song.findMany({
        where: {
          OR: conditions,
        },
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
            category: true,
            artist: true,
          },
      });
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  };

const SongList = async ({ 
    query, userId
}: {
    query: string; userId: string;
}) => {
    const data = await getData(query, userId);
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 my-12 gap-6">
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
                            youtubeUrl={song.youtubeString}
                            songListId={song.SongLists[0]?.id}
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
};
export default SongList;