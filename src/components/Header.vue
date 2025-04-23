<template>
    <header class="header">
      <div class="header-container">
        <!-- ロゴ -->
        <h1 class="logo">nico748.rec</h1>
  
        <!-- ハンバーガーメニュー -->
        <HamburgerMenu2 />
      </div>
    </header>
  </template>
  
  <script>
import HamburgerMenu2 from "@/components/HamburgerMenu2.vue";
// import gsap from "gsap";

export default {
  name: "HeaderPart",
  components: {
    HamburgerMenu2,
  },
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Playfair+Display:wght@791&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* ヘッダー全体 */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
  background: rgba(255, 255, 255, 0.1);
  color: rgb(38, 34, 29);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom-style: solid;
  border-bottom-width: 1.5px;
  border-bottom-color: rgba(116, 174, 237, 0.669);
  z-index: 1000;
}

/* ロゴ */
.logo {
  font-family: "Concert One", sans-serif;
  font-size: 36px;
  font-weight: bold;
}
</style>