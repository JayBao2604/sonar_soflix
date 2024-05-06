import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
    async function postData() {
        "use server";
        await prisma.song.createMany({
            data: [
              {
                id: 14,
                imageString: "https://bcrxqnfmoeygfezttpeo.supabase.co/storage/v1/object/public/song%20image/thislove.jpg",
                title: "This Love",
                duration: "3:49",
                artist: "DAVICHI(다비치)",
                singer: "DAVICHI(다비치)",
                release: 2016,
                videoSource: "",
                album: "Descendants of the Sun OST",
                category: "ost",
                youtubeString: "https://www.youtube.com/embed/XyzaMpAVm3s",
              },                                                
            ],
        });
    }

    return (
        <div className="m-5">
            <form action={postData}>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}