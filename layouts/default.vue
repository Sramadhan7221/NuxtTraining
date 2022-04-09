<template>
     <div id="app">
          <Header />
          <Nuxt />
          <Footer />
     </div>
</template>

<script>
// Memanggil component sesuai lokasi masing - masing file
import Header from "@/component/Header.vue"
import Footer from "@/component/Footer.vue"
export default {
// Dideklarasikan agar dapat diakses oleh template
components: {
Header,
Footer
}
}
</script>
<style>
</style>