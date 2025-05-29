<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const appName = ref('2andbeii')
const page = ref('add post')

onMounted(() => {
  // fetchPostsAndInitSwiper()
})



</script>

<template>
  <div class="top-bar">
    <h1>{{ appName }}</h1>
  </div>
  <p> {{ page }}</p>
</template>