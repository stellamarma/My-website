<template>
  <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom mt-4">Project</h2>
    
    <div class="row">
      <div class="col-md-4 col-12">
        <a href="https://assignment-drab-seven.vercel.app/" target="_blank">
          <img src="@/assets/Time.jpg" alt="Image 1" class="img-fluid mt-3">
        </a>
      </div>
      <div class="col-md-4 col-12">
        <a href="https://assignment-fk97.vercel.app/" target="_blank">
          <img src="@/assets/Bookstore.jpg" alt="Image 2" class="img-fluid mt-3">
        </a>
      </div>
      <div class="col-md-4 col-12">
        <a href="https://react-portfolio-6eb7.vercel.app/" target="_blank">
           <img src="@/assets/movie-app.png" alt="Image 3" class="img-fluid mt-3"> 
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Στυλ για τις εικόνες */
.img-fluid {
  border-radius: 10px; /* Στρογγυλές γωνίες */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Εφέ κατά την αλληλεπίδραση */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ελαφριά σκιά γύρω από τις εικόνες */
  width: 100%; /* Κάνουμε τις εικόνες να γεμίζουν το πλαίσιο */
  height: 200px; /* Σταθερό ύψος για όλες τις εικόνες */
  object-fit: cover; /* Διατηρεί την εικόνα στο ίδιο μέγεθος και κεντράρει το περιεχόμενο */
}
.img-fluid:hover {
  transform: scale(1.05); /* Ελαφριά μεγέθυνση όταν περνάς το ποντίκι πάνω */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3); /* Εντονότερη σκιά στο hover */
}
.container {
  margin-top: 50px;
}
img {
  margin-top: 25px; /* Μπορείς να αλλάξεις την τιμή ανάλογα με τις ανάγκες σου */
}

</style>