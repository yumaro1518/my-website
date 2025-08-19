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
    <!-- ★ section--profile 改良版 (抜粋) -->
<section class="section section--profile">
  <header class="section_head">
    <h1 class="section_title">
      Profile<span class="jp-contents-name">プロフィール</span>
    </h1>
    <p class="section_lead">
      Here is my profile page with details about me.
    </p>
  </header>

  <div class="section_content container-fluid">
    <BRow class="g-4">                <!-- g-4 = カード間 1.5rem -->
      <!-- ===== 左：詳細リスト (md 以上で左半分) ===== -->
      <BCol cols="12" md="6">
        <BCard
          title="About Me"
          class="profile-card border-0"
        >
          <BListGroup flush>
            <!-- ラベルと値を左右に -->
            <BListGroupItem class="d-flex">
              <strong class="w-25">Name</strong><span>Nico</span>
            </BListGroupItem>
            <BListGroupItem class="d-flex">
              <strong class="w-25">Age</strong><span>20</span>
            </BListGroupItem>
            <BListGroupItem class="d-flex">
              <strong class="w-25">City</strong><span>埼玉, Japan</span>
            </BListGroupItem>
            <BListGroupItem class="d-flex">
              <strong class="w-25">Interests</strong>
              <span>Vue / React / Unity / Blender / Arduino / Flutter</span>
            </BListGroupItem>
          </BListGroup>

          <!-- フッターに右寄せボタン -->
          
            <div class="text-end">
              <BButton variant="primary" size="sm">Detail !!</BButton>
            </div>
          
        </BCard>
      </BCol>

      <!-- ===== 右：説明文 (md 以上で右半分) ===== -->
      <BCol cols="12" md="6">
        <BCard
          title="What I Do"
          class="profile-card shadow-sm border-0"
        >
          <BCardText>
            With supporting text below as a natural lead-in to additional
            content. You can write your short bio or mission statement here.
          </BCardText>
          <div class="text-end">
            <BButton variant="primary" size="sm">Go somewhere</BButton>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </div>
</section>

    <!-- =================== WORKS =================== -->
    <section class="section section--works">
      <header class="section_head">
        <h1 class="section_title">
          Work<span class="jp-contents-name">作品</span>
        </h1>
        <p class="section_lead">
          Check out my past projects and creative work.
        </p>
      </header>

      <div class="section_content">
        <p>※作品ギャラリーやカルーセルをここに。</p>
      </div>
    </section>

    <!-- =================== RECORD =================== -->
    <section class="section section--record">
      <header class="section_head">
        <h1 class="section_title">
          Record<span class="jp-contents-name">記録</span>
        </h1>
        <p class="section_lead">
          Here are my personal records and achievements.
        </p>
      </header>

      <div class="section_content">
        <p>※記録テーブルなど。</p>
      </div>
    </section>

    <!-- =================== QUEST =================== -->
    <section class="section section--quest">
      <header class="section_head">
        <h1 class="section_title">
          Quest<span class="jp-contents-name">目標</span>
        </h1>
        <p class="section_lead">Discover the challenges and goals I pursue.</p>
      </header>

      <div class="section_content">
        <p>※目標リストなど。</p>
      </div>
    </section>

    <!-- =================== RECOMMEND =================== -->
    <section class="section section--recommend">
      <header class="section_head">
        <h1 class="section_title">
          Recs<span class="jp-contents-name">おすすめ</span>
        </h1>
        <p class="section_lead">Here are some things I highly recommend!</p>
      </header>

      <div class="section_content">
        <p>※おすすめアイテム。</p>
      </div>
    </section>

    <!-- =================== MONOLOG =================== -->
    <section class="section section--monolog">
      <header class="section_head">
        <h1 class="section_title">
          Monolog<span class="jp-contents-name">つぶやき</span>
        </h1>
        <p class="section_lead">Random thoughts and deep reflections.</p>
      </header>

      <div class="section_content">
        <p>※つぶやき本文。</p>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: "HomePage" });
import { BCard, BButton } from "bootstrap-vue-next";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&family=Prompt&family=Concert+One&display=swap");

/* ---------- 基本レイアウト ---------- */
.page {
  height: 100vh;
  overflow-y: auto;
  /* ← スクロールバーを戻す */
  scroll-snap-type: y mandatory;
  /* フルページスナップ */
  /* none (初期値):通常スクロール  proximity:“近ければ”吸着	mandatory:必ず吸着 →ページ送りのようなUI実装*/
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
  font-size: clamp(25px, 4vw, 50px);
  font-family: "Concert One", sans-serif;
  font-weight: 850;
  color: #333;
  text-align: center;
  transition: all 0.5s ease-in-out;
}

.Furi h1 {
  font-family: "Concert One", sans-serif;
  font-size: clamp(100px, 12vw, 240px);
  display: inline-block;
  animation: fadeIn 3.5s cubic-bezier(0.33, 1, 0.68, 1) forwards;
}

/* ---------- 汎用セクション ---------- */
.section {
  height: 100vh;
  position: relative;
  scroll-snap-align: start;
  padding-top: 35vh;
  /* 見出し分の余白 */
}

.section_head {
  position: absolute;
  top: 12vh;
  left: 3%;
}

.section_title {
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

.section_lead {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  margin: 0.4rem 0 0;
}

.section_content {
  max-width: 1450px;
  margin: 0 auto;
  padding: 0 3%;
  display: flex;
  align-items: flex-start;
  justify-content: auto;
  overflow: hidden;
}

/* ---------- プロフィールコンテンツ ---------- */
/* カード本体 */
.profile-card-left {
  max-width: clamp(280px, 75vw, 1450px);
  width: 100%;
  max-height: clamp(250px, 75vh, 450px);
  height: 100%;
  margin: 0;
  /* auto を消して中央寄せ解除 */
  padding: 0 3%;
  display: flex;
  align-items: flex-start;
}

.profile-card-item {
  /* 画面幅 × 2/3 で拡大。ただし 1200px を上限に */
  max-width: clamp(280px, 75vw, 1450px);
  width: 100%;
  max-height: clamp(250px, 75vh, 450px);
  height: 100%;
  /* 子要素の余白込みで 2/3 幅に */
  margin-left: 0;
  /* 左詰め */
  display: flex;
  justify-content: flex-start;
  /* ← ここが重要 */
  align-items: flex-start;
  /* 任意：上揃え */
}

/* トーン合わせ用：ベージュ系を “beige-100” で定義 */
:root {
  --beige-100: #f1e6d1;
  --beige-200: #e3d3b6;
}

/* カード本体 */
.profile-card {
  background: var(--beige-100);    /* 暗めの白 (ベージュ) */
  color: #333;
  border-radius: 1rem;
  padding: 1.25rem;               /* 内側余白を調整 */
}

/* BListGroup の行をフラットに */
.profile-card :deep(.list-group-item) {
  border: none;                   /* 罫線を取る */
  padding-left: 0;
  padding-right: 0;
  font-size: 0.95rem;
}
.profile-card :deep(.list-group-item strong) {
  font-weight: 600;
}

/* ボタン：角丸を合わせる */
.profile-card :deep(.btn) {
  border-radius: 0.5rem;
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