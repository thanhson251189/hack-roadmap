# Lộ Trình Từ Số 0 — Chuẩn Bị Vào Lộ Trình Hack Game 16 Tuần

> Dành cho người **chưa từng viết dòng code nào**.
> File này không dạy hack game. Nó đưa mày từ zero tới **vạch xuất phát** của `Lo-Trinh-Hack-Game-16-Tuan.md`.
> 12 tuần lõi + 2 tuần đệm, 10–12h/tuần. Xong thì mở file 16 tuần ở tuần 1 như bài ôn, rồi đi tiếp.

Nếu mày đã viết được chương trình C có con trỏ, struct, `malloc` và đọc được lỗi compile một mình — đừng đọc file này. Vào thẳng file 16 tuần.

---

## Mục lục

1. File này dùng thế nào
2. Điều kiện vào và điều kiện ra
3. Sự thật cần biết trước
4. Tuần 1 — Môi trường và chương trình đầu tiên
5. Tuần 2 — Biến, kiểu, toán tử, rẽ nhánh
6. Tuần 3 — Vòng lặp và hàm
7. Tuần 4 — Mảng và chuỗi
8. Tuần 5 — Con trỏ I
9. Tuần 6 — Con trỏ II và struct
10. Tuần 7 — Stack, heap, malloc/free
11. Tuần 8 — Nhiều file, header, link
12. Tuần 9 — File I/O, bit và thập lục phân
13. Tuần 10–12 — Project tổng hợp và kiểm tra
14. Bài kiểm tra bàn giao
15. Bàn giao sang file 16 tuần
16. Phương pháp học
17. Dùng AI đúng cách
18. Tiếng Anh
19. An toàn và pháp lý
20. Những thứ không học bây giờ
21. Lịch và quản lý thời gian
22. Dấu hiệu mày đang học sai
23. Tài nguyên
24. Phụ lục A — Lỗi thường gặp
25. Phụ lục B — Checklist tự debug 20 phút
26. Phụ lục C — Mẫu ghi chép
27. Phụ lục D — Từ vựng tối thiểu
28. Phụ lục E — Bảng chuyển tiếp

---

## 1. File này dùng thế nào

- Đây là **đoạn đường vào**, không phải cuộc đua. File 16 tuần là cuộc đua.
- **Không đọc trước file 16 tuần** trong lúc học file này. Ngoại lệ duy nhất: hai chương "32-bit và 64-bit" và "địa chỉ tĩnh/động" — đọc ở tuần 12, và chỉ đọc để hiểu khái niệm.
- **Không học song song nhiều nguồn.** Lấy file này làm xương sống. Sách, video, AI chỉ để tra khi tắc.
- Mỗi tuần có: việc phải làm, bài tập, tiêu chí đạt, lỗi thường gặp. **Không đạt tiêu chí thì chưa sang tuần sau** — trừ tuần đệm.
- **Tự gõ toàn bộ code.** Không copy-paste. Không nhờ AI viết hộ cả bài. Gõ lại từng ký tự là một phần của việc học, không phải hình thức.
- Số tuần là mốc, không phải deadline. Người đi nhanh 10 tuần, người chậm 20 tuần. **Gate quan trọng hơn lịch.**

---

## 2. Điều kiện vào và điều kiện ra

**Điều kiện vào:**

- Máy Windows 10/11 64-bit, RAM 8GB (16GB thoải mái hơn), 20GB trống.
- 10–12h/tuần, chia đều. Không cần 12h một ngày rồi nghỉ cả tuần.
- Tiếng Anh đủ đọc hoặc chịu khó tra từng từ. Không cần nói.
- Không cần toán cao cấp. Cần cộng trừ nhân chia, hiểu số âm, hiểu phần trăm.

**Điều kiện ra:** qua **bài kiểm tra bàn giao** ở mục 14. Checklist ngắn gọn:

- [ ] Từ file trống, tự viết được chương trình có struct, mảng cấp phát động, ghi/đọc file nhị phân, sửa field qua con trỏ, `free` sạch.
- [ ] Build Debug không còn leak report.
- [ ] Giải thích miệng được `&x`, `*p`, `p->hp`, stack vs heap, padding, `malloc/free`.
- [ ] Tự sửa được 2 bug bằng debugger mà không cần ai chỉ.
- [ ] Đọc được thông báo lỗi compile bằng tiếng Anh và biết sửa.

Qua hết thì mày vào file 16 tuần ở tuần 1 với tư cách **ôn tập**, không phải lần đầu.

---

## 3. Sự thật cần biết trước

**Đây là 3–4 tháng, không phải 3 tuần.** Mục tiêu của giai đoạn này là biến mày thành người *biết lập trình*, chưa phải người *hack được game*. Trong 12 tuần này mày sẽ không hack được game nào. Đó là thiết kế, không phải thất bại.

**Tuần 5 là bức tường.** Con trỏ là chỗ gần như ai cũng đập đầu. Người đi tiếp được không phải vì thông minh hơn, mà vì chấp nhận vẽ hình ra giấy và làm lại bài đến lần thứ mười. Nếu tuần 5 mất 3 tuần, bình thường.

**Feedback loop ở giai đoạn này tốt hơn giai đoạn sau.** Bây giờ sai là có lỗi compile hoặc crash ngay. Sang phần hack game, sai thường **im lặng** — không crash, chỉ ra số rác. Vì vậy kỹ năng quan trọng nhất mày rèn ở đây không phải cú pháp C, mà là **debug**: đặt giả thuyết, kiểm tra, khoanh vùng. Cú pháp tra Google 30 giây là có; kỹ năng debug thì không.

**Tiếng Anh là điều kiện thực tế.** Mọi thông báo lỗi, tài liệu, diễn đàn của ngành này đều bằng tiếng Anh. Không cần giỏi, nhưng phải chịu đọc. Xem mục 18.

**Không có chuyện "học xong C".** Chỉ có "đủ để đi tiếp". Đừng đọc hết một cuốn sách rồi mới viết chương trình đầu tiên. Tỷ lệ đúng: 70% gõ code, 30% đọc.

**Đừng so mình với người khác.** Người "0 → hack game 2 tháng" thường đã có nền lập trình, hoặc đang bỏ qua đúng những thứ file này dạy.

---

## 4. Tuần 1 — Môi trường và chương trình đầu tiên

**Mục tiêu:** cài được công cụ, tạo project, build, chạy, mở debugger, đọc được một lỗi compile. Không học gì sâu trong tuần này.

### 4.1 Cài Visual Studio

1. Vào `visualstudio.microsoft.com`, tải **Visual Studio Community** (bản miễn phí).
2. Trong installer, chọn đúng một workload: **Desktop development with C++**. Không cần workload khác. (Nếu bản 2026 có tên hơi khác, tìm đúng nhóm "C++" và "Desktop".)
3. Cài. Dung lượng vài GB, chờ là bình thường.

**Vì sao Visual Studio mà không phải thứ khác:** nó có sẵn compiler, debugger, và đúng hệ sinh thái mày sẽ dùng ở tuần 6–9 của file 16 tuần (WinAPI, MSVC). Cài một lần, dùng suốt. Người mới đổi công cụ liên tục là người mất thời gian vào công cụ thay vì code.

**Nếu máy quá yếu hoặc muốn bản nhẹ:** cài **MSYS2**, rồi trong terminal MSYS2 chạy `pacman -S mingw-w64-ucrt-x86_64-gcc`, thêm thư mục `ucrt64\bin` vào PATH. Build bằng `gcc hello.c -o hello.exe`, debug bằng `gdb`. Cách này nhẹ hơn nhưng mày phải tự lo nhiều thứ hơn. **Chọn một trong hai, đừng cài cả hai trong tuần này.**

### 4.2 Tạo project đầu tiên

1. File → New → Project → **Empty Project** (C++) → đặt tên `hello`, thư mục `D:\code\hello`.
   Tạo thư mục code riêng, đừng để lẫn với tài liệu.
2. Solution Explorer → chuột phải **Source Files** → Add → New Item → chọn **C++ File (.cpp)** nhưng đặt tên `hello.c`.
   **Đuôi `.c` rất quan trọng**: MSVC sẽ biên dịch bằng C. Đặt `.cpp` là nó chuyển sang luật C++, và mày sẽ gặp những lỗi khó hiểu về sau.
3. Chuột phải project → **Set as Startup Project**.
4. Ctrl+F5 = build và chạy không debug. F5 = build và chạy có debug.

### 4.3 Chương trình đầu tiên

```c
#include <stdio.h>

int main(void) {
    printf("hello\n");
    return 0;
}
```

