"use client";

import React, { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import EditButton from '@/app/components/EditButton';
import EditModal from '@/app/components/EditModal';
import { findSongs } from '@/actions/find-songs';
import { SongCard } from "@/app/components/SongCard";
import Image from "next/image";
import SongList from '@/app/home/user/liked/page';

const ProfileComp = () => {
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalChange = (state: boolean) => {
        setIsModalOpen(state);
    };

    return (
        <div className="w-full flex-col" >
            <div className="w-full bg-gradient-to-b from-gray-700 to-gray-900 flex  rounded-t-[1rem] relative" style={{ height: '330px' }}>
                <Avatar className="flex h-[230px] w-[230px] rounded-full mt-20 ml-10 outline outline-white">
                    <AvatarImage src={session?.user?.image || "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"} />
                    <AvatarFallback className="rounded-sm">{session?.user?.name}</AvatarFallback>
                </Avatar>
                <div className="ml-10 mt-[210px] relative">
                    <p className="text-5xl leading-none mb-3 font-semibold">
                        {session?.user?.name}
                        <EditButton changeState={handleModalChange} />
                    </p>
                    <p className="text-xl leading-none text-muted-foreground">
                        {session?.user?.email}
                    </p>
                </div>
            </div>
            {isModalOpen && <EditModal state={isModalOpen} changeState={handleModalChange} />}

            <div className='mt-20'>

            </div>
        </div>
  );
};

export default ProfileComp;
