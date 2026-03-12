# 50 Bài Tập Callback JavaScript — Từ Dễ Đến Khó

> **Cách làm:** Viết code chạy trong Node.js hoặc browser console.
> Mỗi bài có gợi ý params/return để bạn không bị lạc.

---

## LEVEL 1: Hiểu cơ bản — "Function là giá trị" (Bài 1–10)

### Bài 1: Gọi callback đơn giản
```js
// Viết hàm chao(callback) — gọi callback() bên trong
// Khi dùng: chao(function() { console.log("Xin chào!"); })
// Kết quả mong đợi: "Xin chào!"
```

### Bài 2: Callback có 1 param
```js
// Viết hàm noiTen(ten, callback)
// Bên trong: gọi callback(ten)
// Khi dùng: noiTen("Hoang", function(t) { console.log("Tên là: " + t); })
// Kết quả: "Tên là: Hoang"
```

### Bài 3: Callback nhận kết quả tính toán
```js
// Viết hàm cong(a, b, callback)
// Bên trong: tính tổng, rồi gọi callback(tong)
// Khi dùng: cong(3, 5, function(ketQua) { console.log(ketQua); })
// Kết quả: 8
```

### Bài 4: Callback với điều kiện
```js
// Viết hàm kiemTraTuoi(tuoi, callback)
// Nếu tuoi >= 18 → gọi callback("Được phép")
// Nếu tuoi < 18 → gọi callback("Chưa đủ tuổi")
// Dùng: kiemTraTuoi(20, function(msg) { console.log(msg); })
```

### Bài 5: Gán function vào biến rồi truyền
```js
// Tạo biến: const inHoa = function(str) { console.log(str.toUpperCase()); }
// Viết hàm xuLyChuoi(chuoi, callback) — gọi callback(chuoi)
// Dùng: xuLyChuoi("hello", inHoa)
// Kết quả: "HELLO"
```

### Bài 6: Truyền nhiều callback
```js
// Viết hàm chia(a, b, onThanhCong, onLoi)
// Nếu b === 0 → gọi onLoi("Không chia được cho 0")
// Nếu b !== 0 → gọi onThanhCong(a / b)
// Dùng: chia(10, 2, function(kq) { console.log(kq); }, function(err) { console.log(err); })
// Kết quả: 5
// Thử lại với b = 0
```

### Bài 7: Callback trả về boolean
```js
// Viết hàm kiemTra(so, callback)
// Gọi callback(so) và lưu kết quả (true/false)
// Nếu true → console.log(so + " hợp lệ")
// Nếu false → console.log(so + " không hợp lệ")
// Dùng: kiemTra(5, function(n) { return n > 3; })
```

### Bài 8: Dùng callback với vòng lặp
```js
// Viết hàm lapLai(soLan, callback)
// Dùng for loop gọi callback(i) với i từ 0 đến soLan - 1
// Dùng: lapLai(3, function(i) { console.log("Lần " + i); })
// Kết quả: "Lần 0", "Lần 1", "Lần 2"
```

### Bài 9: Callback biến đổi phần tử
```js
// Viết hàm bienDoi(arr, callback) — KHÔNG dùng .map
// Dùng for loop, tạo mảng mới, mỗi phần tử = callback(arr[i])
// Return mảng mới
// Dùng: bienDoi([1,2,3], function(n) { return n * 10; })
// Kết quả: [10, 20, 30]
```

### Bài 10: Callback lọc phần tử
```js
// Viết hàm loc(arr, callback) — KHÔNG dùng .filter
// Dùng for loop, nếu callback(arr[i]) === true thì thêm vào mảng mới
// Return mảng mới
// Dùng: loc([1,2,3,4,5], function(n) { return n % 2 === 0; })
// Kết quả: [2, 4]
```

---

## LEVEL 2: Hiểu .map, .filter, .forEach, .reduce (Bài 11–20)

### Bài 11: Viết lại bài 9 bằng .map
```js
// Dùng [1,2,3].map(function(n) { return n * 10; })
// So sánh kết quả với bài 9
```

