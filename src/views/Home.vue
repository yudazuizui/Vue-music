<template>
  <div>
    <TopNav />
    <SwpierTop />
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src
// import { getMusicItemList, getItemList } from "@/request/api/item.js";
import TopNav from "@/components/home/TopNav.vue";
import SwpierTop from "@/components/home/SwpierTop.vue";
import IconList from "@/components/home/IconList.vue";
import MusicList from "@/components/home/MusicList.vue";
export default {
  name: "Home",
  // async mounted(){
  //     let res2= await getItemList(5221080943);
  //     console.log(res2);
  // },
  components: {
    TopNav,
    SwpierTop,
    IconList,
    MusicList,
  },
};
</script>
