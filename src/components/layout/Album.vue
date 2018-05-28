<template>
  <div class="album">
  {{this.msg}}
  </div>
</template>

<script>
export default {
  name: 'Album',
  data () {
    return {
      msg: 'vue album'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album{
  width:30%;
  border:1px solid blue;
}
</style>
