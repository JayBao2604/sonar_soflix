import { getMostLikedSongs } from "@/data/like-dislike";
import { auth } from "@/auth";
import Image from "next/image";
import { SongCard, SongCard2 } from "@/app/components/SongCard";
import prisma from "@/app/utils/db";
import { getTotalLikes } from "@/data/like-dislike";

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
        category: true,
        artist: true,
        numberOfLikes: true,
      },
    });
  
    const songsWithLikes = await Promise.all(data.map(async (song) => {
        const totalLikes = await getTotalLikes(song.id);
        return { ...song, totalLikes };
    }));

    const sortedSongs = songsWithLikes.sort((a, b) => (b.totalLikes || 0) - (a.totalLikes || 0));

    return sortedSongs.slice(0, 8);
  }

const TopRatedPage = async ({ 
    userId,
}: {
    userId: string;
}) => {
    const data = await getData(userId);
    

    return (
        <div className="container mx-auto flex-col">
            <h1 className="text-4xl font-bold my-8">Top Rated Songs</h1>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grids-cols-3 lg:grid-cols-4 px-5 mt-12 mb-[650px] gap-6">
                {data && data.map((song) => (
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
                                
                                <SongCard2
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
                                    numberOfLikes={song.numberOfLikes || 0}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopRatedPage;