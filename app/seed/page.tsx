import { Button } from "@/components/ui/button";
import prisma from "../utils/db";

export default function SeedDatabase() {
    async function postData() {
        "use server";
        await prisma.song.createMany({
            data: [
                {
                    id: 46,
                    imageString: "https://i.ytimg.com/vi/abPmZCZZrFA/hqdefault.jpg",
                    title: "ĐỪNG LÀM TRÁI TIM ANH ĐAU",
                    duration: "5:26",
                    artist: "Sơn Tùng M-TP",
                    singer: "Sơn Tùng M-TP",
                    release: 2024,
                    videoSource: "https://bcrxqnfmoeygfezttpeo.supabase.co/storage/v1/object/public/video/dunglamtraitimanhdau.mp4",
                    album: "ĐỪNG LÀM TRÁI TIM ANH ĐAU",
                    category: "music",
                    youtubeString: "https://www.youtube.com/embed/abPmZCZZrFA",
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