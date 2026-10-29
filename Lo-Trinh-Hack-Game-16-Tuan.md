# Lộ Trình Học Hack Game — 16 Tuần

> Tài liệu tự học từ zero đến có project hoàn chỉnh.
> Mỗi tuần có mục tiêu, lý thuyết, thực hành, bài tập, tiêu chí đạt.
> Không nhảy tầng. Không bỏ tuần — trừ nhánh PC/Mobile đã chọn ở phần Tổng quan.

---

## Mục lục

1. Tổng quan lộ trình
2. Rẽ nhánh: PC hay Mobile — quyết trước khi bắt đầu
3. Đọc trước khi bắt đầu — hai cái bẫy
4. Bản game dùng trong tài liệu — AssaultCube 1.2.0.2
5. Giáo án chi tiết tuần 1
6. Giáo án tóm tắt tuần 2–16
7. Code mẫu các tuần
8. Giải thích sâu: Con trỏ
9. Giải thích sâu: 32-bit và 64-bit
10. Giải thích sâu: Toán 3D — World-to-Screen
11. Verify: bài kiểm tra thật
12. Tài nguyên & quy tắc

---

## Tổng quan lộ trình

| Tuần | Nội dung | Trọng số |
|------|----------|----------|
| 1 | C cơ bản + hiểu bộ nhớ | 5% |
| 2 | Cheat Engine cơ bản | 8% |
| 3 | Pointer & Assembly nhập môn | 8% |
| 4 | x64dbg + static analysis | 8% |
| 5 | Crackme & luyện RE | 6% |
| 6 | C++ & WinAPI cho người đã biết C | 7% |
| 7 | Viết trainer bằng C++ | 10% |
| 8 | DLL Injection | 8% |
| 9 | Hooking (MinHook) | 8% |
| 10 | Overlay & vẽ trong game | 6% |
| 11 | Android: môi trường, GameGuardian, Frida Java | 6% |
| 12 | ARM64 & native hook | 6% |
| 13 | Mod APK & smali | 5% |
| 14 | Chuyên sâu (chọn 1 hướng) | 5% |
| 15 | Project: thiết kế & nền | 2% |
| 16 | Project: hoàn thiện & README | 2% |

**Về trọng số:** Trọng số chỉ để bạn phân bổ sức, không phải điểm số. Nếu bạn đã biết C++ thì tuần 6–7 nhẹ đi nhiều; nếu chưa từng chạm Android thì tuần 11–13 sẽ nặng hơn con số 6% kia. Và **2% của tuần 15–16 không có nghĩa hai tuần đó nhẹ** — chúng là hai tuần làm việc thật, chỉ là không có lý thuyết mới. Ba tuần nặng nhất là **9, 10, 12**; cứ cho mỗi tuần thêm 3–5 ngày, đừng ép đúng 7 ngày.

**Về thời gian:** 16 tuần × 12–15h là **190–240 giờ**. Đó là mức tối thiểu để đi hết lộ trình, không phải mức trung bình. Thực tế phần lớn người đi hết trong 5–6 tháng, và ba tuần 9, 10, 12 thường kéo dài gấp rưỡi. Con số 16 tuần để bạn có mốc, không phải để tự trách khi trượt.

**Về bảng trên:** tuần 11–13 chỉ bắt buộc với nhánh Mobile. Nhánh PC bỏ qua và quay lại sau như một khóa riêng — xem mục "Rẽ nhánh" ngay dưới. Nếu chọn mobile, **dùng giáo án "Hack Game Mobile Android" làm nguồn chính**; tuần 11–13 ở đây chỉ là bản tóm tắt, không đủ để làm mod menu phát hành được.

## Rẽ nhánh: PC hay Mobile — quyết trước khi bắt đầu

Hai nhánh có tuần 1–5 **song song về độ khó nhưng khác nội dung**: nhánh PC dùng Cheat Engine, x64dbg, crackme; nhánh Mobile dùng Android, GameGuardian, Ghidra ARM64. Quyết nhánh trước rồi học tuần 1–5 theo đúng nhánh — đừng học cả hai, và đừng tưởng bài của nhánh này thay được bài của nhánh kia.

**Nhánh A — PC (trainer, ESP, game PC):**
- Đi đủ tuần 1–10 của tài liệu này.
- Bỏ tuần 11–13. Sang thẳng **tuần 14** — nhánh PC đi **hướng A (Unity/Unreal)**; hướng B (kernel) và C (anti-cheat) là lựa chọn thay thế nếu đúng mục tiêu của bạn → **tuần 15–16**.
- Đọc lướt phần "Native lib căn bản" của tuần 12 để hiểu module/hook native là gì — không cần làm bài Android.
- Tuần 11–13 để sau, khi thật sự cần mobile.

**Nhánh B — Mobile (mod game Android):**
- **Nguồn chính là giáo án "Hack Game Mobile Android"** — đi tuần 1–16 của giáo án đó. Nó đã có phần nền riêng (C, Java, Android, GameGuardian, Ghidra ARM64), nên **không cần làm CE/x64dbg/crackme** của nhánh PC.
- Tài liệu này chỉ dùng để tra khái niệm: tuần 3 (pointer chain), tuần 9 (cơ chế hook), tuần 12 (native hook) — đọc phần lý thuyết, bỏ bài tập PC.
- Tuần 11–13 ở đây là bản tóm tắt; bản đầy đủ nằm trong giáo án Android.

**Không được cắt ở cả hai nhánh:** tuần 3 (pointer chain + reboot test) và bài RE cuối tuần 5 — crackme ở nhánh PC, Ghidra/ARM64 ở nhánh mobile. Thiếu hai phần đó thì nhánh nào cũng tắc — chỉ là tắc muộn hơn, lúc đã khó sửa hơn.

> Ghi nhánh bạn chọn vào đầu file ghi chú, kèm ngày. Sáu tháng sau bạn sẽ không nhớ vì sao mình bỏ tuần 11.

**Nguyên tắc xuyên suốt:**
- Mỗi ngày tối thiểu 1–2h, cuối tuần 4–6h.
- Không nhảy tầng — trừ nhánh PC/Mobile đã chọn ở phần Tổng quan.
- Ghi chép mọi thứ: địa chỉ, offset, lệnh asm, lỗi.
- Dùng máy ảo cho crackme / kernel / malware / anti-cheat.

**Lịch gợi ý mỗi tuần:**

| Ngày | Thời lượng | Nội dung |
|------|-----------|----------|
| T2–T6 | 1–2h | Lý thuyết + tutorial |
| T7 | 4–5h | Bài tập lớn của tuần |
| CN | 2–3h | Ôn tập, ghi chép |

---

## Đọc trước khi bắt đầu — hai cái bẫy

Hai thứ dưới đây không làm bạn tắc ngay, nhưng nó làm bạn mất cả ngày mà không hiểu tại sao. Đọc trước.

### Bẫy 1: 32-bit hay 64-bit — chọn sai tool là mất cả ngày

Game chia làm hai loại, và tool khác nhau hoàn toàn:

| | 32-bit (x86) | 64-bit (x64) |
|---|---|---|
| debugger | `x32dbg` | `x64dbg` |
| thanh ghi | `eax, ebx, ecx, edx, esi, edi, esp, ebp, eip` | `rax, rbx, rcx, rdx, rsi, rdi, rsp, rbp, rip` |
| calling convention | cdecl / stdcall / fastcall | **Microsoft x64** (không phải mấy cái trên) |
| kích thước con trỏ | 4 byte | 8 byte |

Cách biết game là loại nào: **Task Manager → Details → cột "Architecture"** (Win10/11; máy cũ có thể ghi "Platform"), hoặc mở file `.exe` bằng **Detect It Easy** hay **PE-bear**. Properties của Windows **không** hiện PE32/PE32+ — đừng mất thời gian tìm.

> **Cheat Engine thì không cần chia.** Bản CE hiện đại attach được vào cả process 32-bit lẫn 64-bit. Thứ **bắt buộc** phải khớp là: `x32dbg`/`x64dbg` với process, và DLL với process đích khi inject.

> **AssaultCube là game 32-bit.** Mở `x64dbg` là sai tool — phải dùng `x32dbg`. Đây là lỗi phổ biến nhất của người mới, và nó không báo lỗi gì cả. Bạn chỉ ngồi nhìn danh sách process trống.

### Bẫy 2: địa chỉ tĩnh và địa chỉ động

Hai thứ này khác nhau, và lý thuyết pointer chain chỉ áp dụng cho cái thứ hai.

- **Địa chỉ tĩnh** — nằm trong module `.exe`/`.dll`, cộng base là ra, offset không đổi qua các lần chạy. AssaultCube 1.2.0.2 có **con trỏ tới local player** ở `ac_client.exe + 0x10F4F4`; cái con trỏ đó là static nên hardcode được. Nhưng struct player mà nó trỏ tới nằm trên **heap** — HP/ammo là field bên trong, phải đọc qua con trỏ, đừng cộng offset vào base.
- **Địa chỉ động** — nằm trên heap, do game cấp phát lúc runtime. Vị trí đổi mỗi lần chạy vì **ASLR** + cấp phát động. Đây mới là chỗ cần pointer chain.

Bài học: nếu bạn tìm được một giá trị mà **restart game vẫn còn đúng sau khi cộng base** → nó là static, đừng làm phức tạp. Nếu restart là hỏng → bạn phải tìm pointer chain. Đừng học thuộc "luôn phải dùng pointer chain" — đó là tư duy sai, và nó làm bạn bỏ hàng giờ cho một bài toán không tồn tại.

Nhưng phân biệt cho đúng: cái static có thể chỉ là **ô chứa con trỏ**, không phải giá trị. Con trỏ đứng yên qua các lần chạy; vùng nhớ mà nó trỏ tới thì đổi mỗi lần. Hai chuyện khác nhau, và lẫn hai chuyện đó là lý do code trainer đọc ra địa chỉ rác.

---

## Bản game dùng trong tài liệu — AssaultCube 1.2.0.2

Mọi offset, pattern và script trong tài liệu này được viết cho **AssaultCube 1.2.0.2** (bản 32-bit). Bản 1.3.x đổi layout và compiler, nên `0x10F4F4` cùng pattern ở tuần 4 **không còn đúng** — script sẽ không tìm thấy hoặc ghi sai chỗ.

- Tải đúng file `AssaultCube_v1.2.0.2.exe` (45.464.090 byte) từ release chính thức của dự án: https://github.com/assaultcube/AC/releases/tag/v1.2.0.2
- Đối chiếu dung lượng sau khi tải. Không lấy từ mirror lạ, không dùng bản "repack".
- Cài xong, mở Task Manager → Details để chắc `ac_client.exe` là 32-bit (xem lại Bẫy 1).
- Xác nhận offset trước khi viết trainer: attach `ac_client.exe` bằng CE, nhảy tới `ac_client.exe+10F4F4`, xem giá trị là một con trỏ; dereference rồi đối chiếu HP/ammo với HUD. Không khớp nghĩa là sai bản — đừng sửa code cho khớp số.
- Chỉ dùng cho single-player/offline trên máy của bạn.

---

## Giáo án chi tiết tuần 1

### Mục tiêu tuần
- Viết được chương trình C có con trỏ, struct.
- In ra được địa chỉ bộ nhớ của biến và field.
- Giải thích được: "biến nằm ở đâu trong RAM, con trỏ trỏ tới đó thế nào".
- Hiểu tại sao đây là nền tảng của hack game.

---

### Buổi 1 (1.5h) — C căn bản

#### Lý thuyết
- Biến = một ô nhớ có tên.
- Kích thước kiểu dữ liệu:
  - `char` = 1 byte
  - `short` = 2 byte
  - `int` = 4 byte
  - `long long` = 8 byte
  - `float` = 4 byte
  - `double` = 8 byte
- `unsigned` / `signed`.
- Toán tử: `+ - * / %`, so sánh, logic.
- `if / else`, `for`, `while`.
- Hàm: `return_type name(params) { ... }`.

#### Ví dụ
```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int x = 10;
    int y = 20;
    int sum = add(x, y);

    printf("x = %d\n", x);
    printf("y = %d\n", y);
    printf("sum = %d\n", sum);

    for (int i = 0; i < 3; i++) {
        printf("i = %d\n", i);
    }
    return 0;
}
```

#### Bài tập buổi 1
1. Viết hàm `max(int a, int b)` trả về số lớn hơn.
2. Viết vòng lặp in số từ 1 đến 10.
3. Viết hàm `factorial(int n)` tính giai thừa.

---

### Buổi 2 (1.5h) — Con trỏ (linh hồn của hack game)

