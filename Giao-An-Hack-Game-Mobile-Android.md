# Giáo Án Hack Game Mobile Android — 16 Tuần

> Nhánh Android của lộ trình: từ Java, adb, APK, smali đến ARM64, Frida, IL2CPP và mod menu native.
> Mục tiêu cuối khóa: tự làm một APK mod có menu bật/tắt cho **game offline tự build hoặc open-source**, chạy ổn trên máy Android thật.
> Tài liệu này thay thế nhánh PC (tuần 6–10 của lộ trình 16 tuần cũ) khi mục tiêu của bạn là mod game mobile.

---

## Mục lục

1. Mục tiêu và giới hạn — đọc trước khi bắt đầu
2. Lộ trình tổng quan
3. Chuẩn bị môi trường trước khi bắt đầu
4. Cách học mỗi tuần
5. Giáo án chi tiết tuần 1
6. Giáo án tóm tắt tuần 2–16
7. Code mẫu các tuần
8. Giải thích sâu: APK, DEX và smali
9. Giải thích sâu: ARM64
10. Giải thích sâu: Unity IL2CPP
11. Verify: bài kiểm tra thật
12. Tài nguyên và quy tắc

---

## Mục tiêu và giới hạn — đọc trước khi bắt đầu

### Sản phẩm cuối khóa

Một APK mod cho **app/game do bạn tự build hoặc game open-source**, có:

- một menu nổi bật/tắt được ít nhất 3 tính năng;
- chạy trên máy Android thật, arm64, không crash khi bật/tắt liên tục;
- README ghi rõ game nào, phiên bản nào, offset nào, cách build, giới hạn đã biết.

Đây là sản phẩm để **chứng minh kỹ năng**, không phải để mở site phân phối APK của game thương mại.

### Ba giới hạn phải chấp nhận

1. **Game online server-authoritative thì không mod được tiền/tài nguyên.** Server giữ dữ liệu, client chỉ hiển thị. Bạn có sửa client thì server vẫn trả về số cũ, hoặc ban tài khoản. Phần lớn mod kiểu "unlimited money" chỉ tồn tại ở game offline hoặc game để dữ liệu trên máy.
2. **Không phải game nào cũng đáng đánh.** Game có packer, pairip, kiểm tra toàn vẹn, metadata IL2CPP mã hóa sẽ chặn bạn ở tầng protection — không phải tầng code. Gặp loại đó thì đổi mục tiêu, đừng đốt 3 tuần.
3. **Không có đường tắt qua tuần 1–5.** Bộ nhớ, con trỏ, asm, debug là kiến thức chung. Nhảy thẳng vào `apktool` chỉ tạo ra người biết gõ lệnh, không sửa được lỗi khi game crash.

### An toàn và pháp lý

- Chỉ mod app **bạn tự viết**, app **open-source** (F-Droid, GitHub), hoặc game offline bạn sở hữu — và chỉ để học trên máy mình.
- **Không phân phối APK đã sửa của game thương mại.** Đó là phân phối phần mềm vi phạm bản quyền, có thể bị gỡ, bị kiện hoặc bị xử lý hành chính tùy mức độ. Site kiểu gamemodx sống trong vùng xám và thường xuyên bị DMCA.
- **Không dùng kỹ thuật trong đây để** gian lận game PvP online, vượt qua thanh toán thật, đánh cắp tài khoản, hoặc né anti-cheat để bán dịch vụ.
- Dùng **máy lab**: máy Android cũ, không đăng nhập tài khoản ngân hàng, không dùng SIM chính. Cài lại máy sau mỗi đợt thử nghiệm lớn.
- Tải tool từ nguồn chính thức. File APK/tool từ site lạ là vector malware phổ biến nhất trong giới mod game.

---

## Lộ trình tổng quan

| Tuần | Nội dung | Trọng số |
|------|----------|----------|
| 1 | C, bộ nhớ, con trỏ + Java + Android app đầu tiên | 7% |
| 2 | Java OOP, Android app anatomy, NDK/JNI | 6% |
| 3 | Bộ nhớ Android, GameGuardian, static vs dynamic | 5% |
| 4 | Reverse engineering: Ghidra, x86 và ARM64 | 6% |
| 5 | Giải phẫu APK: apktool, jadx, dex, manifest, ký | 7% |
| 6 | Smali: đọc và patch tầng Java | 8% |
| 7 | Split APK, AAB, OBB, pipeline build mod | 5% |
| 8 | ARM64: đọc và patch `.so` | 9% |
| 9 | Frida: hook Java và native | 8% |
| 10 | Unity IL2CPP: dump metadata, offset, hook | 10% |
| 11 | Mod menu native: NDK, inject, overlay, hook | 10% |
| 12 | Thiết kế feature: tiền, máu, tốc độ, unlock | 6% |
| 13 | Anti-tamper, packer, test matrix | 5% |
| 14 | Ổn định, crash, offset theo phiên bản | 3% |
| 15 | Project: spec, khung, một feature end-to-end | 3% |
| 16 | Project: hoàn thiện, test, README | 2% |

**Về trọng số:** đây là phân bổ sức, không phải điểm. Ba tuần nặng nhất là **10, 11, 8** — mỗi tuần có thể kéo dài gấp rưỡi. Tuần 7 và 14 nhẹ về lý thuyết nhưng nhiều việc tay chân.

**Về thời gian:** 16 tuần × 12–15h là **190–240 giờ**. Thực tế phần lớn người đi hết trong **5–7 tháng**, vì tuần 10–11 phụ thuộc vào việc bạn có tìm được app mẫu phù hợp hay không.

**Hai lộ trình song song:** tài liệu này là **nhánh Android**. Nhánh PC (trainer, ESP, overlay) nằm ở tài liệu 16 tuần chính. **Tuần 1–5 của hai nhánh song song về độ khó nhưng khác nội dung** — nhánh PC dùng Cheat Engine/x64dbg/crackme, nhánh này dùng Android/GameGuardian/Ghidra ARM64. Chọn một nhánh và đi hết; đừng học cả hai cùng lúc, và đừng lấy bài nhánh này thay bài nhánh kia.

---

## Chuẩn bị môi trường trước khi bắt đầu

### Phần cứng

| Thứ | Mức tối thiểu | Khuyến nghị |
|-----|---------------|-------------|
| PC | 8 GB RAM, 20 GB trống | 16 GB RAM, SSD, 50 GB trống |
| Điện thoại Android | Android 9+, arm64 | Android 12+, arm64, **đã root** hoặc máy phụ |
| Cáp | Cáp dữ liệu tốt | Cáp ngắn, có ferrite |

Emulator chỉ để dựng UI và chạy thử nhanh. **Native lib của game thật gần như luôn là `arm64-v8a`**; emulator x86_64 chạy qua lớp dịch nên hook lệch, offset lệch, đừng dùng để kết luận.

### Cài đặt

- **Android Studio** (kèm SDK, platform-tools, emulator) + **NDK** + **CMake**.
- **JDK 17** (Android Studio đã kèm; kiểm tra `java -version`).
- **adb** trong PATH: `adb version`.
- **apktool**, **jadx-gui**, **apksigner**, **zipalign**, **bundletool**.
- **Ghidra** (chọn kiến trúc AARCH64 khi import).
- **Frida** trên PC + `frida-server` đúng kiến trúc trên máy.
- **GameGuardian** trên máy root hoặc app virtual space.
- **Il2CppDumper** (bản release mới nhất).
- **scrcpy** để nhìn màn hình điện thoại trên PC.

