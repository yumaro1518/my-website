<template>
    <div>
      <!-- ハンバーガーアイコン -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>
  
      <!-- オーバーレイ（メニュー外をクリックで閉じる） -->
      <div v-if="isOpen" class="overlay" @click="closeMenu"></div>
  
      <!-- メニュー -->
      <nav ref="menu" class="menu">
        <ul>
          <li @mouseover="animateItem($event, true)" @mouseleave="animateItem($event, false)" @click="closeMenu">
            <router-link to="/">Home</router-link>
          </li>
          <li @mouseover="animateItem($event, true)" @mouseleave="animateItem($event, false)" @click="closeMenu">
            <router-link to="/about">About</router-link>
          </li>
          <li @mouseover="animateItem($event, true)" @mouseleave="animateItem($event, false)" @click="closeMenu">
            <router-link to="/privacy">Privacy</router-link>
          </li>
          <li @mouseover="animateItem($event, true)" @mouseleave="animateItem($event, false)" @click="closeMenu">
            <router-link to="/experiments">Experiment</router-link>
          </li>
          <li @mouseover="animateItem($event, true)" @mouseleave="animateItem($event, false)" @click="closeMenu">
            <router-link to="/animation">Animation</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  import gsap from "gsap";
  
  export default {
    name: "HamburgerMenu",
    setup() {
      const isOpen = ref(false);
      const menu = ref(null);
  
      // メニューを開閉する関数
      const toggleMenu = () => {
        isOpen.value = !isOpen.value;
        animateMenu();
      };
  
      // メニューを閉じる関数（外部クリック含む）
      const closeMenu = () => {
        isOpen.value = false;
        animateMenu();
      };
  
      // メニューのアニメーション
      const animateMenu = () => {
        if (isOpen.value) {
          gsap.to(menu.value, { x: 0, duration: 0.5, ease: "power2.out" });
        } else {
          gsap.to(menu.value, { x: "100%", duration: 0.5, ease: "power2.in" });
        }
      };
  
      // メニューアイテムのホバーアニメーション
      const animateItem = (event, isHover) => {
        gsap.to(event.target, {
          x: isHover ? 10 : 0,
          duration: 0.3,
          ease: "power2.out",
        });
      };
  
      // ESCキーで閉じるイベントリスナー
      const handleKeydown = (event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      };
  
      // イベントリスナー登録
      onMounted(() => {
        window.addEventListener("keydown", handleKeydown);
      });
  
      // イベントリスナー削除（コンポーネント破棄時）
      onUnmounted(() => {
        window.removeEventListener("keydown", handleKeydown);
      });
  
      return { isOpen, toggleMenu, closeMenu, menu, animateItem };
    },
  };
  </script>
  
  <style scoped>
  /* ハンバーガーアイコン */
  .hamburger {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 1001;
  }
  
  .hamburger span {
    display: block;
    width: 100%;
    height: 4px;
    background: black;
    transition: 0.3s;
  }
  
  .hamburger span.open:nth-child(1) {
    transform: translateY(13px) rotate(45deg);
  }
  
  .hamburger span.open:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger span.open:nth-child(3) {
    transform: translateY(-13px) rotate(-45deg);
  }
  
  /* オーバーレイ（背景クリックでメニューを閉じる） */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  /* メニュー */
  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100vh;
    background: #333;
    transform: translateX(100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    box-shadow: -5px 0 10px rgba(0, 0, 0, 0.2);
  }
  
  .menu ul {
    list-style: none;
    padding: 0;
  }
  
  .menu ul li {
    margin: 20px 0;
    transition: transform 0.3s;
  }
  
  .menu ul li a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    display: block;
    padding: 10px 20px;
    transition: color 0.3s;
  }
  
  .menu ul li a:hover {
    color: #ffcc00;
  }
  </style>