<template>
    <div class="container">

      <!-- Footer -->
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#aboutme" @click.prevent="scrollTo('aboutme')" class="nav-link px-2 text-body-secondary">About Me</a>
          </li>
          <li class="nav-item">
            <a href="#skills" @click.prevent="scrollTo('skills')" class="nav-link px-2 text-body-secondary">Skills</a>
          </li>
          <li class="nav-item">
            <a href="#projects" @click.prevent="scrollTo('projects')" class="nav-link px-2 text-body-secondary">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#education" @click.prevent="scrollTo('education')" class="nav-link px-2 text-body-secondary">Education</a>
          </li>
          <li class="nav-item">
            <a href="#languages" @click.prevent="scrollTo('languages')" class="nav-link px-2 text-body-secondary">Languages</a>
          </li>
          <li class="nav-item">
            <a href="#contact" @click.prevent="scrollTo('contact')" class="nav-link px-2 text-body-secondary">Contact</a>
          </li>
        </ul>
        <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
  const activeIndex = ref('aboutme');
  
  onMounted(() => {
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