### Cấu trúc thư mục lab

```text
lab/
  apps/          # APK gốc, APK đã mod (mỗi phiên bản một thư mục)
  tools/         # apktool, jadx, frida-server, Il2CppDumper
  projects/      # app tự build (wallet, unity sample)
  notes/         # nhật ký: ngày, app, phiên bản, ABI, offset, lỗi
  keystore/      # khóa ký riêng cho lab — không dùng khóa thật
```

### Kiểm tra môi trường

Chạy hết các lệnh sau trước khi học tuần 1:

- [ ] `adb devices` thấy máy thật hoặc emulator.
- [ ] `apktool --version` chạy được.
- [ ] `java -version` ra 17 trở lên.
- [ ] Android Studio build được một project rỗng ra APK.
- [ ] `adb install` được APK đó lên máy.
- [ ] `adb logcat` đọc được log của app.
- [ ] Ghidra mở được một file `.so` bất kỳ.

---

## Cách học mỗi tuần

| Ngày | Thời lượng | Nội dung |
|------|-----------|----------|
| T2–T6 | 1.5–2h | Lý thuyết + làm theo ví dụ |
| T7 | 4–5h | Bài tập lớn của tuần |
| CN | 2–3h | Ghi chép, ôn, dọn lab |

**Nguyên tắc:**

- Mỗi tuần chỉ **một mục tiêu kỹ thuật**. Làm xong mới sang tuần sau.
- Ghi **nhật ký lab** mỗi buổi: app nào, phiên bản nào, ABI nào, tool phiên bản nào, offset nào, lỗi gì.
- **Một thay đổi một lần.** Sửa 5 chỗ rồi build là không biết chỗ nào làm app crash.
- Luôn giữ **APK gốc** và **bản backup** trước khi sửa.
- Không thử nghiệm trên máy có dữ liệu thật.

---

## Giáo án chi tiết tuần 1

> **Tuần 1 nặng hơn phần còn lại vì gom 3 mảng: C, Java, Android app.** Nếu bạn chưa từng viết Java hoặc chưa từng build app Android, đừng cố nhồi đủ 5 buổi trong 7 ngày — kéo tuần 1 thành 10–14 ngày, hoặc dời buổi 5 (app Wallet) sang đầu tuần 2. Mốc thật của tuần 1 là **build và cài được app + đọc được log**, không phải "học xong C".

### Mục tiêu tuần

- Ôn lại C ở mức đủ dùng: biến, con trỏ, mảng, struct, bộ nhớ.
- Viết được class Java có field, method, static, kế thừa.
- Build và cài được một app Android đơn giản.
- Dùng thành thạo `adb` và `logcat` ở mức cơ bản.

### Buổi 1 (2h) — C: bộ nhớ và con trỏ

Không cần học lại toàn bộ C. Chỉ cần chắc 5 thứ:

1. Biến nằm ở đâu: stack, heap, vùng static.
2. Con trỏ là gì: biến chứa địa chỉ, `*` để dereference, `&` để lấy địa chỉ.
3. Mảng và con trỏ: `a[i]` tương đương `*(a + i)`.
4. Struct: các field nằm liên tiếp trong bộ nhớ, có padding.
5. `sizeof` và sự khác nhau giữa 4 byte và 8 byte trên ARM64.

Bài thực hành 30 phút: viết chương trình C in ra địa chỉ của một biến local, một biến global, một vùng `malloc`, và giải thích vì sao chúng khác nhau.

> Đây là nền cho tuần 3 và 8. Nếu bạn không giải thích được "vì sao địa chỉ đổi mỗi lần chạy", đừng sang tuần 2.

### Buổi 2 (2h) — Java: class, method, static

Java khác C ở chỗ mọi thứ nằm trong class. Cần nắm:

- `class`, `field`, `method`, constructor.
- `static` — field/method thuộc class, không thuộc object.
- Kế thừa (`extends`), ghi đè (`@Override`), interface.
- `public` / `private` / `protected` — chỉ để hiểu vì sao smali gọi được.
- Exception: `try/catch`, vì sao game crash im lặng.

Bài thực hành: viết class `Wallet` có `int gold`, `boolean premium`, method `getGold()`, `addGold(int)`, `isPremium()`. Viết `main` in ra giá trị.

> Smali là assembly của Java. Không hiểu `static` và `invoke-static` thì tuần 6 sẽ học vẹt.

### Buổi 3 (2h) — Android app đầu tiên

Tạo project **Empty Views Activity**, Java, minSdk 26:

- `MainActivity` + layout XML có `TextView` và `Button`.
- `AndroidManifest.xml`: `application`, `activity`, `intent-filter` LAUNCHER.
- `Application` class (tuần 11 sẽ chèn `loadLibrary` vào đây).
- Build APK debug, tìm file trong `app/build/outputs/apk/debug/`.
- Giải thích `APK` và `AAB` khác nhau ở đâu.

### Buổi 4 (1.5h) — adb, emulator, logcat

Thuộc các lệnh sau:

```bash
adb devices
adb install -r app-debug.apk
adb shell pm list packages | grep example
adb shell pm path com.example.wallet
adb shell am start -n com.example.wallet/.MainActivity
adb logcat -c
adb logcat --pid=$(adb shell pidof -s com.example.wallet)
adb shell screencap -p /sdcard/s.png && adb pull /sdcard/s.png
adb shell dumpsys package com.example.wallet | head -40
```

Bài thực hành: cài app, mở app bằng `am start`, lọc log theo pid, chụp màn hình kéo về PC.

### Buổi 5 (3h) — app "Wallet" để làm chuột bạch

Đây là app bạn sẽ mod ở tuần 6, 9, 11. Làm đủ 3 màn hình:

1. Màn hình chính: hiển thị gold, trạng thái premium.
2. Nút "Mua 100 gold" — cộng gold, ghi log.
3. Nút "Mở khóa premium" — kiểm tra một biến `premium`, nếu chưa có thì hiện thông báo.

Yêu cầu kỹ thuật:

- Gold lưu trong class `Wallet` dạng `int`.
- Có method `getGold()`, `isPremium()`.
- Log ra `Log.d("WalletLab", ...)` mỗi lần đọc/ghi.
- Không cần đẹp, không cần database.

### Bài tập về nhà

- [ ] Build và cài app Wallet lên máy thật hoặc emulator.
- [ ] Đổi giá trị gold khởi tạo trong code, build lại, xác nhận thay đổi.
- [ ] Dùng `adb logcat` lọc đúng log của app.
- [ ] Giải thích được địa chỉ stack/heap/static khác nhau ở đâu.
- [ ] Viết 10 dòng nhật ký lab cho tuần 1.

### Tiêu chí đạt

- [ ] App Wallet chạy, bấm nút cộng gold thấy số thay đổi.
- [ ] `adb install -r` và `adb uninstall` chạy đúng.
- [ ] Đọc được log theo pid, không lẫn log hệ thống.
- [ ] Giải thích được `static` trong Java khác field thường thế nào.
- [ ] Biết APK nằm ở đâu sau khi build.

---

## Giáo án tóm tắt tuần 2–16

### Tuần 2 — Java OOP, Android anatomy, NDK/JNI

**Mục tiêu:** đưa logic gold xuống native, chuẩn bị cho tuần 3 và 8.

