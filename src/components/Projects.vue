<template>
    <div class="container px-4 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Projects</h2>
  
      <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <!-- First Card with Link -->
        <div class="col">
          <a href="https://assignment-drab-seven.vercel.app/" class="card-link">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('/src/assets/Time.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Project Title</h3>
                <ul class="d-flex list-unstyled mt-auto">

                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                 
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
  
        <!-- Second Card with Link -->
        <div class="col">
          <a href="https://www.example2.com" class="card-link">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-2.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
               
                <ul class="d-flex list-unstyled mt-auto">
               
                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                    
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                   
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
  
        <!-- Third Card with Link -->
        <div class="col">
          <a href="https://www.example3.com" class="card-link">
            <div class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style="background-image: url('unsplash-photo-3.jpg');">
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              
                <ul class="d-flex list-unstyled mt-auto">

                  <li class="d-flex align-items-center me-3">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
                  
                  </li>
                  <li class="d-flex align-items-center">
                    <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3"></use></svg>
                   
                  </li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card-cover {
      background-size: cover; 
      background-position: center;
  }
  
  /* Ensure the card behaves like a clickable area */
  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }
  </style>
  