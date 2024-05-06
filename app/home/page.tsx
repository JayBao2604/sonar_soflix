import NavBar from "../components/NavBar";
import SongVideo from "../components/SongVideo";
import PopularSong from "../components/PopularSong";
import ThisIsTaylorSwift from "../components/ThisIsTaylorSwift";
import NhacCuaSep from "../components/NhacCuaSep";
import KPop from "../components/KPop";

export default function HomePage() {
    return (
        <div className="p-5 lg:p-0">
            <SongVideo />
            <h1 className="text-5xl font-bold text-white">Popular Songs in Vietnam</h1>
            <PopularSong />
            <h1 className="text-5xl font-bold text-white">K-Pop ON!</h1>
            <KPop />
            <h1 className="text-5xl font-bold text-white">This is Taylor Swift</h1>
            <ThisIsTaylorSwift />
            <h1 className="text-5xl font-bold text-white">Nhạc Của Sếp Tùng</h1>
            <NhacCuaSep />
        </div>
    )
}