**Lý thuyết:**
- `Application` vs `Activity` lifecycle — cái nào chạy trước, cái nào sống lâu hơn.
- `Context`, `Intent`, `SharedPreferences` ở mức đọc hiểu.
- JNI: `native` method trong Java, hàm `Java_com_example_wallet_Wallet_getGoldNative` trong C++.
- NDK: `CMakeLists.txt`, `externalNativeBuild`, `abiFilters "arm64-v8a" "x86_64"`.
- `System.loadLibrary("wallet")` và vị trí file `.so` trong APK (`lib/<abi>/`).

**Thực hành:**
- Chuyển gold từ Java field sang `static int32_t g_gold` trong C++.
- Viết `getGoldNative()`, `addGoldNative(int)`, log bằng `__android_log_print`.
- Build cả `arm64-v8a` và `x86_64`, cài lên máy thật và emulator.

**Bài tập:**
- [ ] App chạy đúng trên arm64 thật.
- [ ] `adb shell run-as ... ls lib/` thấy đúng `.so`.
- [ ] Log native hiện trong logcat.

**Tiêu chí đạt:**
- [ ] Giải thích được `JNI_OnLoad` chạy khi nào.
- [ ] Biết vì sao phải build đúng ABI.
- [ ] Tự thêm một native method mới mà không copy lỗi.

---

### Tuần 3 — Bộ nhớ Android, GameGuardian, static vs dynamic

**Mục tiêu:** tìm và sửa một giá trị trong bộ nhớ app đang chạy.

**Lý thuyết:**
- `/proc/<pid>/maps` — module nào nằm ở đâu, quyền `r-xp`, `rw-p`.
- ASLR và PIE: vì sao địa chỉ đổi mỗi lần mở app.
- Base address của `.so` + offset = địa chỉ thật.
- Kiểu dữ liệu khi scan: `DWORD` (int 32), `FLOAT`, `DOUBLE`, `WORD`, `BYTE`, `XOR`.
- Scan chính xác, scan mờ (fuzzy), "unknown initial value", group search.
- Pointer search: tìm chuỗi con trỏ trỏ tới địa chỉ động.

**Thực hành:**
- Mở app Wallet, dùng GameGuardian scan gold, sửa thành 999999.
- Restart app → giá trị về cũ, địa chỉ đổi. Ghi lại địa chỉ cũ/mới.
- Dùng `adb shell cat /proc/<pid>/maps | grep wallet` tìm base của `libwallet.so`.
- Tính `base + offset` của `g_gold` từ tuần 2, so với địa chỉ GameGuardian tìm được.

**Bài tập:**
- [ ] Sửa gold bằng GameGuardian, chụp ảnh trước/sau.
- [ ] Ghi lại base, offset, địa chỉ tuyệt đối ở 2 lần chạy khác nhau.
- [ ] Giải thích vì sao offset không đổi còn địa chỉ đổi.

**Tiêu chí đạt:**
- [ ] Phân biệt được static address và heap address.
- [ ] Biết khi nào cần pointer chain, khi nào chỉ cần base + offset.
- [ ] Không dùng "scan all" mò 30 phút khi đã biết module.

---

### Tuần 4 — Reverse engineering: Ghidra, x86 và ARM64

**Mục tiêu:** đọc được một hàm trong file `.so` và tìm ra nó làm gì.

**Lý thuyết:**
- Ghidra: tạo project, import, chọn **AARCH64**, auto-analyze.
- Cửa sổ chính: Program Tree, Symbol Tree, Listing, Decompiler.
- Hàm export vs hàm bị strip; tìm bằng tên, bằng string, bằng xref.
- Prologue/Epilogue: `stp x29, x30, [sp, #-0x20]!` — lưu frame pointer và return address.
- Gọi hàm: `bl` (branch with link), tham số `x0–x7`, trả về `x0`.
- `adrp` + `add` để lấy địa chỉ chuỗi/global.
- So sánh nhanh x86 và ARM64: cùng logic, khác tên thanh ghi và cách trả về.

**Thực hành:**
- Import `libwallet.so` bản arm64 vào Ghidra.
- Tìm `getGoldNative`, đổi tên, đọc pseudocode.
- Tìm hàm bằng cách search string "WalletLab" rồi xref ngược.
- Ghi lại offset của hàm so với base (Ghidra hiển thị image base — kiểm tra lại).

**Bài tập:**
- [ ] Đọc 20 lệnh ARM64 liên tiếp và giải thích.
- [ ] Tìm đúng offset của `getGoldNative`.
- [ ] Xác định hàm nào được gọi khi bấm nút "Mua 100 gold".

**Tiêu chí đạt:**
- [ ] Biết đọc prologue và return.
- [ ] Biết xref từ string tới hàm.
- [ ] Không nhầm offset file với offset virtual address — ghi rõ cả hai.

---

### Tuần 5 — Giải phẫu APK: apktool, jadx, dex, manifest, ký

**Mục tiêu:** mở, sửa, đóng gói lại và cài được APK của chính mình.

**Lý thuyết:**
- APK là file zip: `classes.dex`, `resources.arsc`, `AndroidManifest.xml` (binary XML), `res/`, `lib/<abi>/`, `META-INF/`.
- Multi-dex: `classes.dex`, `classes2.dex`… — smali tương ứng `smali/`, `smali_classes2/`.
- `apktool d` giải nén và decode manifest/resources; `apktool b` đóng gói lại.
- `jadx-gui` đọc Java gần đúng, tốt để hiểu logic; `apktool` để sửa.
- `aapt2 dump badging` xem package, version, ABI.
- Ký APK: `zipalign` trước, `apksigner` sau; v1/v2/v3; vì sao sửa APK mà không ký lại thì không cài được.
- Chữ ký khác → phải gỡ bản cũ trước khi cài.

**Thực hành:**

```bash
apktool d wallet.apk -o wallet_src
# sửa res/values/strings.xml: app_name
apktool b wallet_src -o wallet_mod.apk
zipalign -p -f 4 wallet_mod.apk wallet_mod_aligned.apk
apksigner sign --ks lab.keystore --ks-key-alias labkey \
  --out wallet_mod_signed.apk wallet_mod_aligned.apk
apksigner verify --print-certs wallet_mod_signed.apk
adb install -r wallet_mod_signed.apk
```

**Bài tập:**
- [ ] Build lại app không đổi gì, cài được, chạy được.
- [ ] Đổi tên app hiển thị, thấy trên launcher.
- [ ] Dùng `aapt2 dump badging` đọc package/version/ABI.
- [ ] Giải thích vì sao phải gỡ app cũ khi chữ ký đổi.

**Tiêu chí đạt:**
- [ ] Rebuild không làm app crash.
- [ ] Biết file nào chứa code, file nào chứa tài nguyên.
- [ ] Biết kiểm tra APK đã ký đúng chưa.

---

### Tuần 6 — Smali: đọc và patch tầng Java

**Mục tiêu:** sửa logic Java ở mức smali và chứng minh bằng app chạy.

**Lý thuyết:**
- Smali là assembly của Dalvik/ART. Mỗi method có `.registers`, `.param`, instruction, `.end method`.
- Thanh ghi `v0…vN` (local) và `p0…pN` (parameter; `p0` là `this` với instance method).
- Kiểu: `I` int, `Z` boolean, `Ljava/lang/String;`, `[I` int array.
- Lệnh cần thuộc: `const/4`, `const/16`, `const`, `iget`, `iput`, `sget`, `sput`, `invoke-virtual`, `invoke-static`, `if-eqz`, `if-nez`, `return`, `return-void`, `move-result`.
- Nhãn `:cond_0`, `:goto_0` — đọc luồng nhảy.