Giải thích từng dòng — mày phải nói được mấy câu này, không cần thuộc lòng:

- `#include <stdio.h>`: xin compiler đưa vào khai báo của `printf`. Thiếu nó, compiler không biết `printf` là gì.
- `int main(void)`: điểm bắt đầu của chương trình. `int` là kiểu trả về, `void` nghĩa là không nhận tham số.
- `printf("hello\n");`: in ra màn hình. `\n` là xuống dòng.
- `return 0;`: báo cho hệ điều hành biết chương trình kết thúc bình thường.

**Nếu gặp lỗi C4996 về `scanf` hoặc `strcpy`:** đó là MSVC coi các hàm cũ là không an toàn. Thêm dòng này **trước tất cả** `#include`:

```c
#define _CRT_SECURE_NO_WARNINGS
```

Đây là cách chấp nhận được khi học. Nhưng với chuỗi, mày vẫn sẽ dùng `fgets` chứ không dùng `scanf("%s")` — lý do ở tuần 4.

### 4.4 Đọc lỗi compile

Cố ý làm hỏng chương trình theo 3 cách, mỗi lần build và **ghi lại nguyên văn thông báo**:

1. Xóa dấu `;` sau `printf(...)`.
2. Đổi `printf` thành `print`.
3. Đổi `return 0;` thành `return;`.

Mẫu thông báo mày sẽ thấy:

```
hello.c(7): error C2143: syntax error: missing ';' before 'return'
```

Đọc theo thứ tự: **file → dòng → mã lỗi → mô tả**. Sửa lỗi **đầu tiên** trước. Nhiều lỗi phía sau thường chỉ là hệ quả của lỗi đầu tiên.

Phân biệt hai loại:

- **Compile error** — code sai cú pháp, không ra file `.exe`. Sửa ngay.
- **Link error** — code đúng cú pháp nhưng thiếu định nghĩa hàm hoặc thiếu thư viện. Học ở tuần 8.
- **Runtime bug** — chạy được nhưng ra sai hoặc crash. Đây là loại debugger dùng để tìm.

### 4.5 Debugger lần đầu

Mở `hello.c`, đặt breakpoint ở dòng `printf` bằng cách bấm **F9** (hoặc click lề trái). Nhấn **F5**.

- **F10** = step over: chạy qua dòng hiện tại, không chui vào hàm.
- **F11** = step into: chui vào bên trong hàm được gọi.
- **Shift+F11** = step out: chạy hết hàm hiện tại.
- Cửa sổ **Locals** hiện biến local. **Watch** để thêm biểu thức cần theo dõi. **Call Stack** hiện đường đi tới dòng hiện tại. **Memory** (Debug → Windows → Memory) xem bộ nhớ thô.

Bài tập debug đầu tiên — đoán trước khi chạy, rồi kiểm tra bằng debugger:

```c
#include <stdio.h>

int main(void) {
    int a = 7;
    int b = 2;
    double average = (a + b) / 2;

    printf("average = %f\n", average);
    return 0;
}
```

Nó in `4.000000`, không phải `4.500000`. Đặt breakpoint ở dòng `double average`, bấm F10 để chạy qua, xem giá trị trong Locals. Tìm hiểu vì sao. Sửa. Ghi lại vào sổ.

### 4.6 Terminal tối thiểu

Mở Command Prompt (Win+R → `cmd`):

```
cd /d D:\code\hello
dir
hello\x64\Debug\hello.exe
```

- `cd` đổi thư mục. `cd /d` cho phép đổi ổ đĩa.
- `dir` liệt kê file.
- Gõ tên file `.exe` để chạy.
- **PATH** là danh sách thư mục mà Windows tự tìm lệnh. Vì `hello.exe` không nằm trong PATH, mày phải gõ đường dẫn đầy đủ hoặc đứng đúng thư mục. Hiểu khái niệm này là đủ; không cần cấu hình PATH trong tuần này.

Vì sao phải học terminal khi đã có nút Run trong Visual Studio: về sau mọi tool (debugger, injector, `adb`, Frida) đều chạy từ dòng lệnh. Bây giờ chỉ cần quen cảm giác.

### 4.7 Tiêu chí đạt tuần 1

- [ ] Tự tạo một project mới từ đầu, thêm file `.c`, build và chạy được — không nhìn hướng dẫn.
- [ ] Cố ý gây 3 lỗi compile và đọc được thông báo của từng lỗi.
- [ ] Dùng breakpoint + F10 xem được giá trị biến.
- [ ] Chạy được file `.exe` từ terminal bằng đường dẫn.
- [ ] Sửa được bài `average` và giải thích tại sao kết quả cũ sai.

**Lỗi thường gặp tuần 1:** đặt file `.cpp` thay vì `.c`; quên Set as Startup Project; build nhầm cấu hình; đọc lỗi cuối cùng thay vì lỗi đầu tiên; sửa code mà không build lại; không biết Output window ở đâu (View → Output).

---

## 5. Tuần 2 — Biến, kiểu, toán tử, rẽ nhánh

**Mục tiêu:** viết được chương trình tính toán có điều kiện, hiểu kiểu dữ liệu và cái bẫy số học.

### Việc phải làm

- Biến = tên + kiểu + giá trị + **địa chỉ** (địa chỉ sẽ học kỹ ở tuần 5, tuần này chỉ cần biết nó tồn tại).
- Các kiểu: `char` (1 byte), `short` (2), `int` (4), `long long` (8), `float` (4), `double` (8), `unsigned`/`signed`. Dùng `sizeof` để kiểm tra thay vì tin trí nhớ.
- `printf`/`scanf` và format specifier: `%d` int, `%u` unsigned, `%lld` long long, `%f` float, `%lf` double (khi `scanf`), `%c` char, `%s` chuỗi, `%zu` size_t, `%p` con trỏ.
- Toán tử `+ - * / %`, so sánh `== != < <= > >=`, logic `&& || !`.
- **Số nguyên chia số nguyên ra số nguyên**: `5 / 2 == 2`. Muốn `2.5` phải có ít nhất một toán hạng `double`.
- Ép kiểu `(double)a / b`; hiểu vì sao `(double)(a / b)` là sai.
- `if / else if / else`, `switch`, toán tử ba ngôi `? :`.
- `const`; đặt tên biến có nghĩa.
- `scanf` trả về **số lượng đọc thành công** — luôn kiểm tra. Quên `&` trước biến là lỗi kinh điển.

### Bài tập

1. Nhập 3 số, in số lớn nhất. Tự viết, không dùng hàm có sẵn.
2. Nhập cân nặng (kg) và chiều cao (m), tính BMI, in 2 chữ số thập phân, phân loại.
3. Máy tính 4 phép tính + dư, dùng `switch`. Chia cho 0 phải báo lỗi, không crash.
4. Nhập năm, kiểm tra năm nhuận (chia hết 400, hoặc chia hết 4 và không chia hết 100).
5. Nhập điểm 0–10, in xếp loại A/B/C/D/F. Nhập điểm ngoài khoảng thì báo lỗi.
6. Nhập 2 số nguyên, in thương và dư. Sau đó sửa để thương là số thực.
7. Đoán output trước khi chạy: `int x = 7; printf("%d %d\n", x / 2, x % 2);`

### Tiêu chí đạt tuần 2

- [ ] Viết `max3` và máy tính từ trang giấy trắng trong 30 phút.
- [ ] Giải thích được vì sao `5/2` ra `2`, và sửa đúng.
- [ ] Giải thích được vì sao `scanf("%d", x)` sai.
- [ ] Không còn warning "uninitialized variable" trong bài của mình.

**Lỗi thường gặp:** dùng `=` trong `if`; quên `&`; `scanf("%d")` cho `double`; chia cho 0; đọc biến chưa gán; nhầm `%f` và `%lf`; tràn `int` khi tính giai thừa (tuần 3 sẽ gặp); `scanf` để lại ký tự xuống dòng làm lần đọc sau bị trượt.

---

## 6. Tuần 3 — Vòng lặp và hàm

**Mục tiêu:** điều khiển luồng bằng vòng lặp, chia chương trình thành hàm, hiểu tham số truyền theo giá trị.

### Việc phải làm

- `for`, `while`, `do/while`; `break`, `continue`; vòng lặp lồng nhau.
- Các mẫu vòng lặp: đếm, tích lũy, tìm kiếm, đảo ngược, in hình.
- Hàm: khai báo (prototype) vs định nghĩa; tham số; giá trị trả về; `void`; `return` thoát hàm ngay.
- Phạm vi (scope) và thời gian sống (lifetime) — giới thiệu, học kỹ ở tuần 7.
- Truyền tham số **theo giá trị**: hàm nhận bản sao. Sửa bản sao không đổi biến gốc. Đây là lý do tuần 5 phải học con trỏ.
- Tràn số: `int` 32-bit chỉ chứa tới khoảng 2.1 tỷ. Giai thừa 13 đã tràn. Với số lớn dùng `unsigned long long` và vẫn phải biết giới hạn.

