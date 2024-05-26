<template>
  <div class="bg-amber-100 min-h-screen">
    <h1 class="text-4xl font-black mb-10 text-center text-sky-950 py-8">台灣夜市</h1>
    <div class="flex justify-center">
      <ul class="justify-center grid grid-cols-4   gap-4 px-8">
      <li v-for="market in markets" :key="market.name" class="bg-sky-950 p-5 rounded-2xl shadow-lg text-center mb-4 hover:bg-sky-900">
        <router-link :to="'/' + market.name" class="text-amber-50 font-semibold hover:">{{ market.name }}</router-link>
      </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import marketsData from '../data/markets.json'

const markets = ref([])

onMounted(() => {
  markets.value = marketsData
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
