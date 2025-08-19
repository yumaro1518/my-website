# my-website

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```






## 学習ログ
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Vue coding methods
<template> 
  <!-- HTMLを記述する部分-->
</template>
<script>
    //jsを記述する部分
</script>
<style scoped>
    /*CSSを記述する部分*/
</style>

### data()の仕様について
・コンポーネント内で利用できるデータを保持できるメソッド
・data()で保持しているデータが変更された場合再度ページのレンダリングが実行される。
data(){
    return{
        key:value,
    }
}

### computedの仕様について
・data()で保持したデータを加工したい場合に利用するプロパティ
computed:{
    プロパティ名(){
        処理
    }
},

### methodsの仕様について
・templateやscriptタグ内で呼び出せる関数を記載する場所
methods:{
    関数名(){
        処理
    }
},

### mountedの仕様について
・mounted()はマウントされた後に実行され、これ以降のライフサイクルからDOM要素にアクセスが可能となる。
mounted(){
    処理
},
