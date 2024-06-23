//JavaScript file (script.js)

```
// Add event listeners for navigation
navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  });
});