# iOS Proxy Modules & Configs (Shadowrocket, Egern, Quantumult X)

Kho lưu trữ cấu hình và module bẻ khóa / mở khóa tính năng Premium cho các ứng dụng iOS (chủ yếu là **Locket Gold**, Spotify, YouTube, VSCO, Duolingo, v.v.) thông qua kỹ thuật MITM trên các app proxy như **Shadowrocket**, **Surge**, **Egern**, **Quantumult X**.

Tác giả: **Hai Trinh** ([@yheiakadylan](https://github.com/yheiakadylan))  
Repository: [yheiakadylan/locketgold_pre](https://github.com/yheiakadylan/locketgold_pre)

---

## 🚀 Các Module Nổi Bật

### 1. Locket Gold Module (Khuyên dùng)
- **Đường dẫn cài đặt trực tiếp trong Shadowrocket:**  
  `https://raw.githubusercontent.com/yheiakadylan/locketgold_pre/refs/heads/main/modules/yhei_Locket_Gold.sgmodule`
- **Cách dùng:**
  1. Mở **Shadowrocket** > Chuyển đến tab **Cấu Hình (Config)** > chọn **Modules**.
  2. Bấm dấu **+** ở góc trên cùng.
  3. Dán link module trên vào và lưu lại.
  4. Bật HTTPS Decryption (MITM) và cài đặt chứng chỉ CA nếu chưa bật.
  5. Mở ứng dụng Locket và kiểm tra tính năng Gold.

### 2. All In One Module (.sgmodule)
Tổng hợp mở khóa nhiều ứng dụng (Locket, Spotify, YouTube adblock, Camera360, v.v.):  
`https://raw.githubusercontent.com/yheiakadylan/locketgold_pre/refs/heads/main/yhei_All_In_One.sgmodule`

### 3. All In One Config (.conf)
Cấu hình hoàn chỉnh cho Shadowrocket:  
`https://raw.githubusercontent.com/yheiakadylan/locketgold_pre/refs/heads/main/yhei_All_In_One.conf`

### 4. Fake GPS / Location Spoofer (.sgmodule)
`https://raw.githubusercontent.com/yheiakadylan/locketgold_pre/refs/heads/main/modules/yhei_ios-location-spoofer.sgmodule`

---

## 📖 Hướng Dẫn Sử Dụng Chi Tiết

Trang hướng dẫn trực quan với giao diện thân thiện, hình ảnh từng bước có sẵn trong file `index.html`.  
Bạn có thể mở trực tiếp `index.html` trên trình duyệt hoặc bật **GitHub Pages** (Settings > Pages > Source: `main` branch) để có link trang web hướng dẫn trực tuyến.

### Các bước chung:
1. **Bước 1:** Cài đặt ứng dụng **Shadowrocket** trên iPhone từ App Store.
2. **Bước 2:** Bật chứng chỉ CA (Cấu hình > HTTPS Giải mã / MITM > Tạo chứng chỉ mới > Cài đặt chứng chỉ vào máy > Vào Cài đặt iPhone > Cài đặt chung > Giới thiệu > Cài đặt tin cậy chứng chỉ > Bật tin cậy).
3. **Bước 3:** Thêm Module Locket Gold hoặc All In One từ danh sách bên trên.
4. **Bước 4:** Bật VPN Shadowrocket ở màn hình chính và mở app Locket trải nghiệm.

---

## ⚠️ Lưu ý
- Các cấu hình này hoạt động bằng cách sửa đổi HTTP Response từ máy chủ RevenueCat thông qua MITM.
- Nếu không sử dụng nữa, bạn có thể tắt VPN trong Shadowrocket để tiết kiệm pin.
