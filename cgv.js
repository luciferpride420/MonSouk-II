document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 130; // Height of the fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


/**/

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add 'active' class to clicked link
      this.classList.add('active');
      
      // Store active link in localStorage
      localStorage.setItem('activeLink', this.getAttribute('href'));
    });
  });

  // Check for active link on page load
  window.addEventListener('load', function() {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
      const link = document.querySelector(`a[href="${activeLink}"]`);
      if (link) link.classList.add('active');
    }
  });