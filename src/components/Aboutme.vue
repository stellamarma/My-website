<template>
<div class="container d-flex justify-content-center align-items-center min-vh-100">
  <div class="row flex-lg-row-reverse align-items-center g-5 text-center">
    
    <!-- Εικόνα -->
    <div class="col">
      <img src="@/assets/8.jpg" class="d-block mx-auto img-fluid rounded-circle" width="300" height="300" loading="lazy">
    </div>

    <!-- Κείμενο -->
    <div class="col">
      <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-content">Stella Maria Matzari</h1>  
      <p class="lead">
        I have experience in designing and migrating websites, especially handling large databases and content. 
        I enjoy learning new tools and finding ways to improve systems. I like working on projects that challenge me, 
        and I always aim to create user-friendly solutions. I’m organized, detail-oriented, and love working with others 
        to get the job done efficiently.
      </p>
    </div>

  </div>
</div>

</template>

<script>
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px; /* Προσθέτει απόσταση */
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    text-align: center;
  }
}

</style>
