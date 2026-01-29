document.addEventListener('DOMContentLoaded', function() {
    const sidebarHTML =  `
    <aside class="sidebar">
        <div class="text-center">
            <img src="https://via.placeholder.com/180" alt="Tommaso Dolci" class="profile-photo">
            <h3>Tommaso Dolci</h3>
            <p class="subtitle">Pre-Doc Researcher</p>
        </div>

        <nav>
            <a href="index.html" class="active">Home</a>
            <a href="about.html">About</a>
            <a href="publications.html">Publications</a>
            <a href="research.html">Research</a>
            <a href="news.html">News</a>
            <a href="contact.html">Contact</a>
        </nav>

        <div class="social-links">
            <a href="mailto:your.email@university.edu">
                <i class="fas fa-envelope"></i>
                <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/yourid" target="_blank">
                <i class="fas fa-graduation-cap"></i>
                <span>Scholar</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
            </a>
        </div>
    </aside>`;
    
    document.getElementById('sidebar-container').innerHTML = sidebarHTML;
});