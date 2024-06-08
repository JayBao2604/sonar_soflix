# 1. Hướng dẫn setup môi trường:

## 1. Clone repository về máy: Lấy link của github này và sau đó chọn nơi mình muốn lưu trong máy tính và bật Command Prompt (CMD), dùng lệnh sau:
```bash
git clone https://github.com/JayBao2604/sonar_soflix.git
```
### Lưu ý: 
Bạn phải tải Git về máy tính của bạn, nếu như chưa cài đặt Git thì bạn có thể thực hiện theo [How to Install Git](https://kinsta.com/knowledgebase/install-git/) - hướng dẫn cách cài đặt

## 2. Chuyển directory của command prompt vào thư mục vừa được git clone, dùng lệnh sau:
```bash
cd ./sonar_soflix
```

## 3. Thêm file môi trường:
- Tạo 1 file tên .env trong local repository
- Nhập vào file .env vừa tạo:


```bash
DATABASE_URL="postgres://postgres.bcrxqnfmoeygfezttpeo:@JayHacker26@@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"

AUTH_SECRET=idig9qhu5F5TOYQRn/zPSlv8b+0E9QNcR9+wAR0WJGo=

GITHUB_CLIENT_ID=[GITHUB CLIENT ID CỦA BẠN]
GITHUB_CLIENT_SECRET=[GITHUB CLIENT SECRET CỦA BẠN]

GOOGLE_API_KEY=[GOOGLE API KEY CỦA BẠN]
OPENAI_API_KEY=[OPENAI API KEY CỦA BẠN]
```


- Cách tạo app Github và lấy Github Client Id, Github Client Secret: [Github](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app)

- Cách lấy Google API Key: [Get Google API Key](https://support.haravan.com/support/solutions/articles/42000087477-c%C3%A1ch-l%E1%BA%A5y-m%C3%A3-google-api-key)

- Cách lấy OpenAI API Key: [Get OpenAI API Key](https://www.maisieai.com/help/how-to-get-an-openai-api-key-for-chatgpt)

## 4. Tải các package cần thiết: Tuỳ vào packet manager mà sử dụng lệnh phù hợp:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## 5. Bật Live Server: Tùy vào packet manager mà sử dụng lệnh phù hợp:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Mở [http://localhost:3000](http://localhost:3000) với trình duyệt bạn muốn và xem kết quả.

# 2. Các công cụ hỗ trợ:

## 1. Auth.js
  Auth.js (trước đây là Next Auth) là một thư viện không phụ thuộc vào runtime, dựa trên các API Web tiêu chuẩn và tích hợp sâu với nhiều framework JavaScript hiện đại để cung cấp trải nghiệm xác thực đơn giản dễ bắt đầu, dễ mở rộng, đảm bảo riêng tư và an toàn!

  ![auth](https://github.com/JayBao2604/sonar_soflix/assets/127290366/28384f0d-823e-4011-8df4-c46c3436099a)

  ### Các phương pháp xác thực chính
  - OAuth: Xác thực bằng tài khoản các Provider như Google, Github, ...
  - Credentials: Xác thực bằng tài khoản và mật khẩu.
    
  ### Một số lợi ích mang lại:
  - Hỗ trợ nhiều Provider lớn và phổ biến với OAuth.
  - Hỗ trợ kết nối với nhiều loại Database khác nhau, dễ dàng tích hợp với Prisma và Supabase.
  - Dễ dàng lập trình và chỉnh sửa.
  - Đem lại mức độ bảo mật cao, đảm bảo riêng tư và an toàn tuyệt đối.

  ### Tham khảo tài liệu:
  Để biết thêm thông tin chi tiết, truy vập vào [AuthJS](https://authjs.dev/) - Trang web chính của AuthJS.

## 2. Prisma:
  Prisma là một ORM (Object-Relational Mapping) hiện đại dành cho Node.js và Typescript, là một hệ sinh thái hoàn chỉnh giúp bạn quản lý dữ liệu một cách hiệu quả và tin cậy. Nó giúp bạn làm việc với cơ sở dữ liệu một cách dễ dàng hơn thông qua việc cung cấp các công cụ và API trực quan.
  
<img width="800" alt="prisma" src="https://github.com/JayBao2604/sonar_soflix/assets/127290366/e125882e-db54-4ac0-81a7-5923ee2e3733">

  ### Tính năng chính:
  - Data Modeling: Sử dụng schema.prisma để định nghĩa cấu trúc dữ liệu
  - Migrations: Tạo và quản lý các migrations để cập nhật cơ sở dữ liệu
  - Type Security: Cung cấp tự động các kiểu TypeScript cho các mô hình dữ liệu
  - Query Building: Hỗ trợ các câu truy vấn SQL thông qua API dễ sử dụng, tạo các câu truy vấn CRUD (Create, Read, Update, Delete)
  - Database Support: Hỗ trợ nhiều loại cơ sở dữ liệu như PostgreSQL, MySQL, SQLite, SQL Server, MongoDB,...
  - Prisma Studio: Giao diện người dùng trực quan giúp quản lý và tương tác với dữ liệu trong cơ sở dữ liệu.

  ### Một số lợi ích mang lại:
  - An toàn và đáng tin cậy: Prisma giúp tránh các lỗi do sai sót về kiểu dữ liệu và cấu trúc truy vấn
  - Tích hợp dễ dàng: Prisma hoạt động tốt với nhiều hệ quản trị cơ sở dữ liệu và tích hợp dễ dàng với các công cụ phát triển khác.
  - Năng suất cao hơn: Với các công cụ tự động và giao diện thân thiện, bạn có thể tập trung vào việc phát triển tính năng thay vì quản lý cơ sở dữ liệu.

  ### Tham khảo tài liệu:
  Để biết thêm nhiều thông tin chi tiết, các bạn có thể vào [Prisma](https://www.prisma.io/) - Trang web Prisma

## 3. Supabase:
  Supabase là một nền tảng mã nguồn mở được thiết kế để cung cấp các dịch vụ backend cho các ứng dụng web và di động hay còn gọi là nền tảng backend-as-a-service (Baas). Nó được biết đến như một giải pháp thay thế mã nguồn mở cho Firebase, cung cấp các tính năng tương tự nhưng với sự linh hoạt hơn và khả năng tùy chỉnh cao hơn. Supabase xây dựng dựa trên PostgreSQL, một trong những hệ quản trị cơ sở dữ liệu quan hệ mạnh mẽ và phổ biến nhất, và cung cấp nhiều tính năng để phát triển ứng dụng một cách nhanh chóng và hiệu quả.

  <img width="992" alt="supabase" src="https://github.com/JayBao2604/sonar_soflix/assets/127290366/42f930fd-09ec-42c9-ae1e-fc84e6364ea9">

  ### Một số điểm nổi bật:
  - Cơ sở dữ liệu PostgreSQL: Sử dụng PostgreSQL làm cơ sở dữ liệu nền tảng, cung cấp đầy đủ các tính năng mạnh mẽ của PostgreSQL như JSONB, full-text search, và các extension như PostGIS.
  - API tự động: Tự động tạo ra RESTful API cho cơ sở dữ liệu của bạn dựa trên các bảng và schema bạn đã thiết lập, giúp bạn dễ dàng thao tác dữ liệu thông qua các endpoint API mà không cần viết mã backend.
  - Realtime: Cung cấp tính năng realtime, cho phép bạn theo dõi các thay đổi trong cơ sở dữ liệu và cập nhật ứng dụng của mình ngay lập tức khi có thay đổi xảy ra.
  - Authentication và Authorization: Cung cấp các dịch vụ xác thực và phân quyền, hỗ trợ nhiều phương thức đăng nhập như email/password, OAuth (Google, GitHub, v.v.), giúp quản lý người dùng và bảo mật ứng dụng dễ dàng hơn.
  - Storage: Cung cấp dịch vụ lưu trữ đối tượng (object storage), cho phép bạn lưu trữ và quản lý các tệp tin như hình ảnh, video, và tài liệu một cách an toàn và hiệu quả.
  - Mã nguồn mở: Cho phép các nhà phát triển đóng góp, tùy chỉnh và kiểm tra mã nguồn, tạo sự minh bạch và linh hoạt trong phát triển.

  ### Lợi ích:
  - Triển khai nhanh chóng mà không cần cấu hình phức tạp.
  - Tích hợp nhiều tính năng trong một nền tảng
  - Mã nguồn mở và minh bạch

  ### Tham khảo tài liệu:
  Để biết thêm nhiều thông tin chi tiết, các bạn có thể vào [Supabase](https://supabase.com/) - Trang web Supabase
  
## 4. Shadcn/UI:
  Shadcn/UI là một thư viện giao diện người dùng (UI) xây dựng trên React, cung cấp các thành phần UI có thể tái sử dụng. 

  ![shadcn](https://github.com/JayBao2604/sonar_soflix/assets/127290366/b457ef75-ab5f-4d86-9dbc-8a671696e261)

  ### Tính năng chính:
  - Component Library: Cung cấp nhiều thành phần UI như buttons, forms, modals, v.v.
  - Customizable: Dễ dàng tùy biến theo nhu cầu của dự án.
  - Responsive Design: Hỗ trợ thiết kế responsive cho nhiều thiết bị.
  - Accessibility: Tuân thủ các tiêu chuẩn về accessibility.

  ### Lợi ích:
  - Tăng tốc độ phát triển front-end.
  - Dễ dàng tích hợp và mở rộng.
  - Thiết kết nhất quán hơn và hiện đại hơn.

  ### Tham khảo tài liệu:
  Để biết thêm nhiều thông tin chi tiết, các bạn có thể vào [Shadcn/UI](https://ui.shadcn.com/) - Trang web Shadcn/UI
## 5. Tailwind CSS:
  Taiwind CSS là một framework CSS mã nguồn mở tiện dụng giúp bạn xây dựng nhanh chóng các giao diện người dùng mà không cần viết nhiều CSS thủ công.

  ![tailwind](https://github.com/JayBao2604/sonar_soflix/assets/127290366/89389acd-9983-4bdb-a086-e83fa2e118aa)

  ### Tính năng chính:
  - Utility-First Fundamentals: Sử dụng các lớp tiện ích để tạo kiểu trực tiếp trong HTML
  - Responsive Design: Sử dụng các biến thể tiện ích đáp ứng để xây dựng giao diện người dùng thích ứng.
  - Dark Mode: Tối ưu hóa trang web của bạn cho chế độ tối trực tiếp trong HTML bằng công cụ sửa đổi chế độ tối.
  - Reusing Styles: Quản lý sự trùng lặp và tạo ra các bản tóm tắt có thể tái sử dụng.
  - Adding Custom Styles: Tùy chỉnh framework để phù hợp với thương hiệu của mình và mở rộng nó với phong cách tùy chỉnh của riêng mình.
  - Plugin System: Hỗ trợ các plugin để thêm các chức năng và thành phần tùy chỉnh.

  ### Lợi ích:
  - Giảm bớt việc viết CSS thủ công.
  - Thiết kế nhất quán và có thể mở rộng.
  - Tạo cho riêng mình thương hiệu.
  - Hỗ trợ nhiều tính năng giúp trang web thêm sinh động, phong phú.

  ### Tham khảo tài liệu:
  Để biết thêm nhiều thông tin chi tiết, các bạn có thể vào [Tailwind CSS](https://tailwindcss.com/) - Trang web Tailwind CSS
  
# 3. Tính năng của web:
- Thưởng thức nhiều thể loại âm nhạc khác nhau như: Pop, OST, Playlist, Postcast,...
- Trải nghiệm cảm giác nghe nhạc và xem video dựng nên từ bài hát đó
- Có riêng cho mình danh sách yêu thích để có thể nghe lại
- Sử dụng Bot Chat để cùng nhau trò chuyện
- Dùng công cụ tìm kiếm để tìm thấy bài hát mình cần nghe và xem
- Có thể like hoặc dislike các music video theo cảm nhận của mình
- Cùng nhau bình luận các music video để đưa ra cảm xúc của mình
- Trong phần profile, có thể đổi tên hoặc ảnh đại diện theo ý muốn
- Có danh sách Top Rating dựa vào số lượt like trong các video âm nhạc và sẽ cập nhật hằng ngày
- Có thể đăng ký tài khoản dựa vào tài khoản Github
- Mỗi khi xem một video âm nhạc sẽ có những đề xuất bài hát liên quan đến video đó ở sau phần Comment

# 4. Danh sách thành viên nhóm:
| Họ và tên                   | MSSV       | Chức vụ     |
|-----------------------------|------------|-------------|
| Trần Gia Bảo                | 22520119   | Trưởng nhóm |
| Hoàng Vũ                    | 22521690   | Thành viên  |


# 5. Deployment:
Web của nhóm mình được deploy trên Vercel - là một nền tảng tiên tiến dành cho việc triển khai và quản lý các ứng dụng Web, đặc biệt nổi bật với các dự án tĩnh và ứng dụng xây dựng bằng Next.js

![vercel](https://github.com/JayBao2604/sonar_soflix/assets/127290366/b0cef0bf-3676-4205-bea3-bf30d71ca57b)

## Các tính năng nổi bật:
### 1. Dễ dàng tích hợp với Github, GitLab và Bitbucket: 
Vercel cho phép tích hợp trực tiếp với các kho lưu trữ mã nguồn (repositories) trên GitHub, GitLab, và Bitbucket. Mỗi lần bạn push mã nguồn lên, Vercel sẽ tự động xây dựng và triển khai ứng dụng của bạn.

### 2. Tối ưu hóa hiệu suất:
- Vercel sử dụng CDN (Content Delivery Network) toàn cầu để phân phối nội dung, giúp tăng tốc độ tải trang cho người dùng ở khắp nơi trên thế giới.
- Hỗ trợ caching và revalidation để giảm thời gian tải lại các trang.

### 3. Hỗ trợ nhiều framework:
Vercel hỗ trợ nhiều framework phổ biến như Next.js, React, Vue.js, Angular, Svelte, và hơn thế nữa. Đặc biệt, Vercel là nhà phát triển của Next.js nên hỗ trợ rất mạnh mẽ cho framework này.

### 4. Triển khai serverless:
Vercel hỗ trợ các chức năng serverless, cho phép bạn chạy mã phía server mà không cần phải quản lý server.

### 5. Tích hợp với các dịch vụ bên thứ ba:
Vercel cung cấp nhiều tích hợp với các dịch vụ bên thứ ba như Sentry, Datadog, và nhiều dịch vụ khác để theo dõi và quản lý ứng dụng.

### 6. Custom Domain:
Dễ dàng cấu hình tên miền tùy chỉnh cho ứng dụng của mình trên Vercel.\

## Lợi ích mang lại:
- Triển khai nhanh chóng và đơn giản: triển khai trên Vercel chỉ mất vài phút và không đòi hỏi kiến thức sâu về DevOps
- Tối ưu hóa SEO và hiệu suất: tự động tối ưu hóa các trang web để tăng tốc độ tải trang và cải thiện SEO
- Bảo mật và độ uy tín cao: Vercel đảm bảo rằng các ứng dụng được triển khai luôn sẵn sàng và bảo mật cao

## Cách triển khai ứng dụng:
### 1. Đăng ký và đăng nhập vào Vercel:
Truy cập vào trang web [Vercel](https://vercel.com/) và đăng ký tài khoản hoặc đăng nhập nếu có tài khoản.
### 2. Kết nối với repository của bạn:
Bạn có thể kết nối Vercel với GitHub, GitLab, hoặc Bitbucket của bạn.

### 3. Chọn repository để triển khai:
Vercel sẽ hiển thị danh sách các repository của bạn. Chọn repository chứa mã nguồn của ứng dụng bạn muốn triển khai.

### 4. Cấu hình dự án:
Bạn có thể cần cấu hình một số thiết lập cơ bản như tên dự án, framework sử dụng, và các biến môi trường (nếu có).

### 5. Triển khai ứng dụng:
Sau khi cấu hình xong, bạn chỉ cần nhấn nút "Deploy". Vercel sẽ tự động xây dựng và triển khai ứng dụng của bạn.

### 6. Theo dõi và quản lý triển khai:
Sau khi triển khai, bạn có thể theo dõi trạng thái triển khai, kiểm tra log, và quản lý các phiên bản triển khai trong bảng điều khiển của Vercel.

# 6. Hình chụp các tiêu chí cộng điểm:
## 1. Video Seminar:
![Screenshot 2024-06-01 191421](https://github.com/JayBao2604/sonar_soflix/assets/127290366/275d839b-da0b-48ab-ad3e-bfee5894409a)

## 2. Google Page Speed và SEO Test:
### Đối với máy tính:
![Screenshot 2024-06-01 174905](https://github.com/JayBao2604/sonar_soflix/assets/127290366/577fc252-72a2-4a38-9c6d-04e00522d7e1)

### Đối với di động:
![Screenshot 2024-06-01 175332](https://github.com/JayBao2604/sonar_soflix/assets/127290366/99e0ec23-4f41-4dd1-9476-0e671cc41a92)

# 7. Learn More

Để tìm hiểu thêm về Next.js, hãy xem các tài nguyên sau:

- [Next.js Documentation](https://nextjs.org/docs) - tìm hiểu về các tính năng và API của Next.js.
- [Learn Next.js](https://nextjs.org/learn) - hướng dẫn Next.js mang tính tương tác.

Bạn có thể kiếm tra [the Next.js GitHub repository](https://github.com/vercel/next.js/) - phản hồi và đóng góp của bạn đều được chào đón