### Bài tập

1. In bảng cửu chương 1–9, căn cột bằng `%2d` hoặc `%3d`.
2. Tính `n!` bằng vòng lặp. In từng bước. Thử `n = 13`, quan sát tràn số.
3. Kiểm tra số nguyên tố bằng chia thử tới `sqrt(n)` (dùng `<math.h>`, hàm `sqrt`, nhớ link `-lm` nếu dùng gcc).
4. In 20 số Fibonacci đầu. Dùng `unsigned long long`, quan sát giới hạn.
5. Trò chơi đoán số 1–100: máy chọn bằng `rand()`, người đoán, đếm số lần, cho biết cao/thấp. Dùng `srand(time(NULL))` (cần `<stdlib.h>`, `<time.h>`).
6. Viết hàm `int is_even(int n)`, `int min3(int a, int b, int c)`, `long long power(int base, int exp)`.
7. In tam giác sao, tam giác số, kim tự tháp — mỗi cái một vòng lặp lồng.
8. Viết chương trình in các số từ 1 đến 100, bỏ số chia hết cho 3, dừng khi gặp số chia hết cho 17.

### Tiêu chí đạt tuần 3

- [ ] Viết `factorial`, `is_prime`, và một trò chơi nhỏ từ trang giấy trắng.
- [ ] Giải thích được truyền theo giá trị, và vì sao hàm không sửa được biến gốc.
- [ ] Tự tìm được lỗi infinite loop bằng cách in biến đếm.
- [ ] Biết đặt prototype trước `main` hoặc định nghĩa hàm trước khi gọi.

**Lỗi thường gặp:** `for (i = 0; i <= n; i++)` khi mảng chỉ có `n` phần tử; quên tăng biến đếm; `return` trong `void`; khai báo hàm trùng tên; biến local trùng tên biến ngoài (shadowing); dùng `sqrt` mà không include `<math.h>`.

---

## 7. Tuần 4 — Mảng và chuỗi

**Mục tiêu:** làm việc với dãy dữ liệu và chuỗi an toàn. Đây là tuần cuối trước khi vào con trỏ.

### Việc phải làm

- Mảng: khai báo, khởi tạo, chỉ số từ 0, **không có kiểm tra biên**. Ghi ngoài biên là hành vi không xác định: có thể không crash, có thể hỏng dữ liệu khác, có thể crash lúc khác.
- `sizeof(arr) / sizeof(arr[0])` chỉ đúng khi mảng còn là mảng trong cùng hàm. Khi truyền vào hàm, nó suy biến thành con trỏ — đây là lý do hàm nhận thêm tham số `n`. Sẽ hiểu đầy đủ ở tuần 5.
- Mảng 2 chiều: `int m[3][4]`, duyệt bằng 2 vòng lặp.
- Chuỗi C = mảng `char` kết thúc bằng `'\0'`. `"abc"` chiếm 4 byte.
- `fgets(buf, sizeof buf, stdin)` an toàn hơn `scanf("%s")` vì có giới hạn kích thước. `fgets` giữ lại `'\n'`, cắt bằng `buf[strcspn(buf, "\n")] = '\0';`.
- `strlen`, `strcmp` (trả 0 khi bằng), `snprintf` để ghép chuỗi có giới hạn. **Không so chuỗi bằng `==`** — nó so địa chỉ, không so nội dung.
- Vì sao `scanf("%s")` nguy hiểm: không biết kích thước buffer, người dùng gõ dài là ghi tràn. Đây là lỗi bảo mật thật, không phải chuyện học thuật.

### Bài tập

1. Nhập `n` (1–100), nhập `n` số, in tổng, trung bình, min, max.
2. Đảo mảng tại chỗ bằng chỉ số (tuần sau làm lại bằng con trỏ).
3. Nhập một dòng, đếm nguyên âm, chữ số, khoảng trắng.
4. Kiểm tra chuỗi đối xứng (palindrome), chưa cần phân biệt hoa thường.
5. Nhập 10 số, sắp xếp tăng dần bằng bubble sort. Giải thích từng lần đổi chỗ, không cần tối ưu.
6. Nhập tên bằng `fgets`, cắt newline, in độ dài bằng `strlen`. Thử nhập tên dài hơn buffer để thấy `fgets` cắt an toàn.
7. Ma trận 3×3: nhập, in, tính tổng từng hàng và từng cột.
8. Viết hàm `int count_char(const char *s, char c)` — dù chưa học con trỏ, chỉ cần biết `const char *` là cách nhận chuỗi.

### Tiêu chí đạt tuần 4

- [ ] Viết bubble sort và palindrome từ trang giấy trắng.
- [ ] Giải thích được `'\0'`, và vì sao `sizeof(arr)` trong `main` khác trong hàm.
- [ ] Nhập chuỗi bằng `fgets` an toàn, không dùng `scanf("%s")`.
- [ ] Phân biệt được lỗi compile và lỗi logic.

**Gate A (sau tuần 4):** trong 2 giờ, từ trang giấy trắng viết lại `max3`, `factorial`, bubble sort, palindrome. Không tra mạng. Qua thì sang tuần 5.

**Lỗi thường gặp:** `for (i = 0; i <= n; i++)` với mảng `n` phần tử; quên `'\0'`; dùng `strcmp(a, b) == 1` thay vì `!= 0`; `fgets` giữ newline làm so sánh sai; buffer quá nhỏ; in chuỗi bằng `%s` khi chưa kết thúc bằng `'\0'`.

---

## 8. Tuần 5 — Con trỏ I

**Mục tiêu:** hiểu và dùng được con trỏ ở mức cơ bản. Đây là tuần khó nhất của giai đoạn này. Cho phép mất 2 tuần.

### Việc phải làm

- RAM là dãy ô byte, mỗi ô có **địa chỉ**. Biến là một vùng nhớ có tên.
- `&x` lấy địa chỉ. `*p` đọc/ghi giá trị tại địa chỉ `p` đang giữ.
- Khai báo: `int *p = &x;`. Kiểu của con trỏ phải khớp kiểu dữ liệu nó trỏ tới.
- Sửa giá trị qua con trỏ: `*p = 999;` làm `x` đổi.
- Con trỏ `NULL`; luôn khởi tạo; kiểm tra trước khi dereference.
- Con trỏ và mảng: tên mảng suy biến thành con trỏ tới phần tử đầu; `arr[i]` tương đương `*(arr + i)`; cộng con trỏ theo đơn vị phần tử, không phải byte.
- Truyền con trỏ vào hàm để hàm sửa được biến gốc — đây là lý do `swap` cần con trỏ.
- Kích thước con trỏ: 4 byte trên x86, 8 byte trên x64. In bằng `%p`, ép `(void *)`.
- Dùng cửa sổ **Memory** của Visual Studio: nhập `&x`, xem 4 byte của `int`.

### Hình vẽ bắt buộc

```c
int x = 100;
int *p = &x;
int **pp = &p;
```

```
[0x100] = 100       <- x
[0x200] = 0x100     <- p   (p trỏ tới x)
[0x300] = 0x200     <- pp  (pp trỏ tới p)
```

`*p == 100`, `**pp == 100`, `&p == 0x200`. Vẽ lại hình này bằng tay mỗi lần làm bài, cho đến khi không cần nhìn.

### Code mẫu

```c
#include <stdio.h>

int main(void) {
    int x = 42;
    int *p = &x;
    int **pp = &p;

    printf("x    = %d\n", x);
    printf("&x   = %p\n", (void *)&x);
    printf("p    = %p\n", (void *)p);
    printf("*p   = %d\n", *p);
    printf("pp   = %p\n", (void *)pp);
    printf("**pp = %d\n", **pp);
    printf("sizeof(int*) = %zu\n", sizeof(int *));

    *p = 999;
    printf("x after *p = 999: %d\n", x);

    **pp = 7;
    printf("x after **pp = 7: %d\n", x);
    return 0;
}
```

### Bài tập

1. `void swap(int *a, int *b)`. Gọi từ `main`, kiểm tra.
2. `void increment(int *p)`.
3. `void min_max(const int *arr, int n, int *out_min, int *out_max)` — trả 2 kết quả qua con trỏ.
4. Đảo mảng bằng hai con trỏ chạy từ hai đầu.
5. Tự viết `size_t my_strlen(const char *s)`.
6. Tính tổng mảng chỉ bằng `*(arr + i)` và bằng con trỏ tăng dần. Cấm dùng `arr[i]`.
7. Đoán output trước khi chạy:

