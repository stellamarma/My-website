<template>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="@/assets/8.jpg" class="d-block mx-lg-auto img-fluid border-radius" width="300" height="300" loading="lazy">
      </div>
      <div class="col-lg-6 text-center"> <!-- Κεντράρουμε το κείμενο και τα κουμπιά -->
        <div > <!-- Προσθέτουμε περιτύλιγμα για το κείμενο -->
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 text-content">Stella Maria Matzari</h1>
          <p class="lead ">I have experience in designing and migrating websites, especially handling large databases and content. I enjoy learning new tools and finding ways to improve systems. I like working on projects that challenge me, and I always aim to create user-friendly solutions. I’m organized, detail-oriented, and love working with others to get the job done efficiently.</p>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.text-center {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Κεντράρει το κείμενο κατακόρυφα */
  align-items: center; /* Κεντράρει το κείμενο οριζόντια */
  height: 100%; /* Ύψος του div */
  text-align: center; /* Κεντράρει το κείμενο */
}

.text-content {
  display: flex;
  flex-direction: column; /* Κεντράρει τα στοιχεία κάθετα (h1, p) */
  justify-content: center; /* Κεντράρει κατακόρυφα */
  align-items: center; /* Κεντράρει οριζόντια */
  margin-bottom: 20px;
}

img {
  border-radius: 50%;
  display: block;
  display: flex; /* Χρησιμοποιεί flexbox για στοίχιση */
  justify-content: center; /* Οριζόντια στοίχιση στο κέντρο */
  align-items: center; /* Κάθετη στοίχιση στο κέντρο */
}

</style>
