# Lời Giải & Bài Tập Mở Rộng — 12 Tuần Từ Số 0

> File đi kèm `Lo-Trinh-Tu-So-0.md`.
> **Đừng đọc lời giải trước khi làm.** Làm ít nhất 45–60 phút, chạy, debug, ghi lại chỗ tắc, rồi mới mở.
> Code C11, build bằng Visual Studio (MSVC) hoặc gcc. Mọi file dùng `scanf`/`strcpy` thêm `#define _CRT_SECURE_NO_WARNINGS` ở đầu nếu build bằng MSVC.
> Lời giải không phải chân lý. Code của bạn khác mà qua tiêu chí và giải thích được thì code của bạn đúng.

> **Trạng thái kiểm chứng (29/10/2026):** các chương trình C độc lập trong file này và file nền tảng đã được biên dịch bằng `gcc -Wall -Wextra` và chạy với ASan/UBSan. Kết quả: 33 chương trình sạch cảnh báo; 5 chương trình không build trên Linux vì dùng `crtdbg.h` (đặc thù MSVC) hoặc cần `player.h`; sanitizer chỉ bắt lỗi ở bài `reset(NULL)` — đó là lỗi cố ý để học viên đọc crash. Các đoạn Windows (trainer, injector, MinHook), smali, ARM64 và Frida **chưa được chạy thật**.

## Cách dùng file này

- Mỗi tuần: **Lời giải** → **Điều đáng chú ý** → **Bài tập mở rộng**.
- Bài mở rộng chỉ có gợi ý và tiêu chí đạt, không có lời giải đầy đủ. Tự làm, rồi tự chấm.
- Gõ lại code, đừng copy-paste. Sau khi chạy được, cố ý sửa một chỗ, dự đoán hậu quả, chạy lại.
- Địa chỉ in ra thay đổi mỗi lần chạy. Đó là bình thường; đừng so số tuyệt đối, chỉ so khoảng cách và quan hệ.
- Nếu lời giải dùng cách bạn chưa học: đó là chủ ý. Đọc phần giải thích, đừng dán code.

## Quy ước

- `int main(void)`, `return 0`.
- Debug build để bật leak check; Release để đo tốc độ.
- Không dùng VLA (`int a[n]`) — MSVC không hỗ trợ. Dùng `malloc` khi kích thước động.
- `%zu` cho `size_t`, `%llu` cho `unsigned long long`, `%p` cho con trỏ (ép `(void *)`).
- Bài nào cũng phải build sạch warning trước khi coi là xong.

---

## Tuần 1 — Môi trường và chương trình đầu tiên

### 1.1 Ba lỗi cố ý

| Lần phá | Thông báo đại diện | Loại | Bài học |
|---|---|---|---|
| Xóa `;` sau `printf` | `hello.c(5): error C2143: syntax error: missing ';' before 'return'` | compile | Đọc file/dòng, sửa lỗi đầu tiên |
| Đổi `printf` thành `print` | `warning C4013: 'print' undefined; assuming extern returning int` rồi `error LNK2019: unresolved external symbol print` | compile warning + link | Compile khác link |
| Đổi `return 0;` thành `return;` | `warning C4033: 'main' must return a value` (mã có thể khác theo phiên bản) | compile | Hàm `int` phải trả `int` |

Mã lỗi và câu chữ thay đổi theo phiên bản MSVC. Điều cần học là **đọc nội dung**, không phải thuộc mã.

Phân biệt:

- **Compile error**: cú pháp sai, không sinh ra `.exe`.
- **Link error**: từng file biên dịch xong, nhưng thiếu định nghĩa hàm/biến khi ghép.
- **Runtime bug**: `.exe` chạy được nhưng sai hoặc crash.

### 1.2 Bài `average`

```c
#include <stdio.h>

int main(void) {
    int a = 7;
    int b = 2;
    double average = (a + b) / 2.0;

    printf("average = %f\n", average);
    return 0;
}
```

Output: `average = 4.500000`.

Vì sao bản gốc ra `4.000000`: `a + b` là `int` bằng 9; `9 / 2` là **chia số nguyên**, ra 4; sau đó mới gán vào `double`, thành `4.0`.

Ba cách viết:

```c
double ok1 = (a + b) / 2.0;          // đúng: có double trong phép chia
double ok2 = (double)(a + b) / 2;    // đúng: ép tử số
double bad = (double)((a + b) / 2);  // sai: chia xong mới ép
```

Debug: breakpoint ở dòng `double average`, F10, xem Locals. Thêm Watch `(double)(a + b) / 2`. So sánh với `(a + b) / 2`.

### 1.3 Terminal

```bat
cd /d D:\code\hello
dir
hello\x64\Debug\hello.exe
```

Đường dẫn `.exe` thật lấy từ **Output window** sau khi build; có thể là `x64\Debug\hello.exe` hoặc `Debug\hello.exe` tùy project. Nếu gõ tên file mà Windows báo "not recognized", bạn đang đứng sai thư mục hoặc chưa gõ đường dẫn.

### 1.4 Bài tập mở rộng tuần 1

1. **Bug hunt 5 lỗi.** Tự tạo một chương trình 30–50 dòng có 5 lỗi: thiếu `;`, sai tên biến, chia số nguyên, `scanf` thiếu `&`, in `double` bằng `%d`. Dùng debugger tìm từng lỗi, ghi triệu chứng → nguyên nhân → cách sửa.
   - Đạt khi: tìm đủ 5 lỗi mà không đọc code để đoán, mỗi lỗi có ghi chú.
2. **Bật warning level /W4.** Project Properties → C/C++ → General → Warning Level → Level4. Build lại. Sửa hết warning.
   - Đạt khi: build sạch, giải thích được ít nhất 3 warning.
3. **Tạo link error có chủ ý.** Khai báo `int foo(void);`, gọi trong `main`, không định nghĩa. Build, đọc `LNK2019`.
   - Đạt khi: phân biệt được lỗi này với compile error.
4. **Conditional breakpoint.** Đặt breakpoint trong vòng lặp với điều kiện `i == 5`. Chạy, xác nhận nó dừng đúng lần.
   - Đạt khi: dùng được chuột phải → Conditions.
5. **Memory window.** Khai báo `int x = 0x11223344;`, mở Debug → Windows → Memory, nhập `&x`, xem 4 byte.
   - Đạt khi: giải thích được vì sao thứ tự byte là `44 33 22 11` (little-endian, sẽ học kỹ tuần 9).
6. **Debug vs Release.** Build cả hai, đặt breakpoint trong một hàm nhỏ, quan sát biến trong Release có thể bị tối ưu mất.
   - Đạt khi: nói được vì sao không debug bằng bản Release.

---

## Tuần 2 — Biến, kiểu, toán tử, rẽ nhánh

### 2.1 `max3`

```c
#include <stdio.h>

int max3(int a, int b, int c) {
    int m = a;
    if (b > m) m = b;
    if (c > m) m = c;
    return m;
}

int main(void) {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) != 3) {
        printf("input error\n");
        return 1;
    }
    printf("%d\n", max3(a, b, c));
    return 0;
}
```

### 2.2 BMI

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
    double weight, height;

    printf("weight (kg) and height (m): ");
    if (scanf("%lf %lf", &weight, &height) != 2 || weight <= 0 || height <= 0) {
        printf("invalid input\n");
        return 1;
    }

    double bmi = weight / (height * height);
    printf("BMI = %.2f\n", bmi);

    if (bmi < 18.5)       printf("underweight\n");
    else if (bmi < 25.0)  printf("normal\n");
    else if (bmi < 30.0)  printf("overweight\n");
    else                  printf("obese\n");

    return 0;
}
```

Phân loại BMI ở đây là bản rút gọn để luyện `if/else`, không phải tư vấn y khoa.

### 2.3 Máy tính

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
    int a, b;
    char op;

    printf("a op b: ");
    if (scanf("%d %c %d", &a, &op, &b) != 3) {
        printf("invalid input\n");
        return 1;
    }

    switch (op) {
    case '+': printf("%d\n", a + b); break;
    case '-': printf("%d\n", a - b); break;
    case '*': printf("%d\n", a * b); break;
    case '/':
        if (b == 0) printf("division by zero\n");
        else        printf("%d\n", a / b);
        break;
    case '%':
        if (b == 0) printf("division by zero\n");
        else        printf("%d\n", a % b);
        break;
    default: printf("unknown operator\n");
    }
    return 0;
}
```

Đây là máy tính số nguyên. `7 / 2` ra `3`. Bài mở rộng số 1 yêu cầu bản số thực.

### 2.4 Năm nhuận

```c
int is_leap(int year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}
```

### 2.5 Xếp loại

```c
char grade(int score) {
    if (score < 0 || score > 10) return '?';
    if (score >= 9) return 'A';
    if (score >= 8) return 'B';
    if (score >= 7) return 'C';
    if (score >= 5) return 'D';
    return 'F';
}
```