#### Lý thuyết
- RAM là dải ô nhớ, mỗi ô có **địa chỉ**.
- Biến = một ô nhớ, có **địa chỉ** và **giá trị**.
- **Con trỏ** = biến mà giá trị là **địa chỉ** của biến khác.
- `&x` = lấy địa chỉ của `x`.
- `*p` = lấy giá trị tại địa chỉ `p` trỏ tới.
- `int *p = &x;` → `p` trỏ tới `x`.

#### Ví dụ
```c
#include <stdio.h>

int main() {
    int x = 42;
    int *p = &x;

    printf("x value     : %d\n", x);
    printf("x address   : %p\n", (void*)&x);
    printf("p value     : %p\n", (void*)p);
    printf("p points to : %d\n", *p);

    *p = 999;
    printf("after *p = 999, x = %d\n", x);
    return 0;
}
```

#### Bài tập buổi 2
1. Viết hàm `swap(int *a, int *b)` đổi giá trị 2 biến.
2. Viết hàm `increment(int *p)` tăng giá trị tại `p` lên 1.
3. Vẽ ra giấy: `x` nằm ở đâu, `p` trỏ tới đâu.

#### Câu hỏi kiểm tra
- `p` là gì? `*p` là gì? `&x` là gì?
- Tại sao `*p = 999` làm `x` đổi?

---

### Buổi 3 (1.5h) — Mảng & struct

#### Lý thuyết
- Mảng = các ô nhớ **liên tiếp**.
- `int arr[5]` = 5 ô int, cách nhau 4 byte.
- `arr` = con trỏ tới phần tử đầu.
- `arr[i]` = `*(arr + i)`.
- **Struct** = gom nhiều biến vào 1 khối.
- Các field nằm **liên tiếp** (có căn lề).
- Truy cập field qua con trỏ: `p->hp` = `(*p).hp`.

#### Ví dụ
```c
#include <stdio.h>

typedef struct {
    int hp;
    int mp;
    int gold;
} Player;

int main() {
    Player p = {100, 50, 999};

    printf("sizeof(Player) = %zu\n", sizeof(Player));
    printf("&p         = %p\n", (void*)&p);
    printf("&p.hp      = %p\n", (void*)&p.hp);
    printf("&p.mp      = %p\n", (void*)&p.mp);
    printf("&p.gold    = %p\n", (void*)&p.gold);

    Player *ptr = &p;
    ptr->hp = 99999;
    printf("p.hp = %d\n", p.hp);
    return 0;
}
```

#### Bài tập buổi 3
1. Tạo struct `Enemy { int hp; int attack; int defense; }`, in địa chỉ từng field.
2. Tính khoảng cách byte giữa `hp` và `attack` — tại sao lại là số đó?
3. Tạo mảng 3 `Player`, in địa chỉ từng phần tử, nhận xét khoảng cách.

#### Câu hỏi kiểm tra
- Tại sao `sizeof(Player)` có thể lớn hơn tổng các field?
- `p->hp` khác `p.hp` thế nào?

---

### Buổi 4 (2h) — Thực hành tổng hợp

#### Bài tập lớn
```c
#include <stdio.h>
#include <string.h>

typedef struct {
    char name[32];
    int hp;
    int mp;
    int gold;
} Player;

void print_player(Player *p) {
    printf("name : %s\n", p->name);
    printf("hp   : %d (addr %p)\n", p->hp, (void*)&p->hp);
    printf("mp   : %d (addr %p)\n", p->mp, (void*)&p->mp);
    printf("gold : %d (addr %p)\n", p->gold, (void*)&p->gold);
}

int main() {
    Player hero;
    strcpy(hero.name, "hero");
    hero.hp = 100;
    hero.mp = 50;
    hero.gold = 999;

    print_player(&hero);

    Player *ptr = &hero;
    ptr->hp = 99999;
    ptr->gold = 0;
    printf("\nafter cheat:\n");
    print_player(&hero);

    return 0;
}
```

#### Yêu cầu
1. Biên dịch: `gcc memory_demo.c -o memory_demo`.
2. Chạy, quan sát output.
3. Ghi lại: địa chỉ `hp`, `mp`, `gold` — khoảng cách giữa chúng.
4. Giải thích: tại sao `ptr->hp = 99999` làm `hero.hp` đổi?

---

### Buổi 5 (2h) — Bài tập về nhà & ôn

#### Bài tập về nhà
1. Viết hàm `swap` dùng con trỏ — test với 2 số bất kỳ.
2. Viết struct `Enemy`, in địa chỉ từng field, tính khoảng cách.
3. Viết chương trình tạo mảng 5 `Player`, in địa chỉ từng phần tử.
4. Trả lời: con trỏ là gì, tại sao hack game cần con trỏ (5–7 câu).

#### Tiêu chí đạt tuần 1
- [ ] Biên dịch và chạy được `memory_demo.c`.
- [ ] Giải thích được `&x`, `*p`, `p->hp`.
- [ ] Tính được khoảng cách byte giữa các field.
- [ ] Viết được `swap` dùng con trỏ.

---

## Giáo án tóm tắt tuần 2–16

Tuần 1 là giáo án chia từng buổi vì đó là chỗ dễ bỏ nhất. Từ tuần 2 trở đi, mỗi tuần là **khung + checklist**, không phải bài giảng — bạn phải tự đọc tài liệu ngoài. Chỗ nào thấy trống, tìm dòng "**Tài liệu:**" trong tuần đó trước khi đi lang thang.

### Tuần 2 — Cheat Engine cơ bản

**Mục tiêu:** quét và sửa giá trị trong game offline.

**Lý thuyết:**
- Cài CE từ cheatengine.org.
- Dùng đúng **AssaultCube 1.2.0.2** (mục "Bản game dùng trong tài liệu"); bản 1.3.x có offset khác.
- Giao diện: process list, scan type, value type.
- Khái niệm: address, value, type.
- Scan types: Exact Value, Unknown Initial Value, Changed/Unchanged.
- "Find out what writes to this address".

**Thực hành:**
- Làm CE Tutorial bước 1–5.
- Mở game offline, tìm HP / tiền / ammo.
- Sửa giá trị, xem phản ứng.
- Ghi lại lệnh asm ghi vào địa chỉ.

**Điểm thắng của tuần (phải nhìn thấy bằng mắt):** đổi ammo hoặc HP trong AssaultCube từ giá trị gốc sang giá trị khác và thấy HUD đổi theo, rồi chụp ảnh hoặc ghi lại địa chỉ + value type. Chỉ "hiểu lý thuyết" mà chưa thấy số đổi thì chưa qua tuần 2 — sang tuần 3 sẽ chỉ là học chay.

**Bài tập:**
- Làm hết CE Tutorial bước 1–5.
- Tìm 3 giá trị trong 1 game.
- Ghi lại: tên, địa chỉ, kiểu, lệnh asm.

**Tiêu chí đạt:**
- [ ] Làm xong CE Tutorial 1–5 không cần hướng dẫn.
- [ ] Tìm được HP và tiền.
- [ ] Biết xem lệnh asm ghi vào địa chỉ.

---

### Tuần 3 — Pointer & Assembly nhập môn

**Mục tiêu:** hiểu tại sao địa chỉ đổi, tìm pointer chain, đọc asm cơ bản.

**Lý thuyết:**
- ASLR, dynamic address, base + offset.
- Pointer chain: `[base + offset1] + offset2 + ...`.
- Thanh ghi **x86 (32-bit)**: `eax`, `ebx`, `ecx`, `edx`, `esi`, `edi`, `esp`, `ebp`, `eip`.
- Thanh ghi **x64 (64-bit)**: `rax`, `rbx`, `rcx`, `rdx`, `rsi`, `rdi`, `rsp`, `rbp`, `rip`, cộng thêm `r8`–`r15`.
- Thanh ghi con: `eax` là 32 bit thấp của `rax`, `ax` là 16 bit thấp, `al`/`ah` là 8 bit. Ghi vào `eax` là **xoá sạch 32 bit trên của `rax`** — đây là cái bẫy khi đọc code 64-bit, địa chỉ bị cắt cụt mà không có lỗi nào.
- Lệnh: `mov`, `add`, `sub`, `inc`, `dec`, `cmp`, `test`, `jmp`, `je`, `jne`, `jg`, `jl`, `call`, `ret`, `push`, `pop`.
- **Calling convention: tuần này chỉ cần nhận ra, chưa cần hiểu.** Mục tiêu là đọc được "chỗ này hàm nhận tham số" — thấy `push`/`mov [esp+4]` trước một `call` là đủ. Chi tiết `cdecl` / `stdcall` / shadow space học ở **tuần 9**, lúc hooking bắt bạn phải biết chính xác. Học sớm chỉ tốn trí nhớ.
- **Dựng struct từ memory — làm ngay tuần này:** Cheat Engine có **Structure Dissect** (Memory Viewer → Tools → Dissect data/structures), và **ReClass.NET** làm việc đó chuyên hơn: import process, kéo offset, đặt tên field, export ra class C++. Cộng offset bằng tay thì không thấy **padding**, và padding là thứ làm struct của bạn đọc ra rác.

**Thực hành:**
- Tìm địa chỉ HP, pointer scan, lưu `.PTR`.
- Restart game, verify chain.
- Đọc disassembly hàm ghi HP, viết ra giấy.
- Structure Dissect trên con trỏ player: khai báo `hp`, `ammo`, toạ độ — nhìn khoảng trống giữa các field.
- ReClass.NET: dựng lại struct `Player`, đặt tên, export `.h` để dùng ở tuần 7.

**Bài tập:**
- Tìm pointer chain 3–4 cấp cho HP.
- Restart game, verify.
- Đọc 1 hàm asm, giải thích từng lệnh.
- Struct `Player` export từ ReClass phải đọc đúng 3 field — kiểm chứng bằng cách so giá trị với CE.

**Tiêu chí đạt:**
- [ ] Tìm được pointer chain hoạt động qua restart.
- [ ] Đọc được 5 lệnh asm liên tiếp.
- [ ] Hiểu `[base + offset]`.
- [ ] Xuất được struct `Player` từ ReClass.NET, đọc đúng 3 field và khớp giá trị với CE.

---

### Tuần 4 — x64dbg và static analysis

**Mục tiêu:** dùng x64dbg thành thạo, viết script CE thay đổi logic.

**Lý thuyết:**
- **x32dbg** (game 32-bit) hoặc **x64dbg** (game 64-bit) — UI: CPU, registers, stack, memory dump, breakpoints. Chọn sai bản thì không attach được, xem chương "32-bit và 64-bit".
- Attach process, step (F7/F8), breakpoint (F2, hardware, memory).
- Ghidra / IDA Free: string reference, XREF.

**Thực hành:**
- Attach x64dbg vào game.
- Hardware breakpoint lên ammo.
- Step qua lệnh, tìm lệnh giảm ammo.
- Viết script CE `nop` lệnh.

**Bài tập:**
- Attach x64dbg, đặt breakpoint.
- Viết 1 script CE `nop` lệnh.
- Dùng Ghidra tìm 1 hàm qua string.

**Tiêu chí đạt:**
- [ ] Attach x64dbg và breakpoint thành công.
- [ ] Viết script CE `nop` lệnh.
- [ ] Tìm hàm qua Ghidra.

---

### Tuần 5 — Crackme & luyện RE

**Mục tiêu:** giải crackme độ khó 1–2, rèn tư duy RE.

**Lý thuyết:**
- Crackme là gì, các dạng.
- String reference, breakpoint `strcmp`, patch `jmp`.
- crackmes.one — cách tải, rating.

> ⚠️ **Crackme là file thực thi lạ, tải từ internet.** Chạy trong **máy ảo từ tuần 5**, không phải chỉ từ tuần 11. Có crackme cố tình chứa malware để "dạy bài học". VM + snapshot trước mỗi lần chạy. Đây không phải quy tắc cho vui — đây là quy tắc của người đã từng không làm vậy.

**Thực hành (giữ vừa sức — đừng đua số lượng):**
- Giải 3 crackme level 1 — mục tiêu là **hiểu**, không phải số lượng.
- Giải 2 crackme level 2.
- Ghi writeup cho 1 cái.

**Bài tập:**
- 5 crackme ở trên là đủ. Đừng đua số lượng.
- 1 writeup đầy đủ: mô tả cách tìm, ảnh chụp asm, lệnh patch, tại sao nó hoạt động.

**Tiêu chí đạt:**
- [ ] Giải xong 3 level 1 + 2 level 2.
- [ ] Viết được writeup có asm và giải thích.
- [ ] Biết cách patch một `jmp` điều kiện.

---

### Tuần 6 — C++ & WinAPI cho người đã biết C

**Mục tiêu:** đủ C++ và Win32 để tuần 7 viết trainer mà không vấp cú pháp.

