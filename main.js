// Bài 1: Gọi callback đơn giản
// Viết hàm chao(callback) — gọi callback() bên trong
// Khi dùng: chao(function() { console.log("Xin chào!"); })
// Kết quả mong đợi: "Xin chào!"

function chao(callback) {
   callback();
}

chao(() => {
   console.log("Xin chào!");
});

// Bài 2: Callback có 1 param
// Viết hàm noiTen(ten, callback)
// Bên trong: gọi callback(ten)
// Khi dùng: noiTen("Hoang", function(t) { console.log("Tên là: " + t); })
// Kết quả: "Tên là: Hoang"

const noiTen = function (ten, callback) {
   callback(ten);
};

noiTen("Hoang", (ten) => console.log("Tên là: " + ten));

// Bài 3: Callback nhận kết quả tính toán
// Viết hàm cong(a, b, callback)
// Bên trong: tính tổng, rồi gọi callback(tong)
// Khi dùng: cong(3, 5, function(ketQua) { console.log(ketQua); })
// Kết quả: 8

const cong = (a, b, callback) => {
   const tong = a + b;
   callback(tong);
};

cong(3, 5, (ketQua) => console.log(ketQua));

// Bài 4: Callback với điều kiện
// // Viết hàm kiemTraTuoi(tuoi, callback)
// // Nếu tuoi >= 18 → gọi callback("Được phép")
// // Nếu tuoi < 18 → gọi callback("Chưa đủ tuổi")
// // Dùng: kiemTraTuoi(20, function(msg) { console.log(msg); })

function kiemTraTuoi(tuoi, callback) {
   tuoi >= 18 ? callback("Được phép") : callback("Chưa đủ tuổi");
}

kiemTraTuoi(20, function (msg) {
   console.log(msg);
});

// Bài 5: Gán function vào biến rồi truyền
// // Tạo biến: const inHoa = function(str) { console.log(str.toUpperCase()); }
// // Viết hàm xuLyChuoi(chuoi, callback) — gọi callback(chuoi)
// // Dùng: xuLyChuoi("hello", inHoa)
// // Kết quả: "HELLO"

const inHoa = function (str) {
   console.log(str.toUpperCase());
};

const xuLyChuoi = (chuoi, callback) => {
   callback(chuoi);
};

xuLyChuoi("hello", inHoa);

// Bài 6: Truyền nhiều callback
// // Viết hàm chia(a, b, onThanhCong, onLoi)
// // Nếu b === 0 → gọi onLoi("Không chia được cho 0")
// // Nếu b !== 0 → gọi onThanhCong(a / b)
// // Dùng: chia(10, 2, function(kq) { console.log(kq); }, function(err) { console.log(err); })
// // Kết quả: 5
// // Thử lại với b = 0

const chia = (a, b, onThanhCong, onLoi) => {
   b === 0 ? onLoi("Không chia được cho 0") : onThanhCong(a / b);
};

chia(
   10,
   0,
   function (kq) {
      console.log(kq);
   },
   function (err) {
      console.log(err);
   },
);

// Bài 7: Callback trả về boolean
// // Viết hàm kiemTra(so, callback)
// // Gọi callback(so) và lưu kết quả (true/false)
// // Nếu true → console.log(so + " hợp lệ")
// // Nếu false → console.log(so + " không hợp lệ")
// // Dùng: kiemTra(5, function(n) { return n > 3; })

function kiemTra(so, callback) {
   const result = callback(so);
   result ? console.log(so + " hợp lệ") : console.log(so + " không hợp lệ");
}

kiemTra(5, function (n) {
   return n < 3;
});

// Bài 8: Dùng callback với vòng lặp
// // Viết hàm lapLai(soLan, callback)
// // Dùng for loop gọi callback(i) với i từ 0 đến soLan - 1
// // Dùng: lapLai(3, function(i) { console.log("Lần " + i); })
// // Kết quả: "Lần 0", "Lần 1", "Lần 2"

const lapLai = function (soLan, callback) {
   for (let i = 0; i <= soLan - 1; i++) {
      callback(i);
   }
};

lapLai(3, function (i) {
   console.log("Lần " + i);
});

