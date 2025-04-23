<template>
    <div class="background-container">
      <canvas ref="canvas" class="background-canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from "vue";
  import gsap from "gsap";
  
  export default {
    name: "AnimationBackground",
    setup() {
      const canvas = ref(null);
      let ctx, width, height;
      let lines = [];
  
      // **初期化関数**
      const initCanvas = () => {
        const c = canvas.value;
        if (!c) return;
        ctx = c.getContext("2d");
  
        // 画面サイズ取得
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
  
        // 線のセットアップ
        createLines();
  
        // アニメーション開始
        animate();
      };
  
      // **キャンバスのサイズをウィンドウに合わせる**
      const resizeCanvas = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.value.width = width;
        canvas.value.height = height;
      };
  
      // **ランダムな線を作成**
      const createLines = () => {
        lines = [];
        for (let i = 0; i < 20; i++) {
          lines.push({
            x1: Math.random() * width,
            y1: Math.random() * height,
            x2: Math.random() * width,
            y2: Math.random() * height,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
          });
        }
      };
  
      // **アニメーションの関数**
      const animate = () => {
        ctx.clearRect(0, 0, width, height);
  
        lines.forEach((line) => {
          // 線を描画
          ctx.beginPath();
          ctx.moveTo(line.x1, line.y1);
          ctx.lineTo(line.x2, line.y2);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
          ctx.lineWidth = 1;
          ctx.stroke();
  
          // 線の動き
          gsap.to(line, {
            duration: 1,
            x1: `+=${line.speedX * 10}`,
            y1: `+=${line.speedY * 10}`,
            x2: `+=${line.speedX * 10}`,
            y2: `+=${line.speedY * 10}`,
            ease: "power1.inOut",
            onComplete: () => {
              // 画面外に出たらリセット
              if (line.x1 < 0 || line.x1 > width || line.y1 < 0 || line.y1 > height) {
                line.x1 = Math.random() * width;
                line.y1 = Math.random() * height;
              }
              if (line.x2 < 0 || line.x2 > width || line.y2 < 0 || line.y2 > height) {
                line.x2 = Math.random() * width;
                line.y2 = Math.random() * height;
              }
            },
          });
        });
  
        requestAnimationFrame(animate);
      };
  
      // **マウント時に実行**
      onMounted(initCanvas);
  
      // **アンマウント時のクリーンアップ**
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
    background: #0e0e0e;
  }
  
  .background-canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
  </style>