# Hướng dẫn setup môi trường:

## 1. Clone repository về máy: Lấy link của github này và sau đó chọn nơi mình muốn lưu trong máy tính và bật Command Prompt (CMD), dùng lệnh sau:
```bash
git clone https://github.com/JayBao2604/sonar_soflix.git
```
### Lưu ý: 
Bạn phải tải Git về máy tính của bạn, nếu như chưa cài đặt Git thì bạn có thể thực hiện theo [How to Install Git](https://kinsta.com/knowledgebase/install-git/) - hướng dẫn cách cài đặt

## 2. Thêm file môi trường:
- Tạo 1 file tên .env trong local repository
- Nhập vào file .env vừa tạo:

"
DATABASE_URL="postgres://postgres.bcrxqnfmoeygfezttpeo:@JayHacker26@@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres"

AUTH_SECRET=idig9qhu5F5TOYQRn/zPSlv8b+0E9QNcR9+wAR0WJGo=

GITHUB_CLIENT_ID=[GITHUB CLIENT ID CỦA BẠN]
GITHUB_CLIENT_SECRET=[GITHUB CLIENT SECRET CỦA BẠN]

GOOGLE_API_KEY=[GOOGLE API KEY CỦA BẠN]
OPENAI_API_KEY=[OPENAI API KEY CỦA BẠN]
"

Cách tạo app Github và lấy Github Client Id, Github Client Secret: [Github](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authenticating-to-the-rest-api-with-an-oauth-app)
Cách lấy Google API Key và OpenAI API Key:


## 3. Bật Live Server: Tùy vào packet manager mà sử dụng lệnh phù hợp:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Các công cụ hỗ trợ:

## 1. Auth.js
  Auth.js (trước đây là Next Auth) là một thư viện không phụ thuộc vào runtime, dựa trên các API Web tiêu chuẩn và tích hợp sâu với nhiều framework JavaScript hiện đại để cung cấp trải nghiệm xác thực đơn giản dễ bắt đầu, dễ mở rộng, đảm bảo riêng tư và an toàn!
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
# Tính năng của web:
-
-
-
-

# Danh sách thành viên nhóm:
- Trần Gia Bảo - 22520119 (Trưởng nhóm)
- Hoàng Vũ - 22521690 

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Deployment:
on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