### 2.6 Thương và dư

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
    int a, b;
    if (scanf("%d %d", &a, &b) != 2 || b == 0) {
        printf("invalid input\n");
        return 1;
    }

    printf("q=%d r=%d\n", a / b, a % b);
    printf("real q=%.3f\n", (double)a / b);
    return 0;
}
```

Với số âm, C99 trở lên chia **về phía 0** và dấu của `%` theo số bị chia: `-7 / 2 == -3`, `-7 % 2 == -1`. Ghi vào sổ.

### 2.7 Đoán output

```c
int x = 7;
printf("%d %d\n", x / 2, x % 2);
```

Đáp án: `3 1`.

### 2.8 Bài tập mở rộng tuần 2

1. **Máy tính số thực có vòng lặp.** Dùng `while (scanf("%lf %c %lf", &a, &op, &b) == 3)`, thoát khi nhập `q`. Xử lý chia 0.
   - Gợi ý: `%c` trong format đã có dấu cách phía trước để bỏ qua newline.
   - Đạt khi: nhập liên tiếp nhiều phép tính không bị trượt.
2. **Nhập liệu đến khi hợp lệ.** Viết hàm `read_int_in_range(int lo, int hi)` lặp tới khi người dùng nhập đúng.
   - Đạt khi: gõ chữ, gõ số ngoài khoảng, không crash, không kẹt vòng lặp.
3. **Phân loại tam giác.** Nhập 3 cạnh nguyên, kiểm tra có phải tam giác, phân loại đều/cân/thường/vuông.
   - Gợi ý: sắp xếp 3 cạnh tăng dần trước; tam giác vuông khi `a*a + b*b == c*c`.
   - Đạt khi: xử lý được cạnh âm, cạnh 0, tam giác suy biến.
4. **Số ngày trong tháng.** Nhập tháng, năm; in số ngày, xử lý tháng 2 nhuận.
   - Gợi ý: `switch` với fallthrough cho các tháng 30 ngày.
   - Đạt khi: đúng với tháng 2 năm 2000, 1900, 2024.
5. **Phương trình bậc hai.** Nhập `a, b, c`; xử lý `a == 0`, delta âm, delta bằng 0.
   - Gợi ý: `<math.h>`, `sqrt`; so sánh `double` với 0 bằng `fabs(x) < 1e-9`.
   - Đạt khi: không chia cho 0, in nghiệm đúng 2 chữ số.
6. **Max 3 không dùng biến phụ.** Thử viết `max3` chỉ bằng biểu thức ba ngôi.
   - Đạt khi: đúng mọi bộ test, giải thích được thứ tự đánh giá.
7. **Đọc số 0–9 thành chữ.** Dùng `switch`, nhập số ngoài khoảng thì báo lỗi.
8. **Tiền điện bậc thang.** Nhập số kWh, tính theo 3–4 bậc, in từng bậc và tổng.
   - Đạt khi: bảng giá để trong hằng số, dễ sửa.
9. **BMI với chiều cao cm.** Nhập cm, đổi sang m trước khi tính; kiểm tra giá trị vô lý.

---

## Tuần 3 — Vòng lặp và hàm

### 3.1 Bảng cửu chương

```c
#include <stdio.h>

int main(void) {
    for (int i = 1; i <= 9; i++) {
        for (int j = 1; j <= 9; j++) {
            printf("%3d", i * j);
        }
        printf("\n");
    }
    return 0;
}
```

### 3.2 Giai thừa và tràn số

```c
#include <stdio.h>

int main(void) {
    unsigned int f32 = 1;
    for (int i = 1; i <= 13; i++) {
        f32 *= (unsigned int)i;
        printf("%2d! u32 = %10u\n", i, f32);
    }

    printf("\n");

    unsigned long long f64 = 1;
    for (int i = 1; i <= 20; i++) {
        f64 *= (unsigned long long)i;
        printf("%2d! u64 = %20llu\n", i, f64);
    }
    return 0;
}
```

`13! = 6227020800`, không vừa `unsigned int` 32-bit; kết quả in ra `1932053504` là **wrap-around** (được định nghĩa với `unsigned`). Với `signed int`, tràn là hành vi không xác định — đừng dùng để demo.

`unsigned long long` chứa tới `20!`; `21!` tràn. Ghi lại giới hạn này.

### 3.3 Số nguyên tố

```c
#include <stdio.h>

