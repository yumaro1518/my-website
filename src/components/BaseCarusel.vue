<!-- CarouselWithControls.vue
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<!-- eslint に「Vue コンパイラマクロを使う」と宣言 -->
/* eslint-env vue/setup-compiler-macros */

<template>
  <section class="carousel-wrapper">
    <!-- ❶ 本体 -->
    <b-carousel
      ref="carousel"
      v-model="current"
      :interval="interval"
      ride="carousel"
      no-hover-pause
      controls="false"
      indicators="false"
      img-height="480"
    >
      <b-carousel-slide
        v-for="(s, i) in slides"
        :key="i"
        :img-src="s.img"
        :caption="s.caption"
        :active="i === 0"     
      />
    </b-carousel>

    <!-- ❷ カスタムコントロール -->
    <div class="c-controls">
      <span class="c-count">{{ current + 1 }}/{{ total }}</span>
      <span class="c-line"></span>
      <button class="c-btn" @click="prev">&#x2039;</button>
      <button class="c-btn" @click="toggle">
        <span v-if="playing">&#x275A;&#x275A;</span><!-- ❚❚ -->
        <span v-else>&#x25B6;</span><!-- ▶ -->
      </button>
      <button class="c-btn" @click="next">&#x203A;</button>
    </div>
  </section>
</template>

<script setup>
/* コンポーネント名を multi-word で宣言 */
defineOptions({ name: "BaseCarousel" });

import { ref } from "vue";
import { BCarousel, BCarouselSlide } from "bootstrap-vue-next";

/* スライド画像 */
const slides = [
  { img: "https://picsum.photos/1024/480?image=52", caption: "slide-1" },
  { img: "https://picsum.photos/1024/480?image=54", caption: "slide-2" },
  { img: "https://picsum.photos/1024/480?image=58", caption: "slide-3" },
  { img: "https://picsum.photos/1024/480?image=55", caption: "slide-4" },
  { img: "https://picsum.photos/1024/480?image=60", caption: "slide-5" },
  { img: "https://picsum.photos/1024/480?image=62", caption: "slide-6" },
];

const carousel = ref();        // BCarousel の参照
const current  = ref(0);       // 現在スライド (v-model)
const interval = ref(4000);    // 自動再生間隔 (ms)・0 で停止
const playing  = ref(true);    // 再生フラグ
const total    = slides.length;

/* 前へ / 次へ / 再生・停止 */
const prev = () => carousel.value.prev();
const next = () => carousel.value.next();
const toggle = () => {
  if (playing.value) {
    carousel.value.pause();
    interval.value = 0;
  } else {
    interval.value = 4000;
  }
  playing.value = !playing.value;
};
</script>

<style scoped>
.carousel-wrapper { max-width: 1024px; margin: 0 auto; }

.c-controls{
  display:flex; align-items:center; gap:.8rem; margin-top:.75rem;
  font-family:"Helvetica Neue",sans-serif; font-size:.95rem;
}
.c-count { font-weight:600; }
.c-line  { flex:1 1 auto; height:1px; background:#000; opacity:.4; }

.c-btn{
  background:none; border:none; font-size:1.15rem; cursor:pointer;
  padding:.15rem .35rem; line-height:1;
  transition:opacity .2s, transform .15s;
}
.c-btn:hover { opacity:.6; transform:scale(.9); }
</style>