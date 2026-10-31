# Giáo Trình Ngôn Ngữ Lập Trình C

Giáo trình của nhóm tác giả Trương Ngọc Sơn – Lê Minh – Trương Ngọc Hà – Lê Minh Thành, Nhà xuất bản Đại học Quốc gia TP. Hồ Chí Minh, 2020 (ISBN 978-604-73-7623-0), dành cho sinh viên ngành Kỹ thuật máy tính. Bản trên web này được chuyển từ file PDF 211 trang: giữ nguyên nội dung, công thức và thứ tự trình bày; **hình vẽ** được cắt lại từ bản gốc, còn **bảng** và **danh sách bài tập** được dựng lại để đọc và tick tiến độ trên web.

Sách có 8 chương, mỗi chương mở đầu bằng mục tiêu học tập và kết thúc bằng bài tập:

- **Chương 1** – Giới thiệu: chương trình, giải thuật, lưu đồ, ngôn ngữ C, biến, hằng, phép toán, xuất nhập.
- **Chương 2** – Lệnh rẽ nhánh có điều kiện: lệnh đơn, khối lệnh, `if`, `if…else`, `switch…case`.
- **Chương 3** – Lệnh vòng lặp: `for`, `while`, `do…while`, vòng lặp lồng nhau, `break`/`continue`.
- **Chương 4** – Mảng và chuỗi: mảng một chiều, mảng nhiều chiều, chuỗi ký tự, các hàm xử lý chuỗi.
- **Chương 5** – Con trỏ: khai báo, con trỏ và mảng, cấp phát bộ nhớ động với `malloc`, `calloc`, `realloc`, `free`.
- **Chương 6** – Hàm: định nghĩa, tham số, giá trị trả về, đệ quy, phạm vi biến.
- **Chương 7** – Kiểu dữ liệu tự tạo: `struct`, `union`, `enum`.
- **Chương 8** – Tiền xử lý: `#include`, `#define`, chỉ thị điều khiển biên dịch.

> Lưu ý khi học theo giáo trình: sách dùng `#include <conio.h>`, `getch()` và `void main()` theo chuẩn cũ của Borland C. Khi làm bài trên máy hiện nay (gcc/MSYS2), thay `void main` bằng `int main(void)`, bỏ `conio.h`/`getch()`, và dùng `fgets` thay cho `gets`. Nội dung sách thuộc bản quyền của nhóm tác giả và NXB ĐHQG-HCM — cân nhắc trước khi đưa trang này lên một địa chỉ công khai.

## Mục lục

- Lời nói đầu
- Chương 1. Giới thiệu
  - 1.1. Chương trình và ngôn ngữ lập trình
  - 1.2. Giải thuật và lưu đồ
  - 1.3. Ngôn ngữ lập trình C
  - 1.4. Một chương trình C đơn giản
  - 1.5. Một chương trình C KHÁC: Cộng hai số nguyên
  - 1.6. Các bước biên dịch chương trình C
  - 1.7. Từ khóa và tên gọi
  - 1.8. Biến
  - 1.9. Hằng số
  - 1.10. Các phép toán trong C
  - 1.11. Xuất nhập dữ liệu
  - 1.12. Bài tập
- Chương 2. Lệnh rẽ nhánh có điều kiện
  - 2.1. Lệnh đơn và lệnh phức
  - 2.2. Các dạng cấu trúc chương trình
  - 2.3. Lệnh rẽ nhánh if
  - 2.4. Toán tử điều kiện ba ngôi
  - 2.5. Lệnh rẽ nhánh SWITCH… case
  - 2.6. Bài tập
- Chương 3. Lệnh vòng lặp
  - 3.1. Lệnh for
  - 3.2. Lệnh while
  - 3.3. Lệnh do .... While
  - 3.4. Câu lệnh break
  - 3.5. Câu lệnh continue
  - 3.6. Câu lệnh goto và nhãn
  - 3.7. Bài tập
- Chương 4. Mảng và chuỗi
  - 4.1. Mảng
  - 4.2. Chuỗi và mảng chuỗi
  - 4.3 bài tập
- Chương 5. Con trỏ
  - 5.1. Giới thiệu
  - 5.2. Khai báo và sử dụng con trỏ
  - 5.3. Con trỏ và mảng
  - 5.4. Cấp phát bộ nhớ động
  - 5.5. Bài tập
- Chương 6. Hàm
  - 6.1. Giới thiệu
  - 6.2. Định nghĩa hàm
  - 6.3. Phân loại hàm theo tham số và giá trị trả về
  - 6.4. Khai báo hàm
  - 6.5. Truyền tham số cho hàm
  - 6.6. Đệ quy
  - 6.7. Một số hàm thư viện chuẩn
  - 6.8. Bài tập
- Chương 7. Kiểu dữ liệu tự tạo
  - 7.1. Kiểu cấu trúc
  - 7.2. Kiểu union
  - 7.3. Kiểu liệt kê (ENUMERATION)
  - 7.4. Bài tập
- Chương 8. Tiền xử lý
  - 8.1. Giới thiệu
  - 8.2. Chỉ thị bao hàm tệp (INCLUDE)
  - 8.3. Chỉ thị định nghĩa #define
  - 8.4. Chỉ thị điều khiển trình biên dịch
  - 8.5. Bài tập
- Tài liệu tham khảo
- Chính sách chất lượng
- Phụ lục: chạy lại ví dụ trên gcc/MSYS2

## Lời nói đầu

Trong ngành công nghiệp hiện đại, các hệ thống tự động trở nên phổ biến, hiệu quả, và dần thay thế các hệ thống điều khiển bằng tay. Trong các hệ thống tự động, thiết bị được lập trình hầu như đóng vai trò chủ đạo. Đặc biệt trong kỷ nguyên công nghiệp và cuộc cách mạng công nghiệp 4.0, tự động hoá, vạn vật kết nối (IoT), thông minh nhân tạo (AI) thì các thiết bị lập trình, các hệ thống lập trình chiếm ưu thế và là sức mạnh công nghệ. Ở góc nhìn kỹ thuật, ngôn ngữ lập trình là công cụ cần thiết để tiếp cận công nghệ, đặc biệt là trong cuộc cách mạng công nghiệp 4.0. Ngôn ngữ lập trình không những cung cấp các kiến thức về lập trình, nó còn giúp rèn luyện khả năng tư duy, thông qua việc giải quyết các bài toán, các giải thuật trong lập trình điều khiển. Hiện nay có nhiều ngôn ngữ lập trình khác nhau, mỗi ngôn ngữ có thế mạnh, cũng như phạm vi áp dụng riêng. Tuy nhiên, Ngôn ngữ lập trình C đã được lựa chọn để dạy trong khối kỹ thuật. C là ngôn ngữ chuẩn và nền tảng. Nhiều ứng dụng, trong đó có ứng dụng hệ thống, được xây dựng từ ngôn ngữ C. Mặt khác, ngôn ngữ C được xem là ngôn ngữ nguồn gốc và nền tảng của ngôn ngữ lập trình cấp cao (high-level programming language). Theo quan sát và kinh nghiệm thực tế, các ngôn ngữ phát triển sau đều dựa trên kiến trúc, hoặc có cấu trúc câu lệnh, vận hành của câu lệnh giống như ngôn ngữ C. Do đó, việc học tốt, cũng như hiểu và vận dụng tốt ngôn ngữ C sẽ giúp lập trình viên có thể dễ dàng tiếp cận các ngôn ngữ lập trình hiện đại khác. Tài liệu Giáo trình Ngôn ngữ lập trình C cung cấp cho sinh viên khối kỹ thuật các kiến thức cơ sở về ngôn ngữ lập trình, ngôn ngữ lập trình C, hiểu các đối tượng trong ngôn ngữ lập trình, hiểu cách vận hành của các câu lệnh, các cấu trúc điều kiện, cấu trúc lập, hàm, mảng, con trỏ. Từ đó người học có thể vận dụng vào trong các lĩnh vực khác như lập trình giao diện, lập trình game, lập trình vi điều khiển, vi xử lý, lập trình cho các thiết bị lập trình được… Kỹ thuật lập trình đòi hỏi nhiều kỹ năng tư duy, kinh nghiệm và cả kiến thức. Trong đó, kỹ năng tư duy là cách mà người lập trình đưa ra các giải thuật để giải quyết bài toán hiệu quả. Kinh nghiệm giúp người lập trình chuyển đổi từ ý tưởng sang chương trình một cách tối ưu. Chính vì thế, học lập trình đòi hỏi nhiều yếu tố hơn một số môn học khác. Cụ thể, thực hành luôn được đòi hỏi kèm theo hoặc song song với quá trình học lý thuyết. Quá trình thực hành giúp người học hình dung được, nắm được cách vận hành của từng cấu trúc lệnh. Do đó, nhóm biên soạn đã cố gắng trình bày cụ thể lý thuyết, giải thích chương trình và đưa ra một số bài ví dụ mẫu nhằm giúp người học có thể tiếp cận kỹ thuật lập trình một cách dễ nhất. Để đạt hiệu quả cao trong quá trình học tập, người học cần thực hành lại các ý tưởng lập trình, các bài mẫu được trình bày trong tài liệu.

Giáo trình gồm những phần sau:

- Chương 1: Giới thiệu
- Chương 2: Lệnh rẽ nhánh có điều kiện
- Chương 3: Lệnh vòng lặp
- Chương 4: Mảng và chuỗi
- Chương 5: Con trỏ
- Chương 6: Hàm
- Chương 7: Kiểu dữ liệu tự tạo
- Chương 8: Tiền xử lý

Cuối cùng, tuy đã rất cố gắng biên soạn và chỉnh sửa nhưng chắc hẳn không thể tránh khỏi những thiếu sót, rất mong nhận được những đóng góp quý báu từ sinh viên và quý đồng nghiệp để tài liệu này được hoàn thiện hơn trong những lần tái bản tiếp theo.

Mọi ý kiến phản hồi xin gửi về:

Bộ môn Kỹ thuật Máy tính – Viễn thông, Khoa Điện-Điện tử, Trường Đại học Sư phạm Kỹ thuật TP HCM

Email: sontn@hcmute.edu.vn, leminh@hcmute.edu.vn, hatn@hcmute.edu.vn, thanhlm@hcmute.edu.vn

*Nhóm tác giả*

## Chương 1. Giới thiệu

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Phân biệt được các loại ngôn ngữ lập trình.
- Vẽ được lưu đồ giải thuật cho các yêu cầu lập trình.
- Sử dụng được các thành phần cơ bản trong ngôn ngữ C: câu lệnh, câu chú thích, biến, hằng, phép toán.
- Sử dụng được các hàm xuất, nhập dữ liệu trong C.
- Viết được các chương trình C cơ bản theo đúng cấu trúc chương trình.

### 1.1. Chương trình và ngôn ngữ lập trình

Chương trình máy tính (computer program) là một chuỗi các lệnh được viết bởi một loại ngôn ngữ lập trình để thực hiện một hoặc một số tác vụ nào đó. Trong đó ngôn ngữ lập trình là một tập quy ước cụ thể được sử dụng để viết chương trình cho máy tính. Nói cách khác, chương trình được xem như một loạt các lệnh mà máy tính có thể đọc hiểu và thực thi theo đó. Khi nói đến chương trình máy tính, người ta thường hình dung ra chương trình được chạy trên một máy tính. Tuy nhiên, chương trình, nhìn ở góc độ kỹ thuật thì là một chuỗi các mã lệnh dùng để điều khiển phần cứng, cụ thể là bộ vi xử lý, bộ vi điều khiển. Có nhiều loại ngôn ngữ lập trình khác nhau. Các ngôn ngữ lập trình được phân loại theo mức độ trừu tượng, trong đó gồm có:

- Ngôn ngữ máy (machine language) hay còn được gọi là mã máy (machine code).

- Ngôn ngữ lập trình cấp thấp (low-level programming language).

- Ngôn ngữ lập trình cấp cao (high-level programming language).

![Hình 1.1 . Phân loại ngôn ngữ lập trình](assets/giaotrinh-c/hinh-13-3-7.png)

*Hình 1.1 . Phân loại ngôn ngữ lập trình*

Ngôn ngữ cấp thấp cũng được chia ra 2 mức khác nhau, ngôn ngữ máy hay mã máy và hợp ngữ (assembly language). Ngôn ngữ máy (machine code) là các đoạn mã hệ 16 (hexadecimal code) hoặc mã nhị phân (binary code) được sử dụng để lập trình cho các hệ thống máy tính đầu tiên và được xem là thế hệ đầu tiên của ngôn ngữ lập trình. Mã máy được viết dưới dạng nhị phân (0 và 1) giúp máy tính (hay phần cứng hệ thống số) có thể đọc và thực thi trực tiếp các tác vụ mà người lập trình thiết kế. Một lợi thế của ngôn ngữ máy là máy tính có thể đọc trực tiếp và thực thi mà không cần tới một trình biên dịch, hay chuyển đổi nào. Điều này giúp các chương trình được viết dưới dạng ngôn ngữ máy có thể thực thi nhanh và chính xác. Tuy nhiên, bên cạnh những ưu điểm, lập trình bằng ngôn ngữ máy cũng có nhiều nhược điểm. Cụ thể là các mã nhị phân làm cho người lập trình khó nhớ, khó hiểu, khó chỉnh sửa. Hơn nữa, việc sửa lỗi, tìm lỗi chương trình cũng trở nên khó khăn thông qua việc dò, tham chiếu các mã nhị phân với các lệnh.

Một ví dụ chương trình được viết bằng ngôn ngữ máy như sau:

| Lệnh bằng mã nhị phân | Lệnh bằng mã Hex |
| --- | --- |
| 0010 0001 0000 0100 | 2104 |
| 0001 0001 0000 0101 | 1105 |
| 0011 0001 0000 0110 | 3106 |
| 0111 0000 0000 0001 | 7001 |
| 0000 0000 0101 0011 | 0053 |
| 1111 1111 1111 1110 | FFFE |

Hợp ngữ (Assemly language) là ngôn ngữ thế hệ thứ 2 của ngôn ngữ lập trình. Thay vì sử dụng mã nhị phân, 0 và 1, để thể hiện các lệnh, hợp ngữ sử dụng các từ khóa, các ký hiệu bằng tiếng Anh để diễn tả các câu lệnh. Hợp ngữ giúp cho người lập trình có thể hiểu được mỗi dòng lệnh dễ dàng hơn, từ đó việc chỉnh sửa, thay đổi chương trình, cũng như quản lý chương trình đơn giản hơn so với lập trình bằng ngôn ngữ máy. Tuy nhiên, máy tính nói chung và các bộ xử lý nói riêng chỉ có thể hiểu được ngôn ngữ máy hay các mã nhị phân, do đó, cần một trình chuyển đổi hay biên dịch (compiler) để chuyển từ hợp ngữ sang mã máy, giúp máy tính nói chung và các bộ vi xử lý nói riêng có thể đọc hiểu và thực thi chương trình.

Ví dụ một chương trình được viết bằng hợp ngữ như sau:

```asm
section .text
    global _start                     ; must be declared for linker (gcc)
_start:                               ; tell linker entry point
    mov edx,len                       ; message length
    mov ecx,msg                       ; message to write
    mov ebx,1                         ; file descriptor (stdout)
    mov eax,4                         ; system call number (sys_write)
    int 0x80                          ; call kernel
    mov edx,9                         ; message length
    mov ecx,s2                        ; message to write
    mov ebx,1                         ; file descriptor (stdout)
    mov eax,4                         ; system call number (sys_write)
    int 0x80                          ; call kernel
    mov eax,1                         ; system call number (sys_exit)
    int 0x80                          ; call kernel
section .data
    msg db 'Displaying 9 stars',0xa   ; a message
    len equ $ - msg                   ; length of message
    s2 times 9 db '*'
```

Ngôn ngữ cấp cao (high-level programming language) là ngôn ngữ gần với ngôn ngữ con người và được sử dụng phổ biến hiện nay. Chương trình được viết bằng ngôn ngữ cấp cao giúp người lập trình dễ đọc, dễ hiểu, dễ chỉnh sửa. Với ngôn ngữ cấp cao, người lập trình dễ dàng chuyển đổi ý tưởng, các giải thuật thành các đoạn chương trình mà không cần quan tâm nhiều đến việc quản lý bộ nhớ, quản lý các thanh ghi, các chi tiết phần cứng như đã làm trong lập trình bằng ngôn ngữ cấp thấp. Cũng giống như hợp ngữ, ngôn ngữ cấp cao cần được chuyển đổi sang mã máy (ngôn ngữ máy) trước khi được thực thi. Có nhiều ngôn ngữ cấp cao được phát triển đến thời điểm hiện tại. Trong đó một số ngôn ngữ hình thành lâu đời như C, Pascal, Fortran, Basic, Java.

Ví dụ, một chương trình viết bằng ngôn ngữ cấp cao như sau:

```c
#include <stdio.h>
int main()
{
    printf("Hello, World!\n");
    return 0;
}
```

### 1.2. Giải thuật và lưu đồ

Một chương trình được xem như một sự kết hợp của giải thuật và cách thể hiện của giải thuật thông qua ngôn ngữ lập trình. Giải thuật (Algorithm) là các cách để giải quyết bài toán lập trình, hay phương pháp cụ thể để thực hiện các tác vụ. Giải thuật được xem là cốt lõi để giải quyết các vấn đề lập trình. Giải thuật còn thể hiện các ý tưởng của người lập trình nhằm giúp chương trình đạt hiệu quả cao nhất. Chương trình cuối cùng là tập hợp của các miêu tả giải thuật thông qua một ngôn ngữ lập trình nào đó.

Lập trình là một quá trình tư duy logic giải quyết một vấn đề nào đó. Do đó, giải thuật là một yếu tố quan trọng trong lập trình. Ví dụ, để giải một phương trình bậc 2, người lập trình phải biết các bước cần thiết để tự giải một phương trình. Nói cách khác là người lập trình có thể tự giải được thông qua các bước, các bước đó chính là giải thuật. Khi chúng ta không biết giải quyết vấn đề từ đâu, thì thật khó để viết một chương trình máy tính để giải quyết vấn đề đó. Lưu đồ là thể hiện của giải thuật bằng hình ảnh. Nó thể hiện các bước giải quyết một vấn đề dựa trên một giải thuật nào đó. Các sinh viên mới học lập trình hoặc đã biết lập trình ở mức cơ bản thường có thói quen bỏ qua bước vẽ lưu đồ nhằm tiết kiệm thời gian. Điều này mang tính chất chủ quan vì các bạn cho rằng mình đã quen với ngôn ngữ và các công việc lập trình. Việc viết lưu đồ mang tính hình thức và mất thêm thời gian, điều này có thể đúng với một số chương trình nhỏ, một vài ví dụ cơ bản mà các bạn đã nắm trong đầu từng bước xử lý. Tuy nhiên, sẽ trở nên tai hại khi xây dựng các chương trình xử lý ở mức độ phức tạp mà bỏ qua bước xây dựng lưu đồ. Khi bắt đầu một chương trình, các ý tưởng cần được liệt kê, phân tích một cách cụ thể. Tiếp theo đó, lưu đồ để thực hiện các ý tưởng, các yêu cầu đó phải được viết ra một cách cẩn thận. Thực tế cho thấy, nhiều sinh viên viết hoàn chỉnh chương trình trước rồi sau đó mới viết lại lưu đồ giải thuật do yêu cầu phải trình bày trong báo cáo. Điều này đi ngược với quá trình lập trình. Việc xây dựng và kiểm tra kỹ lưu đồ cho phép người lập trình đánh giá, kiểm tra chương trình đã đáp ứng được yêu cầu hay chưa; nó cho phép người lập trình tìm ra được các lỗi mà chương trình khi chạy thực tế có thể mắc phải hoặc phát hiện một số trường hợp bị bỏ sót. Khi lưu đồ đã hoàn chỉnh, việc lập trình chỉ là một cách biên dịch từ các hình khối sang một ngôn ngữ nào đó. Vì thế, khi viết lưu đồ có thể dùng ngôn ngữ mô tả sao cho đọc hiểu được, không nhất thiết phải dùng một ngôn ngữ nhất định nào. Người lập trình dựa vào các bộ nguyên tắc cụ thể của ngôn ngữ lập trình mà mình hướng tới, xây dựng chương trình từ lưu đồ. Như vậy, tính chính xác, tính khoa học, logic của một chương trình thể hiện ở chỗ xây dựng lưu đồ, giải thuật có logic, chính xác hay không. Nếu lưu đồ giải thuật chính xác và logic, mà chương trình chạy chưa chính xác thì giống như bạn viết một bài văn mà sai chính tả, hoặc bạn dịch một bài từ tiếng Việt sang tiếng Anh mà sai ngữ pháp, từ vựng. Vấn đề tác giả muốn nhấn mạnh ở đây là các bạn mới học lập trình cần xây dựng tốt lưu đồ giải thuật, cũng như học cách thể hiện ý tưởng thông qua lưu đồ, giải thuật.

Lưu đồ (Flowchart) là cách biểu diễn bằng hình ảnh của giải thuật hay các bước xử lý và thực hiện của chương trình. Lưu đồ được viết dưới dạng các khối được quy ước cụ thể nhằm giúp người lập trình có thể đọc hiểu và chuyển các ý tưởng, giải thuật sang ngôn ngữ lập trình. Trong quá trình vẽ lưu đồ giải thuật, các ký hiệu, từ khóa, ngôn ngữ thể hiện có thể tùy chọn sao cho người đọc có thể hiểu được. Ngôn ngữ thể hiện ở đây không nhất thiết là một ngôn ngữ lập trình cụ thể nào. Nó có thể là một ngôn ngữ thông thường mà người không có kiến thức lập trình cũng có thể đọc và hiểu được. Các ngôn ngữ dùng để biểu diễn trong lưu đồ như vậy còn được gọi là code giả (Psuedo code). Một số quy ước khi biểu diễn giải thuật dưới dạng lưu đồ như sau:

*Ký hiệu quy ước khi biểu diễn giải thuật dưới dạng lưu đồ*

![Bảng ký hiệu quy ước lưu đồ: hình oval, hình bình hành, hình chữ nhật, hình thoi, hình chữ nhật có hai vạch dọc, hình tròn nhỏ và mũi tên](assets/giaotrinh-c/hinh-ky-hieu-luu-do.png)

*Ví dụ 1.1. Lưu đồ cho chương trình cộng 2 số được nhập từ bàn phím.*

![Ví dụ 1.1. Lưu đồ cho chương trình cộng 2 số được nhập từ bàn phím.](assets/giaotrinh-c/luu-do-1-1.png)

Trong lưu đồ trên, điểm đầu cuối cho quá trình bắt đầu và kết thúc được phân biệt bởi từ khóa start và end trong hình oval. Các từ khóa này có thể sử dụng begin và end, start và stop hoặc bằng bất kỳ ngôn ngữ nào chỉ định việc bắt đầu và kết thúc. Để biểu diễn tổng sum là kết quả của phép cộng 2 số a và b, có thể sử dụng mô tả sum ← num1 + num2 hoặc đơn giản hơn có thể biểu diễn bởi **sum = num1 + num2**.

*Ví dụ 1.2. Lưu đồ cho bài toán in ra số lớn nhất trong 3 số được nhập vào từ bàn phím.*

![Ví dụ 1.2. Lưu đồ cho bài toán in ra số lớn nhất trong 3 số được nhập vào từ bàn phím.](assets/giaotrinh-c/luu-do-1-2.png)

*Ví dụ 1.3. Lưu đồ cho bài toán giải phương trình bậc 2: ax² + bx + c = 0*

![Ví dụ 1.3. Lưu đồ cho bài toán giải phương trình bậc 2: ax² + bx + c = 0](assets/giaotrinh-c/luu-do-1-3.png)

Trong các khối quyết định có điều kiện (các khối hình thoi) luôn có 2 ngõ ra, một cho điều kiện đúng và một cho điều kiện sai. Các từ khóa biểu diễn cho cặp luận lý đúng sai có thể dùng là True/False, Yes/ No, T/F, Y/N, Đ/S hay một ngôn ngữ nào khác miễn là nó thỏa mãn ý nghĩa biểu diễn luận lý đúng và sai. Chương trình máy tính là một quá trình xử lý tuần tự, trong trường hợp xử lý song song sẽ dùng các kỹ thuật khác và chưa được đề cập ở đây, chính vì điều đó, từ vị trí bắt đầu chỉ có một đường duy nhất đi đến vị trí kết thúc.

Ví dụ 1.4. Hãy giải thích hoạt động của chương trình dựa vào lưu đồ sau đây:

![Ví dụ 1.4. Lưu đồ kiểm tra 3 giá trị m1, m2, m3 so với ngưỡng 35 và in ra PASS/FAIL.](assets/giaotrinh-c/hinh-21-4-10.png)

Ví dụ 1.5. Hãy phân tích hoạt động của chương trình dựa vào lưu đồ sau đây:

![Ví dụ 1.5. Lưu đồ giải thuật tính tổng S = 1 + 2 + ... + N.](assets/giaotrinh-c/hinh-vd-1-5.png)

### 1.3. Ngôn ngữ lập trình C

Mặc dù hiện nay có nhiều ngôn ngữ được ứng dụng trong cả lập trình hệ thống và lập trình ứng dụng, ngôn ngữ vẫn C được xem như ngôn ngữ chuẩn và cơ bản để tiếp cận lập trình máy tính cũng như lập trình các thiết bị lập trình như vi xử lý, vi điều khiển. Ngôn ngữ C được phát triển bởi Dennis Ritchie tại phòng thí nghiệm Bell Laboratories năm 1972. C trở thành ngôn ngữ được dùng để xây dựng hệ điều hành UNIX và trở nên phổ biến tại thời điểm đó. Hiện nay, có nhiều ngôn ngữ lập trình phổ biến cùng tồn tại và phát triển song song với ngôn ngữ C. Các ngôn ngữ phổ biến hiện nay có thể kể đến là: Java, Python, C++, C#, Swiff, Ruby, Perl, PHP, Visual Basic, Objective-C, R, Go,… Trong số đó, nhiều ngôn ngữ phát triển từ ngôn ngữ C chuẩn như C++, C#, Objective-C. Thực tế cho thấy, các ngôn ngữ khác nhau sử dụng bộ từ khóa khác nhau dùng để phát biểu câu lệnh, tuy nhiên, cấu trúc, cách vận hành các câu lệnh và các phát biểu có nhiều nét tương đồng với nhau. Chính vì điều đó, hiểu và lập trình tốt ngôn ngữ C giúp lập trình viên có thể tiếp cận các ngôn ngữ các một cách nhanh và đơn giản.

Tuy không phải là một ngôn ngữ hiện đại, C vẫn là một trong các ngôn ngữ được sử dụng phổ biến hiện nay. Ngôn ngữ lập trình C được ứng dụng trong một số lĩnh vực như lập trình hệ thống (system programming), đặc biệt C là ngôn ngữ tiêu chuẩn cho việc lập trình các hệ thống nhúng dựa trên hệ điều hành Linux (Embedded system programming), lập trình điều khiển với các hệ thống điện tử dân dụng, công nghiệp, sử dụng vi xử lý, vi điều khiển. Một số ngôn ngữ lập trình khác có cấu trúc giống hoặc gần giống ngôn ngữ lập trình C được phát triển như ngôn ngữ mô tả phần cứng Verilog (Verilog hardware description language) được dùng trong thiết kế vi mạch số, Ngôn ngữ Python được ứng dụng rộng rãi trong lĩnh vực trí tuệ nhân tạo, Swiff và Objective-C được sử dụng để lập trình ứng dụng trên các thiết bị di động chạy hệ điều hành iOS. Nắm vững ngôn ngữ lập trình C là nền tảng để tiếp cận các ngôn ngữ lập trình khác nhanh hơn, hiệu quả hơn.

### 1.4. Một chương trình C đơn giản

Một chương trình C bao gồm các hàm, các biến và các câu lệnh được đặt trong cùng một tập tin hoặc có thể trong các tập tin khác nhau. Trong ví dụ đầu tiên tiếp cận với ngôn ngữ C, chúng ta sẽ tiến hành viết một chương trình bằng ngôn ngữ C, biên dịch và chạy trên máy tính.

Một chương trình C thực thi việc in ra màn hình một dòng chữ được viết như bên dưới:

```c
/* Vi du:
Chuong trinh C dau tien */
#include <stdio.h>
#include <conio.h>
//bat dau chuong trinh chinh
int main (void)
{
    printf("Chao mung den voi C! \n");
    getch();
    return 0; /* cho biet chuong trinh da ket
    thuc thanh cong */
} //ket thuc chuong trinh chinh
```

Sau khi thực thi, chương trình sẽ in ra màn hình dòng chữ **Chao mung den voi C!**, như ở kết quả sau:

```text
Chao mung den voi C!
```

Ở dòng lệnh số 1 và số 2, ta có hai câu:

```c
/* Vi du:
Chuong trinh C dau tien */
```

được viết bắt đầu bằng ký hiệu /* và kết thúc bởi ký hiệu */ để thể hiện rằng đây là hai câu chú thích – comment. Đây là cách viết chú thích trên nhiều dòng lệnh. Câu chú thích được đặt trong chương trình để giải thích hoặc làm rõ thêm cho chương trình mà không ảnh hưởng đến hoạt động của chương trình khi chạy. Các câu chú thích sẽ được bỏ qua khi biên dịch chương trình.

Ở dòng lệnh số 3, câu lệnh `#include<stdio.h>` là một lệnh tiền xử lý trong ngôn ngữ C. Các câu lệnh tiền xử lý sẽ bắt đầu bằng dấu # và được xử lý trước khi chương trình được biên dịch. Câu lệnh này là câu lệnh khai báo thư viện sẽ yêu cầu bộ tiền xử lý bao gồm file thư viện stdio.h vào chương trình, đây là thư viện xuất/ nhập dữ liệu tiêu chuẩn trong C. Thư viện này sẽ chứa các thông tin được sử dụng bởi trình biên dịch khi tiến hành biên dịch cho các hàm xuất nhập dữ liệu cơ bản, như hàm printf hoặc scanf.

Ở dòng lệnh số 5, câu `//bat dau chuong trinh chinh` cũng là một câu chú thích. Đây là câu chú thích trên 1 dòng lệnh . Để viết câu chú thích trên 1 dòng lệnh, ta sẽ bắt đầu bằng ký hiệu //. Câu chú thích trên 1 dòng lệnh sẽ tự động kết thúc khi ta đưa con trỏ xuống dòng mới.

Ở dòng lệnh số 6, câu `int main (void)` đánh dấu phần chương trình chính , phần bắt buộc phải có trong mỗi chương trình C. Các thông số viết phía trước và phía sau từ main cho biết main là một khối chương trình được gọi là hàm – function. Một chương trình C có thể có một hoặc nhiều hàm nhưng bắt buộc phải có một hàm main, hay còn gọi là chương trình chính . Phía bên trái từ main là từ int thể hiện rằng hàm main sẽ trả về một giá trị số nguyên Thông số ( void) phía bên phải của main thể hiện rằng hàm main không cần nhận bất kỳ thông tin đầu vào nào. Điều này sẽ được giải thích kỹ hơn ở chương Hàm.

Dấu mở ngoặc { ở dòng lệnh số 7 thể hiện vị trí bắt đầu của hàm main và tương ứng dấu đóng ngoặc } ở dòng 13 thể hiện vị trí kết thúc của hàm main . Phần được viết giữa một cặp dấu ngoặc { } được gọi là một khối lệnh.

Ở dòng lệnh số 8, câu `printf("Chao mung den voi C! \n");` là câu lệnh yêu cầu in ra màn hình một chuỗi các ký tự với nội dung Chao mung den voi C! . Mỗi câu lệnh trong C sẽ được kết thúc bằng một dấu chấm phẩy (;) Ở dòng lệnh số 9, câu lệnh `getch();` là lệnh chờ nhập một ký tự bất kỳ từ bàn phím. Lệnh này được sử dụng nhằm mục đích dừng chương trình để chờ người dùng nhập một ký tự bất kỳ từ bàn phím. Để chương trình có thể hiểu và biên dịch được lệnh `getch();` chúng ta cần lệnh khai báo thư viện `#include <conio.h>` như ở dòng lệnh số 4.

Ở dòng lệnh số 10, câu lệnh

```c
return 0; /* cho biet chuong trinh da ket thuc thanh
cong */
```

là câu lệnh kết thúc hàm main và trả về số 0. return là một từ khóa dùng để kết thúc một hàm bằng cách trả về một giá trị, và giá trị số 0 trong câu lệnh này cho biết chương trình chính (hàm main) đã kết thúc thành công. Điều này sẽ được giải thích kỹ hơn ở chương 6.

Như vậy, tới đây, ta có thể thấy cấu trúc chung của một chương trình C về cơ bản sẽ là:

```c
#include <TênThưViện.h>
int main (void)
{
    //Nội dung chương trình chính

    return 0;
}
```

### 1.5. Một chương trình C KHÁC: Cộng hai số nguyên

Chúng ta sẽ viết một chương trình C thực hiện việc nhập hai số nguyên từ bàn phím, sau đó thực hiện tính tổng hai số này và cuối cùng in kết quả ra màn hình. Nội dung của chương trình được thể hiện như sau:

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a;  //khai bao bien a, de luu so thu nhat
    int b;   //khai bao bien b, de luu so thu hai
    int tong;//khai bao bien tong, de luu ket qua
    printf ("Nhap so thu nhat : \n");
    scanf("%d",&a);  //nhap so nguyen tu ban phim
    printf("Nhap so thu hai: \n");
    scanf("%d",&b);  //nhap so nguyen tu ban phim
    tong = a + b;     //tinh tong
    printf("Tong la: %d \n",tong);  //in ket qua
    getch(); //cho nhap 1 ky tu bat ky
    return 0;
}
```

Kết quả sau khi thực thi chương trình như sau:

```c
Nhap so thu nhat :
Nhap so thu hai:
Tong la: 12
```

Trong đó, giá trị số 5 và 7 ở dòng kết quả thứ 2 và dòng kế quả thứ 4 là giá trị dữ liệu do người dùng nhập vào từ bàn phím.

Trong chương trình này, ở dòng lệnh số 1 và số 2 là hai câu lệnh khai báo hai thư viện của hệ thống : stdio.h và conio.h . Dòng lệnh số 4 đánh dấu chương trình chính, dấu mở ngoặc { ở dòng lệnh số 5 thể hiện vị trí bắt đầu nội dung chương trình chính và dấu đóng ngoặc } ở dòng lệnh số 21 dùng để kết thúc nội dung chương trình chính.

Ở dòng lệnh số 6, 7 và 8, các câu lệnh

```c
int a;   //khai bao bien a, de luu so thu nhat
int b;   //khai bao bien b, de luu so thu hai
int tong;  //khai bao bien tong, de luu ket qua
```

được dùng để khai báo ra các vùng nhớ phục vụ cho việc lưu trữ dữ liệu, được gọi là biến – variable. Một biến là một vùng nhớ trong bộ nhớ RAM dùng để lưu trữ dữ liệu trong quá trình xử lý của chương trình. Ba câu lệnh trên là ba câu lệnh khai bao biến để tạo ra 3 biến có tên gọi lần lượt là a, b và tong có kiểu dữ liệu là int (kiểu số nguyên). Điều này có nghĩa là các biến này có thể lưu trữ được các giá trị số nguyên, ví dụ như: 9, -15, hoặc 12345. Tất cả các biến cần phải được khai báo một lần trước khi sử dụng trong chương trình với một tên gọi và một kiểu dữ liệu cố định.

Ở dòng lệnh số 10, câu lệnh `printf ("Nhap so thu nhat : \n");` có tác dụng in ra màn hình câu thông báo Nhap so thu nhat :

Câu lệnh tiếp theo ở dòng số 11 `scanf("%d",&a);   //nhap so nguyen tu ban phim` sử dụng hàm scanf để cho phép người dùng nhập một số nguyên từ bàn phím và lưu vào biến a. Hàm scanf này có hai tham số: “%d” và &a. Tham số đầu tiên “%d” được gọi là mã định dạng, cho biết kiểu dữ liệu của dữ liệu mà người dùng sẽ nhập vào. Trong trường hợp này, “%d” là mã định dạng cho kiểu số nguyên. Trong tham số thứ hai (&a), dấu & được gọi là toán tử lấy địa chỉ. Theo sau toán tử lấy địa chỉ là tên biến a dùng để xác định địa chỉ (vị trí) của biến a trong bộ nhớ RAM.

Tương tự, câu lệnh ở dòng lệnh số 14 `scanf("%d",&b);   //nhap so nguyen tu ban phim` cho phép người dùng nhập một số nguyên từ bàn phím và lưu vào biến b.

Ở dòng lệnh số 16, câu lệnh `tong = a + b;     //tinh tong` thực hiện tính tổng của hai biến a và b bằng phép toán cộng +, sau đó lưu kết quả vào vùng nhớ biến tong bằng phép toán gán = .