int is_prime(int n) {
    if (n < 2) return 0;
    for (int i = 2; (long long)i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main(void) {
    int n;
    if (scanf("%d", &n) != 1) return 1;
    printf("%s\n", is_prime(n) ? "prime" : "not prime");
    return 0;
}
```

`(long long)i * i` tránh tràn khi `n` gần `INT_MAX`. Có thể dùng `sqrt` nhưng phải cẩn thận sai số.

### 3.4 Fibonacci

```c
#include <stdio.h>

int main(void) {
    unsigned long long a = 0, b = 1;

    for (int i = 0; i < 20; i++) {
        printf("%llu\n", a);
        unsigned long long next = a + b;
        a = b;
        b = next;
    }
    return 0;
}
```

20 số đầu: 0, 1, 1, 2, 3, 5, ..., 4181. Chạy 100 vòng sẽ thấy wrap-around; đó là giới hạn của kiểu, không phải lỗi vòng lặp.

### 3.5 Đoán số

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
    srand((unsigned)time(NULL));
    int target = rand() % 100 + 1;
    int guess = 0;
    int tries = 0;

    printf("guess 1..100\n");
    for (;;) {
        printf("> ");
        if (scanf("%d", &guess) != 1) {
            printf("invalid input\n");
            return 1;
        }
        tries++;

        if (guess < target)      printf("higher\n");
        else if (guess > target) printf("lower\n");
        else {
            printf("correct in %d tries\n", tries);
            break;
        }
    }
    return 0;
}
```

`srand((unsigned)time(NULL))` có ép kiểu để tránh warning. Không gọi `srand` trong vòng lặp — mỗi lần gọi sẽ làm dãy số lặp lại.

### 3.6 Ba hàm

```c
int is_even(int n) {
    return n % 2 == 0;
}

int min3(int a, int b, int c) {
    int m = a;
    if (b < m) m = b;
    if (c < m) m = c;
    return m;
}

long long power(int base, int exp) {
    if (exp < 0) return 0;
    long long result = 1;
    for (int i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}
```

`power` với `exp < 0` trả 0 theo hợp đồng tự đặt; ghi rõ trong comment hoặc tài liệu hàm. `is_even(-3)` vẫn đúng vì `-3 % 2 == -1 != 0`.

### 3.7 Hình sao

```c
#include <stdio.h>

int main(void) {
    int n;
    if (scanf("%d", &n) != 1 || n <= 0) return 1;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("*");
        printf("\n");
    }
    printf("\n");

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) printf("%d ", j);
        printf("\n");
    }
    printf("\n");

    for (int i = 1; i <= n; i++) {
        for (int s = 0; s < n - i; s++) printf(" ");
        for (int j = 0; j < 2 * i - 1; j++) printf("*");
        printf("\n");
    }
    return 0;
}
```

### 3.8 Vòng lặp có `break` và `continue`

```c
for (int i = 1; i <= 100; i++) {
    if (i % 17 == 0) break;
    if (i % 3 == 0) continue;
    printf("%d ", i);
}
```

Output: `1 2 4 5 7 8 10 11 13 14 16`. Kiểm tra `break` **trước** `continue` để số 17 dừng vòng lặp.

### 3.9 Bài tập mở rộng tuần 3

1. **Số nguyên tố trong khoảng.** Nhập `a, b`, in mọi số nguyên tố trong `[a, b]`, đếm tổng.
   - Đạt khi: tái sử dụng `is_prime`, không lặp code.
2. **Số hoàn hảo.** In các số hoàn hảo ≤ 10000 (tổng ước thật bằng chính nó).
   - Gợi ý: hàm `sum_proper_divisors(n)`.
3. **GCD/LCM.** Viết `gcd` bằng Euclid, `lcm = a / gcd * b` để tránh tràn.
   - Đạt khi: xử lý số 0 và số âm.
4. **Collatz.** Nhập `n`, in dãy 3n+1, đếm số bước; dùng `unsigned long long`.
   - Đạt khi: không tràn với `n` tới 1 triệu.
5. **Đếm chữ số và đảo số.** Nhập số nguyên dương, đếm chữ số, in số đảo (bỏ số 0 đầu).
   - Gợi ý: `% 10`, `/ 10`.
6. **In nhị phân.** In dạng nhị phân 32 bit của một `unsigned int`, có khoảng cách mỗi 4 bit.
   - Gợi ý: duyệt từ bit 31 xuống 0.
7. **Hình thoi.** In hình thoi rỗng và đặc với chiều cao lẻ.
8. **FizzBuzz 1–100.** Chia hết 3 → Fizz, 5 → Buzz, 15 → FizzBuzz.
   - Đạt khi: kiểm tra 15 trước 3 và 5.
9. **Math toolkit.** Menu: 1 factorial, 2 prime, 3 gcd, 4 fibonacci, 0 exit. Mỗi chức năng một hàm, `main` chỉ điều phối.
   - Đạt khi: không code lặp, menu chạy liên tục.
10. **Đoán output.** Viết ra giấy output của 5 vòng lặp có `break`/`continue` khác nhau, rồi kiểm chứng.

---

## Tuần 4 — Mảng và chuỗi

### 4.1 Thống kê mảng

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
    int n;
    int a[100];

    if (scanf("%d", &n) != 1 || n <= 0 || n > 100) {
        printf("invalid n\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        if (scanf("%d", &a[i]) != 1) {
            printf("invalid input\n");
            return 1;
        }
    }

    int sum = 0;
    int mn = a[0], mx = a[0];
    for (int i = 0; i < n; i++) {
        sum += a[i];
        if (a[i] < mn) mn = a[i];
        if (a[i] > mx) mx = a[i];
    }

    printf("sum=%d avg=%.3f min=%d max=%d\n",
           sum, (double)sum / n, mn, mx);
    return 0;
}
```

### 4.2 Đảo mảng tại chỗ

```c
void reverse_array(int *a, int n) {
    for (int i = 0, j = n - 1; i < j; i++, j--) {
        int t = a[i];
        a[i] = a[j];
        a[j] = t;
    }
}
```

Điều kiện `i < j` quan trọng: dừng ở giữa, không đảo hai lần.

### 4.3 Đếm ký tự

```c
#include <ctype.h>
#include <string.h>

void count_chars(const char *s, int *vowels, int *digits, int *spaces) {
    *vowels = 0;
    *digits = 0;
    *spaces = 0;

    for (const char *p = s; *p; p++) {
        unsigned char c = (unsigned char)*p;
        if (strchr("aeiouAEIOU", c))      (*vowels)++;
        else if (isdigit(c))              (*digits)++;
        else if (isspace(c))              (*spaces)++;
    }
}
```

Ép `unsigned char` trước khi gọi `isdigit`/`isspace` là bắt buộc: truyền `char` âm vào hàm này là hành vi không xác định.

### 4.4 Palindrome

```c
#include <string.h>

int is_palindrome(const char *s) {
    size_t i = 0;
    size_t j = strlen(s);

    if (j == 0) return 1;
    j--;

    while (i < j) {
        if (s[i] != s[j]) return 0;
        i++;
        j--;
    }
    return 1;
}
```

Bản này phân biệt hoa thường. Bài mở rộng yêu cầu bản bỏ qua hoa thường và dấu cách.

### 4.5 Bubble sort

```c
void bubble_sort(int *a, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                int t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
}
```

Với `n <= 1`, vòng ngoài không chạy; an toàn.

### 4.6 Nhập tên bằng `fgets`

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main(void) {
    char name[64];

    printf("name: ");
    if (!fgets(name, sizeof name, stdin)) return 1;

    name[strcspn(name, "\n")] = '\0';
    printf("hello, %s (len=%zu)\n", name, strlen(name));
    return 0;
}
```

Nhập dài hơn 63 ký tự: `fgets` chỉ lấy 63 ký tự, **phần còn lại vẫn nằm trong stdin** và sẽ bị lần đọc sau lấy mất. Đây là lý do project ở tuần 13 dùng `read_line` có xả phần dư.

### 4.7 Ma trận 3×3

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(void) {
    int m[3][3];

    for (int r = 0; r < 3; r++)
        for (int c = 0; c < 3; c++)
            if (scanf("%d", &m[r][c]) != 1) return 1;

    for (int r = 0; r < 3; r++) {
        for (int c = 0; c < 3; c++) printf("%4d", m[r][c]);
        printf("\n");
    }

    for (int r = 0; r < 3; r++) {
        int sum = 0;
        for (int c = 0; c < 3; c++) sum += m[r][c];
        printf("row %d = %d\n", r, sum);
    }

    for (int c = 0; c < 3; c++) {
        int sum = 0;
        for (int r = 0; r < 3; r++) sum += m[r][c];
        printf("col %d = %d\n", c, sum);
    }
    return 0;
}
```

### 4.8 `count_char`

```c
int count_char(const char *s, char c) {
    int count = 0;
    for (; *s; s++) {
        if (*s == c) count++;
    }
    return count;
}
```

Dùng con trỏ dù tuần 5 mới học kỹ; đây là bài làm quen mắt.

### 4.9 Bài tập mở rộng tuần 4

1. **Palindrome nâng cao.** Bỏ qua hoa thường, dấu cách, dấu câu. Dùng `tolower`, `isalnum`.
   - Đạt khi: `"A man, a plan, a canal: Panama"` là palindrome.
2. **Đếm từ.** Nhập một dòng, đếm số từ (dùng trạng thái `in_word`).
   - Đạt khi: nhiều dấu cách liên tiếp không đếm thành nhiều từ.
3. **Caesar cipher.** Mã hóa/giải mã chuỗi chữ cái với `k` bước, giữ nguyên ký tự khác.
   - Gợi ý: `(c - 'a' + k) % 26 + 'a'`; xử lý cả chữ hoa.
4. **Histogram chữ cái.** Đếm tần suất 26 chữ cái, in biểu đồ bằng `*`.
   - Đạt khi: không dùng 26 biến rời.
5. **Nhân ma trận.** Nhập 2 ma trận kích thước hợp lệ, nhân, in kết quả.
   - Gợi ý: kiểm tra `colsA == rowsB`.
6. **Binary search.** Cho mảng đã sắp xếp, tìm `x` bằng chia đôi; in số bước.
   - Đạt khi: xử lý mảng rỗng, không tìm thấy.
7. **Merge hai mảng đã sắp xếp.** Tạo mảng thứ ba, không dùng sort lại.
8. **Xóa phần tử trùng trong mảng đã sắp xếp.** Làm tại chỗ, trả về số phần tử mới.
9. **Trim chuỗi.** Bỏ khoảng trắng đầu/cuối, dồn chuỗi tại chỗ.
   - Gợi ý: dùng `memmove`.
10. **Tìm chuỗi con.** Viết `my_strstr` không dùng hàm thư viện.
11. **Run-length encoding.** `"aaabbc"` → `"a3b2c1"`, và giải mã ngược.
12. **Tic-tac-toe win check.** Kiểm tra bàn 3×3 có người thắng chưa.
13. **Sắp xếp chuỗi.** Mảng `char names[5][32]`, sắp xếp bằng `strcmp` và `strcpy`/struct copy.

---

## Tuần 5 — Con trỏ I

### 5.1 `swap`

```c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
```

Bản truyền giá trị `swap(int a, int b)` chỉ đổi bản sao. Vẽ hình hai ô nhớ và hai bản sao ra giấy.

### 5.2 `increment`

```c
void increment(int *p) {
    (*p)++;
}
```

`*p++` là `*(p++)` — tăng con trỏ, không tăng giá trị. Luôn viết ngoặc khi chưa chắc.

### 5.3 `min_max`

```c
void min_max(const int *a, int n, int *out_min, int *out_max) {
    if (n <= 0) return;

    int mn = a[0], mx = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < mn) mn = a[i];
        if (a[i] > mx) mx = a[i];
    }
    *out_min = mn;
    *out_max = mx;
}
```

Hợp đồng: `n > 0`, `out_min`/`out_max` khác `NULL`. Ghi hợp đồng vào comment hoặc tài liệu hàm.

### 5.4 Đảo mảng bằng hai con trỏ

```c
void reverse_array_ptr(int *a, int n) {
    if (n < 2) return;

    int *left = a;
    int *right = a + n - 1;

    while (left < right) {
        int t = *left;
        *left = *right;
        *right = t;
        left++;
        right--;
    }
}
```

Guard `n < 2` cần thiết: với `n == 0`, `a + n - 1` tạo con trỏ trước mảng — hành vi không xác định.

### 5.5 `my_strlen`

```c
#include <stddef.h>

size_t my_strlen(const char *s) {
    const char *p = s;
    while (*p) p++;
    return (size_t)(p - s);
}
```

### 5.6 Tổng mảng bằng hai kiểu

```c
int sum_by_index(const int *a, int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += *(a + i);
    return sum;
}

int sum_by_pointer(const int *a, int n) {
    int sum = 0;
    const int *end = a + n;
    for (const int *p = a; p < end; p++) sum += *p;
    return sum;
}
```

### 5.7 Đoán output

```c
int a = 5;
int *p = &a;
int **pp = &p;
**pp = 10;
printf("%d\n", a);
```

Đáp án: `10`.

### 5.8 `reset(NULL)`

```c
#include <stdio.h>