### Bài 12: Viết lại bài 10 bằng .filter
```js
// Dùng [1,2,3,4,5].filter(function(n) { return n % 2 === 0; })
```

### Bài 13: .forEach — in ra từng phần tử
```js
// Dùng ["táo", "cam", "xoài"].forEach(function(trai, index) {
//   console.log(index + ": " + trai);
// })
// Câu hỏi: forEach return gì? (undefined)
```

### Bài 14: .reduce — tính tổng
```js
// Dùng [10, 20, 30].reduce(function(tong, so) { return tong + so; }, 0)
// Gợi ý: tham số thứ 2 của reduce (số 0) là giá trị khởi đầu của tong
// Trace qua từng bước: tong=0,so=10 → tong=10,so=20 → tong=30,so=30 → 60
```

### Bài 15: .reduce — đếm chữ cái
```js
// Cho mảng: ["a", "b", "a", "c", "a", "b"]
// Dùng .reduce để tạo object đếm: { a: 3, b: 2, c: 1 }
// Gợi ý: giá trị khởi đầu là {}
// reduce(function(dem, chu) { dem[chu] = (dem[chu] || 0) + 1; return dem; }, {})
```

### Bài 16: .filter rồi .map (chain)
```js
// Cho mảng: [5, 12, 8, 20, 3]
// Lọc số > 10, rồi nhân đôi mỗi số
// Kết quả: [24, 40]
// Viết bằng: arr.filter(...).map(...)
```

### Bài 17: .sort với callback so sánh
```js
// Cho mảng: [3, 1, 4, 1, 5]
// Sắp xếp tăng dần: arr.sort(function(a, b) { return a - b; })
// Sắp xếp giảm dần: arr.sort(function(a, b) { return b - a; })
// Câu hỏi: Callback của .sort nhận 2 params — ai truyền chúng?
```

### Bài 18: .find với callback
```js
// Cho mảng users:
// [{ ten: "An", tuoi: 15 }, { ten: "Binh", tuoi: 22 }, { ten: "Cuong", tuoi: 19 }]
// Tìm user đầu tiên có tuoi >= 18
// Dùng: users.find(function(user) { return user.tuoi >= 18; })
```

### Bài 19: .every và .some
```js
// Cho mảng: [2, 4, 6, 8]
// .every(function(n) { return n % 2 === 0; }) → true (tất cả chẵn)
// .some(function(n) { return n > 7; }) → true (có ít nhất 1 số > 7)
// Thử thêm số 3 vào mảng, kiểm tra lại
```

### Bài 20: Kết hợp reduce + filter
```js
// Cho mảng đơn hàng:
// [{ ten: "A", gia: 100 }, { ten: "B", gia: 250 }, { ten: "C", gia: 50 }, { ten: "D", gia: 300 }]
// Tính tổng giá các đơn > 100
// Gợi ý: .filter(...).reduce(...)
// Kết quả: 550
```

---

## LEVEL 3: Tự viết hàm nhận callback (Bài 21–30)

### Bài 21: Hàm retry
```js
// Viết hàm retry(soLan, callback)
// Gọi callback(), nếu nó return false → thử lại, tối đa soLan lần
// Nếu return true → dừng, in "Thành công ở lần X"
// Nếu hết soLan mà vẫn false → in "Thất bại"
// Test: cho callback random true/false: function() { return Math.random() > 0.7; }
```

### Bài 22: Hàm pipeline
```js
// Viết hàm pipeline(giaTri, ...callbacks)
// Chạy giaTri qua từng callback theo thứ tự
// pipeline(5, 
//   function(n) { return n * 2; },      // 10
//   function(n) { return n + 3; },      // 13
//   function(n) { return n.toString(); } // "13"
// )
// Return kết quả cuối: "13"
// Gợi ý: dùng reduce hoặc for loop
```

