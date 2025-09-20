import * as readline from "readline";
//example1
var number = 12;
var nameNumber = "Mynumber";
var isEven = false;
if (number % 2 == 0) {
    isEven = true;
}
//exam2
// const myName = "VanLe";
// myName = "HanhLuu";
// console.log(myName);
var myName = "VanLe";
myName = "HanhLuu";
console.log(myName);
//exam3
const myAge = 25;
if (myAge < 0) {
    console.log("Giá trị bạn nhập là số dương");
}
else if (myAge == 0) {
    console.log("Giá trị bạn nhập là 0");
}
else {
    console.log("Giá trị bạn nhập là số âm");
}
//exam4
// Tạo interface để đọc input từ bàn phím
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Hỏi chiều cao
rl.question("Nhập chiều cao của bạn (cm): ", (input) => {
  const chieuCao = parseInt(input);

  // Lấy số lẻ (hai số cuối của chiều cao)
  const soLe = chieuCao % 100;

  // Tính toán
  const canNangLyTuong = (soLe * 9) / 10;
  const canNangToiDa = soLe;
  const canNangToiThieu = (soLe * 8) / 10;

  // In kết quả
  console.log(
    `Cân nặng lý tưởng: ${canNangLyTuong}kg, ` +
    `Cân nặng tối đa: ${canNangToiDa}kg, ` +
    `Cân nặng tối thiểu: ${canNangToiThieu}kg`
  );

  rl.close();
});
//exam5
// a. Lặp từ 1 tới 100
for (let i = 1; i <= 100; i++) {
  // b.i. Nếu chia hết cho 2
  if (i % 2 === 0) {
    console.log(`Số ${i} là số chẵn`);
  } 
  // b.ii. Ngược lại
  else {
    console.log(`Số ${i} là số lẻ`);
  }
}
//exam6
for (let i = 12; i <= 30; i++) {
  console.log(i);
}
//exam7
for (let i = 1000; i <= 2000; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//exam8
for (let i = 1; i <= 100; i += 4) {
  console.log(i);
}
//exam9

for (let i = 25; i >= 12; i--) {
  console.log(i);
}