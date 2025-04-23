<template>
    <div class="item-list">
      <router-link
        v-for="(item, index) in items"
        :key="index"
        :to="item.link"
        class="item-box"
      >
        <!-- 上部2/5: 画像エリア -->
        <div class="item-image">
          <img :src="item.image" :alt="item.title" />
        </div>
  
        <!-- 中部1/5: タイトルエリア -->
        <div class="item-title">
          {{ item.title }}
        </div>
  
        <!-- 下部2/5: 文章エリア -->
        <div class="item-description">
          {{ item.description }}
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "ItemList",
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* アイテムリスト全体のスタイル */
  .item-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
  
  /* 正方形のアイテムボックス */
  .item-box {
    width: 300px; /* 正方形 */
    height: 300px;
    border-radius: 20px; /* 角丸正方形 */
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    transition: transform 0.3s ease-in-out;
    text-decoration: none; /* リンクの下線を消す */
  }
  
  .item-box:hover {
    transform: scale(1.05);
  }
  
  /* 画像エリア（上部2/5） */
  .item-image {
    flex: 2;
    background: #ddd;
  }
  
  .item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* タイトルエリア（中部1/5） */
  .item-title {
    flex: 1;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
  }
  
  /* 文章エリア（下部2/5） */
  .item-description {
    flex: 2;
    font-size: 14px;
    padding: 8px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>