### Bài 23: Hàm tìm kiếm tùy chỉnh
```js
// Viết hàm timKiem(arr, dieuKien) — dieuKien là callback
// Return mảng các phần tử mà dieuKien(phanTu) === true
// Khác .filter ở chỗ: cũng return INDEX của phần tử
// Return: [{ index: 1, giaTri: "cam" }, ...]
// Test: timKiem(["táo","cam","xoài"], function(t) { return t.length === 3; })
```

### Bài 24: Hàm nhóm (groupBy)
```js
// Viết hàm nhom(arr, layKey)
// layKey là callback nhận phần tử, return tên nhóm
// Cho: [{ten:"An", lop:"A"}, {ten:"Bi", lop:"B"}, {ten:"Cu", lop:"A"}]
// nhom(arr, function(sv) { return sv.lop; })
// Kết quả: { A: [{ten:"An",...}, {ten:"Cu",...}], B: [{ten:"Bi",...}] }
```

### Bài 25: Hàm debounce đơn giản
```js
// Viết hàm debounce(callback, delay)
// Return một function MỚI
// Khi function mới được gọi, nó đợi delay ms rồi mới gọi callback
// Nếu bị gọi lại trước khi hết delay → reset timer
// Gợi ý: dùng setTimeout và clearTimeout
// const debouncedLog = debounce(function(msg) { console.log(msg); }, 1000);
// debouncedLog("a"); debouncedLog("b"); debouncedLog("c");
// → Chỉ in "c" sau 1 giây
```

### Bài 26: Hàm once
```js
// Viết hàm once(callback)
// Return function mới chỉ gọi callback ĐÚng 1 LẦN
// Lần gọi tiếp theo → bỏ qua, return undefined
// const f = once(function(x) { return x * 2; });
// f(5) → 10
// f(5) → undefined
// f(100) → undefined
```

### Bài 27: Hàm memoize
```js
// Viết hàm memoize(callback)
// Return function mới: nếu đã gọi với arg này rồi → return kết quả cũ (cache)
// Nếu chưa → gọi callback, lưu kết quả, rồi return
// const slowDouble = memoize(function(n) { 
//   console.log("Tính toán..."); return n * 2; 
// });
// slowDouble(5) → "Tính toán..." → 10
// slowDouble(5) → 10 (không in "Tính toán..." nữa)
// slowDouble(3) → "Tính toán..." → 6
```

### Bài 28: Event emitter mini
```js
// Tạo object eventBus với:
// - on(tenSuKien, callback) — đăng ký callback cho sự kiện
// - emit(tenSuKien, data) — gọi tất cả callback đã đăng ký, truyền data
// eventBus.on("login", function(user) { console.log(user + " đã đăng nhập"); });
// eventBus.on("login", function(user) { console.log("Chào " + user); });
// eventBus.emit("login", "Hoang");
// → "Hoang đã đăng nhập"
// → "Chào Hoang"
```

### Bài 29: Hàm compose (ngược pipeline)
```js
// Viết hàm compose(...callbacks)
// Return function mới: chạy callbacks từ PHẢI sang TRÁI
// const fn = compose(
//   function(x) { return x + "!" },    // bước 3
//   function(x) { return x.toUpperCase(); }, // bước 2
//   function(x) { return "hello " + x; }     // bước 1
// );
// fn("world") → "HELLO WORLD!"
```

### Bài 30: Middleware chain
```js
// Viết hàm chayMiddleware(data, middlewares, cuoiCung)
// middlewares là mảng các function(data, next)
// Mỗi middleware xử lý data rồi gọi next(data) để chuyển tiếp
// Nếu không gọi next → chuỗi dừng
// cuoiCung(data) được gọi ở cuối chuỗi
//
// chayMiddleware("hello", [
//   function(data, next) { next(data.toUpperCase()); },
//   function(data, next) { next(data + "!!!"); }
// ], function(data) { console.log(data); });
// → "HELLO!!!"
```

---

## LEVEL 4: Callback bất đồng bộ — setTimeout, setInterval (Bài 31–40)

