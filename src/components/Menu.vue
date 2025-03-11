<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <!-- Νέα στοιχεία -->
    <el-menu-item index="1">About me</el-menu-item>
    <el-menu-item index="2">Skills</el-menu-item>
    <el-menu-item index="3">Projects</el-menu-item>
    <el-menu-item index="4">Education</el-menu-item>
    <el-menu-item index="5">Languages</el-menu-item>
    <el-menu-item index="6">Contact</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-demo {
  justify-content: center; /* Κεντράρει τα στοιχεία του μενού */
}

.el-menu-item {
  font-size: 20px; /* Αυξάνει το μέγεθος των γραμμάτων */
}
</style>
