"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlaySongModal from "./PlaySongModal";
import { useState } from "react";
import { addToSonglist, deleteFromSonglist } from "../action";
import { usePathname } from "next/navigation";

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
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
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