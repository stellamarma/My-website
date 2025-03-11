<template>
  <div id="app">
    <Menu1 /> <!-- Το μενού εδώ -->
    <div class="content">
      <section id="aboutme">
        <Aboutme />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="languages">
        <Languages />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
    <Footer /> <!-- Το footer εμφανίζεται σε όλες τις σελίδες -->
  </div>
</template>

<script>
// Εισαγωγή των components
import Aboutme from './components/Aboutme.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Education from './components/Education.vue';
import Languages from './components/Languages.vue';
import Contact from './components/Contact.vue';
import Menu1 from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Aboutme,
    Skills,
    Projects,
    Education,
    Languages,
    Contact,
    Menu1,
    Footer
  }
};
</script>

<style scoped>

</style>
