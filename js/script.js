// Ini Javascript

// Form Validation
function formValidation() {
  let name = document.getElementById("nama").value;
  console.log(name);

  let email = document.getElementById("surat").value;
  console.log(email);

  let select = document.getElementById("pilihan").value;
  console.log(select);

  // Pengecekan dimana name tidak boleh ''
  if (name == "") {
    // Code ini akan di eksekusi jika nama ''
    alert("Kosong");
  } else {
    // Code ini akan di eksekusi jika diisi
    alert("Sukses");
  }
}

//Autoslide

let indexSlide = 1; // [0, 1, 2]
showSlide(1);

nextSlide(1);

function nextSlide(n) {
  showSlide((indexSlide += n));
}

function showSlide(n) {
  let listImage = document.getElementsByClassName("main-content-banner");
  console.log(listImage);

  //Algoritma untuk mereset index dari slide
  if (n > listImage.length) indexSlide = 1;

  //Algoritma untuk menghilangkan semua gambar
  let index = 0;
  while (index < listImage.length) {
    listImage[index].style.display = "none";
    index++;
  }

  //Algoritma untuk memunculkan 1 gambar saja
  listImage[indexSlide - 1].style.display = "block";
}

setInterval(() => nextSlide(1), 2000);