Câu lệnh ở dòng số 17 `printf("Tong la: %d \n",tong);  //in ket qua` gọi hàm printf để in ra màn hình dòng chữ Tong la: đi kèm phía sau là giá trị của biến tong. Hàm printf này có hai tham số, “Tong la: %d \n” và tong . Tham số đầu tiên “Tong la: %d \n” là chuỗi định dạng gồm chuỗi ký tự cần in ra màn hình Tong la: , mã định dạng %d cho biết sẽ có một số nguyên được in ra và ký tự điều khiển \n để đưa con trỏ xuống dòng. Tham số thứ hai, tong, sẽ xác định giá trị dữ liệu cần in ra.

Câu lệnh ở dòng lệnh 19 `getch(); //cho nhap 1 ky tu bat ky` dùng hàm getch() nhằm tác dụng chờ người dùng nhập một ký tự bất kỳ từ bàn phím. Để sử dụng được hàm getch(), ta cần khai báo thư viện conio.h như ở dòng lệnh số 2:

```c
#include <conio.h>
```

### 1.6. Các bước biên dịch chương trình C

Một chương trình trước khi được thực thi cần trải qua 4 bước như hình dưới. Chương trình được viết và lưu dưới dạng các tập tin văn bản, có phần mở rộng là .c cho các chương trình viết thuần túy bằng ngôn ngữ C và .cpp cho các chương trình được viết bằng ngôn ngữ C++. Các tập tin được lưu dưới dạng .h là các tập tin đầu (header), thông thường các tập tin .h chứa các khai báo hàm hoặc có thể bao gồm các định nghĩa (define).

- Preprocessor – Quá trình tiền xử lý là bước đầu tiên trong quá trình biên dịch. Các tập tin chương trình được loại bỏ các phần chú thích (comment). Đồng thời các chỉ thị được thể hiện sau dấu # được xử lý. Các chỉ thị sau ký tự # bao gồm các khai báo thư viện, các định nghĩa. Ví dụ:

```c
#include <stdio.h>
#define PI   3.14
```

- Compilation – biên dịch: Chương trình được biên dịch sang mã hợp ngữ (assembly code).
- Asembly – hợp dịch: Các mã hợp ngữ được biên dịch sang mã máy (machine-code).
- Link- quá trình liên kết: trong trường hợp chương trình tham chiếu đến các hàm thuộc các thư viện hoặc các hàm từ các tập tin mã nguồn khác, trình liên kết sẽ tổng hợp các mã chương trình này lại để tạo một tập tin mã nguồn có khả năng thực thi (executable machine code). Tập tin cuối cùng này có phần mở rộng  .exe . Đây là tập tin chứa mã nhị phân để thực thi chương trình.

![Hình 1.2 .  Các bước biên dịch chương trình C](assets/giaotrinh-c/hinh-31-8-1.png)

*Hình 1.2 .  Các bước biên dịch chương trình C*

### 1.7. Từ khóa và tên gọi

Trong câu lệnh khai báo biến:

```c
int a;
```

thì int được hiểu là từ khóa – keywork, trong trường hợp này mang ý nghĩa là kiểu dữ liệu và a là tên gọi - identifier được đặt cho biến.

- Từ khóa: là những từ được quy ước bởi ngôn ngữ C, mang một ý nghĩa cố định mà người dùng không được phép thay đổi. Các từ khóa trong C được liệt kê ở bảng dưới.

`auto`, `break`, `case`, `char`, `const`, `continue`, `default`, `do`, `double`, `else`, `enum`, `extern`, `float`, `for`, `goto`, `if`, `int`, `long`, `register`, `return`, `short`, `signed`, `sizeof`, `static`, `struct`, `switch`, `typedef`, `union`, `unsigned`, `void`, `volatile`, `while`.

*Bảng 1.1.  Các từ khóa trong C*

Tên gọi: là những từ được quy ước bởi người dùng, thường dùng để gọi tên một số thành phần khi viết chương trình như: biến, hằng hoặc hàm. Khi đặt một tên gọi trong C, cần tuân thủ một số quy ước như sau:

+ Tên gọi không được phép trùng với từ khóa.

+ Tên gọi chỉ bao gồm: ký số 0 - 9, chữ cái thường a – z, chữ cái hoa A – Z, dấu gạch dưới _ + Tên gọi không được bắt đầu bằng số.

+ Tên gọi có phân biệt chữ thường và chữ viết hoa.

Ví dụ một số tên gọi hợp lệ như:

a bien1 Tên gọi hợp lệ bien_1 thamSoThuNhat Các tên gọi được đặt không tuân theo các quy ước trên thì sẽ là tên gọi không hợp lệ, ví dụ như các tên gọi sau là không hợp lệ:

| 2a | sai vì bắt đầu bằng số |  |
| --- | --- | --- |
| Tên gọi | if | sai vì trùng với từ khóa |
| không hợp lệ | bien@ | sai vì chứa ký tự không hợp lệ @ |
| tham so thu nhat | sai vì chứa khoảng trắng |  |

Trong khi lập trình, các ngôn ngữ lập trình không cho phép đặt các tên gọi trùng với tên từ khóa. Với ngôn ngữ lập trình C, hệ thống từ khóa sử dụng toàn bộ ký tự thường. Do đó, để tránh việc trùng với các từ khóa, các tên gọi có thể được đặt bằng các sử dụng một hoặc nhiều ký tự in hoa. Ví dụ, đặt tên biến là “enum” là không hợp lệ vì trùng với từ khóa. Tuy nhiên, tên biến là “Enum” là hoàn toàn hợp lệ vì nó không trùng từ khóa.

### 1.8. Biến

Như đã đề cập ở phần trước, biến là một vùng nhớ trong bộ nhớ RAM dùng để lưu trữ dữ liệu trong quá trình xử lý của chương trình. Muốn tạo ra một biến, chúng ta cần tiến hành khai báo biến. Ví dụ, trong chương trình trên, câu lệnh:

```c
int a;
```

là câu lệnh khai báo biến có tên gọi là a với kiểu dữ liệu là kiểu số nguyên int. Lúc này, chương trình sẽ tạo ra một vùng nhớ kiểu số nguyên cho biến a và giá trị dữ liệu hiện tại đang chứa trong vùng nhớ biến a là một giá trị ngẫu nhiên.

*Ô nhớ biến `a` chứa giá trị ngẫu nhiên: 2019896881*

Để quản lý giá trị ban đầu của biến sau khi khai báo ta có thể khởi tạo giá trị ban đầu cho biến ngay tại thời điểm khai báo biến. Ví dụ, câu lệnh `int a = 0;` sẽ tạo ra vùng nhớ cho biến a và khởi tạo giá trị ban đầu là số 0 cho vùng nhớ biến a.

*Ô nhớ biến `a` được khởi tạo bằng 0*

Như vậy, cú pháp chung của câu lệnh khai báo biến trong C sẽ là:

`kiểu_dữ_liệu tên_biến;` hoặc:

`kiểu_dữ_liệu tên_biến = giá_trị_khởi_tạo;`

Ta cũng có thể khai báo một danh sách gồm nhiều biến có cùng kiểu dữ liệu bằng một câu lệnh duy nhất. Ví dụ, có thể viết `int a, b, tong;` để khai báo nên 3 biến a, b, tong có kiểu dữ liệu là kiểu số nguyên, thay cho 3 câu lệnh khai báo đã viết trước đó là:

```c
int a;
int b;
int tong;
```

Tới đây, có thể thấy mỗi biến là một vùng nhớ độc lập có định dạng dữ liệu nhất định được quy định bởi kiểu dữ liệu trong quá trình khai báo biến. Bên cạnh việc quy định định dạng dữ liệu của vùng nhớ một biến, kiểu dữ liệu còn quy định kích thước của vùng nhớ dành cho biến đó. Một số kiểu dữ liệu cơ bản của C được liệt kê ở bảng dưới.

| Tên kiểu dữ liệu | Kích thước vùng nhớ | Định dạng dữ liệu | Ví dụ |
| --- | --- | --- | --- |
| `char` | 1 byte | Kiểu ký tự | `A` |
| `unsigned char` | 1 byte | | `b` |
| `int` | 2 byte hoặc 4 byte | Kiểu số nguyên | `-3569` `+137` |
| `unsigned int` | 2 byte hoặc 4 byte | | `23052` |
| `short` | 2 byte | | `+423` `-7` |
| `unsigned short` | 2 byte | | `153` |
| `long` | 4 byte | | `-2456783` `+4539847` |
| `unsigned long` | 4 byte | | `345231` |
| `float` | 4 byte | Kiểu số thực | `5.6` |
| `double` | 8 byte | | `245.78` |
| `long double` | 10 byte | | `3.1` |

*Bảng 1.2.  Các kiểu dữ liệu trong C*

Trong một số ngôn ngữ lập trình hiện đại, biến chỉ cần được khai báo trước khi sử dụng và tại bất kỳ vị trí nào trong chương trình. Một số ngôn ngôn ngữ còn bỏ qua bước khai báo biến, tương đương với việc biến sẽ được khởi tạo khi lần đầu tiên được sử dụng mà không cần phải khai báo trước đó. Tuy nhiên, ngôn ngữ lập trình C bắt buộc biến phải được khai báo trước khi sử dụng. Hơn nữa, biến phải được khai báo ở đầu chương trình, trước vị trí các câu lệnh. Biến có thể được khai báo bên trong chương trình chính hoặc chương trình con, hoặc bên ngoài chương trình chính hoặc chương trình con. Trong 2 trường hợp này, phạm vi hoạt động của biến khác nhau. Cụ thể, dựa vào phạm vi hoạt động của biến, các biến được chia làm 2 loại cơ bản như sau:

- Biến chung hoặc biến toàn cục (global): là các biến được khai báo bên ngoài các hàm và có thể được truy xuất trong bất kỳ hàm nào cùng nằm trong một tệp chương trình. Ví dụ một chương trình được viết `file1.c` có nội dung như sau:

```c
#include <stdio.h>
#include <conio.h>
int a,b,tong,hieu ;
void tinhhieu(){
    hieu = a - b;     //tinh hieu
    printf("Hieu la: %d \n",hieu);
}
int main (void)
{
    printf ("Nhap so thu nhat : \n");
    scanf("%d",&a);  //nhap so nguyen tu ban phim
    printf("Nhap so thu hai: \n");
    scanf("%d",&b);  //nhap so nguyen tu ban phim
    tong = a + b;     //tinh tong
    printf("Tong la: %d \n",tong); //in ket qua
    getch(); //cho nhap 1 ky tu bat ky
    return 0;
}
```

Trong chương trình trên, biến a, b được khai báo bên ngoài có đặc tính là biến chung, hàm main nhập giá trị cho 2 biến a, b. Trong hàm con tinhhieu() , giá trị a và b được sử dụng với nội dung biến đã được cập nhật trong hàm main . Nội dung của các biến cục bộ có thể được truy xuất, thay đổi bởi các câu lệnh trong bất kỳ hàm nào. Trong ngôn ngữ lập trình C, các biến không có thuộc tính truy cập nên quyền truy cập các biến chung là như nhau.

- Biến cục bộ hay biến địa phương (local variable): các biến cục bộ được khai báo bên trong các hàm, kể cả hàm  main . Phạm vi hoạt động của các biến cục bộ là trong các hàm mà nó được khai báo. Các hàm không có khả năng truy xuất các biến cục bộ trong các hàm khác. Ví dụ, biến cục bộ được khai báo và sử dụng như sau:

```c
#include <stdio.h>
#include <conio.h>
void tinhhieu(){
    int a,b,hieu ;
    hieu = a - b;     //tinh hieu
    printf("Hieu la: %d \n",hieu);
}
int main (void)
{
    int a,b,tong ;
    printf ("Nhap so thu nhat : \n");
    scanf("%d",&a);  //nhap so nguyen tu ban phim
    printf("Nhap so thu hai: \n");
    scanf("%d",&b);  //nhap so nguyen tu ban phim
    tong = a + b;     //tinh tong
    printf("Tong la: %d \n",tong);  //in ket qua
    tinhhieu();
    getch(); //cho nhap 1 ky tu bat ky
    return 0;
}
```

Hàm main khai báo 2 biến cục bộ, a và b, và tiến hành nhập giá trị cho 2 biến. Biến tổng được cập nhật giá trị là tổng của a và b tại dòng 15. Sau khi in tổng, hàm tinhhieu() được gọi. Trong hàm tinhhieu(), 2 biến a và b lại được khai báo. Các biến trong hàm main() có thể có cùng tên với các biến trong hàm tinhhieu() . Trong hàm main() có 2 biến a và b, trong hàm tinhhieu() cũng có 2 biến a và b. Biến a và b trong hàm main() khác với biến a và b trong hàm tinhieu() mặc dù chúng được đặt cùng một tên nhưng do chúng là các biến nội bộ. Như vậy, trong hàm tinhhieu(), giá trị của a và b chưa được nhập nên chương trình sẽ lấy giá trị ngẫu nhiên cho 2 biến a và b trong hàm tinhhieu(). Để có thể cập nhật giá trị a và b đã được nhập trong hàm main cho hàm giá trị nội bộ a và b trong hàm tinhhieu() có thể sử dụng nhiều phương pháp sẽ đề cập trong các chương sau.

### 1.9. Hằng số

Tương tự như biến, hằng số là một vùng nhớ được phát sinh trong bộ nhớ RAM để lưu trữ dữ liệu, tuy nhiên giá trị dữ liệu bên trong vùng nhớ của hằng số chỉ được khởi tạo một lần và không được phép thay đổi trong suốt chương trình.

Hằng số cần được khai báo và khởi tạo giá trị ban đầu trước khi sử dụng. Câu lệnh khai báo sau:

```c
const float PI = 3.14;
```

là một câu lệnh khai báo hằng số. Trong câu lệnh này, từ khóa const là bắt buộc để bắt đầu một câu lệnh khai báo hằng; float là kiểu dữ liệu của hằng, PI là tên của hằng và 3.14 là giá trị khởi tạo cho hằng số. Sau câu lệnh này, chương trình sẽ tạo ra một ô nhớ kiểu float cho hằng PI và khởi tạo giá trị dữ liệu lưu trong ô nhớ này là 3.14, như minh họa ở hình dưới:

*Hằng PI: ô nhớ 4 byte, giá trị khởi tạo 3.14*

![Hằng PI: ô nhớ 4 byte, giá trị khởi tạo 3.14.](assets/giaotrinh-c/hinh-hang-pi.png)

Giá trị khởi tạo 3.14 của hằng PI là cố định và không được phép thay đổi. Nếu người dùng yêu cầu thay đổi giá trị của hằng PI, chương trình sẽ báo lỗi. Chẳng hạn câu lệnh sau:

```c
PI = 4.5; //cau lenh gay ra loi
```

sẽ gây ra lỗi vì giá trị đã khởi tạo của hằng PI là cố định (3.14) và không được phép thay đổi.

Sau khi khai báo, có thể sử dụng hằng số PI trong các câu lệnh khác trong chương trình. Ví dụ, đoạn lệnh tính toán chu vi của một hình tròn có đường kính là 5cm có thể viết như sau:

```c
int d = 5;
float C;
C = d*PI;
```

Ngôn ngữ C sử dụng các hệ thống số trong lập trình máy tính bao gồm các số thực, các số nguyên. Trong đó hệ thống số nguyên có thể được biểu diễn trong các hệ khác nhau như hệ nhị phân, hệ bát phân, hệ thập phân và hệ thập lục phân. Quy ước các hằng số được biểu diễn dưới dạng các hệ thống số khác nhau như sau:

| Hệ thống số | Cơ số | Ký tự sử dụng biểu diễn số | Ví dụ (giá trị 240 hệ thập phân) | Biểu diễn trong ngôn ngữ C |
| --- | --- | --- | --- | --- |
| Nhị phân | 2 | 0,1 | (11110000)₂ | `int a = 0b11110000` |
| Bát phân | 8 | 0,1,2,3,4,5,6,7 | (360)₈ | `int a = 0360` |
| Thập phân | 10 | 0,1,2,3,4,5,6,7,8,9 | (240)₁₀ | `int a = 240` |
| Thập lục phân | 16 | 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f | (F0)₁₆ | `int a = 0xF0` |

### 1.10. Các phép toán trong C

Ngôn ngữ C cung cấp nhiều phép toán khác nhau cho người dùng để phục vụ cho các yêu cầu lập trình khác nhau. Các phép toán được sử dụng trong ngôn ngữ C bao gồm các phép toán số học, các phép toán quan hệ, các phép toán luận lý và các phép toán thao tác trên các bit nhị phân (bit-wise).

- Các phép toán số học bao gồm các phép toán cộng, trừ, nhân, chia,… được liệt kê trong bảng bên dưới.

| Nhóm phép toán | Ký hiệu trong ngôn ngữ C | Ý nghĩa | Ví dụ |
| --- | --- | --- | --- |
| Số học | `=` | Phép gán | `int a;` `a = 5;` |
| | `+` | Cộng | |
| | `-` | Trừ | |
| | `*` | Nhân | |
| | `/` | Chia | `a = 5/2;` |
| | `%` | Chia lấy phần dư | `a = 5%2;` |

*Bảng 1.3.  Các phép toán số học trong ngôn ngữ C*

Ví dụ để thực hiện phép toán:

`y = (a/b)x + c` thì câu lệnh được viết trong ngôn ngữ C tương ứng sẽ là:

```c
y = (a/b)*x + c;
```

Lưu ý với các phép toán, thứ tự ưu tiên sẽ là:

1. Các phép toán trong cặp dấu ngoặc đơn ( ). Nếu có nhiều cặp ngoặc đơn lồng vào nhau thì ưu tiên từ trong ra ngoài.
2. Phép nhân, phép chia và phép chia lấy phần dư. Nếu có nhiều phép nhân, chia, chia lấy phần dư ngang hàng nhau thì sẽ thực thi từ trái sang phải.
3. Phép cộng và phép trừ. Nếu có nhiều phép cộng và phép trừ ngang hàng nhau thì sẽ thực thi từ trái sang phải.
4. Phép gán.

Với phép chia /, kết quả sẽ là số nguyên nếu cả số chia và số bị chia đều có kiểu dữ liệu là số nguyên, kết quả sẽ là số thực nếu số chia hoặc số bị chia có kiểu dữ liệu là số thực. Ví dụ, đoạn lệnh sau:

```c
int a = 5, b = 2;
float c = a/b;
```

sẽ làm cho giá trị của biến c là 2.0 vì phép chia a/b sẽ cho kết quả là số nguyên.

Nhưng khi thực thi các lệnh

```c
int a = 5;
float b = 2;
float c = a/b;
```

thì giá trị của biến c là 2.5 vì phép chia a/b sẽ cho kết quả là số thực.

- Các phép toán quan hệ: được sử dụng để so sánh giá trị của các toán hạng. Khác với các phép toán số học, trong đó toán tử bên trái được cập nhật giá trị, các phép toán quan hệ trả về kết quả là giá trị luận lý: đúng hoặc sai. Các phép toán quan hệ bao gồm các phép toán so sánh như sau:

| Nhóm phép toán | Ký hiệu trong ngôn ngữ C | Ý nghĩa | Ví dụ |
| --- | --- | --- | --- |
| Quan hệ | `>` | So sánh lớn hơn | `a > b` |
| | `>=` | So sánh lớn hơn hoặc bằng | `a >= b` |
| | `<` | So sánh nhỏ hơn | `c < d` |
| | `<=` | So sánh nhỏ hơn hoặc bằng | `c <= d` |
| | `==` | So sánh bằng | `a == 5` |
| | `!=` | So sánh không bằng | `a != 2` |

*Bảng 1.4. Các phép toán quan hệ trong ngôn ngữ C*

Giá trị trả về của các phép toán quan hệ được sử dụng để thiết lập các quyết định có điều kiện. Ví dụ, sử dụng các phép toán quan hệ trong cú pháp sau:

```c
int a = 3, b=2;
if (a>b) {…}
```

biểu thức (a>b) không trả về giá trị cho biến nào, tuy nhiên, biểu thức (a>b) trả về kết quả luận lý là đúng (true), giúp cho phát biểu điều kiện if có cơ sở thực hiện.

- Các phép toán luận lý: các phép toán luận lý cho phép kết nối luận lý các phép toán quan hệ để tạo thành một biểu thức luận lý. Có 3 phép toán luận lý cơ bản như sau:

| Nhóm phép toán | Ký hiệu trong ngôn ngữ C | Ý nghĩa | Ví dụ |
| --- | --- | --- | --- |
| Luận lý | `!` | not | `!(a > b)` |
| | `&&` | and | `(a > 3)&&(b < c)` |
| | `\|\|` | or | `(a < 0)\|\|(a > 10)` |

*Bảng 1.5.  Các phép toán luận lý trong ngôn ngữ C*

Kết quả luận lý của các phép toán luận lý cũng trả về kết quả là đúng (true) hay sai (false).

| A | B | A&&B | A\|\|B | !A |
| --- | --- | --- | --- | --- |
| False | False | False | False | True |
| False | True | False | True | True |
| True | False | False | True | False |
| True | True | True | True | False |

Ví dụ, xét kết quả trả về của phép toán luận lý sau:

```c
int a = 3, b=2, c=4;
if ((a>b)&&(c==0)) {…}
```

Biểu thức luận lý ((a>b)&&(c==0)) là kết hợp luận lý của 2 biểu thức quan hệ (a>b) và (c==0). Biểu thức (a>b) trả về kết quả là đúng (true), tuy nhiên biểu thức (c==0) trả về kết quả là sai (false) nên biểu thức luận lý ((a>b)&&(c==0)) trả về kết quả là sai (false).

- Các phép toán bit-wise: các phép toán bit-wise thao tác trên từng bit riêng lẻ. Các toán tử bit-wise thực sự hữu ích cho các lập trình viên khi lập trình điều khiển như lập trình vi xử lý, vi điều khiển, lập trình điều khiển hệ thống nhúng.

| Nhóm phép toán | Ký hiệu trong ngôn ngữ C | Ý nghĩa | Ví dụ (a = `0b00001111`, b = `0b11101000`) |
| --- | --- | --- | --- |
| Bit-wise | `&` | AND | `c = a&b;` → c = `00001000` |
| | `\|` | OR | `c = a\|b;` → c = `11101111` |
| | `^` | XOR | `c = a^b;` → c = `11100111` |
| | `~` | NOT | `c = ~a;` → c = `11110000` |
| | `<<` | Dịch trái | `c = a<<1;` → c = `00011110` |
| | `>>` | Dịch phải | `c = a>>2;` → c = `00000111` |

*Bảng 1.6.  Các phép toán bit-wise trong ngôn ngữ C*

Các phép toán bit-wise hoạt động tương tự như các phép toán số học. Toán hạng bên trái của biểu thức sẽ được cập nhật giá trị trong khi các toán hạng bên phải không thay đổi. Ví dụ:

```c
unsigned char a = 0b00001111,b=0x11101000 ,c;
c= a&b;
```

câu lệnh gán c = a&b, kết quả giá trị c sẽ là phép and từng bit trong 2 thanh ghi, kết quả sẽ là c = 0b00001000.

Xét câu lệnh sau:

```c
c= a>>2;
```

trong câu lệnh trên, giá trị của c là giá trị của a dịch đi bên phải 2 lần, giá trị của a vẫn không đổi. Kết quả là c được gán giá trị là 0b00000011 . Khi dịch sang trái hoặc sang phải, nếu là các số nguyên không dấu, số 0 sẽ được thêm vào tại vị trí bit bị thiếu.

- Các phép toán khác:

| Nhóm phép toán | Ký hiệu trong ngôn ngữ C | Ý nghĩa | Ví dụ |
| --- | --- | --- | --- |
| Phép toán khác | `++` | Tăng 1 đơn vị | `b = 3;` `b++;` `int c = ++b;` |
| | `--` | Giảm 1 đơn vị | `b = 5;` `c = b-- + 2;` |
| | `?` | Toán tử điều kiện | `max = (a>b)?a:b;` |
| | `+= -= *= /= %=` | Gán mở rộng | `int d = 1;` `d += 2; // d = d + 2;` |

*Bảng 1.7.  Các phép toán khác trong ngôn ngữ C*

Một số phép toán khác khá thông dụng và được sử dụng nhiều trong quá trình lập trình như phép tăng 1 đơn vị (++) và phép giảm 1 đơn vị (– –). Các phép toán này có thể được kết hợp với các phép toán khác nhằm tiết kiệm số dòng lệnh trong quá trình lập trình. Phép tăng, giảm được đặt ở vị trí trước và sau biến sẽ có tác dụng khác nhau.

Ví dụ:

```c
int a = 6, b = 7 ;
a++ ;
```

giá trị a được khởi tạo là 6, lệnh a++ sẽ cập nhật giá trị a bằng cách tăng a lên 1 đơn vị. Lệnh a++ tương đương với lệnh a = a+1.

Một ví dụ khác:

```c
int a = 6, b = 7, c ;
c = a++ +b ;
```

Phép tăng và giảm khi được sử dụng chung với các toán tử khác như ví dụ trên cần chú ý phép tăng đặt trước hay đặt sau toán hạng. Ví dụ, câu lệnh c = a++ +b tương đương với 2 câu lệnh c = a+b và câu lệnh a = a+1. Có nghĩa là phép tăng sau khi thực hiện toán tử chính là toán tử +. Nếu câu lệnh trên được thay đổi thành c = ++a + b thì kết quả tương đương với hai câu lệnh là a = a+1 và c = a + b. Trong trường hợp này, phép tăng được thực hiện trước toán tử chính là phép cộng. Rõ ràng trong 2 trường hợp, kết quả cuối cùng là khác nhau.

Toán tử điều kiện (?): là toán tử được sử dụng phổ biến trong các phát biểu điều kiện. Sử dụng toán tử điều kiện cho phép câu lệnh ngắn gọn. Một toán tử điều kiện được phát biểu dưới cú pháp như sau:

Toán hạng = biểu thức ? giá trị 1: giá trị 2 Trong đó, nếu biểu thức trả về kết quả là đúng (true) thì giá trị 1 được gán cho toán hạng bên trái biểu thức, ngược lại thì giá trị 2 được gán cho toán hạng bên trái biểu thức.

Ví dụ sau sẽ tìm và gán giá trị lớn nhất cho biến max giữa 2 biến a và b:

```c
int a = 6, b = 7, max ;
max = (a>b)?a:b ;
```

Toán tử điều kiện được xem là tương đương một phát biểu điều kiện (if… else…).

Cuối cùng là các phép toán mở rộng. Đây chỉ là hình thức viết rút gọn các toán tử khi có chung một toán hạng. Ví dụ trong câu lệnh a = a +b; thì toán hạng a được cập nhật bằng cách cộng chính nó với b. Trong câu lệnh này, có thể được lượt bỏ a bên phải phép gán = và di chuyển phép + về trước, do đó sẽ có thể được rút gọn thành a += b ;

### 1.11. Xuất nhập dữ liệu

#### 1.11.1 Hàm nhập dữ liệu

Như đã đề cập trong phần trước, trong chương trình cộng hai số nguyên, ta có câu lệnh nhập dữ liệu từ bàn phím `scanf("%d",&a);   //nhap so nguyen tu ban phim` sử dụng hàm scanf để cho phép người dùng nhập một số nguyên từ bàn phím và lưu vào biến a. Hàm scanf này có hai tham số: “%d” và &a, với “%d” là mã định dạng kiểu số nguyên cho dữ liệu nhận vào và & là toán tử xác định địa chỉ của biến để lưu dữ liệu.

Vậy cú pháp chung của hàm nhập dữ liệu sẽ là:

```c
scanf("mãĐịnhDạng",&biếnLưuDữLiệu);
```

với mãĐịnhDạng là mã định dạng dữ liệu dùng để định dạng kiểu dữ liệu cho dữ liệu nhập vào. Một số mã định dạng phổ biến như sau:

| Mã định dạng | Ý nghĩa |
| --- | --- |
| `%d` | mã định dạng kiểu số nguyên hệ thập phân |
| `%f` | mã định dạng kiểu số thực |
| `%c` | mã định dạng kiểu ký tự |
| `%s` | mã định dạng kiểu chuỗi nhiều ký tự |

Ví dụ cho phép nhập 3 số liên tiếp và lưu vào 3 biến a, b, c:

```c
scanf("%d%d%d",&a,&b,&c) ;
```

trong câu lệnh trên, các ký tự định dạng được viết liền nhau cho phép chương trình dừng lại và chờ nhập 3 giá trị số nguyên. Các biến được tham chiếu thông qua địa chỉ và đặt cách nhau bởi dấu “,”. Trường hợp sau đây là không hợp lệ:

```c
scanf("%d,%d,%d",&a,&b,&c) ;
```

trong trường hợp này, các dấu “,” được đặt trong chuỗi định dạng là không hợp lệ. Các ký tự định dạng được liệt kê trong bảng trên và luôn được bắt đầu bằng từ khóa “%”.

#### 1.11.2 Hàm xuất dữ liệu

Cũng trong chương trình cộng hai số, ta có câu lệnh `printf("Tong la: %d \n",tong);  //in ket qua` là câu lệnh in dữ liệu ra màn hình sử dụng hàm printf . Hàm printf ở lệnh này có hai tham số, “Tong la: %d \n” và tong . Tham số đầu tiên “Tong la: %d \n” là chuỗi định dạng gồm chuỗi ký tự cần in ra màn hình Tong la: , mã định dạng %d cho biết sẽ có một số nguyên được in ra, ký tự điều khiển \n để đưa con trỏ xuống dòng. Tham số thứ hai, tong , sẽ xác định giá trị dữ liệu cần in ra.

Vậy cú pháp chung của hàm in dữ liệu ra màn hình là:

```c
printf ("chuỗiĐịnhDạng", biếnCầnIn);
```

trong đó:

- biếnCầnIn  là biến chứa dữ liệu cần in ra màn hình.

*chuỗiĐịnhDạng  có thế là:*

+ chuỗi ký tự thông thường.

+ mã định dạng (%d, %f, %c, %s,...) dùng để định dạng dữ liệu cho biếnCầnIn.

+ ký tự điều khiển (\n \t …).

Lưu ý là để trình biên dịch có thể biên dịch được hàm scanf và printf, ta cần khai báo thư viện stdio.h bằng câu lệnh `#include <stdio.h>` ở đầu chương trình.

Danh sách các mã định dạng dữ liệu cho biến được liệt kê trong bảng sau:

| Mã định dạng | Ý nghĩa |
| --- | --- |
| %c | Kiểu ký tự |
| %d hoặc %i | Kiểu số nguyên hệ thập phân |
| %e | Kiểu số mũ |
| %f | Kiểu số thực |
| %o | Kiểu số nguyên hệ bát phân |
| %u | Kiểu số nguyên không dấu hệ thập phân |
| %x | Kiểu số nguyên hệ thập lục phân không dấu |
| %s | Kiểu chuỗi |

### 1.12. Bài tập

- [ ] 1.  Hãy tìm và sửa lỗi trong các câu lệnh/đoạn lệnh sau:

```c
a. scanf("Nhap gia tri: %d",a);
b. int a;
scanf(a);
c. printf("Gia tri bien a: %d", &a);
d. int a = 5;
printf(a);
e. 5 = a;
f. float b = 3.5;
printf("Gia tri b: %d\n", b);
g. #include <stdio.h>
int a;
printf("Nhap a: ");
scanf("%d",&a);
printf("So da nhap: %d\n",a);
h. #include <stdio.h>
int main(void)
printf("Xin chao!");
return 0;
```

