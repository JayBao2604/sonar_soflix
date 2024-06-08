"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { updateInfo } from '@/actions/update-info';
import { useSession, getSession } from 'next-auth/react';
import { FaPen } from "react-icons/fa";

interface EditProps {
    state: boolean;
    changeState: (state: boolean) => void;
}

const EditModal = ({state, changeState} : EditProps) => {
    const { data: session } = useSession();
    const [username, setUsername] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedFileUrl, setSelectedFileUrl] = useState<string>('');
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (session?.user?.image) {
            setSelectedFileUrl(session.user.image);
        } else {
            setSelectedFileUrl("https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg");
        }
    }, [session]);

    const handleDialogOpenChange = (isOpen: boolean) => {
        changeState(!state);
    };

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setSelectedFile(file);
        
        if (file) {
            const url = URL.createObjectURL(file);
            setSelectedFileUrl(url);
        } else {
            setSelectedFileUrl(session?.user?.image ? session.user.image : "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg");
        }
    };

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFileUrl(event.target.value);
    };

    const handleSaveClick = async () => {
        if (session?.user?.id) {
            await updateInfo(selectedFileUrl, username, session?.user?.id);
            await getSession();
            setShowConfirmationDialog(true);
        }
    };

    const handleConfirm = () => {
        setShowConfirmationDialog(false);
        handleDialogOpenChange(false);
    };

    return (
        <>
            <Dialog open={state} onOpenChange={handleDialogOpenChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-3xl">Edit Profile</DialogTitle>
                    </DialogHeader>
                    <div className='mt-5 flex'>
                        <div className="relative" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <Avatar onClick={handleAvatarClick} className="ml-5 flex h-[170px] w-[170px] rounded-full outline outline-white cursor-pointer mt-5">
                                <AvatarImage src={selectedFileUrl} className="hover:opacity-50" />
                                <AvatarFallback className="rounded-sm">{session?.user?.name}</AvatarFallback>
                                {isHovered && <FaPen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />}
                            </Avatar>
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                        </div>
                        <div className="flex-col ml-10 gap-y-1">
                            <label className='mb-4'>
                                Username:
                                <input 
                                    type="text" 
                                    className="bg-white bg-opacity-10 rounded-[5px] mt-3" 
                                    value={username} 
                                    onChange={handleUsernameChange} 
                                    placeholder={session?.user?.name ?? ''}
                                    style={{
                                        padding: '10px',
                                        fontSize: '16px'
                                    }}
                                />
                            </label>
                            <div style={{ height: '20px' }}></div>
                            <label className=''>
                                Avatar URL:
                                <input 
                                    type="text" 
                                    className="bg-white bg-opacity-10 rounded-[5px] mt-3"
                                    onChange={handleImageChange} 
                                    placeholder={"https://imgur.com/123456" ?? ''}
                                    style={{
                                        padding: '10px',
                                        fontSize: '16px'
                                    }}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='w-full justify-end flex mt-10'>
                        <p className='mr-10 mt-2 text-slate-600'>Avatar File Upload is WIP!</p>
                        <Button onClick={handleSaveClick} className="rounded-[10px] w-[220px] items-center">Save</Button>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog open={showConfirmationDialog} onOpenChange={setShowConfirmationDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-3xl">Confirmation</DialogTitle>
                    </DialogHeader>
                    <div className="mt-5">
                        <p className="text-lg mb-4">
                            Your changes will take effect from the next session onward.
                        </p>
                        <div className='w-full justify-end flex mt-10'>
                            <Button onClick={handleConfirm} className="rounded-[10px] w-[220px] items-center">OK</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default EditModal;