void reset(int *p) {
    *p = 0;
}

int main(void) {
    reset(NULL);
    printf("done\n");
    return 0;
}
```

Chương trình compile bình thường, crash khi chạy: ghi vào địa chỉ 0. Visual Studio báo `read access violation` hoặc `write access violation` tại `p` bằng `nullptr`. Chạy trong project riêng, đừng đưa vào bài nộp.

Bản an toàn:

```c
int reset(int *p) {
    if (!p) return 0;
    *p = 0;
    return 1;
}
```

Kiểm tra `NULL` là hợp đồng. Nuốt lỗi im lặng cũng là một lựa chọn tồi; trả mã lỗi để caller biết.

### 5.9 Pointer quiz

Đoán trước khi chạy:

```c
int x = 5; int *p = &x; *p = 7;                 printf("%d\n", x);
int a[3] = {1,2,3}; int *q = a;                 printf("%d\n", *(q + 2));
int y = 10; int *r = &y;                        printf("%d\n", *r + 1);
int b[3];                                       printf("%zu\n", sizeof(b) / sizeof(b[0]));
int z = 1; int *s = &z; int **t = &s; **t = 4;  printf("%d\n", z);
int c[3] = {1,2,3}; int *u = c; u++;            printf("%d\n", *u);
int w = 3; int *v = &w;                         printf("%d\n", *v++);
int d[3] = {1,2,3};                              printf("%d\n", *(d + 1));
int m = 1, n = 2; int *k = &m; k = &n; *k = 5;  printf("%d %d\n", m, n);
```

Đáp án: `7`, `3`, `11`, `3`, `4`, `2`, `3` (in 3 rồi mới tăng `v`), `2`, `1 5`.

### 5.10 Bài tập mở rộng tuần 5

1. **Viết lại `strcmp`, `strcpy`, `strcat`.** Tự đặt tên `my_*`, có kiểm tra `NULL`.
   - Đạt khi: so sánh kết quả với hàm chuẩn trên 10 cặp chuỗi.
2. **Swap hai struct.** `void swap_player(Player *a, Player *b)`.
3. **Tìm con trỏ tới phần tử lớn nhất.** Trả `int *`, trả `NULL` nếu mảng rỗng.
4. **Đếm từ bằng con trỏ.** Không dùng chỉ số mảng.
5. **Tách chuỗi tại chỗ.** Thay dấu cách bằng `'\0'`, lưu con trỏ đầu mỗi từ vào mảng `char *words[64]`.
   - Gợi ý: sửa trực tiếp buffer; nhớ kết thúc mảng con trỏ bằng `NULL`.
6. **Sắp xếp mảng con trỏ chuỗi.** `char *names[]`, sắp xếp bằng `strcmp`, không copy chuỗi.
7. **Máy tính bằng con trỏ hàm.** `int (*ops[4])(int,int)` cho `+ - * /`.
8. **`set_ptr`.** `void set_ptr(int **pp, int *target)` đổi con trỏ mà caller đang giữ.
9. **Const correctness.** Viết 3 hàm: chỉ đọc, chỉ ghi, đọc-ghi; đặt `const` đúng chỗ và giải thích.
10. **Đảo chuỗi tại chỗ bằng con trỏ.** Không dùng `strlen`, tự tìm ký tự kết thúc.

---

## Tuần 6 — Con trỏ II và struct

### 6.1 `Player` — địa chỉ và offset

```c
#include <stdio.h>
#include <stddef.h>

typedef struct {
    char name[32];
    int hp;
    int mp;
    int gold;
} Player;

int main(void) {
    Player p = { "hero", 100, 50, 999 };

    printf("sizeof(Player) = %zu\n", sizeof(Player));
    printf("offset name = %zu\n", offsetof(Player, name));
    printf("offset hp   = %zu\n", offsetof(Player, hp));
    printf("offset mp   = %zu\n", offsetof(Player, mp));
    printf("offset gold = %zu\n", offsetof(Player, gold));

    printf("&p      = %p\n", (void *)&p);
    printf("&p.name = %p\n", (void *)&p.name);
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

Output offset trên MSVC/gcc: `name=0`, `hp=32`, `mp=36`, `gold=40`, `sizeof=44`. Không có padding thừa vì 44 chia hết cho 4.

### 6.2 `Enemy`

```c
typedef struct {
    int hp;
    int attack;
    int defense;
} Enemy;
```

Offset: `hp=0`, `attack=4`, `defense=8`, `sizeof=12`.

### 6.3 `Weird` — sơ đồ byte

```c
typedef struct {
    char c;
    int x;
    char d;
    int y;
} Weird;
```

```
offset 0      : c
offset 1..3   : pad
offset 4..7   : x
offset 8      : d
offset 9..11  : pad
offset 12..15 : y
sizeof = 16
```

Vẽ ra giấy đúng 16 ô, đánh dấu byte nào là field, byte nào là đệm.

### 6.4 Mảng `Player` — khoảng cách

```c
Player a[5];

for (int i = 0; i < 5; i++) {
    long long diff = 0;
    if (i > 0) diff = (long long)((char *)&a[i] - (char *)&a[i - 1]);
    printf("%d: %p diff=%lld\n", i, (void *)&a[i], diff);
}
```

`diff` luôn bằng `sizeof(Player)` = 44. Mảng struct là các struct nằm liền nhau, không có khoảng hở giữa các phần tử.

### 6.5 Sắp xếp `Player` theo hp giảm dần

```c
void sort_players_by_hp(Player *a, int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - 1 - i; j++) {
            if (a[j].hp < a[j + 1].hp) {
                Player t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
            }
        }
    }
}
```

Gán struct là copy toàn bộ, kể cả mảng `name`. Không cần `strcpy` khi swap cả struct.

### 6.6 `player_print`

```c
void player_print(const Player *p) {
    printf("%-16s hp=%4d mp=%4d gold=%6d\n",
           p->name, p->hp, p->mp, p->gold);
}
```

`const Player *` nghĩa là hàm không sửa struct. Đây là mặc định đúng cho hàm chỉ in.

### 6.7 `player_damage`

```c
void player_damage(Player *p, int dmg) {
    if (dmg <= 0) return;
    p->hp -= dmg;
    if (p->hp < 0) p->hp = 0;
}
```

### 6.8 Thêm `char rank`

```c
typedef struct {
    char name[32];
    int hp;
    int mp;
    int gold;
    char rank;
} PlayerWithRank;
```

`rank` ở offset 44, và `sizeof` thành **48**, không phải 45: compiler thêm 3 byte đệm cuối để mảng struct căn lề 4 byte. Đây là cái bẫy khi tính kích thước file ghi struct.

### 6.9 Struct lồng

```c
typedef struct {
    int hp;
    int mp;
} Stats;

typedef struct {
    char name[32];
    Stats stats;
    int gold;
} Player2;
```

Offset: `name=0`, `stats=32`, `stats.hp=32`, `stats.mp=36`, `gold=40`, `sizeof=44`.

Cách cộng tương đương (hữu ích khi bạn phải tính tay, không có `offsetof`):

```c
offsetof(Player2, stats) + offsetof(Stats, hp)
```

`offsetof(Player2, stats.hp)` **cũng là C chuẩn**, không phải mở rộng: chuẩn định nghĩa `offsetof(type, member-designator)` qua biểu thức `&(t.member-designator)`, nên designator lồng nhau hợp lệ (C11 §7.19 ¶3). Cách cộng ở trên chỉ là cách viết tương đương, không phải "cách an toàn hơn". Khác biệt thật nằm ở C++: `offsetof` chỉ được đảm bảo với kiểu standard-layout, nên đừng áp dụng cho class có virtual hoặc kế thừa.

### 6.10 Bài tập mở rộng tuần 6

1. **Sắp xếp lại field để giảm `sizeof`.** `Weird` gốc 16 byte; đổi thứ tự còn 12. Giải thích quy tắc.
   - Đạt khi: tự tìm ra thứ tự `int, int, char, char`.
2. **Thêm `double`.** Struct có `char` rồi `double`; in offset và `sizeof`, giải thích padding 7 byte.
3. **`print_bytes`.** Viết `void print_bytes(const void *p, size_t n)` in hex từng byte của một struct; dùng để thấy padding thật.
   - Đạt khi: output khớp sơ đồ giấy.
4. **Inventory lồng.** `Player` chứa `Inventory { int items[8]; int count; }`; in offset từng field.
5. **Kích thước con trỏ.** In `sizeof(int*)` trên x86 và x64; giải thích vì sao offset của struct có con trỏ thay đổi.
6. **Const correctness.** Viết `print`, `heal`, `rename` với `const` đúng chỗ; thử sửa field trong hàm `const` để thấy compiler chặn.
7. **Mảng struct + hàm.** `void print_all(const Player *a, int n)`; truyền mảng và số lượng, không dùng biến toàn cục.
8. **`offsetof` trên mảng field.** In offset của `name` và của từng `int` trong `Inventory`.
9. **Thiết kế `Entity`.** `Position { float x, y, z; }`, `Stats`, `char name[32]`; tính `sizeof` bằng tay rồi kiểm chứng. So sánh với giả thuyết ban đầu.

---

## Tuần 7 — Stack, heap, malloc/free

### 7.1 Mảng `int` động

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n;
    if (scanf("%d", &n) != 1 || n <= 0) return 1;

    int *a = malloc((size_t)n * sizeof *a);
    if (!a) {
        printf("malloc failed\n");
        return 1;
    }

    for (int i = 0; i < n; i++) {
        if (scanf("%d", &a[i]) != 1) {
            free(a);
            return 1;
        }
    }

    int sum = 0;
    for (int i = 0; i < n; i++) sum += a[i];
    printf("sum=%d\n", sum);

    free(a);
    a = NULL;
    return 0;
}
```

### 7.2 `realloc` nhân đôi capacity

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int capacity = 2;
    int count = 0;

    int *a = malloc((size_t)capacity * sizeof *a);
    if (!a) return 1;

    for (int value = 1; value <= 100; value++) {
        if (count == capacity) {
            int new_capacity = capacity * 2;
            int *tmp = realloc(a, (size_t)new_capacity * sizeof *a);
            if (!tmp) {
                free(a);
                return 1;
            }
            a = tmp;
            capacity = new_capacity;
        }
        a[count++] = value;
    }

    printf("count=%d capacity=%d first=%d last=%d\n",
           count, capacity, a[0], a[count - 1]);

    free(a);
    a = NULL;
    return 0;
}
```

