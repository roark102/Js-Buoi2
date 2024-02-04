// Bài 1
// Bước 1: Xác định đầu vào:
//     + lương 1 ngày: daySalary
//     + số ngày làm: daysWorking
//     + Tổng lương: totalSalary

// Bước 2: Các bước xử lí:
//     + Công thức tính lương: totalSalary = daySalary * daysworking

// Bước 3: Kết quả:
//     + Tổng tiền lương totalSalary
document.getElementById("tinhLuong").onclick = function () {
  var daySalary = +document.getElementById("daySalary").value;
  var daysWorking = +document.getElementById("daysWorking").value;

  var totalSalary = daySalary * daysWorking;

  document.getElementById("result1").innerHTML = `
  Tổng số tiền lương tháng này của bạn là ${totalSalary} VND`;
  document
    .getElementById("result1")
    .classList.add(
      "bg-primary",
      "d-inline-block",
      "text-light",
      "mt-4",
      "p-3",
      "rounded"
    );
};
// Bài 2:
// Bước 1: Xác định đầu vào:
//     + 5 số thực number1, number2, number3, number4, number5
//     + giá trị trung bình của 5 số: trungBinh
// Bước 2: Các bước xử lí:
//     + Áp dụng công thức tính trung bình: trungBinh = (number1 + number2 + number3 + number4 + number5) / 5

// Bước 3: Kết quả:
//     + Giá trị trung bình trungBinh

document.getElementById("tinhTrungBinh").onclick = function () {
  var number1 = +document.getElementById("number1").value;
  var number2 = +document.getElementById("number2").value;
  var number3 = +document.getElementById("number3").value;
  var number4 = +document.getElementById("number4").value;
  var number5 = +document.getElementById("number5").value;

  var trungBinh = (number1 + number2 + number3 + number4 + number5) / 5;

  document.getElementById("result2").innerHTML = `
  Trung bình của 5 số trên là ${trungBinh}`;
  document
    .getElementById("result2")
    .classList.add(
      "bg-dark",
      "d-inline-block",
      "text-light",
      "mt-4",
      "p-3",
      "rounded"
    );
};
// Bài 3: Quy đổi tiền

// Bước 1: Xác định đầu vào
//     + giá usd: USD_RATE = 23.500
//     + số tiền USD: usd
//     + sô tiền VND quyDoi
// Bước 2: Các bước xử lí
//     + Công thức chuyển tiền từ usd qua VND: quyDoi = usd * USD_RATE;
// Bước 3: Kết quả
//     + Tổng tiền VND sau khi quy đổi

document.getElementById("doiTien").onclick = function () {
  var usd = +document.getElementById("usd").value;
  const USD_RATE = 23500;
  var quyDoi = usd * USD_RATE;
  var numberFormat = new Intl.NumberFormat("vn-VN").format(quyDoi);

  document.getElementById("result3").innerHTML = `
    Số tiền bạn đổi được là ${numberFormat} VND`;
  document
    .getElementById("result3")
    .classList.add(
      "bg-dark",
      "d-inline-block",
      "text-light",
      "mt-4",
      "p-3",
      "rounded"
    );
};
// Bài 4: Tính diện tích, chu vi hình chữ nhật
// Bước 1: Xác định đầu vào:
//     + Chiều dài của HCN: length
//     + Chiều rộng của HCN: width
//     + chu vi HCN: chuVi
//     + diện tích HCN: dienTich
// Bước 2: Các bước xử lí:
//     + dienTich = length * width;
//     + chuVi = (length + width) * 2;
// Bước 3: Kết quả:
//     + chu vi HCN
//     + diện tích HCN

document.getElementById("tinh").onclick = function () {
  var length = +document.getElementById("length").value;
  var width = +document.getElementById("width").value;
  var dienTich, chuVi;
  dienTich = length * width;
  chuVi = (length + width) * 2;

  document.getElementById("result4").innerHTML = `
    <p>Diện tích của hình chữ nhật là ${dienTich}</p>
    <p>Chu vi của hình chữ nhật là ${chuVi}</p>`;
  document
    .getElementById("result4")
    .classList.add(
      "bg-dark",
      "d-inline-block",
      "text-light",
      "mt-4",
      "p-3",
      "rounded"
    );
};
// Bài 5: Tính tổng 2 kí số
// Bước 1: Xác định đầu vào:
//     + Số có 2 chữ số n
//     + kí số hàng chục: hangchuc
//     + kí số hàn đơn vị: donVi
//     + tổng 2 kí số:  Sum

// Bước 2: Các bước xử lí:
//     + hangChuc = Math.floor(n/10);
//     + donVi = n%10;
//     + Sum = hangChuc + donVi

// Bước 3: Kết quả
//     + Tổng 2 chữ số của số n Sum

document.getElementById("tinhTong").onclick = function () {
  var n = +document.getElementById("so2ChuSo").value;
  var hangChuc, donVi, sum;
  hangChuc = Math.floor(n / 10);
  donVi = n % 10;
  sum = hangChuc + donVi;

  document.getElementById(
    "result5"
  ).innerHTML = `Tổng 2 ký số của số trên là ${sum}
    `;
  document
    .getElementById("result5")
    .classList.add(
      "bg-dark",
      "d-inline-block",
      "text-light",
      "mt-4",
      "p-3",
      "rounded"
    );
};
