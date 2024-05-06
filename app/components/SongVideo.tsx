import { Button } from "@/components/ui/button";
import prisma from "../utils/db";
import SongButtons from "./SongButtons";

async function getData() {
  const data = await prisma.song.findFirst({
    select: {
      title: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      artist: true,
      singer: true,
      album: true,
      youtubeString: true,
    },
  });
  return data;
}

export default async function SongVideo() {
  const data = await getData();

  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-start items-center">
      <video
        poster={data?.imageString}
        autoPlay
        loop
        muted
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.singer}</p>
        <div className="flex gap-x-3 mt-4">
          <SongButtons
            album={data?.album as string}
            duration={data?.duration as string}
            id={data?.id as number}
            artist={data?.artist as string}
            singer={data?.singer as string}
            releaseDate={data?.release as number}
            title={data?.title as string}
            youtubeUrl={data?.youtubeString as string}
            key={data?.id}
          />
        </div>
      </div>
    </div>
  );
}