<template>
  <div class="kekflix">
    <header>
      <section id="left">
        <h1>KEKFLIX</h1>
        <a>browse</a>
        <a>notForKids</a>
      </section>
      <section id="right">
        <vue-material-icon  name="search" :size="28"></vue-material-icon>
        <label>search</label>
        <vue-material-icon name="notifications" :size="28"></vue-material-icon>
        <img :src="userData.userPic"/>
        <a>{{userData.name}}</a>
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Kekflix',
  data () {
    return {}
  },
  computed: {
    userData () {
      return this.$store.getters.userData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kekflix{
  background: #000;
  min-height: 100vh;
  padding: 25px 5% 0 5%;
  box-sizing: border-box
}
header{
  display: flex;
  flex-direction: row;
  justify-content: space-between
}

#left, #right{
display: flex;
flex-direction: row;
justify-content: space-around;
}

#left h1{
color: lightgreen;
margin:0;
cursor: pointer
}

#left a:nth-child(2){
  margin: 0 40px;
  color: lightgreen;

}

#left a {
  color: #fff;
  line-height: 32px;
  cursor: pointer;
}

#right {
  color: #fff;
  line-height: 32px
}

#right a, #right label{
  color:#fff;
}
#right img {
  width: 40px;
  height: 40px;
  margin-left: 40px;
  margin-right: 10px;
}
#right label {
  margin-right: 40px;
  margin-left: 20px;
}

</style>
