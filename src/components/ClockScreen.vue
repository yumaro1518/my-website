<template>
  <div class="container">
    <div class="clock">
      <div class="date">
        <p>{{ year }}/{{ month }}/{{ day }}</p>
      </div>
      <div class="time">
        <p>
          {{ hours }}:{{ minutes }}<span class="seconds">:{{ seconds }}</span>
        </p>
      </div>
      <!--ボタンを追加-->
      <div class="button" v-on:click="showMessage()">
        <P>10秒後にアラームを設定</P>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ClockScreen",
  data() {
    return {
      //現在の日時を保持
      date: new Date(),
    };
  },
  computed: {
    //年
    year() {
      return this.date.getFullYear();
    },
    //月
    month() {
      return this.date.getMonth() + 1;
    },
    // 日
    day() {
      return this.dateTimePadding(this.date.getDate());
    },
    // 時
    hours() {
      return this.dateTimePadding(this.date.getHours());
    },
    // 分
    minutes() {
      return this.dateTimePadding(this.date.getMinutes());
    },
    // 秒
    seconds() {
      return this.dateTimePadding(this.date.getSeconds());
    },
  },
  mounted() {
    //現在日時をセット
    this.setDate();

    //1秒ごとにsetDate()を実行
    setInterval(() => this.setDate(), 1000);
  },
  methods: {
    // 日時を二桁に変換
    dateTimePadding(num) {
      return ("0" + num).slice(-2);
    },

    // 現在日時をセット
    setDate() {
      this.date = new Date();
    },

    // 10秒後にアラートを実行
    showMessage() {
      window.setTimeout(() => {
        alert("10秒経過しました");
      }, 10000);
    },
  },
};
</script>
  
  <style scoped>
.container {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: #262626;
}
p {
  margin: 0px;
}
.date,
.time {
  font-weight: 700;
  color: #00ff01;
}
.date {
  font-size: 16px;
  text-align: right;
}
.time {
  font-size: 70px;
}
.seconds {
  font-size: 30px;
}
.button {
  border: 1px solid #fcfcfc;
  text-align: center;
  padding: 10px 0;
  color: #fcfcfc;
  cursor: pointer;
}
</style>