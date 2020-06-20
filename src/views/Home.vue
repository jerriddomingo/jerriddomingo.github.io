<template>
  <div class="home">
    <img class="homepage-logo" alt="Jerrid logo" src="../assets/logo.svg">
    <IntroCard msg="Jerrid Domingo"/>
  </div>
</template>

<style lang="scss">
.home {
  .homepage-logo {
    height: 500px;
  }
}
</style>

<script>
// @ is an alias to /src
import IntroCard from '@/components/IntroCard.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    IntroCard
  }
}
</script>
