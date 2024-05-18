"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { addToSonglist, deleteFromSonglist } from "../action";
import { usePathname } from "next/navigation";

import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { getTotalLikes } from "@/data/like-dislike";

interface iAppProps {
  title: string;
  album: string;
  singer: string;
  artist: string;
  songId: number;
  songList: boolean;
  songListId: string;
  youtubeUrl: string;
  year: number;
  time: string;
}

export function SongCard({
  songId,
  album,
  artist,
  singer,
  title,
  songListId,
  songList,
  youtubeUrl,
  time,
  year,
}: iAppProps) {
  const router = useRouter();
  const pathName = usePathname();
  const handlePlayCircleClick = () => {
    router.push(`/song/${songId}`); 
  };
  return (
    <>
      <button onClick={handlePlayCircleClick} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>

      <div className="right-5 top-5 absolute z-10">
        {songList ? (
          <form action={deleteFromSonglist}>
            <input type="hidden" name="songlistId" value={songListId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-sky-500" />
            </Button>
          </form>
        ) : (
          <form action={addToSonglist}>
            <input type="hidden" name="songId" value={songId} />
            <input type="hidden" name="pathname" value={pathName} />
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {album}
          </p>
          <p className="font-normal text-sm">{time}</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {singer}
        </p>
      </div>
    </>
  );
}

interface iAppProps2 {
  title: string;
  album: string;
  singer: string;
  artist: string;
  songId: number;
  songList: boolean;
  songListId: string;
  youtubeUrl: string;
  year: number;
  time: string;
  numberOfLikes: number;
}

export function SongCard2({
  songId,
  album,
  artist,
  singer,
  title,
  songListId,
  songList,
  youtubeUrl,
  time,
  year,
  numberOfLikes,
}: iAppProps2) {
  const router = useRouter();
  const pathName = usePathname();
  const handlePlayCircleClick = () => {
    router.push(`/song/${songId}`); 
    
  };
  return (
    <>
      <div className="flex-col">
        <button onClick={handlePlayCircleClick} className="-mt-14">
          <PlayCircle className="h-20 w-20" />
        </button>

        <div className="right-5 top-5 absolute z-10">
          {songList ? (
            <form action={deleteFromSonglist}>
              <input type="hidden" name="songlistId" value={songListId} />
              <input type="hidden" name="pathname" value={pathName} />
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4 text-sky-500" />
              </Button>
            </form>
          ) : (
            <form action={addToSonglist}>
              <input type="hidden" name="songId" value={songId} />
              <input type="hidden" name="pathname" value={pathName} />
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>

        <div className="p-5 absolute bottom-0 left-0">
          <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
          <div className="flex gap-x-2 items-center">
            <p className="font-normal text-sm">{year}</p>
            <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
              {album}
            </p>
            <p className="font-normal text-sm">{time}</p>
          </div>
          <div>
            <p className="line-clamp-1 text-sm text-gray-200 font-light">
              {singer}
            </p>
            <div className="flex items-center">
              <AiFillLike />
              <span>{numberOfLikes}</span>
            </div>
          </div>
        </div>
      
        
      </div>
    </>
  );
}