<template>
    <div class="background-container">
      <canvas ref="canvas" class="background-canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    name: "AnimationBackground",
    setup() {
      const canvas = ref(null);
      let ctx, width, height;
      let time = 0; // 時間経過用
      const waves = [
        { height: 50, speed: 0.02, color: ["rgba(0, 102, 255, 0.4)", "rgba(255, 255, 255, 0.2)"] },
        { height: 80, speed: 0.03, color: ["rgba(0, 153, 255, 0.6)", "rgba(255, 255, 255, 0.3)"] },
        { height: 100, speed: 0.04, color: ["rgba(0, 204, 255, 0.8)", "rgba(255, 255, 255, 0.4)"] },
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
        const gradient = ctx.createLinearGradient(0, height / 2, 0, height);
        gradient.addColorStop(0, wave.color[0]); // 上の色
        gradient.addColorStop(1, wave.color[1]); // 下の色
        ctx.fillStyle = gradient;
  
        ctx.moveTo(0, height / 2);
  
        for (let x = 0; x < width; x += 10) {
          const y = height / 2 + Math.sin(x * 0.02 + time * wave.speed + offset) * wave.height;
          ctx.lineTo(x, y);
        }
  
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
      };
  
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
        waves.forEach((wave, index) => drawWave(wave, index * 1.5)); // ずらして描画
        time += 0.05; // 波の動き
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
  .background-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: -1;
  }
  
  .background-canvas {
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.8; /* 背景の透明度を調整 */
  }
  </style>