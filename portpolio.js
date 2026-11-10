




// Navbar Link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = this.getAttribute("href");

        const section = document.querySelector(target);
          section.scrollIntoView({
            behavior: "smooth"
        
        });

    });

});