Tuần 1 chỉ dạy C, nhưng tuần 7 viết trainer bằng C++/WinAPI. Khoảng trống này là chỗ nhiều người rơi — không phải vì khó, mà vì không ai dạy.

**Lý thuyết — Ngày 1: C++ cần cho tool**
- `std::string`, `std::vector`, `std::cout` — thay cho `char*`, mảng thủ công, `printf`.
- **reference** (`int&`) so với pointer. Khi nào dùng cái nào.
- `class` / `struct` khác nhau đúng một chữ: quyền truy cập mặc định.
- **RAII** — tại sao `HANDLE` nên bọc trong class có destructor. Đây là thứ phân biệt code tool sống được với code rò handle.

**Lý thuyết — Ngày 2: Win32 căn bản**
- Kiểu dữ liệu: `HANDLE`, `DWORD`, `LPVOID`, `LPCVOID`, `BOOL` vs `bool`, `SIZE_T`, `uintptr_t`.
- `GetLastError()` — thói quen bắt buộc: mọi API trả fail đều phải in mã lỗi.
- `#include <windows.h>` kéo theo `min`/`max` macro — bật `NOMINMAX`.

**Lý thuyết — Ngày 3: dựng project đúng**
- Visual Studio: tạo **Console App (C++)**, chọn **x86** hay **x64** cho khớp game.
- Link thư viện: **Console App tạo trong Visual Studio đã link sẵn `kernel32.lib`, `user32.lib`** (và vài lib nữa) — `GetAsyncKeyState`, `MessageBoxA` chạy được ngay, không cần làm gì. Nhưng nếu build bằng **`cl` dòng lệnh** hay CMake/script riêng thì danh sách đó không có, và bạn gặp `LNK2019: unresolved external symbol __imp_GetAsyncKeyState`. Lúc đó thêm `#pragma comment(lib, "user32.lib")` ở đầu file — các mẫu dưới đây đều có sẵn để copy ra ngoài VS vẫn build được. (`#pragma comment` là đặc trưng MSVC; MinGW bỏ qua nó, nhưng MinGW vốn link user32 mặc định.) `psapi.lib` nếu dùng `EnumProcessModules`.
- Debug vs Release: **luôn build Release khi test tốc độ**, Debug chậm hàng chục lần.
- **Character set:** project VS mặc định bật **Unicode**, nên `PROCESSENTRY32` tự đổi thành `PROCESSENTRY32W`, `szExeFile` thành `WCHAR[260]`, và `_stricmp` hết compile. Lưu ý: `tlhelp32.h` **không** có bản `...A` — ANSI chính là tên không hậu tố. Hai cách: `#undef UNICODE` trước `#include <windows.h>` (các mẫu dưới làm vậy), hoặc đổi Character Set sang **Multi-Byte**.

**Thực hành — Ngày 4 & 5: bài tập nối**
- Viết tool in ra danh sách process đang chạy (tên + PID) bằng `CreateToolhelp32Snapshot`.
- Viết tool in ra danh sách module của một process bất kỳ (tên + base address).
- Đây chính là hai hàm `GetPID` và `GetModuleBase` của tuần 7 — tự viết trước, rồi mới so với code mẫu.

**Bài tập:**
- Process lister: in tên + PID, lọc theo từ khoá.
- Module lister: nhận PID hoặc tên process, in base address của từng module.
- Build **cả x86 và x64**, kiểm tra bằng cách list module của một process 32-bit và một process 64-bit.

**Tiêu chí đạt:**
- [ ] Build ra `.exe` in module list của notepad, đúng bit.
- [ ] Không rò handle (kiểm bằng Process Explorer sau khi tool thoát).
- [ ] Giải thích được `HANDLE` là gì và tại sao phải `CloseHandle`.

---

### Tuần 7 — Viết trainer bằng C++

**Mục tiêu:** tự viết tool đọc/ghi memory ngoài tiến trình.

**Lý thuyết:**
- `OpenProcess`, `ReadProcessMemory`, `WriteProcessMemory`, `CloseHandle`.
- `GetAsyncKeyState` cho hotkey.
- `CreateToolhelp32Snapshot` — tìm PID, module base.
- **Dùng struct thay vì offset rời:** class `Player` export từ ReClass ở tuần 3. Offset đổi sau mỗi bản patch, tên field thì không — sửa một chỗ thay vì sửa mọi nơi.

**Thực hành:**
- Viết trainer console.
- Thêm hotkey bật/tắt cheat.

**Bài tập:**
- Trainer cho AssaultCube: 2 cheat, hotkey F1/F2.
- Đọc HP/ammo qua struct `Player`, không hardcode từng offset rời.
- Build, chạy thử.

**Tiêu chí đạt:**
- [ ] Trainer .exe chạy được.
- [ ] Bật/tắt 2 cheat bằng hotkey.
- [ ] Quản lý offset qua struct `Player` (`offsetof`), không hardcode số lẻ.

---

### Tuần 8 — DLL Injection

**Mục tiêu:** đưa code vào tiến trình khác.

**Lý thuyết:**
- Tiến trình, không gian địa chỉ riêng.
- DLL, tại sao inject được.
- Luồng: OpenProcess → VirtualAllocEx → WriteProcessMemory → CreateRemoteThread.
- Kỹ thuật khác: manual mapping, APC injection.

**Thực hành:**
- Viết DLL `MessageBoxA`.
- Viết injector.
- Inject vào notepad trước, rồi game.

**Bài tập:**
- Inject DLL vào notepad.
- Inject DLL vào game, log "hello from inside".

**Tiêu chí đạt:**
- [ ] DLL build được.
- [ ] Injector inject thành công.
- [ ] Hiểu luồng 5 bước.

---

### Tuần 9 — Hooking (MinHook)

**Mục tiêu:** hook hàm, thay đổi hành vi từ trong.

**Lý thuyết:**
- Trampoline hook: ghi đè 5 byte đầu bằng `jmp`.
- IAT hook, VMT hook — **đọc để biết, tuần này không code.** VMT sẽ dùng ở tuần 10 khi hook `Present` của DirectX.
- MinHook — thư viện dễ nhất.
- **Calling convention — học ở đây, không phải tuần 3.** Tuần 3 bạn chỉ cần đọc được `push`/`mov` trước một `call`. Đến hooking thì bạn buộc phải biết chính xác, vì prototype phải khớp từng tham số với hàm gốc:
  - **x86**: `cdecl` (caller dọn stack), `stdcall` (callee dọn stack), `fastcall` (2 tham số đầu vào `ecx`, `edx`).
  - **x64 Windows**: **Microsoft x64** — 4 tham số đầu vào `rcx`, `rdx`, `r8`, `r9`, còn lại trên stack, có **32 byte shadow space**, caller dọn stack. Không có `stdcall`/`cdecl` trong code 64-bit.
  - sai một tham số trong typedef là stack lệch → crash ngay lần gọi đầu tiên, và rất khó lần ra.
- **Hook render để tuần 10.** Tuần này chỉ cần hook một hàm Win32 thường để hiểu cơ chế: trampoline, prototype, calling convention. `wglSwapBuffers` / `Present` là cùng một kỹ thuật, chỉ khác chỗ đặt code vẽ — dồn sang tuần 10 cho khỏi học hai lần.
- **Tài liệu:** README của MinHook (mục Usage, đúng 4 bước: `MH_Initialize` → `MH_CreateHook` → `MH_EnableHook` → `MH_Uninitialize`), và bài về trampoline hook trên GuidedHacking.

**Thực hành:**
- Hook `CreateFileW` trong notepad — mở file là thấy hook chạy. **Đừng chọn `MessageBoxA`**: notepad không bao giờ gọi nó, bạn sẽ tưởng code sai và debug vô ích. (Xem code mẫu tuần 9 ở dưới.)
- Muốn thêm một hook nữa: `RegOpenKeyExW` (notepad đọc registry khi mở) hoặc `GetSystemMetrics` (gọi liên tục khi resize cửa sổ).

**Bài tập:**
- Hook `CreateFileW`, log đường dẫn file notepad mở — cả nhánh thành công lẫn nhánh trả `INVALID_HANDLE_VALUE`.

**Tiêu chí đạt:**
- [ ] Hook `CreateFileW` bằng MinHook, thấy log khi mở file.
- [ ] Giải thích được vì sao chọn `CreateFileW` thay vì `MessageBoxA` (ai gọi hàm nào).
- [ ] Hiểu trampoline (vì sao gọi hàm gốc vẫn chạy đúng).

---

### Tuần 10 — Overlay & vẽ trong game

**Mục tiêu:** hiểu vòng lặp render và vẽ được lên trên game. Đây là tuần đệm sau hooking — nơi bạn biến "hook được" thành "thấy được".

**Lý thuyết:**
- **Vòng lặp render:** game vẽ một frame rồi swap buffer, khoảng 60 lần/giây. Hook đúng chỗ swap là hook được "mỗi frame".
- **Hai cách vẽ:**
  1. **In-process overlay** — hook `wglSwapBuffers` (OpenGL) hoặc `IDXGISwapChain::Present` (DirectX), vẽ ngay trong process game. Mượt, nhưng code của bạn sống trong game.
  2. **External overlay** — cửa sổ riêng, trong suốt, luôn trên cùng, click-through (`WS_EX_LAYERED | WS_EX_TRANSPARENT`), vẽ bằng GDI/Direct2D. Dễ hơn, nhưng giật hơn vì không đồng bộ với frame của game.
- **ImGui:** `ImGui::CreateContext`, `NewFrame`, vẽ, `Render`, `EndFrame`. Muốn nhận chuột/bàn phím phải hook `WndProc` và gọi `ImGui_ImplWin32_WndProcHandler`.
- **DirectX thì hook qua VMT:** `IDXGISwapChain::Present` không nằm trong export table. Bạn lấy con trỏ interface rồi ghi đè đúng slot trong bảng hàm ảo. Đây chính là chỗ VMT hook ở tuần 9 được dùng thật.
- Tại sao overlay in-process dễ bị anti-cheat phát hiện hơn external.
- **Toán chiếu world → screen:** đọc chương "Toán 3D — World-to-Screen" ở cuối file. Thiếu nó thì overlay chỉ vẽ được chữ ở góc màn hình, không vẽ được box quanh enemy.
- **Tài liệu:** repo ImGui, thư mục `examples/example_win32_directx11` — copy khung đó rồi thay phần vẽ.

**Thực hành:**
- Hook `wglSwapBuffers` trong AssaultCube, vẽ dòng chữ "hello" bằng ImGui — bài khởi động, làm trước để chắc hook render chạy đã.
- Làm external overlay bằng GDI: cửa sổ layered, trong suốt, vẽ chữ đè lên game.
- Đo FPS của overlay, so sánh hai cách.

**Bài tập:**
- Overlay in-process: hiển thị FPS + toạ độ player.
- Overlay external: hiển thị đúng thứ đó, so sánh độ mượt và độ trễ.
- **Bài tập toán (bắt buộc trước khi vẽ box):** làm 5 bài trong chương "Toán 3D — World-to-Screen" — tìm view matrix của AssaultCube, chiếu một điểm cố định trước mặt vào giữa màn hình, rồi chiếu một enemy.

**Tiêu chí đạt:**
- [ ] Vẽ được chữ lên game qua hook render.
- [ ] Vẽ được chữ bằng external overlay.
- [ ] Giải thích được vì sao external overlay giật hơn.
- [ ] Không crash khi resize cửa sổ game.

---

### Điểm rẽ nhánh (đã quyết ở phần Tổng quan)

Nhánh A: sang **tuần 14** hướng A → 15–16. Nhánh B: **tuần 11 → 12 → 13** ở đây chỉ là bản tóm tắt — học song song bản đầy đủ trong giáo án **"Hack Game Mobile Android"** → 15–16. Điều kiện và phần bỏ lại ở mục "Rẽ nhánh" trong Tổng quan — nếu chưa chọn thì chọn bây giờ, đừng đi tiếp rồi mới đọc.

---

### Tuần 11 — Android: môi trường, GameGuardian, Frida Java

> **Tuần 11–13 ở đây là bản khung.** Bản đầy đủ — từng lệnh `adb`, patch smali, patch ARM64, IL2CPP, mod menu — nằm trong giáo án **"Hack Game Mobile Android"** (cùng thư mục). Nếu đi nhánh mobile, đọc giáo án đó song song và dùng nó làm nguồn chính.

**Mục tiêu:** dựng được môi trường android và hook được hàm Java.

