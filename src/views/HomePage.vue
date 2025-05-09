<template>
  <div class="page">
    <!-- =================== HERO =================== -->
    <section class="hero">
      <div class="hero__inner">
        <ruby class="Furi">
          <h1>
            NI<rt>に</rt>CO<rt>こ</rt>
            <div>LA<rt>ラ</rt>BO<rt>ボ</rt></div>
          </h1>
        </ruby>
        <p class="hero__lead">Welcome to my homepage!</p>
        <p class="hero__tag">Let's see it!</p>
      </div>
    </section>

    <!-- =================== PROFILE =================== -->
    <section class="section section--profile">
      <header class="section__head">
        <h1 class="section__title">
          Profile<span class="jp-contents-name">プロフィール</span>
        </h1>
        <p class="section__lead">
          Here is my profile page with details about me.
        </p>
      </header>

      <div class="section__content">
        <p>※ここにプロフィールの本文を配置します。</p>
      </div>
    </section>

    <!-- =================== WORKS =================== -->
    <section class="section section--works">
      <header class="section__head">
        <h1 class="section__title">
          Work<span class="jp-contents-name">作品</span>
        </h1>
        <p class="section__lead">
          Check out my past projects and creative work.
        </p>
      </header>

      <div class="section__content">
        <p>※作品ギャラリーやカルーセルをここに。</p>
      </div>
    </section>

    <!-- =================== RECORD =================== -->
    <section class="section section--record">
      <header class="section__head">
        <h1 class="section__title">
          Record<span class="jp-contents-name">記録</span>
        </h1>
        <p class="section__lead">
          Here are my personal records and achievements.
        </p>
      </header>

      <div class="section__content">
        <p>※記録テーブルなど。</p>
      </div>
    </section>

    <!-- =================== QUEST =================== -->
    <section class="section section--quest">
      <header class="section__head">
        <h1 class="section__title">
          Quest<span class="jp-contents-name">目標</span>
        </h1>
        <p class="section__lead">Discover the challenges and goals I pursue.</p>
      </header>

      <div class="section__content">
        <p>※目標リストなど。</p>
      </div>
    </section>

    <!-- =================== RECOMMEND =================== -->
    <section class="section section--recommend">
      <header class="section__head">
        <h1 class="section__title">
          Recs<span class="jp-contents-name">おすすめ</span>
        </h1>
        <p class="section__lead">Here are some things I highly recommend!</p>
      </header>

      <div class="section__content">
        <p>※おすすめアイテム。</p>
      </div>
    </section>

    <!-- =================== MONOLOG =================== -->
    <section class="section section--monolog">
      <header class="section__head">
        <h1 class="section__title">
          Monolog<span class="jp-contents-name">つぶやき</span>
        </h1>
        <p class="section__lead">Random thoughts and deep reflections.</p>
      </header>

      <div class="section__content">
        <p>※つぶやき本文。</p>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: "HomePage" });
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Prompt&family=Concert+One&display=swap");

/* ---------- 基本レイアウト ---------- */
.page {
  height: 100vh;
  overflow-y: auto; /* ← スクロールバーを戻す */
  scroll-snap-type: y mandatory; /* フルページスナップ */ /* none (初期値):通常スクロール  proximity:“近ければ”吸着	mandatory:必ず吸着 →ページ送りのようなUI実装*/ 
  font-family: "Prompt", sans-serif;
  color: #333;
}

/* ---------- HERO ---------- */
.hero {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
}
.hero__inner {
  text-align: center;
}
.hero__title {
  font-family: "Concert One", sans-serif;
  font-size: clamp(3rem, 12vw, 10rem);
}
.hero__title rt {
  font-size: 0.35em;
}
.hero__lead {
  font-size: clamp(1rem, 2.5vw, 1.75rem);
  margin: 0.5rem 0;
}
.hero__tag {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}
.Furi rt {
  font-size: clamp(20px, 4vw, 50px);
  font-family: "Concert One", sans-serif;
  font-weight: 850;
  color: #333;
  text-align: center;
  transition: all 0.5s ease-in-out;
}
.Furi h1{
  font-family: "Concert One", sans-serif;
  font-size: clamp(60px, 12vw, 180px);
  display: inline-block;
  animation: fadeIn 3.5s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}
/* ---------- 汎用セクション ---------- */
.section {
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  padding-top: 35vh; /* 見出し分の余白 */
}

.section__head {
  position: absolute;
  top: 12vh;
  left: 3%;
}

.section__title {
  font-family: "Concert One", sans-serif;
  font-size: clamp(2.5rem, 10vw, 7rem);
  margin: 0;
}
.jp-contents-name {
  letter-spacing: 0.1rem;
  font-size: clamp(1rem, 4.5vw, 3.5rem);
  font-style: bold;
  margin-left: 1.5rem;
}
.section__lead {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  margin: 0.4rem 0 0;
}

.section__content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 3%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

/* ---------- フェードアニメ（home 部分だけ再利用） ---------- */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.hero__lead,
.hero__tag {
  animation: fadeIn 4s forwards;
}

/* ---------- レスポンシブで余白を縮めたい場合 ---------- */
@media (max-width: 600px) {
  .section {
    padding-top: 30vh;
  }
  .section__head {
    top: 8vh;
  }
}
</style>