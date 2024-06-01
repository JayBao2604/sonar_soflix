"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const handlePlayCircleClick = () => {
    router.push(`/home/song/${id}`); 
  };
  return (
    <>
      <Button onClick={handlePlayCircleClick} className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white rounded-full">
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
    </>
  );
}