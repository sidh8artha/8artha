// Scroll animation JS
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.outerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", reveal);
  
// Active State to Navlink JS
const links = document.querySelectorAll('.filter-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}


// Card Filter JS
function myapp() {
    const buttons = document.querySelectorAll(".nav-link");
    const cards = document.querySelectorAll(".design-card");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentCategory = button.dataset.filter;
        console.log(currentCategory);
        filter(currentCategory, cards);
      });
    });
}
  
myapp();
  