```c
int a = 5;
int *p = &a;
int **pp = &p;
**pp = 10;
printf("%d\n", a);
```

8. Viết hàm `void reset(int *p)` đặt giá trị về 0. Thử gọi `reset(NULL)` — xem crash và đọc thông báo.

### Tiêu chí đạt tuần 5

- [ ] Vẽ được hình `x`, `p`, `pp` và giải thích từng mũi tên.
- [ ] Viết `swap` từ trang giấy trắng.
- [ ] Giải thích được vì sao `swap(int a, int b)` không đổi được biến gốc.
- [ ] Đọc được 4 byte của một `int` trong cửa sổ Memory.
- [ ] Không còn warning về con trỏ không khởi tạo.

**Lỗi thường gặp:** nhầm `p` và `*p`; dereference con trỏ chưa khởi tạo; dùng con trỏ sau khi vùng nhớ đã hết (tuần 7); `*p++` và `(*p)++` khác nhau (tạm thời tránh cả hai, viết rõ ràng); trả về địa chỉ biến local từ hàm (sẽ học tuần 7); in con trỏ bằng `%d` thay vì `%p`.

---

## 9. Tuần 6 — Con trỏ II và struct

**Mục tiêu:** mô hình hóa dữ liệu bằng struct, hiểu padding và offset. Đây chính là nền của mọi thứ ở file 16 tuần.

### Việc phải làm

- Con trỏ tới con trỏ (đã làm ở tuần 5), mảng con trỏ, con trỏ tới struct.
- `p->hp` tương đương `(*p).hp`. Dùng `->` khi có con trỏ.
- Struct: gom nhiều field; `typedef`; struct lồng nhau; gán struct này cho struct kia là **copy toàn bộ**.
- Mảng struct; duyệt bằng chỉ số và bằng con trỏ.
- **Padding và alignment:** compiler chèn byte trống để field căn đúng địa chỉ. `sizeof(struct)` có thể lớn hơn tổng các field. Đây là cái bẫy lớn khi đọc struct trong game.
- `offsetof` (trong `<stddef.h>`) trả offset của field. Offset là khoảng cách byte từ đầu struct.
- Hàm nhận `const Player *` để đọc mà không sửa; nhận `Player *` khi cần sửa.
- Làm quen khái niệm con trỏ hàm ở mức nhận diện: `int (*fn)(int, int) = add; fn(2, 3);`. Chưa cần dùng nhiều; nó sẽ quay lại ở phần hooking.

### Code mẫu

```c
#include <stdio.h>
#include <stddef.h>

typedef struct {
    char name[32];
    int hp;
    int mp;
    int gold;
} Player;

typedef struct {
    char c;
    int x;
    char d;
    int y;
} Weird;

int main(void) {
    Player p = { "hero", 100, 50, 999 };

    printf("sizeof(Player) = %zu\n", sizeof(Player));
    printf("sizeof(Weird)  = %zu\n", sizeof(Weird));
    printf("offsetof hp    = %zu\n", offsetof(Player, hp));
    printf("offsetof mp    = %zu\n", offsetof(Player, mp));
    printf("offsetof gold  = %zu\n", offsetof(Player, gold));

    printf("&p      = %p\n", (void *)&p);
    printf("&p.hp   = %p\n", (void *)&p.hp);
    printf("&p.mp   = %p\n", (void *)&p.mp);
    printf("&p.gold = %p\n", (void *)&p.gold);

    Player *ptr = &p;
    printf("p.hp = %d, ptr->hp = %d\n", p.hp, ptr->hp);
    ptr->hp = 99999;
    printf("p.hp after ptr->hp = 99999: %d\n", p.hp);
    return 0;
}
```

Chạy trên x64, `sizeof(Player)` thường là 44 (32 + 4 + 4 + 4), không padding vì các field đã căn. `sizeof(Weird)` là 16 chứ không phải 10: `c` ở 0, 3 byte đệm, `x` ở 4, `d` ở 8, 3 byte đệm, `y` ở 12.

### Bài tập

1. Tạo `Player` như trên, in địa chỉ và offset từng field. So sánh offset với hiệu địa chỉ thực tế.
2. Tạo `Enemy { int hp; int attack; int defense; }`, tính offset bằng tay rồi kiểm chứng bằng `offsetof`.
3. Tạo `Weird` như code mẫu. Vẽ sơ đồ byte ra giấy, giải thích từng byte đệm.
4. Tạo mảng 5 `Player`, in địa chỉ từng phần tử. Nhận xét khoảng cách giữa các phần tử (`sizeof(Player)`).
5. Sắp xếp mảng 5 `Player` theo `hp` giảm dần, truy cập field qua con trỏ.
6. Viết `void player_print(const Player *p)` in tên, hp, mp, gold.
7. Viết `void player_damage(Player *p, int dmg)` trừ hp, không cho âm.
8. Thêm field `char rank;` vào cuối `Player`, in lại `sizeof` và giải thích thay đổi.
9. (Khó) Tạo struct lồng: `Stats { int hp; int mp; }` và `Player { char name[32]; Stats stats; int gold; }`. Tính offset của `stats.hp` bằng tay và bằng `offsetof`.

### Tiêu chí đạt tuần 6

- [ ] Giải thích được vì sao `sizeof(Weird) == 16`.
- [ ] Tính tay offset của từng field rồi kiểm chứng bằng `offsetof`.
- [ ] Viết chương trình `Player` hoàn chỉnh từ trang giấy trắng: khởi tạo, in địa chỉ, sửa qua con trỏ.
- [ ] Giải thích `p->hp` khác `p.hp` thế nào.
- [ ] Vẽ được sơ đồ bộ nhớ của một struct ra giấy.

**Gate B (sau tuần 6):** giải thích miệng, không nhìn code: biến nằm ở đâu, con trỏ là gì, struct nằm thế nào trong bộ nhớ, padding là gì, vì sao phải dùng `->`. Không qua thì làm lại tuần 6, đừng sang tuần 7.

**Lỗi thường gặp:** dùng `.` trên con trỏ; quên `&` khi truyền struct vào hàm cần sửa; nhầm offset với địa chỉ; tưởng `sizeof(struct)` bằng tổng field; gán struct chứa mảng `char[]` bằng `=` (được, nhưng phải hiểu là copy); quên `#include <stddef.h>` khi dùng `offsetof`.

---

## 10. Tuần 7 — Stack, heap, malloc/free

**Mục tiêu:** hiểu vùng nhớ, cấp phát động, và các lỗi bộ nhớ kinh điển. Đây là tuần chuẩn bị trực tiếp cho việc đọc/ghi memory của game sau này.

### Việc phải làm

- Sơ đồ bộ nhớ một process:

```
Địa chỉ cao
+------------------+
| stack            |  biến local, tham số; tự giải phóng khi hàm return
|   grows down     |
+------------------+
| ...              |
+------------------+
| heap             |  malloc; sống tới khi free
|   grows up       |
+------------------+
| data / bss       |  biến global, static
+------------------+
| code (.text)     |  lệnh máy
+------------------+
Địa chỉ thấp
```

- Biến local sống trong stack, chết khi hàm return. **Trả về con trỏ tới biến local là bug** — vùng nhớ đó không còn thuộc về mày.
- Heap: `malloc`, `calloc`, `realloc`, `free`. `malloc` trả `void *` hoặc `NULL`. Luôn kiểm tra `NULL`.
- Dùng `sizeof *ptr` thay vì gõ lại tên kiểu: `Player *p = malloc(n * sizeof *p);`.
- `calloc` zero toàn bộ; `realloc` đổi kích thước, có thể trả địa chỉ mới. **Luôn dùng biến tạm**:

```c
Player *tmp = realloc(players, (size_t)new_cap * sizeof *players);
if (!tmp) {
    /* giữ nguyên players cũ, xử lý lỗi */
} else {
    players = tmp;
}
```

- Các lỗi: **leak** (quên `free`), **double free**, **use-after-free** (dùng sau khi free), **buffer overflow** (ghi quá biên), **dùng `sizeof(ptr)` thay vì `sizeof(*ptr)`**.
- Bật leak detection của MSVC (chỉ có tác dụng ở bản Debug):

```c
#define _CRTDBG_MAP_ALLOC
#include <stdio.h>
#include <stdlib.h>
#include <crtdbg.h>

int main(void) {
    _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);
    /* code */
    return 0;
}
```

Khi thoát, nếu có leak, Visual Studio in report ở Output window. Đọc dòng `Detected memory leaks!` và địa chỉ cấp phát.

