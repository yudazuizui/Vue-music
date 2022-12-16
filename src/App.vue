<template>
  <router-view/>
  <FooterMusic v-show="$store.state.isFooterMusic"/>
</template>
<script>
import FooterMusic from "@/components/item/FooterMusic.vue"
export default {
  components:{
    FooterMusic
  }
}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .5rem;
  height: .5rem;
}
a{
  color: black;
}
</style>