**Lý thuyết:**
- **Môi trường:** emulator (AVD, Genymotion) hoặc điện thoại thật đã root. Root là điều kiện cho Frida server; emulator `google_apis` có sẵn root, bản Play Store thì không.
- `adb` — `adb devices`, `adb install`, `adb shell`, `adb push`, `adb logcat`. Không biết `adb` thì đừng mơ làm mobile.
- **Frida:** `frida-server` đẩy vào máy, chạy bằng root; client trên PC. Đúng kiến trúc: `arm64`, `arm`, `x86`, `x86_64`.
- **JS API:** `Java.perform`, `Java.use`, `.overload()`, `.implementation =`, `Java.choose`, `Java.enumerateLoadedClasses`.
- **App để luyện:** app tự build hoặc open-source. App thương mại thường có obfuscation + anti-tamper — xem ghi chú ở tuần 13 trước khi chọn mục tiêu.

**Thực hành:**
- Dựng emulator, cài `frida-server` đúng kiến trúc, chạy `frida-ps -U`.
- **GameGuardian**: quét và sửa gold/score của một game offline đơn giản. Đây là cách nhanh nhất để thấy memory game mobile hoạt động ra sao — cùng logic CE nhưng khác tool.
- Viết script Frida hook một hàm Java.

**Bài tập:**
- Sửa 1 giá trị bằng GameGuardian, ghi lại loại giá trị và số lần quét.
- Viết script Frida hook hàm Java, log tham số và sửa giá trị trả về.

**Tiêu chí đạt:**
- [ ] `frida-ps -U` liệt kê được process.
- [ ] Sửa gold bằng GameGuardian.
- [ ] Script Frida hook Java chạy, log ra đúng.
- [ ] `adb logcat` đọc được lỗi khi app crash.

---

### Tuần 12 — ARM64 & native hook

Native lib trên Android gần như luôn là **ARM64**. Toàn bộ asm bạn học từ tuần 3 là x86/x64 — sang đây nó vô dụng, nên tuần này vừa học kiến trúc mới vừa áp dụng ngay vào hook.

**Mục tiêu:** đọc được asm ARM64 và hook một hàm trong `.so`.

**Khác biệt cốt lõi:**

| | x86/x64 | ARM64 |
|---|---|---|
| thanh ghi | `rax`, `rcx`... tên chức năng | `x0`–`x30`, gần như không tên chức năng |
| thanh ghi đặc biệt | `rsp`, `rip` | `sp` (stack), `pc` (program counter), `x30` = **link register** |
| return address | đẩy lên stack | lưu ở `x30` khi `bl` |
| tham số hàm | `rcx`, `rdx`, `r8`, `r9` | `x0`, `x1`, `x2`, `x3`... tới `x7`, rồi stack |
| giá trị trả về | `rax` | `x0` |
| lệnh nhảy có điều kiện | `je`, `jne` | `b.eq`, `b.ne`, `cbz`, `cbnz` |

**Lệnh cần thuộc:** `mov`, `add`, `sub`, `ldr`, `str`, `bl` (call), `ret`, `b`, `b.eq`/`b.ne`, `cmp`, `cbz`/`cbnz`, `adrp` (lấy địa chỉ trang — bạn sẽ thấy nó khắp nơi).

**Trong Frida:**
- đọc tham số: `this.context.x0`, `x1`...
- sửa giá trị trả về: `retval.replace(ptr(999999))` (giống int64).
- đọc con trỏ từ thanh ghi: `this.context.x0.readPointer()`.

**Native lib căn bản:**
- `.so` là thư viện native, tương đương `.dll` trên Windows.
- ABI phổ biến: `arm64-v8a` (chính), `armeabi-v7a` (cũ), `x86_64` (chỉ emulator). Lấy đúng file từ APK: giải nén, vào `lib/<abi>/`.
- Hàm **export** nằm trong bảng symbol — tìm được bằng tên. Hàm **không export** (bị strip hoặc obfuscate) phải tìm bằng offset từ Ghidra.
- Ghidra: chọn **AARCH64** khi import, nếu không nó sẽ decode sai và bạn sẽ đọc ra rác.
- **Tài liệu:** AAPCS64 (tên chính thức của ARM64 ABI) cho quy ước gọi hàm, tham số và stack; Ghidra docs phần AARCH64.

**Hook native bằng Frida:**
- `Interceptor.attach(địa_chỉ, { onEnter, onLeave })`.
- `onEnter` có `args[]` cho tham số, `this.context` để đọc thanh ghi trực tiếp.
- `onLeave` có `retval` để sửa giá trị trả về.
- Script mẫu ở mục "Code mẫu tuần 12".

**Chọn môi trường cho đúng — đây là chỗ mất nhiều ngày nhất.** Game thật thường chỉ ship `arm64-v8a`. Emulator AVD mặc định trên PC x86 là system image x86_64, và game ARM chạy qua lớp dịch — hook ở đó lệch lung tung, không đại diện cho máy thật. Các lựa chọn, xếp theo độ thực tế:

1. **Máy thật Android đã root** — sạch nhất, đúng thứ bạn sẽ gặp khi làm thật.
2. **Tự build `.so` bằng NDK** — build **cả hai** ABI: `arm64-v8a` để luyện đọc asm ARM64 trong Ghidra, `x86_64` để chạy nhanh trên emulator khi luyện cơ chế hook. Bạn kiểm soát 100% hàm nào để hook, không phụ thuộc game.
3. **Emulator với system image ARM64** — đúng kiến trúc nhưng chạy bằng giả lập phần mềm trên PC x86, **rất** chậm; chỉ dùng để xác nhận script chạy được, đừng dùng để debug.

**Genymotion Desktop:** bản desktop thường là x86 kèm lớp dịch ARM, **không phải** ARM thật. Đừng tin nhãn "ARM" trên trang tải — kiểm tra `uname -m` trong `adb shell` trước khi đổ thời gian vào đó.

**Nhưng nhớ:** build `x86_64` chỉ luyện được **cơ chế** hook — `Interceptor.attach`, `onEnter`/`onLeave`, sửa `retval`. Còn `this.context.x0…x7` là **ARM64**; trên x86_64 thanh ghi là `rdi, rsi, rdx, rcx, r8, r9`. Đọc `x0` trên x86_64 sẽ ra `undefined` — đó không phải script hỏng, chỉ là sai kiến trúc.

**Thực hành:**
- Mở `libgame.so` trong Ghidra (AARCH64), tìm một hàm export.
- Viết script Frida hook hàm đó, log tham số và giá trị trả về.
- Sửa `retval`, xác nhận game nhận giá trị mới.

**Bài tập:**
- Hook một hàm native, log `onEnter` + `onLeave`.
- Tìm một hàm **không export** bằng offset, hook nó.

**Tiêu chí đạt:**
- [ ] Đọc được 10 lệnh ARM64 liên tiếp và giải thích.
- [ ] Hook được hàm export trong `.so`, log đúng tham số.
- [ ] Hook được hàm không export bằng offset.
- [ ] Sửa `retval` thành công.

---

### Tuần 13 — Mod APK & smali

**Mục tiêu:** sửa APK ở tầng Java/smali rồi build lại thành file cài được.

> **Chọn app để luyện:** app **tự build** hoặc **open-source** (F-Droid, GitHub). App thương mại thường có obfuscation + anti-tamper + kiểm tra chữ ký — bạn sẽ tưởng kỹ thuật của mình sai, trong khi thứ chặn bạn là packer. Và đừng sửa APK thương mại rồi phát tán lại: đó là phân phối phần mềm đã bị sửa, khác hẳn việc tự học trên máy mình.

**Lý thuyết:**
- `apktool d` / `apktool b` — giải nén và đóng gói lại.
- **Smali** = assembly của Java. Đọc được `.smali` là đọc được logic Java khi không có source.
- Cấu trúc APK: `classes.dex`, `res/`, `AndroidManifest.xml`, `lib/`.
- **Ký APK**: `apksigner`, tại sao APK đã sửa mà không ký lại thì không cài được.
- Tại sao phải gỡ bản cũ trước khi cài (chữ ký khác nhau).

**Thực hành:**
- Dịch một APK nhỏ bằng `apktool d`.
- Tìm chỗ khởi tạo gold trong smali, sửa hằng số.
- Rebuild, ký bằng `apksigner`, cài vào emulator.
- Xem log `adb logcat` khi app chạy.

**Bài tập:**
- Mod APK: gold khởi tạo = 999999.
- Ghi lại đường dẫn file `.smali` và đoạn code đã sửa.

**Tiêu chí đạt:**
- [ ] Mod APK rebuild và ký thành công.
- [ ] Cài được, chạy không crash, giá trị đã đổi.
- [ ] Giải thích được tại sao phải ký lại.

> **Hook native đã chuyển sang tuần 12** cùng với ARM64 — hai thứ đó phải học cùng nhau, tách ra là học vẹt.

---

### Tuần 14 — Chuyên sâu (chọn 1 hướng)

**Hướng A — Unity / Unreal:**
- Unity IL2CPP: Il2CppDumper → `dump.cs` → hook C++.
- Unreal: UE4SS, dump SDK.
- Bài tập: hook 1 hàm trong game Unity/Unreal.

**Hướng B — Kernel-mode (máy ảo):**
- Viết driver WDM đơn giản.
- Giao tiếp user ↔ kernel qua `DeviceIoControl`.
- Đọc memory từ kernel.
- Rủi ro: BSOD. Chỉ làm máy ảo.

**Hướng C — Anti-cheat research:**
- Đọc tài liệu EAC, BattlEye, Vanguard.
- Detection vector: signature, integrity, heartbeat.
- Bài tập: phân tích 1 anti-cheat, viết note.

**Tiêu chí đạt:**
- [ ] Có 1 project nhỏ theo hướng đã chọn.
- [ ] Giải thích được kỹ thuật dùng.

---

### Tuần 15 — Project: thiết kế & nền

Tuần này bạn **không** cố làm xong. Bạn dựng nền cho đúng, để tuần 16 chỉ còn việc hoàn thiện.

**Chọn 1 project:**
1. **Trainer PC** — overlay ImGui + hotkey + pointer chain tự động + ESP.
   Điều kiện: đọc xong chương "Toán 3D — World-to-Screen" và làm xong tuần 10. ESP là bài toán ma trận, không phải bài toán memory.
2. **Mod menu Android** — Frida script + UI đơn giản + hook native.
   Điều kiện: tuần 11–13 xong, có script chạy được trên emulator.
3. **Tool RE** — script Python đọc memory, hiển thị realtime, export ra file.

**Việc của tuần này:**
- Viết **spec 1 trang**: tool làm gì, cho game nào, tính năng nào bắt buộc, cái nào "nếu còn thời gian".
- Dựng khung project: repo, cấu trúc thư mục, `CMakeLists.txt` hay `.sln`, build ra `.exe` rỗng chạy được.
- Tách module: `memory.cpp` (read/write/pattern scan), `features.cpp` (từng tính năng), `main.cpp` (vòng lặp, hotkey).
- Làm được **đúng một tính năng** end-to-end: bật tool → tính năng chạy → tắt tool → sạch.

**Tiêu chí đạt:**
- [ ] Có spec bằng văn bản, bạn đọc lại hiểu ngay.
- [ ] Project build ra file chạy được.
- [ ] Một tính năng hoàn chỉnh, không phải năm tính năng dở dang.

---

### Tuần 16 — Project: hoàn thiện & README

**Việc của tuần này:**
- Hoàn thiện các tính năng còn lại trong spec.
- **Ổn định hoá:** chạy liên tục 30 phút không crash, bật/tắt 50 lần không rò handle, thoát game không treo tool.
- Xử lý lỗi: game chưa chạy, sai phiên bản, offset sai — tool phải báo rõ ràng chứ không im lặng.
- **README** — đây là phần bị coi thường nhất và cũng là phần chứng minh bạn hiểu:
  - tool làm gì, ảnh chụp màn hình;
  - kỹ thuật dùng: hook gì, chain nào, tại sao;
  - cách build;
  - giới hạn đã biết.
- Ghi lại **những gì đã sai** trong quá trình làm. Đây là phần có giá trị nhất với chính bạn 3 tháng sau.

**Tiêu chí đạt:**
- [ ] Project chạy ổn định như định nghĩa "ổn định" ở trên.
- [ ] Giải thích được từng dòng code quan trọng mà không nhìn comment.
- [ ] README đủ để người khác build lại.
- [ ] Có danh sách lỗi đã gặp và cách sửa.

---

## Code mẫu các tuần

### Tuần 4 — Script CE (Auto Assemble)

**Ba lỗi dưới đây là ba lỗi làm script CE "chạy được mà không có tác dụng". Đọc trước khi copy bất kỳ script nào trên mạng.**

### Ba lỗi thường gặp