### Bài 31: setTimeout cơ bản
```js
// Viết hàm doiRoiLam(giay, callback)
// Dùng setTimeout gọi callback sau giay * 1000 ms
// doiRoiLam(2, function() { console.log("2 giây rồi!"); });
```

### Bài 32: Thứ tự thực thi
```js
// Đoán kết quả TRƯỚC khi chạy:
console.log("A");
setTimeout(function() { console.log("B"); }, 0);
console.log("C");
// Kết quả là gì? Tại sao?
```

### Bài 33: Callback trong callback (async)
```js
// Viết 3 hàm giả lập async:
// layUser(id, callback) — setTimeout 1s, gọi callback({ten: "Hoang", donHangId: 42})
// layDonHang(donHangId, callback) — setTimeout 1s, gọi callback({id: 42, gia: 500})
// guiHoaDon(donHang, callback) — setTimeout 1s, gọi callback("Đã gửi hóa đơn " + donHang.gia)
//
// Lồng 3 cái: layUser → layDonHang → guiHoaDon → console.log
// Tổng thời gian: ~3 giây
```

### Bài 34: setInterval + callback dừng
```js
// Viết hàm demNguoc(tu, callback, onXong)
// Mỗi giây gọi callback(soHienTai)
// Khi về 0 → dừng interval, gọi onXong()
// demNguoc(5, 
//   function(so) { console.log(so); },
//   function() { console.log("HẾT GIỜ!"); }
// );
```

### Bài 35: Callback hell — nhận diện vấn đề
```js
// Viết đoạn code lồng 5 setTimeout callback
// Mỗi cấp in "Bước X" và delay 500ms
// Nhìn code và cảm nhận tại sao gọi là "callback hell"
// Gợi ý: mỗi setTimeout nằm trong callback của setTimeout trước
```

### Bài 36: Giải quyết callback hell bằng named functions
```js
// Viết lại bài 35 nhưng tách mỗi callback thành function có tên
// function buoc1() { console.log("Bước 1"); setTimeout(buoc2, 500); }
// function buoc2() { ... }
// So sánh: code nào dễ đọc hơn?
```

### Bài 37: Error-first callback pattern
```js
// Viết hàm docFile(tenFile, callback)
// Nếu tenFile === "data.txt" → callback(null, "Nội dung file")
// Nếu khác → callback(new Error("File không tồn tại"), null)
//
// Dùng: docFile("abc.txt", function(err, data) {
//   if (err) { console.log("Lỗi:", err.message); return; }
//   console.log("Data:", data);
// });
// Đây là pattern chuẩn của Node.js!
```

### Bài 38: Parallel giả lập
```js
// Viết hàm chayDongThoi(callbacks, onXong)
// callbacks là mảng function, mỗi cái nhận một callback(ketQua)
// Khi TẤT CẢ xong → gọi onXong(mangKetQua)
// Gợi ý: đếm số callback đã hoàn thành
//
// chayDongThoi([
//   function(done) { setTimeout(function() { done("A"); }, 1000); },
//   function(done) { setTimeout(function() { done("B"); }, 500); },
//   function(done) { setTimeout(function() { done("C"); }, 800); }
// ], function(results) { console.log(results); }); // ["A","B","C"]
```

### Bài 39: Sequential giả lập
```js
// Viết hàm chayTuanTu(callbacks, onXong)
// Giống bài 38 nhưng chạy TỪNG CÁI MỘT theo thứ tự
// Callback thứ 2 chỉ bắt đầu sau khi callback thứ 1 xong
// Gợi ý: dùng đệ quy hoặc index tracking
```

### Bài 40: Rate limiter
```js
// Viết hàm rateLimiter(callback, thoiGianToiThieu)
// Return function mới: chỉ cho phép gọi callback nếu đã qua thoiGianToiThieu ms
// kể từ lần gọi trước
// const limited = rateLimiter(function(x) { console.log(x); }, 2000);
// limited("a"); // in "a"
// limited("b"); // bỏ qua (chưa đủ 2 giây)
// setTimeout(function() { limited("c"); }, 3000); // in "c"
```

