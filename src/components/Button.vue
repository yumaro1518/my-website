<template>
    <button class="custom-button" :class="colorClass" @click="$emit('click')">
      <span v-if="icon" class="button-icon">
        <img :src="icon" alt="icon" />
      </span>
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: "CustomButton",
    props: {
      color: {
        type: String,
        default: "primary",
        validator: (value) => ["primary", "secondary", "danger"].includes(value),
      },
      icon: {
        type: String,
        default: "", // アイコンの画像URLを受け取る
      },
    },
    computed: {
      colorClass() {
        return `button-${this.color}`;
      },
    },
  };
  </script>
  
  <style scoped>
  /* ボタンの基本スタイル */
  .custom-button {
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 15px; /* アイコンとの間隔 */
    justify-content: center;
  }
  
  /* 角丸なし */
  .custom-button {
    border-radius: 0%;
  }
  
  /* 色別のスタイル */
  .button-primary {
    background: linear-gradient(135deg, #1e90ff, #007bff);
    color: white;
  }
  
  .button-secondary {
    background: linear-gradient(135deg, #6c757d, #495057);
    color: white;
  }
  
  .button-danger {
    background: linear-gradient(135deg, #ff4d4d, #dc3545);
    color: white;
  }
  
  /* ホバー時のアニメーション */
  .custom-button:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
  
  /* アイコンのスタイル */
  .button-icon img {
    width: 20px;
    height: 20px;
  }
  </style>