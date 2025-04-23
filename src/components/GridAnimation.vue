<template>
    <div class="background-container">
      <canvas ref="canvas" class="background-canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  
  export default {
    name: "GridBackground",
    setup() {
      const canvas = ref(null);
      let ctx, width, height;
      let time = 0;
  
      const gridSize = 50; // 方眼のサイズ
      const lineLength = 50; // 線の長さ
      const rotationSpeed = 0.02; // 回転速度
  
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
  
      const drawGrid = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"; // 半透明の白
        ctx.lineWidth = 2;
  
        for (let x = 0; x < width; x += gridSize) {
          for (let y = 0; y < height; y += gridSize) {
            const angle = Math.sin(time * rotationSpeed + (x + y) * 0.01) * Math.PI;
            
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
  
            ctx.beginPath();
            ctx.moveTo(-lineLength / 2, 0);
            ctx.lineTo(lineLength / 2, 0);
            ctx.stroke();
  
            ctx.restore();
          }
        }
      };
  
      const animate = () => {
        drawGrid();
        time += 1;
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
    z-index: -2;
    background: linear-gradient(135deg, #f1efeb, #f1e6d1, #f1e7cf); /* 背景を落ち着いたグラデーションに */
    background-attachment: fixed; /*スクロール時に固定。 */

  }
  
  .background-canvas {
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.8; /* 背景の透明度 */
    z-index: 1;
  }
  </style>