Capacity cuối cùng: 128. Vì sao: 2 → 4 → 8 → 16 → 32 → 64 → 128, lần cuối xảy ra khi count = 64, sau đó thêm tới 100.

### 7.3 Nhập `Player` bằng `fgets` + `sscanf`

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[32];
    int hp;
    int mp;
    int gold;
} Player;

int main(void) {
    char line[128];
    int n = 0;

    printf("n: ");
    if (!fgets(line, sizeof line, stdin)) return 1;
    if (sscanf(line, "%d", &n) != 1 || n <= 0) return 1;

    Player *players = malloc((size_t)n * sizeof *players);
    if (!players) return 1;

    for (int i = 0; i < n; i++) {
        printf("name: ");
        if (!fgets(line, sizeof line, stdin)) { free(players); return 1; }
        line[strcspn(line, "\n")] = '\0';
        snprintf(players[i].name, sizeof players[i].name, "%s", line);

        printf("hp mp gold: ");
        if (!fgets(line, sizeof line, stdin)) { free(players); return 1; }
        if (sscanf(line, "%d %d %d",
                   &players[i].hp, &players[i].mp, &players[i].gold) != 3) {
            printf("invalid stats\n");
            free(players);
            return 1;
        }
    }

    for (int i = 0; i < n; i++) {
        printf("%s hp=%d mp=%d gold=%d\n",
               players[i].name, players[i].hp, players[i].mp, players[i].gold);
    }

    free(players);
    players = NULL;
    return 0;
}
```

Điểm quan trọng: đọc `n` bằng `fgets` + `sscanf`, không dùng `scanf("%d")` trước `fgets`. Nếu trộn, newline còn lại sẽ làm lần `fgets` đầu tiên đọc được chuỗi rỗng.

### 7.4 Leak cố ý

```c
#define _CRTDBG_MAP_ALLOC
#include <stdlib.h>
#include <crtdbg.h>

int main(void) {
    _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);

    int *p = malloc(10 * sizeof *p);
    if (!p) return 1;
    p[0] = 1;
    /* thiếu free(p) */
    return 0;
}
```

Report dạng:

```
Detected memory leaks!
Dumping objects ->
{123} normal block at 0x000001F4..., 40 bytes long.
Data: <                > 01 00 00 00 ...
Object dump complete.
```

`40 bytes` = `10 * sizeof(int)`. Số trong `{123}` là allocation number; `_CrtSetBreakAlloc(123);` đặt breakpoint ngay lần cấp phát đó. Chỉ hoạt động ở Debug.

### 7.5 Double free

```c
int *p = malloc(4 * sizeof *p);
free(p);
free(p);   /* sai */
```

Hành vi không xác định. Trên MSVC Debug có thể thấy assert heap hoặc `Heap corruption detected`. Trên bản Release có thể không báo gì rồi hỏng dữ liệu. Sau `free`, gán `p = NULL` để lần dùng sai crash rõ ràng hơn.

### 7.6 Trả con trỏ tới biến local

```c
int *bad(void) {
    int x = 42;
    return &x;
}
```

MSVC cảnh báo `C4172: returning address of local variable or temporary`. Dù đôi khi in ra 42, đây là hành vi không xác định: stack frame đã bị thu hồi.

### 7.7 `dup_string`

```c
#include <stdlib.h>
#include <string.h>

char *dup_string(const char *s) {
    size_t n = strlen(s) + 1;
    char *p = malloc(n);
    if (!p) return NULL;
    memcpy(p, s, n);
    return p;
}
```

Hợp đồng: người gọi chịu trách nhiệm `free`. Ghi vào sổ cột "ai cấp phát, ai giải phóng".

### 7.8 Bài tập mở rộng tuần 7

1. **Dynamic stack.** Struct `IntStack { int *items; int count; int capacity; }` với `push`, `pop`, `free`. `push` tự nhân đôi capacity.
2. **Đọc toàn bộ file thành buffer.** Dùng `fseek`/`ftell` để biết kích thước, `malloc(n + 1)`, `fread`, thêm `'\0'`.
3. **Ma trận động liền khối.** `int *m = malloc(rows * cols * sizeof *m);`, truy cập `m[r * cols + c]`. So sánh với mảng con trỏ.
4. **Hàm grow dùng chung.** `int grow(void **data, int *capacity, size_t item_size)`; dùng cho mảng `int` và `Player`.
5. **Bảng ownership.** Lập bảng: hàm nào cấp phát, hàm nào giải phóng, ai chịu trách nhiệm. Điền cho toàn bộ bài từ tuần 7.
6. **Tách chuỗi động.** `char **split(const char *s, char sep, int *count)`; cấp phát mảng con trỏ + từng chuỗi; viết `split_free`.
7. **`realloc` thu nhỏ.** Sau khi xóa nhiều phần tử, thu capacity về `count` nếu `count < capacity / 4`.
8. **`calloc` vs `malloc`.** In 10 phần tử ngay sau cấp phát để thấy `calloc` zero, `malloc` rác.
9. **Săn lỗi bộ nhớ.** Tự tạo 5 lỗi: leak, double free, UAF, overflow, sai `sizeof`; tìm bằng leak report + debugger.
10. **Sơ đồ bộ nhớ.** Vẽ stack/heap cho một chương trình có 2 hàm, 1 mảng động, 2 biến local; chỉ rõ cái gì chết khi hàm return.

---

## Tuần 8 — Nhiều file, header, link

### 8.1 Project 3 file

**player.h**

```c
#pragma once
#include <stddef.h>

#define PLAYER_NAME_MAX 32

typedef struct {
    char name[PLAYER_NAME_MAX];
    int hp;
    int mp;
    int gold;
} Player;

void player_init(Player *p, const char *name, int hp, int mp, int gold);
void player_print(const Player *p);
void player_print_offsets(void);
void player_damage(Player *p, int dmg);
```

**player.c**

```c
#include "player.h"
#include <stdio.h>
#include <string.h>

static void copy_name(char *dst, size_t size, const char *src) {
    if (size == 0) return;
    snprintf(dst, size, "%s", src ? src : "");
}

void player_init(Player *p, const char *name, int hp, int mp, int gold) {
    copy_name(p->name, sizeof p->name, name);
    p->hp = hp;
    p->mp = mp;
    p->gold = gold;
}

void player_print(const Player *p) {
    printf("%-16s hp=%4d mp=%4d gold=%6d\n",
           p->name, p->hp, p->mp, p->gold);
}

void player_print_offsets(void) {
    printf("sizeof(Player) = %zu\n", sizeof(Player));
    printf("offsetof(name) = %zu\n", offsetof(Player, name));
    printf("offsetof(hp)   = %zu\n", offsetof(Player, hp));
    printf("offsetof(mp)   = %zu\n", offsetof(Player, mp));
    printf("offsetof(gold) = %zu\n", offsetof(Player, gold));
}

void player_damage(Player *p, int dmg) {
    if (dmg <= 0) return;
    p->hp -= dmg;
    if (p->hp < 0) p->hp = 0;
}
```

**main.c**

```c
#include "player.h"