// Bài 9: Callback biến đổi phần tử
// // Viết hàm bienDoi(arr, callback) — KHÔNG dùng .map
// // Dùng for loop, tạo mảng mới, mỗi phần tử = callback(arr[i])
// // Return mảng mới
// // Dùng: bienDoi([1,2,3], function(n) { return n * 10; })
// // Kết quả: [10, 20, 30]

const bienDoi = (arr, callback) => {
   let result = [];
   for (let i = 0; i <= arr.length - 1; i++) {
      result.push(callback(arr[i]));
   }
   console.log(result);
};

bienDoi([1, 2, 3], function (n) {
   return n * 10;
});

// Bài 10: Callback lọc phần tử
// // Viết hàm loc(arr, callback) — KHÔNG dùng .filter
// // Dùng for loop, nếu callback(arr[i]) === true thì thêm vào mảng mới
// // Return mảng mới
// // Dùng: loc([1,2,3,4,5], function(n) { return n % 2 === 0; })
// // Kết quả: [2, 4]

const loc = function (arr, callback) {
   let result = [];
   for (let i = 0; i <= arr.length - 1; i++) {
      callback(arr[i]) ? result.push(arr[i]) : null;
   }
   console.log(result);
};

loc([1, 2, 3, 4, 5], function (n) {
   return n % 2 === 0;
});

// LEVEL 2: Hiểu .map, .filter, .forEach, .reduce (Bài 11–20)
// Bài 11: Viết lại bài 9 bằng .map
// // Dùng [1,2,3].map(function(n) { return n * 10; })
// // So sánh kết quả với bài 9

const bienDoi2 = (arr, callback) => {
   let newArr = arr.map(callback);
   console.log(newArr);
};

bienDoi2([1, 2, 3], function (n) {
   return n * 10;
});

// console.log(
//    [1, 2, 3].map(function (n) {
//       return n * 10;
//    }),
// );

// Bài 12: Viết lại bài 10 bằng .filter
// // Dùng [1,2,3,4,5].filter(function(n) { return n % 2 === 0; })

const loc2 = (arr, callback) => {
   let newArr = arr.filter(callback);
   console.log(newArr);
};

loc2([1, 2, 3, 4, 5], function (n) {
   return n % 2 === 0;
});

// Bài 13: .forEach — in ra từng phần tử
// // Dùng ["táo", "cam", "xoài"].forEach(function(trai, index) {
// //   console.log(index + ": " + trai);
// // })
// // Câu hỏi: forEach return gì? (undefined)

// ["táo", "cam", "xoài"].forEach(function (trai, index) {
//    console.log(index + ": " + trai);
// });

const learnforEach = (arr, callback) => {
   arr.forEach(callback);
};

learnforEach(["táo", "cam", "xoài"], function (trai, index) {
   console.log(index + ": " + trai);
});

// Bài 14: .reduce — tính tổng
// // Dùng [10, 20, 30].reduce(function(tong, so) { return tong + so; }, 0)
// // Gợi ý: tham số thứ 2 của reduce (số 0) là giá trị khởi đầu của tong
// // Trace qua từng bước: tong=0,so=10 → tong=10,so=20 → tong=30,so=30 → 60

const tinhTong = function (tong, so) {
   return tong + so;
};

const learnReduce = (arr, callback) => {
   let result = arr.reduce(callback, 0);
   console.log(result);
};

learnReduce([10, 20, 30], tinhTong);

// Bài 15: .reduce — đếm chữ cái
// // Cho mảng: ["a", "b", "a", "c", "a", "b"]
// // Dùng .reduce để tạo object đếm: { a: 3, b: 2, c: 1 }
// // Gợi ý: giá trị khởi đầu là {}
// // reduce(function(dem, chu) { dem[chu] = (dem[chu] || 0) + 1; return dem; }, {})

const demChuCai = (dem, currentValue, currentIndex) => {
   dem[currentValue] = (dem[currentValue] || 0) + 1;
   // console.log(dem, currentValue, currentIndex);
   return dem;
};

const demChu = (arr, callback) => {
   let result = arr.reduce(callback, {});
   console.log(result);
   // return result;
};