### Code mẫu

```c
#define _CRT_SECURE_NO_WARNINGS
#define _CRTDBG_MAP_ALLOC
#include <stdio.h>
#include <stdlib.h>
#include <crtdbg.h>

typedef struct {
    char name[32];
    int hp;
} Player;

int main(void) {
    _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);

    int n = 0;
    printf("n = ");
    if (scanf("%d", &n) != 1 || n <= 0 || n > 100000) {
        printf("invalid n\n");
        return 1;
    }

    Player *players = malloc((size_t)n * sizeof *players);
    if (!players) {
        printf("malloc failed\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        snprintf(players[i].name, sizeof players[i].name, "player%d", i);
        players[i].hp = 100 + i;
    }

    for (int i = 0; i < n; i++) {
        printf("%s: hp=%d\n", players[i].name, players[i].hp);
    }

    free(players);
    players = NULL;
    return 0;
}
```

Quy tắc: sau `free(p)`, gán `p = NULL` để lần dùng nhầm sau đó crash ngay thay vì chạy với rác.

### Bài tập

1. Nhập `n`, cấp phát mảng `int`, nhập giá trị, tính tổng, `free`.
2. Bắt đầu với mảng 2 phần tử, nhân đôi capacity bằng `realloc` cho tới khi chứa 100 phần tử. Dùng đúng biến tạm.
3. Cấp phát mảng `Player`, nhập tên bằng `fgets` + `sscanf` cho số, in, `free`.
4. Cố ý quên `free` trong bài 1, build Debug, đọc leak report, sửa.
5. Trong một chương trình riêng, cố ý `free` hai lần, xem crash và đọc thông báo.
6. Trong một chương trình riêng, trả về con trỏ tới biến local, in giá trị, quan sát rác. Hiểu vì sao đây là hành vi không xác định, không phải "đôi khi chạy được".
7. Viết `char *dup_string(const char *s)` cấp phát đúng `strlen(s)+1`, copy, trả về. Người gọi chịu trách nhiệm `free`. Đây là mô hình ownership — ghi vào sổ.

### Tiêu chí đạt tuần 7

- [ ] Chạy chương trình có cấp phát động mà **không có leak report**.
- [ ] Giải thích được stack vs heap, ai giải phóng, khi nào.
- [ ] Giải thích được vì sao `realloc` phải dùng biến tạm.
- [ ] Phân biệt được leak, double free, use-after-free bằng thông báo runtime.
- [ ] Không dùng `sizeof(ptr)` khi cấp phát.

**Lỗi thường gặp:** `malloc(n)` thay vì `malloc(n * sizeof *p)`; không kiểm tra `NULL`; `free` rồi còn dùng; `free` hai lần; quên `free` ở nhánh lỗi; `realloc` gán thẳng vào con trỏ gốc làm mất vùng cũ khi fail; ghi quá biên mảng làm hỏng metadata của heap.

---

## 11. Tuần 8 — Nhiều file, header, link

**Mục tiêu:** tách code thành module, hiểu compile vs link. Từ tuần này, project bắt đầu giống project thật.

### Việc phải làm

- `.h` chứa **khai báo** (prototype, struct, hằng), `.c` chứa **định nghĩa**.
- `#pragma once` ở đầu header để tránh include trùng. (Include guard `#ifndef` cũng đúng; chọn một kiểu và dùng nhất quán.)
- `static` cho hàm/biến chỉ dùng trong file. `extern` cho biến toàn cục chia sẻ — hạn chế dùng.
- Compile từng `.c` thành object, rồi **link** thành `.exe`. Link error khác compile error.
- `LNK2019: unresolved external symbol`: có khai báo, không có định nghĩa, hoặc thiếu thư viện. Cố ý gây lỗi này để nhận diện.
- Tổ chức project: `main.c` (menu, luồng chính), `player.h/.c` (struct + hàm), `storage.h/.c` (file I/O — tuần 9).

### Bài tập

1. Tách chương trình `Player` ở tuần 6 thành `player.h`, `player.c`, `main.c`.
2. Thêm `player_init`, `player_print`, `player_set_hp` vào module.
3. Xóa định nghĩa `player_print` trong `.c` nhưng giữ khai báo trong `.h`, build, đọc `LNK2019`, rồi phục hồi.
4. Thêm một hàm helper `static` trong `player.c`, gọi từ `main.c` để thấy compiler báo lỗi (nó không export).
5. Đổi tên file header sai, build, đọc lỗi "cannot open source file", sửa include.
6. Vẽ sơ đồ: file nào include file nào, ai gọi ai.

### Tiêu chí đạt tuần 8

- [ ] Build được project 3 file, không warning.
- [ ] Giải thích được sự khác nhau giữa compile error và link error.
- [ ] Cố ý gây và nhận diện được `LNK2019`.
- [ ] Biết khi nào dùng `static`.

**Lỗi thường gặp:** định nghĩa biến trong header (gây multiple definition); include `.c` thay vì `.h`; quên `#pragma once`; khai báo và định nghĩa lệch signature; đặt prototype trong `.c` của file khác.

---

## 12. Tuần 9 — File I/O, bit và thập lục phân

**Mục tiêu:** đọc/ghi file, hiểu hex và bit. Đây là ngôn ngữ mày sẽ dùng suốt phần reverse engineering.

### Việc phải làm

- `fopen(path, "r"/"w"/"a"/"rb"/"wb")`, `fclose`, kiểm tra `NULL`, dùng `perror`.
- Text: `fprintf`, `fscanf`, `fgets`. Binary: `fwrite`, `fread`. Kiểm tra giá trị trả về.
- Text vs binary: text dễ đọc, binary ghi đúng byte của struct, nhỏ hơn, nhưng phụ thuộc layout.
- `fseek`/`ftell` để biết vị trí và kích thước file.
- Thập lục phân `0x...`, nhị phân, chuyển đổi qua lại. `printf("%02X", byte)`.
- Bitwise: `& | ^ ~ << >>`; mask, set/clear/test bit; bit flags.
- Số âm bù hai; `signed` vs `unsigned`; tràn `unsigned` là wrap-around được định nghĩa, tràn `signed` là hành vi không xác định.
- Endianness: x86/x64 là little-endian. In byte của `0x11223344` ra `44 33 22 11`.
- Vì sao cần: địa chỉ trong debugger là hex; asm hiển thị hex; quyền truy cập, flags, packed data đều là bit.

### Code mẫu — endianness

```c
#include <stdio.h>

int main(void) {
    unsigned int v = 0x11223344u;
    unsigned char *p = (unsigned char *)&v;

    for (int i = 0; i < 4; i++) {
        printf("%02X ", p[i]);
    }
    printf("\n");
    return 0;
}
```

Trên máy Intel/AMD, output là `44 33 22 11`. Đây là lý do khi đọc 4 byte trong memory theo thứ tự tăng dần, mày thấy byte thấp trước.

### Code mẫu — bit flags

```c
#include <stdio.h>

int main(void) {
    unsigned int flags = 0;

    flags |= (1u << 0);   /* bật bit 0 */
    flags |= (1u << 3);   /* bật bit 3 */

    printf("flags = 0x%08X\n", flags);

    if (flags & (1u << 3)) {
        printf("bit 3 is on\n");
    }

    flags &= ~(1u << 3);  /* tắt bit 3 */
    printf("flags = 0x%08X\n", flags);
    return 0;
}
```

### Bài tập

1. Ghi mảng `Player` ra file nhị phân `players.bin`, đọc lại, so sánh từng field.
2. Ghi log text bằng `fprintf`, mở bằng Notepad xem.
3. Viết **hexdump**: mở file nhị phân, đọc từng block 16 byte, in offset 8 chữ số hex, 16 byte dạng `%02X`, rồi cột ASCII (byte in được thì in ký tự, không thì `.`). Đây là bài quan trọng nhất tuần này.
4. Viết chương trình quản lý quyền bằng bit: `READ=1, WRITE=2, EXEC=4`; bật/tắt/kiểm tra từng quyền.
5. In byte của một `int`, một `float`, một `double`. Giải thích vì sao `float` không đọc ra như số nguyên.
6. Đếm số bit 1 của một số nguyên không dấu bằng vòng lặp.
7. Đọc một file text, đếm số dòng, số từ, số ký tự. Xử lý file không tồn tại bằng `perror`.

### Tiêu chí đạt tuần 9

- [ ] Hexdump chạy đúng trên một file bất kỳ, so được với một hex editor.
- [ ] Giải thích được output little-endian.
- [ ] Ghi/đọc binary mảng struct thành công.
- [ ] Giải thích được mask `1u << n` và `~`.
- [ ] Không dùng `signed` để demo tràn số.