int main(void) {
    Player p;
    player_init(&p, "hero", 100, 50, 999);

    player_print_offsets();
    player_print(&p);

    player_damage(&p, 30);
    player_print(&p);
    return 0;
}
```

`snprintf` nằm trong `<stdio.h>`, `offsetof` trong `<stddef.h>` (đã include qua `player.h`). `copy_name` là `static` vì chỉ dùng trong file.

### 8.2 `LNK2019`

Xóa định nghĩa `player_print` trong `player.c`, giữ khai báo trong `player.h`, build. Lỗi dạng:

```
main.obj : error LNK2019: unresolved external symbol player_print referenced in function main
main.exe : fatal error LNK1120: 1 unresolved externals
```

Nghĩa: `main.c` đã gọi, compiler tin hàm tồn tại nhờ header, nhưng linker không tìm thấy phần thân. Sửa: thêm lại định nghĩa, hoặc sửa signature cho khớp.

### 8.3 `static` helper

Nếu `copy_name` là `static` trong `player.c` và `main.c` khai báo rồi gọi nó:

```c
void copy_name(char *dst, size_t size, const char *src);
```

Link sẽ báo `LNK2019`, vì `static` giới hạn liên kết trong file. Bài học: `static` là "riêng tư của module"; muốn dùng ngoài phải khai báo trong header và bỏ `static`.

### 8.4 Header không tìm thấy

Đổi `#include "player.h"` thành `#include "players.h"`:

```
fatal error C1083: Cannot open include file: 'players.h': No such file or directory
```

Sửa tên hoặc thêm include path. Đây là lỗi compile, không phải link.

### 8.5 Sơ đồ module

```
main.c ---- include ----> player.h
player.c -- include ----> player.h
main.c ---- gọi --------> player_print (định nghĩa trong player.c)

compiler: main.c -> main.obj
compiler: player.c -> player.obj
linker: main.obj + player.obj -> main.exe
```

### 8.6 Bài tập mở rộng tuần 8

1. **Module `inventory`.** Thêm `inventory.h/.c` với `Inventory` và các hàm `inv_add`, `inv_print`, `inv_total`; `main.c` dùng cả hai module.
2. **Test bằng `assert`.** Viết `test_player.c` kiểm tra `player_init`, `player_damage`; build và chạy, thấy assert fail khi cố ý làm sai.
3. **Prefix API.** Đổi tên hàm thành `player_*`, `inventory_*`; giải thích vì sao tránh được xung đột.
4. **Include vòng.** Cho `player.h` include `inventory.h` và ngược lại; sửa bằng forward declaration `typedef struct Player Player;` hoặc bằng cách chỉ include trong `.c`.
5. **Thư viện tĩnh.** Tạo Static Library project chứa `player.c`, rồi app riêng link vào; ghi lại các bước.
6. **Build /W4.** Bật warning level 4 cho cả project, sửa tới khi sạch.
7. **Tách 4 module.** `player`, `inventory`, `storage`, `main`; vẽ sơ đồ phụ thuộc, đảm bảo không có vòng.
8. **`extern` demo.** Khai báo một biến toàn cục trong một file, dùng `extern` ở file khác; sau đó thay bằng hàm getter/setter và giải thích vì sao cách sau tốt hơn.

---

## Tuần 9 — File I/O, bit và thập lục phân

### 9.1 Ghi/đọc mảng `Player` nhị phân

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[32];
    int hp;
    int mp;
    int gold;
} Player;

typedef struct {
    char magic[4];
    int count;
} Header;

int save_players(const Player *a, int n, const char *path) {
    FILE *f = fopen(path, "wb");
    if (!f) { perror("fopen"); return 0; }

    Header h;
    memcpy(h.magic, "PDB1", 4);
    h.count = n;

    int ok = fwrite(&h, sizeof h, 1, f) == 1;
    if (ok && n > 0) {
        ok = fwrite(a, sizeof *a, (size_t)n, f) == (size_t)n;
    }
    if (fclose(f) != 0) ok = 0;
    return ok;
}

Player *load_players(const char *path, int *out_count) {
    *out_count = 0;

    FILE *f = fopen(path, "rb");
    if (!f) { perror("fopen"); return NULL; }

    Header h;
    if (fread(&h, sizeof h, 1, f) != 1 ||
        memcmp(h.magic, "PDB1", 4) != 0 ||
        h.count < 0 || h.count > 1000000) {
        fclose(f);
        return NULL;
    }

    if (h.count == 0) {
        fclose(f);
        return NULL;   /* bản rút gọn: file rỗng coi như không có dữ liệu */
    }

    Player *a = malloc((size_t)h.count * sizeof *a);
    if (!a) { fclose(f); return NULL; }

    if (fread(a, sizeof *a, (size_t)h.count, f) != (size_t)h.count) {
        free(a);
        fclose(f);
        return NULL;
    }

    fclose(f);
    *out_count = h.count;
    return a;
}
```

Bản rút gọn này không phân biệt "file rỗng" với "lỗi". Project ở mục 13 xử lý được cả file rỗng. Đây là bài học về thiết kế API: `NULL` không đủ để biểu diễn mọi trạng thái.

> **Cảnh báo portability:** ghi/đọc nguyên `struct` bằng `fwrite`/`fread` chỉ đúng khi file được đọc lại bởi **cùng compiler, cùng kiến trúc, cùng cách build**. Padding, alignment, endianness và kích thước `int` có thể khác giữa MSVC và gcc, giữa x86 và ARM; đổi toolchain là file cũ đọc sai âm thầm. Với dữ liệu cần dùng lâu dài, ghi từng field theo thứ tự byte cố định (ví dụ `uint32_t` little-endian) hoặc dùng text/JSON. Ở bài học này giữ nguyên struct cho gọn — đừng mang nguyên cách đó vào project thật.

### 9.2 Ghi log text

```c
FILE *f = fopen("log.txt", "a");
if (f) {
    fprintf(f, "%s hp=%d mp=%d gold=%d\n",
            p->name, p->hp, p->mp, p->gold);
    fclose(f);
}
```

Mode `"a"` append; `"w"` xóa nội dung cũ. Luôn kiểm tra `fopen`.

### 9.3 Hexdump

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main(int argc, char **argv) {
    if (argc != 2) {
        fprintf(stderr, "usage: %s <file>\n", argv[0]);
        return 1;
    }

    FILE *f = fopen(argv[1], "rb");
    if (!f) { perror("fopen"); return 1; }

    unsigned char buf[16];
    size_t n;
    unsigned long long offset = 0;

    while ((n = fread(buf, 1, sizeof buf, f)) > 0) {
        printf("%08llX  ", offset);

        for (size_t i = 0; i < 16; i++) {
            if (i < n) printf("%02X ", buf[i]);
            else       printf("   ");
            if (i == 7) printf(" ");
        }

        printf(" |");
        for (size_t i = 0; i < n; i++) {
            unsigned char c = buf[i];
            putchar((c >= 32 && c < 127) ? c : '.');
        }
        printf("|\n");

        offset += n;
    }

    fclose(f);
    return 0;
}
```

So sánh output với một hex editor trên cùng file. Cột trái là offset, giữa là byte hex, phải là ASCII.

### 9.4 Quyền bằng bit

```c
#include <stdio.h>

enum {
    PERM_READ  = 1u << 0,
    PERM_WRITE = 1u << 1,
    PERM_EXEC  = 1u << 2
};

int main(void) {
    unsigned int perms = 0;

    perms |= PERM_READ | PERM_WRITE;
    printf("0x%X\n", perms);

    if (perms & PERM_WRITE) printf("writable\n");

    perms &= ~(1u << 1);
    printf("0x%X\n", perms);

    return 0;
}
```

### 9.5 Byte của `int`, `float`, `double`

```c
#include <stdio.h>

static void print_bytes(const void *p, size_t n) {
    const unsigned char *b = (const unsigned char *)p;
    for (size_t i = 0; i < n; i++) printf("%02X ", b[i]);
    printf("\n");
}

int main(void) {
    int i = 0x11223344;
    float f = 3.5f;
    double d = 3.5;

    print_bytes(&i, sizeof i);
    print_bytes(&f, sizeof f);
    print_bytes(&d, sizeof d);
    return 0;
}
```

Output trên x86/x64 little-endian:

```
44 33 22 11
00 00 60 40
00 00 00 00 00 00 0C 40
```

`float 3.5` là `0x40600000` theo IEEE 754; `double 3.5` là `0x400C000000000000`. Little-endian đảo thứ tự byte khi nhìn từ địa chỉ thấp.

### 9.6 Đếm bit 1

```c
int count_bits(unsigned int x) {
    int count = 0;
    while (x) {
        x &= x - 1;
        count++;
    }
    return count;
}
```

Mỗi lần `x &= x - 1` xóa bit 1 thấp nhất. Số vòng lặp bằng số bit 1, không phải 32.

