<template>
  <div class="flex justify-center bg-amber-50 min-h-screen px-4 sm:px-8 lg:px-40 py-10">
    <div class="w-full max-w-md">
      <h1 class="text-4xl font-bold mb-6 text-center text-sky-950">{{ nightmarket?.name }}</h1>
      
      <div class="bg-white p-5 mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md">
        <p v-html="formattedIntro"></p>
      </div>
      
      <div class="bg-white p-5 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md">
        <p><strong>地址：</strong><br>{{ nightmarket?.address }}</p>
        <p><strong>交通方式：</strong><br>{{ nightmarket?.transportation }}</p>
      </div>
    </div>
  </div>
</template>

  
<script setup>

  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import nightmarkets from '../data/markets.json'

  const route = useRoute()
  const nightmarket = ref(null)
  const formattedIntro = ref('')

  onMounted(() => {
    const marketName = route.params.marketName
    nightmarket.value = nightmarkets.find(market => market.name === marketName)

    if (nightmarket.value) {
      formattedIntro.value = nightmarket.value.intro.replace(/\n/g, '<br>')    }
  })

  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
  }
  </style>
  