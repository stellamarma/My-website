<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">My Skills</h2>
  
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card skill-card">
            <div class="card-header">
              <h4 class="my-0 fw-bold">Front-End</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (jQuery)</li>
                <li>TypeScript</li>
                <li>Angular</li>
                <li>React</li>
                <li>Vue</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="col">
          <div class="card skill-card">
            <div class="card-header">
              <h4 class="my-0 fw-bold">Back-End</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>Java</li>
                <li>PHP</li>
                <li>Node.js</li>
                <li>Rest API</li>
                <li>NPM</li>
                <li>Express.js</li>
                <li>EJS</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div class="col">
          <div class="card skill-card">
            <div class="card-header">
              <h4 class="my-0 fw-bold">Extra Skills</h4>
            </div>
            <div class="card-body">
              <ul class="list-unstyled mt-3 mb-4">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Postman</li>
                <li>K6</li>
                <li>WordPress</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>/* Στυλ για όλα τα κουτιά */
  .skill-card {
    background-color: rgb(119, 139, 235); /* Μπλε φόντο */
    color: white; /* Λευκό κείμενο */
    border: none;
    border-radius: 8px; /* Διατηρούμε το αρχικό σχήμα */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Μοντέρνα σκιά */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Εφέ όταν περνάει το ποντίκι */
  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  /* Στυλ για τα headers */
  .card-header {
    background-color: rgba(0, 0, 0, 0.1); /* Ελαφρώς πιο σκούρο header */
    padding: 15px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  /* Στυλ για τα κείμενα στις λίστες */
  .card-body ul li {
    font-size: 1rem;
    font-weight: 500;
    padding: 5px 0;
  }
  
  /* Εφέ hover στα items της λίστας */
  .card-body ul li:hover {
 
    cursor: pointer;
  }
  
  /* Responsive Design */
  @media (max-width: 767px) {
    .row-cols-1 .col {
      margin-bottom: 20px;
    }
  }
  </style>