demChu(["a", "b", "a", "c", "a", "b"], demChuCai);
// Bài 16: .filter rồi .map (chain)
// // Cho mảng: [5, 12, 8, 20, 3]
// // Lọc số > 10, rồi nhân đôi mỗi số
// // Kết quả: [24, 40]
// // Viết bằng: arr.filter(...).map(...)

const dieuKien = (so) => {
   return so > 10;
};

const double = (so) => so * 2;

console.log([5, 12, 8, 20, 3].filter(dieuKien).map(double));

// Bài 17: .sort với callback so sánh
// // Cho mảng: [3, 1, 4, 1, 5]
// // Sắp xếp tăng dần: arr.sort(function(a, b) { return a - b; })
// // Sắp xếp giảm dần: arr.sort(function(a, b) { return b - a; })
// // Câu hỏi: Callback của .sort nhận 2 params — ai truyền chúng?

//Callback cua .sort nhan 2 params do chinh array goi truyen vao

const sortIncrease = (a, b) => a - b;
const sortDecrease = (a, b) => b - a;

console.log([3, 1, 4, 1, 5].sort(sortDecrease));
console.log([3, 1, 4, 1, 5].sort(sortIncrease));

// Bài 18: .find với callback
// // Cho mảng users:
// // [{ ten: "An", tuoi: 15 }, { ten: "Binh", tuoi: 22 }, { ten: "Cuong", tuoi: 19 }]
// // Tìm user đầu tiên có tuoi >= 18
// // Dùng: users.find(function(user) { return user.tuoi >= 18; })
const users = [
   { ten: "An", tuoi: 15 },
   { ten: "Binh", tuoi: 22 },
   { ten: "Cuong", tuoi: 19 },
];

const checkUserAge = (user) => user.tuoi >= 18;

console.log(users.find(checkUserAge));

// Bài 19: .every và .some
// // Cho mảng: [2, 4, 6, 8]
// // .every(function(n) { return n % 2 === 0; }) → true (tất cả chẵn)
// // .some(function(n) { return n > 7; }) → true (có ít nhất 1 số > 7)
// // Thử thêm số 3 vào mảng, kiểm tra lại

const checkEvery = (num) => num % 2 === 0;
const checkSome = (num) => num > 7;

console.log([2, 4, 6, 8, 10, 1, 3, 5, 25].every(checkEvery));
console.log([2, 4, 6, 8, 10, 1, 3, 5, 25].some(checkSome));

// Bài 20: Kết hợp reduce + filter
// // Cho mảng đơn hàng:
// // [{ ten: "A", gia: 100 }, { ten: "B", gia: 250 }, { ten: "C", gia: 50 }, { ten: "D", gia: 300 }]
// // Tính tổng giá các đơn > 100
// // Gợi ý: .filter(...).reduce(...)
// // Kết quả: 550

const donHang = [
   { ten: "A", gia: 100 },
   { ten: "B", gia: 250 },
   { ten: "C", gia: 50 },
   { ten: "D", gia: 300 },
];

const checkDonHang = (don) => don.gia > 100;
const tongDonHang = (sum, donHang) => {
   return sum + donHang.gia;
};
console.log(donHang.filter(checkDonHang).reduce(tongDonHang, 0));

// ## LEVEL 3: Tự viết hàm nhận callback (Bài 21–30)

// ### Bài 21: Hàm retry
// ```js
// // Viết hàm retry(soLan, callback)
// // Gọi callback(), nếu nó return false → thử lại, tối đa soLan lần
// // Nếu return true → dừng, in "Thành công ở lần X"
// // Nếu hết soLan mà vẫn false → in "Thất bại"
// // Test: cho callback random true/false: function() { return Math.random() > 0.7; }
// ```

// ### Bài 22: Hàm pipeline
// ```js
// // Viết hàm pipeline(giaTri, ...callbacks)
// // Chạy giaTri qua từng callback theo thứ tự
// // pipeline(5, 
// //   function(n) { return n * 2; },      // 10
// //   function(n) { return n + 3; },      // 13
// //   function(n) { return n.toString(); } // "13"
// // )
// // Return kết quả cuối: "13"
// // Gợi ý: dùng reduce hoặc for loop
// ```

