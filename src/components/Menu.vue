
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-icon size="24"><Menu /></el-icon>
    </el-menu-item>
    <el-menu-item index="1">About me</el-menu-item>
    <el-menu-item index="2">Skills</el-menu-item>
    <el-menu-item index="3">Projects</el-menu-item>
    <el-menu-item index="4">Education</el-menu-item>
    <el-menu-item index="5">Langueges</el-menu-item>
    <el-menu-item index="6">Contact</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Menu  } from '@element-plus/icons-vue';  // Εισάγουμε τα icons

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
/* Αφαιρούμε το margin-right: auto για να μην πηγαίνει το πρώτο item αριστερά */
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: 0;
}

/* Γενικές ρυθμίσεις για μεγαλύτερη γραμματοσειρά */
.el-menu-demo {
  font-size: 20px; /* Αυξάνει το μέγεθος της γραμματοσειράς */
  font-weight: bold; /* Κάνει τα γράμματα πιο έντονα */
}

/* Στυλ για τα menu items */
.el-menu-item {
  padding: 18px 28px; /* Μεγαλύτερο padding για πιο ευδιάκριτο μενού */
}

/* Στοίχιση των items στο κέντρο */
.el-menu--horizontal {
  display: flex;
  justify-content: center; /* Κεντράρει τα items */
  align-items: center; /* Ευθυγράμμιση στο κέντρο κάθετα */
  height: 70px; /* Αυξάνει το ύψος της μπάρας */
  line-height: 70px;
}
</style>
