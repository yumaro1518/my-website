<template>
  <div class="container">
    <div class="home">
      <ruby class="Furi">
        <h1>
          NI<rt>に</rt>CO<rt>こ</rt>
          <div>LA<rt>ラ</rt>BO<rt>ボ</rt></div>
        </h1>
      </ruby>
      <p>Welcome to my homepage!</p>
      <p class="rip-up">Let's see it!</p>
    </div>

    <div class="profile-content section">
      <h1>Profile<span class="jp-contents-name">プロフィール</span></h1>
      <p>Here is my profile page with details about me.</p>
    </div>
    <div class="works-content section">
      <h1>Work<span class="jp-contents-name">作品</span></h1>
      <p>Check out my past projects and creative work.</p>
    </div>
    <div class="record-content section">
      <h1>Record<span class="jp-contents-name">記録</span></h1>
      <p>Here are my personal records and achievements.</p>
    </div>
    <div class="quest-content section">
      <h1>Quest<span class="jp-contents-name">目標</span></h1>
      <p>Discover the challenges and goals I pursue.</p>
    </div>
    <div class="recommend-content section">
      <h1>Recs<span class="jp-contents-name">おすすめ</span></h1>
      <p>Here are some things I highly recommend!</p>
    </div>
    <div class="monologue-content section">
      <h1>Monolog<span class="jp-contents-name">つぶやき</span></h1>
      <p>Random thoughts and deep reflections.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  mounted() {
    document.querySelectorAll(".home p").forEach((p, index) => {
      p.style.setProperty("--i", index + 1);
    });
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Prompt&family=Concert+One&display=swap");

.container {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-family: "Concert One", sans-serif;
  font-weight: 750;
  color: #333;
  scroll-snap-align: start;
  position: relative;
}

.section h1 {
  font-size: clamp(40px, 10vw, 120px);
  position: absolute;
  left: 0;
  top: 10%;
  text-align: left;
  transition: all 0.5s ease-in-out;
}

.section p {
  font-size: clamp(18px, 2.5vw, 30px);
  position: relative;
  left: 1%;
  top: 25%;
  text-align: left;
  transition: all 0.5s ease-in-out;
}

.jp-contents-name {
  font-size: clamp(20px, 3vw, 40px);
  position: relative;
  left: 5%;
  top: 10%;
  text-align: left;
  transition: all 0.5s ease-in-out;
}

html {
  scroll-behavior: smooth;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  font-family: "Concert One", sans-serif;
  font-weight: 750;
  color: #333;
  scroll-snap-align: start;
  position: relative;
}

.Furi rt {
  font-size: clamp(20px, 4vw, 50px);
  font-family: "Concert One", sans-serif;
  font-weight: 950;
  color: #333;
  text-align: center;
  transition: all 0.5s ease-in-out;
}

.home h1 {
  font-size: clamp(60px, 12vw, 180px);
  display: inline-block;
  animation: fadeIn 3.5s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

.home p {
  font-size: clamp(16px, 3vw, 30px);
  display: inline-block;
  animation: fadeIn 4s forwards;
  animation-delay: calc(0.2s * (var(--i) - 1));
}

.home p.rip-up {
  font-family: "Concert One", sans-serif;
  font-size: clamp(16px, 3vw, 30px);
  color: #333;
  margin-top: 20px;
  display: inline-block;
  animation: fadeIn 4s forwards;
  animation-delay: calc(0.2s * (var(--i) - 1));
}

/* アニメーション */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* レスポンシブ補足対応 */
@media (max-width: 768px) {
  .section h1 {
    top: 12%;
    left: 3%;
  }

  .section p {
    top: 20%;
    left: 3%;
  }

  .jp-contents-name {
    left: 6%;
    top: 6%;
  }
}

@media (max-width: 480px) {
  .section h1 {
    top: 12%;
    left: 5%;
  }

  .section p {
    top: 20%;
    left: 5%;
  }

  .jp-contents-name {
    font-size: 5vw;
    top: 5%;
    left: 5%;
  }

  .home h1 {
    font-size: 25vw;
  }

  .home p,
  .home p.rip-up {
    font-size: 6vw;
    text-align: center;
  }

  .Furi rt {
    font-size: 5vw;
  }
}
</style>