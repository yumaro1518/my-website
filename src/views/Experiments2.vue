<template>
    <div>
      <h1>Experiments</h1>
      <h2>This page is experiments only</h2>
    </div>
    <div>
      <CustomButton color="primary" icon="/icons/home.svg" @click="handleClick">ホーム</CustomButton>
      <CustomButton color="secondary" icon="/icons/info.svg"> 情報 </CustomButton>
      <CustomButton color="danger" icon="/icons/warning.svg"> 警告 </CustomButton>
    </div>
    <div>
      <ItemList :items="itemData" />
    </div>
    
  </template>
  
  <script >
  import CustomButton from "@/components/Button.vue";
  import ItemList from "@/components/ItemList.vue";
  //import GridBackground from "@/components/GridAnimation.vue";
  
  export default {
    name: "ExperimentPage",
    components: {
      CustomButton,
      ItemList,
      //GridBackground,
    },
    methods: {
      handleClick() {
        alert("ボタンがクリックされました！");
      },
    },
    data() {
      return {
        itemData: [
          {
            image: "https://t4.ftcdn.net/jpg/03/57/74/97/360_F_357749764_fzoQEh5DfAvQr5bVUvoFSocSEIhKNl1s.jpg",
            title: "アイテム1",
            description: "これはアイテム1の説明です。",
            link: "/item1",  // 遷移先のリンク
          },
          {
            image: "https://t4.ftcdn.net/jpg/03/57/74/97/360_F_357749764_fzoQEh5DfAvQr5bVUvoFSocSEIhKNl1s.jpg",
            title: "アイテム2",
            description: "これはアイテム2の説明です。",
            link: "/item2",  // 遷移先のリンク
          },
          {
            image: "https://t4.ftcdn.net/jpg/03/57/74/97/360_F_357749764_fzoQEh5DfAvQr5bVUvoFSocSEIhKNl1s.jpg",
            title: "アイテム3",
            description: "これはアイテム3の説明です。",
            link: "/item3",  // 遷移先のリンク
          },
        ],
      };
    },
  };
  
  </script>
  