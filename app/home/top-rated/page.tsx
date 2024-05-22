import { getTotalLikes } from "@/data/like-dislike";
import { auth } from "@/auth";
import Image from "next/image";
import { SongCard2 } from "@/app/components/SongCard";
import prisma from "@/app/utils/db";

async function getData() {
  const songs = await prisma.song.findMany({
    select: {
      id: true,
      singer: true,
      title: true,
      SongLists: true,
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

  const likesPromises = songs.map(song => getTotalLikes(song.id));
  const likes = await Promise.all(likesPromises);

  const songsWithLikes = songs.map((song, index) => ({
    ...song,
    totalLikes: likes[index] || 0,
  }));

  const sortedSongs = songsWithLikes.sort((a, b) => b.totalLikes - a.totalLikes);

  return sortedSongs.slice(0, 8);
}


const TopRatedPage = async () => {
  const data = await getData();

  return (
    <div className="container mx-auto flex-col">
      <h1 className="text-4xl font-bold my-8">Top Rated Songs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 mt-12 mb-[650px] gap-6">
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
                  songList={song.SongLists.length > 0}
                  year={song.release}
                  youtubeUrl={song.youtubeString}
                  numberOfLikes={song.totalLikes}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedPage;
