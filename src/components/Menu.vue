<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <!-- Χρήση του path με id για την πλοήγηση στις διάφορες ενότητες -->
    <el-menu-item index="1" :to="'#aboutme'">About Me</el-menu-item>
    <el-menu-item index="2" :to="'#skills'">Skills</el-menu-item>
    <el-menu-item index="3" :to="'#projects'">Projects</el-menu-item>
    <el-menu-item index="4" :to="'#education'">Education</el-menu-item>
    <el-menu-item index="5" :to="'#languages'">Languages</el-menu-item>
    <el-menu-item index="6" :to="'#contact'">Contact</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const activeIndex = ref('1')  // Το ενεργό στοιχείο του μενού
const route = useRoute()

// Παρακολούθηση της τρέχουσας διαδρομής του Vue Router
watch(route, (newRoute) => {
  if (newRoute.hash) {
    activeIndex.value = newRoute.hash.slice(1);  // Remove '#' from hash
  }
})

// Συνάρτηση για καταγραφή της επιλογής του χρήστη
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)  // Εμφάνιση στο console όταν επιλέγεται κάτι
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
