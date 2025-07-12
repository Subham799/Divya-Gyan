import { allContent } from './contentData.js';

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'थीम बदलें';
    themeToggle.className = 'theme-toggle fixed top-4 right-4 p-2 bg-blue-600 text-white rounded';
    document.body.appendChild(themeToggle);
    themeToggle.addEventListener('click', () => {
        const themes = ['light', 'dark', 'sepia', 'night'];
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
        document.body.setAttribute('data-theme', nextTheme);
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Sidebar Toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Live Search
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    if (searchInput && searchDropdown) {
        searchInput.addEventListener('keyup', () => {
            const query = searchInput.value.toLowerCase();
            if (query.length < 2) {
                searchDropdown.classList.remove('active');
                searchDropdown.innerHTML = '';
                return;
            }
            const results = allContent.contentItems.filter(item => item.title.toLowerCase().includes(query));
            searchDropdown.innerHTML = results.map(item => `<a href="${item.url}" class="block py-2 hover:text-blue-600">${item.title}</a>`).join('') || '<div class="p-4">कोई परिणाम नहीं मिला</div>';
            searchDropdown.classList.add('active');
        });
    }

    // Dynamic Content Rendering
    const path = window.location.pathname;
    if (path.includes('single.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const content = allContent.contentItems.find(item => item.id === id);
        if (content) {
            document.querySelector('h1').textContent = content.title;
            document.querySelector('.glass-card').innerHTML = `
                <p>${content.description}</p>
                <iframe src="${content.videoUrl}" class="w-full h-64 mb-4" frameborder="0"></iframe>
                <h3>गीत:</h3><pre>${content.lyricsHindi}</pre>
            `;
            // Inject meta tags
            document.head.insertAdjacentHTML('beforeend', `
                <title>${content.title} | ${content.mainCategory}</title>
                <meta name="description" content="${content.description}">
                <meta property="og:type" content="music.song">
                <meta property="og:title" content="${content.title} | ${content.mainCategory}">
                <meta property="og:description" content="${content.description}">
                <meta property="og:image" content="${content.thumbnail}">
                <link rel="canonical" href="https://divyagyan.in${content.url}">
                <script type="application/ld+json">${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "MusicRecording",
                    "name": content.title,
                    "byArtist": { "@type": "MusicGroup", "name": "Traditional" },
                    "inLanguage": "hi-IN",
                    "url": `https://divyagyan.in${content.url}`
                })}</script>
            `);
        }
    } else if (path.includes('index.html') && !path.includes('bhajans') && !path.includes('kathayein')) {
        const trendingContent = allContent.contentItems.filter(item => item.isTrending || item.isNew);
        document.querySelector('.category-grid').innerHTML = trendingContent.map(item => `
            <div class="glass-card">
                <img loading="lazy" src="${item.thumbnail}" alt="${item.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold">${item.title}</h3>
                    <p class="mt-2">${item.description}</p>
                    <a href="${item.url}" class="inline-block mt-4 text-blue-600 hover:underline">और जानें →</a>
                </div>
            </div>
        `).join('');
    }

    // News Ticker
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        tickerContent.innerHTML = allContent.newsTickerItems.map(item => `<a href="${item.url}" class="text-white hover:underline">${item.title}</a>`).join(' &nbsp; ');
    }

    // Dynamic Year
    document.getElementById('year').textContent = new Date().getFullYear();
});