1. **Label patch phải nằm ở địa chỉ gốc, không phải trong `newmem`.** Trong Auto Assemble, mọi thứ sau `newmem:` được ghi vào vùng nhớ vừa `alloc`. Chỉ khi bạn mở lại label của `aobscanmodule` (ở đây là `ammoDec:`) thì code mới được ghi vào game. Đặt một label khác sau `jmp returnhere` là ghi `jmp newmem` vào chính `newmem` → vòng lặp vô hạn ngay khi enable, hoặc không ghi gì vào game cả.
2. **`db` không nhận wildcard.** `db 2B ?? ?? ?? ?? ??` không hợp lệ. `[DISABLE]` phải ghi byte thật, hoặc tốt hơn: viết lại đúng lệnh asm gốc để CE tự assemble lại.
3. **Thiếu `dealloc`.** Mỗi lần enable/disable là rò một vùng nhớ, và lần enable sau có thể ghi vào địa chỉ đã cấp cho thứ khác.

### Stolen bytes — nguyên tắc thật

`jmp rel32` luôn tốn **đúng 5 byte**. Nhưng lệnh bạn muốn patch có thể chỉ 2 byte (`dec [esi]`) hoặc 6 byte. Nên không có chuyện "patch đúng một lệnh" — bạn luôn patch **một đoạn N byte với N ≥ 5**, và phải làm đủ ba bước:

1. Đo chiều dài các lệnh gốc cho tới khi tổng **≥ 5**.
2. Ghi `jmp newmem` (5 byte) + pad `nop` cho đủ N.
3. Trong `newmem`, **chép lại nguyên văn các lệnh gốc** đó trước khi `jmp returnhere`.

Bỏ bước 3 là bạn xoá luôn logic gốc. Với `dec [esi]` thì ammo ngừng giảm (có vẻ đúng ý), nhưng nếu lệnh bị đè là `mov eax,[ebp+8]` thì phần còn lại của hàm chạy với giá trị rác.

### Script đúng

Ví dụ dưới đây **minh hoạ cơ chế, không phải byte thật của AssaultCube** — bạn phải tự tìm lệnh thật bằng "Find out what writes to this address" rồi thay vào.

```
[ENABLE]
// pattern phải dài và đặc trưng. càng ngắn càng khớp nhầm.
// pattern = 5 byte lệnh thật (FF 0E + 8B 45 08) rồi 3 byte ?? của lệnh KẾ TIẾP.
// 8B 45 08 đã trọn 3 byte (opcode 8B, ModR/M 45, disp8 08) — ?? ?? ?? không
// thuộc nó, chỉ để chữ ký dài và đặc trưng hơn, tránh khớp nhầm chỗ khác.
aobscanmodule(ammoDec, ac_client.exe, FF 0E 8B 45 08 ?? ?? ??)
assert(ammoDec, FF 0E)      // không khớp thì CE báo lỗi, không ghi bừa
// tham số thứ 3 = "near": buộc newmem nằm trong ±2GB để jmp rel32 với tới.
// Không có nó, CE có thể cấp newmem xa hơn tầm nhảy -> enable là crash.
alloc(newmem, 128, ammoDec)
// đăng ký ammoDec làm symbol toàn cục: cần nếu bạn muốn dùng địa chỉ này
// trong address list / script khác, và để [DISABLE] giải phóng đúng thứ.
registersymbol(ammoDec)
label(returnhere)

newmem:
  // chép lại đúng các lệnh gốc đã bị đè:
  //   FF 0E    = dec [esi]          (2 byte)
  //   8B 45 08 = mov eax,[ebp+08]   (3 byte)
  // tổng 5 byte, vừa đúng một jmp rel32
  dec [esi]
  mov eax,[ebp+08]
  jmp returnhere

ammoDec:
  jmp newmem
returnhere:

[DISABLE]
ammoDec:
  // assemble lại lệnh gốc, KHÔNG dùng db với ??
  dec [esi]
  mov eax,[ebp+08]
unregistersymbol(ammoDec)
dealloc(newmem)
```

**Nếu tổng byte lệnh gốc lớn hơn 5:** sau `jmp newmem` thêm `nop` cho đủ, và `returnhere:` đặt sau các `nop` đó.

**Script trên chép lại `dec [esi]` nên hành vi không đổi — cố ý.** Nó minh hoạ cơ chế trước, để bạn thấy "chép stolen bytes" là bắt buộc. Muốn thấy hiệu ứng thật thì **bỏ `dec [esi]` khỏi `newmem`**: ammo sẽ ngừng giảm. Chỗ bị đè vẫn đúng 5 byte nên không cần `nop`; nhưng `[DISABLE]` vẫn phải assemble lại đủ 5 byte gốc.

**Đo ở đâu:** Memory Viewer của CE hiện sẵn cột byte bên cạnh asm. Hoặc chuột phải → "Show instruction length". Đừng đoán.

**Kiểm tra pattern có an toàn:** dán pattern vào ô scan của Memory Viewer (chế độ Array of Bytes) rồi xem nó khớp bao nhiêu chỗ. Khớp 1 chỗ là tốt. Khớp 40 chỗ là pattern của bạn vô dụng.

---

### Tuần 7 — Trainer C++ (đầy đủ)

```cpp
#undef UNICODE
#undef _UNICODE
#include <windows.h>
#include <tlhelp32.h>
#include <iostream>
#include <cstddef>
#include <cstdint>          // uint32_t/uintptr_t — không dựa vào include gián tiếp
#pragma comment(lib, "user32.lib")   // chỉ cần khi build bằng cl; VS project có sẵn

// player.h — xuất từ ReClass.NET ở tuần 3, đã đặt tên field. Nội dung thật
// của nó trông như thế này (ReClass sinh pad_XXXX cho những chỗ chưa đặt tên):
//   struct Player { char pad_0000[0x140]; int ammo; int hp; ... };
// Nên offsetof(Player, ammo) == 0x140, nhưng bạn không phải gõ 0x140 ở đâu nữa.
#include "player.h"

DWORD GetPID(const char* name) {
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (snap == INVALID_HANDLE_VALUE) return 0;
    PROCESSENTRY32 pe = { sizeof(pe) };
    DWORD pid = 0;
    if (Process32First(snap, &pe)) {
        do {
            if (!_stricmp(pe.szExeFile, name)) {
                pid = pe.th32ProcessID;
                break;
            }
        } while (Process32Next(snap, &pe));
    }
    CloseHandle(snap);
    return pid;
}

uintptr_t GetModuleBase(DWORD pid, const char* module) {
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPMODULE | TH32CS_SNAPMODULE32, pid);
    if (snap == INVALID_HANDLE_VALUE) return 0;
    MODULEENTRY32 me = { sizeof(me) };
    uintptr_t base = 0;
    if (Module32First(snap, &me)) {
        do {
            if (!_stricmp(me.szModule, module)) {
                base = (uintptr_t)me.modBaseAddr;
                break;
            }
        } while (Module32Next(snap, &me));
    }
    CloseHandle(snap);
    return base;
}

int main() {
    DWORD pid = GetPID("ac_client.exe");
    if (!pid) { std::cout << "game not running\n"; return 1; }

    // ĐỪNG dùng PROCESS_ALL_ACCESS. Nó fail (trả NULL) khi game chạy admin,
    // hoặc khi process được bảo vệ. Chỉ xin đúng quyền mình cần:
    HANDLE h = OpenProcess(PROCESS_VM_READ | PROCESS_VM_WRITE |
                           PROCESS_VM_OPERATION | PROCESS_QUERY_INFORMATION,
                           FALSE, pid);
    if (!h) {
        std::cout << "open failed, error = " << GetLastError() << "\n";
        return 1;
    }

    uintptr_t base = GetModuleBase(pid, "ac_client.exe");
    if (!base) {
        std::cout << "module base not found — game vừa thoát hoặc sai tên module\n";
        CloseHandle(h);
        return 1;
    }
    std::cout << "base = 0x" << std::hex << base << "\n";

    // Ở AssaultCube 1.2.0.2, base + 0x10F4F4 là con trỏ TỚI local player entity (static).
    // ammo KHÔNG nằm ở đó — nó là một field bên trong struct player trên heap.
    // Nên phải đọc 2 tầng: đọc con trỏ trước, rồi cộng offset của field.
    // (offset 0x10F4F4 phụ thuộc phiên bản game — tự tìm lại bằng CE.)
    uintptr_t playerPtrAddr = base + 0x10F4F4;

    // Độ rộng con trỏ do TARGET quyết định, không do trainer. Game 32-bit thì
    // con trỏ trong target luôn 4 byte, kể cả khi trainer build x64 — đọc
    // bằng uintptr_t (8 byte trên x64) sẽ lẫn 4 byte rác phía sau.
    uint32_t player32 = 0;
    if (!ReadProcessMemory(h, (LPCVOID)playerPtrAddr, &player32, sizeof(player32), nullptr)) {
        std::cout << "read player ptr failed, error = " << GetLastError() << "\n";
        CloseHandle(h);
        return 1;
    }
    uintptr_t player = player32;   // nâng lên size_t để cộng offset/địa chỉ
    std::cout << "player entity = 0x" << std::hex << player << "\n";

    // Đọc nguyên khối struct một lần, thay vì cộng từng offset bằng tay.
    // Player là struct export từ ReClass.NET (tuần 3): field có tên, nên khi
    // game update đổi offset, bạn sửa header chứ không sửa code.
    Player snap{};
    if (!ReadProcessMemory(h, (LPCVOID)player, &snap, sizeof(snap), nullptr)) {
        std::cout << "read player struct failed, error = " << GetLastError() << "\n";
        CloseHandle(h);
        return 1;
    }
    std::cout << std::dec << "hp = " << snap.hp << ", ammo = " << snap.ammo << "\n";

    // Ghi thì cần địa chỉ field: offsetof do compiler tính, không phải số gõ tay.
    uintptr_t ammoAddr = player + offsetof(Player, ammo);
    int ammo = 999;

    std::cout << "F1 = infinite ammo, F2 = exit\n";
    // Bit 15 (0x8000) = phím đang được giữ. Nhưng nếu dùng nó trực tiếp trong
    // loop Sleep(50), GIỮ F1 sẽ ghi + in log 20 lần/giây. Latch lại để chỉ
    // chạy đúng lúc phím chuyển từ nhả -> nhấn (edge trigger).
    bool f1Held = false;
    while (true) {
        bool f1Down = (GetAsyncKeyState(VK_F1) & 0x8000) != 0;
        if (f1Down && !f1Held) {
            WriteProcessMemory(h, (LPVOID)ammoAddr, &ammo, sizeof(ammo), nullptr);
            std::cout << "ammo set to 999\n";
        }
        f1Held = f1Down;
        if (GetAsyncKeyState(VK_F2) & 0x8000) break;
        Sleep(50);
    }
    CloseHandle(h);
    return 0;
}
```

---

### Tuần 8 — DLL + Injector

**mydll.cpp**
```cpp
#include <windows.h>
#pragma comment(lib, "user32.lib")   // chỉ cần khi build bằng cl; VS project có sẵn

// ĐỪNG gọi user32 (MessageBoxA...) ngay trong DllMain: bạn đang chạy dưới
// loader lock -> dễ deadlock, và LoadLibrary phía injector sẽ không trả về
// cho tới khi hộp thoại được tắt (injector treo ở WaitForSingleObject).
DWORD WINAPI InitThread(LPVOID) {
    MessageBoxA(nullptr, "injected", "mydll", MB_OK);
    return 0;
}

BOOL APIENTRY DllMain(HMODULE hModule, DWORD reason, LPVOID) {
    if (reason == DLL_PROCESS_ATTACH) {
        DisableThreadLibraryCalls(hModule);
        HANDLE th = CreateThread(nullptr, 0, InitThread, nullptr, 0, nullptr);
        if (th) CloseHandle(th);
    }
    return TRUE;
}
```

