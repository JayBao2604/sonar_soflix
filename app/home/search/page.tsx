import SearchInput from "../../components/SearchInput";
import { Suspense } from "react";
import SongList from "../../components/SongList";
import Image from "next/image";
import Logo from "../../../public/sonar.png";
import Link from "next/link";
import { Home } from "lucide-react";
import { getData } from "./getSearchData";


const SearchPage = async ({
    searchParams,
    }: {
        searchParams?: {
            query?: string;
            userId?: string;
        }; 
    }) => {
        const query = searchParams?.query || " ";  
        const userId = searchParams?.userId || " ";
        const data = await getData(query, userId);
        return (
            <div className="w-full max-w-[2000px] mx-auto flex flex-col items-center justify-center px-5 sm:px-6 py-5 lg:px-8">
                <div className="mb-10">
                    <Link href="/home" className="w-32">
                        <Image className="w-[640px]" src={Logo} alt="Sonar logo" priority />
                    </Link>
                </div>
                <div className="flex top-0 right-0 mb-8">
                    <SearchInput />
                </div>
                <div className="mt-auto max-w-[400px] mb-4 flex h-full w-full">
                </div>
                <div className="w-full max-w-[2000px]">
                    <Suspense key={query} fallback={<div>Loading...</div>}>
                            {data.length > 0 ? (
                                <SongList query={query} userId={userId} />
                            ) : (
                                <div className="flex flex-col items-center justify-center mt-10">
                                    <Image src="/no result.png" alt="No result" width={250} height={250} />
                                    <div className="mt-10 mb-10">No result</div>
                                </div>
                            )}
                    </Suspense>
                </div>
            </div>
        )
};

export default SearchPage;