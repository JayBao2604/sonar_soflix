import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { useEffect, useState } from 'react';
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { Button } from "@/components/ui/button";

import { updateSongAction } from "@/actions/song-action-update";
import { updateRating } from "@/actions/song-rating-update";
import { removeSongAction } from "@/actions/song-action-remove";
import { removeRating } from "@/actions/song-rating-remove";

import { db } from "@/lib/db";

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
    const [like, setLike] = useState(false);
    const [dislike, setDislike] = useState(false);  

    const fetchSongAction = async (userId: string, songId: number) => {
        const songAction = await db.songAction.findFirst({
            where: {
                userId: userId,
                songId: songId,
            },
        });
    
        if (songAction) {
            if (songAction.type === 'like') {
                setLike(true);
                setDislike(false);
            } else if (songAction.type === 'dislike') {
                setLike(false);
                setDislike(true);
            }
        } else {
            setLike(false);
            setDislike(false);
        }
    };
    
    // Use the useEffect hook to call the function when the component mounts
    //useEffect(() => {
    //    fetchSongAction(userId, songId);
    //}, []);

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

          <div className="flex w-full gap-x-2 items-end justify-end">
            <Button 
              variant={like ? "default" : "secondary"} 
              size={"lg"} 
              onClick={() => {
                setLike(!like);
                if (dislike) {
                  setDislike(false);
                }
              }}
            >
              {like ? <AiFillLike /> : <AiOutlineLike />}
            </Button>
            <Button 
              variant={dislike ? "default" : "secondary"} 
              size={"lg"} 
              onClick={() => {
                setDislike(!dislike);
                if (like) {
                  setLike(false);
                }
              }}
            >
              {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
            </Button>
          </div>

        </DialogContent>
        
      </Dialog>
    );
  }