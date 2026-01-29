document.addEventListener('DOMContentLoaded', function() {
    // // ============================================
    // // STEP 0: Load Mobile Header HTML
    // // ============================================
    // const mobileHeaderHTML = `
    // <div class="mobile-header-content">
    //     <img src="images/profile.jpg" alt="Tommaso Dolci" class="mobile-header-photo">
    //     <h1 class="mobile-header-name">Tommaso Dolci</h1>
    // </div>
    // `;
    
    // const mobileHeaderContainer = document.getElementById('mobile-header');
    // if (mobileHeaderContainer) {
    //     mobileHeaderContainer.innerHTML = mobileHeaderHTML;
    // }

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

    // ============================================
    // STEP 3: Mobile Menu Toggle Functionality
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', function(event) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnToggle = mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
});
