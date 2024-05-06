"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlaySongModal from "./PlaySongModal";

interface iAppProps {
  artist: string;
  youtubeUrl: string;
  id: number;
  album: string;
  title: string;
  releaseDate: number;
  duration: string;
  singer: string;
}

export default function SongButtons({
  album,
  duration,
  id,
  singer,
  artist,
  releaseDate,
  title,
  youtubeUrl,
}: iAppProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white rounded-full">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>

      <PlaySongModal
        state={open}
        changeState={setOpen}
        album={album}
        duration={duration}
        key={id}
        singer={singer}
        artist={artist}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
      />
    </>
  );
}