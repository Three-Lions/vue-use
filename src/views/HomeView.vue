<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <main>
    <HelloWorld />
    <a-space wrap>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
    </a-space>

    <h1 class="text-3xl font-bold underline text-blue-600">Hello, Tailwind CSS!</h1>
    <p class="mt-4 text-gray-700">如果这个段落和标题的样式改变，说明配置成功。</p>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </main>
</template>
