<template>
  <div id="app">
    <h1 class="greeting">Selamat pagi tutor, ini adalah tugas kedua saya</h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Menambahkan event listener untuk perubahan ukuran jendela
    window.addEventListener('resize', this.updateFontSize);
    // Panggil fungsi saat pertama kali dimuat untuk memastikan ukuran font responsif
    this.updateFontSize();
  },
  methods: {
    updateFontSize() {
      // Ambil lebar layar
      const screenWidth = window.innerWidth;
      
      // Menentukan ukuran font berdasarkan lebar layar
      let fontSize = '24px'; // Default font size

      if (screenWidth < 600) {
        fontSize = '18px'; // Untuk layar kecil (mobile)
      } else if (screenWidth < 1024) {
        fontSize = '20px'; // Untuk tablet atau layar medium
      }

      // Terapkan ukuran font ke elemen dengan kelas .greeting
      document.querySelector('.greeting').style.fontSize = fontSize;
    }
  }
}
</script>

<style>
.greeting {
  color: orange;
  text-align: center;
  margin-top: 20px;
  transition: font-size 0.3s ease; /* Menambahkan transisi halus saat ukuran font berubah */
}
</style>
