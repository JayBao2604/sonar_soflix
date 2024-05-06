import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});
interface HeaderProps {
    label: string;
    text: string;
}

export const Header = ({ label, text }: HeaderProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-start justify-start">
            <h1 className={cn(
            "text-3xl font-semibold text-slate-400", font.className,   
            )}
                >
                {text}
            </h1>
            <p className="text-slate-400 text-sm">
                {label}
            </p>
        </div>
    )
}


