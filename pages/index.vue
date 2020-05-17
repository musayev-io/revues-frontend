<template>
  <div class="home">
    <HomeHero />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHero from '~/components/home/Hero.vue'

export default {
  name: 'Home',
  components: {
    HomeHero
  }
}
</script>