**Thực hành:**

Tìm `getGold()` trong `smali/com/example/wallet/Wallet.smali`:

```smali
.method public getGold()I
    .registers 2

    iget v0, p0, Lcom/example/wallet/Wallet;->gold:I

    return v0
.end method
```

Patch thành:

```smali
.method public getGold()I
    .registers 2

    const v0, 0xf423f

    return v0
.end method
```

(0xF423F = 999999.)

Patch `isPremium()` trả về luôn `true`:

```smali
.method public isPremium()Z
    .registers 2

    const/4 v0, 0x1

    return v0
.end method
```

**Bài tập:**
- [ ] Gold hiển thị 999999 sau khi rebuild và ký.
- [ ] Premium luôn bật dù chưa "mua".
- [ ] Ghi lại từng dòng đã sửa và giải thích.
- [ ] Thử patch một method trả về chuỗi và quan sát logcat.

**Tiêu chí đạt:**
- [ ] Đọc được một method smali 20 dòng.
- [ ] Biết `p0` là gì trong instance method.
- [ ] Biết vì sao `const v0, 0xf423f` khác `const/4 v0, 0x1`.

> Chỉ làm trên app tự build. Patch kiểm tra bản quyền/thanh toán của app thương mại để dùng thật là vượt DRM — không nằm trong phạm vi tài liệu này.

---

### Tuần 7 — Split APK, AAB, OBB, pipeline build mod

**Mục tiêu:** xử lý được game phát hành dạng nhiều file, và tự động hoá build.

**Lý thuyết:**
- APK đơn vs App Bundle (`.aab`) vs split APK (`.apks`, `.xapk`, `.apkm`).
- `bundletool build-apks --mode=universal` để gom thành một APK cài được.
- `adb install-multiple base.apk split_config.arm64_v8a.apk ...`.
- OBB: `Android/obb/<package>/main.<versionCode>.<package>.obb`, copy vào máy đúng đường dẫn.
- `versionCode`, `versionName`, package rename (chỉ với app của mình).
- Tự động hoá: script build + zipalign + sign + install.

**Thực hành:**
- Tạo bản release AAB cho app Wallet, dùng bundletool sinh APK universal.
- Cài bản split lên emulator; cài bản universal lên máy thật.
- Viết `build-mod.sh` chạy 4 bước: `apktool b` → `zipalign` → `apksigner` → `adb install -r`.
- Thêm bước kiểm tra `apksigner verify` và dừng nếu lỗi.

**Bài tập:**
- [ ] Script build chạy một lệnh ra APK cài được.
- [ ] Cài được game giả lập có OBB (tự tạo file OBB rỗng đúng tên).
- [ ] Ghi lại cấu trúc thư mục của một APK split.

**Tiêu chí đạt:**
- [ ] Phân biệt base APK và split config.
- [ ] Biết khi nào cần universal APK.
- [ ] Không còn copy tay từng lệnh mỗi lần build.

---

### Tuần 8 — ARM64: đọc và patch `.so`

**Mục tiêu:** sửa một hàm native ở mức lệnh và rebuild APK.

**Lý thuyết:**
- ELF: header, section `.text` (code), `.data`, `.rodata`, bảng symbol.
- `readelf -h`, `readelf -s`, `readelf -l`, `nm -D`, `objdump -d`.
- Hàm export có tên trong dynamic symbol; hàm strip phải tìm bằng offset/xref.
- Base address + offset. ASLR làm base đổi, offset không đổi.
- Ba kiểu patch:
  1. **Return hằng số** — `mov w0, #imm` + `ret` (giá trị lớn cần `movz` + `movk`).
  2. **Vô hiệu hoá kiểm tra** — đổi điều kiện nhảy hoặc thay bằng `nop` (`0xD503201F`).
  3. **Ép nhánh** — `b <target>` (opcode `0x14000000 | imm26`).
- `ret` = `0xD65F03C0`; `mov w0, #1` = `0x52800020`.
- Patch bằng Ghidra (Patch Instruction) hoặc hex editor; sau đó phải **ký lại APK**.
- Android 15+ yêu cầu native lib tương thích page size 16 KB — build bằng NDK mới, kiểm tra `readelf -l` align `0x4000`.

**Thực hành:**
- Tìm `getGoldNative` trong `libwallet.so`, xác định offset.
- Patch để luôn trả 999999; build, ký, cài, kiểm tra.
- Patch hàm `isPremiumNative` trả `1`.
- Khôi phục bản gốc, xác nhận giá trị về như cũ.

**Bài tập:**
- [ ] Patch return-value thành công trên máy arm64 thật.
- [ ] Ghi lại offset trước/sau, giải thích `base + offset`.
- [ ] Thử một patch `nop` và giải thích nó bỏ qua kiểm tra gì.
- [ ] Kiểm tra align của `.so` nếu build bằng NDK.

**Tiêu chí đạt:**
- [ ] Đọc được prologue/epilogue ARM64.
- [ ] Biết vì sao patch file `.so` làm chữ ký APK hỏng.
- [ ] Không nhầm offset file với RVA.

---

### Tuần 9 — Frida: hook Java và native

**Mục tiêu:** quan sát và sửa hành vi app ở runtime, không cần build lại APK.

**Lý thuyết:**
- Kiến trúc Frida: client trên PC, `frida-server` trên máy (cần root) hoặc gadget nhúng trong APK.
- `frida-ps -U`, `frida -U -f <package> -l script.js`, attach vs spawn.
- Java API: `Java.perform`, `Java.use`, `.overload()`, `.implementation`, `Java.choose`, `Java.enumerateLoadedClasses`.
- Native API: `Process.getModuleByName('libx.so').base`, `.getExportByName('name')`, `.enumerateExports()`, `Interceptor.attach`, `onEnter`/`onLeave`, `this.context.x0`, `retval.replace`.
- **Frida 17+ (5/2025) đã bỏ static API của `Module`**: `Module.findBaseAddress`, `Module.findExportByName`, `Module.enumerateExports` không còn. Script theo kiểu cũ chỉ chạy trên ≤ 16.x — đừng copy từ blog cũ mà không xem phiên bản.
- `Memory.scan` tìm pattern; `Stalker` trace (nâng cao).

**Thực hành:**

```javascript
Java.perform(() => {
  const Wallet = Java.use('com.example.wallet.Wallet');
  // .overload() bắt buộc khi hàm có overload; .call(this) là cách gọi bản gốc.
  Wallet.getGold.overload().implementation = function () {
    const real = Wallet.getGold.overload().call(this);
    console.log('[hook] gold thật =', real);
    return 999999;
  };
});
```

```javascript
// Frida 17+: lấy module qua Process, không dùng Module.findBaseAddress.
const mod = Process.getModuleByName('libwallet.so');
const fn = mod.base.add(0x1234); // offset lấy từ tuần 8
Interceptor.attach(fn, {
  onEnter(args) { console.log('[native] enter'); },
  onLeave(retval) {
    console.log('[native] ret =', retval.toInt32());
    retval.replace(ptr(999999));   // trả int64/pointer: luôn bọc ptr()
  },
});
```

