import SearchInput from "../components/SearchInput";
import { Suspense } from "react";
import SongList from "../components/SongList";
import Image from "next/image";
import Logo from "../../public/sonar.png";
import Link from "next/link";
import { getData } from "../lib/action";
import { Home } from "lucide-react";

const SearchPage = async ({
    searchParams,
    }: {
        searchParams?: {
            query?: string;
        };
    }) => {
        const query = searchParams?.query || "";  
        const data = await getData(query);
    return (
        <div className="w-full max-w-[2000px] mx-auto flex flex-col items-center justify-center px-5 sm:px-6 py-5 lg:px-8">
            <div className="mb-10">
                <Link href="/home" className="w-32">
                    <Image className="w-[640px]" src={Logo} alt="Sonar logo" priority />
                </Link>
            </div>
            <div className="flex">
                <div className="flex top-0 right-0 mb-4">
                    <Link href="/home" className="w-32">
                        <Home className="w-8 h-8 text-sky-700 hover:text-white" />
                    </Link>
                </div>
                <div className="mt-auto max-w-[800px] mb-4 flex h-full w-[500px]">
                    <SearchInput />
                </div>
            </div>
            <div className="w-full max-w-[2000px]">
                <Suspense key={query} fallback={<div>Loading...</div>}>
                        {data.length > 0 ? (
                            <SongList query={query} />
                        ) : (
                            <div className="flex items-center justify-center mt-10">No result</div>
                        )}
                </Suspense>
            </div>
        </div>
    )
};

export default SearchPage;