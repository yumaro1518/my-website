<template>
  <!-- 参考：https://deshinon.com/2019/03/03/simple-oshare-loading-kopipe/ -->
  <!-- ★画面全体を覆うオーバーレイ -->
  <div
    class="loading-overlay"
    role="progressbar"
    aria-busy="true"
    aria-label="Loading"
  >
    <div class="swing">
      <div class="swing-l"></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div class="swing-r"></div>
    </div>
  </div>
</template>
    
    <script>
import { defineComponent } from "vue"; // ← @vue/composition-api ではなく 'vue'

export default defineComponent({
  name: "LoadingView",
});
// Inspired by http://dribbble.com/shots/963799-Animation-Loading-gif
</script>
    
    <style lang="scss">
body {
  background: #f1e6d1;
}
</style>
    <style scoped lang="scss">
body {
  background: #f1e6d1;
}
.container {
  left: 25%;
  margin: auto -50px;
  position: center;
  position: absolute;
  top: 50%;
}
/* 1️⃣ 全画面で中央配置 */
.loading-overlay {
  position: fixed;
  inset: 0; /* top/left/right/bottom:0 */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1e6d1; /* お好みで透過も可 */
  transition: opacity 0.4s;
  z-index: 9999; /* ほぼ最前面 */
}

/* 2️⃣ これまでの .container → .swing / .shadow だけで OK
          中央寄せ用の .container / margin 調整は削除 */
.swing div {
  border-radius: 50%;
  float: left;
  height: 1em;
  width: 1em;
}

.swing div:nth-of-type(1) {
  background: -webkit-linear-gradient(left, #385c78 0%, #325774 100%);
  background: linear-gradient(to right, #385c78 0%, #325774 100%);
}
.swing div:nth-of-type(2) {
  background: -webkit-linear-gradient(left, #325774 0%, #47536a 100%);
  background: linear-gradient(to right, #325774 0%, #47536a 100%);
}
.swing div:nth-of-type(3) {
  background: -webkit-linear-gradient(left, #4a5369 0%, #6b4d59 100%);
  background: linear-gradient(to right, #4a5369 0%, #6b4d59 100%);
}
.swing div:nth-of-type(4) {
  background: -webkit-linear-gradient(left, #744c55 0%, #954646 100%);
  background: linear-gradient(to right, #744c55 0%, #954646 100%);
}
.swing div:nth-of-type(5) {
  background: -webkit-linear-gradient(left, #9c4543 0%, #bb4034 100%);
  background: linear-gradient(to right, #9c4543 0%, #bb4034 100%);
}
.swing div:nth-of-type(6) {
  background: -webkit-linear-gradient(left, #c33f31 0%, #d83b27 100%);
  background: linear-gradient(to right, #c33f31 0%, #d83b27 100%);
}
.swing div:nth-of-type(7) {
  background: -webkit-linear-gradient(left, #da3b26 0%, #db412c 100%);
  background: linear-gradient(to right, #da3b26 0%, #db412c 100%);
}

@-webkit-keyframes ball-l {
  0%,
  50% {
    -webkit-transform: rotate(0) translateX(0);
    transform: rotate(0) translateX(0);
  }
  100% {
    -webkit-transform: rotate(50deg) translateX(-2.5em);
    transform: rotate(50deg) translateX(-2.5em);
  }
}
@keyframes ball-l {
  0%,
  50% {
    -webkit-transform: rotate(0) translate(0);
    transform: rotate(0) translateX(0);
  }
  100% {
    -webkit-transform: rotate(50deg) translateX(-2.5em);
    transform: rotate(50deg) translateX(-2.5em);
  }
}
@-webkit-keyframes ball-r {
  0% {
    -webkit-transform: rotate(-50deg) translateX(2.5em);
    transform: rotate(-50deg) translateX(2.5em);
  }
  50%,
  100% {
    -webkit-transform: rotate(0) translateX(0);
    transform: rotate(0) translateX(0);
  }
}
@keyframes ball-r {
  0% {
    -webkit-transform: rotate(-50deg) translateX(2.5em);
    transform: rotate(-50deg) translateX(2.5em);
  }
  50%,
  100% {
    -webkit-transform: rotate(0) translateX(0);
    transform: rotate(0) translateX(0);
  }
}
@-webkit-keyframes shadow-l-n {
  0%,
  50% {
    opacity: 0.5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0.125;
    -webkit-transform: translateX(-1.57em);
    transform: translateX(-1.75em);
  }
}
@keyframes shadow-l-n {
  0%,
  50% {
    opacity: 0.5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    opacity: 0.125;
    -webkit-transform: translateX(-1.75);
    transform: translateX(-1.75em);
  }
}
@-webkit-keyframes shadow-r-n {
  0% {
    opacity: 0.125;
    -webkit-transform: translateX(1.75em);
    transform: translateX(1.75em);
  }
  50%,
  100% {
    opacity: 0.5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes shadow-r-n {
  0% {
    opacity: 0.125;
    -webkit-transform: translateX(1.75em);
    transform: translateX(1.75em);
  }
  50%,
  100% {
    opacity: 0.5;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.swing-l {
  -webkit-animation: ball-l 0.425s ease-in-out infinite alternate;
  animation: ball-l 0.425s ease-in-out infinite alternate;
}
.swing-r {
  -webkit-animation: ball-r 0.425s ease-in-out infinite alternate;
  animation: ball-r 0.425s ease-in-out infinite alternate;
}
.shadow-l {
  -webkit-animation: shadow-l-n 0.425s ease-in-out infinite alternate;
  animation: shadow-l-n 0.425s ease-in-out infinite alternate;
}
.shadow-r {
  -webkit-animation: shadow-r-n 0.425s ease-in-out infinite alternate;
  animation: shadow-r-n 0.425s ease-in-out infinite alternate;
}
</style>
    