**Bài tập:**
- [ ] Hook Java, log gold thật và gold giả.
- [ ] Hook native bằng offset, sửa return value.
- [ ] Spawn app từ đầu bằng `-f` để hook kịp trước khi logic chạy.
- [ ] Ghi lại sự khác nhau giữa attach và spawn.

**Tiêu chí đạt:**
- [ ] Script chạy không lỗi trên máy thật.
- [ ] Hiểu vì sao Frida cần root (hoặc gadget).
- [ ] Biết Frida chỉ để nghiên cứu, không phải cách phát hành mod.

---

### Tuần 10 — Unity IL2CPP: dump metadata, offset, hook

**Mục tiêu:** tìm đúng hàm trong game Unity và hook được nó.

**Lý thuyết:**
- Unity có hai backend: **Mono** (`Assembly-CSharp.dll`, dễ đọc bằng dnSpy) và **IL2CPP** (`libil2cpp.so` + `global-metadata.dat`, phổ biến ở game phát hành).
- Cấu trúc APK Unity: `lib/arm64-v8a/libil2cpp.so`, `assets/bin/Data/Managed/Metadata/global-metadata.dat`.
- `Il2CppDumper libil2cpp.so global-metadata.dat out` sinh `dump.cs`, `il2cpp.h`, `script.json`, `stringliteral.json`.
- Trong `dump.cs`: class, method, `RVA` và `Offset`.
- Hook = base của `libil2cpp.so` + offset. Có thể hook bằng Frida (học) hoặc bằng mod menu native (tuần 11).
- Metadata mã hóa (Unity mới), string mã hóa, obfuscation — đây là tường thật; nhận diện sớm để đổi mục tiêu.
- Tìm nhanh: search tên field/method trong `dump.cs`, search string trong `stringliteral.json`.

**Thực hành:**
- Dùng một project Unity IL2CPP nhỏ tự build (hoặc game open-source) làm mẫu.
- Dump metadata, mở `dump.cs`, tìm class `Wallet`/`Player`, tìm `get_Gold`.
- Tính offset, hook bằng Frida, log giá trị.
- Sửa return value của một getter.

**Bài tập:**
- [ ] Xác định game dùng Mono hay IL2CPP chỉ bằng cách mở APK.
- [ ] Dump được `dump.cs` từ app mẫu.
- [ ] Hook được một getter và đổi giá trị.
- [ ] Ghi lại offset + phiên bản app — offset đổi khi game update.

**Tiêu chí đạt:**
- [ ] Giải thích được `libil2cpp.so` + metadata là gì.
- [ ] Biết vì sao phải dump lại sau mỗi bản cập nhật.
- [ ] Nhận ra dấu hiệu metadata bị mã hóa.

---

### Tuần 11 — Mod menu native: NDK, inject, overlay, hook

**Mục tiêu:** đóng gói mod thành `.so` + menu nổi, không cần root.

**Kiến trúc:**

1. `libmod.so` build bằng NDK, chứa menu + hook.
2. Chèn `System.loadLibrary("mod")` vào smali, thường ở `Application.onCreate` hoặc `Activity.onCreate` — phải chạy trước logic game.
3. `JNI_OnLoad` khởi tạo hook và thread vẽ menu.
4. Menu: ImGui + OpenGL ES trên `Surface`, hoặc `SurfaceView` qua JNI. Khung tham chiếu: các template mod menu open-source (LGL, Android-Mod-Menu) — đọc license trước khi dùng.
5. Hook: Dobby / ShadowHook / And64InlineHook; mỗi feature là một hook + một cờ bật/tắt.
6. Cấu hình: lưu trạng thái toggle ra file để mở lại game vẫn nhớ.
7. ABI: `arm64-v8a` là chính; thêm `armeabi-v7a` nếu máy cũ. Build NDK mới để tương thích 16 KB page size.

**Khung tối thiểu:**

```cpp
#include <jni.h>
#include <pthread.h>
#include <android/log.h>
#include "dobby.h"

static bool g_gold = false;
static int (*orig_get_gold)(void*) = nullptr;

static int hook_get_gold(void* self) {
  if (g_gold) return 999999;
  return orig_get_gold(self);
}

static void* menu_thread(void*) {
  // Vòng lặp vẽ menu + cập nhật cờ. Khung UI thật xem template.
  for (;;) { /* draw(); */ }
  return nullptr;
}

extern "C" JNIEXPORT jint JNI_OnLoad(JavaVM*, void*) {
  void* base = nullptr; // resolve base của lib game, xem ghi chú bên dưới
  if (base) {
    DobbyHook((void*)((uintptr_t)base + 0x1234),
              (void*)hook_get_gold, (void**)&orig_get_gold);
  }
  pthread_t t;
  pthread_create(&t, nullptr, menu_thread, nullptr);
  return JNI_VERSION_1_6;
}
```

> `base` phải resolve bằng `dl_iterate_phdr` hoặc hook `android_dlopen_ext` — không hardcode địa chỉ. Khung trên là để hiểu luồng, không phải code build ngay.

**Thực hành:**
- Build `libmod.so` cho arm64, chèn `loadLibrary` vào app Wallet, xác nhận `JNI_OnLoad` chạy bằng log.
- Làm menu 2 toggle (gold, premium) + lưu trạng thái.
- Tắt toggle → hành vi về gốc.

**Bài tập:**
- [ ] Menu hiện, toggle hoạt động trên máy thật.
- [ ] Tắt toggle khôi phục hành vi gốc.
- [ ] Build được cả arm64-v8a (và v7a nếu cần).
- [ ] Không crash khi mở/đóng app 20 lần.

**Tiêu chí đạt:**
- [ ] Giải thích được vì sao chèn `loadLibrary` vào `Application`.
- [ ] Biết hook nào cần gỡ khi tắt feature.
- [ ] Biết vì sao mod menu không cần root còn Frida thì cần.

---

### Tuần 12 — Thiết kế feature: tiền, máu, tốc độ, unlock

**Mục tiêu:** biết một feature sống ở tầng nào và sửa ở đâu.

| Feature | Thường nằm ở | Cách làm | Giới hạn |
|---------|--------------|----------|----------|
| Gold/coin | getter/setter client | hook getter hoặc patch field | Server giữ dữ liệu thì vô dụng |
| Máu/giáp | hàm damage/health | sửa arg hoặc retval | Game online dễ lệch, ban |
| Damage | hàm attack | nhân hệ số trong hook | Float, phải test kỹ |
| Tốc độ | `Time.timeScale` (Unity) hoặc field speed | hook setter/getter | Ảnh hưởng vật lý, dễ crash |
| Ammo/energy | field hoặc getter | patch/hook | UI có thể không cập nhật |
| Unlock/premium | cờ boolean | ép `true` | IAP server-side thì không |
| Cooldown | hàm kiểm tra thời gian | trả `0`/`true` | Có thể desync |
| Drop/RNG | hàm random | hook seed/return | Dễ làm hỏng logic khác |

**Nguyên tắc:**
- Feature phải **tắt được** và trả về hành vi gốc.
- Test từng feature riêng, không bật 5 cái cùng lúc.
- Feature nào sửa dữ liệu gửi lên server → bỏ.
- Ghi rõ feature nào chỉ hoạt động offline.

**Bài tập:**
- [ ] Thêm 2 feature mới vào menu app mẫu.
- [ ] Ghi bảng: feature, hàm bị hook, kiểu dữ liệu, rủi ro.
- [ ] Test bật/tắt từng feature 10 lần.

