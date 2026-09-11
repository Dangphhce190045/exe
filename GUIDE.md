# 📘 Hướng Dẫn Đăng Ký Tên Miền `.id.vn` Miễn Phí, Tạo Mã QR & Deploy Web Tĩnh Lumina Candle

Tài liệu này cung cấp hướng dẫn trọn gói 4 bước để bạn đưa website **Lumina Candle & Crystal** lên internet với tên miền thương hiệu dạng `.id.vn` hoàn toàn miễn phí và tạo mã QR in trên nắp nến thơm.

---

## 1. Đăng Ký Tên Miền `.id.vn` Miễn Phí (0đ/2 năm)

Theo chương trình Chuyển đổi số quốc gia của **Trung tâm Internet Việt Nam (VNNIC)**:
- **Đối tượng áp dụng**: Công dân Việt Nam trong độ tuổi từ **18 – 23**.
- **Ưu đãi**: 0đ phí đăng ký ban đầu & 0đ phí duy trì trong **2 năm đầu tiên**.

### Các bước thực hiện:
1. Truy cập vào trang web của một trong các **Nhà đăng ký tên miền chính thức của VNNIC**:
   - 🌐 **Tentenn.vn** (Khuyên dùng - duyệt tự động cực nhanh)
   - 🌐 **Matbao.net**
   - 🌐 **iNET.vn**
   - 🌐 **PAVietnam.vn**
2. Tìm kiếm tên miền theo tên thương hiệu của bạn, ví dụ: `luminacandle.id.vn` hoặc `nenthombagiac.id.vn`.
3. Chọn gói **"Đăng ký tên miền .id.vn miễn phí cho giới trẻ"**.
4. Tải ảnh chụp mặt trước & mặt sau của **CCCD chính chủ** để hệ thống eKYC xác thực độ tuổi (duyệt tự động trong 5 – 15 phút).
5. Sau khi hoàn tất, bạn sẽ được cấp quyền truy cập vào **Trang quản trị DNS tên miền** của nhà đăng ký.

---

## 2. Tạo Mã QR Để In Lên Tem Nắp Hũ Nến

Mã nguồn trang web Lumina Candle đã được **tích hợp sẵn Công Cụ Tạo QR Canvas HD** ở cuối trang chủ:

1. Mở trang chủ `index.html` của bạn (hoặc truy cập trang web sau khi deploy).
2. Cuộn xuống phần **"📱 CÔNG CỤ TẠO MÃ QR NẮP NẾN"**.
3. Điền tên miền `.id.vn` vừa đăng ký (ví dụ: `luminacandle.id.vn`).
4. Chọn loại đá tương ứng cho sản phẩm (ví dụ: `Thạch Anh Hồng`).
5. Nhấn **"Tạo Mã QR"** -> Nhấn **"Tải Ảnh PNG HD"**.
6. Sử dụng file ảnh PNG thu được gửi cho đơn vị in ấn tem dán nắp hũ nến/nắp hộp.

**Các đường dẫn QR chuẩn:**
- Thạch Anh Hồng: `https://tenbrandcuaban.id.vn/da/thach-anh-hong.html`
- Thạch Anh Tím: `https://tenbrandcuaban.id.vn/da/thach-anh-tim.html`
- Đá Mắt Hổ: `https://tenbrandcuaban.id.vn/da/mat-ho.html`
- Thạch Anh Trắng: `https://tenbrandcuaban.id.vn/da/thach-anh-trang.html`
- Đá Mặt Trăng: `https://tenbrandcuaban.id.vn/da/da-mat-trang.html`
- Thạch Anh Tóc Vàng: `https://tenbrandcuaban.id.vn/da/thach-anh-toc-vang.html`

---

## 3. Deploy Mã Nguồn Lên Hosting Tĩnh Miễn Phí (Vercel)

Vercel là nền tảng Hosting web tĩnh hàng đầu thế giới, miễn phí 100%, có SSL (HTTPS) tự động và tốc độ truy cập cực nhanh tại Việt Nam.

### Bước 3.1: Đẩy mã nguồn lên GitHub
1. Tạo một tài khoản trên [GitHub.com](https://github.com).
2. Tạo một Repository mới đặt tên là `lumina-candle`.
3. Đẩy (Upload) toàn bộ thư mục code `lumina-candle` lên repository đó.

### Bước 3.2: Deploy dự án trên Vercel
1. Đăng nhập vào [Vercel.com](https://vercel.com) bằng tài khoản GitHub vừa tạo.
2. Tại màn hình Dashboard, chọn **"Add New"** ➔ **"Project"**.
3. Chọn Repository `lumina-candle` và nhấn **"Import"**.
4. Giữ nguyên các thông số mặc định và nhấn **"Deploy"**.
5. Sau 30 giây, Vercel sẽ cấp cho bạn một đường dẫn chạy thử dạng `lumina-candle.vercel.app`.

---

## 4. Gắn Tên Miền `.id.vn` Vào Vercel

1. Trong giao diện dự án trên **Vercel**, truy cập: **Settings** ➔ **Domains**.
2. Nhập tên miền chính thức của bạn (VD: `luminacandle.id.vn`) và nhấn **Add**.
3. Vercel sẽ hiển thị thông số bản ghi DNS mà bạn cần cấu hình:

| Loại bản ghi (Type) | Tên host (Name) | Giá trị (Value / Points to) |
| :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

4. Đăng nhập vào trang quản lý tên miền (Tentenn / Mắt Bão / iNET).
5. Vào phần **Cấu hình DNS / Bản ghi DNS** và thêm 2 bản ghi với thông số trên.
6. Đợi 5 – 10 phút để hệ thống cập nhật. Khi truy cập `https://tenbrandcuaban.id.vn`, trang web nến thơm chữa lành của bạn sẽ chính thức hoạt động!

---
*Chúc bạn kinh doanh nến thơm giấu đá thành công rực rỡ!*
