<template>
  <div class="container px-4 py-5">
    <h2 class="pb-4 border-bottom mt-4">Projects</h2>

    <div class="row align-items-center mb-5 project-row">
      <div class="col-md-5 col-12">
        <a href="https://assignment-drab-seven.vercel.app/" target="_blank">
          <img src="@/assets/Time.jpg" alt="Project 1" class="img-fluid">
        </a>
      </div>
      <div class="col-md-7 col-12 mt-3 mt-md-0">
        <h3>Time Assignment</h3>
        <p>An interactive web application for financial data analysis and visualization, focusing on the long-term price and inflation fluctuations between the Greek, German, and French markets.
          The project was developed using Vue 3 and TypeScript to ensure maximum stability, clean code, and type safety. The Element Plus framework was utilized to create the user interface, delivering a modern, minimal, and enterprise-ready working environment. Additionally, the entire layout has been optimized with custom HTML5 and CSS3 for a flawless responsive behavior across all screen sizes.</p>
        <a href="https://assignment-drab-seven.vercel.app/" target="_blank" class="btn btn-outline-primary btn-sm">Visit Project</a>
      </div>
    </div>

    <div class="row align-items-center mb-5 project-row">
      <div class="col-md-5 col-12">
        <a href="https://assignment-fk97.vercel.app/" target="_blank">
          <img src="@/assets/Bookstore.jpg" alt="Project 2" class="img-fluid">
        </a>
      </div>
      <div class="col-md-7 col-12 mt-3 mt-md-0">
        <h3>Bookstore Application</h3>
        <p>A dynamic bookstore management website developed with the Angular framework, utilizing a component-based architecture for clean and organized code. The application relies on TypeScript to ensure secure, structured, and robust data management.
          Through an interactive component environment, the user can fully manage the catalog by performing core operations such as adding and removing books, while the application automatically calculates the final monetary total of their selections in real-time.</p>
        <a href="https://assignment-fk97.vercel.app/" target="_blank" class="btn btn-outline-primary btn-sm">Visit Project</a>
      </div>
    </div>

    <div class="row align-items-center mb-5 project-row">
      <div class="col-md-5 col-12">
        <a href="https://react-portfolio-6eb7.vercel.app/" target="_blank">
          <img src="@/assets/movie-app.png" alt="Project 3" class="img-fluid">
        </a>
      </div>
      <div class="col-md-7 col-12 mt-3 mt-md-0">
        <h3>Movie App</h3>
        <p>A dynamic web application for browsing and discovering movies, built with the React framework and designed to operate in real-time.
          The application integrates with a Real-Time Movie API, fetching live data such as posters, ratings, and plot summaries, ensuring that users always view the latest releases. Furthermore, it allows users to personalize their experience by adding their favorite movies to a dedicated, custom "Favorites" list.</p>
        <a href="https://react-portfolio-6eb7.vercel.app/" target="_blank" class="btn btn-outline-primary btn-sm">Visit Project</a>
      </div>
    </div>

    <div class="row align-items-center mb-5 project-row">
      <div class="col-md-5 col-12">
        <a href="https://to-do-list-react-three-self.vercel.app/" target="_blank">
          <img src="@/assets/todo.png" alt="Project 4" class="img-fluid">
        </a>
      </div>
      <div class="col-md-7 col-12 mt-3 mt-md-0">
        <h3>To-Do List</h3>
        <p>A practical To-Do List application designed for daily task management, built with the React framework. The application enables users to organize their daily schedules with ease, supporting core features such as adding, deleting, and marking tasks as completed.
          The key feature of this project is that all data is automatically and securely stored directly within each user's browser (Local Storage). This ensures that tasks persist even if the user closes the tab or refreshes the page, delivering a seamless and uninterrupted user experience.</p>
        <a href="https://to-do-list-react-three-self.vercel.app/" target="_blank" class="btn btn-outline-primary btn-sm">Visit Project</a>
      </div>
    </div>

    <div class="row align-items-center mb-5 project-row">
      <div class="col-md-5 col-12">
        <a href="https://oficgr.vercel.app/" target="_blank">
          <img src="@/assets/ofic.png" alt="Project 5" class="img-fluid">
        </a>
      </div>
      <div class="col-md-7 col-12 mt-3 mt-md-0">
        <h3>OFIC GR</h3>
        <p>A modern web platform developed with Vue 3 and TypeScript, serving as a digital hub for information and culture. The website is carefully designed to host and seamlessly separate two distinct categories of content: theatrical events/news and scientific articles.
          The core utility of the application lies in its ability to offer users an organized, clutter-free reading and browsing experience, whether their interest lies in the arts or in scientific research.</p>
        <a href="https://oficgr.vercel.app/" target="_blank" class="btn btn-outline-primary btn-sm">Visit Project</a>
      </div>
    </div>

  </div>
</template>

<style scoped>
.img-fluid {
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 250px; /* Αυξήθηκε λίγο το ύψος για να φαίνεται καλύτερα δίπλα στο κείμενο */
  object-fit: cover;
}

.img-fluid:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
}

.project-row {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 2rem;
}

.project-row:last-child {
  border-bottom: none; /* Αφαιρεί τη γραμμή στο τελευταίο project */
}

h3 {
  color: #333;
  margin-bottom: 15px;
}

p {
  color: #666;
  line-height: 1.6;
}
</style>