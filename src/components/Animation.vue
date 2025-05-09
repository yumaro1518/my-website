<template>
  <div>
    <h1>Animation</h1>
    <h2>This page is Animation study!!</h2>
  </div>
  <div class="cursor"></div>
  <!-- アニメーション要素 -->
  <div class="shapes">
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>
  </div>

  <!-- "Hello World" の表示 -->
  <div class="content">
    <h1>Hello World</h1>
  </div>
</template>

<script >
import gsap from "gsap";

export default {
  name: "AnimationPage",
  components: {},
};

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.1,
  });

  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY-100,
    stagger: -0.1,
  });
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.body{
  background-color: #a6ddcb;
}

.shapes {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #a6ddcb;
  overflow: hidden;
  z-index: 1;
}

.shape {
  /* will-change: transform; */
  position: absolute;
  border-radius: 50%;
}

.shape1 {
  background-color: green;
  width: 650px;
  height: 650px;
  margin: -325px 0 0 -325px;
  z-index: Auto;
}
.shape2 {
  background-color: red;
  width: 440px;
  height: 440px;
  margin: -220px 0 0 -220px;
  z-index: Auto;
}
.shape3 {
  background-color: purple;
  width: 270px;
  height: 270px;
  margin: -135px 0 0 -135px;
  z-index: Auto;
}

.cursor {
  position: fixed;
  background-color: #2128bd;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: -10px 0 0 -10px;
  /* will-change: transform; */
  user-select: none;
  pointer-events: none;
  z-index: 1000;
}

.content {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  mix-blend-mode: screen;
  z-index: 2;
}

.content h1 {
  color: black;
  margin: 0;
  font-size: 10rem;
}
</style>