**injector.cpp**
```cpp
// Ép ANSI: tlhelp32 không có bản "...A", tên không hậu tố mới là ANSI.
#undef UNICODE
#undef _UNICODE
#include <windows.h>
#include <tlhelp32.h>
#include <iostream>
#include <cstring>          // strlen — thiếu cái này là lỗi compile trên MSVC

DWORD GetPID(const char* name) {
    HANDLE snap = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
    if (snap == INVALID_HANDLE_VALUE) return 0;
    PROCESSENTRY32 pe = { sizeof(pe) };
    DWORD pid = 0;
    if (Process32First(snap, &pe)) {
        do {
            if (!_stricmp(pe.szExeFile, name)) { pid = pe.th32ProcessID; break; }
        } while (Process32Next(snap, &pe));
    }
    CloseHandle(snap);
    return pid;
}

int main(int argc, char** argv) {
    if (argc < 3) { std::cout << "usage: injector.exe <proc> <dll>\n"; return 1; }
    DWORD pid = GetPID(argv[1]);
    if (!pid) { std::cout << "proc not found\n"; return 1; }

    HANDLE h = OpenProcess(PROCESS_VM_READ | PROCESS_VM_WRITE |
                           PROCESS_VM_OPERATION | PROCESS_CREATE_THREAD |
                           PROCESS_QUERY_INFORMATION, FALSE, pid);
    if (!h) { std::cout << "open failed, error = " << GetLastError() << "\n"; return 1; }

    const char* dll = argv[2];
    size_t len = std::strlen(dll) + 1;

    LPVOID addr = VirtualAllocEx(h, NULL, len, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
    if (!addr) {
        std::cout << "alloc failed, error = " << GetLastError() << "\n";
        CloseHandle(h); return 1;
    }

    if (!WriteProcessMemory(h, addr, dll, len, NULL)) {
        std::cout << "write failed, error = " << GetLastError() << "\n";
        VirtualFreeEx(h, addr, 0, MEM_RELEASE);   // đừng bỏ quên trang nhớ trong target
        CloseHandle(h); return 1;
    }

    LPVOID loadLib = (LPVOID)GetProcAddress(GetModuleHandleA("kernel32.dll"), "LoadLibraryA");
    HANDLE th = CreateRemoteThread(h, NULL, 0, (LPTHREAD_START_ROUTINE)loadLib, addr, 0, NULL);
    if (!th) {
        std::cout << "thread failed, error = " << GetLastError() << "\n";
        VirtualFreeEx(h, addr, 0, MEM_RELEASE);
        CloseHandle(h); return 1;
    }

    WaitForSingleObject(th, INFINITE);

    // Thread đã chạy xong -> LoadLibraryA đã đọc xong chuỗi. Giải phóng trang nhớ
    // trong target NGAY, không thì mỗi lần inject rò một trang 4KB nằm chết
    // trong game — kèm nguyên chuỗi đường dẫn DLL trong đó.
    VirtualFreeEx(h, addr, 0, MEM_RELEASE);

    // Thread chạy xong KHÔNG có nghĩa là DLL đã load. LoadLibraryA trả HMODULE,
    // 0 = fail: sai bit, thiếu dependency, đường dẫn sai, DLL bị chặn...
    // Không check chỗ này thì tool in "injected" trong khi chả có gì xảy ra.
    DWORD exitCode = 0;
    if (!GetExitCodeThread(th, &exitCode)) {
        std::cout << "GetExitCodeThread failed, error = " << GetLastError() << "\n";
        CloseHandle(th);
        CloseHandle(h);
        return 1;
    }
    CloseHandle(th);
    CloseHandle(h);

    if (exitCode == 0) {
        std::cout << "thread ran, but DLL did NOT load — wrong bit? missing dependency? path?\n";
        return 1;
    }
    // GetExitCodeThread trả DWORD (32 bit), còn HMODULE là con trỏ. Với target
    // 32-bit, DWORD đó chính là HMODULE đầy đủ. Với target 64-bit, nó bị cắt —
    // chỉ dùng làm cờ thành công (khác 0), tuyệt đối không dùng làm địa chỉ.
    std::cout << "injected, HMODULE = 0x" << std::hex << exitCode << "\n";
    return 0;
}
```

**Bốn lỗi làm inject fail mà không ai nói cho bạn:**

1. **Sai bit DLL.** DLL 32-bit không load được vào process 64-bit và ngược lại — nhưng `CreateRemoteThread` **vẫn** trả handle và thread **vẫn** chạy, chỉ có `LoadLibraryA` bên trong trả 0. Không đọc `exitCode` thì bạn thấy "injected" và tưởng thành công.
2. **Đường dẫn DLL.** `LoadLibraryA` chạy trong process đích, nên đường dẫn tương đối được resolve theo thư mục của **game**, không phải của bạn. Dùng đường dẫn tuyệt đối.
3. **`PROCESS_ALL_ACCESS` fail** khiến bạn tưởng game chống inject. Thực ra bạn chỉ xin sai quyền.
4. **Bản thân injector cũng phải cùng bit với target.** Code trên lấy địa chỉ `LoadLibraryA` từ chính process của injector rồi truyền sang target. Injector 64-bit đưa địa chỉ 64-bit của nó vào process 32-bit thì thread nhảy vào vùng nhớ không tồn tại — hoặc tệ hơn, vào chỗ tình cờ hợp lệ và crash ngẫu nhiên. Build injector cùng platform với game, đừng chỉ build DLL đúng bit.

---

### Tuần 9 — Hook bằng MinHook

**Bài tập `MessageBoxA` trong notepad có một cái bẫy chết người: notepad không bao giờ gọi `MessageBoxA`.** Bạn inject, hook thành công, rồi ngồi nhìn màn hình — không có gì xảy ra. Không phải code sai. Nó chỉ không được trigger.

Cách đúng: để chính DLL tự gọi nó, bạn sẽ thấy hook chạy ngay.

```cpp
#include <windows.h>
#include <MinHook.h>
#include <iostream>
#pragma comment(lib, "user32.lib")   // chỉ cần khi build bằng cl; VS project có sẵn

typedef int (WINAPI *MessageBoxA_t)(HWND, LPCSTR, LPCSTR, UINT);
static MessageBoxA_t origMessageBoxA = nullptr;

int WINAPI hookedMessageBoxA(HWND h, LPCSTR /*text*/, LPCSTR cap, UINT type) {
    // bạn đang ở đây. sửa tham số, chặn, log, hoặc trả giá trị giả.
    return origMessageBoxA(h, "hooked", cap, type);
}

DWORD WINAPI MainThread(LPVOID param) {
    HMODULE hSelf = (HMODULE)param;
    if (MH_Initialize() != MH_OK) { OutputDebugStringA("MH_Initialize fail\n"); return 1; }
    if (MH_CreateHook(reinterpret_cast<LPVOID>(&MessageBoxA),
                      reinterpret_cast<LPVOID>(&hookedMessageBoxA),
                      reinterpret_cast<LPVOID*>(&origMessageBoxA)) != MH_OK) return 1;
    if (MH_EnableHook(reinterpret_cast<LPVOID>(&MessageBoxA)) != MH_OK) return 1;

    // TỰ TRIGGER: gọi từ trong DLL để thấy hook hoạt động.
    // nếu hook đúng, text sẽ bị đổi thành "hooked".
    MessageBoxA(nullptr, "original text", "test", MB_OK);

    // Giữ thread sống. Return ngay thì thread chết nhưng hook vẫn còn — và
    // bạn không có chỗ nào để gỡ. Đây là lý do bài verify #5 (bật/tắt 20 lần)
    // cần một vòng lặp như thế này.
    // 0x8000 = phím đang được giữ. Dùng & 1 thì với Sleep(50) bạn dễ bấm hụt.
    while (!(GetAsyncKeyState(VK_END) & 0x8000)) Sleep(50);

    MH_DisableHook(MH_ALL_HOOKS);        // gỡ hook TRƯỚC khi DLL bị unload
    MH_Uninitialize();                   // giải phóng trampoline
    // Cho các thread khác đang chạy dở trong trampoline thoát ra trước khi
    // unmap DLL. Không có bước này, unload đúng lúc thread khác đang trong
    // hook -> crash ngẫu nhiên, rất khó tái hiện.
    Sleep(100);
    FreeLibraryAndExitThread(hSelf, 0);  // gỡ DLL khỏi process đích, không trả về
}

BOOL APIENTRY DllMain(HMODULE hModule, DWORD reason, LPVOID) {
    if (reason == DLL_PROCESS_ATTACH) {
        // Phải là hModule, không phải nullptr. nullptr thì hàm fail âm thầm
        // và bạn vẫn nhận DLL_THREAD_ATTACH/THREAD_DETACH như thường.
        DisableThreadLibraryCalls(hModule);

        // truyền hModule sang thread: FreeLibraryAndExitThread cần nó
        HANDLE th = CreateThread(nullptr, 0, MainThread, hModule, 0, nullptr);
        if (th) CloseHandle(th);   // không đóng là rò handle mỗi lần DLL được load
    }
    return TRUE;
}
```

**Về cast khi build:** MSVC cho phép chuyển ngầm con trỏ hàm sang `LPVOID`; GCC/Clang thì không và báo lỗi ở **mọi** tham số là con trỏ hàm. Mẫu trên đã `reinterpret_cast` cả ba chỗ (`pTarget`, `pDetour`, địa chỉ biến giữ trampoline) nên build được bằng cả hai. Nếu bạn rút gọn và bỏ cast, nhớ thêm lại — đừng chỉ cast tham số đầu.

**Bài tập thật: hook `CreateFileW` — hàm mà notepad có gọi.**

`MessageBoxA` chỉ để bạn thấy cơ chế chạy. Bài nộp là `CreateFileW`: mở file nào cũng trigger, kể cả notepad tự lưu autosave.

```cpp
typedef HANDLE (WINAPI *CreateFileW_t)(LPCWSTR, DWORD, DWORD, LPSECURITY_ATTRIBUTES,
                                       DWORD, DWORD, HANDLE);
static CreateFileW_t origCreateFileW = nullptr;

HANDLE WINAPI hookedCreateFileW(LPCWSTR path, DWORD access, DWORD share,
                                LPSECURITY_ATTRIBUTES sa, DWORD disp,
                                DWORD flags, HANDLE tmpl) {
    // KHÔNG mở file log bằng CreateFileW ở đây: bạn gọi chính hook của bạn,
    // đệ quy tới khi tràn stack. Hook đang chạy trên mọi luồng, mọi lúc.
    OutputDebugStringW(path);
    OutputDebugStringW(L"\n");
    return origCreateFileW(path, access, share, sa, disp, flags, tmpl);
}
```

Hai cái bẫy mà không ai nói trước:

1. **Notepad không có console.** `std::cout` trong hook sẽ không hiện ở đâu cả — bạn tưởng hook không chạy. Dùng `OutputDebugStringW` và xem bằng **DebugView** (Sysinternals), hoặc mở sẵn một handle log **trước khi** enable hook rồi `WriteFile` vào đó.
2. **Đừng log bằng chính hàm đang bị hook.** Mở file trong `hookedCreateFileW` là đệ quy vô hạn — hook gọi hook. Đây là lỗi làm treo cả notepad, và nó không giống bug thông thường nên rất khó lần.

Prototype phải đủ **7 tham số** và đúng thứ tự; sai một cái là stack lệch và notepad crash ngay lần mở file đầu tiên. Nhớ hook bản `...W` chứ không phải `...A` — notepad gọi bản `W`.

**Notepad trên Windows 11** là app đóng gói từ Store, chạy trong tiến trình/ngữ cảnh khác notepad cổ điển — inject có thể fail hoặc hành vi lạ. Gặp khó thì dùng `C:\Windows\System32\notepad.exe` bản cũ, hoặc tốt hơn: tự viết một target 20 dòng chỉ gọi `CreateFileW` khi bấm phím. Target tự viết là thứ bạn kiểm soát 100%, và sau này còn dùng lại để test tool.

Đăng ký hook thì thay **cả hai dòng** `MH_CreateHook` và `MH_EnableHook` trong `MainThread` ở trên — không chỉ dòng create:

```cpp
MH_CreateHook(reinterpret_cast<LPVOID>(&CreateFileW),
              reinterpret_cast<LPVOID>(&hookedCreateFileW),
              reinterpret_cast<LPVOID*>(&origCreateFileW));
MH_EnableHook(reinterpret_cast<LPVOID>(&CreateFileW));
// hoặc: MH_EnableHook(MH_ALL_HOOKS) để bật mọi hook đã tạo.
```

> Thiếu `MH_EnableHook`, `MH_CreateHook` vẫn trả `MH_OK` nhưng hook **chưa kích hoạt**: hàm gốc chạy bình thường, notepad mở file mà không log gì. Nếu còn sót dòng cũ `MH_EnableHook(&MessageBoxA)` trong khi đã thay create sang `CreateFileW`, nó trả `MH_ERROR_NOT_CREATED` — hook MessageBoxA chưa từng được tạo.

**Về trampoline:** MinHook ghi 5 byte đầu hàm đích thành `jmp`. Nhưng nó **tự copy** các byte bị đè sang một vùng nhớ khác (gọi là trampoline) và `origMessageBoxA` trỏ vào đó. Đó là lý do bạn gọi `origMessageBoxA` vẫn ra hành vi gốc. Hàm đích cần đủ chỗ để đè (thường ≥ 5 byte, hoặc vài lệnh liền nhau đủ dài); nếu MinHook không dựng được trampoline — gặp lệnh lạ, hàm quá ngắn — `MH_CreateHook` trả **`MH_ERROR_UNSUPPORTED_FUNCTION`**. Đừng bỏ qua return code: in `(int)status` hoặc `switch` trên `MH_STATUS` để biết nó fail ở đâu.

---

### Tuần 11 — Frida script (Java)