### 9.7 Thống kê file

```c
#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <ctype.h>

int main(int argc, char **argv) {
    if (argc != 2) {
        fprintf(stderr, "usage: %s <file>\n", argv[0]);
        return 1;
    }

    FILE *f = fopen(argv[1], "rb");
    if (!f) { perror("fopen"); return 1; }

    long chars = 0, words = 0, lines = 0;
    int c;
    int in_word = 0;

    while ((c = fgetc(f)) != EOF) {
        chars++;
        if (c == '\n') lines++;
        if (isspace((unsigned char)c)) {
            in_word = 0;
        } else if (!in_word) {
            in_word = 1;
            words++;
        }
    }

    fclose(f);
    printf("chars=%ld words=%ld lines=%ld\n", chars, words, lines);
    return 0;
}
```

File không kết thúc bằng newline sẽ bị đếm thiếu 1 dòng. Bài mở rộng yêu cầu sửa.

### 9.8 Bài tập mở rộng tuần 9

1. **Hexdump có option.** Thêm `-l N` giới hạn số byte, `-s N` bắt đầu từ offset N; parse `argv`.
2. **Tìm chuỗi trong file nhị phân.** Đọc từng block, tìm chuỗi con, in offset tìm thấy.
3. **Histogram byte.** Đếm tần suất 256 giá trị byte, in top 10.
4. **Copy file.** Dùng `fread`/`fwrite` block 4KB, so sánh kích thước và checksum.
5. **CSV đơn giản.** Ghi `Player` ra CSV, đọc lại bằng `strtok`/`sscanf`; xử lý tên có dấu phẩy.
6. **Xoay bit.** `rotate_left(unsigned x, int k)` và `rotate_right`; test với `k = 0, 1, 31, 32`.
7. **Hex string sang số.** `int hex_to_int(const char *s)`; xử lý `0x` prefix, chữ hoa/thường, ký tự lạ.
8. **Đảo endian.** `unsigned int swap_endian(unsigned int x)`; test `0x11223344` → `0x44332211`.
9. **Checksum.** Tính tổng byte và XOR byte của một file; so sánh hai file.
10. **Đọc header PNG.** Mở file PNG, kiểm tra 8 byte signature `89 50 4E 47 0D 0A 1A 0A`; in thông báo hợp lệ/không.
11. **In quyền dạng `rwx`.** Từ 3 bit, in `"rwx"`, `"r-x"`, `"---"`.
12. **Sửa thống kê file.** Đếm đúng dòng cuối không có newline; phân biệt `\r\n` và `\n`.

---

## Tuần 10–12 — Project tham chiếu "Player DB"

Đây là bản tham chiếu tối thiểu, chạy được, không phải bản duy nhất đúng. Project của bạn có thể chia module khác, miễn qua spec và 5 bài verify.

### 10.1 `player.h`

```c
#pragma once
#include <stddef.h>

#define PLAYER_NAME_MAX 32
#define PLAYER_LIST_INITIAL_CAP 4

typedef struct {
    char name[PLAYER_NAME_MAX];
    int hp;
    int mp;
    int gold;
} Player;

typedef struct {
    Player *items;
    int count;
    int capacity;
} PlayerList;

void player_init(Player *p, const char *name, int hp, int mp, int gold);
void player_print(const Player *p);
void player_print_offsets(void);
void player_damage(Player *p, int dmg);

void list_init(PlayerList *list);
void list_free(PlayerList *list);
int list_push(PlayerList *list, const Player *p);
int list_find(const PlayerList *list, const char *name);
int list_remove_at(PlayerList *list, int index);
```

### 10.2 `player.c`

```c
#include "player.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static void copy_name(char *dst, size_t size, const char *src) {
    if (size == 0) return;
    snprintf(dst, size, "%s", src ? src : "");
}

void player_init(Player *p, const char *name, int hp, int mp, int gold) {
    copy_name(p->name, sizeof p->name, name);
    p->hp = hp;
    p->mp = mp;
    p->gold = gold;
}

void player_print(const Player *p) {
    printf("%-16s hp=%4d mp=%4d gold=%6d\n",
           p->name, p->hp, p->mp, p->gold);
}

void player_print_offsets(void) {
    printf("sizeof(Player) = %zu\n", sizeof(Player));
    printf("offsetof(name) = %zu\n", offsetof(Player, name));
    printf("offsetof(hp)   = %zu\n", offsetof(Player, hp));
    printf("offsetof(mp)   = %zu\n", offsetof(Player, mp));
    printf("offsetof(gold) = %zu\n", offsetof(Player, gold));
}

void player_damage(Player *p, int dmg) {
    if (dmg <= 0) return;
    p->hp -= dmg;
    if (p->hp < 0) p->hp = 0;
}

void list_init(PlayerList *list) {
    list->items = NULL;
    list->count = 0;
    list->capacity = 0;
}

void list_free(PlayerList *list) {
    free(list->items);
    list_init(list);
}

int list_push(PlayerList *list, const Player *p) {
    if (list->count == list->capacity) {
        int new_cap = list->capacity == 0
                    ? PLAYER_LIST_INITIAL_CAP
                    : list->capacity * 2;

        Player *tmp = realloc(list->items, (size_t)new_cap * sizeof *tmp);
        if (!tmp) return 0;

        list->items = tmp;
        list->capacity = new_cap;
    }

    list->items[list->count++] = *p;
    return 1;
}

int list_find(const PlayerList *list, const char *name) {
    for (int i = 0; i < list->count; i++) {
        if (strcmp(list->items[i].name, name) == 0) return i;
    }
    return -1;
}

int list_remove_at(PlayerList *list, int index) {
    if (index < 0 || index >= list->count) return 0;

    for (int i = index; i < list->count - 1; i++) {
        list->items[i] = list->items[i + 1];
    }
    list->count--;
    return 1;
}
```

### 10.3 `storage.h`

```c
#pragma once
#include "player.h"

int storage_save(const PlayerList *list, const char *path);
int storage_load(PlayerList *list, const char *path);
```

### 10.4 `storage.c`

```c
#define _CRT_SECURE_NO_WARNINGS
#include "storage.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char magic[4];
    int count;
} FileHeader;

int storage_save(const PlayerList *list, const char *path) {
    FILE *f = fopen(path, "wb");
    if (!f) { perror("fopen"); return 0; }

    FileHeader h;
    memcpy(h.magic, "PDB1", 4);
    h.count = list->count;

    int ok = fwrite(&h, sizeof h, 1, f) == 1;
    if (ok && list->count > 0) {
        ok = fwrite(list->items, sizeof *list->items,
                    (size_t)list->count, f) == (size_t)list->count;
    }

    if (fclose(f) != 0) ok = 0;
    return ok;
}

int storage_load(PlayerList *list, const char *path) {
    FILE *f = fopen(path, "rb");
    if (!f) { perror("fopen"); return 0; }

    FileHeader h;
    if (fread(&h, sizeof h, 1, f) != 1 ||
        memcmp(h.magic, "PDB1", 4) != 0) {
        fprintf(stderr, "invalid file header\n");
        fclose(f);
        return 0;
    }

    if (h.count < 0 || h.count > 1000000) {
        fprintf(stderr, "invalid player count\n");
        fclose(f);
        return 0;
    }

    Player *items = NULL;
    if (h.count > 0) {
        items = malloc((size_t)h.count * sizeof *items);
        if (!items) { fclose(f); return 0; }

        if (fread(items, sizeof *items, (size_t)h.count, f) != (size_t)h.count) {
            fprintf(stderr, "truncated file\n");
            free(items);
            fclose(f);
            return 0;
        }
    }

    fclose(f);

    free(list->items);
    list->items = items;
    list->count = h.count;
    list->capacity = h.count;
    return 1;
}
```

Cách ghi/đọc nguyên `Player` ở đây dính đúng cảnh báo portability ở mục 9.1: ổn cho bài học trên một máy, không dùng cho file phải trao đổi giữa compiler/kiến trúc khác nhau.

### 10.5 `main.c`