---

## LEVEL 5: Thực chiến — Kết hợp tất cả (Bài 41–50)

### Bài 41: Tách hàm lớn
```js
// Cho hàm lớn:
function xuLyDangKy(form) {
  // validate
  if (!form.email.includes("@")) { console.log("Email sai"); return; }
  if (form.pass.length < 6) { console.log("Mật khẩu yếu"); return; }
  // hash password
  const hashed = form.pass.split("").reverse().join("") + "HASH";
  // save to "db"
  const user = { email: form.email, pass: hashed, id: Date.now() };
  console.log("Đã lưu:", user);
  // send welcome email
  console.log("Gửi email chào mừng tới " + form.email);
}
// BÀI TẬP: Tách thành 4 hàm nhỏ: validateEmail, validatePass, hashPass, saveUser
// Viết hàm xuLyDangKy mới dùng callback cho onThanhCong và onLoi
```

### Bài 42: Array utility library
```js
// Viết object MyArray với các method (KHÔNG dùng built-in):
// - MyArray.map(arr, callback)
// - MyArray.filter(arr, callback)
// - MyArray.reduce(arr, callback, initial)
// - MyArray.find(arr, callback)
// - MyArray.every(arr, callback)
// - MyArray.some(arr, callback)
// Test tất cả với dữ liệu thực
```

### Bài 43: Validator builder
```js
// Viết hàm taoValidator(...rules)
// rules là các callback nhận value, return { hopLe: true/false, loi: "..." }
// taoValidator return function(value) → chạy tất cả rules, return mảng lỗi
//
// const validateAge = taoValidator(
//   function(v) { return { hopLe: typeof v === "number", loi: "Phải là số" }; },
//   function(v) { return { hopLe: v >= 0, loi: "Không được âm" }; },
//   function(v) { return { hopLe: v <= 150, loi: "Tuổi quá lớn" }; }
// );
// validateAge("abc") → ["Phải là số"]
// validateAge(-5) → ["Không được âm"]
// validateAge(25) → []
```

### Bài 44: Chuỗi xử lý đơn hàng
```js
// Viết hệ thống xử lý đơn hàng với callback:
// 1. kiemTraTonKho(don, onCoHang, onHetHang)
// 2. tinhGia(don, callback) — callback nhận giá đã tính
// 3. apMaGiam(gia, maGiam, callback) — callback nhận giá sau giảm
// 4. thanhToan(gia, callback) — giả lập setTimeout 1s, callback nhận biênLai
// 5. guiXacNhan(bienLai, callback)
//
// Viết hàm xuLyDonHang() kết nối 5 bước trên
```

### Bài 45: Pub-Sub nâng cao
```js
// Mở rộng bài 28:
// - on(event, callback) — đăng ký
// - off(event, callback) — hủy đăng ký (cần so sánh reference)
// - once(event, callback) — chỉ chạy 1 lần rồi tự hủy
// - emit(event, ...args) — hỗ trợ nhiều arguments
// Test tất cả các method
```

### Bài 46: Task queue
```js
// Viết hàm TaskQueue(concurrency)
// - queue.add(task) — task là function(done), done là callback
// - Chỉ chạy tối đa concurrency task cùng lúc
// - Khi 1 task xong (gọi done), tự chạy task tiếp theo trong hàng đợi
//
// const q = TaskQueue(2); // tối đa 2 task cùng lúc
// q.add(function(done) { setTimeout(function() { console.log("Task 1"); done(); }, 1000); });
// q.add(function(done) { setTimeout(function() { console.log("Task 2"); done(); }, 500); });
// q.add(function(done) { setTimeout(function() { console.log("Task 3"); done(); }, 800); });
// Task 1 và 2 chạy cùng lúc. Task 3 đợi 1 trong 2 xong mới chạy.
```

