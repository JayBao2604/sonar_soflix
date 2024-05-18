"use client";

import { useEffect, useState } from 'react';
import { AiFillLike, AiFillDislike, AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { Button } from "@/components/ui/button";
import { updateRating } from "@/actions/song-rating-update";
import { removeRating } from "@/actions/song-rating-remove";
import { updateSongAction } from "@/actions/song-action-update";
import { removeSongAction } from "@/actions/song-action-remove";

interface iLikeDislikeProps {
    songId: number;
    userId: string;
    numberOfLikes: number;
    numberOfDislikes: number;
    songAction: string | undefined;
}

export const LikeDislike = ({ songId, userId, numberOfLikes: initialNumberOfLikes, numberOfDislikes: initialNumberOfDislikes, songAction }: iLikeDislikeProps) => {
    const [like, setLike] = useState(songAction === 'like');
    const [dislike, setDislike] = useState(songAction === 'dislike');
    const [numberOfLikes, setNumberOfLikes] = useState(initialNumberOfLikes);
    const [numberOfDislikes, setNumberOfDislikes] = useState(initialNumberOfDislikes);


    const handleLike = async () => {
        if (like) {
            await removeSongAction(songId, 'like', userId);
            await removeRating(songId, 'like');
            setNumberOfLikes(numberOfLikes - 1);
        } else {
            await updateSongAction(songId, 'like', userId);
            await updateRating(songId, 'like');
            setNumberOfLikes(numberOfLikes + 1);
            if (dislike) {
                setNumberOfDislikes(numberOfDislikes - 1);
            }
        }
        setLike(!like);
        if (dislike) {
            setDislike(false);
            await removeSongAction(songId, 'dislike', userId);
            await removeRating(songId, 'dislike');
        }
    };

    const handleDislike = async () => {
        if (dislike) {
            await removeSongAction(songId, 'dislike', userId);
            await removeRating(songId, 'dislike');
            setNumberOfDislikes(numberOfDislikes - 1);
        } else {
            await updateSongAction(songId, 'dislike', userId);
            await updateRating(songId, 'dislike');
            setNumberOfDislikes(numberOfDislikes + 1);
            if (like) {
                setNumberOfLikes(numberOfLikes - 1);
            }
        }
        setDislike(!dislike);
        if (like) {
            setLike(false);
            await removeSongAction(songId, 'like', userId);
            await removeRating(songId, 'like');
        }
    };

    return (
        <div className="flex justify-center space-x-4 items-center">
            <p className="mr-2">{numberOfLikes}</p>
            <Button onClick={handleLike} variant="outline" size="icon">
                {like ? <AiFillLike className="w-8 h-8" /> : <AiOutlineLike className="w-8 h-8" />}
            </Button>
            <Button onClick={handleDislike} variant="outline" size="icon">
                {dislike ? <AiFillDislike className="w-8 h-8" /> : <AiOutlineDislike className="w-8 h-8" />}
            </Button>
            <p className="ml-2">{numberOfDislikes}</p>
        </div>
    )
}