**Tiêu chí đạt:**
- [ ] Không feature nào làm crash khi tắt.
- [ ] Giải thích được vì sao một feature không khả thi với game online.
- [ ] Không sửa logic thanh toán thật.

---

### Tuần 13 — Anti-tamper, packer, test matrix

**Mục tiêu:** nhận diện protection trước khi đốt thời gian, và test bài bản.

**Các lớp protection thường gặp:**

- Kiểm tra chữ ký (Java `PackageManager`, native đọc `/proc/self/maps`).
- Kiểm tra toàn vẹn file/dex/hash.
- Packer/obfuscator thương mại (360, Tencent Legu, Bangcle…).
- PairIP của Google Play trên app phát hành qua Play.
- Phát hiện root/emulator/Frida.
- Play Integrity / server attestation.

**Cách xử lý đúng:** nhận diện → đánh giá → **chọn mục tiêu khác** nếu protection nằm ngoài trình độ. Unpack/ bypass là một lĩnh vực riêng, không phải tuần 13.

**Test matrix tối thiểu:**

| Hạng mục | Mẫu |
|----------|-----|
| Android | 12, 14, 15, **16** (nếu có thiết bị/emulator; 16 bật kiểm tra 16 KB page size) |
| ABI | arm64 thật, x86_64 emulator |
| Cài đặt | clean install, upgrade, gỡ cài lại |
| Định dạng | APK đơn, split, có OBB |
| Mạng | offline hoàn toàn, online (chỉ để xem hành vi) |
| Thời gian | chạy 30 phút, bật/tắt 50 lần |

**Debug crash:**
- `adb logcat` lọc theo pid.
- Tombstone: `adb shell ls /data/tombstones`, `ndk-stack -sym <symbols>`.
- `adb shell dumpsys activity processes | grep <package>`.

**Bài tập:**
- [ ] Lập checklist protection cho 3 app mẫu (không cần bypass).
- [ ] Chạy test matrix cho app Wallet mod.
- [ ] Đọc một tombstone và chỉ ra lỗi.

**Tiêu chí đạt:**
- [ ] Biết dừng khi gặp packer.
- [ ] Có báo cáo test bằng văn bản.
- [ ] Không nhầm lỗi protection với lỗi code của mình.

---

### Tuần 14 — Ổn định, crash, offset theo phiên bản

**Mục tiêu:** mod chạy 30 phút không crash, và biết cập nhật khi game đổi phiên bản.

**Việc cần làm:**
- Hook conflict: hai hook cùng địa chỉ, gỡ không sạch.
- Thread safety: menu thread đọc cờ, hook thread ghi cờ — dùng atomic.
- Rò rỉ: mở/đóng menu, allocate/free đúng.
- Polling: không quét memory mỗi frame nếu không cần.
- Offset theo phiên bản: bảng `versionCode → offset`, kiểm tra version trước khi hook, sai thì tắt feature thay vì crash.
- Rollback: nút "restore" trong menu hoặc file cấu hình.

**Bài tập:**
- [ ] Chạy 30 phút, không crash, không tụt pin bất thường.
- [ ] Bật/tắt 50 lần, kiểm tra log không có lỗi.
- [ ] Tạo bảng offset cho 2 phiên bản app mẫu.
- [ ] Thử cài bản mod lên phiên bản app khác và xác nhận nó báo lỗi an toàn.

**Tiêu chí đạt:**
- [ ] Có cơ chế kiểm tra version trước khi hook.
- [ ] Không hardcode offset không kiểm chứng.
- [ ] Có nhật ký lỗi và cách sửa.

---

### Tuần 15 — Project: spec, khung, một feature end-to-end

**Chọn mục tiêu hợp lệ:** app tự build, game open-source, hoặc game offline bạn sở hữu — chỉ dùng cá nhân.

**Việc của tuần:**
- Viết **spec 1 trang**: game nào, phiên bản, ABI, 3 feature, tiêu chí ổn định, thiết bị test.
- Dựng repo: `mod/` (native), `patch/` (smali), `scripts/` (build), `docs/` (nhật ký).
- Build menu rỗng + inject thành công, log `JNI_OnLoad`.
- Làm **đúng một feature** end-to-end: bật → chạy → tắt → sạch.
- Chụp ảnh, quay video ngắn.

**Tiêu chí đạt:**
- [ ] Spec đọc lại hiểu ngay, không mơ hồ.
- [ ] Menu hiện trên máy thật.
- [ ] Một feature chạy đúng và tắt được.
- [ ] Repo build lại được từ đầu.

---

### Tuần 16 — Project: hoàn thiện, test, README

**Việc của tuần:**
- Hoàn thiện 3 feature trong spec.
- Chạy test matrix tuần 13 + 30 phút ổn định tuần 14.
- README: mục tiêu, kỹ thuật (hook gì, offset nào, vì sao), cách build, giới hạn, disclaimer pháp lý.
- Ghi lại **những gì đã sai** — phần có giá trị nhất sau này.
- Không phát hành APK mod của game thương mại. Nếu muốn chia sẻ, chỉ chia sẻ **source mod + hướng dẫn** cho app open-source hoặc app của bạn.

**Tiêu chí đạt:**
- [ ] 3 feature hoạt động, tắt được, không crash.
- [ ] Test trên ít nhất 1 máy arm64 thật + 1 emulator.
- [ ] README đủ để người khác build lại.
- [ ] Có danh sách lỗi đã gặp và cách sửa.
- [ ] Có phần disclaimer: chỉ dùng cho học tập, không phân phối APK vi phạm bản quyền.

---

## Code mẫu các tuần

### Tuần 1 — Wallet app (Java)

```java
package com.example.wallet;

public class Wallet {
    private int gold = 100;
    private boolean premium = false;

    public int getGold() {
        return gold;
    }

    public void addGold(int amount) {
        gold += amount;
    }

    public boolean isPremium() {
        return premium;
    }

    public void unlockPremium() {
        premium = true;
    }
}
```

```java
public class MainActivity extends AppCompatActivity {
    private final Wallet wallet = new Wallet();
    private TextView goldView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        goldView = findViewById(R.id.goldView);

        findViewById(R.id.buyButton).setOnClickListener(v -> {
            wallet.addGold(100);
            refresh();
        });

        findViewById(R.id.premiumButton).setOnClickListener(v -> {
            wallet.unlockPremium();
            refresh();
        });

        refresh();
    }

    private void refresh() {
        goldView.setText("Gold: " + wallet.getGold()
                + (wallet.isPremium() ? " · PREMIUM" : ""));
        Log.d("WalletLab", "gold=" + wallet.getGold() + " premium=" + wallet.isPremium());
    }
}
```

### Tuần 2 — JNI native gold

```cpp
#include <jni.h>
#include <android/log.h>

static int32_t g_gold = 100;

extern "C" JNIEXPORT jint JNICALL
Java_com_example_wallet_Wallet_getGoldNative(JNIEnv*, jobject) {
    __android_log_print(ANDROID_LOG_DEBUG, "WalletLab", "native get gold=%d", g_gold);
    return g_gold;
}

extern "C" JNIEXPORT void JNICALL
Java_com_example_wallet_Wallet_addGoldNative(JNIEnv*, jobject, jint amount) {
    g_gold += amount;
}
```

