"use client";

import React, { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import EditButton from '@/app/components/EditButton';
import EditModal from '@/app/components/EditModal';

const ProfileComp = () => {
  const { data: session, status } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: session?.user?.name || '',
    image: session?.user?.image || '',
    email: session?.user?.email || '',
  });

  const handleModalChange = (state: boolean) => {
    setIsModalOpen(state);
  };

  const refreshSession = async () => {
    const newSession = await getSession();
    if (newSession) {
      setUserData({
        name: newSession.user?.name ?? '',
        image: newSession.user?.image ?? '',
        email: newSession.user?.email ?? '',
      });
    }
  };

  useEffect(() => {
    refreshSession();
  }, [isModalOpen]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex-col">
      <div className="w-full bg-gradient-to-b from-gray-700 to-gray-900 flex rounded-t-[1rem] relative" style={{ height: '330px' }}>
        <Avatar className="flex h-[230px] w-[230px] rounded-full mt-20 ml-10 outline outline-white">
          <AvatarImage src={userData.image} />
          <AvatarFallback className="rounded-sm">{userData.name}</AvatarFallback>
        </Avatar>
        <div className="ml-10 mt-[210px] relative">
          <p className="text-5xl leading-none mb-3 font-semibold">
            {userData.name}
            <EditButton changeState={handleModalChange} />
          </p>
          <p className="text-xl leading-none text-muted-foreground">
            {userData.email}
          </p>
        </div>
      </div>
      {isModalOpen && <EditModal state={isModalOpen} changeState={handleModalChange} refreshSession={refreshSession} />}
    </div>
  );
};

export default ProfileComp;
