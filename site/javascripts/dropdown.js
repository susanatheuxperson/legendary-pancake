document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".nav-dropdown");
  
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseover", function () {
        this.classList.add("open");
      });
      dropdown.addEventListener("mouseleave", function () {
        this.classList.remove("open");
      });
    });
  });
  