```cmake
cmake_minimum_required(VERSION 3.22)
project(wallet LANGUAGES CXX)

add_library(wallet SHARED wallet.cpp)
target_link_libraries(wallet log)
```

```gradle
android {
    defaultConfig {
        ndk {
            abiFilters "arm64-v8a", "x86_64"
        }
        externalNativeBuild {
            cmake { cppFlags "-std=c++17" }
        }
    }
    externalNativeBuild {
        cmake { path file("src/main/cpp/CMakeLists.txt") }
    }
}
```

### Tuần 4 — adb và logcat

```bash
adb devices
adb install -r app-debug.apk
adb shell am start -n com.example.wallet/.MainActivity
adb logcat -c
adb logcat --pid=$(adb shell pidof -s com.example.wallet) | grep WalletLab
adb shell cat /proc/$(adb shell pidof -s com.example.wallet)/maps | grep wallet
```

### Tuần 5 — apktool và ký APK

```bash
apktool d wallet.apk -o wallet_src
apktool b wallet_src -o wallet_unsigned.apk
zipalign -p -f 4 wallet_unsigned.apk wallet_aligned.apk
apksigner sign --ks lab.keystore --ks-key-alias labkey \
  --out wallet_signed.apk wallet_aligned.apk
apksigner verify --print-certs wallet_signed.apk
adb install -r wallet_signed.apk
```

### Tuần 6 — patch smali

```smali
# Trước
.method public getGold()I
    .registers 2
    iget v0, p0, Lcom/example/wallet/Wallet;->gold:I
    return v0
.end method

# Sau
.method public getGold()I
    .registers 2
    const v0, 0xf423f
    return v0
.end method
```

```smali
# Ép premium = true
.method public isPremium()Z
    .registers 2
    const/4 v0, 0x1
    return v0
.end method
```

### Tuần 8 — patch ARM64 trong `.so`

Hàm gốc (giả lập):

```arm64
get_gold:
    ldr w0, [x0, #0x10]
    ret
```

Patch trả hằng số 999999 — dùng Ghidra Patch Instruction để encode, không tự tính byte:

```arm64
get_gold:
    movz w0, #0x423f
    movk w0, #0xf, lsl #16
    ret
```

Patch boolean:

```arm64
is_premium:
    mov w0, #1
    ret
```

Kiểm tra:

```bash
readelf -h libwallet.so
readelf -s libwallet.so | grep get_gold
readelf -l libwallet.so | grep LOAD
```

> `ret` = `0xD65F03C0`, `nop` = `0xD503201F`. Sau khi sửa `.so` trong APK, chữ ký hỏng — phải ký lại.

### Tuần 9 — Frida Java và native

```javascript
Java.perform(() => {
  const Wallet = Java.use('com.example.wallet.Wallet');
  Wallet.getGold.overload().implementation = function () {
    const real = Wallet.getGold.overload().call(this);
    console.log('[java] gold thật =', real);
    return 999999;
  };
});
```

```javascript
// Frida 17+ — không còn Module.findBaseAddress / findExportByName.
const mod = Process.getModuleByName('libwallet.so');
const fn = mod.base.add(0x1234); // thay bằng offset thật

Interceptor.attach(fn, {
  onEnter(args) {
    console.log('[native] enter');
  },
  onLeave(retval) {
    console.log('[native] ret =', retval.toInt32());
    retval.replace(ptr(999999));
  },
});
```

### Tuần 10 — IL2CPP dump

```bash
Il2CppDumper libil2cpp.so global-metadata.dat dump
# Kết quả: dump.cs, il2cpp.h, script.json, stringliteral.json
```

Trong `dump.cs` tìm:

```text
// RVA: 0x1A2B3C Offset: 0x1A2B3C VA: 0x1A2B3C
public int get_Gold() { }
```

Hook:

```javascript
// Frida 17+; offset RVA lấy từ dump.cs
const mod = Process.getModuleByName('libil2cpp.so');
Interceptor.attach(mod.base.add(0x1A2B3C), {
  onLeave(retval) {
    retval.replace(ptr(999999));
  },
});
```

### Tuần 11 — mod menu skeleton

```cpp
#include <jni.h>
#include <pthread.h>
#include <cstdint>
#include "dobby.h"

static bool g_gold = false;
static int (*orig_get_gold)(void*) = nullptr;

static int hook_get_gold(void* self) {
  if (g_gold) return 999999;
  return orig_get_gold(self);
}

static void* menu_thread(void*) {
  for (;;) {
    // Vẽ menu, cập nhật g_gold. Dùng ImGui + EGL/SurfaceView.
  }
  return nullptr;
}

extern "C" JNIEXPORT jint JNI_OnLoad(JavaVM*, void*) {
  void* base = nullptr; // resolve bằng dl_iterate_phdr
  if (base) {
    DobbyHook((void*)((uintptr_t)base + 0x1234),
              (void*)hook_get_gold, (void**)&orig_get_gold);
  }
  pthread_t t;
  pthread_create(&t, nullptr, menu_thread, nullptr);
  return JNI_VERSION_1_6;
}
```

Smali chèn vào `Application.onCreate`:

```smali
const-string v0, "mod"
invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V
```

### Tuần 13 — checklist test

```text
[ ] clean install trên Android 10
[ ] clean install trên Android 14
[ ] upgrade từ bản cũ
[ ] arm64 thật + emulator x86_64
[ ] chạy 30 phút
[ ] bật/tắt 50 lần
[ ] tắt feature → hành vi gốc
[ ] sai phiên bản game → báo lỗi, không crash
[ ] logcat không có exception lạ
```

---

## Giải thích sâu: APK, DEX và smali

### 1. APK gồm những gì

| Thành phần | Vai trò |
|------------|---------|
| `AndroidManifest.xml` | Khai báo package, activity, permission, ABI — ở dạng binary XML |
| `classes.dex` | Bytecode Dalvik/ART của Java/Kotlin |
| `classes2.dex`… | Multi-dex khi code vượt 65k method |
| `res/` | Layout, ảnh, chuỗi, theme |
| `resources.arsc` | Bảng ánh xạ tài nguyên đã biên dịch |
| `lib/<abi>/` | Native lib: `arm64-v8a`, `armeabi-v7a`, `x86_64` |
| `META-INF/` | Chữ ký v1 (cũ) |
| `assets/` | Dữ liệu game, metadata Unity, OBB nội bộ |

### 2. DEX và smali

DEX là bytecode; smali là cách viết dạng text của bytecode đó. `apktool` decode DEX thành các file `.smali`, mỗi class một file, đường dẫn theo package.

- `v0…vN`: thanh ghi local.
- `p0…pN`: tham số. Với instance method, `p0` là `this`.
- `.registers N`: tổng số thanh ghi dùng trong method (bao gồm cả `p`).
- `.locals N`: chỉ tính local; nếu có `.locals`, `p0` nằm sau local.

### 3. Đọc một method smali

```smali
.method public isPremium()Z
    .registers 2

    iget-boolean v0, p0, Lcom/example/wallet/Wallet;->premium:Z

    return v0
.end method
```

Đọc theo thứ tự: method trả `Z` (boolean), có 2 thanh ghi, đọc field `premium` vào `v0`, trả `v0`. Muốn ép `true` thì bỏ `iget`, thay bằng `const/4 v0, 0x1`.

### 4. Vì sao rebuild phải ký lại