```javascript
Java.perform(function() {
    var MainActivity = Java.use("com.game.MainActivity");

    // .overload() là BẮT BUỘC khi hàm có overload: thiếu nó Frida không biết
    // chọn overload nào và ném "cannot set property implementation".
    // hàm có tham số: .overload("int", "java.lang.String")
    MainActivity.getGold.overload().implementation = function() {
        // Gọi bản gốc qua .call(this) — đây là API chính thức của
        // frida-java-bridge để chuyển tiếp tới implementation gốc, không đi
        // qua hook hiện tại. Đừng gọi MainActivity.getGold() trực tiếp: với
        // hàm overloaded Frida ném "ambiguous overload", và đó cũng không
        // phải đường chuyển tiếp chính thức.
        var real = MainActivity.getGold.overload().call(this);
        console.log("getGold original = " + real);
        return 999999;
    };
});
```

**Ba lỗi thường gặp khác của Frida trên mobile:**

1. **hàm static** — không có instance. Trong implementation, `this` là wrapper của class nên `MainActivity.getGold.overload().call(this)` vẫn đúng; gọi từ ngoài thì truyền `MainActivity` thay cho `this`.
2. **class bị obfuscate** (proguard/R8) — tên `com.game.MainActivity` biến thành `a.b.c`. Dùng `Java.enumerateLoadedClasses` để tìm class thật, hoặc `Java.choose`.
3. **frida-server chưa đúng kiến trúc** — máy arm64 phải dùng `frida-server-arm64`, x86 phải dùng bản x86. Sai là "unable to connect".

---

### Tuần 12 — Hook native bằng Frida

**Cảnh báo phiên bản:** Frida 17.0.0 (5/2025) **đã gỡ các hàm tĩnh của `Module`**. `Module.findBaseAddress`, `Module.findExportByName`, `Module.enumerateExports` không còn tồn tại; script kiểu cũ chỉ chạy trên ≤ 16.x. Đừng nhầm với `Process.findModuleByName` — hàm đó **vẫn còn** trong 17. Khác biệt: `Process.getModuleByName(name)` **ném lỗi** nếu module chưa load; `Process.findModuleByName(name)` trả `null` để bạn tự kiểm tra. Dùng `get` khi chắc module đã có, `find` khi cần dò mà không muốn script chết.

| | Frida ≤ 16.x | Frida 17+ |
|---|---|---|
| lấy module | `Module.findBaseAddress("x.so")` | `Process.getModuleByName("x.so").base` |
| lấy export | `Module.findExportByName("x.so", "f")` | `Process.getModuleByName("x.so").getExportByName("f")` |
| liệt kê export | `Module.enumerateExports("x.so")` | `Process.getModuleByName("x.so").enumerateExports()` |

```javascript
// Frida 17+: gọi method trên đối tượng Module, không dùng static của Module.
var mod = Process.getModuleByName("libgame.so");
var base = mod.base;
console.log("libgame base = " + base);

var get_gold = mod.getExportByName("get_gold");
if (get_gold) {
    Interceptor.attach(get_gold, {
        onEnter: function(args) {
            // args[0] = tham số 1, args[1] = tham số 2...
            // int: args[0].toInt32(), chuỗi: args[0].readCString()
            console.log("get_gold called");
        },
        onLeave: function(retval) {
            console.log("original return = " + retval);
            // HÀM TRẢ long / int64: phải bọc bằng ptr(), truyền số trực tiếp
            // sẽ ném type error ("expected a pointer").
            retval.replace(ptr(999999));
        }
    });
}

// hàm KHÔNG export (stripped, obfuscate) — dùng offset từ Ghidra:
// var fn = base.add(0x1A2B4);
// Interceptor.attach(fn, { ... });
```

**Nhớ bốn thứ:**

- `retval.replace(ptr(x))` cho int64/long/pointer; `retval.replace(x)` chỉ ổn với int32.
- nếu hàm trả về `bool` và game check nó, sửa `retval` đôi khi không đủ — game có thể đọc lại từ nơi khác. lúc đó phải hook cả hàm setter.
- **Ghidra hiển thị virtual address (VA), không phải offset trong file.** Công thức `base + (VA - imageBase)` là đúng. `imageBase` đọc trong Ghidra ở Window → Memory Map. Dùng offset file là hook lệch, và lệch thường không crash — nó chỉ im lặng sai.
- **Frida 17 không còn bundle bridge Java/ObjC/Swift** trong runtime. Chạy qua CLI (`frida`, `frida-trace`) thì bridge vẫn có sẵn. Nhúng vào Python riêng thì phải tự đóng gói bridge — hoặc đơn giản là dùng CLI.

---

## Giải thích sâu: Con trỏ

### 1. RAM là gì

RAM là dãy tủ nhỏ, mỗi tủ có:
- **Số hiệu** (địa chỉ) — ví dụ `0x7FFE0001`.
- **Nội dung** (giá trị) — ví dụ `100`.

Mỗi tủ chứa **1 byte**. Biến `int` chiếm **4 tủ liên tiếp**.

```
Địa chỉ:  0x100  0x101  0x102  0x103
Nội dung:  64     00     00     00     <- int x = 100 (little-endian)
```

- `&x` = `0x100` (địa chỉ tủ đầu tiên).
- `x` = `100` (giá trị đọc từ 4 tủ).

---

### 2. Biến thường vs con trỏ

**Biến thường:**
```c
int x = 100;
```
- Tủ tại `0x100` chứa `100`.
- `x` = `100`.
- `&x` = `0x100`.

**Con trỏ:**
```c
int *p = &x;
```
- Tủ tại `0x200` chứa `0x100` (địa chỉ của `x`).
- `p` = `0x100`.
- `*p` = đọc tủ tại `0x100` = `100`.
- `&p` = `0x200`.

**Hình dung:**
```
[0x100] = 100       <- x
[0x200] = 0x100     <- p (trỏ tới x)
```

`p` không chứa `100`, nó chứa **địa chỉ của `x`**.

---

### 3. Tại sao hack game cần con trỏ

Khi dùng Cheat Engine tìm HP, bạn tìm được **địa chỉ** — ví dụ `0x1A2B3C4D`.

Nhưng địa chỉ này **đổi mỗi lần chạy game** vì:
- **ASLR** (Address Space Layout Randomization) — OS random base address.
- Game **cấp phát động** — nhân vật được tạo ở đâu tùy lúc chạy.

Giải pháp: **pointer chain**. Thay vì hardcode `0x1A2B3C4D`, dùng:
```
hp = [[[base + 0x10] + 0x20] + 0x8]
```
- `base` = địa chỉ module game **trong tiến trình đang chạy**. Nó **đổi mỗi lần chạy** vì ASLR — luôn đọc lại, đừng hardcode. Thứ không đổi là **offset trong module** và cấu trúc chain.
- Mỗi `+ offset` là một bước nhảy qua con trỏ.

**Ví dụ thực tế:**
```
base                 = 0x00400000  (module ac_client.exe)
[base + 0x10]        = 0x00A1B2C0  (con trỏ tới PlayerList)
[0x00A1B2C0 + 0x20]  = 0x00C3D4E0  (con trỏ tới Player[0])
[0x00C3D4E0 + 0x8]   = HP value
```

Mỗi lần game chạy, `base` đổi, nhưng **cấu trúc chain không đổi**. Đọc `base` mới → tính lại → ra HP.

**Đó là lý do con trỏ là linh hồn của hack game.**

---

### 4. Con trỏ trỏ tới con trỏ

```c
int x = 100;
int *p = &x;      // p trỏ tới x
int **pp = &p;    // pp trỏ tới p

printf("%d\n", **pp);  // 100
```

```
[0x100] = 100       <- x
[0x200] = 0x100     <- p
[0x300] = 0x200     <- pp
```

`**pp` = `*(*(pp))` = `*(p)` = `*(0x100)` = `100`.

**Đây chính là pointer chain 2 cấp.** Chain 3–4 cấp cũng tương tự.

---

### 5. Struct và bộ nhớ

```c
typedef struct {
    int hp;      // offset 0
    int mp;      // offset 4
    int gold;    // offset 8
} Player;
```

```
Địa chỉ:  base+0   base+4   base+8
Nội dung: hp       mp       gold
```

- `p->hp` = đọc tại `p + 0`.
- `p->mp` = đọc tại `p + 4`.
- `p->gold` = đọc tại `p + 8`.

**Offset** chính là khoảng cách byte từ đầu struct tới field. Đây là lý do khi hack game bạn thấy "offset 0x8" — đó là `gold`.

**Căn lề (padding):**
```c
typedef struct {
    char c;      // offset 0, 1 byte
    int x;       // offset 4 (không phải 1!)
    char d;      // offset 8
    int y;       // offset 12
} Weird;
```
Compiler chèn 3 byte trống sau `c` để `x` căn lề 4 byte. `sizeof(Weird) = 16`, không phải 10. **Đây là cái bẫy** khi tính offset trong game.

**Quy tắc:** field luôn bắt đầu ở offset chia hết cho kích thước của nó (với kiểu ≤ 8 byte).

---

### 6. Bài tập tự kiểm tra

1. Đoán output:
```c
int a = 5;
int *p = &a;
int **pp = &p;
**pp = 10;
printf("%d\n", a);
```
Đáp án: `10`.

2. Đoán offset:
```c
typedef struct {
    char a;      // ?
    short b;     // ?
    int c;       // ?
    char d;      // ?
    int e;       // ?
} T;
```
Đáp án: `a=0, b=2, c=4, d=8, e=12`, `sizeof(T)=16`.

3. Viết chương trình in địa chỉ từng field của struct trên, verify offset.

---

## Giải thích sâu: 32-bit và 64-bit

### 1. Tại sao nó quan trọng hơn bạn nghĩ

Không chỉ là chọn tool. Nó đổi **cách bạn viết struct, cách bạn tính offset, cách bạn gọi hàm**.

- con trỏ x86 = 4 byte, x64 = 8 byte.
- `size_t` / `uintptr_t` phải dùng cho địa chỉ. **Đừng bao giờ** dùng `int` hay `DWORD` cho địa chỉ trong code 64-bit — nó cắt cụt giá trị và bạn ghi vào nhầm chỗ, mà không có lỗi nào.
- struct có con trỏ bên trong sẽ **to hơn** trên x64 → offset lệch → tool đọc sai mà không báo gì.

### 2. Đọc byte đầu của file exe

- `MZ` (2 byte) → offset `0x3C` → `PE\0\0` → trường `Machine`:
  - `0x014C` = x86 (32-bit)
  - `0x8664` = x64
- cách nhanh hơn: Task Manager → Details → cột **Architecture**.

### 3. WOW64 — game 32-bit trên Windows 64-bit

game 32-bit chạy trong subsystem **WOW64**. Bạn vẫn dùng `x32dbg` để debug nó. Cheat Engine hiện đại xử lý được cả hai loại process trong cùng một bản — không cần lo chuyện CE.

Thứ **thật sự** phải khớp bit:

- **debugger với process**: `x32dbg` cho 32-bit, `x64dbg` cho 64-bit. Đây là cặp nghiêm ngặt nhất.
- **DLL với process đích** khi inject.
- **độ rộng con trỏ trong code của bạn**: `uintptr_t`, không `DWORD`.

### 4. Checklist khi bắt đầu một game mới

1. Task Manager → Details → cột **Architecture** → 32 hay 64?
2. Chọn debugger đúng: `x32dbg` / `x64dbg`.
3. Chọn CE (một bản dùng được cả hai).
4. Nếu viết tool: `x86` hay `x64` build đúng platform, `uintptr_t` cho địa chỉ.
5. Nếu inject DLL: DLL phải cùng platform với process đích.

---

## Giải thích sâu: Toán 3D — World-to-Screen

Tuần 10 dạy overlay, nhưng ESP (project tuần 15–16) mới là chỗ cần phần toán dưới đây — và **không có nó thì ESP không tồn tại**. Bạn tìm được toạ độ enemy rồi vẫn không vẽ được cái box quanh đầu nó.

### 1. Ba không gian

- **world space** — toạ độ trong game (mét, unit...). `(x, y, z)`.
- **view space** — toạ độ so với camera.
- **screen space** — pixel trên màn hình.

ESP = lấy world position của enemy → chiếu qua camera → ra pixel → vẽ box.

### 2. View matrix là gì

game giữ một **ma trận 4x4** (thường 64 byte `float`, liên tiếp) để biến đổi world → view. Bạn tìm nó trong memory bằng CE: scan một dải float, hoặc tìm ngay cạnh camera position trong entity local player.

Đây là lý do ESP khó hơn hack máu: bạn phải tìm **một cấu trúc 64 byte**, không phải một con số.

### 3. Công thức

