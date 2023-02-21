<script setup>
import { ref } from "vue"

const value1 = ref("")
defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <bl-button type="danger">bl button</bl-button>
  </el-row>
  <el-row class="mb-4">
    <el-date-picker v-model="value2" type="date" />
  </el-row>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