**Gate C (sau tuần 9):** bắt đầu project tổng hợp ở mục 13. Trước khi bắt đầu, kiểm tra: đã qua Gate A và B, tuần 7 không leak, tuần 9 hexdump chạy. Thiếu cái nào thì quay lại tuần đó.

**Lỗi thường gặp:** quên `fclose`; không kiểm tra `fopen`; `fread` không kiểm tra số phần tử đọc được; mở file text bằng mode binary và ngược lại; in `unsigned char` bằng `%d` (ổn) nhưng in `char` âm bằng `%02X` ra kết quả lạ; nhầm `&` bitwise với `&&` logic; shift quá số bit của kiểu.

---

## 13. Tuần 10–12 — Project tổng hợp và kiểm tra

Ba tuần này không có lý thuyết mới. Mày làm một chương trình hoàn chỉnh, rồi tự kiểm tra.

### 13.1 Spec project "Player DB"

Chương trình console, nhiều file, quản lý danh sách player:

- `player.h/.c`: struct `Player { char name[32]; int hp; int mp; int gold; };` và các hàm thao tác.
- `storage.h/.c`: lưu/đọc file nhị phân.
- `main.c`: menu và vòng lặp chính.
- Mảng động: `capacity`, `count`, nhân đôi capacity bằng `realloc` khi đầy. Không giới hạn cứng số player.
- Menu: 1 thêm, 2 liệt kê, 3 tìm theo tên, 4 sửa hp, 5 xóa, 6 lưu, 7 đọc, 0 thoát.
- Nhập liệu bằng `fgets` + `sscanf`, không dùng `scanf("%s")`. Tên dài hơn 31 ký tự phải bị cắt an toàn hoặc báo lỗi.
- File nhị phân có header: magic `"PDB1"` + số lượng. Đọc file sai magic hoặc thiếu dữ liệu phải báo lỗi rõ ràng, không crash.
- Khi khởi động, in offset của từng field trong `Player` (bài tập của tuần 6 áp dụng vào thực tế).
- Thoát chương trình: `free` toàn bộ, không leak report.
- Build Debug với leak check; build Release để chạy nhanh.

**Tuần 10:** viết spec 1 trang, dựng skeleton 3 module, làm thêm + liệt kê + lưu/đọc.
**Tuần 11:** làm tìm, sửa, xóa; xử lý lỗi; thêm 5 bug cố ý rồi tự tìm bằng debugger (xem 13.2).
**Tuần 12:** hoàn thiện, chạy 5 bài verify, làm bài kiểm tra bàn giao.

### 13.2 Năm bug cố ý

Tự chèn từng bug vào project, chạy, tìm bằng debugger, ghi lại triệu chứng → nguyên nhân → cách sửa:

1. `malloc(count)` thay vì `count * sizeof *players`.
2. Vòng lặp `<= count` thay vì `< count`.
3. `free` rồi vẫn dùng con trỏ.
4. Quên `free` ở nhánh lỗi khi đọc file.
5. Không khởi tạo một field của struct trước khi in.

Mỗi bug phải tìm được **mà không đọc lại code để đoán** — dùng breakpoint, watch, memory, call stack. Đây là bài tập quan trọng nhất của tuần 11.

### 13.3 Năm bài verify (áp dụng tinh thần của file 16 tuần)

1. **Restart test:** thoát, chạy lại, dữ liệu vẫn đúng.
2. **Rebuild test:** Clean rồi Build lại từ đầu, không lỗi, không warning bỏ qua.
3. **Đóng/mở file test:** lưu, tắt chương trình, mở lại, đọc đúng; thử file bị sửa hỏng, chương trình báo lỗi chứ không crash.
4. **Giải thích test:** nói to từng phần quan trọng mà không nhìn code.
5. **Stress test:** thêm 1000 player, xóa hết, thêm lại; lặp 20 vòng; không crash, không leak.

### Tiêu chí đạt tuần 12

- [ ] Project chạy đủ 7 chức năng.
- [ ] Không leak report ở bản Debug.
- [ ] Không warning nghiêm trọng.
- [ ] Tìm và sửa được cả 5 bug cố ý bằng debugger.
- [ ] Qua 5 bài verify.
- [ ] Làm xong bài kiểm tra bàn giao ở mục 14.

---

## 14. Bài kiểm tra bàn giao

Làm trong **một project mới**, **3 giờ**, **không AI, không mạng, không xem lại bài cũ**. Được dùng IDE và tài liệu ngôn ngữ nếu có sẵn trên máy (không tra mạng).

### Phần code

Viết từ file trống:

1. Khai báo `typedef struct { char name[32]; int hp; int mp; int gold; } Player;`.
2. Cấp phát mảng 3 `Player` trên heap bằng `malloc`, kiểm tra `NULL`.
3. Ghi 3 player ra file nhị phân `players.bin`.
4. Giải phóng mảng, đọc lại file vào mảng mới, in từng field kèm **địa chỉ** và **offset** (`offsetof`).
5. Sửa `hp` của player thứ hai qua con trỏ, ghi lại file, đọc lại xác nhận.
6. `free` toàn bộ. Bật leak check ở bản Debug. Không có report leak.

### Phần giải thích miệng (tự nói, ghi âm nếu được)

1. `&x`, `*p`, `p->hp` khác gì nhau?
2. Vì sao `sizeof(Player)` có thể lớn hơn tổng kích thước các field?
3. Stack và heap khác gì, vùng nào sống bao lâu?
4. `malloc` trả gì, vì sao phải `free`, vì sao `realloc` cần biến tạm?
5. Vì sao con trỏ 4 byte trên x86 và 8 byte trên x64?
6. Pointer chain là gì, ở mức khái niệm?
7. Vì sao `fgets` an toàn hơn `scanf("%s")`?
8. Tràn `signed int` khác tràn `unsigned int` thế nào?

### Phần debug

Đưa sẵn 2 chương trình nhỏ có bug (nhờ AI hoặc bạn bè tạo, hoặc lấy từ 5 bug ở tuần 11). Dùng breakpoint, watch, memory để tìm. Nói ra cách tìm, không chỉ đưa đáp án.

### Kết luận

- Qua **cả ba phần** → sang mục 15.
- Trượt phần code → làm lại tuần 10–12. Trượt giải thích → làm lại tuần 5–7 phần lý thuyết và vẽ hình. Trượt debug → làm lại tuần 11 và checklist phụ lục B.
- Trượt 2 lần cùng một phần → đổi nguồn học cho phần đó (sách King, CS50, một người dạy kèm), đừng lặp y nguyên.

---

## 15. Bàn giao sang file 16 tuần

Khi qua bài kiểm tra bàn giao:

1. Đọc hai chương cuối của file 16 tuần: **"32-bit và 64-bit"** và **"bẫy địa chỉ tĩnh/động"**. Chỉ đọc hiểu khái niệm, chưa cần làm gì.
2. Mở file 16 tuần ở **tuần 1**. Với mày, tuần 1 bây giờ là **bài ôn một buổi**: đọc lại, làm bài tập, nếu giải thích được hết thì đi tiếp. Không cần học lại 5 buổi.
3. Sang **tuần 2**, cài Cheat Engine. Từ đây mới bắt đầu phần hack game thật.
4. Nhánh PC/Mobile chọn theo file 16 tuần. Với người mới, khuyến nghị **nhánh PC, target AssaultCube** — offline, 32-bit, tài liệu nhiều.
5. Tuần 5 của file 16 tuần: dựng máy ảo trước khi chạy crackme. Không ngoại lệ.

**Lưu ý nhỏ:** file 16 tuần có câu `gcc memory_demo.c -o memory_demo`. Nếu mày dùng Visual Studio, tạo project và thêm file `.c` là tương đương. Nếu dùng MSYS2/gcc thì lệnh đó chạy đúng. Code C trong hai file là code C chuẩn, không phụ thuộc IDE.

**Thời gian thực tế sau bàn giao:** 12 tuần lõi + 2–6 tuần đệm cho giai đoạn này, rồi 16 tuần của file kia thường kéo dài 5–7 tháng với người mới. Tổng cộng khoảng **8–12 tháng** ở 10–12h/tuần. Đó là con số thật, không phải con số marketing.

---

## 16. Phương pháp học