- [ ] 2.  Hãy phân tích chương trình sau và cho biết chương trình thực hiện chức năng gì?

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int     a,b;
    printf ("Nhap a:");
    scanf("%d", &a);
    printf ("Nhap b:");
    scanf("%d", &b);
    printf ("ket qua 1: %d , ket qua 2: %d", a+b,
    a - b);
    getch();
    return 0;
}
```

- [ ] 3.  Cho biết kết quả khi thực thi chương trình sau:

```c
#include <stdio.h>
int main(void)
{
    int a = 10, b = 100;
    float c = 10.5, d = 100.5;
    printf("++a = %d \n", ++a); // Kết quả in:.......
    printf("--b = %d \n", --b); // Kết quả in:.......
    printf("++c = %f \n", ++c); // Kết quả in:.......
    printf("--d = %f \n", --d); // Kết quả in:.......
    return 0;
}
```

- [ ] 4.  Cho biết kết quả khi thực thi chương trình sau:

```c
#include <stdio.h>
int main(void)
{
    int a = 5, c;
    c = a;
    printf("c = %d\n", c); // Kết quả in:......
    c += a;
    printf("c = %d\n", c); // Kết quả in:......
    c -= a;
    printf("c = %d\n", c); // Kết quả in:......
    c *= a;
    printf("c = %d\n", c); // Kết quả in:......
    c /= a;
    printf("c = %d\n", c); // Kết quả in:......
    c %= a;
    printf("c = %d\n", c); // Kết quả in:......
    return 0;
}
```

- [ ] 5.  Vẽ lưu đồ giải thuật và viết chương trình: nhập vào 2 số nguyên từ bàn phím và in ra tổng, hiệu, tích, thương của 2 số đó.
- [ ] 6.  Vẽ lưu đồ giải thuật cho bài toán: nhập vào 1 số nguyên và kiểm tra xem số vừa nhập có phải là số nguyên tố hay không.
- [ ] 7.  Vẽ lưu đồ giải thuật và viết chương trình cho bài toán nhập vào 4 số nguyên, in ra màn hình số lớn nhất, số bé nhất trong các số đã nhập.

## Chương 2. Lệnh rẽ nhánh có điều kiện

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Phân biệt được câu lệnh đơn và câu lệnh kép.
- Phân loại được các cú pháp lệnh rẽ nhánh khác nhau.
- Viết được các chương trình C liên quan đến các lệnh rẽ nhánh.

### 2.1. Lệnh đơn và lệnh phức

Phần đầu tiên ta sẽ tìm hiểu về lệnh đơn và lệnh phức (hay khối lệnh).

#### 2.1.1 Lệnh đơn

Lệnh đơn là một câu lệnh không chứa các câu lệnh khác bên trong nó và kết thúc bằng một dấu chấm phẩy (;).

*Ví dụ 2.1:*

```c
int x=5; // một câu lệnh đơn
x++; // một câu lệnh đơn
printf(" Giá trị x là : %d",x); // một câu lệnh đơn
```

#### 2.1.2 Lệnh phức/ Khối lệnh

Lệnh phức hay khối lệnh là một tập hợp nhiều lệnh đơn được đặt trong cặp dấu ngoặc móc { và }.

*Ví dụ 2.2:*

```c
{
    char ten[30];
    printf("\n Nhap vao ten cua ban:");
    scanf("%s", ten);
    printf("\n Chao Ban %s",ten);
}
```

**Chú ý:**

- Nếu một biến được khai báo bên ngoài khối lệnh và không trùng tên với biến bên trong khối lệnh thì nó cũng được sử dụng bên trong khối lệnh.
- Một khối lệnh bên trong có thể sử dụng các biến đã được khai báo bên ngoài khối lệnh đó. Các lệnh bên ngoài của một khối lệnh không thể sử dụng các biến đã được khai báo bên trong khối lệnh đó.

### 2.2. Các dạng cấu trúc chương trình

Với một ngôn ngữ lập trình thì một chương trình là tập nhiều câu lệnh, thông thường một cách trực quan, chúng ta hiểu một chương trình sẽ thực hiện tuần tự các lệnh theo thứ tự từ trên xuống dưới, bắt đầu từ lệnh thứ nhất trong hàm main và kết thúc sau lệnh cuối cùng của nó. Nhưng thực tế, một chương trình có thể được thực thi theo kiểu phức tạp hơn kiểu tuần tự nhiều, chẳng hạn như một câu lệnh (hay khối lệnh) chỉ được thực hiện khi có một điều kiện nào đó đúng, còn ngược lại nó sẽ bị bỏ qua, tức là xuất hiện khả năng lựa chọn một nhánh nào đó. Hay một chức năng nào đó có thể phải lặp lại nhiều lần.

Như vậy với một ngôn ngữ lập trình có cấu trúc nói chung, phải có các cấu trúc để điều khiển trình tự thực hiện các lệnh trong chương trình (gọi là các cấu trúc, các toán tử điều khiển hay các lệnh điều khiển). Có hai dạng cấu trúc: cấu trúc tuần tự và cấu trúc điều kiện.

#### 2.2.1 Cấu trúc tuần tự

Đây là cấu trúc đơn giản nhất của các ngôn ngữ lập trình, điều khiển thực hiện tuần tự các lệnh trong chương trình (bắt đầu từ các lệnh trong thân hàm main) theo thứ tự từ trên xuống dưới (nếu không có điều khiển nào khác).

Ví dụ 2.3: Chương trình nhập năm sinh của một người từ bàn phím, sau đó in ra lời chào và tuổi của người đó.

```c
#include <stdio.h>
#include <conio.h>
int main(void)
{
    int namsinh;
    printf("Nhap nam sinh cua ban : ");
    scanf("%d", &namsinh);
    printf("\nChao ban! Tinh den nam 2020,tuoi ban là %4d
    tuoi",2020-namsinh);
    getch();
    return 0;
}
```

Ví dụ 2.4: Viết chương trình nhập ba số thực a, b, c từ bàn phím là số đo 3 cạnh tam giác, sau đó tính và in chu vi và diện tích của tam giác.

Giải:

Dữ liệu vào : a, b, c kiểu float là 3 cạnh một tam giác.

Tính toán:

Chu vi p = (a+b+c), diện tích s = sqrt(q*(q-a)*(q-b)*(q-c)) với q = p/2 và sqrt là hàm tính căn bậc 2.

Chúng ta có chương trình được viết như sau:

```c
#include <stdio.h>
#include <conio.h>
#include <math.h>
int main(void)
{ float a,b,c, p,q,s;
    printf("Nhap so do 3 canh cua tam giac ");
    printf("\na = ");
    scanf("%f", &a);
    printf("\nb = ");
    scanf("%f", &b);
    printf("\nc = ");
    scanf("%f", &c);
    printf("\nc = ");
    scanf("%f", &c);
    p = a+b+c; q = p/2;
    s = sqrt(q*(q-a)*(q-b)*(q-c));
    printf("\nChu vi la %5.1f, dien tich la %5.2f ",p,s);
    getch();
    return 0;
}
```

Kết quả thực hiện chương trình:

```c
Nhap so do 3 canh cua tam giac
a = 3  ↵
b = 4  ↵
c = 5  ↵
Chu vi la 12.0, dien tich la 6.00
```

*Lưu ý :*

- Trong chương trình ví dụ trên chúng ta sử dụng hàm tính căn bậc 2: sqrt, hàm này được khai báo trong thư viện math.h.
- Chương trình trên chưa xử lý trường hợp a, b, c không hợp lệ (ba số a, b, c có thể không thoả mãn là 3 cạnh một tam giác).

#### 2.2.2 Cấu trúc rẽ nhánh

Chúng ta hãy xem lại chương trình trong ví dụ 2.4 trên, điều gì xảy ra nếu dữ liệu không thoả mãn, tức là khi bạn nhập 3 số a, b, c từ bàn phím nhưng chúng không thoả mãn là số đo 3 cạnh một tam giác trong khi chương trình của chúng ta vẫn cứ tính và in diện tích.

Rõ ràng là có hai khả năng:

- Nếu a, b, c thoả mãn là 3 cạnh tam giác thì có thể tính chu vi, diện tích và in kết quả.
- Ngược lại, phải thông báo dữ liệu không phù hợp. Như vậy cần phải có một sự lựa chọn một trong hai nhánh xử lý, tuỳ vào điều kiện a, b, c có phải là ba cạnh một tam giác hay không. Điều này gọi là rẽ nhánh. Ngôn ngữ C cung cấp cho chúng ta hai cú pháp lệnh điều khiển rẽ nhánh: rẽ nhánh  if  và rẽ nhánh  switch… case.

### 2.3. Lệnh rẽ nhánh if

Câu lệnh if cho phép lựa chọn một trong các nhánh tùy thuộc vào giá trị của các biểu thức luận lý là đúng (true) hay sai (false).

#### 2.3.1 Lệnh if thiếu

Lệnh if thiếu là lệnh mà ở đó khối lệnh sẽ được thực hiện nếu biểu thức là đúng (true), hoặc không thực hiện khối lệnh nếu biểu thức sai (false).

- Cú pháp

```c
if   (biểu thức)
{
    Khối lệnh;
}
```

- Hoạt động

![Hình 2.1.  Lưu đồ giải thuật của lệnh  if  thiếu](assets/giaotrinh-c/hinh-54-25-17.png)

*Hình 2.1.  Lưu đồ giải thuật của lệnh  if  thiếu*

- Giải thích hoạt động

Kết quả của biểu thức luận lý sẽ là đúng (khác 0 ) hoặc sai (bằng 0).

Nếu biểu thức luận lý là đúng thì thực hiện khối lệnh và thoát khỏi if, ngược lại thì không làm gì cả và thoát khỏi if.

- Lưu ý

Từ khóa if phải viết bằng chữ thường.

Không đặt dấu chấm phẩy sau câu lệnh if, ví dụ như if (biểu thức luận lý);. Khi đó, trình biên dịch không báo lỗi nhưng khối lệnh không được thực hiện cho dù biểu thức luận lý là đúng hay sai.

- Các ví dụ minh họa

*Ví dụ 2.5 : Cho chương trình sau:*

```c
#include <stdio.h>
int main(void)
{
    int a = 5, b = 6, c = 7;
    if (c > a)
    {
        a = a + b;
        b = b + 1;
    }
    printf("Gia tri cua a la %d cua b la %d",a,b);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là: `Gia tri cua a la 11 cua b la 7`

*Giải thích hoạt động của chương trình:*

Trong chương trình này, ở dòng lệnh số 1 là câu lệnh khai báo thư viện của hệ thống: stdio.h . Dòng lệnh số 2 đánh dấu chương trình chính, dấu mở ngoặc { ở dòng lệnh số 3 thể hiện vị trí bắt đầu nội dung chương trình chính và dấu đóng ngoặc } ở dòng lệnh số 13 dùng để kết thúc nội dung chương trình chính.

Ở dòng lệnh số 4, các biến a, b, c được khai báo kiểu int và gán giá trị ban đầu.

Ở dòng lệnh số 5 là lệnh if (c > a) , khi gặp dòng lệnh này, chương trình sẽ xét biểu thức trong cặp dấu ( ) và xét kết quả luận lý của nó. Như ở đây, trong cặp dấu ( ) là biểu thức c > a, với c = 7 và a = 5; như vậy, biểu thức này đúng do đó khối lệnh trong cặp { } bắt đầu ở dòng 6 và kết thúc ở dòng 9 sẽ được thực hiện.

Như vậy các dòng 7 và 8 các giá trị a và b sẽ được thực hiện theo phép toán.

Dòng 10 sẽ in giá trị a, b vừa tính dòng 7 và 8. Ở đây, kết quả a là 11 và b là 7, như vậy thực sự khối lệnh từ dòng 6 đến dòng 9 đã được thực hiện.

Như vậy trong ví dụ này, biểu thức luận lý trong câu lệnh if là đúng (khác 0) và khối lệnh được thực hiện.

Ta xét tiếp một ví dụ khác liên quan đến lệnh if sau đây:

Ví dụ 2.6: So sánh sự khác nhau của ví dụ 2.6 này và ví dụ 2.5 ở phía trên:

```c
#include <stdio.h>
int main(void)
{
    int a = 5, b = 6, c = 7;
    if (c < a)
    {
        a = a + b;
        b = b + 1;
    }
    printf("Gia tri cua a la %d cua b la %d",a,b);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là: `Gia tri cua a la 5 cua b la 6`

*Giải thích hoạt động của chương trình:*

Chương trình ở ví dụ 2.6 này chỉ khác với ví dụ 2.5 ở dòng 5. Ở đây, biểu thức luận lý trong câu lệnh if là c < a . Như vậy khi thực hiện, biểu thức này sẽ cho kết quả là sai , tương đương với giá trị bằng 0. Khi đó toàn bộ các lệnh từ dòng 6 đến dòng 9 sẽ không được thực thi. Chương trình sẽ chuyển đến dòng 10 và in ra kết quả. Như vậy giá trị của a và b sẽ không đổi so với lúc ban đầu.

*Ví dụ 2.7:  Cho chương trình sau:*

```c
#include <stdio.h>
int main(void)
{
    int a = 5, b = 6, c = 7;
    if (a > c)
        a = a + b;
    b = b + 1;
    if (a < b)
    {
        c = b - a;
        b = c + 5;
    }
    printf("Gia tri cua a la %d cua b la %d va c la
    14 %d",a,b,c);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là: `Gia tri cua a la 5 cua b la 7 va c la 2`

*Giải thích hoạt động của chương trình:*

Trong ví dụ 2.7 này, ta lưu ý ở dòng số 6 và số 7, ở đây không có cặp dấu { }. Do vậy dù biểu thức luận lý trong lệnh if ở dòng số 5 là sai nhưng dòng 7 vẫn được thực thi (dòng 6 không thực thi). Do đó giá trị b được tăng lên dẫn tới điều kiện if ở dòng 8 đúng nên khối lệnh từ dòng 9 đến dòng 12 được thực hiện. Cuối cùng, giá trị các biến a, b, c thu được như kết quả đã cho.

#### 2.3.2 Lệnh if đủ

Không giống với lệnh if thiếu, lệnh if đủ sẽ lựa chọn và quyết định thực hiện một trong hai khối lệnh cho trước tùy thuộc vào kết quả luận lý của biểu thức .

- Cú pháp

```c
if  (biểu thức)
{
    Khối lệnh 1;
}
else
{
    Khối lệnh 2;
}
```

- Hoạt động

![Hình 2.2.  Lưu đồ giải thuật của lệnh if đủ](assets/giaotrinh-c/hinh-58-26-21.png)

*Hình 2.2.  Lưu đồ giải thuật của lệnh if đủ*

- Giải thích

Nếu biểu thức là đúng thì thực hiện khối lệnh 1 và thoát khỏi if, ngược lại thì thực hiện khối lệnh 2 và thoát khỏi if.

- Lưu ý

Từ khóa if, else phải viết bằng chữ thường.

Kết quả của biểu thức là đúng (khác 0) hoặc sai (= 0).

Khi khối lệnh 1 hoặc khối lệnh 2 bao gồm từ 2 lệnh trở lên thì các khối lệnh này phải được đặt trong các cặp dấu { }.

- Ví dụ minh họa

*Ví dụ 2.8:  Cho chương trình sau:*

```c
#include <stdio.h>
int main(void)
{
    int a = 4, b = 2, c = 5;
    c -= 2;
    if (a > c)
        a = a + b;
    b = b + c;
    if (a < b)
    {
        c = b - a;
        b = c + 5;
    }
    else
        a = a + 1;
    b = b +1;
    printf("Gia tri cua a la %d cua b la %d va c la
    %d",a,b,c);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là:

```c
Gia tri cua a la 11 cua b la 7 va c la 3
```

*Giải thích hoạt động của chương trình:*

Ví dụ 2.8 này có cả hai cú pháp lệnh: if đầy đủ và if thiếu. Các lệnh ở những dòng lệnh từ 1 đến 8 đã được trình bày ở ví dụ trước. Điểm khác trong ví dụ này là từ dòng 9 đến dòng 16. Nếu biểu thức ở dòng 9 (biểu thức a < b) là đúng thì chương trình sẽ thực hiện các dòng lệnh từ dòng 10 đến dòng 13. Ngược lại, nếu biểu thức dòng 9 là sai thì chương trình sẽ thực hiện ở khối lệnh của nhánh else, tức dòng lệnh 15, dòng 16 đã nằm ngoài else. Như vậy, kết quả thực hiện của chương trình bởi máy tính là phù hợp với những gì đã phân tích.

#### 2.3.3 Lệnh if … else if … else

Với lệnh if … else if …else thì chương trình sẽ lựa chọn và quyết định thực hiện 1 trong số n khối lệnh cho trước.

- Cú pháp

```c
if    (biểu thức 1)
{
    Khối lệnh 1;
}
else if  (biểu thức 2)
{
    Khối lệnh 2;
}
```

…………………

```c
else if  (biểu thức n-1)
{
    Khối lệnh n-1;
}
else
{
    Khối lệnh n;
}
```

- Hoạt động

![Hình 2.3.  Lưu đồ giải thuật của lệnh if...else if...else](assets/giaotrinh-c/hinh-61-27-6.png)

*Hình 2.3.  Lưu đồ giải thuật của lệnh if...else if...else*

- Giải thích

Nếu Biểu thức 1 là đúng thì thực hiện Khối lệnh 1 và kết thúc lệnh if. Ngược lại, nếu Biểu thức 2 là đúng thì thực hiện Khối lệnh 2 và kết thúc lệnh if. Ngược lại, nếu Biểu thức n-1 là đúng thì thực hiện Khối lệnh n-1 và kết thúc lệnh if. Ngược lại thì thực hiện Khối lệnh n .

- Lưu ý

Không đặt dấu chấm phẩy ngay sau các phát biểu if, else if, else.

Nếu khối lệnh 1, 2…n bao gồm từ 2 lệnh trở lên thì phải đặt các khối lệnh này trong các cặp dấu { }.

- Ví dụ minh họa

*Ví dụ 2.9:  Cho chương trình sau:*

```c
#include <stdio.h>
int main(void)
{
    int a = 4, b = 2, c = 5;
    if ((a > c)|| (a < b) && (b > c))
        a = a - 2;
    else if (a == b)
    {
        c = b - a;
        b = c + 5;
    }
    else
        a = a + 1;
    b = b +1;
    printf("Gia tri cua a la %d cua b la %d va c la
    %d",a,b,c);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là:

```c
Gia tri cua a la 11 cua b la 3 va c la 5
```

*Giải thích hoạt động:*

Trong chương trình này, các dòng từ 5 đến dòng 13 là khác với các ví dụ trước. Ở dòng 5, biểu thức ((a > c)|| (a < b) && (b > c)) sẽ được xét, nếu kết quả là đúng thì câu lệnh ở dòng lệnh 6 sẽ được thực hiện còn nếu sai thì bỏ qua câu lệnh ở dòng 6 và chuyển qua câu lệnh ở dòng 7. Do kết quả của biểu thức ở dòng lệnh số 5 là sai nên chương trình sẽ chuyển sang kiểm tra biểu thức điều kiện ở dòng lệnh 7 (biểu thức a==b): nếu là đúng thì sẽ thực hiện các lệnh từ dòng 8 đến hết dòng 11, nếu sai thì sẽ chuyển sang thực thi dòng lệnh 12. Do biểu thức a == b ở dòng lệnh 7 cho kết quả là sai, nên chương trình sẽ thự c thi các dòng 12 và 13. Đoạn lệnh từ dòng 14 đến cuối chương trình luôn được thực hiện vì không liên quan tới lệnh if ở trên.

#### 2.3.4 Cấu trúc if lồng nhau

Với cấu trúc if lồng nhau, chương trình sẽ lựa chọn và quyết định thực hiện 1 trong số n khối lệnh cho trước.

- Cú pháp

Cú pháp của cấu trúc này là một trong 3 dạng trên, nhưng các khối lệnh bên trong sẽ chứa ít nhất một lệnh if khác nữa nên gọi là cấu trúc if lồng nhau. Thông thường, khi cấu trúc if lồng nhau càng nhiều cấp thì độ phức tạp càng cao, chương trình chạy càng chậm và trong lúc lập trình càng dễ bị nhầm lẫn.

- Lưu ý

Trong lệnh if lồng nhau thì else sẽ luôn luôn kết hợp với if chưa có else nào gần nó nhất. Vì vậy khi gặp những lệnh if thiếu, ta phải đặt chúng trong những khối lệnh rõ ràng bằng cặp dấu {} để tránh bị hiểu sai câu lệnh.

### 2.4. Toán tử điều kiện ba ngôi

C có một toán tử phổ biến và thích hợp để thay thế cho cú pháp lệnh if đủ (if ...else...), đó là toán tử điều kiện 3 ngôi ( ? : ).

Cú pháp của toán tử ba ngôi là:

E1 ? E2 : E3 Trong đó E1, E2, E3 là các biểu thức.

Ý nghĩa: nếu E1 là Đúng thì thực thi E2, nếu E1 là Sai thì thực thi E3.

*Ví dụ 2.10a:  Cho đoạn chương trình sau:*

```c
int a=2 , b = 3;
a == 0 ? b = 1 : b = 2;
printf("b = %d",b);
```

Khi chạy đoạn chương trình trên, kết quả in ra màn hình sẽ là: `b = 2` Vì biểu thức a == 0 ở dòng lệnh thứ 2 có kết quả là sai nên chương trình thực thi biểu thức ở sau dấu : , tức biểu thức b = 2. Điều này làm cho giá trị biến b sẽ được thay đổi thành 2.

*Ví dụ 2.10b:  Cho đoạn chương trình sau:*

```c
x=10;
y=x>9?100:200;
```

Khi thực hiện 2 dòng lệnh trên, biến y sẽ được gán giá trị 100 khi biến x lớn hơn 9, ngược lại khi x <= 9 thì y sẽ được gán giá trị 200. Đoạn mã ở ví dụ 2.10b tương đương với một lệnh if ...else... như sau:

```c
x = 10;
if (x < 9)
y = 100;
else y = 200;
```

Với cả hai cách viết này giá trị của biến y đều bằng 100.

### 2.5. Lệnh rẽ nhánh SWITCH… case

Lệnh switch…case hoạt động tương tự như lệnh if ... else if ... else... . Tuy nhiên, biểu thức được sử dụng để kiểm tra phải có kết quả là một giá trị hằng số cụ thể. Một bài toán sử dụng lệnh switch thì cũng có thể sử dụng được lệnh if nhưng việc ngược lại có được hay không là còn tùy thuộc vào giải thuật của bài toán.

#### 2.5.1 Cú pháp

```c
switch  (biểu thức nguyên)
{
    case  n1 :
        khối lệnh 1;
        break;
    case  n2 :
        khối lệnh 2;
        break;

    ............................

    case nk :
        khối lệnh k;
        break;
    default : khối lệnh k+1;
}
```

#### 2.5.2 Hoạt động

![Hình 2.4. Lưu đồ giải thuật của lệnh switch...case](assets/giaotrinh-c/hinh-66-32-0.png)

*Hình 2.4. Lưu đồ giải thuật của lệnh switch...case*

#### 2.5.3 Giải thích

Từ khóa switch, case, break phải viết bằng chữ thường, biểu thức phải là có kết quả là các giá trị hằng nguyên (char, int, long,...). Khối lệnh 1, 2…n có thể gồm nhiều lệnh nhưng không cần đặt trong cặp dấu { }. Không đặt dấu chấm phẩy ngay sau switch(biểu thức).

Với ni ( n1, n2,… nk) là các số nguyên, hằng ký tự hoặc biểu thức hằng và các ni cần có giá trị khác nhau. Đoạn chương trình nằm giữa các dấu { } gọi là thân của lệnh switch. Thành phần default là một thành phần không bắt buộc phải có trong thân của lệnh switch. Sự hoạt động của lệnh switch phụ thuộc vào giá trị của biểu thức viết trong dấu ngoặc () như sau: khi giá trị của biểu thức này bằng ni , máy sẽ nhảy tới các câu lệnh có nhãn là case ni: . Khi giá trị của biểu thức không bằng bất kỳ giá trị ni nào thì máy sẽ nhảy tới câu lệnh sau nhãn default : (nếu có thành phần default) hoặc máy sẽ nhảy ra khỏi cấu trúc switch (nếu không có thành phần default).

Lưu ý là máy sẽ nhảy ra khỏi lệnh switch khi nó gặp câu lệnh break hoặc dấu ngoặc } đóng cuối cùng của thân switch. Ta cũng có thể dùng câu lệnh goto trong thân của lệnh switch để nhảy tới một câu lệnh bất kỳ nào đó bên ngoài switch. Khi lệnh switch nằm trong nội dung của một hàm nào đó thì ta cũng có thể sử dụng câu lệnh return trong thân của lệnh switch để thoát ra khỏi lệnh switch và kết thúc hàm này (lệnh return sẽ đề cập sau). Khi máy nhảy tới một vị trí câu lệnh nào đó thì sự hoạt động tiếp theo của nó sẽ phụ thuộc vào nội dung của các lệnh đứng sau vị trí này. Như vậy nếu máy nhảy tới vị trí có nhãn case ni: thì máy sẽ thực hiện tất cả các câu lệnh sau vị trí đó cho tới khi nào gặp câu lệnh break , goto hoặc return . Nói cách khác, máy có thể đi từ khối lệnh thuộc case ni sang khối lệnh thuộc case thứ ni+1, nếu không tồn tại lệnh break , goto hoặc return ở cuối mỗi khối lệnh. Nếu mỗi khối lệnh được kết thúc bằng lệnh break thì switch sẽ thực hiện chỉ một trong các khối lệnh này.

#### 2.5.4 Ví dụ minh họa

*Ví dụ 2.11:  Cho chương trình sau:*

```c
#include <stdio.h>
int main(void)
{
    int a = 15, b = 0;
    switch (a%3)
    {
        case 0:
            b = 0;
            printf ("chia het");
            break;
        case 1:
            b = 1;
            printf("khong chia het");
            break;
        default:
            b = 2;
            printf("khong chia het");
    };
    printf("\n gia tri cua b la %d", b);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là:

```c
Chia het
Gia tri cua b la 0
```

*Giải thích hoạt động của chương trình:*

Ví dụ này khác với các ví dụ trước đó từ dòng lệnh 5. Ở dòng lệ nh 5, biểu thức a%3 của lệnh switch sẽ được tính toán và kiểm tra, nếu kết quả của biểu thức này là giá trị 0 thì chương trình sẽ nhảy đến vị trí dòng lệnh 7 tương ứng với nhãn case 0 :, nếu kết quả của biểu thức này là giá trị 1 thì chương trình sẽ nhảy đến dòng 11 tương ứng với nhãn case 1 :, nếu là các giá trị khác thì chương trình sẽ nhảy đến dòng lệnh 15 tương ứng với nhãn default: . Với trường hợp cụ thể của ví dụ này, kết quả của biểu thức a%3 là 0 , do đó chương trình sẽ nhảy đến nhãn case 0: ở dòng 7 để thực hiện tiếp cho đến khi gặp lệnh break ở dòng lệnh 10 thì kết thúc lệnh switch. Sau đó, chương trình nhảy đến dòng lệnh 19 và thực thi tiếp cho đến cuối chương trình chính.

Bây giờ, ta giả sử lệnh break; ở dòng lệnh 10 bị bỏ đi, thì điều gì sẽ xảy ra? Kết quả của trường hợp này sẽ là:

```c
Chia hetkhong chia het
Gia tri cua b la 1
```

Điều gì đã xảy ra? Sau khi nhảy tới nhãn case 0: và thực thi khối lệnh ở dòng 8 và 9, vì không có lệnh break nên chương trình đã thực hiện tiếp các lệnh ở dòng lệnh 11, 12, 13 cho đến khi gặp lệnh break tiếp theo. Lúc này chương trình mới thoát ra khỏi lệnh switch và kết thúc lệnh switch. Đây là vấn đề cần lưu ý để chương trình thực hiện đúng với ý đồ của người lập trình.

### 2.6. Bài tập

- [ ] 1.  Hãy tìm và sửa lỗi trong các câu/đoạn lệnh sau:

```c
a. max = a;
If (a < b)
max = b;
b. scanf("%d",&a);
if a < 0
printf("La so am\n");
c. scanf("%d",&a);
if (a % 2 == 0)
printf("La so chan\n");
else (a % 2 != 0)
printf("La so le\n");
d. if (a < b)
max = b;
printf("%d\n",max);
else
max = a;
printf("%d\n",max);
e. if (a < b);
max = b;
else
max = a;
printf("%d\n",max);
f. float diem;
scanf("%f",&diem);
if (diem > 0)
if (diem < 10)
printf("Diem hop le.\n");
else
printf("Khong chap nhan diem am.\n");
g. scanf("%d",&nam);
switch (nam%4)
{
case ==0:
printf("Nam nhuan\n");
break;
default:
printf("Nam binh thuong\n");
}
h. scanf("%d",&a);
switch (a % 2)
{
case 0:
printf("La so chan\n");
case 1:
printf("La so le\n");
}
```

- [ ] 2.  Hãy đọc và phân tích chương trình sau:

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int   a,b,c,m;
    printf ("Nhap a:");
    scanf("%d", &a);
    printf ("Nhap b:");
    scanf("%d", &b);
    printf ("Nhap c:");
    scanf("%d", &c);
    if (a > b)
        m = a;
    else
        m = b;
    if (m < c)
        m = c;
    printf("ket qua =  %d",m);
    getch();
    return 0;
}
```

**Yêu cầu :**

- Cho biết chương trình thực hiện chức năng gì?
- Vẽ lưu đồ hoạt động của chương trình.
- Viết lại chương trình khác thực hiện cùng chức năng với chương trình trên.

- [ ] 3.  Vẽ lưu đồ xử lý và viết chương trình nhập vào 4 số nguyên từ bàn phím và in ra số lớn nhất trong 4 số này.
- [ ] 4.  Vẽ lưu đồ xử lý và viết chương trình giải phương trình bậc 2 : ax 2  + bx + c = 0  (không xét đến trường hợp hệ số a = 0).
- [ ] 5.  Vẽ lưu đồ xử lý và viết chương trình giải phương trình bậc 2: ax 2  + bx + c = 0  có xét đến trường hợp hệ số a = 0.

6 . Vẽ lưu đồ xử lý và viết chương trình nhập vào: giờ : phút : giây từ bàn phím; kiểm tra thời gian vừa nhập vào có hợp lệ hay không; nếu hợp lệ cho biết trước đó 15s là thời gian bao nhiêu.

Ví dụ : Nhap gio: 25 Nhap phut: 19 Nhap giay: 43 Thoi gian nhap vao khong hop le!!!!

Ví dụ : Nhap gio: 0 Nhap phut: 0 Nhap giay: 0 Truoc do 15s la 23:59:45

- [ ] 7.  Biết rằng một mã số sinh viên sẽ có định dạng như sau: yyNNNsss. Trong đó:

yy: là năm nhập học NNN: là mã ngành học sss: là số thứ tự của sinh viên Ví dụ nếu mã số sinh viên là 20141125, thì các thông tin tương ứng sẽ là:

20: năm nhập học là 2020 141: là mã ngành học 125: là số thứ tự của sinh viên Hãy vẽ lưu đồ xử lý và viết chương trình thực hiện yêu cầu sau:

- Nhập vào một mã số sinh viên theo định dạng trên.
- Kiểm tra và cho biết sinh viên đó học ngành nào trong các ngành học sau:

| Mã ngành | Tên ngành |
| --- | --- |
| 141 | Điện tử - Truyền thông |
| 119 | Kỹ thuật Máy tính |
| 101 | Điện - Điện tử |

## Chương 3. Lệnh vòng lặp

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Phân biệt được cấu trúc lặp trong C
- Viết được các chương trình C liên quan đến các lệnh vòng lặp.
- Sử dụng được lệnh break và lệnh continue trong vòng lặp.

### 3.1. Lệnh for

#### 3.1.1. Cú pháp

```c
for   (biểu thức 1; biểu thức 2; biểu thức 3)
{
    Khối lệnh;
}
```

Lệnh for gồm 3 biểu thức và thân for. Thân for là một câu lệnh hoặc một khối lệnh viết sau từ khoá for. Bất kỳ biểu thức nào trong 3 biểu thức trên đều có thể vắng mặt nhưng phải giữ dấu ; ngăn cách giữa các biểu thức . Thông thường, biểu thức 1 là toán tử gán để tạo giá trị ban đầu cho biến điều khiển, biểu thức 2 là một quan hệ logic biểu thị điều kiện để tiếp tục vòng lặp, biểu thức 3 là một toán tử gán dùng để thay đổi giá trị của biến điều khiển.

#### 3.1.2. Hoạt động

Vòng lặp for hoạt động như trong Hình 3.1 . Ta có thể thấy, lệnh

```c
for hoạt động theo các bước sau :
```

- Bước 1 : Thực thi  Biểu thức 1 .
- Bước 2 : Xác định  Biểu thức 2 .

Tuỳ thuộc vào tính đúng sai của Biểu thức 2 mà máy lựa chọn một trong hai nhánh: nếu Biểu thức 2 có giá trị là 0 (sai) thì máy sẽ kết thúc lệnh for và chuyển tới câu lệnh tiếp theo sau for; nếu Biểu thức 2 có giá trị khác 0 (đúng) thì máy sẽ thực hiện Khối lệnh trong thân for, sau đó thực thi Biểu thức 3 , rồi quay lại B ước 2 để bắt đầu một lần lặp mới của vòng lặp.

![Hình 3.1.  Lưu đồ giải thuật của vòng lặp for](assets/giaotrinh-c/hinh-75-39-9.png)

*Hình 3.1.  Lưu đồ giải thuật của vòng lặp for*

Chú ý nếu Biểu thức 2 vắng mặt thì kết quả của thao tác “xác định Biểu thức 2 ” được xem là đúng. Trong trường hợp này, việc thoát khỏi vòng lặp for cần phải được thực hiện nhờ các lệnh break , goto hoặc return viết trong thân vòng lặp. Trong dấu ngoặc tròn sau từ khoá for là 3 biểu thức phân cách nhau bởi hai dấu ; . Trong mỗi biểu thức, chúng ta không những có thể viết một biểu thức mà còn có quyền viết một dãy nhiều biểu thức phân cách nhau bởi các dấu phẩy. Khi đó các biểu thức trong mỗi phần được xác định theo thứ tự từ trái sang phải. Tính đúng sai của dãy biểu thức sẽ được quyết định bởi tính đúng sai của biểu thức cuối cùng trong dãy này.

Trong thân của for, ta có thể dùng thêm các lệnh for khác, vì thế, ta có thể xây dựng các lệnh for lồng nhau. Khi gặp câu lệnh break trong thân for, máy ra sẽ ra khỏi lệnh for nào đang chứa lệnh break này. Trong thân for cũng có thể sử dụng toán tử goto để nhảy đến một ví trí mong muốn bất kỳ.

Trong thân for (hoặc while, do…while) cũng có thể có lệnh continue: khi lệnh continue thi hành thì quyền điều khiển sẽ trao qua cho biểu thức điều kiện của vòng lặp gần nhất. Điều này có nghĩa là chương trình sẽ quay lại đầu vòng lặp gần nhất đang chứa lệnh continue và bỏ qua các lệnh phía sau lệnh continue trong vòng. Ðối với lệnh for máy sẽ tính lại biểu thức 3 và quay lại bước 2.

#### 3.1.3. Ví dụ minh họa

*Ví dụ 3.1:  Xét đoạn chương trình sau:*

```c
int i, a = 3;
for (i = 0; i<5; i++)
a ++;
```

Ở dòng lệnh đầu tiên, các biến i và a được khai báo và gán giá trị.

Tiếp theo là đến vòng lặp for, biểu thức 1 ở đây giá trị biến i được khởi tạo giá trị ban đầu: i = 0. Sau đó, chương trình sẽ thực hiện biểu thức 2 : kiểm tra i < 5 là đúng hay sai. Trong trường hợp này, kết quả kiểm tra sẽ là đúng (vì i = 0 sẽ nhỏ nhơn 5). Chương trình sẽ nhảy đến thực hiện khối lệnh (ở đây là lệnh a++ hay a = a+1). Sau đó, chương trình sẽ thực hiện biểu thức 3 (ở đây i++ hay i = i +1). Như vậy, sau lần lặp đầu tiên, kết quả sẽ là a = 4 và i = 1. Tiếp đó, chương trình sẽ thực hiện lần lặp tiếp theo: quay về xét điều kiện của biểu thức 2 xem còn đúng không. Lúc này, kết quả của biểu thức 2 vẫn còn đúng (vì khi đó i = 1 là nhỏ hơn 5), chương trình sẽ thực hiện khối lệnh (a++) làm cho a sẽ bằng 5. Chương trình sẽ tiếp tục thực hiện biểu thức 3 (i++ hay i bằng 2) và tiếp tục quay lại vòng lặp. Biểu thức 2 sẽ được xét, khối lệnh được thực hiện, biểu thức 3 được thực hiện…Cứ như vậy cho đến khi điều kiện ở biểu thức 2 là sai thì chương trình sẽ thoát ra khỏi vòng lặp. Sau khi kết thúc vòng lặp này, kết quả thu được là a = 8 và i = 5.

Để hiểu rõ hơn thứ tự các lệnh thực hiện, ta có thể xem xét tiếp ví dụ 3.2 sau:

```c
#include <stdio.h>
int main(void)
{
    int i, a = 0;
    for (i = 0; i<2; i++,printf("gia tri i la %d, ",i))
    {a ++;
        printf("\n gia tri a la %d, ",a);
    }
    printf("\ngia tri sau vong lap cua i la %d va a la
    10 %d", i, a);
    getch();
    return 0;
}
```

Khi chạy chương trình, kết quả in ra màn hình sẽ là:

```c
gia tri a la 1, gia tri i la 1,
gia tri a la 2, gia tri i la 2,
gia tri sau vong lap cua i la 2 va a la 2
```

Ta chú ý lệnh for dòng lệnh 5, ở đây biểu thức 3 là một khối lệnh (đây là trường hợp khá đặc biệt: các lệnh không được đặt trong cặp dấu ngoặc nhọn { } và các lệnh ngăn cách với nhau bằng dấu phẩy). Mục đích của chương trình này là nhằm làm rõ: biểu thức 3 sẽ được thực hiện trước hay khối lệnh trong vòng lặp for sẽ thực hiện trước. Và kết quả chương trình đã cho ta câu trả lời chính xác như phần giải thích ở ví dụ 3.1 : khối lệnh trong thân vòng lặp for sẽ được thực hiện trước, sau đó biểu thức 3 mới được thực hiện.

*Ví dụ 3.1  sẽ hoàn toàn tương đương với các đoạn lệnh sau:*

**Trường hợp 1:**

```c
int i=0, a = 3;
for (; i<5; i++)
a ++;
```

**Trường hợp 2:**

```c
int i=0, a = 3;
for (; i<5;)
{
    a ++;
    i++;
}
```

**Trường hợp 3:**

```c
int i=0, a = 3;
for (; ;)
{
    a ++;
    i++;
    if (i>=5)
        break;
}
```

Với 3 trường hợp trên ta thấy: lệnh for có thể vắng mặt từ 1 đến cả 3 biểu thức nhưng chương trình vẫn thực hiện đúng như yêu cầu. Cũng cần lưu ý, các biểu thức có thể vắng mặt nhưng các dấu chấm phẩy (;) thì không được bỏ.

Ví dụ 3.3: Viết chương trình nhập điểm số một môn học của một sinh viên từ bàn phím. Biết rằng điểm phải lớn hơn 0 và nhỏ hơn 10. Nếu vi phạm điều kiện này thì yêu cầu nhập lại.

```c
#include <stdio.h>
int main(void)
{
    float a;
    printf("Moi ban nhap 1 so: ");
    scanf("%f",&a);
    for (; ;)
    {
        if ((a<=10)&&(a>=0))
        {
            printf("ban da nhap gia tri phu hop");
            break;
        }
```

14 else

```c
printf("\ngia tri ban nhap khong phu hop");
printf("\n moi ban nhap gia tri khac: ");
scanf("%f",&a);
}
printf("\n gia tri ban nhap phu hop la %f", a);
return 0;
}
```

Với chương trình ở trên, các lệnh ở những dòng lệnh từ 9 đến 15 sẽ giúp kiểm tra điều kiện để quyết định vòng lặp có được tiếp tục hay không. Như vậy, đây là ví dụ có dùng kết hợp giữa vòng lặp for và điều kiện if cho một yêu cầu cụ thể. Cần lưu ý thêm, câu lệnh break ở dòng lệnh 12 sẽ giúp chương trình thoát khỏi vòng lặp gần nhất chứa nó. Như vậy, khi gặp lệnh break này, chương trình sẽ thoát khỏi câu lệnh for (vì lệnh break nằm trong lệnh for).

### 3.2. Lệnh while

#### 3.2.1. Cú pháp

```c
while   (Biểu thức)
{
    Khối lệnh;
}
```

#### 3.2.2. Hoạt động

![Hình 3.2.  Lưu đồ giải thuật của vòng lặp  while](assets/giaotrinh-c/hinh-80-43-12.png)

*Hình 3.2.  Lưu đồ giải thuật của vòng lặp  while*

Nguyên tắc thực hiện:

- Bước 1: Tính giá trị của  Biểu thức .
- Bước 2: Nếu giá trị của  Biểu thức  là sai (= 0) thì chương trình thoát khỏi khỏi vòng while.
- Bước 3: Nếu giá trị của  Biểu thức  là đúng (khác 0) thì thực hiện Khối lệnh  và quay lại bước 1.

**Chú ý:**

- Biểu thức  ở đây được hiểu là một biểu thức hoặc nhiều biểu thức con. Nếu là nhiều biểu thức con thì các biểu thức con sẽ được cách nhau bởi các dấu phẩy (,) và tính đúng sai sẽ được quyết định bởi  biểu thức con cuối cùng.

- Trong thân while (khối lệnh) có thể chứa một hoặc nhiều cấu trúc điều khiển khác.
- Trong thân while có thể sử dụng lệnh continue để chuyển đến đầu vòng lặp để thực hiện lần lặp tiếp theo (bỏ qua các câu lệnh còn lại trong thân).
- Muốn thoát khỏi vòng lặp while tùy ý, có thể dùng các lệnh break, goto, return .

#### 3.2.3. Ví dụ minh họa

*Ví dụ 3.4:  Xét đoạn chương trình sau:*

```c
int a = 4, i = 0;
while (i < 4)
{
    i++;
}
a = a + i;
```

Đầu tiên, ở dòng lệnh số 1, các biến a và i được khai báo kiểu int và gán giá trị.

Sau đó chương trình chạy tới vòng lặp while. Ở đây biểu thức i<4 sẽ được kiểm tra xem có đúng hay không, nếu đúng thì khối lệnh sẽ được thực hiện còn nếu sai thì sẽ thoát ra khỏi vòng lặp. Như vậy, ở lần lặp đầu tiên, biểu thức này là đúng (vì 0 < 4) và khối lệnh sẽ được thực hiện: i sẽ được tăng lên 1 giá trị, sau đó quay lại để thực hiện lần lặp tiếp theo. Biểu thức điều kiện một lần nữa sẽ được kiểm tra xem còn đúng không… tiếp tục như vậy cho đến khi kết quả của biểu thức i < 4 là sai. Trong ví dụ này, vòng lặp được thực hiện 4 lần (với i = 0, 1, 2, 3) đến khi i = 4 thì biểu thức i < 4 bị sai và thoát ra khỏi vòng lặp. Chương trình sẽ chuyển đến dòng 6 và tính giá trị của biến a = a + i = 4 + 4 = 8, và kết thúc đoạn chương trình.

Như vậy, với đoạn chương trình trên, nếu vắng mặt biểu thức điều kiện i < 4 của lệnh while ở dòng 4 thì vòng lặp sẽ lặp vô hạn vì thao tác kiểm tra biểu thức sẽ cho kết quả luôn luôn đúng, đó là điều không mong muốn. Do đó, người lập trình cần cẩn thận để tránh các vòng lặp vô hạn này.

*Ví dụ 3.5:  Chương trình tính giai thừa của một số nhập từ bàn phím:*

```c
#include <stdio.h>
int main(void)
{
    int  a = 1, N, i = 1;
    printf("Moi nhap vao so can tim giai thua ");
    scanf("%d",&N);
    if(N < 0)printf("So nay khong co giai thua");
    else if (N == 0)printf("Giai thua cua 0 la 1");
    else
    {
        while (i <= N)
        {
            a = a*i;
            i ++;
        }
        printf("\n Giai thua cua %d la %d", N,a);
    }
    return 0;
}
```

Trong ví dụ này, có sự kết hợp của câu lệnh if…else if…else... và lệnh while để tìm điều kiện của một số để tính giai thừa của số này và in ra kết quả. Các phần liên quan đến lệnh rẽ nhánh if đã được bày ở chương trước. Trong phần này, ta chú ý đến chương trình trên trong câu lệnh while, từ dòng 11 đến hết dòng 15, đây là đoạn chính để tính giai thừa, giúp chương trình nhân liên tục các số từ 1 đến N. Dòng 16 sẽ in ra kết quả đã tính được ở vòng lặp while.

Ví dụ 3.6: Xét đoạn chương trình yêu cầu người dùng nhập vào một số bí mật (số 0) sau:

```c
int  a , b;
printf("moi nhap vao so bi mat ");
scanf("%d", &a);
b = 1;
while (a!=0)
{
    printf("vui long nhap lai ");
    scanf("%d",&a);
    b++;
    if(b>=3)
    {
        printf("Ban bi khoa chuong trinh");
        while(1);
    }
}
```

Trong đoạn chương trình trên ta thấy, lệnh while được sử dụng để kiểm tra một số nguyên nhập vào có bằng với một giá trị đã cho trước hay không (biểu thức kiểm tra a != 0: trong trường hợp này là kiểm tra xem số nhập vào có bằng 0 hay không). Nếu số nhập vào là số 0 thì chương trình sẽ thoát ra khỏi vòng lặp while, nếu sai thì chương trình sẽ yêu cầu nhập lại và chỉ được phép nhập lại tối đa 3 lần (dòng lệnh 10). Nếu cả 3 lần nhập lại đều sai thì chương trình sẽ rơi vào vòng lặp vô hạn (dòng lệnh 13) và chỉ còn cách tắt đi và chạy lại. Chương trình này là cơ sở dùng để kiểm tra thông tin bảo mật nào đó nếu áp dụng thêm các phần học ở các chương tiếp theo.

### 3.3. Lệnh do .... While

#### 3.3.1. Cú pháp

`do`

```c
do
{
    Khối lệnh ;
}
while (biểu thức);
```

#### 3.3.2. Hoạt động

*Hình 3.3. Lưu đồ giải thuật vòng lặp do... while*

![Hình 3.3. Lưu đồ giải thuật vòng lặp do... while](assets/giaotrinh-c/hinh-3-3.png)

Nguyên tắc thực hiện:

- Bước 1: Máy thực hiện  Khối lệnh .
- Bước 2: Sau đó tính giá trị của  Biểu thức , nếu giá trị của  Biểu thức  là sai thì chương trình thoát ra khỏi vòng lặp. Nếu giá trị của  Biểu thức  là đúng thì quay lại Bước 1.

Chú ý: Với lệnh while thì Biểu thức điều kiện được kiểm tra trước, nếu đúng mới thực hiện. Với lệnh do...while thì Khối lệnh được thực hiện trước khi kiểm tra Biểu thức , đồng nghĩa với việc Khối lệnh sẽ được thực hiện ít nhất là 1 lần. Biểu thức điều kiện có thể gồm nhiều biểu thức, tuy nhiên tính đúng sai sẽ được căn cứ theo kết quả của biểu thức cuối cùng.

#### 3.3.3. Ví dụ minh họa

*Ví dụ 3.7:  Cho  đoạn  chương trình sau:*

```c
int i = 0;
do
{
    printf("%d",i);
}
while (i++ <4);
```

Kết quả sau khi chạy đoạn chương trình trên sẽ là: `01234`

*Giải thích hoạt động:*

Lệnh do … while khác với while và for ở chỗ nó sẽ thực hiện khối lệnh trước, sau đó mới kiểm tra biểu thức điều kiện. Như trong trường hợp này, lệnh printf ở dòng lệnh số 4 sẽ được thực hiện ít nhất một lần dù biểu thức điều kiện ở dòng 6 có đúng hay không. Ở đây, dòng lệnh 6 vừa có chức năng xét điều kiện vòng lặp vừa làm tăng biến điều kiện. Như vậy, chương trình sẽ thực hiện như sau: đầu tiên lệnh printf được thực hiện, sau đó biểu thức điều kiện được xét để kiểm tra xem biến i có nhỏ hơn 4 không (và sau đó tăng giá trị biến i lên 1), nếu nhỏ hơn thì chương trình quay lại lần lặp tiếp theo, cho đến khi i = 4 thì thoát ra khỏi vòng lặp và kết thúc.

Nếu thay dòng lệnh 6 bằng câu lệnh while (++i<4); thì kết quả sẽ là:

```c
0123
```

Các bạn hãy giải thích xem tại sao? (Lưu ý đến việc toán tử ++ được đặt trước biến i).

Nếu thay dòng lệnh 4 bằng lệnh printf(“%d\n”,i); thì điều gì sẽ xảy ra?

Ví dụ 3.8: Chương trình nhập vào độ dài 3 cạnh của một tam giác và kiểm tra xem các độ dài này có phù hợp không, nếu không phù hợp yêu cầu nhập lại.

```c
#include <stdio.h>
int main(void)
{
    int a,b,c,dk;
    do
    {
        printf("moi ban nhap vao canh 1: ");
        scanf("%d",&a);
        printf("moi ban nhap vao canh 2: ");
        scanf("%d",&b);
        printf("moi ban nhap vao canh 3: ");
        scanf("%d",&c);
        dk=0;
        if((a>=b+c)||(b>=a+c)||(c>=a+b))
        {
            dk=1;
            printf("ban nhap khong dung\n");
            printf("moi ban nhap lai 3 canh \n");
        }
        else
            printf("ban da nhap dung 3 canh tam giac");
    }
    while (dk);
    return 0;
}
```

*Giải thích hoạt động:*

Ví dụ này cho ta thấy kết quả của biểu thức điều kiện của vòng lặp do… while là do khối lệnh của nó tạo ra, tương ứng với dữ liệu nhập vào. Dòng 14 là điều kiện để đảm bảo các giá trị đã nhập vào cho 3 biến sẽ là độ dài 3 cạnh của tam giác: nếu điều này đúng thì thoát ra khỏi vòng lặp, nếu sai thì lặp lại cho đến khi nào đúng thì mới thoát. Kết hợp ví dụ này và ví dụ 2.4 ta sẽ có một bài toán tính chu vi và diện tích của một tam giác và có xét đến các điều kiện của 3 cạnh của tam giác đó.

### 3.4. Câu lệnh break

Câu lệnh break; cho phép thoát khỏi for, while, do...while và switch. Khi có nhiều vòng lặp lồng nhau, câu lệnh break; sẽ đưa máy ra khỏi vòng lặp (hoặc switch) bên trong nhất đang chứa break . Như vậy, lệnh break; cho ta khả năng thoát khỏi vòng lặp từ một điểm bất kỳ bên trong vòng lặp mà không dùng đến điều kiện kết thúc vòng lặp ở biểu thức điều kiện. Mọi câu lệnh break; có thể thay bằng lệnh goto với nhãn ở vị trí thích hợp. Xét chương trình sau:

```c
#include <stdio.h>
int main(void)
{
    int a;
    for(; ;)
    {
        printf("Nhap so duong: ");
        scanf("%d",&a);
        if (a >= 0)
            break;
    }
    return 0;
}
```

Trong chương trình trên, lệnh for(; ;) ở dòng lệnh số 5 sẽ tạo ra một vòng lặp vô tận. Bên trong thân vòng lặp, lệnh break ; ở dòng lệnh số 10 sẽ giúp chương trình thoát khỏi vòng lặp vô tận trên khi xảy ra điều kiện a >= 0. Điều này tương đương với việc vòng lặp sẽ tiếp tục lặp nếu người dùng nhập vào một số a < 0 và chỉ kết thúc bởi lệnh break ; khi người dùng nhập một số a >= 0. *Kết quả của chương trình là:*

```c
Nhap so duong: -4
Nhap so duong: -6
Nhap so duong: 8
```

### 3.5. Câu lệnh continue

Trái với câu lệnh break; (dùng để thoát khỏi vòng lặp), câu lệnh continue; dùng để bắt đầu một lần lặp mới của vòng lặp bên trong nhất đang chứa nó. Nói một cách chính xác hơn thì:

- Khi gặp câu lệnh  continue;  bên trong thân của một lệnh for, các lệnh phía sau lệnh continue của sẽ được bỏ qua, chương trình sẽ tăng biến điều khiển và kiểm tra điều kiện để thực hiện tiếp các lệnh trong vòng lặp nếu điều kiện trả về  True  hoặc dừng lại nếu điều kiện trả về False .
- Khi gặp lệnh continue bên trong thân của while hoặc do... while, chương trình sẽ chuyển tới xác định giá trị  biểu thức  điều kiện (viết sau từ khóa while) và sau đó tiến hành kiểm tra điều kiện kết thúc vòng lặp.

Lưu ý là lệnh continue; chỉ áp dụng cho các vòng lặp chứ không dùng cho lệnh switch.

Ví dụ 3.9 : Ta xét lại ví dụ 3.1 ở trường hợp 3 và thêm vào câu lệnh

```c
continue;  như sau:
#include <stdio.h>
int main(void)
{
    int i=0, a = 3;
    for (; ;)
    {  a ++;
        i++;
        if (i<5) continue;
        break;
    }
    printf("gia tri a la %d",a);return 0;
    return 0;
}
```

*Kết quả sau khi chạy chương trình trên  là:*

`gia tri a la 8` Ở dòng 8, nếu giá trị i thỏa mãn điều kiện i < 5 thì gặp câu lệnh `continue;` nên vòng lặp được tiếp tục thực hiện (lúc này lệnh `break;` ở dòng 9 sẽ không được thực hiện). Đến khi i = 5, điều kiện của lệnh if ở dòng 8 sẽ có kết quả là sai, câu lệnh continue; không được thực hiện, chương trình sẽ chuyển xuống dòng lệnh 9, khi đó lệnh break; được thực hiện và thoát khỏi vòng lặp for và kết thúc chương trình.

### 3.6. Câu lệnh goto và nhãn

Lệnh goto có cú pháp:

```c
goto nhãn;
nhãn:
Lệnh;
```

Nhãn có thể viết như tên biến và có thêm dấu hai chấm (:) đứng sau. Nhãn có thể được gán cho bất kỳ câu lệnh nào trong chương trình.

Khi gặp lệnh này máy sẽ nhảy tới vị trí câu lệnh có nhãn tương ứng với nhãn đã được viết sau từ khóa goto.

Khi dùng lệnh goto cần lưu ý các đặc điểm sau:

- Câu lệnh goto và nhãn cần nằm trong một khối lệnh. Điều này nói lên rằng: lệnh goto chỉ cho phép nhảy từ vị trí này đến vị trí khác trong thân của một hàm. Nó không thể dùng để nhảy từ hàm này sang hàm khác.
- Không cho phép dùng toán tử goto để nhảy từ ngoài vào trong một khối lệnh. Tuy nhiên việc nhảy từ trong ra ngoài khối lệnh lại hoàn toàn hợp lệ.

*Ví dụ 3.10:*

```c
#include <stdio.h>
int main (void)
{
    int a = 1;
    nhan:do
    {
        if(a == 4)
        {
            a = a+2;
            printf("khong in a=4 va a=5!\n");
            goto nhan;
        }
        printf("Gia tri cua a la: %d\n", a);
        a = a+1;
    }while(a < 9);
    return 0;
}
```

Kết quả chạy chương trình là:

```c
Gia tri cua a la: 1
Gia tri cua a la: 2
Gia tri cua a la: 3
khong in a=4 va a=5!
Gia tri cua a la: 6
Gia tri cua a la: 7
Gia tri cua a la: 8
```

Đây là vòng lặp do … while có kết hợp với với lệnh goto… nhãn . Dòng lệnh ở dòng 7 chỉ thực hiện khi a = 4 và lệnh goto ở dòng 11 sẽ được thực hiện.

### 3.7. Bài tập

- [ ] 1.  Hãy tìm và sửa lỗi trong các câu/đoạn lệnh sau:

```c
a. int a, i;
scanf("%d",&a);
printf("Nhap 5 so nguyen: \n");
i = 0;
while (i < 5);
scanf("%d", &a);
i++;
b. float a = -1;
while (a <0 && a > 10)
{
printf("Nhap so trong pham vi 0 - 10: \n");
scanf("%f",&a);
}
c. int a = -1;
while (a <= 0)
do
{
printf("Nhap so > 0: \n");
scanf("%d",&a);
}
d. int b;
do
printf("Nhap so nguyen duong: ");
scanf("%d",&b);
while (a < 0);
e. int kq = 1,i = 0;
int a;
scanf("%d",&a);
for (i < 5)
{
kq = a*kq; i++;
}
printf("%d",kq);
```

**2 . Hãy đọc và phân tích chương trình sau :**

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a =0,i=0;
    while (++i <10)
    {
        if (i%2==0)
            a = a+i;
        else
            a = a+ 2*i;
        if (i == 6)
            break;
    }
    printf("%d", a);
    getch();
    return 0;
}
```

**Yêu cầu:**

- Vẽ lưu đồ hoạt động của chương trình..
- Cho biết kết quả in ra màn hình của chương trình.

- [ ] 3.  Hãy đọc và phân tích chương trình sau :

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a = 0,i, j = 0;
    for (i = 3; i > 0; i--)
    {
        while (j++<10)
        {
            if (j == 7)
                continue;
            if (j%2==1)
                printf("%d",j);
        }
    }
    getch();
    return 0;
}
```

**Yêu cầu:**

- Cho biết kết quả in ra màn hình của chương trình.

**4 . Hãy đọc và phân tích chương trình sau:**

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int n, i, j;
    printf("Nhap vao so n :");
    scanf("%d",&n);
    if (n == 0 || n ==1 || n == 2)
        printf("SNT");
    else
    {
        for (i=2; i<=n; i++)
            if (n %i == 0)
                break;
        if (i==n)
            printf("SNT");
        else
            printf("Khong phai SNT");
    }
    getch();
    return 0;
}
```

**Yêu cầu :**

- Cho biết: Chương trình thực hiện chức năng  gì ?
- Hãy viết lại chương trình khác thực hiện cùng chức năng với chương trình trên.

- [ ] 5.  Viết chương trình nhập vào 2 số nguyên a, b từ bàn phím và in ra tất cả các số nguyên tố trong đoạn [a b].

| Ví dụ  :  Nhap a: | 4 |
| --- | --- |
| Nhap b: | 15 |

Cac so nguyen to trong doan [4 15] la: 7 11 13

| Ví dụ :   Nhap a: | 14 |
| --- | --- |
| Nhap b: | 16 |

Khong co so nguyen to trong doan [14 16].

- [ ] 6.  Viết chương trình nhập vào 2 số nguyên a và b và chỉ chấp nhận b > a > 0. Tìm và in ra ước số chung lớn nhất và bội số chung nhỏ nhất của 2 số này.
- [ ] 7.  Viết chương trình nhập vào số nguyên n, tính và in ra tổng sau:

| 1 | 1 | 1 | 1 |
| --- | --- | --- | --- |
| S = 1 + | + | + | + ... + |
| 1 + 2 1 + 2 + 3 1 + 2 + 3 + 4 | 1 + 2 + 3 + 4 + ... + n |  |  |

- [ ] 8.  Viết chương trình giải bài toán trăm trâu trăm cỏ.

- Có 100 con trâu và 100 bó cỏ.
- Trâu đứng ăn 5 (bó cỏ), trâu nằm ăn 3 (bó cỏ), trâu già 3 con 1 bó (cỏ).
- Hỏi có bao nhiêu trâu đứng, bao nhiêu trâu nằm và bao nhiêu trâu già.

- [ ] 9.  Viết chương trình xử lý các yêu cầu sau: không thỏa mãn yêu cầu trên thì bắt buộc người dùng nhập lại cho tới khi nào thỏa mãn yêu cầu.

- Nhập vào một số nguyên n và chỉ chấp nhận giá trị n > 0, nếu
- Tính và in ra tổng của tất cả các ước số của n trong đoạn [1 n].

## Chương 4. Mảng và chuỗi

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Khai báo được mảng 1 chiều, mảng 2 chiều, chuỗi, mảng chuỗi.
- Ứng dụng được các thao tác xử lý trên mảng: nhập dữ liệu, xuất dữ liệu, tìm số lớn nhất/nhỏ nhất, sắp xếp.

### 4.1. Mảng

Mảng là tập hợp các phần tử có cùng kiểu dữ liệu và các phần tử trong mảng được cấp các địa chỉ ô nhớ liền kề nhau.

#### 4.1.1. Mảng 1 chiều

##### 4.1.1.1. Khai báo mảng 1 chiều:

- Cú pháp 1:   kiểu dữ liệu    tên mảng [số phần tử];

Ví dụ 4.1a: int a[10];

**Mỗi phần tử trong mảng có kiểu  int**

10 phần tử Với cách khai báo như ví dụ 4.1a thì mảng a gồm 10 phần tử, các phần tử trong mảng này có kiểu dữ liệu là int (có kích thước vùng nhớ là 4 byte), vùng nhớ của các phần tử này liên tiếp nhau trong vùng nhớ từ phần tử a[0] đến phần tử a[9].

Khi kháo báo như trên, các phần tử mảng được tham chiếu như sau:

![Vùng nhớ của mảng a gồm 10 phần tử, truy xuất qua chỉ số a[2] và a[7].](assets/giaotrinh-c/hinh-97-56-0.png)

Ta xem kết quả của chương trình sau để hiểu rõ hơn.

*Ví dụ 4.1b:*

```c
#include <stdio.h>
int main(void)
{
    int   a[10];
    printf("kich thuoc cua a[0] la: %d",sizeof(a[0]));
    printf("\ndia chi cua a[0] la: %d",&a[0]);
    printf("\ndia chi cua a[1] la: %d",&a[1]);
    printf("\ndia chi cua a[2] la: %d",&a[2]);
    printf("\ndia chi cua a[3] la: %d",&a[3]);
    printf("\ndia chi cua a[4] la: %d",&a[4]);
    printf("\ndia chi cua a[5] la: %d",&a[5]);
    printf("\ndia chi cua a[6] la: %d",&a[6]);
    printf("\ndia chi cua a[7] la: %d",&a[7]);
    printf("\ndia chi cua a[8] la: %d",&a[8]);
    printf("\ndia chi cua a[9] la: %d",&a[9]);
    return 0;
}
```

*Giải thích chương trình:*

Ở dòng lệnh số 5 có câu lệnh sizeof() , ý nghĩa của câu lệnh này là lấy kích thước tính theo byte của một biến bất kỳ. Dòng lệnh 6 có câu lệnh &a[0]: ý nghĩa của câu lệnh này là lấy địa chỉ đầu tiên của biến a[0]. Các câu lệnh ở các dòng phía dưới sẽ lấy và in ra địa chỉ của các phần tử còn lại của mảng. Kết quả khi chạy chương trình trên sẽ là:

```c
kich thuoc cua a[0] la: 4
dia chi cua a[0] la: 2686664
dia chi cua a[1] la: 2686668
dia chi cua a[2] la: 2686672
dia chi cua a[3] la: 2686676
dia chi cua a[4] la: 2686680
dia chi cua a[5] la: 2686684
dia chi cua a[6] la: 2686688
dia chi cua a[7] la: 2686692
```

10 dia chi cua a[8] la: 2686696 11 dia chi cua a[9] la: 2686700 Với kết quả trên cho thấy địa chỉ trong bộ nhớ của các biến trong mảng là liền kề nhau và tăng dần từ a[0] đến a[9], mỗi biến có kích thước là 4 byte.

- Cú pháp 2:  kiểu dữ liệu    tên mảng [số phần tử]= {giá trị};

Ví dụ 4.2: int a[10] = {5,7,9};

![Mảng a được khởi tạo a[10] = {5, 7, 9}; các phần tử còn lại bằng 0.](assets/giaotrinh-c/hinh-98-56-16.png)

Với cách khai báo như trong ví dụ 4.2 thì các phần tử a[0], a[1], a[2] là đã được gán giá trị ban đầu lần lượt là 5, 7 và 9, các phần tử còn lại sẽ được khởi tạo bằng 0. Xem ví dụ này qua chương trình dưới đây:

```c
#include <stdio.h>
int main(void)
{
    int  a[10] = {5,7,9};
    printf("gia tri phan tu a[0] la: %d",a[0]);
    printf("\ngia tri phan tu a[1] la: %d",a[1]);
    printf("\ngia tri phan tu a[2] la: %d",a[2]);
    printf("\ngia tri phan tu a[3] la: %d",a[3]);
    printf("\ngia tri phan tu a[4] la: %d",a[4]);
    printf("\ngia tri phan tu a[5] la: %d",a[5]);
    return 0;
}
```

**Khi chạy chương trình trên, ta  được kết quả sau:**

```c
gia tri phan tu a[0] la: 5
gia tri phan tu a[1] la: 7
gia tri phan tu a[2] la: 9
gia tri phan tu a[3] la: 0
gia tri phan tu a[4] la: 0
gia tri phan tu a[5] la: 0
Cú pháp 3:  kiểu dữ liệu    tên mảng [ ] = {giá trị};
Ví dụ 4.3:   int  a[] = {5,7,9,3,4,6,8,1,2,5};
```

![Mảng a được khởi tạo đầy đủ 10 giá trị.](assets/giaotrinh-c/hinh-99-56-14.png)

Với cách khai báo như ví dụ 4.3 thì máy sẽ tạo ra một mảng a có số phần tử mảng đúng bằng số lượng các giá trị được khởi tạo trong cặp dấu ngoặc nhọn { }. Và giá trị của từng phần tử cũng tương ứng với các giá trị đã được khai báo trong cặp dấu ngoặc nhọn { } này. Chương trình và kết quả chạy ở dưới đây thể hiện điều đó.

```c
#include <stdio.h>
int main(void)
{
    int  a[10] = {5,7,9,3,4,6,8,1,2,5};
    printf("gia tri phan tu a[0] la: %d",a[0]);
    printf("\ngia tri phan tu a[1] la: %d",a[1]);
    printf("\ngia tri phan tu a[2] la: %d",a[2]);
    printf("\ngia tri phan tu a[3] la: %d",a[3]);
    printf("\ngia tri phan tu a[4] la: %d",a[4]);
    printf("\ngia tri phan tu a[5] la: %d",a[5]);
    printf("\ngia tri phan tu a[6] la: %d",a[6]);
    printf("\ngia tri phan tu a[7] la: %d",a[7]);
    printf("\ngia tri phan tu a[8] la: %d",a[8]);
    printf("\ngia tri phan tu a[9] la: %d",a[9]);
    return 0;
}
```

Kết quả chạy chương trình:

```c
gia tri phan tu a[0] la: 5
gia tri phan tu a[1] la: 7
gia tri phan tu a[2] la: 9
gia tri phan tu a[3] la: 3
gia tri phan tu a[4] la: 4
gia tri phan tu a[5] la: 6
gia tri phan tu a[6] la: 8
gia tri phan tu a[7] la: 1
gia tri phan tu a[8] la: 2
gia tri phan tu a[9] la: 5
```

Phần trên đây đã trình bày 3 cú pháp khai báo của mảng một chiều. Cũng cần lưu ý thêm, khi ta đã khai báo mảng một chiều và gán giá trị ban đầu cho các phần tử thì những phần tử nếu chưa được gán giá trị sẽ có giá trị bằng 0. Nếu khai báo 1 mảng là bao nhiêu phần tử thì chương trình sẽ tạo ra một số lượng các ô nhớ tương ứng cho dù ta có dùng hay không dùng đến, do vậy, ta cần khai báo một mảng có kích thước phù hợp với dự định sẽ dùng để tránh lãng phí bộ nhớ.

##### 4.1.1.2. Các thao tác cơ bản trên mảng 1 chiều:

- Nhập giá trị cho các phần tử mảng:

*Ví dụ 4.4:  Nhập giá trị cho mảng từ bàn phím:*

```c
int a[10], i;
for (i=0; i<10; i++)
{
    printf("nhap phan tu thu %d: ", i);
    scanf("%d", &a[i]);
}
```

Xuất giá trị các phần tử mảng:

Ví dụ 4.5: Xuất ra màn hình các giá trị của một mảng cho trước.

```c
int a[5]={1,2,3};
for (i = 0; i<5; i++)
{
    printf("%d  ", a[i]);
}
```

Tìm giá trị lớn nhất trong các phần tử mảng:

Ví dụ 4.5a: Tìm giá trị lớn nhất trong một mảng cho trước và in ra giá trị này:

```c
int a[6]={1,7,9,6,8,2};
int max, i;
max = a[0];
for (i=1; i<6; i++)
{
    if(max < a[i])
        max = a[i];
}
printf("gia tri lon nhat la %d", max);
```

*Kết quả thu được khi chạy  ví dụ 4.5a là:*

`gia tri lon nhat la 9`

*Giải thích hoạt động:*

Trong đoạn chương trình trên, biến max được dùng để so sánh giá trị của các phần tử trong mảng. Đầu tiên, biến max được gán dữ liệu là giá trị của phần tử a[0], sau đó bằng vòng lặp for (từ dòng 4 đến hết dòng 8) max sẽ được so sánh với tất cả các phần tử còn lại trong mảng. Trong quá trình so sánh, nếu giá trị nào lớn hơn max (biểu thức ở dòng 6) thì gán max bằng giá trị phần tử đó (dòng 7). Khi kết thúc vòng lặp thì max là giá trị lớn nhất cần tìm.

*Ví dụ 4.5b: Tìm  giá trị và vị trí của phần tử lớn nhất trong mảng:*

```c
int a[6]={1,7,9,6,8,2};
int max, i, j;
max = a[0];
for (i=1; i<6; i++)
{
    if(max < a[i])
    {
        max = a[i];
        j=i;
    }
}
printf("phan tu lon nhat mang la a[%d] ", j);
printf("\ngia tri cua a[%d] la %d", j, max);
```

*Và kết quả thu được khi chạy  ví dụ 4.5b là:*

```c
phan tu lon nhat mang la a[2]
gia tri cua a[2] la 9
```

*Giải thích hoạt động :*

Ở ví dụ 4.5b này chỉ khác ví dụ 4.5a ở dòng lệnh 9. Dòng lệnh này nhằm để gán cho biến j chỉ số mảng của phần tử có giá trị lớn nhất để khi in ra giá trị đúng yêu cầu của đề bài.

*Ví dụ 4.5c: Tìm giá trị nhỏ nhất trong mảng:*

```c
int a[6]={1,7,9,6,8,2};
int min, i;
min = a[0];
for (i=1; i<6; i++)
{
    if(min > a[i])
        min = a[i];
}
printf("%d", min);
```

*Giải thích hoạt động:*

Ví dụ 4.5c này khác với ví dụ 4.5a ở ý nghĩa tìm min so với tìm max (ở dòng lệnh số 6). Lưu ý thêm là ta hoàn toàn có thể gộp các ví dụ 4.5a, 4.5b, 4.5c vào trong một chương trình nếu được yêu cầu.

- Sắp xếp mảng:

Ví dụ 4.6 : Sắp xếp các giá trị của một mảng cho trước theo thứ tự giảm dần:

```c
int a[6]={1,7,9,6,8,2};
int  tam,i,j;
for (i=0; i<5; i++)
    for (j = i+1; j<6; j++)
        if (a [i]< a[j])
{
    tam = a[i];
    a[i]= a[j];
    a[j]= tam;
}
for (i=0; i<6; i++)
{
    printf ("%d", a[i]);
}
```

*Kết quả thu được khi chạy chương trình ở  ví dụ 4.6  là:*

`987621`

*Giải thích hoạt động :*

Đây là một bài toán khá điển hình về mảng nói chung và mảng một chiều nói riêng. Để sắp xếp mảng bắt thì buộc phải dùng 2 vòng for lồng vào nhau. Với vòng for bên trong, sau khi chạy hết vòng for này ta sẽ được một giá trị lớn nhất (do dòng lệnh số 5 với điều kiện so sánh (a[i]<a[j])) và được đặt ở ví trí đầu tiên trong mảng. Vòng for ngoài sẽ thay đổi vị trí để tìm giá trị lớn tiếp theo và đặt ở vị trí kế tiếp với giá trị đã tìm được trước đó. Cứ như vậy cho đến khi kết thúc 2 vòng for.

Cụ thể:

+ Với i = 0; j = 1, 2, 3, 4, 5: đầu tiên chương trình sẽ so sánh giá trị của phần tử a[0] với giá trị của a[1], nếu a[1] lớn hơn a[0] thì hoán đổi giá trị của a[0] và giá trị của a[1], lúc đó giá trị của a[0] sẽ lớn hơn giá trị của a[1]. Tiếp tục so sánh a[0] với a[2]…. Và chương trình chạy cho đến giá trị j = 5 (hết vòng for bên trong) thì ta thu được mảng a khi đó là: a[]={9,1,7,6,8,2}.

+ i =1: máy sẽ bắt đầu so sánh từ phần tử a[1] (vì ta đã tìm được giá trí a[0] là lớn nhất) và làm như đã giải thích ở phần trên, ta sẽ tìm được a[]={9,8,1,6,7,2}.

+ i = 2: ta tìm tiếp được a[]={9,8,7,1,6,2}.

+ i = 3, ta tìm tiếp được a[]={9,8,7,6,1,2}.

+ i = 4, ta tìm tiếp được a[]={9,8,7,6,2,1}.

Các dòng lệnh từ 11 đến hết dòng 14 là vòng lặp for giúp chương trình in ra các giá trị của mảng đã được sắp xếp.

Nếu với yêu cầu sắp xếp mảng và in ra giá trị từ lớn đến bé ta chỉ cần thay đổi điều kiện so sánh ở dòng lệnh số 5 thành: if (a[i] >a[j]).Khi đó, sau khi chạy xong chương trình, ta sẽ được mảng a[]={1,2,6,7,8,9}.

Ví dụ 4.7: Chương trình nhập giá trị của mảng 10 phần tử từ bàn phím và sắp xếp và in ra mảng theo thứ tự tăng dần.

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a[10], i, j, tam;
    for (i=0; i<10; i++)
    {
        printf("nhap phan tu thu %d: ", i) ;
        scanf("%d",&a[i]);
    }
    for (i=0; i<9; i++)
        for (j = i+1; j<10; j++)
            if (a [i]> a[j])
    {
        tam = a[i];
        a[i]= a[j];
        a[j]= tam;
    }
    for (i=0; i<10; i++)
    {
        printf("%d", a[i]);
    }
    getch();
    return 0;
}
```

Ví dụ 4.7 là sự mở rộng thêm của ví dụ 4.6, với các dòng lệnh từ số 7 đến số 11 giúp ta có thể nhập giá trị của một mảng từ bàn phím. Và điều kiện ở dòng lệnh 15 giúp cho việc sắp xếp các giá trị của mảng sẽ theo thứ tự từ bé đến lớn.

#### 4.1.2. Mảng 2 chiều

Mảng 2 chiều là mảng gồm chiều ngang và chiều dọc hay mảng gồm hàng và cột (mảng một chiều có thể xem là một mảng 2 chiều có số hàng là 1 và số cột là số lượng phần tử của mảng).

##### 4.1.2.1. Khai báo:

Cú pháp : kiểu dữ liệu tên mảng [số hàng][số cột];

Ví dụ 4.8: int a[5][10];

**Mỗi phần tử trong mảng có kiểu  int**

![Mảng 2 chiều a gồm 5 hàng và 10 cột.](assets/giaotrinh-c/hinh-106-59-10.png)

Tham chiếu tới từng phần tử mảng:

![Tham chiếu tới từng phần tử mảng 2 chiều: a[3][2], a[1][5] và a[4][8].](assets/giaotrinh-c/hinh-106-59-12.png)

Ví dụ 4.9a: Gán giá trị cho các phần tử trong mảng: gán đầy đủ các giá trị cho các phần tử.

```c
int b[ 2 ][ 2 ] = { { 1, 2 }, { 3, 4 } };
```

Như vậy ta sẽ được các giá trị của từng phần tử mảng 2 chiều như sau:

```c
b[0][0]=1
b[0][1]=2
b[1][0]=3
b[1][1]=4
```

Ví dụ 4.9b: Gán các giá trị cho các phần tử trong mảng bằng cách khác:

```c
int a1[ 2 ][ 3 ] = { 1, 2, 3, 4, 5 };
```

Khi đó, kết quả các phần tử của mảng này sẽ là:

```c
a1[0][0]=1
a1[0][1]=2
a1[0][2]=3
a1[1][0]=4
a1[1][1]=5
a1[1][2]=0
```

Ví dụ 4.9c: Gán giá trị cho các phần tử trong mảng: gán không đầy đủ các giá trị cho các phần tử.

```c
int a2[ 2 ][ 3 ] = { { 1, 2 }, { 4 } };
```

Khi đó, các phần tử trong mảng này có giá trị là:

```c
a2[0][0]=1
a2[0][1]=2
a2[0][2]=0
a2[1][0]=4
a2[1][1]=0
a2[1][2]=0
```

##### 4.1.2.2. Các thao tác cơ bản trên mảng 2 chiều:

- Nhập giá trị cho mảng:

*Ví dụ 4.10:*

```c
int  a[5][10];
int i, j;
for (i=0; i<5; i++)
    for(j=0; j<10; j++)
{
    printf("Nhap phan tu %d %d",i, j);
    scanf("%d", &a[i][j]) ;
}
```

Thứ tự nhập dữ liệu vào mảng 2 chiều:

![Thứ tự nhập dữ liệu vào mảng 2 chiều a[5][10]: duyệt lần lượt theo từng hàng từ trái sang phải.](assets/giaotrinh-c/hinh-mang-2-chieu-nhap.png)

- In giá trị các phần tử mảng ra màn hình:

*Ví dụ 4.11:*

```c
int  a[3][2]={{1,2},{2,3},{3,4}};
int i,j;
for (i=0;i<3;i++)
{
    for(j=0;j<2;j++)
    {
        printf ("%d", a[i][j]);
    }
    printf("\n");
}
```

Ví dụ 4.12: Chương trình sau sẽ in ra số lớn nhất trên từng hàng của một mảng 2 chiều nhập vào từ bàn phím.

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a[5][4], i,j,max;
    for (i=0;i<5;i++)
        for(j=0;j<4;j++)
    {
        printf("Nhap phan tu %d %d: ",i, j);
        scanf("%d", &a[i][j]) ;
    }
    for (i=0; i<5; i++)
    {
        max = a[i][0];
        for(j=0;j<4;j++)
        {
            if (max < a[i][j])
                max = a[i][j];
        }
        printf("%d\n", max);
    }
    getch();
    return 0;
}
```

### 4.2. Chuỗi và mảng chuỗi

#### 4.2.1. Chuỗi

##### 4.2.1.1. Định nghĩa:

Chuỗi là mảng 1 chiều các phần tử kiểu ký tự, kết thúc bằng ký tự NULL.

##### 4.2.1.2. Khai báo chuỗi:

- Cú pháp 1: char    tên chuỗi[số phần tử]; Ví dụ 4.13:   char  s[10];

**Mỗi phần tử trong chuỗi có kiểu  char**

![Chuỗi s gồm 10 phần tử kiểu char, phần tử cuối lưu ký tự kết thúc chuỗi.](assets/giaotrinh-c/hinh-110-64-4.png)

- Cú pháp 2: char     tên chuỗi[]= “Nội dung”; Ví dụ 4.14:  char s[] = “HelloDTVT”;

**Mỗi phần tử trong chuỗi có kiểu  char**

![Chuỗi “HelloDTVT” được lưu trong 10 ô nhớ, kết thúc bằng ký tự “\0”.](assets/giaotrinh-c/hinh-110-64-9.png)

##### 4.2.1.3. Xuất, nhập chuỗi

Hàm nhập chuỗi: gets (biến chuỗi); Hàm xuất chuỗi: puts (biến chuỗi); Xét chương trình sau:

```c
#include <stdio.h>
int main(void)
{
    char s[40];
    printf("Hay nhap 1 chuoi: \n");
    gets(s);
    printf("Chuoi da nhap la: \n");
    puts(s);
    return 0;
}
```

Trong chương trình này, lệnh gets(s); ở dòng lệnh số 7 sẽ chờ người dùng nhập vào một chuỗi dữ liệu và lưu vào biến chuỗi s. Lệnh puts(s); ở dòng lệnh số 10 sẽ in nội dung của dữ liệu trong biến s ra màn hình. Kết quả thu được khi chạy chương trình trên sẽ là:

```c
Hay nhap 1 chuoi:
Xin chao!
Chuoi da nhap la:
Xin chao!
```

với chuỗi Xin chao! ở dòng kết quả số 2 là dữ liệu người dùng nhập vào từ bàn phím.

##### 4.2.1.4. Các thao tác trên từng phần tử của chuỗi

Ta có thể thao tác trên từng phần tử của một chuỗi tương tự như thao tác trên từng phần tử mảng 1 chiều.

Xét chương trình sau:

```c
#include <stdio.h>
int main(void)
{
    char s[10] = "Hello";
    int i,dem;
    dem = 0;
    for(i = 0; i < 10; i++)
        if(s[i] == 'e')
            dem++;
    printf("Co %d ky tu e.",dem);
    return 0;
}
```

Trong chương trình này, từng phần tử s[i] của chuỗi s sẽ được kiểm tra và so sánh với ký tự 'e' để thực hiện thao tác đếm số lượng ký tự 'e' đang tồn tại trong chuỗi s. Kết quả thu được khi chạy chương trình trên sẽ là: `Co 1 ky tu e.`

#### 4.2.2. Mảng chuỗi

##### 4.2.2.1. Định nghĩa:

Là mảng 2 chiều các ký tự, mỗi hàng sẽ được kết thúc bằng một ký tự NULL.

##### 4.2.2.2. Khai báo mảng chuỗi:

- Cú pháp 1: char     tên mảng chuỗi [số hàng][số cột];

*Ví dụ 4.15:   char   s[5][10]:*

**Mỗi phần tử trong mảng chuỗi có kiểu  char**

![Mảng chuỗi s gồm 5 hàng và 10 cột, mỗi hàng là một chuỗi kết thúc bằng “\0”.](assets/giaotrinh-c/hinh-112-69-13.png)

- Cú pháp 2: char     tên mảng chuỗi [số hàng][số cột]= {“nội dung”};

*Ví dụ 4.16:   char s[5][10]={“Mot”, “Hai”, “Ba”, “Bon”, “Nam”}:*

**Mỗi phần tử trong mảng chuỗi có kiểu  char**

![Mảng chuỗi s[5][10] chứa các giá trị “Mot”, “Hai”, “Ba”, “Bon”, “Nam”.](assets/giaotrinh-c/hinh-112-69-18.png)

##### 4.2.2.3. Các thao tác trên mảng chuỗi

- Thao tác trên từng hàng:  Mỗi hàng được xem làm một chuỗi, việc thao tác trên từng hàng tương tự như thao tác trên từng chuỗi.

*Ví dụ 4.17:*

```c
char s[5][10];
int i;
for (i=0;i<5;i++)
{
    puts ("Nhap chuoi");
    gets (s[i]);
}
```

Thao tác trên từng phần tử: mỗi phần tử trong mảng chuỗi có kiểu char, việc thao tác trên từng phần tử mảng chuỗi tương tự như thao tác trên từng phần tử mảng 2 chiều.

*Ví dụ 4.18:*

```c
char   s[5][10]={"Mot", "Hai", "Ba", "Bon", "Nam"};
int i,j;
for (i = 0; i < 5; i++)
    for (j=0; j <10; j++)
        printf ("%c",s[i][j]);
```

#### 4.2.3. Một số hàm liên quan đến ký tự và chuỗi ký tự

- Hàm atof

Cú pháp: double atof(const char *s); // Phải khai báo thư viện math.h hoặc stdlib.h.

Hàm có chức năng chuyển đổi 1 chuỗi sang giá trị double.

*Ví dụ 4.19:*

```c
float f;
char str[] = "12345.67";
f= atof(str);
puts(str);
printf ("%.2f", f);
```

Kết quả :

```c
12345.67
12345.67
```

- Hàm atoi

Cú pháp: int atoi(const char *s); // Phải khai báo thư viện stdlib.h.

Hàm có chức năng chuyển đổi 1 chuỗi sang giá trị kiểu int.

*Ví dụ 4.20:*

```c
int i;
char str[] = "12345.67";
i = atoi(str);
printf ("%d", i);
```

Kết quả `12345`

- Hàm itoa

Cú pháp: char *itoa(int value, char *string, int radix); // Phải khai báo thư viện stdlib.h Hàm có chức năng chuyển đổi số nguyên value sang chuỗi string theo cơ số radix .

*Ví dụ 4.21a:*

```c
int number = 12345;
char string[25];
itoa(number, string, 10);
puts(string);
```

Kết quả: `12345`

*Ví dụ 4.21b:  chuyển đổi số sang chuỗi theo cơ số 2:*

```c
int number = 12345;
char string[25];
itoa(number, string, 2);
puts(string);
```

Kết quả: `11000000111001`

- Hàm tolower Cú pháp: int tolower(int ch);   //  Phải khai báo thư viện ctype.h Hàm có chức năng đổi chữ hoa sang chữ thường.

*Ví dụ 4.22:*

```c
int len, i;
char string[] = "XIN CHAO";
len = strlen(string);
for (i = 0; i < len; i++)
string[i] = tolower(string[i]);
puts(string);
```

Kết quả khi chạy chương trình: `xin chao`

- Hàm toupper Cú pháp: int toupper(int ch);   //  Phải khai báo thư viện ctype.h Hàm có chức năng đổi chữ thường sang chữ hoa.

*Ví dụ 4.23:*

```c
int len, i;
char string[] = "xin chao";
len = strlen(string);
for (i = 0; i < len; i++)
string[i] = toupper(string[i]);
puts(string);
```

Kết quả khi chạy chương trình: `XIN CHAO`

- Hàm strcat

Cú pháp: char *strcat(char *dest, const char *src); // Phải khai báo thư viện string.h.

Hàm có chức năng thêm chuỗi src vào sau chuỗi dest.

Lưu ý: cú pháp trên có ký hiệu *, đây là ký hiệu của con trỏ sẽ trình bày ở chương 5. Ở đây, ta hiểu đơn giản đây phải là tên của chuỗi hay mảng.

```c
char dich[25];
char s2[]=" ",s3[]="chao",s1[]="Xin";
strcat(dich, s1);
strcat(dich, s2);
strcat(dich, s3);
puts(dich);
```

Kết quả khi chạy chương trình: `Xin chao`

- Hàm strcpy

Cú pháp: char *strcpy(char *dest, const char *src); //Phải khai báo thư viện string.h.

Hàm có chức năng chép chuỗi src vào dest.

*Ví dụ 4.24:*

```c
char dich[25];
char nguon[]="Xin chao";
strcpy(dich, nguon);
puts(dich);
```

Kết quả khi chạy chương trình:

```c
Xin chao
```

- Hàm strcmp

Cú pháp: int *strcmp(const char *s1, const char *s2); // Phải khai báo thư viện string.h.

Hàm có chức năng so sánh chuỗi s1 với chuỗi s2. Kết quả trả về:

- < 0 nếu s1 < s2
- = 0 nếu s1 = s2
- \> 0 nếu s1 > s2

*Ví dụ 4.25:*

```c
int a, b, c;
char s1[] ="aaa",s2[]="bbb",s3[]= "aaa";
a=strcmp(s1, s2); //ket qua tra ve - 1
printf("%d",a);
b=strcmp(s1, s3); //ket qua tra ve 0
printf("\n %d",b);
c=strcmp(s2, s3); //ket qua tra ve 1
printf("\n %d",c);
```

Kết quả khi chạy chương trình:

```c
-1
```

- Hàm strlwr

Cú pháp: char *strlwr(char *s); // Phải khai báo thư viện string.h Hàm có chức năng là chuyển chuỗi s sang chữ thường

*Ví dụ 4. 26 :*

```c
char s[10] = "Xin Chao";
puts(strlwr(s));
```

Kết quả khi chạy chương trình: `xin chao`

- Hàm strupr

Cú pháp : char *strupr(char *s); // Phải khai báo thư viện string.h Hàm có chức năng là chuyển chuỗi s sang chữ hoa

*Ví dụ 4.27:*

```c
char s[10] = "Xin Chao";
puts(strupr(s));
```

Kết quả khi chạy chương trình: `XIN CHAO`

- Hàm strlen

Cú pháp: int strlen(const char *s); //Phải khai báo thư viện string.h Hàm có chức năng là trả về độ dài chuỗi s.

*Ví dụ 4.28:*

```c
char s[] = "Xin chao";
int len_s;
len_s = strlen(s);
printf("%d",len_s);
```

Kết quả khi chạy chương trình: `8`

### 4.3 bài tập

- [ ] 1.  Hãy tìm và sửa lỗi trong các câu/đoạn lệnh sau:

```c
a. int a[5] = {1};
printf("%d",a(2));
b. int a[5], i;
for(i = 1; i <= 5; i++)
scanf("%d",&a[i]);
c. int a[5], i;
printf("Nhap mang 5 phan tu: \n");
for(i = 0; i < 5; i++)
scanf("%d",&i);
printf("Mang da nhap:\n ");
for(i = 0; i < 5; i++)
printf("%d  ",a[i]);
d. min = a[0];
for(i = 1; i < 5; i++)
if(min > a[i])
a[i] = min;
printf("So nho nhat: %d\n",min);
e. float a[2,3]= {{2,5},{7,4}};
```

- [ ] 2.  Hãy đọc và phân tích chương trình sau :

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a[10],i, flag=0;
    for (i=0; i<10; i++)
    {
        printf("nhap phan tu thu %d: ", i);
        scanf("%d",&a[i]);
    }
    for (i=0; i<10; i++)
    {
        if ((a[i]%2 == 1)&&(a[i]>=20))
        {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        printf("Co");
    else
        printf("Khong");
    getch();
    return 0;
}
```

**Yêu cầu:**

- Cho biết chức năng của chương trình là gì?

- [ ] 3.  Hãy đọc và phân tích chương trình sau :

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int a[10],i, dem=0;
    for (i=0; i<10; i++)
    {
        printf("nhap phan tu thu %d: ", i);
        scanf("%d",&a[i]);
    }
    for (i=0; i<10; i++)
    {
        if ((a[i]%5 == 0))
            dem++;
    }
    printf ("co %d phan tu thoa yeu cau", dem);
    getch();
    return 0;
}
```

**Yêu cầu:**

- Cho biết chức năng của chương trình là gì?

- [ ] 4.  Hãy đọc và phân tích chương trình sau:

```c
#include <stdio.h>
#include <conio.h>
int main (void)
{
    int  a[10],b[10],c[10],i, j=0,k=0;
    for (i=0; i<10; i++)
    {
        printf("nhap phan tu thu %d: ", i);
        scanf("%d",&a[i]);
    }
    for (i=0; i<10; i++)
    {
        if ((a[i]%2 == 0))
            b[j++]=a[i];
        if ((a[i]%2 != 0))
            c[k++]=a[i];
    }
    for (i=0; i<j; i++)
    {
        printf ("%d", b[i]);
    }
    printf("\n");
    for (i=0; i<k; i++)
    {
        printf ("%d", c[i]);
    }
    getch();
    return 0;
}
```

**Yêu cầu :**

- Cho biết chức năng của chương trình là gì?

- [ ] 5.  Viết một chương trình thực hiện các yêu cầu sau:

a. Nhập vào điểm kết thúc môn C của một lớp học gồm 35 sinh viên.

b. Cho biết lớp có sinh viên đạt điểm 10.0 hay không.

c. Cho biết tỉ lệ % đậu và tỉ lệ % rớt của lớp.

d. Cho biết điểm rớt cao nhất của lớp là bao nhiêu.

- [ ] 6.  Viết chương trình nhập vào một mảng gồm  10  số nguyên, tìm và in ra các số nguyên tố có trong mảng; nếu không có in ra thông báo.
- [ ] 7.  Viết chương trình nhập vào một mảng gồm  10  số nguyên, yêu cầu: không cho phép nhập số âm. Sau đó tiến hành sắp xếp mảng theo thứ tự số lẻ tăng dần và số chẵn giảm dần; in ra mảng đã sắp xếp.
- [ ] 8.  Viết chương trình nhập vào một ma trận  3x4  các số nguyên, sắp xếp từng hàng của ma trận theo thứ tự tăng dần và in ra.
- [ ] 9.  Viết chương trình nhập vào một ma trận  4x4  các số nguyên, không cho phép nhập số âm. Tìm và in ra phần tử lớn nhất trên đường chéo chính của ma trận.
- [ ] 10.  Viết một chương trình thực hiện các yêu cầu sau:

a. Nhập vào điểm giữa kỳ và cuối kỳ môn C của một lớp học gồm 25 sinh viên, lưu vào 1 mảng 2 chiều.

b. Cho biết tỉ lệ % đậu và tỉ lệ % rớt của lớp.

- [ ] 11.  Viết chương trình nhập vào 1 danh sách  họ và tên  gồm 5 người.

a. In ra danh sách họ tên những người đã nhập.

b. In ra danh sách tên những người đã nhập.

## Chương 5. Con trỏ

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Khai báo được biến con trỏ.
- Ứng dụng biến con trỏ trong các thao tác xử lý: trỏ tới vùng nhớ khác, cấp phát bộ nhớ động cho con trỏ.

### 5.1. Giới thiệu

Con trỏ (pointer) còn được một số tài liệu gọi là biến con trỏ. Thực tế, con trỏ hay biến con trỏ đều như nhau, bởi con trỏ là biến nhưng là một biến được sử dụng đặc biệt so với các biến thông thường khác. Con trỏ là một biến mà nội dung của nó chứa địa chỉ của một biến khác. Định nghĩa con trỏ nghe có vẻ hơi trừu tượng và người đọc khó có thể hình dung được chức năng của con trỏ, so với các biến khác.

Chương này sẽ giới thiệu cách thức sử dụng biến con trỏ, cũng như tác dụng của biến con trỏ trong việc truy xuất vùng nhớ. Con trỏ được sử dụng khá nhiều trong ngôn ngữ C, C++, và đặc biệt trong lập trình cho vi xử lý, vi điều khiển sử dụng ngôn ngữ C/C++. Sử dụng tốt biến con trỏ cho phép người lập trình tối ưu hóa được vùng nhớ, nâng cao hiệu suất của chương trình. Có thể hiểu, con trỏ là một đơn vị gián tiếp, cho phép truy xuất đến bộ nhớ thông qua địa chỉ. Trong lập trình cấp cao, các khái niệm về bộ nhớ, thanh ghi thông thường bị quên lãngvì người viết chương trình sử dụng ngôn ngữ cấp cao và các biến được đặt tên theo kiểu gợi nhớ. Để hiểu và sử dụng tốt con trỏ, chương này sẽ giới thiệu sơ lược về biến, vùng nhớ, địa chỉ, nằm giúp người đọc hiểu cách con trỏ được sử dụng trong việc truy xuất bộ nhớ. Ngoài việc được sử dụng để truy xuất các biến riêng lẻ trong bộ nhớ, con trỏ chủ yếu còn được sử dụng để truy xuất các vùng nhớ liên tục. Phần cuối chương sẽ trình bày về ứng dụng của con trỏ trong việc cấp phát bộ nhớ động.

### 5.2. Khai báo và sử dụng con trỏ

Giống như các biến khác, con trỏ phải được khai báo trước khi sử dụng. Khai báo biến con trỏ cũng giống như khai báo các biến thông thường khác được bắt đầu với kiểu dữ liệu. Tuy nhiên, kiểu dữ liệu khi khai báo con trỏ không xác định độ dài ô nhớ mà xác định kiểu dữ liệu con trỏ được dùng để trỏ tới. Kiểu dữ liệu này giúp cho con trỏ có thể tăng địa chỉ thích hợp khi trỏ đến các phần tử liên tiếp nhau. Cú pháp khai báo con trỏ như sau:

```c
Tên kiểu dữ liệu *tên con trỏ;
```

*Ví dụ:*

```c
int a, b ;
int *p ;
```

Trong đoạn chương trình trên, ở dòng lệnh số 1 là khai báo 2 biến a và b, 2 biến a và b cùng có kiểu int và cùng có kích thước là 4 byte. Như vậy, chương trình dành ra 2 vùng nhớ, mỗi vùng nhớ 4 byte cho biến a và biến b. Dòng 2 của chương trình là câu lệnh khai báo biến con trỏ với kiểu int. Trong trường hợp này, biến con trỏ được sử dụng để truy xuất đến các biến khác có cùng kiểu int. Chương trình sử dụng vùng nhớ để lưu biến con trỏ lúc này không phải là 4 byte như biến a hoặc b mà là 8 byte để có thể chứa đủ địa chỉ, tham chiếu được hết bộ nhớ. Như vậy, việc khai báo int *phoặc char *p thì kích thước bộ nhớ sử dụng cho biến con trỏ p là như nhau. Biến con trỏ p được khai báo và sử dụng để tham chiếu đến một biến khác trong vùng nhớ. Nội dung dữ liệu của con trỏ p sẽ là địa chỉ của biến mà nó tham chiếu tới. Giả sử đoạn chương trình khai báo 3 biến với giá trị khởi tạo như sau:

```c
int a = 3, b = 5 ;
int *p ;
```

*Hình 5.1. Thuộc tính của các biến*

![Hình 5.1. Thuộc tính của các biến: tên biến, giá trị và địa chỉ vùng nhớ.](assets/giaotrinh-c/hinh-5-1.png)

Đoạn chương trình này có 3 biến, mỗi biến được khai báo với một tên, các biến được truy xuất nội dung thông qua tên biến. Đồng thời, mỗi biến có một địa chỉ trong bộ nhớ. Trong trường hợp này, 2 biến a và b nằm ở hai vùng nhớ có địa chỉ bắt đầu là 4225568 và 4225572. Các biến được khai báo có thể nằm ở các vùng nhớ nối tiếp nhau hoặc không và không có cơ chế đảm bảo các biến nằm liên tiếp nhau trong bộ nhớ. Mỗi biến được gán giá trị. Các giá trị này được xem như nội dung biến. Trường hợp con trỏ p cũng tương tự, tên con trỏ là p, vùng nhớ của con trỏ p được đặt ở vị trí bắt đầu là 4225588. Nội dung biến có thể được cập nhật thông qua tên biến, ví dụ, lệnh a = 8; sẽ làm giá trị biến a được cập nhật giá trị mới là 8. Nội dung biến con trỏ chưa được khởi tạo. Xét chương trình ví dụ tiếp theo dưới đây:

```c
a = 9 ;
b = 12 ;
p = &a ;
*p = 7 ;
p = &b ;
a = *p ;
```

Trong đoạn chương trình trên, các lệnh ở dòng 1 và dòng 2 cập nhật giá trị mới cho a, b tương ứng là 9, 12. Con trỏ p được gán nội dung là địa chỉ của biến a. Trong ngôn ngữ C, toán tử & đặt trước tên biến cho phép chương trình trả về địa chỉ vùng nhớ đã cấp cho biến. Người lập trình thao tác với các biến thông qua tên, vùng nhớ cấp cho biến có thể thay đổi tùy từng lúc thực thi chương trình. Ở dòng 3 là lệnh gán địa chỉ của biến a cho con trỏ p. Lúc này, con trỏ p sẽ tham chiếu đến vùng nhớ của biến a. Ở dòng 4, lệnh *p = 7 sẽ gán giá trị 7 vào vùng nhớ mà con trỏ p đang chứa địa chỉ, cụ thể ở đây là địa chỉ của biến a. Như vậy, sau câu lệnh trên, biến a sẽ được cập nhật giá trị mới là 7. Như vậy, biến con trỏ được sử dụng để tham chiếu đến vùng nhớ của biến a. Lệnh ở dòng thứ 5 lại lấy địa chỉ biến b và gán cho con trỏ, nội dung con trỏ bây giờ là địa chỉ của biến b, hay nói khác, lúc này con trỏ dùng để tham chiếu đến biến b, thay vì biến a. Cuối cùng, giá trị biến a được cập nhật giá trị mới là ô nhớ mà con trỏ p đang chứa địa chỉ, tức biến b. Sau câu lệnh, biến a có giá trị là nội dung của biến b, tức a = 12.

### 5.3. Con trỏ và mảng

Con trỏ và mảng có mối liên hệ mật thiết với nhau. Trong quá trình lập trình, có thể sử dụng qua lại giữa con trỏ và mảng. Khi khai báo mảng 1 chiều, tên mảng cũng chính là địa chỉ bắt đầu của mảng, chính vì thế, tên mảng một chiều cũng được sử dụng giống như con trỏ.

Xét câu lệnh sau:

```c
int a[5]= {1,5,3,2,4} ;
```

Đây là câu lệnh khai báo mảng kiểu int với 5 phần tử và a là tên mảng. Lệnh a[i] sẽ tham chiếu đến phần tử thứ i trong mảng, nếu khai báo con trỏ và gán giá trị cho con trỏ như sau:

```c
int *p,x;
p = &a[0];
x = *p ;
```

thì câu lệnh trên đã thiết lập con trỏ tham chiếu đến phần tử đầu tiên của mảng a bằng cách gán địa chỉ phần tử đầu tiên của mảng a cho con trỏ p.

*Hình 5.2. Mối liên hệ giữa mảng và con trỏ*

![Hình 5.2. Mối liên hệ giữa mảng và con trỏ](assets/giaotrinh-c/hinh-5-2.png)

Lệnh x = *p sẽ sao chép nội dung phần tử a[0] vào biến x. Tương tự, *(p+i) sẽ tham chiếu đến phần tử thứ i trong mảng a, như trình bày trong hình 5.2 . Điều này luôn đúng bất kể kiểu dữ liệu của mảng a. Khi p là con trỏ, nếu gặp lệnh p+1 thì chương trình sẽ tự động cập nhật p sao cho có thể tham chiếu đến phần tử tiếp theo trong mảng a.

Ngay khi tên mảng xuất hiện trong chương trình, nó được chuyển sang kiểu con trỏ một cách tự động. Như vậy, 2 cách gán giá trị cho con trỏ p sau đây là tương đương nhau:

```c
pa= &a[0];
pa = a;
```

Như vậy, trong trường hợp này có thể xem a là con trỏ mà nội dung của nó đã được thiết lập đến vùng nhớ cấp cho mảng a. Các phần tử của mảng có thể được truy xuất thông qua tên mảng hoặc tên con trỏ như sau:

*Hình 5.3. Mối liên hệ giữa mảng và con trỏ*

![Hình 5.3. Mối liên hệ giữa mảng và con trỏ: truy xuất phần tử mảng bằng tên mảng và bằng con trỏ.](assets/giaotrinh-c/hinh-5-3.png)

Tuy nhiên, cần phân biệt sự khác nhau khi sử dụng mảng và con trỏ trong một số trường hợp cụ thể như sau:

```c
int a[] = {1,2,3,4,5,6} ;
int *p;
p = a;
printf(" p(0)= %d, p(1) = %d  \n ", *p,*(p+1)) ;
p++ ;
printf(" p(0)= %d, p(1) = %d  \n ", *p,*(p+1)) ;
```

Kết quả khi chạy chương trình

```c
p(0)= 1, p(1) = 2
p(0)= 2, p(1) = 3
```

Trong ví dụ trên, chương trình đã khai báo mảng a và con trỏ p. Sau đó, con trỏ p được gán nội dung là địa chỉ bắt đầu của mảng a. Như đã giới thiệu ở trên, lệnh p = a sẽ tự động chuyển tên mảng a sang địa chỉ bắt đầu của mảng và gán địa chỉ này cho con trỏ p. Câu lệnh p = a tương đương với p = &a[0]; lấy địa chỉ của phần tử đầu tiên của mảng gán cho con trỏ p. Như vậy, việc trỏ đến phần tử đầu tiên và phần tử tiếp theo của con trỏ sẽ truy xuất tới phần tử a[0] và phần tử a[1] của mảng. Lệnh p++ sẽ tự động tăng nội dung của biến con trỏ để truy xuất phần tử tiếp theo. Khi sử dụng lệnh tăng hoặc cộng con trỏ, chương trình sẽ tự động tăng nội dung biến con trỏ lên một giá trị tương ứng với kiểu dữ liệu mà nó được định nghĩa để có thể tham chiếu đến phần tử tiếp theo của vùng nhớ đang được truy xuất bởi con trỏ. Ví dụ, đối với con trỏ kiểu int, lệnh p++ sẽ tăng địa chỉ lên 4 byte để tham chiếu đến phần tử tiếp theo, thay vì chỉ tăng lên 1 đơn vị như tác dụng trên biến thông thường. Sau khi tăng, con trỏ p đang tham chiếu đến phần tử thứ 1 của mảng a.

Truy xuất từng phần tử mảng theo cách dùng tên mảng như là tên con trỏ:

```c
int a[] = {1,2,3,4,5,6} ;
int *p;
p = a;
printf(" p(0)= %d, p(1) = %d  \n ", *a,*(a+1)) ;
a++ ; // lenh khong hop le
printf(" p(0)= %d, p(1) = %d  \n ", *a,*(a+1)) ;
```

Trong đoạn chương trình này, việc sử dụng cách tham chiếu như con trỏ đế lấy nội dung của mảng a tại câu lệnh ở dòng thứ 4 và thứ 6 là hoàn toàn hợp lệ. Tuy nhiên lệnh a++; ở dòng lệnh 5 lại không hợp lệ vì trường hợp này a được khai báo là mảng, không phải con trỏ. Như vậy, người lập trình cần chú ý cách sử dụng giống và khác nhau giữa mảng và con trỏ.

### 5.4. Cấp phát bộ nhớ động

Thông thường, người lập trình ít quan tâm đến việc chương trình tiêu tốn bộ nhớ bao nhiêu. Khi máy tính có bộ nhớ đủ lớn, việc sử dụng bộ nhớ nhiều hơn hay ít hơn vài Mbyte có lẽ không là vấn đề gì lớn. Tuy nhiên, thử hình dung chúng ta đang lập trình và thực thi trên các thiết bị có bộ nhớ giới hạn thì việc sử dụng hiệu quả bộ nhớ lại trở nên cần thiết. Ví dụ, khi viết chương trình cho phép người dùng nhập điểm cho một lớp học, mà chúng ta không biết trước là sẽ có bao nhiêu sinh viên. Mặc nhiên, người lập trình sẽ khởi tạo một mảng số thực với số phần tử lớn nhất có thể để sử dụng cho việc lưu điểm. Trong trường hợp số lượng điểm nhập vào thực sự nhỏ hơn nhiều lần so với số phần tử mảng đã cấp phát thì sẽ dẫn đến lãng phí bộ nhớ.

Việc cấp phát bộ nhớ động sẽ giúp cho việc sử dụng bộ nhớ hiệu quả hơn. Cấp phát bộ nhớ động (Dymanic memory allocation) là quá trình cấp phát bộ nhớ trong lúc chương trình đang thực thi, thay vì cấp phát lúc biên dịch chương trình. Các hàm, thư viện quản lý bộ nhớ cho phép cấp phát cũng như giải phóng vùng nhớ trong lúc đang thực thi chương trình. Các hàm quản lý bộ nhớ động được định nghĩa trong thư viện stdlib.h.

Tiến trình cấp phát bộ nhớ cho chương trình được mô tả trong hình dưới.

*Hình 5.4. Phân vùng bộ nhớ cho chương trình*

![Hình 5.4. Phân vùng bộ nhớ cho chương trình: Stack, Heap và vùng nhớ cố định.](assets/giaotrinh-c/hinh-5-4.png)

Các biến toàn cục, các biến tĩnh và mã lệnh chương trình sử dụng bộ nhớ cố định, trong khi các biến cục bộ được lưu trong vùng nhớ ngăn xếp (Stack). Không gian bộ nhớ giữa vùng nhớ cố định và vùng nhớ ngăn xếp là vùng nhớ Heap. Vùng nhớ Heap được sử dụng để cấp phát động trong quá trình chương trình thực thi.

#### 5.4.1. Hàm malloc

Hàm malloc được sử dụng để cấp phát bộ nhớ với kích thước theo yêu cầu, hàm sẽ trả về con trỏ tham chiếu đến địa chỉ bắt đầu của vùng nhớ được cấp phát. Sử dụng hàm malloc theo cú pháp sau:

```c
void * malloc(size_t size)
```

Trong đó, size là kich thước tính theo đơn vị byte của vùng nhớ cần cấp phát. Nếu quá trình cấp phát thành công, hàm sẽ trả về con trỏ tham chiếu đến địa chỉ đầu tiên của vùng nhớ được cấp phát. Trường hợp ngược lại, hàm sẽ trả về con trỏ rỗng (NULL).

Ví dụ: cấp phát bộ nhớ cho mảng 100 phần tử kiểu số nguyên như sau:

```c
int *p;
p = malloc(100*sizeof(int));
```

Chương trình sẽ cấp phát bộ nhớ có kích thước tổng cộng là 400 byte cho 100 phần tử kiểu số int. Hàm sizeof() sẽ trả về kích thước của một kiểu dữ liệu. Nếu quá trình cấp phát thành công, p là con trỏ tham chiếu đến vùng nhớ đã được cấp phát. Kết quả trả về của hàm malloc tự động được chuyển sang kiểu (int *) và gán cho biến con trỏ p. Thông thường hàm malloc được ghi ở hình thức rõ ràng về kiểu dữ liệu trả về như sau:

```c
int *p;
p = (int*)malloc(100*sizeof(int));
```

Ví dụ: viết chương trình nhập dữ liệu cho mảng gồm n phần tử số nguyên với giá trị n được nhập trước, sau đó in ra phần tử lớn nhất.

```c
#include<stdio.h>
#include <stdlib.h>
void main(void)
{
    int n, i,max;
    int *p ;
    do {
        printf("Nhap n: ");
        scanf("%d",&n) ;
    }while (n<=0);
    p = (int *)malloc (n*sizeof(int));
    if (p!=NULL)
    {
        for (i=0;i<n;i++)
        {
            printf("\nnhap phan tu thu %d: ",i+1);
            scanf("%d",(p+i));
        }
        max = *p ;
        for (i=1;i<n;i++)
        {
            if(max<*(p+i))
                max = *(p+i);
        }
        printf("max = %d",max) ;
    }
    free(p);
}
```

#### 5.4.2. Hàm free()

Hàm free() được dùng để giải phóng bộ nhớ đã cấp phát cho biến con trỏ trước đó bởi hàm malloc() và trả bộ nhớ về cho vùng nhớ Heap. Cú pháp hàm free() như sau:

```c
void  free(void *)
```

Ví dụ giải phóng vùng nhớ đã cấp phát trước đó cho con trỏ p:

```c
free(p);
```

#### 5.4.3. Hàm calloc và realloc

Ngoài hàm malloc, 2 hàm khác trong thư viện sdtlib.h cũng cho phép cấp phát bộ nhớ động là hàm calloc() và hàm realloc().

Hàm calloc() có chức năng giống như hàm malloc. Trong khi hàm malloc trả về vùng nhớ được cấp phát với giá trị dữ liệu ban đầu của các ô nhớ là ngẫu nhiên thì hàm calloc trả về vùng nhớ được cấp phát và khởi tạo giá trị ban đầu cho các phần tử là giá trị 0. Cú pháp hàm calloc() có khác so với hàm malloc về tham số của hàm:

```c
void * calloc(size_t n, size_t size)
```

Tham số đầu tiên n dùng để xác định số lượng phần tử cần cấp phát, tham số thứ 2, size , xác định kích thước của mỗi phần tử. Để cấp phát vùng nhớ cho một mảng 100 phần tử số nguyên, có thể sử dụng hàm calloc như sau:

```c
int *p;
p=(int*)calloc(100, sizeof(int));
```

Tương tự như hàm malloc(), hàm calloc() trả về giá trị rỗng (NULL) nếu quá trình cấp phát không thành công.

Hàm cuối cùng quản lý việc cấp phát động bộ nhớ là hàm realloc(). Hàm realloc() được sử dụng để thay đổi kích thước của vùng nhớ đã được cấp phát động trước đó bởi hàm malloc() hoặc hàm calloc(). Cú pháp của hàm realloc() như sau:

```c
void * realloc(void *p, size_t size)
```

Trong đó p là con trỏ tham chiếu đến vùng nhớ hiện hành đã được cấp phát. Size là kích thước mới được yêu cầu cấp phát. Kết quả trả về con trỏ tham chiếu đến vùng nhớ đã được thay đổi kích thước hoặc con trỏ rỗng (NULL) nếu quá trình thay đổi kích thước không thành công. Trong trường hợp tham số vào size cho hàm realloc() là 0 thì vùng nhớ cấp cho con trỏ p sẽ được giải phóng và hàm realloc() sẽ trả về NULL. Lúc này hàm realloc() được dùng tương tự như hàm free().

Ví dụ sử dụng hàm realloc() để tăng kích thước vùng nhớ đã cấp cho con trỏ p từ 100 phần tử lên 200 phần tử như sau:

```c
int *p;
p =(int*)malloc(100*sizeof(int)) ;
p = (int*)realloc(p, 200*sizeof(int));
```

Ví dụ: Viết chương trình nhập n số nguyên, in ra các số đã nhập theo thứ tự tăng dần. Sau đó nhập thêm m số nguyên nữa, tìm và in ra giá trị bé nhất trong số (n+m) số nguyên vừa nhập.

```c
#include<stdio.h>
#include <stdlib.h>
void main(void)
{
    int n,m, i,j,min;
    int *p ;
    do
    {
        printf("Nhap n: ");
        scanf("%d",&n) ;
    }while (n<=0);
    p = (int *)calloc (n,sizeof(int));
    if (p!=NULL)
    {
        for (i=0;i<n;i++)
        {
            printf("\nnhap phan tu thu %d: ",i+1);
            scanf("%d",(p+i));
        }
        for(i=0;i<n-1;i++)
            for(j=i+1;j<n;j++)
                if(*(p+i)>*(p+j))
        {
            *(p+i)=*(p+i)+*(p+j);
            *(p+j)=*(p+i) - *(p+j);
            *(p+i)=*(p+i) - *(p+j);
        }
        for (i=0;i<n;i++)
        {
            printf(" %d , ",*(p+i));
        }
        do
        {
            printf("\nNhap m: ");
            scanf("%d",&m) ;
        }while (m<=0);
        p = (int*)realloc(p,(n+m)*sizeof(int));
        if (p!=NULL)
        {
            for (i=0;i<m;i++)
            {
                printf("\nnhap phan tu thu %d:
                45 ",n+i+1);
                scanf("%d",(p+n+i));
            }
            min = *p ;
            for (i=1;i<n+m;i++)
            {
                if(min>*(p+i))
                    min = *(p+i);
            }
            printf("min = %d",min) ;
        }
    }
    free(p);
}
```

### 5.5. Bài tập

- [ ] 1.  Hãy tìm và sửa lỗi trong các câu/đoạn lệnh sau:

```c
a. int a = 3;
int *b;
b = a;
*b = 5;
b. int a = 5;
float *p;
p = &a;
c. int n;
int *p;
p = (int *)malloc(n*sizeof(int))
printf("nhap so luong phan tu: ");
scanf("%d",&n);
```

Các chương trình trong các bài tập dưới đều yêu cầu sử dụng con trỏ và cấp phát bộ nhớ động.

- [ ] 2.  Viết chương trình nhập vào một mảng gồm 10 số nguyên. Sau đó copy và lưu các số lẻ (nếu có) trong mảng đã nhập ra một mảng thứ hai. In ra mảng thứ hai vừa copy được.
- [ ] 3.  Viết chương trình nhập vào n số nguyên, sau đó nhập vào một số X bất kỳ, tìm xem số X này có tồn tại trong dãy số vừa nhập không.
- [ ] 4.  Viết chương trình nhập vào một mảng 1 chiều gồm n số nguyên và thực hiện các yêu cầu: lẻ thì in ra thông báo.

- Không được phép nhập số âm.
- Tìm và in ra số lẻ lớn nhất trong mảng, nếu mảng không có số

- [ ] 5.  Viết chương trình nhập mảng gồm n phần tử số nguyên, in các phần tử vừa nhập theo thứ tự giảm dần. Nhập tiếp m phần tử số nguyên vào mảng trên, in (n+m) phần tử vừa nhập theo thứ tự giảm dần.
- [ ] 6.  Viết chương trình nhập vào 2 mảng 1 chiều kiểu số nguyên có kích thước n phần tử. So sánh 2 mảng có bằng nhau không.
- [ ] 7.  Viết chương trình nhập vào 2 mảng một chiều kiểu số nguyên, mỗi mảng có n phần tử, cộng 2 mảng và xuất mảng tổng ra theo thứ tự các phần tử tăng dần.

## Chương 6. Hàm

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Định nghĩa được hàm mới trong chương trình.
- Sử dụng được các hàm đã định nghĩa trước đó.

### 6.1. Giới thiệu

Hàm được sử dụng để chia các công việc xử lý tính toán phức tạp thành nhiều chương trình nhỏ hơn. Hàm cho phép người lập trình xây dựng các ứng dụng từ các chương trình được viết sẵn, thay vì phải bắt đầu viết lại từ đầu. Trong một số trường hợp, người lập trình xem các hàm như là các hộp đen mà không cần thiết phải nắm rõ các chương trình chi tiết trong hàm.

Có nhiều mục đích khác nhau khi sử dụng hàm. Trong quá trình lập trình, thay vì viết một chương trình dài, người lập trình có thể chia nhỏ các chương trình ra thành nhiều chương trình con, mỗi chương trình con là một hàm. Mặt khác, khi đoạn chương trình lặp lại nhiều lần thì việc sử dụng hàm thực thi đoạn chương trình đó sẽ tiết kiệm được nhiều hơn.

Ngoài ra, ngôn ngữ C còn cung cấp các hàm xây dựng sẵn, cho phép người lập trình sử dụng để tạo ra các ứng dụng nhanh hơn. Khi sử dụng hàm, người lập trình cần quan tâm đến các thông số sẽ được đưa vào khi gọi hàm và kết quả trả về của hàm sau khi hàm kết thúc.

*Hình 6.1 bên dưới mô tả cấu trúc của một hàm.*

![Hình 6.1. Hàm với tham số truyền vào, kết quả trả về của hàm.](assets/giaotrinh-c/hinh-6-1.png)

Trong ngôn ngữ C cũng như trong một số ngôn ngữ lập trình khác, dựa theo cách thức mà nó tồn tại, hàm có thể được chia làm 2 nhóm: hàm được xây dựng sẵn (built-in function) hoặc các hàm do người lập trình định nghĩa (user-defined function). Trong các chương trước, chúng ta sử dụng các hàm được xây dựng sẵn trong các thư viện. Cụ thể như hàm printf, hàm scanf hoặc hàm malloc… Chúng ta cũng không quan đến các đoạn lệnh chi tiết trong các hàm trên. Tuy nhiên, khi sử dụng cần tuân thủ về tham số cũng như kết quả trả về mà các hàm quy ước.

Chương này giúp cho người lập trình tự xây dựng và sử dụng các hàm, cụ thể là các hàm do người dùng định nghĩa, đồng thời, nắm được các phương pháp truyền tham số cho hàm, giúp cho quá trình lập trình hiệu quả hơn, tiết kiệm được nhiều thời gian hơn.

### 6.2. Định nghĩa hàm

Hàm được định nghĩa bao gồm tên hàm, danh sách và kiểu dữ liệu của các tham số, kiểu dữ liệu trả về của hàm và quan trọng hơn hết là các phát biểu thực thi chức năng của hàm. Bên trong hàm được xây dựng bởi các phát biểu là các đoạn lệnh và bao gồm cả việc khai báo và sử dụng các biến, hằng số.

Một cách tổng quát, hàm được định nghĩa như sau:

```c
Kiểu_dữ_liệu Tên_hàm (danh sách các tham số)
{
    Khai báo biến cục bộ;
    Câu lệnh;
    ...
    return giá trị;
}
```

Trong đó:

- Tên hàm phải được đặt theo quy tắc đặt tên hàm, biến, đã được giới thiệu trong chương trước.
- Danh sách tham số bao gồm kiểu dữ liệu và tên tham số. Các hàm không giới hạn số lượng tham số. Tuy nhiên, khi xây dựng hàm với số lượng tham số nhiều có thể sử dụng phương pháp truyền tham chiếu hoặc truyền mảng.
- Các biến được khai báo bên trong hàm là các biến cục bộ. Các biến cục bộ được tạo ra khi hàm được gọi và sẽ được giải phóng khi hàm kết thúc.
- Từ khóa return sẽ trả về giá trị cho hàm với kiểu giá trị là Kiểu_dữ_liệu đã được định nghĩa trước tên hàm.

Ví dụ hàm tìm max của 2 số nguyên được định nghĩa như sau:

```c
int   timmax(int a, int b)
{
    int max;
    if (a>b) max = a;
    else   max = b;
    return   max;
}
```

Hàm tìm max được đặt tên là timmax , nhận vào 2 tham số kiểu int. Biến max là biến cục bộ, biến max được khởi tạo ngay khi hàm được gọi và sẽ được giải phóng khi hàm kết thúc. Sau khi so sánh, hàm sẽ trả về giá trị max bằng câu lệnh return. Chương trình chính có thể gọi hàm một hoặc nhiều lần. Trong quá trình gọi hàm, phải đảm bảo truyền 2 tham số cho hàm và nhận về giá trị từ giá trị trả về của hàm.

Ví dụ chương trình chính sử dụng hàm đã viết để tìm giá trị lớn nhất từ 4 số nguyên a, b, c, d. Để tìm số lớn nhất trong 4 số, ta có thể xét từng cặp và đi so sánh 2 kết quả với nhau. Thực tế, đây không phải là phương pháp tối ưu khi tìm giá trị lớn nhất của 4 số nguyên. Tuy nhiên, chương trình sử dụng phương pháp so sánh từng cặp này để minh họa cho việc sử dụng hàm.

```c
int   timmax(int a, int b)
{
    int max;
    if (a>b) max = a;
    else   max = b;
    return   max;
}
void main (void)
{
    int a = 5, b = 7, c=6, d= 9, max1, max2, max;
    max1 = timmax (a,b);
    max2 = timmax(c,d);
    max = timmax(max1, max2);
    printf(" max = :%d",max);
}
```

Trong ví dụ trên, hàm timmax được gọi 3 lần với 3 tham số khác nhau. Trong một chương trình có nhiều hàm, chương trình sẽ tìm hàm chính (hàm main) thực thi từ vị trí bắt đầu hàm cho đến khi kết thúc hàm. Trong quá trình thực thi chương trình chính, hàm nào được gọi thì sẽ được thực hiện, một hàm được định nghĩa trong chương trình nhưng nếu không được gọi trong chương trình chính thì nó sẽ không được thực thi.

Để hiểu rõ cách thức chương trình hoạt động, có thể xem hình vẽ mô tả như sau:

*Hình 6.2. Mô tả hoạt động của chương trình khi gọi hàm*

![Hình 6.2. Mô tả hoạt động của chương trình khi gọi hàm: thứ tự gọi hàm timmax và vùng nhớ của các biến.](assets/giaotrinh-c/hinh-6-2.png)

Hình 6.2 mô tả thứ tự hoạt động của chương trình. Trong đó, khi gọi làm lần thứ nhất, giá trị 2 biến a, b, được sao chép vào giá trị 2 biến nội bộ bên trong hàm, sau khi so sánh, hàm trả về kết quả giá trị lớn nhất lưu lại trong biến max1. Khi gọi làm lần 2, hàm lại thực thi với 2 giá trị mới là c và d, kết quả trả về cho biến max2. Tương tự, khi gọi hàm lần thứ 3, kết quả trả về cho biến max. Như vậy, thay vì thực hiện đoạn chương trình nhiều lần, ta đi định nghĩa hàm 1 lần và cho phép hàm được gọi nhiều lần, như minh chứng ở hình 6.2. Cần lưu ý là chương trình trên chỉ là một ví dụ minh họa cách thức hàm hoạt động, không phải là một giải thuật tối ưu để tìm số lớn nhất trong 4 số.

### 6.3. Phân loại hàm theo tham số và giá trị trả về

Trong mục 6.2, hàm được định nghĩa đầy đủ với kiểu giá trị trả về và tham số. Trong một số trường hợp cụ thể, các thành phần trong định nghĩa hàm có thể vắng mặt. Dựa vào tham số và giá trị trả về có thể phân loại hàm như sau:

- Hàm có tham số và có giá trị trả về.

Hàm có tham số và có giá trị trả về được định nghĩa như mục 6.2. Trong đó, hàm có một hoặc nhiều tham số và trả về kiểu giá trị cụ thể. Khai báo và sử dụng loại hàm này sẽ tương tự như trong trường hợp hàm tìm giá trị lớn nhất trong mục 6.2. Ví dụ định nghĩa và sử dụng hàm tính giai thừa của một số nguyên n như sau:

```c
#include<stdio.h>
#include <stdlib.h>
int   giaithua(int n)
{
    int i,S=1 ;
    for (i=1;i<=n;i++)
        S *=i ;
    return   S;
}
void main (void)
{
    int n,Sn;
    printf("Nhap n : ");
    scanf("%d",&n);
    Sn = giaithua(n);
    printf(" giai thua cua %d la %d",n,Sn);
}
```

Hàm giaithua nhận vào một giá trị kiểu số nguyên và trả về một giá trị kiểu số nguyên. Lệnh return cho phép trả về giá trị với kiểu giá trị được khai báo phía trước tên hàm. Trong trường hợp thiếu lệnh return, trình biên dịch vẫn không báo lỗi hoặc cảnh báo. Tuy nhiên, hàm sẽ không trả về giá trị để gán cho biến khi gọi hàm trong chương trình chính. Mặc khác, lệnh return không nhất thiết phải đặt ở cuối chương trình của hàm. Trong một số trường hợp có thể đặt lệnh return ở giữa hoặc bất kỳ nơi đâu trong thân hàm. Khi gặp lệnh return, hàm xem như kết thúc và trả về giá trị cho chương trình gọi nó. Ví dụ:

```c
#include<stdio.h>
#include <stdlib.h>
int   KiemtraSNT(int n)
/*
Hàm trả về 1 nếu là số nguyên tố, ngược lại trả về 0
*/
{
    int i ;
    for (i=2;i<n;i++)
    {
        if (n%i==0) return 0;
    }
    return 1 ;
}
void main (void)
{
    int n,Snt;
    printf("Nhap n : ");
    scanf("%d",&n);
    Snt = KiemtraSNT(n) ;
    if (Snt)
        printf(" %d la So nguyen to" ,n);
    else
        printf(" %d khong phai la So nguyen to"
    25 ,n);
}
```

Trong ví dụ trên, hàm thực hiện chức năng kiểm tra xem một số nguyên có phải là số nguyên tố hay không, nếu đúng thì trả về 1, ngược lại thì trả về 0. Lệnh return được sử dụng 2 lần trong hàm. Không có giới hạn cho số lần sử dụng lệnh return. Trong trường hợp này, người lập trình có thể dùng một biến trung gian và chỉ sử dụng lệnh return 1 lần ở cuối hàm. Tuy nhiên, đặt 2 lệnh return trong hàm này vẫn đảm bảo đúng logic. Trong trường hợp phát hiện không phải là số nguyên tố, lệnh return sẽ kết thúc hàm tại vị trí đó và trả về kết quả là 0 mà không cần phải chạy hết vòng lặp for. Trường hợp nếu như là số nguyên tố, lệnh return trong vòng lặp sẽ không được thực hiện, chương trình thực hiện lệnh return ở cuối hàm.

- Hàm có tham số nhưng không có giá trị trả về.

Trong nhiều trường hợp các hàm chỉ nhận tham số mà không trả về giá trị. Trong một số ngôn ngữ lập trình như Pascal, các hàm không trả về giá trị được gọi là các thủ tục. Tuy nhiên, ngôn ngữ C không phân biệt hàm và thủ tục. Khai báo và sử dụng hàm không có giá trị trả về như sau:

```c
void Tên_hàm (danh sách các tham số)
{
    Khai báo biến cục bộ;
    Câu lệnh;
    ...
}
```

Kiểu dữ liệu trả về trước Tên_hàm được thay thế bằng từ khóa void để thể hiện thông tin: hàm không có giá trị trả về và dĩ nhiên, trong hàm cũng không cần lệnh return.

Ví dụ viết hàm kiểm tra một số có phải là số Armstrong hay không: hàm không trả về kết quả là 0 hay 1 như hàm tìm số nguyên tố mà hàm kiểm tra số Armstrong sẽ tự in ra kết quả sau khi kiểm tra trong hàm. Số Armstrong được định nghĩa là số có giá trị bằng tổng lập phương của các chữ số trong số đó. Ví dụ 153, 371

```c
#include<stdio.h>
#include <stdlib.h>
void Armstrong (int n)
{
    int s1, s, n1;
    s = 0;
    n1=n;
    while(n1!=0)
    {
        s1 = n1 % 10;
        s += s1 * s1 * s1;
        n1 = n1/10;
    }
    if (n == s) printf(" %d la So armstrong" ,n);
    else
        printf(" %d khong phai la So armstrong" ,n);
}
void main (void)
{
    int n ;
    printf("Nhap n : ");
    scanf("%d",&n);
    Armstrong(n) ;
}
```

Hàm thực hiện in kết quả trong hàm nên không trả về giá trị cho chương trình chính. Tại dòng lệnh 23, hàm được gọi bằng tên hàm cùng với tham số của hàm.

- Hàm không có tham số nhưng có giá trị trả về.

Trong một số trường hợp hàm không nhận bất kỳ tham số nào nhưng có trả về giá trị cho chương trình gọi hàm. Hàm không có tham số nhưng có giá trị trả về được khai báo như sau:

```c
int  Tên_hàm (void)
{
    Khai báo biến cục bộ;
    Câu lệnh;
    ...
}
```

Ví dụ về hàm không có tham số nhưng có giá trị trả về:

```c
int GetEven(void)
{ int n;
    do{
        printf("Nhap mot so chan  :");
        scanf("%d",&n);
    }
    while(n%2!=0) ;
    return n ;
}
void main()
{
    int a;
    a= GetEven();
    printf("a = %d ", a) ;
}
```

Hàm GetEven() không nhận tham số. Khi gọi hàm GetEven() , biến n được khởi tạo và được nhập giá trị từ bàn phím. Nếu giá trị nhập là số chẵn, vòng lặp kết thúc và giá trị n được trả về cho chương trình chính.

- Hàm không có tham số và không có giá trị trả về.

Cũng giống như hàm không có giá trị trả về, trong một số trường hợp, hàm không cần nhận tham số từ chương trình chính. Với hàm không không tham số và không giá trị trả về thì thông số tại vị trí tham số và kiểu dữ liệu trả về sẽ được thay thế bằng từ khóa void.

```c
void Tên_hàm (void)
{
    Khai báo biến cục bộ;
    Câu lệnh;
    ...
}
```

Hàm không có tham số và giá trị trả về có chức năng giống như một đoạn chương trình được đưa vào hàm thay vì viết trực tiếp trên chương trình chính. Khi gọi các hàm này thì người dùng chỉ cần gọi tên hàm. Ví dụ:

```c
void  inchu(void)
{
    int i;
    for (i =  0; i< 5; i++)
        puts("Hello");
}
void main (void)
{
    inchu( );
}
```

Trong chương trình trên, hàm inchu là một một chương trình con, hay thủ tục có chức năng in 5 từ “Hello” liên tục. Trong chương trình chính, hàm được gọi mà không có tham số hay giá trị trả về.

Hàm main là hàm chính trong các chương trình viết bằng ngôn ngữ C. Ta thường hay thấy hàm main được viết với thể thức void main(void) , có nghĩa là hàm main không có tham số và cũng không có giá trị trả về. Khi xây dựng hàm main, theo thói quen chúng ta viết như trên và ngầm hiểu hàm main không có tham số và giá trị trả về vì là hàm chính, không được gọi từ hàm khác. Suy luận này là chưa chính xác vì thực tế hàm main cũng có tham số và giá trị trả về. Tuy nhiên, trong một số ứng dụng, người ta viết hàm main không tham số, không giá trị trả về. Ví dụ hàm main được viết như sau:

```c
#include <stdio.h>
int main(int argc, char *argv[])
{
    …
    return 0;
}
```

Trong ví dụ trên, hàm main nhận 2 tham số, thực tế 2 tham số này được truyền cho hàm main khi chương trình được gọi từ dòng lệnh. Lệnh return trong hàm main trả về kết quả cho hệ thống, cho biết hàm main thực thi thành công (có giá trị là 0) hoặc không thành công (trả về giá trị khác 0, thường là mã lỗi).

### 6.4. Khai báo hàm

Hàm phải được khai báo trước khi sử dụng. Điều này đồng nghĩa với việc định nghĩa hàm hoặc là khai báo hàm phải tồn tại ở trước vị trí nó được gọi. Trong các ví dụ trên, hàm được định nghĩa ở trên hàm main và nó được gọi trong hàm main. Để đảm bảo việc hàm có thể được gọi từ một hàm khác mà hàm này có thể được viết trên hoặc dưới hàm được gọi thì các hàm cần phải được khai báo ở vị trí đầu chương trình. Việc khai báo hàm chỉ đơn thuần là cung cấp cho chương trình các thông tin về hàm như tên hàm, kiểu dữ liệu trả về, tham số. Khai báo hàm được thực hiện theo cú pháp sau Ki ể u_d ữ _li ệ u Tên_hàm (danh sách tham s ố ); Các hàm được khai báo trong cùng một chương trình hoặc có thể được đặt trong một tệp tiêu đề (header file). Ví dụ về khai báo hàm như sau:

```c
#include<stdio.h>
#include <stdlib.h>
int   timmax(int a, int b);// khai báo hàm
void main (void)
{
    int a = 5, b = 7, c=6, d= 9, max1, max2, max;
    max1 = timmax (a,b);
    max2 = timmax(c,d);
    max = timmax(max1, max2);
    printf( " max = :%d",max);
}
int   timmax(int a, int b)
{
    int max;
    if (a>b) max = a;
    else   max = b;
    return   max;
}
```

Hàm timmax có thể được đặt ở bất kỳ vị trí nào trong chương trình cùng với hàm main và các hàm khác. Khi nó đã được khai báo ở vị trí đầu chương trình, bất kỳ hàm nào trong cùng một tập tin chương trình đều có thể gọi hàm timmax .

### 6.5. Truyền tham số cho hàm

#### 6.5.1. Truyền giá trị cho tham số hàm

Truyền giá trị cho tham số hàm, hay gọi ngắn gọn là truyền tham số kiểu tham trị, là phương pháp phổ biến khi gọi hàm. Các giá trị tại vị trí tham số trong lúc gọi hàm được sao chép vào các biến cục bộ của hàm, sau khi hàm kết thúc, các biến này tự mất đi.

Ví dụ về phương pháp truyền giá trị cho tham số hàm như sau:

```c
#include  <stdio.h>
#include <conio.h>
void  hoanvi(int a, int b) ;
void main (void)
{
    int a = 5, b =6;
    hoanvi(a , b);
    printf ("a = %d , a= %d", a,b);
}
void  hoanvi(int a, int b)
{
    int tam;
    tam  = a;
    a = b;
    b = tam;
}
```

Kết quả sau khi chạy chương trình sẽ là: `a = 5, b= 6` Trong chương trình trên, 2 biến a và b được gán giá trị lần lượt là 5, 6 trong hàm main. Đây là 2 biến cục bộ của hàm main. Khi gọi hàm hoanvi(a,b); ở dòng lệnh số 7 , 2 giá trị của a và b của hàm main được sao chép vào 2 tham số a và b của hàm hoanvi . Trong hàm hoanvi , giá trị của a và b bị hoán đổi. Tuy nhiên, cần chú ý 2 biến này là 2 biến cục bộ của hàm hoanvi và được đặt tên ngẫu nhiên trùng với 2 biến bên trong hàm main nhưng không liên quan với nhau. Sau khi hàm hoanvi kết thúc, 2 biến nội bộ của hàm mất đi, không ảnh hưởng gì tới 2 biến của hàm main. Kết quả là nội dung 2 biến của hàm main vẫn không thay đổi.

#### 6.5.2. Truyền địa chỉ cho tham số hàm

Truyền địa chỉ cho tham số hàm còn được gọi là phương pháp truyền tham chiếu. Trong trường hợp này, tham số không nhận giá trị trực tiếp mà nhận địa chỉ của biến bên ngoài. Kết hợp với các phép toán con trỏ, cho phép các câu lệnh bên trong hàm truy xuất đến các biến bên ngoài. Trong ví dụ sau, để người đọc không nhầm lẫn, 2 biến bên trong hàm hoanvi được đổi tên là x và y. Hàm hoán đổi giá trị 2 biến được viết lại như sau:

```c
#include  <stdio.h>
void  hoanvi(int *x, int *y) ;
void main (void)
{
    int a = 5, b =6;
    hoanvi(&a , &b);
    printf ("a = %d , a= %d", a,b);
}
void  hoanvi(int *x, int *y)
{
    int tam;
    tam  = *x;
    *x = *y;
    *y = tam;
}
```

Kết quả sau khi chạy chương trình sẽ là: `a = 6, b= 5` Trong ví dụ trên, giá trị của 2 biến a và b của hàm main đã bị thay đổi bởi các đoạn chương trình trong hàm hoanvi . Hàm hoanvi được định nghĩa với 2 tham số kiểu con trỏ. Như chương trước đã giới thiệu, con trỏ được sử dụng để truy xuất biến khác thông qua địa chỉ. Trong hàm main, hàm hoanvi được gọi với 2 giá trị cho tham số là địa chỉ của 2 biến a và b. Lúc này, con trỏ x trong hàm hoán vị sẽ trỏ tới biến a, con trỏ y sẽ trỏ đến biến b, dẫn đến các phép toán trên 2 con trỏ này ảnh hưởng trực tiếp đến 2 vùng nhớ cho biến a và biến b của chương trình chính.

#### 6.5.3. Truyền mảng cho hàm

Mảng sẽ được truyền vào cho tham số hàm thông qua tham chiếu đến phần tử đầu tiên của mảng. Khi xây dựng các hàm có tham số là mảng, có thể thực hiện một trong 2 cách sau đây: sử dụng khai báo kiểu con trỏ (*), hoặc sử dụng kiểu khai báo mảng ([ ]). Chẳng hạn như:

```c
int func(int *a, int n);
//hoặc
int func(int  a[], int n);
```

Và khi gọi hàm, người dùng sẽ truyền tham số cho hàm thông qua địa chỉ. Địa chỉ có thể được lấy là địa chỉ phần tử đầu tiên của mảng hoặc là dùng tên mảng để chương trình tự động chuyển sang địa chỉ. Với phương pháp truyền tham chiếu, các chương trình bên trong hàm sẽ ảnh hưởng trực tiếp đến vùng nhớ lưu mảng, hay nói cách khác, các lệnh bên trong hàm có thể thay đổi giá trị của mảng được truyền vào.

Ví dụ hàm tìm giá trị phần tử lớn nhất của mảng được định nghĩa và sử dụng như sau:

```c
#include  <stdio.h>
#include <conio.h>
int Timmax (int *a,int n) ;
void main (void)
{
    int arr[] = {6,13,2,3,9,7,5,18,4,12};
    int max ;
    max = Timmax(arr,10);
    printf ("Max = %d ",max);
}
int Timmax (int *a, int n)
{
    int i,max ;
    max = a[0] ;
    for (i=1;i<n;i++)
        max = (max<a[i])?a[i]:max ;
    return max ;
}
```

Hàm tìm số lớn nhất trong mảng sử dụng tham số con trỏ. Trong thân hàm, biến tham số được sử dụng như một mảng số nguyên, việc truy xuất các vùng nhớ đã được cấp phát sử dụng mảng hoặc con trỏ đã được giới thiệu ở chương 5. Trong chương trình trên, tại vị trí gọi hàm ở câu lệnh 8, người dùng truyền địa chỉ cho tham tham số của hàm bằng tên mảng, chương trình sẽ tự động chuyển sang kiểu con trỏ. Cũng có thể truyền địa chỉ phần tử đầu tiên cho tham số. Hơn nữa, cũng có thể khai báo hàm sử dụng mảng, thay cho con trỏ, hoặc có thể dùng con trỏ thay cho mảng bên trong hàm.

Chương trình trên có thể được viết lại như sau mà không làm thay đổi kết quả cũng như chức năng của hàm.

```c
#include  <stdio.h>
#include <conio.h>
int Timmax (int *a,int n);
void main (void)
{
    int arr[] = {6,13,2,3,9,7,5,18,4,12};
    int max ;
    max = Timmax(&arr[0],10);
    printf ("Max = %d ",max);
}
int Timmax (int a[],int n)
{
    int i,max ;
    max = *a ;
    for (i=1;i<n;i++)
        max = (max<*(a+i))? *(a+i):max ;
    return max ;
}
```

Mảng được truyền cho hàm thông qua tham chiếu địa chỉ. Hay nói cách khác, tham số hàm là một biến con trỏ được tham chiếu đến mảng khi hàm thực thi nên mọi thao tác trên mảng bên trong hàm sẽ là thao tác trên mảng mà địa chỉ của nó được truyền cho tham số hàm.

Ví dụ, hàm sắp xếp mảng theo thứ tự tăng dần được định nghĩa và sử dụng như sau:

```c
#include  <stdio.h>
#include <conio.h>
#include<stdio.h>
#include <stdlib.h>
void Sapxepmang(int a[],int n);
void Inmang(int a[],int n);
void main (void)
{
    int arr[] = {6,13,2,3,9,7,5,18,4,12};
    printf("mang truoc khi sap xep :\n");
    Inmang(arr,10);
    Sapxepmang(arr,10);
    printf("\nmang sau khi sap xep :\n");
    Inmang(arr,10);
}
void Sapxepmang(int a[],int n)
{
    int i,j,tam ;
    for (i=0;i<n-1 ; i++)
        for(j=i+1; j<n;j++)
    {
        if (a[i]>a[j])
        {
            tam = a[i];
            a[i]= a[j];
            a[j]=tam;
        }
    }
}
void Inmang(int a[],int n)
{
    int i;
    for (i=0;i<n ; i++)
        printf("%d, ",a[i]);
}
```

Kết quả sau khi thực thi chương trình:

```c
mang truoc khi sap xep :
6, 13, 2, 3, 9, 7, 5, 18, 4, 12,
mang sau khi sap xep :
2, 3, 4, 5, 6, 7, 9, 12, 13, 18,
```

### 6.6. Đệ quy

Trong ngôn ngữ C, hàm có thể gọi các hàm khác và cũng có thể gọi chính nó. Một hàm được gọi bởi chính nó được gọi là hàm đệ quy. Các hàm đệ quy hữu ích trong các chương trình cần lặp lại các quá trình tính toán hoặc xử lý. Cấu trúc hàm đệ quy được minh họa như sau:

```c
void recurse()
{
    ... .. ...
    recurse();
    ... .. ...
}
int main()
{
    10     ... .. ...
    recurse();
    12     ... .. ...
}
```

Trong hàm main chúng ta gọi hàm recurse() . Trong hàm recurse() lại gọi chính hàm recurse() . Hàm recurse() trong ví dụ trên được gọi là hàm đệ quy. Có thể thấy hàm recurse() gọi chính nó và quá trình cứ thế lặp lại không thoát. Do đó, khi xây dựng các hàm đệ quy cần chú ý điều kiện dừng của hàm để tránh việc các hàm được lặp lại vô tận.

Một ví dụ của hàm đệ quy là thực hiện phép tính giai thừa. Giai thừa của n có thể được tính bằng cách lặp lại các phép nhân. Chúng ta có thể viết hàm tính giai thừa bằng phương pháp sử dụng vòng lặp trong đó các biến có thể xuất phát từ 1 và tăng dần đến n hoặc đi theo chiều ngược lại từ n về 1. Hàm tính giai thừa sử dụng vòng lặp được minh họa như sau:

```c
int giaithua(int n)
{
    int i,gt = n;
    for (i=n-1;i>0;i--)
        gt=gt*i ;
    return gt ;
}
void main()
{
    int n;
    do{
        printf("Nhap n  :");
        scanf("%d",&n);
    } while(n<1);
    printf("Giai thua cua %d la %d", n, giaithua(n));
}
```

Trong chương trình trên chúng ta tính giai thừa bằng cách lặp lại phép nhân với biến điều khiển trong khi biến điều khiển giảm dần từ n về 1. Chúng ta có thể xây dựng hàm đệ quy để tính giai thừa như sau:

```c
int giaithua(int n)
{
    if (n==1)
        return 1;
    return n*giaithua(n-1) ;
}
void main()
{
    int n;
    do{
        printf("Nhap n  :");
        scanf("%d",&n);
    } while(n<1);
    printf("Giai thua cua %d la %d", n, giaithua(n));
}
```

Trong ví dụ trên, chúng ta lặp phép nhân trong hàm giai thừa bằng cách gọi chính nó và giảm giá trị tham số đi 1 đơn vị. Điều kiện dừng được thiết lập là n=1.

### 6.7. Một số hàm thư viện chuẩn

Thư viện chuẩn cung cấp nhiều hàm thông dụng bao gồm các hàm xử lý, tính toán. Các hàm chuẩn này tồn tại trên hầu hết các hệ thống chuẩn. Phần này giới thiệu sơ lược một số hàm, người đọc có thể tự tìm hiểu thêm chức năng hàm, tham số, kiểu giá trị trả về của hàm khi sử dụng.

- Các hàm xử lý toán học: sqrt, pow, sin, cos, tan.
- Các hàm thao tác trên ký tự: isdigit, isalpha, isspace, toupper, tolower.
- Các hàm thao tác trên chuỗi: strlen, strcpy, strcmp, strcat, strstr, strtok.
- Các hàm thao tác trên thiết bị xuất nhập: printf, scanf, sprintf, sscanf.
- Các hàm thao tác trên tập tin: fopen, fclose, fgets, fprints.
- Các hàm thao tác trên dữ liệu thời gian: clock, time, difftime.
- Các hàm hỗ trợ sắp xếp và tìm kiếm: qsort, bsearch.

### 6.8. Bài tập

- [ ] 1.   Hãy tìm và sửa lỗi trong các câu/đoạn lệnh sau:

```c
a. void Ham1(int a, int b)
{
return (a + b);
}
b. #include<stdio.h>
int Ham2(void)
{
int a, b, max;
max = a;
if(max < b)
max = b;
return max;
}
int main(void)
{
int x,y;
scanf("%d%d",&x,&y);
printf("%d",Ham2(x,y));
return 0;
}
c. #include<stdio.h>
void Ham3(void)
{
printf("Xin chao!");
}
int main(void)
{
Ham3(void);
return 0;
}
d. #include<stdio.h>
#include <malloc.h>
//chuong trinh nhap mang 5 so nguyen va in ra mang
void Ham(int n)
{
int *x;
int i;
x = (int*)malloc(n*sizeof(int));
for(i = 0; i < n; i++)
scanf("%d",(a+i));
}
int main(void)
{
int k = 5, i;
printf("Nhap mang 5 phan tu:\n");
Ham(k);
printf("Mang da nhap:\n");
for(i = 0; i < k; i++)
printf("%d  ",*(x+i));
return 0;
}
```

Viết hàm tính và trả về giá trị a b , với b là số nguyên dương.

Viết chương trình nhập vào số nguyên k > 0, tính và in ra giá trị 10 k , sử dụng hàm đã định nghĩa ở trên.

- [ ] 3.  Viết hàm tìm và trả về số chẵn lớn nhất trong một mảng một chiều gồm n số nguyên, nếu trong mảng không có số chẵn thì hàm trả về giá trị -1. Ứng dụng: viết chương trình nhập vào một mảng gồm n số nguyên, tìm và in ra số chẵn lớn nhất, nếu mảng không có số chẵn thì in ra thông báo
- [ ] 4.  Viết chương trình nhập vào một mảng gồm n số nguyên, cho biết giá trị và vị trí của số lớn nhất trong mảng. Trong đó xây dựng và sử dụng các hàm sau:

a. Hàm nhập mảng b. Hàm tìm và trả về phần tử lớn nhất trong mảng c. Hàm tìm và trả về vị trí phần tử lớn nhất trong mảng

- [ ] 5.  Viết chương trình nhập vào một mảng gồm n số nguyên, sắp xếp và in ra mảng theo thứ tự tăng dần. Trong đó xây dựng và sử dụng các hàm sau:

a. Hàm nhập mảng b. Hàm in mảng c. Hàm sắp xếp mảng theo thứ tự tăng dần

- [ ] 6.  Viết hàm thực hiện phép cộng 2 mảng 1 chiều có cùng kích thước. Viết chương trình nhập vào 2 mảng một chiều, in ra mảng là kết quả của phép cộng 2 mảng vừa nhập. Sử dụng hàm nhập mảng đã viết ở bài tập trước.
- [ ] 7.  Viết hàm đệ quy thực hiện phép cộng các số lẻ từ 1 đến n, với n được nhập từ bàn phím.
- [ ] 8.  Viết hàm đệ quy tạo ra một dãy Fibonacci cho một số cho trước.

## Chương 7. Kiểu dữ liệu tự tạo

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Định nghĩa kiểu  c ấu trúc và áp dụng kiểu cấu trúc trên các biến cấu trúc, mảng một chiều kiểu cấu trúc và con trỏ cấu trúc.
- Định nghĩa và sử dụng kiểu dữ liệu Union.
- Định nghĩa và sử dụng kiểu dữ liệu liệt kê.

### 7.1. Kiểu cấu trúc

#### 7.1.1. Giới thiệu kiểu cấu trúc

Kiểu cấu trúc – structure – là một tập hợp các biến khác kiểu dữ liệu với nhau dưới cùng một tên gọi. Một biến kiểu cấu trúc có thể gồm nhiều biến thành phần có kiểu dữ liệu khác nhau. Điều này khác với mảng một chiều vì mảng một chiều bao gồm nhiều phần tử mảng có cùng kiểu dữ liệu với nhau. Kiểu cấu trúc thường được sử dụng cho mục đích lưu trữ các thông tin dữ liệu với nhiều loại định dạng dữ liệu khác nhau.

#### 7.1.2. Định nghĩa một kiểu cấu trúc mới

Các kiểu cấu trúc là kiểu dữ liệu tự tạo, được xây dựng dựa trên các đối tượng của các kiểu dữ liệu khác. Xét một kiểu cấu trúc được định nghĩa như sau:

```c
struct SinhVien
{
    char hoTen[40];
    char MSSV[12];
    float diemGiuaKy;
    float diemCuoiKy;
    float diemTongKet;
};
```

Ở dòng lệnh số 1, từ khóa struct là bắt buộc để bắt đầu cho phần định nghĩa một kiểu cấu trúc. Tên gọi SinhVien là tên được đặt cho kiểu cấu trúc đang định nghĩa. Các biến được khai báo bên trong cặp dấu ngoặc { }; của phần định nghĩa ở trên được gọi là các biến thành phần của kiểu cấu trúc. Các biến thành phần trong cùng một kiểu cấu trúc phải có tên gọi khác nhau, tuy nhiên các biến thành phần của các kiểu cấu trúc khác nhau có thể có tên gọi trùng nhau. Việc định nghĩa một kiểu cấu trúc phải được kết thúc bằng một dấu chấm phẩy ; Các biến thành phần của một kiểu cấu trúc có thể là các biến thuộc các kiểu dữ liệu cơ bản (char, int, float,...) hoặc là biến con trỏ, biến mảng, hoặc là biến thuộc một kiểu cấu trúc khác. Xét một kiểu cấu trúc khác được định nghĩa như sau:

```c
struct ThietBi
{
    char tenTB[20];
    int namSanXuat;
    float giaTien;
    char  trangThai;
};
```

Kiểu cấu trúc ThietBi này được định nghĩa gồm 4 biến thành phần, biến thành phần tenTB là một mảng gồm 20 phần tử kiểu ký tự dùng để lưu tên của thiết bị, biến thành phần namSanXuat là một biến kiểu int dùng để lưu năm sản xuất của thiết bị, biến thành phần giaTien là một biến kiểu float dùng để lưu giá tiền của thiết bị, và biến thành phần trangThai có kiểu ký tự sẽ dùng để lưu ký tự: có thể là 'H' hoặc 'T' cho trạng thái 'hỏng' hoặc 'tốt' của thiết bị.

Như vậy, cú pháp chung của thao tác định nghĩa để tạo nên một kiểu cấu trúc mới sẽ là:

struct TênKiểuCấuTrúc

```c
{
    Khai báo các biến thành phần;
};
```

#### 7.1.3. Khai báo biến kiểu cấu trúc

Các thao tác định nghĩa kiểu cấu trúc ở trên không tạo ra bất kỳ vùng nhớ dữ liệu nào trong bộ nhớ chương trình, mà thay vào đó là tạo ra các kiểu dữ liệu mới để dùng cho việc khai báo biến. Các biến kiểu cấu trúc cũng được khai báo tương tự như các biến kiểu dữ liệu khác. Xét câu lệnh khai báo biến sau:

```c
struct SinhVien  a,b;
```

Câu lệnh này đã khai báo ra biến a thuộc kiểu cấu trúc SinhVien và biến b thuộc kiểu cấu trúc SinhVien . Trong câu lệnh này, từ khóa struct là bắt buộc, SinhVien là tên của kiểu cấu trúc đã được định nghĩa trước đó, và a,b là tên của các biến được khai báo. Vì thuộc kiểu cấu trúc SinhVien nên mỗi biến a và b sẽ có 5 biến thành phần, mang tên gọi lần lượt là hoTen, MSSV, diemGiuaKy, diemCuoiKy, diemTongKet. Vùng nhớ của các biến a và b sẽ được phát sinh như hình sau:

![Vùng nhớ của hai biến cấu trúc a và b thuộc kiểu SinhVien.](assets/giaotrinh-c/hinh-struct-ab.png)

Lúc này, kích thước của vùng nhớ mỗi biến a, b sẽ bằng tổng kích thước của các biến thành phần ( hoTen, MSSV, diemGiuaKy, diemCuoiKy, diemTongKet ). Lưu ý với các biến thành phần của mỗi biến cấu trúc, máy tính sẽ cấp vùng nhớ theo đơn vị word (thường là 4 byte). Chẳng hạn, biến thành phần hoTen của biến a và biến b ở trên, đã được định nghĩa trong kiểu cấu trúc SinhVien là một mảng một chiều gồm 40 ký tự, thì máy tính sẽ cấp vùng nhớ cho thành phần này là 10 words (tương đương 40 bytes). Nếu thành phần hoTen được định nghĩa là mảng 38 ký tự:

```c
struct SinhVien
{
    char hoTen[38];
    char MSSV[12];
    float diemGiuaKy;
    float diemCuoiKy;
    float diemTongKet;
};
```

thì máy tính cũng sẽ cấp vùng nhớ cho thành phần này hoTen của biến a hoặc biến b là 10 words (tức 40 bytes, dư 2 bytes).

Khi khai báo một biến cấu trúc, có thể tiến hành khởi tạo giá trị ban đầu cho các biến thành phần của biến cấu trúc này. Ví dụ câu lệnh khai báo biến sau:

```c
struct ThietBi  c = {"Quat", 2019, 225.5, 'T'};
```

sẽ phát sinh vùng nhớ cho biến c thuộc kiểu cấu trúc ThietBi và khởi tạo giá trị ban đầu cho các biến thành phần của biến c như sau:

![Vùng nhớ của biến c thuộc kiểu cấu trúc ThietBi, tổng kích thước 32 bytes.](assets/giaotrinh-c/hinh-struct-c-32byte.png)

Như vậy, cú pháp chung để khai báo các biến thuộc kiểu cấu trúc sẽ là:

```c
struct TênKiểuCấuTrúc tênBiến;
```

hoặc

```c
struct TênKiểuCấuTrúc tênBiến = {các giá trị khởi tạo};
```

Với kiểu cấu trúc, các phép toán có thể sử dụng được trên các biến cấu trúc là: phép gán = giữa các biến cấu trúc cùng kiểu, phép toán lấy địa chỉ & của một biến cấu trúc, phép truy xuất . tới các biến thành phần của một biến cấu trúc. Các phép so sánh (ví dụ: ==, !=, ...) sẽ không thể thực hiện được trên các biến cấu trúc. Chẳng hạn ở đoạn lệnh sau:

```c
struct ThietBi  c = {"Quat", 2019, 225.5, 'T'};
struct ThietBi d;
d = c; //gan du lieu cua c vao d
//phep toan hop le
if (d != c)   //phep toan khong hop le
    printf("Du lieu khac nhau");
```

thì trình biên dịch sẽ báo lỗi ở dòng lệnh 6 if (d != c) vì phép so sánh khác nhau != không thể thực hiện được trên hai biến cấu trúc d và c.

#### 7.1.4 .Truy xuất tới các thành phần của biến cấu trúc

Có hai toán tử có thể được sử dụng để truy xuất tới các thành phần của một vùng nhớ kiểu cấu trúc: toán tử dấu chấm (.) và toán tử mũi tên (->) .

Toán tử dấu chấm (.) hay còn gọi là toán tử thành phần cấu trúc dùng để truy xuất tới các biến thành phần của một biến cấu trúc thông qua tên gọi của biến cấu trúc đó. Ví dụ, với biến c thuộc kiểu cấu trúc ThietBi đã khai báo ở trên:

```c
struct ThietBi  c = {"Quat", 2019, 225.5, 'T'};
```

thì ta có thể thực hiện in thông tin của các biến thành phần của biến c bằng câu lệnh:

```c
printf("%s, %d, %.1f, %c\n",c.tenTB,c.namSanXuat,c.giaTien,c.trangThai);
```

và thu được kết quả in ra màn hình sẽ là:

```c
Quat, 2019, 225.5, T
```

Như vậy, các truy xuất : c.tenTB, c.namSanXuat, c.giaTien, c.trangThai sẽ truy xuất vào các thành phần tenTB, namSanXuat, giaTien, trangThai của biến c như hình sau:

![Truy xuất các biến thành phần của biến cấu trúc c bằng toán tử dấu chấm.](assets/giaotrinh-c/hinh-truy-xuat-struct.png)

Toán tử mũi tên, hay còn gọi là toán tử con trỏ cấu trúc, bao gồm dấu trừ (-) và dấu so sánh lớn hơn (>) dùng để truy xuất tới các biến thành phần của một vùng nhớ kiểu cấu trúc thông qua một con trỏ cấu trúc. Điều này sẽ được minh họa rõ hơn ở phần sau.

Xét một chương trình được viết như sau:

```c
#include <stdio.h>
#include <conio.h>
struct ThietBi
{
    char tenTB[20];
    int namSanXuat;
    float giaTien;
    char  trangThai;
};
int main (void)
{
    char tam[2];
    struct ThietBi  c = {"NA", 0, 0, 'T'};
    printf("Nhap thong tin cua 1 thiet bi:\n");
    printf("Nhap ten: ");
    gets(c.tenTB);
    printf("Nhap nam san xuat: ");
    scanf("%d",&c.namSanXuat);
    printf("Nhap gia tien: ");
    scanf("%f",&c.giaTien);
    gets(tam);
    printf("Nhap trang thai: Tot (T) hoac Hong
    (H): ");
    scanf("%c",&c.trangThai);
    printf("\nThong tin thiet bi da nhap:\n");
    printf("%s, %d, %.1f, %c\n",c.tenTB,c.namSanXuat,c.giaTien,c.trangThai);
    getch();
    return 0;
}
```

Trong chương trình này, kiểu cấu trúc ThietBi đã được định nghĩa ở trước hàm main ở đoạn từ dòng lệnh số 4 đến dòng lệnh số 10. Việc định nghĩa kiểu cấu trúc ThietBi trước hàm main nhằm đảm bảo rằng kiểu ThietBi được tạo ra có thể được sử dụng trong toàn chương trình (hàm main và các hàm khác – nếu có). Trong chương trình chính – hàm main – biến c thuộc kiểu cấu trúc ThietBi được khai báo và khởi tạo giá trị ban đầu ở dòng lệnh số 15. Vùng nhớ dành cho biến c được cấp phát và khởi tạo giá trị ban đầu như hình sau:

![Vùng nhớ của biến c ngay sau khi khởi tạo giá trị ban đầu.](assets/giaotrinh-c/hinh-struct-c-gan-tri.png)

Các câu lệnh ở đoạn lệnh từ dòng lệnh số 17 đến dòng lệnh số 31 có tác dụng yêu cầu người dùng nhập các thông tin: tên thiết bị, năm sản xuất, giá tiền, và trạng thái thiết bị, sau đó lưu vào vùng nhớ của biến c. Câu lệnh gets(tam) ; ở dòng lệnh số 28 có tác dụng xóa bỏ ký tự Enter còn xót lại của lệnh scanf dữ liệu trước đó scanf(“%f”,&c.giaTien) ; ở dòng lệnh số 26, giúp cho việc nhập ký tự sau đó scanf(“%c”,&c. trangThai) ; ở dòng lệnh số 31 không bị trôi.

Các câu lệnh trong đoạn lệnh từ dòng lệnh số 33 đến dòng lệnh số 35 có tác dụng in ra màn hình các thông tin đã lưu trong biến c. Kết quả sau khi chạy chương trình trên là:

```c
Nhap thong tin cua 1 thiet bi:
Nhap ten: may lanh
Nhap nam san xuat: 2019
Nhap gia tien: 4.5
Nhap trang thái: Tot (T) hoac Hong (H): T
Thong tin thiet bi da nhap:
may lanh, 2019, 4.5, T
```

trong đó, các thông tin: may lanh , 2019 , 4.5 , T là thông tin người dùng đã nhập vào từ bàn phím.

#### 7.1.5. Mảng một chiều kiểu cấu trúc

Khi cần phát sinh nhiều vùng nhớ cấu trúc cùng chung một kiểu cấu trúc, ta có thể khai báo một mảng một chiều các phần tử kiểu cấu trúc. Mảng một chiều các phần tử kiểu cấu trúc sẽ được khai báo tương tự như các mảng một chiều khác. Câu lệnh khai báo một mảng một chiều sau:

```c
struct ThietBi  d[5];
```

sẽ tạo ra một mảng một chiều d gồm 5 phần tử kiểu ThietBi . Trong câu lệnh này, từ khóa struct là bắt buộc, ThietBi là tên của kiểu cấu trúc đã định nghĩa trước đó, d là tên mảng, và 5 là số lượng phần tử mảng. Lúc này, chương trình sẽ phát sinh vùng nhớ cho mảng d gồm 5 phần tử như sau:

![Vùng nhớ của mảng d gồm 5 phần tử kiểu cấu trúc ThietBi.](assets/giaotrinh-c/hinh-mang-struct-d.png)

Trong mảng d, các phần tử mảng lần lượt có tên gọi là d[0], d[1], d[2], d[3], và d[4]; mỗi phần tử mảng sẽ mang định dạng dữ liệu của kiểu cấu trúc ThietBi . Hay nói cách khác, mỗi ô nhớ d[i] (i = 0 – 4) đều có các biến thành phần là: tenTB, namSanXuat, giaTien, trangThai. Chẳng hạn, ô nhớ d[0] sẽ có vùng nhớ chi tiết như sau:

![Chi tiết vùng nhớ của phần tử mảng d[0].](assets/giaotrinh-c/hinh-mang-struct-d0.png)

Các phần tử mảng còn lại (d[1], d[2], d[3], d[4]) sẽ có cấu trúc vùng nhớ gồm 4 biến thành phần (tenTB, namSanXuat, giaTien, trangThai) tương tự như phần tử mảng d[0].

Để truy xuất vào các biến thành phần của một phần tử mảng cấu trúc, ta sẽ dùng toán tử dấu chấm (.) như đã đề cập ở phần trước. Ví dụ câu lệnh:

```c
d[0].namSanXuat = 2019;
```

sẽ lưu giá trị số 2019 vào biến thành phần namSanXuat của ô nhớ mảng d[0] như minh họa ở hình sau.

![Gán giá trị 2019 cho biến thành phần d[0].namSanXuat.](assets/giaotrinh-c/hinh-mang-struct-d0-2019.png)

Xét một chương trình khác được viết như sau:

```c
#include <stdio.h>
#include <conio.h>
struct ThietBi
{
    char tenTB[20];
    int namSanXuat;
    float giaTien;
    char  trangThai;
};
int main (void)
{
    char tam[2];
    struct ThietBi  d[5];
    int i, n = 5;
    for (i = 0; i < n; i++)
    {
        printf("\nNhap thong tin cua thiet bi
        thu %d:\n", i);
        printf("Nhap ten: ");
        gets(d[i].tenTB);
        printf("Nhap nam san xuat: ");
        scanf("%d",&d[i].namSanXuat);
        printf("Nhap gia tien: ");
        scanf("%f",&d[i].giaTien);
        gets(tam);
        printf("Nhap trang thai: Tot (T) hoac
        Hong (H): ");
        scanf("%c",&d[i].trangThai);
        gets(tam);
    }
    printf("\nThong tin cac thiet bi da
    nhap:\n");
    for ( i = 0; i < n; i++)
        printf("%s, %d, %.1f, %c\n",d[i].tenTB,d[i].namSanXuat,d[i].giaTien,d[i].trangThai);
    getch();
    return 0;
}
```

Trong chương trình này, mảng một chiều d gồm 5 phần tử kiểu cấu trúc ThietBi được khai báo trong hàm main ở dòng lệnh số 15. Mục đích của việc khai báo mảng d là tạo ra vùng nhớ gồm 5 ô nhớ để lưu trữ thông tin của 5 thiết bị. Mỗi thiết bị sẽ có bốn thành phần thông tin cần lưu trữ là: tenTB, namSanXuat, giaTien, trangThai . Tiếp theo, các thông tin của 5 thiết bị sẽ được người dùng nhập vào từ bàn phím, ở đoạn lệnh từ dòng lệnh số 17 đến dòng lệnh số 36, bằng cách dùng một vòng lặp. Cuối cùng, thông tin của tất cả các thiết bị sẽ được in ra màn hình, ở đoạn lệnh từ dòng lệnh số 39 đến dòng lệnh số 42. Kết quả sau khi chạy chương trình trên là:

```c
1
Nhap thong tin cua thiet bi thu 0:
Nhap ten: quat
Nhap nam san xuat: 2017
Nhap gia tien: 0.25
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 1:
Nhap ten: den
Nhap nam san xuat: 2017
Nhap gia tien: 0.75
Nhap trang thai: Tot (T) hoac Hong (H): H
Nhap thong tin cua thiet bi thu 2:
Nhap ten: may lanh
Nhap nam san xuat: 2018
Nhap gia tien: 4.75
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 3:
Nhap ten: Tivi
Nhap nam san xuat: 2017
Nhap gia tien: 12.5
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 4:
Nhap ten: loa
Nhap nam san xuat: 2017
Nhap gia tien: 2.3
Nhap trang thai: Tot (T) hoac Hong (H): T
Thong tin cac thiet bi da nhap:
quat, 2017, 0.3, T
den, 2017, 0.8, H
may lanh, 2018, 4.8, T
Tivi, 2017, 12.5, T
loa, 2017, 2.3, T
```

trong đó, các thông tin ở các dòng kết quả từ dòng số 2 đến dòng số 30 là thông tin do người dùng nhập vào từ bàn phím.

#### 7.1.6. Con trỏ kiểu cấu trúc

Tương tự như biến con trỏ của các kiểu dữ liệu khác, một biến con trỏ kiểu cấu trúc có thể được dùng để truy xuất tới một vùng nhớ cùng kiểu cấu trúc đó bằng cách sử dụng thông tin địa chỉ của vùng nhớ cần truy xuất. Con trỏ kiểu cấu trúc cũng cần phải được khai báo trước khi sử dụng. Xét các câu lệnh khai báo sau:

```c
struct ThietBi  c = {"Quat", 2019, 225.5, 'T'};
struct ThietBi *p;
```

Câu lệnh ở dòng lệnh số 1 là câu lệnh khai báo biến cấu trúc c thuộc kiểu cấu trúc ThietBi như đã đề cập ở các phần trước. Sau câu lệnh này, chương trình sẽ cấp phát vùng nhớ dữ liệu cho biến c gồm 4 biến thành phần như sau:

![Vùng nhớ của biến cấu trúc c sau khi khởi tạo.](assets/giaotrinh-c/hinh-struct-c-quat.png)

Câu lệnh ở dòng lệnh số 2 là câu lệnh khai báo biến p là một biến con trỏ cấu trúc thuộc kiểu cấu trúc ThietBi . Trong câu lệnh này, từ khóa struct là bắt buộc, ThietBi là tên của kiểu cấu trúc, * là toán tử bắt buộc đặt trước tên biến p để thể hiện p là biến con trỏ. Chương trình sẽ cấp phát một vùng nhớ cho con trỏ p dùng để lưu trữ địa chỉ của vùng nhớ mà con trỏ p muốn trỏ tới. Vùng nhớ của biến con trỏ p lúc này có thể có kích thước là 4 byte (hoặc 8 byte, tùy thuộc vào phần cứng) và được khởi tạo một giá trị ngẫu nhiên như hình dưới, biến p không có các biến thành phần ( tenTB, namSanXuat, giaTien, trangThai ) của kiểu ThietBi như biến c.

![Vùng nhớ của biến con trỏ p, giá trị ngẫu nhiên 1824868116.](assets/giaotrinh-c/hinh-con-tro-p-ngaunhien.png)

Như vậy, cú pháp chung để khai báo một biến con trỏ kiểu cấu trúc sẽ là:

```c
struct TênKiểuCấuTrúc *TênBiếnConTrỏ;
```

Sau khi khai báo, có thể sử dụng con trỏ cấu trúc để trỏ tới một vùng nhớ cấu trúc cùng kiểu cấu trúc với con trỏ. Ví dụ, đoạn lệnh sau:

```c
p = &c;
p->namSanXuat = 2015; //tuc: c.namSanXuat = 2015;
```

sẽ lưu trữ giá trị 2015 vào vùng nhớ c.namSanXuat bằng cách dùng con trỏ p. Ở đây, câu lệnh p = &c ; ở dòng lệnh số 1 sẽ lưu địa chỉ của biến c vào con trỏ p. Ở câu lệnh ở dòng lệnh số 2, toán tử mũi tên (->) được sử dụng để yêu cầu con trỏ p truy xuất tới biến thành phần namSanXuat của vùng nhớ mà p đang lưu địa chỉ, trong trường hợp này là biến thành phần namSanXuat của biến c. Kết quả ta có giá trị 2015 được lưu trong vùng nhớ c.namSanXuat như minh họa ở hình dưới.

![Con trỏ p trỏ tới biến c (địa chỉ 2685540) và gán giá trị 2015 cho c.namSanXuat.](assets/giaotrinh-c/hinh-con-tro-p-troi-c.png)

Sau khi khai báo con trỏ cấu trúc, ta cũng có thể cấp phát bộ nhớ động cho con trỏ để dùng cho việc lưu trữ dữ liệu. Việc cấp phát bộ nhớ động cho con trỏ cấu trúc được thực hiện tương tự như thao tác cấp phát bộ nhớ cho con trỏ của các kiểu dữ liệu khác. Xét câu lệnh cấp phát bộ nhớ cho con trỏ cấu trúc ThietBi p đã khai báo ở trên như sau:

```c
p = (ThietBi*)malloc(sizeof(ThietBi));
```

trong câu lệnh này, hàm malloc được sử dụng để cấp phát cho con trỏ p một ô nhớ dữ liệu kiểu ThietBi , hàm sizeof() được sử dụng để giúp cung cấp thông tin kích thước của một ô nhớ kiểu ThietBi cho hàm malloc . Sau câu lệnh cấp phát này, nếu chương trình cấp phát thành công vùng nhớ cho con trỏ p thì p sẽ lưu địa chỉ của ô nhớ đã cấp phát, nếu không thành công thì p sẽ lưu giá trị NULL.

Ô nhớ cấp phát cho p, (có thể) có địa chỉ hiện tại là 1514208.

![Ô nhớ cấp phát cho con trỏ cấu trúc p có địa chỉ 1514208.](assets/giaotrinh-c/hinh-con-tro-p-cap-phat.png)

Sau khi cấp phát, ta có thể truy xuất tới các biến thành phần của ô nhớ đã cấp phát cho con trỏ p bằng cách sử dụng toán tử mũi tên (->) với con trỏ p. Chẳng hạn câu lệnh:

```c
p->giaTien = 5.6;
```

sẽ thực hiện lưu giá trị 5.6 vào biến thành phần giaTien của ô nhớ đã cấp phát.

![Gán giá trị 5.6 cho biến thành phần p->giaTien của ô nhớ đã cấp phát.](assets/giaotrinh-c/hinh-con-tro-p-giatien.png)

Nếu không còn nhu cầu sử dụng vùng nhớ đã xin cấp phát trước đó, có thể yêu cầu giải phóng bộ nhớ đã cấp phát cho con trỏ bằng cách dùng hàm free() .Ví dụ câu lệnh:

```c
free(p);
```

sẽ giải phóng vùng nhớ đã cấp cho con trỏ p.

Xét một chương trình được viết như sau:

```c
#include <stdio.h>
#include <conio.h>
#include <malloc.h>
struct ThietBi
{
    char tenTB[20];
    int namSanXuat;
    float giaTien;
    char  trangThai;
};
int main (void)
{
    char tam[2];
    int i, n;
    printf("Nhap so n: ");
    scanf("%d",&n);
    struct ThietBi  *p;
    p = (ThietBi*)malloc(n*sizeof(ThietBi));
    if (p == NULL)
        printf("Cap phat bo nho khong thanh cong!");
    else
    {
        for (i = 0; i < n; i++)
        {
            printf("\nNhap thong tin cua thiet bi thu
            28  %d:\n", i);
            gets(tam);
            printf("Nhap ten: ");
            gets((p+i)->tenTB);
            printf("Nhap nam san xuat: ");
            scanf("%d",&(p+i)->namSanXuat);
            printf("Nhap gia tien: ");
            scanf("%f",&(p+i)->giaTien);
            gets(tam);
            printf("Nhap trang thai: Tot (T) hoac
            Hong (H): ");
            scanf("%c",&(p+i)->trangThai);
        }
        printf("\nThong tin cac thiet bi da nhap:\n");
        for ( i = 0; i < n; i++)
            printf("%s, %d, %.1f, %c\n",
        49  (p+i)->tenTB,(p+i)->namSanXuat,(p+i)->giaTien,
        50 (p+i)->trangThai);
    }
    free(p);
    getch();
    return 0;
}
```

Trong chương trình này, con trỏ p kiểu cấu trúc ThietBi được khai báo ở câu lệnh tại dòng lệnh số 20. Sau đó, chương trình sẽ cấp phát động cho con trỏ p một vùng nhớ gồm n ô nhớ kiểu ThietBi bởi câu lệnh ở dòng 21, với số n là giá trị người dùng đã nhập vào từ bàn phím trước đó ở câu lệnh tại dòng 18. Ở đây, việc sử dùng hàm cấp phát bộ nhớ động malloc() đòi hỏi phải khai báo thư viện malloc.h như ở dòng lệnh số 3. Sau đó, chương trình sẽ kiểm tra xem việc cấp phát bộ nhớ có diễn ra thành công hay không. Tiếp tục, chương trình sẽ yêu cầu người dùng nhập dữ liệu cho n thiết bị và lưu vào n ô nhớ đã cấp cho con trỏ p, ở đoạn lệnh từ dòng 27 đến dòng 46. Kế tiếp, chương trình sẽ in ra lại dữ liệu đã lưu trước đó của n thiết bị, ở đoạn lệnh từ dòng 49 tới dòng 52. Cuối cùng, chương trình sẽ giải phóng vùng nhớ đã cấp phát cho con trỏ p bởi lệnh free() ở dòng lệnh số 53.

Kết quả sau khi chạy chương trình trên là:

```c
1
Nhap so n: 3
Nhap thong tin cua thiet bi thu 0:
Nhap ten: may phat song
Nhap nam san xuat: 2018
Nhap gia tien: 35.5
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 1:
Nhap ten: VOM
Nhap nam san xuat: 2017
Nhap gia tien: 0.5
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 2:
Nhap ten: dao dong ky
Nhap nam san xuat: 2019
Nhap gia tien: 35.6
Nhap trang thai: Tot (T) hoac Hong (H): T
Thong tin cac thiet bi da nhap:
may phat song, 2018, 35.5, T
VOM, 2017, 0.5, T
dao dong ky, 2019, 35.6, T
```

trong đó, các thông tin ở các dòng kết quả từ dòng số 2 đến dòng số 20 là thông tin do người dùng nhập vào từ bàn phím.

#### 7.1.7. Sử dụng kiểu cấu trúc với Hàm

Một hàm có thể có các tham số đầu vào kiểu cấu trúc. Khi truyền các biến cấu trúc vào cho hàm, có thể truyền toàn bộ biến cấu trúc đó, hoặc chỉ truyền một vài biến thành phần của biến cấu trúc đó. Khi truyền, có thể truyền giá trị (truyền tham trị) hoặc truyền địa chỉ (truyền tham chiếu) của biến cấu trúc vào cho hàm.

Xét một chương trình được viết như sau:

```c
#include <stdio.h>
#include <conio.h>
struct ThietBi
{
    char tenTB[20];
    int namSanXuat;
    float giaTien;
    char  trangThai;
};
void NhapDuLieu(struct ThietBi *x, int n)
{
    char tam[2];
    int i;
    for (i = 0; i < n; i++)
    {
        printf("\nNhap thong tin cua thiet bi thu
        20 %d:\n", i);
        printf("Nhap ten: ");
        gets((x+i)->tenTB);
        printf("Nhap nam san xuat: ");
        scanf("%d",&(x+i)->namSanXuat);
        printf("Nhap gia tien: ");
        scanf("%f",&(x+i)->giaTien);
        gets(tam);
        printf("Nhap trang thai: Tot (T) hoac
        Hong (H): ");
        scanf("%c",&(x+i)->trangThai);
        gets(tam);
    }
}
void InMotThietBi(struct ThietBi a)
{
    printf("%s, %d, %.1f, %c\n",a.tenTB,a.namSanXuat,a.giaTien,a.trangThai);
}
int main (void)
{
    int i, n = 2;
    struct ThietBi  d[2];
    NhapDuLieu(&d[0],n);
    printf("\nThong tin cac thiet bi da nhap:\n");
    for ( i = 0; i < n; i++)
        InMotThietBi(d[i]);
    getch();
    return 0;
}
```

Trong chương trình này, hàm NhapDuLieu được định nghĩa trong đoạn lệnh từ dòng 13 đến dòng 37. Hàm này có một tham số đầu vào là một con trỏ x kiểu cấu trúc ThietBi , tham số đầu vào này cần được truyền vào địa chỉ của một ô nhớ kiểu ThietBi khi hàm được gọi. Hàm InMotThietBi được định nghĩa trong đoạn lệnh từ dòng 39 đến dòng 43. Hàm này có một tham số đầu vào là một biến dữ liệu a kiểu cấu trúc ThietBi , tham số đầu vào này cần được truyền vào giá trị của một ô nhớ kiểu ThietBi khi hàm được gọi. Trong hàm main, sau khi khai báo mảng 2 phần tử kiểu cấu trúc ThietBi bằng câu lệnh struct ThietBi d[2]; ở dòng lệnh số 48, chương trình sẽ gọi hàm NhapDuLieu bằng câu lệnh NhapDuLieu(&d[0],n) ; ở dòng lệnh 50, thông số &d[0] sẽ truyền địa chỉ của ô nhớ d[0] vào cho con trỏ đầu vào x của hàm NhapDuLieu . Khi hàm NhapDuLieu chạy, con trỏ x sẽ truy xuất tới các ô nhớ của mảng d và lưu dữ liệu vào mảng d. Do đó, dữ liệu khi người dùng nhập vào sẽ được lưu vào vùng nhớ của mảng d. Sau khi hàm NhapDuLieu đã thực hiện xong, hàm main tiếp tục thực hiện vòng lặp for ở dòng lệnh số 53. Vòng lặp này sẽ thực hiện việc in thông tin của từng thiết bị đã nhập. Ở mỗi lần in thông tin, câu lệnh InMotThietBi(d[i]) ; ở dòng lệnh số 54 sẽ gọi hàm InMotThietBi , thông số d[i] sẽ lấy toàn bộ giá trị của ô nhớ thứ i trong vùng nhớ kiểu cấu trúc ThietBi của mảng d truyền vào cho biến đầu vào a của hàm InMotThietBi . Lúc này, tham số a sẽ mang thông tin dữ liệu tương tự như ô nhớ d[i], và hàm InMotThietBi sẽ in các nội dung này ra màn hình.

Kết quả sau khi chạy chương trình trên là:

```c
1
Nhap thong tin cua thiet bi thu 0:
Nhap ten: may vi tinh
Nhap nam san xuat: 2018
Nhap gia tien: 15.5
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 1:
Nhap ten: Tivi
Nhap nam san xuat: 2019
Nhap gia tien: 12.4
Nhap trang thai: Tot (T) hoac Hong (H): T
Thong tin cac thiet bi da nhap:
may vi tinh, 2018, 15.5, T
Tivi, 2019, 12.4, T
```

trong đó, các thông tin ở các dòng kết quả từ dòng số 1 đến dòng số 12 là thông tin do người dùng nhập vào từ bàn phím.

Xét một chương trình khác được viết như sau:

```c
#include <stdio.h>
#include <conio.h>
#include <malloc.h>
struct ThietBi
{
    char tenTB[20];
    int namSanXuat;
    float giaTien;
    char  trangThai;
};
void NhapDuLieu(struct ThietBi *x, int n)
{
    char tam[2];
    int i;
    for (i = 0; i < n; i++)
    {
        printf("\nNhap thong tin cua thiet bi thu
        %d:\n", i);
        gets(tam);
        printf("Nhap ten: ");
        gets((x+i)->tenTB);
        printf("Nhap nam san xuat: ");
        scanf("%d",&(x+i)->namSanXuat);
        printf("Nhap gia tien: ");
        scanf("%f",&(x+i)->giaTien);
        gets(tam);
        printf("Nhap trang thai: Tot (T) hoac Hong
        (H): ");
        scanf("%c",&(x+i)->trangThai);
    }
}
void InMotThietBi(struct ThietBi a)
{
    printf("%s, %d, %.1f, %c\n",a.tenTB,a.namSanXuat,
    a.giaTien,a.trangThai);
}
int main (void)
{
    int i, n;
    printf("Nhap so n: ");
    scanf("%d",&n);
    struct ThietBi  *p;
    p = (ThietBi*)malloc(n*sizeof(ThietBi));
    if (p == NULL)
        printf("Cap phat bo nho khong thanh
    cong!");
    else
        else
    {
        NhapDuLieu(p,n);
        printf("\nThong tin cac thiet bi da
        nhap:\n");
        for ( i = 0; i < n; i++)
            InMotThietBi(*(p+i));
    }
    free(p);
    getch();
    return 0;
}
```

Trong chương trình này, hàm NhapDuLieu và hàm InMotThietBi được định nghĩa tương tự như ở chương trình trước. Trong hàm main, một vùng nhớ mảng một chiều gồm n phần tử kiểu cấu trúc ThietBi được cấp phát động cho con trỏ p. Tiếp đó, câu lệnh NhapDuLieu(p,n) ; ở dòng lệnh 55 sẽ gọi hàm NhapDuLieu , và truyền địa chỉ bắt đầu của vùng nhớ mà p đang quản lý (địa chỉ này đang lưu trong biến p) vào cho con trỏ đầu vào x của hàm NhapDuLieu . Khi hàm NhapDuLieu chạy, con trỏ x sẽ truy xuất tới vùng nhớ của p và lưu dữ liệu người dùng nhập từ bàn phím vào vùng nhớ này. Sau đó, hàm main thực hiện vòng lặp for ở dòng lệnh số 63. Vòng lặp này sẽ thực hiện việc in thông tin của từng thiết bị đã nhập. Ở mỗi lần in thông tin, câu lệnh InMotThietBi(*(p+i)) ; ở dòng lệnh số 59 sẽ gọi hàm InMotThietBi , thông số *(p+i) sẽ lấy toàn bộ giá trị của ô nhớ thứ i trong vùng nhớ kiểu cấu trúc ThietBi của con trỏ p truyền vào cho biến đầu vào a của hàm InMotThietBi . Lúc này, tham số a sẽ mang thông tin dữ liệu tương tự như ô nhớ *(p+i) , và hàm InMotThietBi sẽ in các nội dung này ra màn hình. Kết quả sau khi chạy chương trình trên là:

```c
Nhap so n: 2
Nhap thong tin cua thiet bi thu 0:
Nhap ten: may vi tinh
Nhap nam san xuat: 2018
Nhap gia tien: 15.5
Nhap trang thai: Tot (T) hoac Hong (H): T
Nhap thong tin cua thiet bi thu 1:
Nhap ten: Tivi
Nhap nam san xuat: 2019
Nhap gia tien: 12.4
Nhap trang thai: Tot (T) hoac Hong (H): T
Thong tin cac thiet bi da nhap:
may vi tinh, 2018, 15.5, T
Tivi, 2019, 12.4, T
```

trong đó, các thông tin ở các dòng kết quả từ dòng số 1 đến dòng số 13 là thông tin do người dùng nhập vào từ bàn phím.

Như vậy, khi hàm có tham số đầu vào là kiểu cấu trúc thì lúc gọi hàm, tùy thuộc vào loại tham số đầu vào của hàm, ta có thể thực hiện truyền địa chỉ hoặc truyền giá trị của vùng nhớ kiểu cấu trúc vào cho hàm.

### 7.2. Kiểu union

#### 7.2.1. Giới thiệu kiểu Union

Kiểu Union (hay còn gọi là kiểu hợp nhất) là kiểu dữ liệu tương tự như kiểu cấu trúc nhưng có các biến thành phần cùng chia sẻ chung một vùng nhớ. Trong một số trường hợp, việc dùng chung một vùng nhớ cho các biến thành phần của biến kiểu Union sẽ giúp tiết kiệm bộ nhớ hơn so với biến kiểu cấu trúc. Các biến thành phần của một kiểu Union có thể thuộc các kiểu dữ liệu khác nhau, và kích thước của vùng nhớ dùng chung phải bảo đảm lưu trữ được dữ liệu của biến thành phần có kích thước lớn nhất. Tại một thời điểm, chỉ có một biến thành phần có thể sử dụng vùng nhớ chung này.

#### 7.2.2. Định nghĩa một kiểu Union mới

Kiểu Union được định nghĩa tương tự như kiểu cấu trúc. Xét đoạn lệnh định nghĩa một kiểu Union như sau:

```c
union KieuSo
{
    int x;
    double y;
};
```

trong đoạn lệnh này, union là từ khóa bắt buộc, KieuSo là tên của kiểu dữ liệu, các biến thành phần được khai báo trong cặp dấu ngoặc { }; ở đây là biến thành phần x kiểu int và biến thành phần y kiểu double. Lúc này, chương trình sẽ tạo ra một kiểu union mới có tên là KieuSo, kiểu này có 2 biến thành phần là biến x kiểu int và biến y kiểu double .

Như vậy, cú pháp chung của thao tác định nghĩa để tạo nên một kiểu cấu trúc mới sẽ là:

union TênKiểuUnion

```c
{
    Khai báo các biến thành phần;
};
```

#### 7.2.3. Khai báo và sử dụng biến kiểu Union

Các biến union cần được khai báo trước khi sử dụng, tương tự như biến cấu trúc và các biến bình thường khác. Xét chương trình sau:

```c
#include <stdio.h>
#include <conio.h>
union KieuSo
{
    int x;
    double y;
};
int main (void)
{
    union KieuSo a;
    printf("Kich thuoc bien a: %d\n",sizeof(a));
    a.x = 5;
    printf("%d\n",a.x);
    a.y = 7.85;
    printf("%f\n",a.y);
    getch();
    return 0;
}
```

Trong chương trình này, ở dòng lệnh số 14, câu lệnh union KieuSo a; là câu lệnh khai báo biến a thuộc kiểu dữ liệu KieuSo là kiểu union. Sau câu lệnh này, chương trình sẽ phát sinh cho biến a một vùng nhớ, vùng nhớ này sẽ là vùng nhớ dùng chung cho cả hai biến thành phần a.x và a.y; kích thước vùng nhớ sẽ là 8 bytes (bằng với kích thước vùng nhớ của biến thành phần lớn nhất – biến y kiểu double) như minh họa ở hình sau:

![Vùng nhớ dùng chung của biến union a, kích thước 8 bytes.](assets/giaotrinh-c/hinh-union.png)

Câu lệnh printf(“Kich thuoc bien a: %d\n”,sizeof(a)) ; ở dòng lệnh số 15 sẽ thực hiện in ra màn hình thông số kích thước vùng nhớ của biến a, ta sẽ có kết quả là:

```c
Kich thuoc bien a: 8
```

Tiếp tục, ở dòng lệnh số 17, câu lệnh a.x = 5; sẽ tiến hành lưu giá trị số nguyên 5 vào vùng nhớ dùng chung. Lúc này, muốn truy xuất đúng tới dữ liệu số nguyên đã lưu vào ô nhớ này, ta phải dùng tên gọi a.x, như trong câu lệnh printf(“%d\n”,a.x) ; ở dòng lệnh số 18. Lệnh in này sẽ in ra màn hình số 5 như hình dưới:

```c
5
```

Ở dòng lệnh thứ 20, câu lệnh a.y = 7.85; sẽ thực hiện lưu số 7.85 vào vùng nhớ dữ liệu của biến a. Lúc này, dữ liệu mới sẽ thay thế dữ liệu cũ trong vùng nhớ, vùng nhớ dùng chung này của a sẽ có định dạng số thực và ta phải dùng tên gọi a.y để truy xuất tới dữ liệu số thực. Câu lệnh printf(“%f\n”,a.y) ; ở dòng lệnh số 21 thực hiện việc in dữ liệu số thực trong vùng nhớ biến a và ta có kết quả như bên dưới:

```c
Kich thuoc bien a: 8
7.850000
```

### 7.3. Kiểu liệt kê (ENUMERATION)

#### 7.3.1. Giới thiệu kiểu liệt kê

Kiểu liệt kê, enumeration – gọi tắt là kiểu enum, là một tập hợp các hằng số kiểu số nguyên được biểu diễn dưới các tên gọi khác nhau. Các giá trị hằng số nguyên bên trong một kiểu liệt kê được mặc định bắt đầu bằng số 0, và sẽ tăng lên 1 đơn vị sau mỗi giá trị được liệt kê.

#### 7.3.2. Định nghĩa một kiểu Enumeration mới

Tương tự như kiểu cấu trúc hoặc union, kiểu liệt kê là kiểu dữ liệu do người dùng tự tạo và cần phải được định nghĩa trước khi sử dụng. Đoạn lệnh định nghĩa một kiểu liệt kê sau:

```c
enum MauSac
{
    Den, Nau, Do, Cam, Vang, Luc, Lam, Tim, Xam, Trang
};
```

sẽ tạo ra một kiểu liệt kê mới có tên gọi là MauSac, các tên định danh bên trong: Den, Nau, Do, Cam, Vang, Luc, Lam, Tim, Xam, Trang sẽ tương ứng với các số nguyên lần lượt là: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Đơn giản hơn, có thể hiểu các giá trị 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 bên trong kiểu MauSac sẽ có tên định danh tương ứng là Den, Nau, Do, Cam, Vang, Luc, Lam, Tim, Xam, Trang . Khác với kiểu cấu trúc hoặc kiểu union, kiểu liệt kê không tồn tại các biến thành phần.

Như vậy, cú pháp để định nghĩa một kiểu liệt kê mới sẽ là:

```c
enum TênKiểuLiệtKê
{
    Danh sách tên định danh;
};
```

#### 7.3.3. Khai báo và sử dụng biến kiểu liệt kê

Thao tác định nghĩa kiểu liệt kê ở phần trước hoàn toàn chưa tạo ra vùng nhớ dữ liệu nào cho người dùng. Muốn có vùng nhớ dữ liệu, người dùng cần tiến hành khai báo các biến kiểu liệt kê. Một biến kiểu liệt kê sẽ được khai báo tương tự như các biến bình thường khác. Hãy xem xét chương trình sau:

```c
#include <stdio.h>
#include <conio.h>
enum MauSac
{
    Den, Nau, Do, Cam, Vang, Luc, Lam, Tim, Xam, Trang
};
int main (void)
{
    enum MauSac R;
    printf("Kich thuoc R: %d\n",sizeof(R));
    printf("Gia tri R: %d\n",R);
    R = Den;
    printf("Gia tri R: %d\n", R);
    R = Cam;
    printf("Gia tri R: %d\n", R);
    getch();
    return 0;
}
```

Ở dòng lệnh số 11, câu lệnh enum MauSac R; chính là câu lệnh khai báo một biến kiểu MauSac - là kiểu liệt kê đã định nghĩa trước đó. Câu lệnh này sẽ khai báo ra một biến có tên là R mang kiểu dữ liệu MauSac . Sau câu lệnh này, chương trình sẽ cấp cho biến R một ô nhớ có kích thước 4 bytes, và mang một giá trị ngẫu nhiên, như minh họa ở hình dưới.

![Vùng nhớ của biến liệt kê R: kích thước 4 bytes, giá trị ngẫu nhiên.](assets/giaotrinh-c/hinh-bien-enum-r.png)

Hai câu lệnh ở dòng lệnh số 12 và 13 sẽ in ra kích thước và giá trị hiện tại của biến R, kết quả thu được sẽ là:

```c
Kich thuoc R: 4
Gia tri R: 1824868116
```

Tiếp tục, ở dòng lệnh 15, câu lệnh R = Den ; sẽ thực hiện gán một giá trị dữ liệu mới vào R. Lúc này, tên định danh Den là một trong số các tên định danh đã được liệt kê ở phần định nghĩa của kiểu MauSac và tương ứng với số 0. Do đó, câu lệnh R = Den ; sẽ làm cho giá trị biến R bằng 0. Kết quả in ra màn hình của lệnh in printf(“Gia tri R: %d\n”, R) ; ở dòng lệnh 16 sẽ như hình dưới.

```c
Kich thuoc R: 4
Gia tri R: 1824868116
Gia tri R: 0
```

Tương tự, câu lệnh R = Cam ; ở dòng lệnh 18 sẽ làm cho giá trị biến R bằng 3 vì tên định danh Cam tương đương với số 3 như đã liệt kê ở phần định nghĩa của kiểu MauSac . Kết quả của lệnh in printf(“Gia tri R: %d\n”, R); ở dòng lệnh 19 sẽ như hình dưới.

```c
Kich thuoc R: 4
Gia tri R: 1824868116
Gia tri R: 0
Gia tri R: 3
```

### 7.4. Bài tập

- [ ] 1.  Hãy tìm và sửa lỗi trong các câu/đoạn lệnh sau:

```c
a. struct
{
int ma;
int namSX;
} thietBi;
b. #include<stdio.h>
struct HinhChuNhat
{
float dai,rong;
};
int main(void)
{
printf("Nhap chieu dai, rong:\n");
scanf("%f%f",&HinhChuNhat.dai, &HinhChuNhat.
rong)
float dienTich = HinhChuNhat.dai * HinhChuNhat.
rong;
printf("%f",dienTich);
return 0;
}
c. #include<stdio.h>
struct Diem
{
float giuaKy;
float cuoiKy;
};
int main(void)
{
struct Diem a;
scanf("%f",&giuaKy.a);
scanf("%f",&cuoiKy.a);
return 0;
}
d. #include<stdio.h>
struct DuLieu a[3]
{
float nhietDo;
float doAm;
};
int main(void)
{
printf("Nhap du lieu buoi sang, trua,
chieu:\n");
int i;
for(i = 0; i < 3; i++)
{
scanf("%f",&a[i].nhietDo);
scanf("%f",&a[i].doAm);
}
return 0;
}
```

Cho chương trình dưới. Hãy phân tích và cho biết chương trình thực hiện chức năng gì?

```c
#include <stdio.h>
#include <conio.h>
#include <malloc.h>
struct SinhVien
{
    char hoTen[30];
    float   diemToan;
    float   diemLy;
    float   diemHoa;
    float diemTB;
};
void  NhapDs( struct SinhVien *sv, int n)
{
    int  i; char tam[2];
    puts ("Nhap du lieu cho danh sach Sinh
    vien");
    for (i = 0; i < n; i++)
    {
        printf ( "Sinh vien thu : %d\n",i);
        puts ( "Ho ten:");
        gets ((sv+i)->hoTen);
        puts ("Diem toan:");
        scanf ("%f", &(sv+i)->diemToan);
        puts ("Diem ly:");
        scanf ("%f", &(sv+i)->diemLy);
        puts ("Diem hoa:");
        scanf ("%f", &(sv+i)->diemHoa);
        gets(tam);
        (sv+i)->diemTB = ((sv+i)->diemToan +
        (sv+i)->diemLy + (sv+i)->diemHoa)/3;
    }
}
void  InDs(struct SinhVien *sv, int n)
{
    int  i;
    puts("Danh sach sinh vien da nhap:");
    for (i = 0; i < n; i++)
    {
        puts ( "ho ten: ");
        puts ((sv+i)->hoTen);
        printf ("Diem tb: %f\n",
        (sv+i)->diemTB);
    }
}
int main (void)
{
    int  n, i;
    char tam[2];
    float max;
    struct  SinhVien *a;
    puts ("Nhap so luong sinh vien: ");
    scanf ("%d",&n);
    gets(tam);
    a = (SinhVien*) malloc (n*sizeof (SinhVien));
    if (a == NULL)
        puts ("Khong the cap phat bo nho.");
    else
    {
        NhapDs (a,n);
        InDs (a, n);
        max = a->diemTB;
        for (i= 0; i <n; i++)
            if( max < (a +i)->diemTB)
                max = (a +i)->diemTB;
        puts("sinh vien co diem trung binh lon
        nhat:");
        for (i= 0; i <n; i++)
            if( max == (a +i)->diemTB)
        {
            puts( (a + i)->hoTen);
            printf ( "Diem tb: %f\n",
            (a + i)->diemTB);
        }
    }
    free (a);
    getch();
    return 0;
}
```

Tạo cấu trúc để quản lý điểm của sinh viên với các thông tin sau:

- Họ và tên
- Mã số sinh viên
- Điểm giữa kỳ
- Điểm cuối kỳ
- Điểm tổng kết, trong đó điểm giữa kỳ chiếm 50% và điểm cuối kỳ chiếm 50%.

Viết chương trình nhập dữ liệu cho 10 sinh viên và thực hiện các yêu cầu sau:

a. In ra danh sách sinh viên đậu, sinh viên đậu là sinh viên có điểm tổng kết >= 5 và điểm giữa kỳ khác 0.

b. In ra sinh viên có điểm tổng kết thấp nhất.

c. Sắp xếp và in ra danh sách sinh viên đã nhập theo thứ tự tăng dần của điểm tổng kết.

- [ ] 4.  Viết chương trình như ở bài tập trên nhưng xử lý cho  n  sinh viên, yêu cầu cấp phát động bộ nhớ cho mảng cấu trúc.
- [ ] 5.  Tạo một kiểu cấu trúc để quản lý thiết bị, với các thông tin của mỗi thiết bị cần quản lý là:

- Mã thiết bị (kiểu int)
- Tên thiết bị (chuỗi)
- Năm sản xuất (kiểu int)
- Trạng thái hiện tại (Tắt hay Mở)

Viết chương trình thực hiện các công việc sau:

a. Nhập thông tin của 10 thiết bị.

b. In ra danh sách các thiết bị đang Mở. Nếu tất cả các thiết bị đều đang Tắt thì in thông báo “Tat ca thiet bi da Tat”.

c. Tìm và in ra danh sách các thiết bị được sản xuất từ năm 2018 trở về trước.

d. Cho phép người dùng tìm kiếm thông tin của một thiết bị nào đó bằng cách nhập vào mã thiết bị để tìm kiếm. Nếu tìm thấy thì in thông tin của thiết bị đã tìm thầy, nếu không tìm thấy thì in thông báo “Khong tim thay”.

- [ ] 6.  Viết chương trình như ở bài tập trên nhưng xử lý cho  n  thiết bị, yêu cầu cấp phát động bộ nhớ cho mảng cấu trúc.
- [ ] 7.  Tạo cấu trúc để quản lý danh bạ điện thoại với các nội dung:

- Họ tên
- Số điện thoại
- Địa chỉ

Viết chương trình quản lý danh bạ điện thoại với các chức năng sau:

a. In ra menu lựa chọn với các tủy chọn:

Nhập số 1: Thêm tên vào danh bạ Nhập số 2: Tìm theo số điện thoại nhập vào Nhập số 3: Thoát chương trình b. Chương trình sẽ xử lý theo lựa chọn của người dùng sau khi nhập số tương ứng với menu chức năng, trong đó khi xử lý chức năng Thêm tên, danh bạ lưu được tối đa 40 số.

## Chương 8. Tiền xử lý

**Mục tiêu:**

Sau khi kết thúc chương này, người đọc có thể:

- Khai báo được các thư viện bằng chỉ thị bao hàm tệp.
- Khai báo được các đối tượng thay thế bằng các chỉ thị định nghĩa.
- Sử dụng các chỉ thị điều khiển trình biên dịch để biên dịch hoặc không biên dịch một đoạn chương trình.

### 8.1. Giới thiệu

Tiền xử lý (preprocessor) là các xử lý đơn giản có chức năng xử lý tập tin mã nguồn trước khi trình biên dịch đọc và biên dịch chúng. Các bộ tiền xử lý trong ngôn ngữ C được bắt đầu với một số từ khóa đặc biệt, bắt đầu các tiền xử lý là ký tự #. Bộ tiền xử lý thay thế các lệnh tiền xử lý bằng các đoạn chương trình, hoặc các đoạn lệnh tương ứng và đặt trong tập tin mã nguồn. Chương này giới thiệu đến người đọc một số tiền xử lý thông dụng và cách sử dụng chúng để tạo ra các chương trình tối ưu hơn. Các tiền xử lý không theo nguyên tắc giống như các lệnh trong chương trình C.

Quá trình tiền xử lý được thực hiện trước khi quá trình biên dịch diễn ra, được biểu diễn như hình 8.1.

*Hình 8.1. Sơ đồ khối quá trình tệp mã nguồn được tiền xử lý trước khi đưa đến trình biên dịch.*

![Hình 8.1. Sơ đồ khối quá trình tệp mã nguồn được tiền xử lý trước khi đưa đến trình biên dịch.](assets/giaotrinh-c/hinh-8-1.png)

### 8.2. Chỉ thị bao hàm tệp (INCLUDE)

Chỉ thị bao hàm tệp (include) xuất hiện trong hầu hết các chương trình C. Chỉ thị bao hàm tệp được sử dụng để khai báo thư viện, đồng thời được sử dụng để khai báo các tệp tiêu đề (header file). Trong các ví dụ ở các chương trước đó, chúng ta thường bắt gặp chỉ thị bao hàm tệp sau:

```c
#include  <stdio.h>
#include <math.h>
#include "myfile.h"
```

Khai báo trên cho phép bộ tiền xử lý đính kèm các mã nguồn của các hàm trong thư viện stdio.h hoặc trong thư viện math.h khi hàm được gọi. Khi sử dụng cặp ký hiệu < >, bộ tiền xử lý sẽ tự hiểu rằng các tệp thư viện này được lưu trong thư mục mà trình biên dịch được cài đặt trong hệ thống. Mặt khác, khi sử dụng cặp ký hiệu “ “ , bộ tiền xử lý sẽ tìm tệp có tên tương ứng trong cùng một thư mục với tệp mã nguồn, nơi khai báo bao hàm tệp.

Ngoài việc khai báo các thư viện chuẩn, chỉ thị bao hàm tệp còn được sử dụng rộng rãi khi khai báo tập tiêu đề. Trong các ví dụ trong tài liệu, các chương trình khá đơn giản và được đặt trong cùng một tệp mã nguồn. Thực tế các chương trình hệ thống phức tạp hơn, số lượng hàm nhiều hơn và được chia ra nhiều tệp mã nguồn khác nhau. Chương trình có thể gọi một hàm mà hàm đó được định nghĩa ở một tệp mã nguồn khác. Lúc này, hàm cần được khai báo trong tệp tiêu đề.

Ví dụ: Viết chương trình thực hiện các yêu cầu sau: nhập mảng n phần tử, in các phần tử mảng, tìm giá trị lớn nhất, nhỏ nhất trong các phần tử mảng. Tính giá trị trung bình phần tử lớn nhất và phần tử nhỏ nhất mảng. Hoán đổi phần tử lớn đầu tiên và phần tử cuối cùng của mảng. In mảng theo thứ tự tăng dần. Mỗi chức năng đều được viết dưới dạng 1 hàm.

```c
/*chapter08.c*/
#include  <stdio.h>
#include <stdlib.h>
void Sapxepmang(int a[],int n);
void Inmang(int a[],int n);
void Nhapmang(int a[],int n);
int Timmax (int *a,int n);
int Timmin (int *a,int n);
void  Hoanvi(int *x, int *y);
float Tinhtrungbinh(int a, int b);
void main (void)
{
    int *arr;
    int n ;
    int max, min;
    float tb;
    do{
        printf(" Nhap n ");
        scanf("%d",&n);
    }while(n<=0);
    arr = (int*) malloc (n*sizeof(int));
    Nhapmang(arr,n);
    printf("cac phan tu mang :\n");
    Inmang(arr,n);
    max = Timmax(arr,n);
    min = Timmin(arr,n);
    printf("\nmax = %d, min = %d",max,min);
    tb=Tinhtrungbinh(max,min);
    printf("\ntrung binh  = %.2f ",tb);
    Hoanvi(&arr[0],&arr[n-1]);
    printf("\ncap nhat mang  :\n");
    Inmang(arr,n);
    Sapxepmang(arr,n);
    printf("\nmang sau khi sap xep :\n");
    Inmang(arr,n);
}
void Sapxepmang(int a[],int n)
{
    int i,j,tam ;
    for (i=0;i<n-1 ; i++)
        for(j=i+1; j<n;j++)
    {
        if (a[i]>a[j])
        {
            tam = a[i];
            a[i]= a[j];
            a[j]=tam;
        }
    }
}
void Inmang(int a[],int n)
{
    int i;
    for (i=0;i<n ; i++)
        printf("%d, ",a[i]);
}
void Nhapmang(int a[],int n)
{
    int i;
    for (i=0;i<n ; i++)
    {
        printf(" \na[%d] =  ",i);
        scanf("%d",&a[i]);
    }
}
int Timmax (int *a,int n)
{
    int i,max ;
    max = a[0] ;
    for (i=1;i<n;i++)
        max = (max<a[i])?a[i]:max ;
    return max ;
}
int Timmin (int *a,int n)
{
    int i,min ;
    min = a[0] ;
    for (i=1;i<n;i++)
        min = (min>a[i])?a[i]:min ;
    return min ;
}
void  Hoanvi(int *x, int *y)
{
    int tam;
    tam  = *x;
    *x = *y;
    *y = tam;
}
float Tinhtrungbinh(int a, int b)
{
    return (float)(a+b)/2 ;
}
```

Kết quả khi chạy chương trình với n được nhập n = 6, các phần tử mảng được nhập và kết quả tương ứng như sau:

```c
Nhap n 6
a[0] =  9
a[1] =  4
a[2] =  2
a[3] =  7
a[4] =  5
a[5] =  6
cac phan tu mang :
9, 4, 2, 7, 5, 6,
max = 9, min = 2
trung binh  = 5.50
cap nhat mang  :
13 6, 4, 2, 7, 5, 9,
mang sau khi sap xep :
15 2, 4, 5, 6, 7, 9,
```

Trong ví dụ trên, chương trình chính được viết đầu tiên. Có 7 hàm do người lập trình định nghĩa. Các hàm được khai báo từ dòng thứ 4 đến dòng thứ 10, và được định nghĩa tương ứng bên dưới.

Khi số lượng hàm cũng như số lượng dòng lệnh chương trình tăng lên, người ta thường chia ra thành nhiều tệp mã nguồn. Điều này hữu ích cho quá trình kiểm thử và phát triển chương trình. Khi các hàm được viết trong một tệp, các hàm từ các tệp khác cũng có thể sử dụng các hàm này. Như vậy, việc tách riêng các hàm giúp cho việc chia sẻ các hàm thuận lợi hơn.

Ví dụ trên sẽ được viết lại với 3 tệp, tệp chứa hàm main sẽ gọi các hàm trong 2 tệp còn lại. Các tệp đều nằm trong cùng một thư mục. Chương trình được sắp xếp lại như sau bao gồm một tệp chứa chương trình chính.

```c
/*chapter08.c*/
#include  <stdio.h>
#include <stdlib.h>
#include "thaotacmang.h"
#include "tinhtoan.h"
void main (void)
{
    int *arr;
    int n ;
    int max, min;
    float tb;
    do{
        printf(" Nhap n ");
        scanf("%d",&n);
    }while(n<=0);
    arr = (int*) malloc (n*sizeof(int));
    Nhapmang(arr,n);
    printf("cac phan tu mang :\n");
    Inmang(arr,n);
    max = Timmax(arr,n);
    min = Timmin(arr,n);
    printf("\nmax = %d, min = %d",max,min);
    tb=Tinhtrungbinh(max,min);
    printf("\ntrung binh  = %.2f ",tb);
    Hoanvi(&arr[0],&arr[n-1]);
    printf("\ncap nhat mang  :\n");
    Inmang(arr,n);
    Sapxepmang(arr,n);
    printf("\nmang sau khi sap xep :\n");
    Inmang(arr,n);
}
```

Trong chương trình trên, các hàm thao tác trên mảng được đặt trong tệp `thaotacmang.h`. Tệp này có nội dung như sau:

```c
/*thaotacmang.h*/
void Sapxepmang(int a[],int n)
{
    int i,j,tam ;
    for (i=0;i<n-1 ; i++)
        for(j=i+1; j<n;j++)
    {
        if (a[i]>a[j])
        {
            tam = a[i];
            a[i]= a[j];
            a[j]=tam;
        }
    }
}
void Inmang(int a[],int n)
{
    int i;
    for (i=0;i<n ; i++)
        printf("%d, ",a[i]);
}
void Nhapmang(int a[],int n)
{
    int i;
    for (i=0;i<n ; i++){
        printf(" \na[%d] =  ",i);
        scanf("%d",&a[i]);
    }
}
int Timmax (int *a,int n)
{
    int i,max ;
    max = a[0] ;
    for (i=1;i<n;i++)
        max = (max<a[i])?a[i]:max ;
    return max ;
}
int Timmin (int *a,int n)
{
    int i,min ;
    min = a[0] ;
    for (i=1;i<n;i++)
        min = (min>a[i])?a[i]:min ;
    return min ;
}
```

Tương tự, các hàm tính toán được tách riêng sang một tệp được đặt tên `tinhtoan.h`. Tệp này có nội dung như sau:

```c
/*tinhtoan*/
void  Hoanvi(int *x, int *y)
{
    int tam;
    tam  = *x;
    *x = *y;
    *y = tam;
}
float Tinhtrungbinh(int a, int b)
{
    return (float)(a+b)/2 ;
}
```

Trong ví dụ trên, các hàm được đặt trong các tệp khác nhau, và trong hàm chương trình chính sử dụng chỉ thị bao hàm tệp #include để khai báo cho quá trình tiền xử lý. Trong thực tế, các hàm được định nghĩa trong các tệp mã nguồn (.c), đồng thời được khai báo trong tệp tiêu đề (.h). Trong trường hợp này thì tập tin điều khiển trình biên dịch (makefile) phải được thay đổi để tạo liên kết các tệp.

### 8.3. Chỉ thị định nghĩa #define

Chỉ thị định nghĩa #define được sử dụng để định nghĩa một đối tượng thay thế. Sau khi định nghĩa, đối tượng được dùng trong toàn bộ các hàm cùng trong một tệp mà đối tượng được định nghĩa. Chỉ thị #define được dùng với 2 mục đích khác nhau; định nghĩa một thay thế hoặc định nghĩa một macro. Macro được hiểu là một đoạn code. Macro chỉ là một đoạn code được định nghĩa ngắn gọn với một chuỗi. Macro không phải làm hàm.

Cú pháp sử dụng chỉ thị #define định nghĩa một chuỗi tương đương như sau:

```c
#define tên giáTrị ThayThế
```

Ví dụ sử dụng chỉ thị #define định nghĩa hằng số và chuỗi như sau:

```c
#include  <stdio.h>
#define PI 3.14
#define hello  "xin chao \n"
void main (void)
{
    float r = 2 ;
    printf(hello) ;
    printf ("Dien tich hinh tron la %.2f",r*r*PI);
}
```

Dòng thứ 2 là thao tác định nghĩa một hằng số PI. Trong chương trình, khi sử dụng chuỗi có tên PI, trình biên dịch tự động thay thế bằng giá trị 3.14 như đã được định nghĩa. Tương tự, dòng 3 định nghĩa một chuỗi hello tương đương với một chuỗi “xin chao \n”. Khi gặp chuỗi hello tại dòng 7, chương trình tự động thay thế hello bằng chuỗi “xin chao \n” .

Kết quả sau khi chạy chương trình trên là:

```c
xin chao
Dien tich hinh tron la 12.56
```

Chỉ thị #define còn được sử dụng để định nghĩa một đoạn chương trình, được xem như một macro. Ví dụ, định nghĩa macro timmax như sau:

```c
#include  <stdio.h>
#define timmax(x,y) ((x)>(y) ? (x) : (y))
void main (void)
{
    int a = 5, b = 9 ;
    int max = timmax(a,b);
    printf ("max = %d",max);
}
```

Macro này sẽ được sử dụng tương tự như hàm với chức năng tìm max trong 2 số, tuy nhiên về cấu trúc và cách thức hoạt động macro không giống hàm, mặc dù ngôn ngữ C cho phép định nghĩa Macro với tham số. Macro được xử lý ở bước tiền xử lý. Bộ tiền xử lý thay thế macro với đoạn code được định nghĩa.

So sánh macro trên với hàm sau đây:

```c
int timmax1 (int a, int b)
{
    return a>b?a:b ;
}
```

Trong hàm timmax1 , kiểu dữ liệu cho tham số và giá trị trả về được định nghĩa là kiểu số nguyên. Như vậy, khi gọi hàm timmax1 , tham số đưa vào cũng phải là kiểu số nguyên. Còn đối với macro timmax , đoạn code thay để có thể nhận bất kỳ kiểu dữ liệu nào.

### 8.4. Chỉ thị điều khiển trình biên dịch

Bộ tiền xử lý của ngôn ngữ C cung cấp các chỉ thị điều kiện điều khiển quá trình biên dịch bao gồm: #if, #elif, #else, #ifdef,

```c
#ifndef,  và  #endif . Các chỉ thị này điều khiển trình biên dịch có thể
```

biên dịch hoặc không biên dịch một đoạn chương trình.

Xét ví dụ sau:

```c
#include  <stdio.h>
#define INTERGER
#ifdef INTERGER
int timmax(int a, int b)
{
    return a>b ? a:b ;
}
#else
float timmax(float a, float b)
{
    return a>b ? a:b ;
}
#endif
void main (void)
{
    int a = 5, b = 9 ;
    int max = timmax(a,b);
    printf ("max = %d",max);
}
```

Chương trình trên xây dựng hàm tìm giá trị lớn nhất. Tuy nhiên, 2 hàm cùng tên và khác kiểu giá trị cho tham số và giá trị trả về. Chỉ một trong 2 hàm được biên dịch. Lúc này bộ tiền xử lý sẽ kiểm tra xem đoạn chương trình nào được biên dịch. Chương trình bắt gặp chuỗi INTERGER được định nghĩa ở đầu chương trình ở dòng 2, vậy nên đoạn chương trình từ dòng thứ 4 đến dòng thứ 7 được biên dịch, ngược lại nếu chuỗi INTERGER không được định nghĩa ở dòng 2, đoạn chương trình từ dòng 9 đến dòng thứ 12 sẽ được biên dịch. Các chỉ thị điều khiển trình biên dịch #ifdef, #else, #endif sẽ kiểm tra một đối tượng đã được định nghĩa bằng chỉ thị #define hay chưa để quyết định đoạn chương trình nào sẽ được biên dịch.

Tương tự, cũng có thể dùng các chỉ thị điều khiển quá trình biên dịch với #if, #else, và #endif . Ví dụ:

```c
#include  <stdio.h>
#define INTERGER 1
#if INTERGER == 1
int timmax(int a, int b)
{
    return a>b ? a:b ;
}
#else
float timmax(float a, float b)
{
    return a>b ? a:b ;
}
#endif
void main (void)
{
    int a = 5, b = 9 ;
    int max = timmax(a,b);
    printf ("max = %d",max);
}
```

Trong chương trình này, bộ tiền xử lý sẽ kiểm tra phát biểu sau

```c
#if  trả về giá trị đúng hay sai để quyết định đoạn chương nào được biên
```

dịch, đoạn chương trình nào bị bỏ qua.

### 8.5. Bài tập

- [ ] 1.  Định nghĩa macro thực thi hoán vị 2 số, viết chương trình ứng dụng và so sánh macro đã viết với hàm hoán vị đã viết ở chương 6.
- [ ] 2.  Định nghĩa macro in ra các số lẻ từ 0 đến n, ứng dụng viết chương trình nhập vào n, in ra các số lẻ từ 0 đến n.

## Tài liệu tham khảo

1. Paul Deitel and Harvey Deitel,  C How to program , 6 th  Edition, Prentice Hall, 2010.
2. Brian W. Kernighan and Dennis M. Ritchie,  The C Programming Language , Prentice Hall, 1988.
3. Peter D. Hipson,  Advanced C , SAMS Publishing, 1992.
4. Dan Gookin,  C for Dimmies , Wiley Publishing, InC., 2004.
5. John W. Perry,  Advanced C Programming by Example , Pws Pub Co, 1998
6. Richard Reese,  Understanding and Using C Pointers , O’Reilly, 2013.
7. K. N. King,  C Programming – A modern Approach , W. W. Norton & Company, 2008.
8. Zed A. Shaw,  Lear C the Hard Way , Addison-Wesley, 2015.

## Chính sách chất lượng

Không ngừng nâng cao chất lượng dạy, học, nghiên cứu khoa học và phục vụ cộng đồng nhằm mang đến cho người học những điều kiện tốt nhất để phát triển toàn diện các năng lực đáp ứng nhu cầu phát triển và hội nhập quốc tế.

## Phụ lục: Chạy lại ví dụ trên gcc/MSYS2

Sách được biên soạn cho Borland C trên DOS, nên chép nguyên văn xuống máy hiện nay sẽ gặp lỗi biên dịch hoặc chạy sai. Phụ lục này là danh sách sửa tối thiểu để mọi ví dụ trong 8 chương chạy được với **gcc (MSYS2 UCRT64)**, `-std=c11`, không cần thư viện DOS.

### A.1. Ba thay đổi bắt buộc

1. **`void main` → `int main(void)`**: hàm `main` phải trả về `int` theo chuẩn C99/C11, kết thúc bằng `return 0;`. Sách dùng `void main` 26 lần — đó là kiểu của Turbo C, gcc hiện đại báo lỗi hoặc cảnh báo.
2. **Bỏ `#include <conio.h>` và `getch()`**: `conio.h` là thư viện DOS (34 chỗ trong sách), không tồn tại trên gcc. Khi chạy trong terminal, chương trình không cần dừng màn hình nữa; nếu vẫn muốn chờ Enter thì dùng `getchar()` (có sẵn trong `stdio.h`).
3. **`gets()` → `fgets()`**: `gets` đã bị **loại khỏi chuẩn C11** vì không kiểm soát độ dài, gây tràn bộ đệm. Sách dùng 22 chỗ; thay bằng:

```c
#include <stdio.h>
#include <string.h>

char ten[30];
fgets(ten, sizeof ten, stdin);
ten[strcspn(ten, "\n")] = '\0';   // bỏ ký tự xuống dòng
```

### A.2. Trước và sau: ví dụ cấp phát bộ nhớ (mục 5.4.1)

Nguyên văn trong sách — không biên dịch được vì `void main`:

```c
#include<stdio.h>
#include <stdlib.h>
void main(void)
{
    int n, i,max;
    int *p ;
    do {
        printf("Nhap n: ");
        scanf("%d",&n) ;
    }while (n<=0);
    p = (int *)malloc (n*sizeof(int));
    if (p!=NULL)
    {
        /* nhập mảng, tìm max */
    }
    free(p);
}
```

Bản sửa tối thiểu — thêm `return 0`, kiểm tra `scanf`, giải phóng bộ nhớ đúng chỗ:

```c
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
    int n, i, max;
    int *p;

    do {
        printf("Nhap n: ");
        if (scanf("%d", &n) != 1) return 1;
    } while (n <= 0);

    p = malloc((size_t)n * sizeof *p);
    if (p == NULL) {
        printf("Khong du bo nho\n");
        return 1;
    }

    for (i = 0; i < n; i++) {
        printf("nhap phan tu thu %d: ", i + 1);
        scanf("%d", &p[i]);
    }

    max = p[0];
    for (i = 1; i < n; i++) {
        if (p[i] > max) max = p[i];
    }
    printf("max = %d\n", max);

    free(p);
    return 0;
}
```

### A.3. Bảng tìm & thay nhanh

| Gặp trong sách | Thay bằng | Ghi chú |
| --- | --- | --- |
| `void main(void)` | `int main(void)` + `return 0;` | 26 chỗ |
| `#include <conio.h>` | bỏ hẳn | 34 chỗ |
| `getch();` | `getchar();` hoặc bỏ | 38 chỗ, cần `stdio.h` |
| `clrscr();` | bỏ | DOS-only |
| `gets(s);` | `fgets(s, sizeof s, stdin)` | 22 chỗ, `gets` bị bỏ từ C11 |
| `scanf("%s", s);` | `scanf("%29s", s);` với `char s[30]` | luôn ghi giới hạn độ dài |
| `fflush(stdin);` | `while ((c = getchar()) != '\n' && c != EOF);` | `fflush` trên `stdin` là hành vi không xác định |
| `itoa(v, s, 10);` | `snprintf(s, sizeof s, "%d", v);` | `itoa` không thuộc chuẩn C |
| `0b00001111` | `0x0F` (hoặc thêm `-std=c2x`) | 6 chỗ; `0b` chỉ là extension của gcc trước C23 |
| `p = (int*)malloc(...)` | `p = malloc(sizeof *p * n);` | không cần ép kiểu, nên dùng `sizeof *p` |
| `printf("%d", x);` thiếu `\n` | thêm `\n` | không bắt buộc, nhưng dễ đọc kết quả |

### A.4. Biên dịch và chạy

```bash
# bản chạy thử
gcc -std=c11 -Wall -Wextra -O2 -o chuongtrinh.exe chuongtrinh.c
./chuongtrinh.exe

# bản để debug trong VS Code (đặt breakpoint được)
gcc -std=c11 -Wall -Wextra -g -O0 -o chuongtrinh.exe chuongtrinh.c
```

- `-Wall -Wextra` là bắt buộc trên thực tế: nó chỉ ra ngay các chỗ sách viết theo kiểu cũ (`return` thiếu giá trị, biến chưa khởi tạo, `%d` với `long`).
- Nếu `gcc` không có trong `PATH`, thêm `C:\msys64\ucrt64\bin` (MSYS2 UCRT64) vào biến môi trường `Path`.
- Ví dụ nào dùng `math.h` (`sqrt`, `pow`, `atof`) mà báo lỗi liên kết thì thêm `-lm` ở cuối lệnh.
- Trên Linux/macOS dùng `-fsanitize=address,undefined` để bắt tràn mảng và con trỏ treo — những lỗi mà gcc trên Windows không báo.

### A.5. Những chỗ sách không dạy, phải tự bổ sung

Giáo trình dừng ở C cơ bản nên khi làm project cần thêm:

- **File I/O**: `fopen`, `fgets`, `fread`/`fwrite` — sách không có chương nào về đọc/ghi tệp, trong khi project `Player DB` ở lộ trình 12 tuần bắt buộc phải có.
- **`stdbool.h` / `stdint.h`**: `bool`, `true`, `false`, `int32_t`, `uint8_t`, `size_t` — sách chỉ dùng `int`, `char`, `float` và các kiểu có kích thước phụ thuộc nền tảng.
- **Tách nhiều tệp và Makefile**: sách viết mọi thứ trong một `main`, không dạy `gcc a.c b.c -o app`, không dạy header guard.
- **Chuỗi an toàn**: `strncpy`, `snprintf`, `strncat` thay cho `strcpy`, `sprintf`, `strcat`.
- **Công cụ**: `gdb`, `-g`, sanitizer, `valgrind` (Linux) — sách không nhắc tới debugger.

Phần kiến thức nền của sách — con trỏ, mảng và chuỗi, hàm và đệ quy, `struct`/`union`/`enum`, tiền xử lý, toán tử bit-wise — vẫn đúng và dùng được nguyên vẹn; chỉ có cách viết và môi trường chạy là đã cũ.
