function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


//   function toggleDescription(element) {
//     // Toggle the "open" class on the description elements
//     const experienceSection = element.parentElement;
//     const descriptions = experienceSection.querySelectorAll('.description');
//     descriptions.forEach(description => {
//       description.classList.toggle('open');
//     });

//     // Toggle the rotation of the ">" symbol
//     element.classList.toggle('open');
//   }