```c
#define _CRT_SECURE_NO_WARNINGS
#define _CRTDBG_MAP_ALLOC
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <crtdbg.h>
#include "player.h"
#include "storage.h"

static int read_line(char *buf, size_t size) {
    if (size == 0) return 0;
    if (!fgets(buf, (int)size, stdin)) return 0;

    size_t len = strlen(buf);
    if (len > 0 && buf[len - 1] == '\n') {
        buf[len - 1] = '\0';
    } else {
        int c;
        while ((c = getchar()) != '\n' && c != EOF) { }
    }
    return 1;
}

static int read_int(const char *prompt, int *out) {
    char buf[64];
    printf("%s", prompt);
    if (!read_line(buf, sizeof buf)) return 0;
    return sscanf(buf, "%d", out) == 1;
}

static void print_menu(void) {
    printf("\n1 add  2 list  3 find  4 damage  5 delete  6 save  7 load  0 exit\n> ");
}

int main(void) {
    _CrtSetDbgFlag(_CRTDBG_ALLOC_MEM_DF | _CRTDBG_LEAK_CHECK_DF);

    PlayerList list;
    list_init(&list);
    player_print_offsets();

    int running = 1;
    while (running) {
        print_menu();

        char line[64];
        if (!read_line(line, sizeof line)) break;

        int choice = -1;
        if (sscanf(line, "%d", &choice) != 1) {
            printf("invalid choice\n");
            continue;
        }

        switch (choice) {
        case 1: {
            char name[PLAYER_NAME_MAX];
            printf("name: ");
            if (!read_line(name, sizeof name)) break;

            int hp, mp, gold;
            if (!read_int("hp: ", &hp) ||
                !read_int("mp: ", &mp) ||
                !read_int("gold: ", &gold)) {
                printf("invalid stats\n");
                break;
            }

            Player p;
            player_init(&p, name, hp, mp, gold);

            if (list_push(&list, &p)) printf("added\n");
            else printf("out of memory\n");
            break;
        }
        case 2:
            if (list.count == 0) {
                printf("empty\n");
                break;
            }
            for (int i = 0; i < list.count; i++) {
                printf("[%d] ", i);
                player_print(&list.items[i]);
            }
            break;
        case 3: {
            char name[PLAYER_NAME_MAX];
            printf("name: ");
            if (!read_line(name, sizeof name)) break;

            int index = list_find(&list, name);
            if (index < 0) {
                printf("not found\n");
            } else {
                printf("[%d] ", index);
                player_print(&list.items[index]);
            }
            break;
        }
        case 4: {
            char name[PLAYER_NAME_MAX];
            printf("name: ");
            if (!read_line(name, sizeof name)) break;

            int index = list_find(&list, name);
            if (index < 0) { printf("not found\n"); break; }

            int damage;
            if (!read_int("damage: ", &damage) || damage < 0) {
                printf("invalid damage\n");
                break;
            }
            player_damage(&list.items[index], damage);
            printf("updated\n");
            break;
        }
        case 5: {
            char name[PLAYER_NAME_MAX];
            printf("name: ");
            if (!read_line(name, sizeof name)) break;

            int index = list_find(&list, name);
            if (index < 0) { printf("not found\n"); break; }

            list_remove_at(&list, index);
            printf("deleted\n");
            break;
        }
        case 6:
            if (storage_save(&list, "players.bin")) printf("saved\n");
            else printf("save failed\n");
            break;
        case 7:
            if (storage_load(&list, "players.bin")) printf("loaded\n");
            else printf("load failed\n");
            break;
        case 0:
            running = 0;
            break;
        default:
            printf("unknown choice\n");
        }
    }

    list_free(&list);
    return 0;
}
```

### 10.6 Năm bug cố ý — lời giải

| Bug | Triệu chứng | Cách tìm | Sửa |
|---|---|---|---|
| `malloc(count)` thay vì `count * sizeof *items` | Ghi đè heap, crash lúc `free` hoặc lúc chạy tiếp; đôi khi không crash ngay | Breakpoint chỗ cấp phát, Memory window xem kích thước; leak/heap report | Nhân với `sizeof *items` |
| Vòng lặp `i <= count` | Đọc phần tử thứ `count`, in ra player rác | Watch `i`, `count`; thấy vòng chạy dư 1 | Đổi thành `i < count` |
| `free` rồi dùng lại | Lúc đầu chạy đúng, sau crash hoặc in rác | Breakpoint sau `free`, xem con trỏ; heap check | Dùng xong mới `free`, hoặc gán `NULL` |
| Thiếu `free` ở nhánh lỗi khi load | Leak report sau khi load file hỏng | Đọc report, đối chiếu allocation number | Gom về một đường cleanup duy nhất |
| Field chưa khởi tạo | `gold` in ra số rác `-858993460` (0xCC) | Watch struct trước khi push | `player_init` hoặc `Player p = {0};` |

Bài học: bug bộ nhớ thường **không crash ngay**. Vì vậy phải bật leak check và chạy Debug trong suốt quá trình làm.

### 10.7 Năm bài verify — cách làm

1. **Restart:** thêm 3 player, save, thoát, chạy lại, load, so từng field.
2. **Clean rebuild:** Build → Clean Solution → Rebuild; không warning, không lỗi.
3. **File hỏng:** mở `players.bin` bằng hexdump, sửa magic `PDB1` thành `XXXX`; load phải báo `invalid file header`, không crash. Thử cắt file còn nửa header; phải báo lỗi.
4. **Giải thích:** nói to luồng `list_push` (khi nào realloc, ai sở hữu `items`), luồng `storage_load` (khi nào giải phóng dữ liệu cũ), và vì sao `read_line` xả phần dư.
5. **Stress:** tạm thời thêm vòng lặp thêm 1000 player, xóa hết, thêm lại; lặp 20 lần; chạy Debug, không leak, không crash. Sau đó bỏ code stress.

### 10.8 Bài tập mở rộng project

1. **Sắp xếp theo hp.** Thêm menu 8: sắp xếp giảm dần bằng `qsort` và comparator.
   - Đạt khi: không đổi thứ tự khi hp bằng nhau (hoặc nêu rõ là không ổn định).
2. **Tìm gần đúng.** Tìm theo một phần tên bằng `strstr`.
   - Đạt khi: in tất cả kết quả khớp, không chỉ kết quả đầu.
3. **Xuất CSV.** Ghi `name,hp,mp,gold`, xử lý tên có dấu phẩy bằng quoting.
4. **Nhập CSV.** Đọc file CSV, bỏ dòng header, parse bằng `strtok` hoặc tự viết; xử lý dòng hỏng.
5. **Version file.** Header thêm `int version`; từ chối version lạ; ghi version hiện tại khi save.
   - Đạt khi: file cũ vẫn đọc được hoặc báo lỗi rõ ràng.
6. **Backup khi save.** Trước khi ghi đè, đổi tên file cũ thành `players.bin.bak`.
7. **Log thao tác.** Ghi mỗi lần add/delete/save vào `app.log` kèm thời gian.
8. **Đường dẫn file qua argv.** `main(int argc, char **argv)`, mặc định `players.bin`, cho phép `--file path`.
9. **Tên động.** Đổi `char name[32]` thành `char *name`; file phải lưu độ dài chuỗi trước nội dung. Đây là bài khó nhất, làm sau cùng.
   - Gợi ý: `uint32_t len; fwrite(&len, ...); fwrite(name, 1, len, ...);`; nhớ `free` từng tên.
10. **Test tự động.** File `test_player.c` dùng `assert`: push/find/remove, save/load round-trip với file tạm, load file hỏng trả 0.
11. **Chống input xấu.** Tên 1000 ký tự, hp âm, gold cực lớn, số player âm; không crash, thông báo rõ.
12. **Chế độ chỉ đọc.** `--readonly` chặn add/delete/save nhưng vẫn list/find.
13. **Mã hóa XOR (chỉ để học).** XOR từng byte file với một khóa; nêu rõ đây **không phải mã hóa an toàn**.

### 10.9 Rubric tự chấm (thang 12)

| Tiêu chí | 0 | 1 | 2 |
|---|---|---|---|
| Build | Không build | Build còn warning | Build sạch |
| Chức năng | Thiếu >2 | Thiếu 1–2 | Đủ 7 |
| Biên | Crash với input xấu | Xử lý một phần | Xử lý đủ, báo lỗi rõ |
| Bộ nhớ | Leak/crash | Leak nhỏ | Không leak, không UAF |
| Giải thích | Không giải thích được | Giải thích lúng túng | Giải thích trôi chảy |
| Debug | Không tìm được bug | Tìm được với gợi ý | Tự tìm bằng debugger |

Qua khi tổng ≥ 9, và không có 0 ở hai dòng **Bộ nhớ** và **Debug**.

---

## Phụ lục — Checklist tự chấm cuối mỗi tuần

- [ ] Code build sạch, không warning bị bỏ qua.
- [ ] Chạy đúng với input thường và ít nhất 2 input xấu.
- [ ] Giải thích được từng dòng quan trọng mà không nhìn code.
- [ ] Làm lại bài chính từ trang giấy trắng trong thời gian hợp lý.
- [ ] Ghi sổ: lỗi gặp, nguyên nhân, cách sửa.
- [ ] Không copy lời giải khi chưa thử ít nhất 45 phút.

Nếu trượt 2 tuần liên tiếp ở cùng một chủ đề, quay lại tuần trước đó thay vì đi tiếp. Nền yếu ở con trỏ và bộ nhớ sẽ làm bạn tắc ở tuần 7–12 của file 16 tuần, lúc sửa khó hơn nhiều.