### Bài 47: Hàm curry tự động
```js
// Viết hàm curry(fn)
// Nếu đủ argument → gọi fn
// Nếu chưa đủ → return function mới đợi thêm argument
//
// function cong3(a, b, c) { return a + b + c; }
// const curriedCong = curry(cong3);
// curriedCong(1)(2)(3) → 6
// curriedCong(1, 2)(3) → 6
// curriedCong(1)(2, 3) → 6
// Gợi ý: dùng fn.length để biết fn cần bao nhiêu params
```

### Bài 48: Promise-like từ callback
```js
// Viết function MyPromise(executor)
// executor nhận (resolve, reject)
// MyPromise có method .then(onSuccess) và .catch(onError)
//
// new MyPromise(function(resolve, reject) {
//   setTimeout(function() { resolve(42); }, 1000);
// }).then(function(value) {
//   console.log("Kết quả:", value); // 42
// });
//
// Đây là nền tảng để hiểu Promise thật!
```

### Bài 49: Middleware Express-style
```js
// Viết mini app:
// app.use(function(req, res, next) { ... }) — thêm middleware
// app.handle(req, res) — chạy tất cả middleware theo thứ tự
//
// Mỗi middleware nhận (req, res, next). Gọi next() để tiếp tục.
// Không gọi next() → dừng chuỗi.
//
// const app = taoApp();
// app.use(function(req, res, next) { req.timestamp = Date.now(); next(); });
// app.use(function(req, res, next) { 
//   if (!req.auth) { res.status = 401; return; } // không gọi next
//   next();
// });
// app.use(function(req, res, next) { res.body = "Xin chào!"; next(); });
// app.handle({ auth: true }, {});
```

### Bài 50: Build hàm Array.reduce từ đầu + giải thích
```js
// Viết hàm myReduce(arr, callback, initialValue) từ đầu
// Xử lý cả 2 trường hợp: có và không có initialValue
// Khi không có initialValue → dùng arr[0] làm accumulator, bắt đầu loop từ index 1
// Khi có → dùng initialValue, bắt đầu từ index 0
// Throw error nếu arr rỗng và không có initialValue
//
// Test:
// myReduce([1,2,3], function(acc, cur) { return acc + cur; }) → 6
// myReduce([1,2,3], function(acc, cur) { return acc + cur; }, 10) → 16
// myReduce([], function(acc, cur) { return acc + cur; }) → Error!
//
// Sau khi viết xong: giải thích bằng LỜI CỦA BẠN, callback ở đây nhận mấy params,
// ai truyền chúng, và tại sao reduce mạnh.
```

---

## Bảng tổng kết kiến thức

| Khái niệm | Giải thích 1 câu |
|-----------|-------------------|
| Callback | Function được truyền vào function khác như 1 argument |
| Ai quyết định params? | Hàm BÊN NGOÀI gọi callback → nó quyết định truyền gì |
| Error-first pattern | callback(err, data) — Node.js convention |
| Higher-order function | Function nhận hoặc return function khác |
| Closure + Callback | Callback "nhớ" được biến ở scope bên ngoài nó |
| Callback hell | Lồng quá nhiều callback → khó đọc, khó debug |
| Named function | Tách callback thành function có tên → dễ đọc hơn |
| Pipeline/Compose | Chuỗi callback chạy tuần tự, output → input |
| Pub-Sub | Pattern dùng callback để giao tiếp giữa các module |

---

## Gợi ý thứ tự làm

1. **Tuần 1:** Bài 1–10 (cơ bản)
2. **Tuần 2:** Bài 11–20 (array methods)
3. **Tuần 3:** Bài 21–30 (viết hàm nhận callback)
4. **Tuần 4:** Bài 31–40 (async callbacks)
5. **Tuần 5:** Bài 41–50 (thực chiến)

Mỗi bài viết xong → **trace qua từng dòng** và tự trả lời:
- Callback ở đâu?
- Ai gọi nó?
- Params từ đâu ra?
- Return đi đâu?
