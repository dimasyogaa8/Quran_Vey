const tombol = document.querySelector('.btndark');
// Mendeteksi preferensi warna tema
    
tombol.addEventListener('click', function() {
  document.body.classList.toggle('darkmode');
  
})