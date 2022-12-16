<template>
  <div class="infoUserTop">
    <img :src="user.data.profile.avatarUrl" alt="" class="profileimg" />
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  mounted() {
    // console.log(this.user);
  },
};
</script>
<style lang="less" scoped>
.infoUserTop {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .profileimg {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name {
    font-weight: 700;
    font-size: 0.4rem;
  }
}
</style>