1. **Gõ lại mọi thứ.** Kể cả code trong file này. Cơ tay và việc gặp lỗi chính tả là một phần của học.
2. **Đoán trước khi chạy.** Trước khi bấm Run, viết ra giấy output mày nghĩ sẽ ra. Sai thì đó là chỗ cần học.
3. **Cố ý phá code.** Đổi một dòng, dự đoán hậu quả, chạy, kiểm tra. Đây là cách học nhanh nhất về ngữ nghĩa.
4. **Giải thích to.** Nói thành tiếng như đang dạy người khác. Chỗ nào nói vấp là chỗ chưa hiểu.
5. **Làm lại từ trang giấy trắng.** Sau mỗi tuần, đóng tài liệu, viết lại chương trình chính. Đây là bài kiểm tra thật, không phải đọc lại code cũ.
6. **Ôn cách quãng.** Làm lại bài cũ vào ngày 1, 3, 7 sau khi học. Không cần nhiều, 15 phút mỗi lần.
7. **Một sổ tay.** Mỗi buổi một mục: mục tiêu, đã làm, lỗi gặp, nguyên nhân, cách sửa, câu hỏi còn. Mẫu ở phụ lục C.
8. **Timebox.** 45–90 phút mỗi buổi, nghỉ giữa. Buổi ngắn đều đặn thắng buổi dài thưa thớt.
9. **70/30.** 70% thời gian gõ và sửa, 30% đọc. Đừng đọc hết sách trước khi viết chương trình.
10. **Không học thuộc code.** Học mô hình: biến ở đâu, con trỏ trỏ đâu, dữ liệu đi qua hàm thế nào.

---

## 17. Dùng AI đúng cách

AI là gia sư, không phải người làm bài hộ.

**Nên hỏi:**

- "Giải thích thông báo lỗi này và chỉ ra dòng gây lỗi, đừng viết lại code."
- "Cho tao 3 bài tập về con trỏ, từ dễ đến khó, kèm đáp án ẩn."
- "Review code này, chỉ ra bug và giải thích tại sao, đừng đưa bản sửa hoàn chỉnh."
- "Hỏi tao 5 câu để kiểm tra tao có hiểu stack vs heap không."
- "Giải thích từ này trong tài liệu tiếng Anh."

**Không nên:**

- Dán đề bài rồi lấy code chạy được. Mày sẽ qua tuần nhưng không qua được bài kiểm tra bàn giao.
- Tin AI về API, tên hàm, tham số. AI hay bịa. Tra tài liệu chính thức hoặc thử compile.
- Để AI thiết kế cả project. Tự viết spec trước, hỏi AI sau.

**Quy tắc:** mọi dòng code trong bài của mày phải **giải thích được**. Code AI đưa mà mày không hiểu thì gõ lại bằng tay, từng dòng, và hỏi tới khi hiểu. Nếu vẫn không hiểu, bỏ đoạn đó và tự viết cách đơn giản hơn.

---

## 18. Tiếng Anh

Không cần giỏi tiếng Anh để bắt đầu. Cần **chịu đọc**.

- Đọc thông báo lỗi bằng tiếng Anh, đừng chỉ Google mã lỗi rồi dán. Dịch từng từ nếu cần.
- Học 40 từ khóa kỹ thuật ở phụ lục D. Đủ để đọc 80% thông báo.
- Mỗi ngày 15 phút đọc một trang tài liệu tiếng Anh: cppreference, Microsoft Learn, README của một repo nhỏ.
- Dùng AI để giải thích nghĩa, rồi **quay lại đọc bản gốc**. Đừng biến AI thành người dịch toàn thời gian.
- Mục tiêu cuối giai đoạn: đọc một trang cppreference và một README mà không hoảng. Không cần nói lưu loát.

---

## 19. An toàn và pháp lý

Giai đoạn này **không cài Cheat Engine, không tải "cheat", "hack tool", "crack", "mod menu"**. Chưa đến lúc. Cài sớm chỉ làm mày bỏ qua nền tảng.

- Không tắt Windows Defender toàn hệ thống. Nếu sau này Defender báo nhầm tool tự build, chỉ thêm **thư mục project của mày** vào exclusion.
- Không chạy file `.exe` tải từ nguồn lạ. Kể cả "bài tập".
- Không dùng tài khoản admin thường trực. Tạo user thường để học.
- Về sau, khi sang file 16 tuần: chỉ game **offline**, không đụng game online có anti-cheat. Ban HWID là thật và đi theo phần cứng.
- Crackme và file lạ: chạy trong máy ảo, snapshot trước mỗi lần chạy (từ tuần 5 của file 16 tuần).
- Không phát tán APK đã sửa của app thương mại. Học trên app tự build hoặc open-source.
- Không inject vào process của người khác trên máy không phải của mày.

Mục tiêu của cả lộ trình là **hiểu máy tính hoạt động thế nào**, không phải kiếm lợi trên game của người khác.

---

## 20. Những thứ không học bây giờ

Đây là danh sách để mày **từ chối** khi bị phân tâm:

- Python, JavaScript, web, mobile app. Học sau nếu cần. Bây giờ chỉ C.
- LeetCode, thuật toán nâng cao, cấu trúc dữ liệu chuyên sâu. Chưa cần.
- OOP nâng cao, design pattern, template C++, STL sâu. Tuần 6 của file 16 sẽ dạy phần C++ cần thiết.
- Đa luồng, mạng, socket, database. Chưa cần.
- Assembly, kernel, driver. Chưa. Học asm sau khi con trỏ đã chắc.
- Linux, Docker, cloud. Chưa.
- Video "hack game trong 10 phút", "learn C in 1 hour", khóa học "reverse engineering từ zero" bán kèm tool. Chưa.
- Cài 3 IDE, 5 compiler, đổi theme, cài extension. Một công cụ, dùng cho sạch.

---

## 21. Lịch và quản lý thời gian

**Lịch mẫu 10–12h/tuần:**

| Ngày | Thời lượng | Nội dung |
|---|---|---|
| T2–T6 | 1–1.5h | Lý thuyết ngắn + gõ code theo |
| T7 | 3–4h | Bài tập lớn của tuần |
| CN | 1–2h | Ôn bài cũ + ghi chép + làm lại từ đầu |

- **6h/tuần vẫn đi được**, chỉ chậm hơn: kéo dài 18–24 tuần. Gate không đổi.
- **Tuần đệm:** sau tuần 4, 8, 12. Dùng để bắt kịp, không dùng để nghỉ hẳn.
- Lỡ một tuần: dùng tuần đệm, **không bỏ gate**.
- Ngủ đủ. Thiếu ngủ làm khả năng debug tụt mạnh; mày sẽ tưởng mình dốt trong khi chỉ là mệt.
- Đau lưng, mỏi mắt: nghỉ 5 phút mỗi 45 phút. Ngồi đúng. Đây là marathon, không phải chạy nước rút.

---

## 22. Dấu hiệu mày đang học sai

- Chương trình chạy được nhưng mày không giải thích được vì sao.
- Xem 2 giờ video, không gõ dòng nào.
- Sửa code ngẫu nhiên cho tới khi hết lỗi, không hiểu lỗi.
- Không đọc thông báo lỗi, chỉ tra mã lỗi rồi dán đáp án.
- Copy nguyên hàm từ AI hoặc mạng, kể cả khi hiểu sơ sơ.
- Học 3 ngôn ngữ cùng lúc.
- Đọc hết sách trước khi viết chương trình đầu tiên.
- Sợ xóa code, sợ làm hỏng bài đang chạy.
- Chỉ dùng `printf` để debug, không dùng breakpoint.
- Dồn 12 giờ vào Chủ nhật rồi nghỉ 6 ngày.
- So sánh tốc độ với người đã có nền.
- Mua tool, khóa học, hoặc "cheat" trước khi qua bài kiểm tra bàn giao.

Gặp 2 dấu hiệu trở lên: dừng lại, quay về tuần gần nhất mày còn giải thích được mọi thứ, làm lại chậm hơn.

---

## 23. Tài nguyên

| Loại | Nguồn | Dùng thế nào |
|---|---|---|
| IDE + compiler + debugger | Visual Studio Community, workload Desktop C++ | Công cụ chính |
| Sách C cho người mới | *C Programming: A Modern Approach* — K.N. King | Tra chương tương ứng, làm bài cuối chương |
| Sách C miễn phí | *Beej's Guide to C Programming* | Đọc bổ sung khi lý thuyết trong file này quá ngắn |
| Khóa học nền | CS50x (Harvard, miễn phí) | Xem các bài giảng C nếu cần cách giải thích khác; **không** học song song toàn bộ |
| Tra cứu | cppreference.com | Chỉ tra, không đọc từ đầu tới cuối |
| Debugger | Microsoft Learn — Visual Studio debugging | Đọc khi không biết một cửa sổ làm gì |
| Git tối thiểu | Git for Windows + `git init/add/commit/log` | Tự bảo vệ code; không cần học branch ở giai đoạn này |
| Xem asm (cuối khóa) | Compiler Explorer (godbolt.org) | Dán một hàm C nhỏ, xem asm sinh ra — chỉ để làm quen mắt |
| C++ sau này | learncpp.com | Chỉ mở khi sắp vào tuần 6 của file 16 tuần |