Chữ ký nằm trong `META-INF` (v1) và trong vùng ký của file zip (v2/v3). Sửa bất kỳ byte nào — kể cả một file `.so` — làm hash thay đổi, chữ ký cũ không còn hợp lệ. Android từ chối cài APK có chữ ký hỏng. Ký bằng khóa của bạn cũng có nghĩa app là một "danh tính" khác, nên phải gỡ bản cũ trước khi cài.

---

## Giải thích sâu: ARM64

### 1. Thanh ghi

| Nhóm | Thanh ghi | Vai trò |
|------|-----------|---------|
| Tham số | `x0–x7` | 8 tham số đầu |
| Trả về | `x0` | Giá trị trả về (hoặc `w0` cho 32-bit) |
| Link | `x30` | Return address khi `bl` |
| Stack | `sp` | Stack pointer |
| Frame | `x29` | Frame pointer (thường dùng) |
| Tạm | `x9–x15` | Caller-saved |
| Callee-saved | `x19–x28` | Phải khôi phục trước `ret` |

### 2. Đọc hàm đơn giản

```arm64
stp x29, x30, [sp, #-0x20]!   ; lưu frame + return address, cấp 0x20 stack
mov x29, sp                   ; frame pointer = sp
str w0, [x29, #0x1c]          ; lưu tham số thứ nhất
ldr w0, [x29, #0x1c]          ; đọc lại
ldp x29, x30, [sp], #0x20     ; khôi phục
ret                           ; nhảy về x30
```

Ba thứ cần nhận ra: prologue (`stp x29, x30`), thân hàm (`ldr`/`str`), epilogue (`ldp` + `ret`).

### 3. Ba kiểu patch

- **Return hằng số:** thay đầu hàm bằng `movz`/`movk` + `ret`. Dùng khi hàm trả int/boolean.
- **NOP:** thay lệnh kiểm tra bằng `nop` (`0xD503201F`). Dùng khi muốn bỏ qua một check mà không đổi luồng.
- **Ép nhánh:** thay `b.eq` bằng `b` hoặc đổi đích nhảy. Dùng khi muốn luôn đi vào nhánh "thành công".

Luôn patch **một chỗ**, test, rồi mới patch tiếp. Patch nhiều chỗ cùng lúc là tự làm khó mình.

---

## Giải thích sâu: Unity IL2CPP

### 1. IL2CPP là gì

Unity chuyển C# thành C++ rồi biên dịch thành native. Kết quả:

- `libil2cpp.so` — code native của game.
- `global-metadata.dat` — bảng tên class/method/field, string, kiểu.
- Không còn `Assembly-CSharp.dll` dễ đọc như bản Mono.

### 2. Dump metadata

`Il2CppDumper` đọc cặp file trên và sinh ra danh sách method kèm địa chỉ tương đối. Phiên bản Unity mới có thể mã hóa metadata hoặc string — khi đó dump thất bại hoặc ra tên rác. Đó là dấu hiệu protection, không phải lỗi tool.

### 3. Offset và hook

- `dump.cs` cho `RVA`/`Offset` của từng method.
- Địa chỉ thật = base của `libil2cpp.so` + offset.
- Hook bằng Frida để học; đóng gói bằng native mod menu để phát hành.
- Offset **đổi theo phiên bản game** — luôn kiểm tra version trước khi hook.

### 4. Vì sao nhiều game chặn

- Metadata/string mã hóa.
- Kiểm tra toàn vẹn `libil2cpp.so`.
- PairIP, packer, phát hiện Frida/root.
- Server-authoritative với dữ liệu quan trọng.

Gặp mấy thứ này, chi phí vượt lợi ích cho người học. Chọn game khác.

---

## Verify: bài kiểm tra thật

| Tuần | Bài kiểm tra | Đạt khi |
|------|--------------|---------|
| 1 | App Wallet chạy, log đúng | Bấm nút thấy gold tăng, logcat có `WalletLab` |
| 2 | Native gold | Log native hiện, cả arm64 và x86_64 chạy |
| 3 | GameGuardian | Sửa được gold, giải thích base + offset |
| 4 | Ghidra | Tìm đúng hàm, đọc được prologue |
| 5 | Rebuild APK | Cài được bản rebuild, đổi được tên app |
| 6 | Patch smali | Gold = 999999, premium = true |
| 7 | Pipeline | Một script ra APK cài được |
| 8 | Patch ARM64 | Return value đổi trên máy thật |
| 9 | Frida | Hook Java + native, sửa được giá trị |
| 10 | IL2CPP | Dump được `dump.cs`, hook được getter |
| 11 | Mod menu | Menu hiện, toggle chạy, tắt về gốc |
| 12 | Feature | 2 feature mới ổn định |
| 13 | Test matrix | Có báo cáo, nhận diện protection |
| 14 | Ổn định | 30 phút, 50 lần toggle, không crash |
| 15 | Project | Một feature end-to-end |
| 16 | Hoàn thiện | 3 feature + README + video |

**Trạng thái kiểm chứng:** các lệnh và code mẫu trong tài liệu này là khung tham chiếu, viết theo API ổn định của Android/NDK/Frida/Ghidra tại thời điểm biên soạn. Đã kiểm tra cú pháp toàn bộ đoạn JavaScript Frida bằng `node --check`; **chưa build APK/`.so` và chưa chạy end-to-end trên thiết bị thật**. Máy lab, app mẫu và phiên bản tool khác nhau cho kết quả khác nhau — trước khi dùng, kiểm tra phiên bản tool và log lỗi thực tế. Đừng tin code mẫu hơn log.

---

## Tài nguyên và quy tắc

### Tài nguyên

- **Android Developers** — NDK, JNI, ABI, app bundle, dynamic code loading.
- **OWASP MASTG** — Mobile Application Security Testing Guide: checklist kiểm tra app mobile, rất hữu ích để hiểu protection.
- **Frida docs** — Java API, Interceptor, Memory.
- **Ghidra docs** — AARCH64, decompiler.
- **Il2CppDumper** — README và release notes.
- **apktool / jadx / baksmali** — tài liệu chính thức.
- **crackmes.one** — bài luyện RE, có bản Android.
- **F-Droid** — app open-source để luyện đọc smali.
- **AAPCS64** — quy ước gọi hàm ARM64.
- **scrcpy** — điều khiển máy Android từ PC.

### Quy tắc sống còn

1. **Máy lab riêng.** Không đăng nhập tài khoản cá nhân, ngân hàng, email chính.
2. **Backup trước khi sửa.** APK gốc, file `.so` gốc, keystore lab.
3. **Một thay đổi một lần.** Build, test, ghi log, rồi mới sửa tiếp.
4. **Ghi phiên bản.** Game version, tool version, offset — thiếu một thứ là mất cả buổi.
5. **Không phân phối APK của game thương mại.** Chỉ chia sẻ source mod cho app open-source hoặc app của bạn.
6. **Không đụng vào thanh toán thật, tài khoản người khác, hay game PvP online.**
7. **Gặp packer/pairip thì đổi mục tiêu.** Đừng biến tuần 13 thành 3 tháng.
8. **Tải tool từ nguồn chính thức.** Site lạ + file APK lạ = malware.
9. **Đọc license trước khi dùng template mod menu.** Nhiều template yêu cầu giữ credit hoặc cấm dùng thương mại.
10. **Học để hiểu, không phải để phá.** Kỹ năng này dùng được cho bảo mật, QA, reverse engineering hợp pháp — đừng tự đóng cửa đó.
