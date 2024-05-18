import Image from 'next/image';
import Music from '../../public/musical-note-symbol-svgrepo-com.png';
import Phone from '../../public/musical-note-on-phone-screen-svgrepo-com.png';
import Lib from '../../public/music-library-svgrepo-com.png';
import robot from '../../public/robot-svgrepo-com.png';
import list from '../../public/list-heart-svgrepo-com.png';
import Comment from '../../public/comment-text-svgrepo-com.png';

export default function HomePage() {
    return (
        <section className="bg-gray-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Enjoy music video now</h2>

      <p className="mt-4 text-gray-300">
        Thưởng thức những bản nhạc hay nhất, những video âm nhạc đỉnh cao, những ca khúc mới nhất
        và nhiều cảm giác thú vị cho bạn. Trải nghiệm nhiều thể loại âm nhạc khác nhau.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
        <Image src={Music} alt="music" className="w-10 h-10" />

        <h2 className="mt-4 text-xl font-bold text-white">Music Video</h2>

        <p className="mt-1 text-sm text-gray-300">
          Trải nghiệm cảm giác nghe nhạc và xem video. Tận hưởng hết mình.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
        <Image src={Lib} alt="lib" className="w-10 h-10" />

        <h2 className="mt-4 text-xl font-bold text-white">Thưởng thức nhiều thể loại</h2>

        <p className="mt-1 text-sm text-gray-300">
          Cung cấp cho bạn nhiều thể loại khác nhau như Pop, OST, Postcast,...
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
        <Image src={Phone} alt="phone" className="w-10 h-10" />

        <h2 className="mt-4 text-xl font-bold text-white">Ứng dụng tốt trên nhiều loại thiết bị</h2>

        <p className="mt-1 text-sm text-gray-300">
          Sử dụng được trên nhiều loại thiết bị như điện thoại, máy tính bảng, máy tính cá nhân.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
        <Image src={robot} alt="robot" className="w-10 h-10" />

        <h2 className="mt-4 text-xl font-bold text-white">Trò chuyện cùng Bot Chat</h2>

        <p className="mt-1 text-sm text-gray-300">
          Đưa những đề xuất theo yêu cầu yêu thích của bạn. Tạo thêm nhiều trải nghiệm mới.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
        <Image src={list} alt="list" className="w-10 h-10" />

        <h2 className="mt-4 text-xl font-bold text-white">Danh sách yêu thích</h2>

        <p className="mt-1 text-sm text-gray-300">
          Có riêng cho mình danh sách những bài hát yêu thích nhất. Lưu lại và nghe bất cứ lúc nào.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href="#"
      >
        <Image src={Comment} alt="comment" className="w-10 h-10" />

        <h2 className="mt-4 text-xl font-bold text-white">Cùng nhau thảo luận về video bài hát</h2>

        <p className="mt-1 text-sm text-gray-300">
          Thảo luận với mọi người về video bài hát, cảm nhận và chia sẻ cảm xúc của bạn.
        </p>
      </a>

    </div>

    <div className="mt-12 text-center">
      <a
        href="/check-session"
        className="inline-block rounded bg-sky-200 px-12 py-3 text-lg font-medium text-black transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started
      </a>
    </div>
  </div>
</section>
    )
}