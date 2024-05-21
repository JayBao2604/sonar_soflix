"use client";

import {signIn} from 'next-auth/react';
import {FcGoogle} from 'react-icons/fc';
import {FaGithub} from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {Button} from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const Social = () => {
    const onClick = (provider: "google" | "github" | "facebook") => {
        signIn(provider, {callbackUrl: DEFAULT_LOGIN_REDIRECT});
    }

    return (
        <div className="flex items-center justify-center w-full gap-x-4">
            {/* 
            <Button
             size="lg"
             className='w-full'
             variant="default"
             onClick={() => onClick("google")}
            >
                <FcGoogle className="w-5 h-5" />
            </Button>
            */}
            <Button
             size="lg"
             className='w-full'
             variant="default"
             onClick={() => onClick("facebook")}
            >
                <FaFacebook className="w-5 h-5" />
            </Button>

            <Button
             size="lg"
             className='w-full bg-slate-800'
             variant="outline"
             onClick={() => onClick("github")}
            >
                <FaGithub className="w-5 h-5" />
            </Button>
            

        </div>    
    )
}