// ### Bài 23: Hàm tìm kiếm tùy chỉnh
// ```js
// // Viết hàm timKiem(arr, dieuKien) — dieuKien là callback
// // Return mảng các phần tử mà dieuKien(phanTu) === true
// // Khác .filter ở chỗ: cũng return INDEX của phần tử
// // Return: [{ index: 1, giaTri: "cam" }, ...]
// // Test: timKiem(["táo","cam","xoài"], function(t) { return t.length === 3; })
// ```

// ### Bài 24: Hàm nhóm (groupBy)
// ```js
// // Viết hàm nhom(arr, layKey)
// // layKey là callback nhận phần tử, return tên nhóm
// // Cho: [{ten:"An", lop:"A"}, {ten:"Bi", lop:"B"}, {ten:"Cu", lop:"A"}]
// // nhom(arr, function(sv) { return sv.lop; })
// // Kết quả: { A: [{ten:"An",...}, {ten:"Cu",...}], B: [{ten:"Bi",...}] }
// ```

// ### Bài 25: Hàm debounce đơn giản
// ```js
// // Viết hàm debounce(callback, delay)
// // Return một function MỚI
// // Khi function mới được gọi, nó đợi delay ms rồi mới gọi callback
// // Nếu bị gọi lại trước khi hết delay → reset timer
// // Gợi ý: dùng setTimeout và clearTimeout
// // const debouncedLog = debounce(function(msg) { console.log(msg); }, 1000);
// // debouncedLog("a"); debouncedLog("b"); debouncedLog("c");
// // → Chỉ in "c" sau 1 giây
// ```

// ### Bài 26: Hàm once
// ```js
// // Viết hàm once(callback)
// // Return function mới chỉ gọi callback ĐÚng 1 LẦN
// // Lần gọi tiếp theo → bỏ qua, return undefined
// // const f = once(function(x) { return x * 2; });
// // f(5) → 10
// // f(5) → undefined
// // f(100) → undefined
// ```

// ### Bài 27: Hàm memoize
// ```js
// // Viết hàm memoize(callback)
// // Return function mới: nếu đã gọi với arg này rồi → return kết quả cũ (cache)
// // Nếu chưa → gọi callback, lưu kết quả, rồi return
// // const slowDouble = memoize(function(n) { 
// //   console.log("Tính toán..."); return n * 2; 
// // });
// // slowDouble(5) → "Tính toán..." → 10
// // slowDouble(5) → 10 (không in "Tính toán..." nữa)
// // slowDouble(3) → "Tính toán..." → 6
// ```

// ### Bài 28: Event emitter mini
// ```js
// // Tạo object eventBus với:
// // - on(tenSuKien, callback) — đăng ký callback cho sự kiện
// // - emit(tenSuKien, data) — gọi tất cả callback đã đăng ký, truyền data
// // eventBus.on("login", function(user) { console.log(user + " đã đăng nhập"); });
// // eventBus.on("login", function(user) { console.log("Chào " + user); });
// // eventBus.emit("login", "Hoang");
// // → "Hoang đã đăng nhập"
// // → "Chào Hoang"
// ```

// ### Bài 29: Hàm compose (ngược pipeline)
// ```js
// // Viết hàm compose(...callbacks)
// // Return function mới: chạy callbacks từ PHẢI sang TRÁI
// // const fn = compose(
// //   function(x) { return x + "!" },    // bước 3
// //   function(x) { return x.toUpperCase(); }, // bước 2
// //   function(x) { return "hello " + x; }     // bước 1
// // );
// // fn("world") → "HELLO WORLD!"
// ```

// ### Bài 30: Middleware chain
// ```js
// // Viết hàm chayMiddleware(data, middlewares, cuoiCung)
// // middlewares là mảng các function(data, next)
// // Mỗi middleware xử lý data rồi gọi next(data) để chuyển tiếp
// // Nếu không gọi next → chuỗi dừng
// // cuoiCung(data) được gọi ở cuối chuỗi
// //
// // chayMiddleware("hello", [
// //   function(data, next) { next(data.toUpperCase()); },
// //   function(data, next) { next(data + "!!!"); }
// // ], function(data) { console.log(data); });
// // → "HELLO!!!"
// ```

// ---