Bước 1 — world → clip. Có **hai công thức bộ nhớ**, và cách phân biệt là **translation nằm ở đâu**, không phải tên engine.

**A. Translation ở `m[3], m[7], m[11]`** — ma trận row-major dùng với column-vector. Kiểu này hay gặp ở **Source engine**, và ở game tự dựng ma trận rồi nạp thẳng vào shader:

```
clip.x = x*m[0]  + y*m[1]  + z*m[2]  + m[3]
clip.y = x*m[4]  + y*m[5]  + z*m[6]  + m[7]
clip.z = x*m[8]  + y*m[9]  + z*m[10] + m[11]
clip.w = x*m[12] + y*m[13] + z*m[14] + m[15]
```

**B. Translation ở `m[12], m[13], m[14]`** — **DirectX** (row-major + row-vector) và **OpenGL** (column-major + column-vector) cho ra **cùng một công thức bộ nhớ**:

```
clip.x = x*m[0] + y*m[4]  + z*m[8]  + m[12]
clip.y = x*m[1] + y*m[5]  + z*m[9]  + m[13]
clip.z = x*m[2] + y*m[6]  + z*m[10] + m[14]
clip.w = x*m[3] + y*m[7]  + z*m[11] + m[15]
```

> **Đừng tin nhãn "row-major / column-major" trong tài liệu** — chúng bị dùng lẫn lộn khắp nơi. Suy luận "DirectX là row-major nên translation ở `m[3]`" là **sai**: DirectX row-major nhưng đi với row-vector, nên translation vẫn ở `m[12..14]`. Cách chắc chắn: nhìn **vị trí translation** trong ma trận bạn dump được — `m[12..14]` thì dùng B, `m[3]/m[7]/m[11]` thì dùng A. **AssaultCube render bằng OpenGL → thử B trước.** Nhưng game tự dựng ma trận rồi nạp vào GL theo kiểu riêng là chuyện thường — thử cả hai, cái nào ra box đúng thì giữ.

Bước 2 — clip → NDC: chia cho `clip.w`.

Bước 3 — NDC → screen:
```
sx = (ndc.x + 1) * 0.5 * screenWidth
sy = (1 - (ndc.y + 1) * 0.5) * screenHeight   // y lật ngược, gốc toạ độ màn hình ở góc trên trái
```

**Điều kiện loại:** `clip.w < 0.1` → điểm nằm sau camera, đừng vẽ. Thiếu check này là box hiện ra cả sau lưng bạn.

### 4. Dấu hiệu bạn sai

| hiện tượng | nguyên nhân |
|---|---|
| box vẽ đúng nhưng lệch dần theo khoảng cách | sai handedness / sai trục z |
| box đứng yên khi xoay camera | đọc sai địa chỉ matrix (đọc nhầm cái tĩnh) |
| box hiện cả sau lưng | thiếu check `clip.w` |
| không vẽ ra chấm nào khi test bằng toạ độ của chính bạn | camera trùng vị trí player, `cw ≈ 0` → bị check chặn |
| mọi thứ dồn về một góc / box lệch dần | chọn nhầm công thức A/B (translation ở `m[3]` hay `m[12..14]`) |
| box co giãn sai khi lại gần | hàm chia perspective sai, hoặc chia nhầm trục |

### 5. Code C++ tối thiểu

```cpp
struct Vec3 { float x, y, z; };
struct Vec2 { float x, y; };

// A: row-major + column-vector (Source engine), translation ở m[3]/m[7]/m[11].
// KHÔNG phải kiểu DirectX — đừng dán nhãn đó vào đây.
bool WorldToScreen(const Vec3& w, const float m[16],
                   int screenW, int screenH, Vec2& out) {
    float cx = w.x*m[0]  + w.y*m[1]  + w.z*m[2]  + m[3];
    float cy = w.x*m[4]  + w.y*m[5]  + w.z*m[6]  + m[7];
    float cw = w.x*m[12] + w.y*m[13] + w.z*m[14] + m[15];

    if (cw < 0.1f) return false;          // sau camera

    float ndcX = cx / cw;
    float ndcY = cy / cw;

    out.x = (ndcX + 1.0f) * 0.5f * (float)screenW;
    out.y = (1.0f - (ndcY + 1.0f) * 0.5f) * (float)screenH;
    return true;
}

// B: row-major+row-vector (DirectX) và column-major+column-vector (OpenGL)
// cho cùng công thức này — translation ở m[12..14]. AssaultCube dùng B.
bool WorldToScreenGL(const Vec3& w, const float m[16],
                     int screenW, int screenH, Vec2& out) {
    float cx = w.x*m[0] + w.y*m[4] + w.z*m[8]  + m[12];
    float cy = w.x*m[1] + w.y*m[5] + w.z*m[9]  + m[13];
    float cw = w.x*m[3] + w.y*m[7] + w.z*m[11] + m[15];

    if (cw < 0.1f) return false;

    out.x = (cx / cw + 1.0f) * 0.5f * (float)screenW;
    out.y = (1.0f - (cy / cw + 1.0f) * 0.5f) * (float)screenH;
    return true;
}
```

### 6. Bài tập

Năm bài dưới đây là bài tập của **tuần 10**, và được dùng lại trong project tuần 15–16. Làm đúng thứ tự — bài 2 là bài kiểm tra nhanh nhất cho biết ma trận bạn đọc được có đúng không.

1. Tìm view matrix của AssaultCube bằng CE (nó ở static, khá dễ).
2. Vẽ chấm ở một toạ độ **cố định** trên bản đồ — điểm spawn, hoặc một bot đứng yên trước mặt. Nhìn thẳng vào nó thì chấm phải nằm giữa màn hình.
3. Vẽ chấm thứ hai ở toạ độ một enemy. Đi lại gần — chấm phải to ra / di chuyển đúng.
4. Vẽ box 2D quanh enemy từ chấm đó — bằng **GDI** hoặc cửa sổ debug trong suốt, chưa cần ImGui.
5. Chuyển box đó sang **ImGui**. (Dòng chữ "hello" ở thực hành tuần 10 là bài khởi động; đích của bài này là cái box.)

**Đừng lấy toạ độ của chính bạn để test bài 2.** Trong game góc nhìn thứ nhất, camera nằm ngay tại local player — khoảng cách theo trục nhìn gần bằng 0, nên `cw` rơi vào `if (cw < 0.1f) return false`. Hàm trả `false`, không có chấm nào, và bạn sẽ tưởng mình tìm sai view matrix. Đó là bẫy của bài test, không phải của ma trận.

---

## Verify: bài kiểm tra thật

Mỗi tuần, trước khi sang tuần sau, chạy bài này. Không qua được thì chưa đạt — kể cả khi bạn "cảm thấy hiểu".

1. **restart test** — tắt game, mở lại, tool vẫn tìm đúng giá trị. Không được chạy lại CE để tìm lại.
2. **reboot test** — restart máy, chạy lại. Pointer chain phải sống. Đây là bài kiểm tra thật của tuần 3.
3. **đóng tool test** — chạy game một mình, xác nhận giá trị gốc, rồi bật tool, xác nhận nó đổi. Không được để tool tự bịa số.
4. **giải thích test** — nói to lên, không nhìn code: "chỗ này làm gì, tại sao, nếu bỏ dòng này thì sao". Không qua được #4 thì bạn đang copy, không phải đang học.
5. **crash test** — bật/tắt tool 20 lần. Có crash nào không? Bug client-side thường chỉ lộ ra ở đây, không lộ ở lần chạy đầu.

### Trạng thái kiểm chứng của code mẫu

Đã build bằng `cl` dòng lệnh (MSVC 14.51 / VS 2026), cả x64 lẫn x86, và chạy thử trên Windows (lần cuối 29/10/2026). "Process test" là chương trình tự viết, giả lập đúng cấu trúc `Client { Player* }` — **không phải AssaultCube**. Đây là kết quả trên máy mình; bạn nên chạy lại trên máy bạn, nhất là nếu dùng MinGW (hành vi linker khác MSVC):

| Mẫu | x64 | x86 | Chạy thử |
|---|---|---|---|
| trainer (tuần 7) | build OK | build OK | **logic có** — process test 32-bit: đọc con trỏ 4 byte đúng, đọc struct, ghi ammo, giữ phím chỉ ghi 1 lần, không bấm thì 0 lần; **offset AC thật: chưa** |
| injector (tuần 8) | build OK | build OK | **có** — cả nhánh thành công lẫn sai bit |
| DLL tuần 8 | build OK | build OK | **có** — inject vào process test, dùng bản DLL không UI |
| hook MinHook (tuần 9) | build OK | build OK | **có** — MinHook v1.3.3 thật: hook/disable/uninit trong EXE (cả hai bản) và trong DLL + `FreeLibraryAndExitThread` qua injector; chưa hook game |
| `WorldToScreen` A/B | build + unit test | — | **có** — PASS cả hai, kể cả check `w` |
| script CE | — | — | chưa — cần game + CE |

Bài test trainer dùng `VK_F24` thay `F1` để không bấm nhầm app khác — cùng một đường `GetAsyncKeyState`, cùng logic latch. Kết quả: trainer x64 đọc target 32-bit đúng (không lẫn 4 byte rác), ghi `ammo` từ 30 → 999, giữ phím 2,5 giây chỉ ghi đúng 1 lần.

Ba thứ **vẫn chưa kiểm chứng**, đừng coi là đã xong: (1) offset `0x10F4F4` và pattern `FF 0E 8B 45 08` trên đúng file AC 1.2.0.2 — bài test chứng minh code đúng, không chứng minh số offset đúng; (2) script CE chưa được nạp vào CE; (3) toàn bộ Android (smali, ARM64, Frida 17) chưa chạy trên thiết bị thật. Khi có game/CE/thiết bị, chạy đúng thứ tự: xác nhận offset → trainer → script CE → hook.

Một khác biệt giữa hai cách build, đáng biết trước: **project VS có sẵn `user32.lib`, còn `cl` dòng lệnh thì không** — cùng một file, trong VS chạy được, ngoài command line báo `LNK2019`. Các mẫu trong tài liệu đều có pragma để cả hai cách build đều qua. Trainer và injector cũng đã build với `/DUNICODE /D_UNICODE` (tức project VS mặc định Unicode) mà không phải sửa gì. Đây là lý do bài "verify" tồn tại: đọc không thay được build.

---

## Tài nguyên & quy tắc

### Tài nguyên

| Loại | Nguồn |
|------|-------|
| CE tutorial | cheatengine.org (built-in) |
| Crackme | crackmes.one |
| RE | GuidedHacking, OALabs |
| Frida | frida.re/docs |
| Android mod | apktool docs, jadx |
| Cộng đồng | unknowncheats.me, guidedhacking.com |
| Video | LiveOverflow, GuidedHacking, OALabs |

### Quy tắc sống còn
1. **Không skip tuần** trong nhánh bạn đã chọn. Nền tảng yếu = tắc ở tuần 7 (PC) hoặc tuần 12 (mobile).
2. **Luôn ghi chép.** Địa chỉ, offset, lệnh asm — ghi hết.
3. **Hỏi khi tắc.** Kẹt quá 2 tiếng ở một bước thì dừng lại, ghi rõ bạn đã thử gì, rồi hỏi.
4. **Dùng máy ảo** cho: crackme (từ tuần 5), kernel driver, phân tích malware/anti-cheat. Snapshot trước mỗi lần chạy file lạ.
5. **Không hack game online có anti-cheat mạnh** ở giai đoạn học. Ban HWID là thật và nó đi theo phần cứng của bạn.
6. **Crackme không phải bài tập vô hại.** Chúng là file `.exe` lạ tải từ internet, và một số cố tình chứa malware. VM, không ngoại lệ.
7. **Trình cài Cheat Engine có thể kèm phần mềm quảng cáo.** Đọc từng màn hình, bỏ tick mọi thứ không phải CE. Trang chính thức là `cheatengine.org` — không tải từ mirror lạ.
8. **Windows Defender sẽ báo nhầm** injector, trainer, DLL bạn tự build. Đừng tắt Defender toàn hệ thống. Chỉ thêm **thư mục project của bạn** vào exclusions, và chỉ khi bạn biết chính xác file mình vừa build.
9. **Chỉ inject vào process của chính bạn.** Inject vào process của người khác trên máy không phải của bạn là chuyện khác hoàn toàn về mặt pháp lý — và nó không phải bài học nào trong lộ trình này.
10. **Tuần 14, hướng B và C là phần rủi ro nhất.** Driver đọc memory có thể BSOD; nghiên cứu anti-cheat dễ thành né tránh. Làm trong VM, và định hướng theo phía **phát hiện** ("anti-cheat nhìn thấy gì") thay vì phía né tránh — vừa an toàn hơn, vừa học được nhiều hơn.

---