**Tránh:** W3Schools làm nguồn chính; video "learn C in 1 hour"; khóa học reverse engineering bán kèm tool; repo GitHub copy mà không đọc; PDF lậu; diễn đàn yêu cầu tải file lạ.

---

## Phụ lục A — Lỗi thường gặp

| Thông báo / hiện tượng | Nghĩa | Cách sửa |
|---|---|---|
| `C2143: syntax error: missing ';'` | Thiếu dấu chấm phẩy hoặc sai cú pháp trước đó | Nhìn dòng được báo và dòng ngay trước |
| `C2065: undeclared identifier` | Tên chưa khai báo, sai chính tả, thiếu include | Kiểm tra khai báo, include, chính tả |
| `C4996: ... unsafe` | MSVC coi `scanf`, `strcpy`... không an toàn | `#define _CRT_SECURE_NO_WARNINGS` trước include, hoặc dùng `fgets`/`snprintf` |
| `LNK2019: unresolved external symbol` | Có khai báo, thiếu định nghĩa hoặc thiếu lib | Thêm định nghĩa, kiểm tra signature, thêm lib |
| `LNK1120` | Số unresolved symbol | Sửa các `LNK2019` phía trên |
| `access violation reading location 0x00000000` | Dereference con trỏ NULL | Kiểm tra `NULL` trước khi dùng |
| `Heap corruption detected` | Ghi quá biên hoặc double free | Kiểm tra kích thước cấp phát, chỉ số mảng, số lần free |
| `Run-Time Check Failure #2 — Stack ... corrupted` | Tràn mảng local | Kiểm tra biên |
| `C4700: uninitialized local variable` | Đọc biến chưa gán | Khởi tạo ngay khi khai báo |
| `C4244: conversion ... possible loss of data` | Ép kiểu làm mất dữ liệu | Dùng kiểu rộng hơn hoặc ép kiểu rõ ràng |
| `cannot open source file` | Sai đường dẫn include / thiếu header | Sửa `#include`, kiểm tra include path |
| `expected declaration or statement at end of input` | Thiếu `}` | Đếm ngoặc |
| Chương trình in số rác | Đọc biến chưa gán, tràn mảng, sai format | Debugger, kiểm tra biên và khởi tạo |
| Nhập chuỗi bị trượt | `scanf` để lại newline | Dùng `fgets`, hoặc đọc bỏ newline |
| So sánh chuỗi luôn sai | Dùng `==` | Dùng `strcmp` |
| `5/2` ra `2` | Chia số nguyên | Ép một toán hạng sang `double` |

---

## Phụ lục B — Checklist tự debug 20 phút

1. Đọc **lỗi đầu tiên**, không phải lỗi cuối.
2. Clean → Rebuild lại từ đầu. Đôi khi lỗi cũ còn sót.
3. Double-click lỗi để nhảy đúng dòng; xem cả dòng trước đó.
4. Xác định lỗi thuộc loại nào: compile, link, runtime.
5. Với runtime: đặt breakpoint gần chỗ nghi ngờ, chạy, xem Locals/Watch.
6. Kiểm tra 5 nghi phạm quen thuộc: biến chưa khởi tạo, chỉ số ngoài biên, con trỏ NULL, `free` rồi còn dùng, sai `sizeof`.
7. Thu nhỏ: comment một nửa code, xem lỗi còn không. Lặp tới khi cô lập được dòng.
8. In checkpoint hoặc dùng breakpoint để xác nhận giả định, đừng đoán.
9. Giải thích từng dòng cho một người/đồ vật tưởng tượng.
10. Search **nguyên văn** thông báo trong dấu ngoặc kép.
11. Vẫn tắc sau 20 phút: viết câu hỏi theo mẫu — mục tiêu, kỳ vọng, thực tế, code tối thiểu, đã thử gì. Hỏi AI hoặc người.
12. Tắc quá 2 giờ ở một bước: dừng, ghi lại, chuyển bài khác, quay lại hôm sau. Không thức đêm đập đầu vào một lỗi.

---

## Phụ lục C — Mẫu ghi chép

```
## 2026-11-03 — Tuần 5, buổi 2

Mục tiêu:
  Hiểu *p và &x, viết swap.

Đã làm:
  - Code swap, chạy đúng.
  - Vẽ hình x/p ra giấy.

Lỗi gặp:
  - Lỗi: swap không đổi giá trị.
  - Nguyên nhân: truyền int thay vì int*.
  - Cách sửa: đổi signature, truyền &a, &b.

Cú pháp mới:
  void swap(int *a, int *b)

Câu hỏi còn:
  Vì sao sizeof(int*) là 8 mà sizeof(int) là 4?

Thời gian: 1h20
```

Về sau, khi học hack game, sổ này thêm bảng: địa chỉ, offset, lệnh asm, pattern, phiên bản game. Giữ thói quen từ bây giờ.

---

## Phụ lục D — Từ vựng tối thiểu

| Từ | Nghĩa |
|---|---|
| compiler | trình biên dịch |
| linker | trình liên kết |
| build | quá trình tạo file chạy |
| warning / error | cảnh báo / lỗi |
| undeclared / undefined | chưa khai báo / chưa định nghĩa |
| declaration / definition | khai báo / định nghĩa |
| pointer / dereference | con trỏ / lấy giá trị tại địa chỉ |
| address / value | địa chỉ / giá trị |
| allocate / free | cấp phát / giải phóng |
| stack / heap | vùng nhớ tự động / vùng nhớ động |
| buffer / overflow | vùng đệm / tràn |
| header / include | tệp khai báo / nạp tệp |
| library | thư viện |
| debug / breakpoint | gỡ lỗi / điểm dừng |
| step over / step into | chạy qua / chạy vào |
| call stack | ngăn xếp gọi hàm |
| leak | rò rỉ bộ nhớ |
| alignment / padding | căn lề / byte đệm |
| integer / floating point | số nguyên / số thực |
| array / string | mảng / chuỗi |
| null / null terminator | con trỏ rỗng / ký tự kết thúc chuỗi |
| return / argument / parameter | trả về / đối số / tham số |
| scope / lifetime | phạm vi / thời gian sống |
| cast | ép kiểu |
| struct / field / member | cấu trúc / trường / thành viên |
| offset | độ lệch |
| byte / bit / endianness | byte / bit / thứ tự byte |
| binary / hexadecimal | nhị phân / thập lục phân |
| signed / unsigned | có dấu / không dấu |
| runtime | lúc chạy |
| undefined behavior | hành vi không xác định |

---

## Phụ lục E — Bảng chuyển tiếp

| Giai đoạn file này | Nội dung | Tương ứng file 16 tuần |
|---|---|---|
| Tuần 1–4 | C cơ bản, mảng, chuỗi | Tuần 1 của file kia (làm lại như bài ôn) |
| Tuần 5–6 | Con trỏ, struct, padding | Nền cho tuần 1, 3, 7 của file kia |
| Tuần 7 | Heap, malloc/free | Nền cho trainer, injector (tuần 7–8) |
| Tuần 8 | Nhiều file, link | Nền cho project tuần 15–16 |
| Tuần 9 | File I/O, hex, bit | Nền cho CE, debugger, RE (tuần 2–5) |
| Tuần 10–12 | Project + kiểm tra | Thay cho phần "verify" của tuần 1 |
| Sau bàn giao | — | Vào tuần 2: Cheat Engine |

**Checklist cuối cùng — chỉ tick khi tự làm được, không nhìn đáp án:**

- [ ] Tạo project, build, chạy, debug từ đầu.
- [ ] Viết hàm, vòng lặp, mảng, chuỗi an toàn.
- [ ] Vẽ và giải thích mô hình con trỏ.
- [ ] Dùng struct, `offsetof`, hiểu padding.
- [ ] Cấp phát động, `realloc` đúng, `free` sạch, không leak.
- [ ] Tách project nhiều file, hiểu link error.
- [ ] Ghi/đọc file nhị phân, hexdump.
- [ ] Giải thích hex, bit, little-endian.
- [ ] Tự debug bằng breakpoint, không chỉ `printf`.
- [ ] Qua bài kiểm tra bàn giao ở mục 14.

Đủ 10 ô → mở `Lo-Trinh-Hack-Game-16-Tuan.md`, tuần 1, và bắt đầu.
