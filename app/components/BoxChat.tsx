"use client";

import { FormEvent } from "react";
import { useChat } from "ai/react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { SendHorizonalIcon, Home } from "lucide-react";
import { ScrollArea } from "../components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import Image from "next/image";
import Logo from "../../public/sonar.png";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";
import { useState, useEffect } from "react";
import FormattedMarkdown from "./Formatted_Markdown";

export default function Chat() {
    const [model, setModal] = useState<string>('');
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
        api: model
    });
    

    return (
        <section className="text-white">
            <div className="container max-w-4xl flex flex-col mb-[300px]">
                <div className="flex top-0 left-0 items-center">
                    <Link href="/home" className="w-18">
                        <Image src={Logo} alt="Sonar Chatbot" width={500} height={500} />
                    </Link>
                </div>
                <div className="flex top-0 right-0 items-center mb-6">
                    <Link href="/home">
                        <Home className="h-5 w-5 text-gray-300 cursor-pointer hover:text-sky-700 duration-200" />
                    </Link>
                </div>
                {
                    error && (
                        <div className="text-sm text-sky-700 text-center p-2">{error.message}</div>
                    )
                }
                <ScrollArea className="mb-2 h-[500px] rounded-md border-2 p-4 border-white">
                    {messages.map(m => (
                        <div key={m.id} className="flex flex-col">
                            <div className='m-1 whitespace-pre-wrap'>
                                {m.role === 'user' && (
                                    <div className='mb-6 flex gap-3 justify-end'>
                                        <div className='mt-1.5'>
                                            <p className='font-semibold text-right'>You</p>
                                            <div className='mt-1.5 text-sm text-white'>
                                                {m.content}
                                            </div>
                                        </div>
                                        <Avatar>
                                            <AvatarImage src='' />
                                            <AvatarFallback className='text-white bg-slate-500'>U</AvatarFallback>
                                        </Avatar>
                                    </div>
                                )}
                                {m.role === 'assistant' && (
                                    <div className='mb-6 flex gap-3 justify-end'>
                                        <Avatar>
                                            <AvatarImage src='' />
                                            <AvatarFallback className='bg-sky-700 text-white'>
                                                BOT
                                            </AvatarFallback>
                                        </Avatar>
                                        <FormattedMarkdown message={m}></FormattedMarkdown>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </ScrollArea>
                <form onSubmit={handleSubmit} className="relative">
                    <div className="flex">
                        <Select onValueChange={(value) => setModal(value)} required>
                            <SelectTrigger className="w-[180px] mr-2 border-2 border-white">
                                <SelectValue placeholder="Select a botchat:" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="/api/gemini">Sonar BotChat</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input
                            required
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ask me something..."
                            className="placeholder:italic placeholder:text-white-600 border-2 border-white text-white"
                        ></Input>
                        <Button
                            size={"icon"}
                            type="submit"
                            variant={"secondary"}
                            disabled={isLoading}
                            className="absolute right-1 top-1 h-8 w-10"
                        >
                            <SendHorizonalIcon className="h-4 w-4 text-sky-700"></SendHorizonalIcon>
                        </Button>
                    </div>
                </form>
            </div>
        </section >
    );
};