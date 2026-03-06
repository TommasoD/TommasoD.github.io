document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // STEP 1: Load Sidebar HTML
    // ============================================
    const sidebarHTML = `
    <div class="text-center">
        <a href="index.html">
            <img src="images/profile.jpg" alt="Tommaso Dolci" class="profile-photo">
        </a>
        <h3>Tommaso Dolci</h3>
        <p class="subtitle">
            PreDoc Researcher
            <br>
            TU Wien
        </p>
    </div>

    <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="publications.html">Publications</a>
        <a href="research.html">Research</a>
        <a href="news.html">News</a>
        <a href="contact.html">Contact</a>
    </nav>

    <div class="social-links">
        <a href="mailto:tommaso.dolci@tuwien.ac.at">
            <i class="fas fa-envelope"></i>
            <span>Email</span>
        </a>
        <a href="https://linkedin.com/in/tommasodolci" target="_blank">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
        </a>
        <a href="https://scholar.google.com/citations?user=LtmIhawAAAAJ" target="_blank">
            <i class="fas fa-graduation-cap"></i>
            <span>Scholar</span>
        </a>
        <a href="https://github.com/TommasoD" target="_blank">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
        </a>
    </div>
    `;
    
    // Insert sidebar HTML into the container
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;
    }

    // ============================================
    // STEP 2: Set Active Page Navigation
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.sidebar nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});
