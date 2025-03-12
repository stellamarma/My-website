<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="aboutme">
      <a href="#aboutme" @click.prevent="scrollTo('aboutme')">About Me</a>
    </el-menu-item>
    <el-menu-item index="skills">
      <a href="#skills" @click.prevent="scrollTo('skills')">Skills</a>
    </el-menu-item>
    <el-menu-item index="projects">
      <a href="#projects" @click.prevent="scrollTo('projects')">Projects</a>
    </el-menu-item>
    <el-menu-item index="education">
      <a href="#education" @click.prevent="scrollTo('education')">Education</a>
    </el-menu-item>
    <el-menu-item index="languages">
      <a href="#languages" @click.prevent="scrollTo('languages')">Languages</a>
    </el-menu-item>
    <el-menu-item index="contact">
      <a href="#contact" @click.prevent="scrollTo('contact')">Contact</a>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const activeIndex = ref('aboutme');

onMounted(() => {
  // Ελέγχουμε το hash στην URL κατά το φόρτωμα
  const hash = window.location.hash.substring(1);
  if (hash) {
    activeIndex.value = hash;
  }
});

// Συνάρτηση για την αλλαγή του ενεργού στοιχείου στο μενού
const handleSelect = (index: string) => {
  activeIndex.value = index;
};

// Συνάρτηση που κάνει smooth scroll στην επιλεγμένη ενότητα
const scrollTo = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
.el-menu-demo {
  justify-content: center;
}

.el-menu-item a {
  text-decoration: none;
  color: inherit;
  font-size: 20px;
  cursor: pointer;
}


</style>
