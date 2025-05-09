<template>
  <div class="header-position">
    <HeaderPart />
    <router-view></router-view>
  </div>
  <div class="background-container">
    <canvas ref="canvas" class="background-canvas"></canvas>
  </div>
  <div class="footer-position">
    <FooterPart />
  </div>
</template>

<script>
import HeaderPart from "./views/Header.vue";
import FooterPart from "./views/Footer.vue";
import { ref, onMounted, onUnmounted } from "vue";
// import gsap from "gsap";

export default {
  name: "App",
  components: {
    HeaderPart,
    FooterPart,
  },
  setup() {
    const canvas = ref(null);
    let ctx, width, height;
    let time = 0;

    const waves = [
      { height: 50, speed: 0.12, frequency: 0.02, rotationSpeed: 0.1, color: "rgba(0, 102, 255, 0.8)", lineWidth: 2 },
      { height: 30, speed: 0.13, frequency: 0.03, rotationSpeed: 0.2, color: "rgba(0, 153, 255, 0.6)", lineWidth: 1.5 },
      { height: 20, speed: 0.14, frequency: 0.04, rotationSpeed: 0.3, color: "rgba(0, 204, 255, 0.4)", lineWidth: 1 },
    ];

    const initCanvas = () => {
      const c = canvas.value;
      if (!c) return;
      ctx = c.getContext("2d");

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      animate();
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.value.width = width;
      canvas.value.height = height;
    };

    const drawWave = (wave, offset) => {
      ctx.beginPath();
      ctx.strokeStyle = wave.color;
      ctx.lineWidth = wave.lineWidth;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      for (let x = 0; x < width; x += 10) {
        // らせんの回転を追加
        const y = height / 2 + Math.sin(x * wave.frequency + time * wave.speed + offset) * wave.height;
        const xOffset = Math.cos(x * wave.frequency + time * wave.rotationSpeed) * 20; // らせんの振れ幅

        if (x === 0) {
          ctx.moveTo(x + xOffset, y);
        } else {
          ctx.lineTo(x + xOffset, y);
        }
      }

      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      waves.forEach((wave, index) => drawWave(wave, index * 1.5)); // 波を少しずらして描画
      time += 0.05;
      requestAnimationFrame(animate);
    };

    onMounted(initCanvas);
    onUnmounted(() => {
      window.removeEventListener("resize", resizeCanvas);
    });

    return { canvas };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Playfair+Display:wght@791&family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html,
body {
  height: 100%;
  margin: 0;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
}
#app {
  height: 80%;
}
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #f1efeb, #f1e6d1, #f1e7cf); /* 背景を落ち着いたグラデーションに */
  background-attachment: fixed; /*スクロール時に固定。 */
  z-index: -1;
}

.background-canvas {
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0.8; /* 背景の透明度を調整 */
}

.footer-position{
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
