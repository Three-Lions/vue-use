<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
  const name =
    'vue-use分手大师发啊沙发斯蒂芬都发啥打法是放大是的发生的方法撒大声地发都发飒飒代发撒大声地发啊似懂非懂发SSD发电风扇水电费手动阀阿斯达发撒打法是打发打发撒打发谁是的是的发阿斯顿法师打发发撒打发打撒反反复复防守打法手动阀三大发啥打法'
  const a = { v: 1, n: 2 }
  const b = (x: number) => x + 1
  const longArray = ['item1', 'item2', 'item3']
  console.log(name, a, b(1), longArray)
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
    <h1 class="text-3xl font-bold underline">页面主题配置</h1>
    <h1 class="text-3xl font-bold underline">测试合分支</h1>
  </main>
</template>
