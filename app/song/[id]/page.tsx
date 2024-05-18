import { notFound } from "next/navigation";
import prisma from "@/app/utils/db";
import { CommentForm } from "@/app/components/CommentForm";
import { Card } from "@/components/ui/card";
import { MessageCircle, Home } from "lucide-react";
import { Separator } from "@/components/ui/seperator";
import Link from "next/link";
import { SongCard } from "@/app/components/SongCard";
import Image from "next/image";

interface iAppProps {
  title: string;
  album: string;
  singer: string;
  artist: string;
  songId: number;
  songList: boolean;
  songListId: string;
  youtubeUrl: string;
  year: number;
  time: string;
}

async function getData(id: number) {
  const data = await prisma.song.findUnique({
    where: {
      id: id,
    },
    select: {
      title: true,
      album: true,
      youtubeString: true,
      imageString: true,
      release: true,
      singer: true,
      artist: true,
      duration: true,
      id: true,
      Comment: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          text: true,
          User: {
            select: {
              image: true,
              name: true,
            },
          },
        },
      },
    },
  });
  if (!data) {
    return notFound();
  }

  const recommendations = await prisma.song.findMany({
    where: {
      OR: [
        { singer: data.singer },
        { album: data.album },
      ],
      NOT: {
        id: id,
      },
    },
    select: {
      title: true,
      album: true,
      singer: true,
      youtubeString: true,
      imageString: true,
      id: true,
      release: true,
      artist: true,
      duration: true,
      SongLists: {
        select: {
          id: true,
        },
      },
    },
    take: 6,
  });

  return { data, recommendations };
}

export default async function DisplaySong({
  params,
}: { params: { id: string } }) {
  const songId = parseInt(params.id, 10);
  const { data, recommendations } = await getData(songId);

  return (
    <div className="max-w-full mx-auto flex justify-center mt-4 mb-5 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1500px] flex flex-col gap-y-5">
        <div className="flex top-0 right-0 mt-4 mr-4">
            <Link href="/home">
                <Home className="text-blue-500 hover:text-white"/>
            </Link>
        </div>
        <Card className="p-4 w-full sm:w-3/4 lg:w-3/5 mx-auto">
          <div className="p-2 w-full">
            <h1 className="font-medium mt-1 text-lg">{data.title}</h1>
            <div className="sm:max-w-[1024px]">
              <div className="line-clamp-3">{data.singer}</div>
              <div className="flex gap-x-2 items-center">
                <p>{data.release}</p>
                <p className="border py-0.5 px-1 border-gray-200 rounded my-2">
                  {data.album}
                </p>
                <p>{data.duration}</p>
              </div>
              <iframe
                src={data.youtubeString}
                height={500}
                className="w-full h-[400px] sm:h-[700px]"
              ></iframe>
            </div>
            <div className="flex gap-x-5 items-center mt-3">
              <div className="flex items-center gap-x-1">
                <MessageCircle className="h-4 w-4 text-muted-foreground" />
                <p className="text-muted-foreground font-medium text-xs">
                  {data.Comment.length} Comments
                </p>
              </div>
            </div>

            <CommentForm songId={songId} />

            <Separator className="my-5" />

            <div className="flex flex-col gap-y-7">
              {data.Comment.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <div className="flex items-center gap-x-3">
                    <img
                      src={
                        item.User?.image
                          ? item.User.image
                          : "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                      }
                      className="w-7 h-7 rounded-full"
                      alt="Avatar of user"
                    />
                    <h3 className="text-sm font-medium">{item.User?.name}</h3>
                  </div>
                  <p className="ml-10 text-secondary-foreground text-sm tracking-wide">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
        <h1 className="text-5xl font-extrabold mt-10 mb-4 text-white">Related Songs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6 gap-6">
          {recommendations.map((song) => (
            <div key={song.id} className="relative h-48">
              <Image
                src={song.imageString}
                alt="song"
                width={500}
                height={400}
                className="rounded-sm absolute w-full h-full object-cover"
              />

              <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                  <Image
                    src={song.imageString}
                    alt="song"
                    width={800}
                    height={800}
                    className="absolute w-full h-full -z-10 rounded-lg object-cover"
                  />

                <SongCard
                    songId={song.id}
                    singer={song.singer}
                    title={song.title}
                    songListId={song.SongLists[0]?.id} 
                    youtubeUrl={song.youtubeString}
                    songList={song.SongLists.length > 0 ? true : false}
                    key={song.id}
                    album={song.album}
                    artist={song.artist}
                    time={song.duration}
                    year={song.release}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
