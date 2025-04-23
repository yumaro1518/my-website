<template>
  <div id="app">
    <!-- ハンバーガーメニュー -->
    <div id="hamburgerMenu" :class="{ active: menuOpen }" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- メニュー背景（開閉時に広がる） -->
    <div v-if="menuOpen" class="menu-bg" @click="closeMenu"></div>

    <!-- メニュー本体 -->
    <nav class="menu" :class="{ open: menuOpen }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>

  </div>
</template>
  
  <script>
export default {
  name: "HamburgerMenu2",
  data() {
    return {
      menuOpen: false,
      menuItems: [
        { text: "Home", link: "/" },
        { text: "Test1", link: "/experiments" },
        { text: "Test2", link: "/experiments2" },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>
    
<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@284&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Playfair+Display:wght@791&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/* 全体のリセット */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 背景アニメーションのための設定 */
body {
  font-family: "Open Sans", sans-serif;
  background: #9e9e9e;
  overflow: hidden;
}

/* ハンバーガーメニューを右上に固定 */
#hamburgerMenu {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 1000;
}

/* ハンバーガーメニューのバー */
#hamburgerMenu span {
  position: absolute;
  display: block;
  width: 40px;
  height: 4px;
  background: rgb(71, 58, 39);
  border-radius: 2px;
  transition: all 0.4s ease-in-out;
}

/* バーの位置調整 */
#hamburgerMenu span:nth-of-type(1) {
  top: 10px;
}
#hamburgerMenu span:nth-of-type(2) {
  top: 20px;
}
#hamburgerMenu span:nth-of-type(3) {
  top: 30px;
}

/* メニュー開閉時のアニメーション */
#hamburgerMenu.active span:nth-of-type(1) {
  transform: translateY(10px) rotate(-45deg);
  background: rgb(229, 228, 227);
}
#hamburgerMenu.active span:nth-of-type(2) {
  opacity: 0;
}
#hamburgerMenu.active span:nth-of-type(3) {
  transform: translateY(-10px) rotate(45deg);
  background: rgb(229, 228, 227);
}

/* メニュー背景（サイト全体に広がる） */
.menu-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* 半透明の黒 */
  z-index: 998;
  transition: all 0.4s ease-in-out;
}

/* メニュー本体 */
.menu {
  position: fixed;
  top: 0;
  right: -300px; /* 初期状態では画面外 */
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9); /* 半透明の黒 */
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding-top: 80px;
  transition: right 0.4s ease-in-out;
  z-index: 999;
}

/* メニューが開いた状態 */
.menu.open {
  right: 0;
}

/* メニューリスト */
.menu ul {
  list-style: none;
  padding: 0;
}

/* メニューアイテム */
.menu ul li {
  padding: 15px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

/* メニューリンク */
.menu ul li a {
  text-decoration: none;
  font-size: 18px;
  font-family: "Concert One", sans-serif;
  font-style: normal;
  letter-spacing: 0.08em;
  color: #333;
  font-weight: bold;
  position: relative;
  display: inline-block;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;
}

/* ホバー時のスライドアニメーション */
.menu ul li {
  position: relative;
  display: inline-block;
  width: 100%; /* 親要素の幅を100%に */
}

.menu ul li a {
  position: relative;
  display: inline-block;
  padding: 10px 20px; /* 余白をつける */
  text-decoration: none;
  color: #f6f4f0; /* 初期のフォントカラー */
  font-size: 18px;
  overflow: hidden;
  transition: color 0.3s ease-in-out; /* フォントカラーの変更を滑らかに */
}

.menu ul li a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%; /* 初期位置を中央に */
  width: 0; /* 初期状態では見えない */
  height: 2px;
  background: linear-gradient(90deg, #ff7eb3, #66a5e9, #50c878); /* グラデーション */
  transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
}

.menu ul li a:hover {
  color: #ff7eb3; /* ホバー時に少し色を変える */
}

.menu ul li a:hover::before {
  width: 100%; /* 横全体に広げる */
  left: 0; /* 左端から表示 */
}
/* メインコンテンツ */
main {
  padding: 50px;
  text-align: center;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  letter-spacing: 0.02em;
}
</style>