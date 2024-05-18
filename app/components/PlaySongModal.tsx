"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
  
  interface iAppProps {
    title: string;
    album: string;
    youtubeUrl: string;
    state: boolean;
    changeState: any;
    release: number;
    singer: string;
    artist: string;
    duration: string;
  }
  
  export default function PlaySongModal({
    changeState,
    album,
    state,
    title,
    youtubeUrl,
    singer,
    artist,
    duration,
    release,
  }: iAppProps) {
    return (
        <Dialog open={state} onOpenChange={() => changeState(!state)}>
          <DialogContent className="sm:max-w-[1024px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription className="line-clamp-3">
                {singer}
              </DialogDescription>
              <div className="flex gap-x-2 items-center">
                <p>{release}</p>
                <p className="border py-o.5 px-1 border-gray-200 rounded">{album}</p>
                <p>{duration}</p>
              </div>
            </DialogHeader>
            <iframe src={youtubeUrl} height={550} className="w-full h-[400px] sm:h-[550px]"></iframe>
          </DialogContent>
        </Dialog>
    );
  }