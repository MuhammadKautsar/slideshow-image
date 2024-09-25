let slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk mengubah slide berdasarkan input
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Fungsi untuk menampilkan slide saat ini berdasarkan dot yang diklik
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Fungsi untuk menampilkan slide dan mengaktifkan dot
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  // Sembunyikan semua slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Hapus kelas 'active' dari semua dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Tampilkan slide yang sesuai dan tambahkan kelas 'active' ke dot yang aktif
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Menjalankan slideshow otomatis setiap 10 detik
setInterval(function() {
  plusSlides(1);
}, 10000);
