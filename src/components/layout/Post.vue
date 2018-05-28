<template>
  <div class="post">
  {{this.msg}}
  </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
      msg: 'vue post'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post{
  width:30%;
  border:1px solid green;
}
</style>
