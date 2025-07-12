// assets/js/script.js

import { allContent } from './contentData.js';

document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themes = ['light', 'dark', 'sepia', 'night'];
    let currentThemeIndex = 0;

    const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('divyaGyanTheme', theme);
    if (!themeToggleBtn) return; // Prevent error if button is missing
    const icon = themeToggleBtn.querySelector('i');
    if (icon) {
        icon.className = ''; // Clear existing classes
        switch (theme) {
            case 'light':
                icon.classList.add('fas', 'fa-sun');
                break;
            case 'dark':
                icon.classList.add('fas', 'fa-moon');
                break;
            case 'sepia':
                icon.classList.add('fas', 'fa-book');
                break;
            case 'night':
                icon.classList.add('fas', 'fa-cloud-moon');
                break;
        }
    }
};

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('divyaGyanTheme');
    if (savedTheme) {
        currentThemeIndex = themes.indexOf(savedTheme);
        if (currentThemeIndex === -1) currentThemeIndex = 0; // Fallback if invalid saved theme
    }
    applyTheme(themes[currentThemeIndex]);

    if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        applyTheme(themes[currentThemeIndex]);
    });
}

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Sidebar Toggle (for dynamic sidebar on single pages, if applicable) ---
    // Note: Homepage uses a static sidebar, so this toggle might be specific to other pages.
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // --- Live Search Functionality ---
    const searchInput = document.getElementById('search-input');
    const searchDropdown = document.getElementById('search-dropdown');
    if (searchInput && searchDropdown) {
        searchInput.addEventListener('keyup', () => {
            const query = searchInput.value.toLowerCase().trim();
            searchDropdown.innerHTML = ''; // Clear previous results

            if (query.length < 2) {
                searchDropdown.classList.remove('active');
                return;
            }

            const results = allContent.contentItems.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                (item.lyricsHindi && item.lyricsHindi.toLowerCase().includes(query)) ||
                (item.fullText && item.fullText.toLowerCase().includes(query))
            );

            if (results.length > 0) {
                // Group results by type (e.g., Bhajan, Katha, etc.)
                const groupedResults = results.reduce((acc, item) => {
                    const typeMap = {
                        bhajan: 'भजन',
                        story: 'कथा',
                        festival: 'त्योहार',
                        sant: 'संत-चरित्र',
                        place: 'पवित्र स्थल'
                    };
                    const typeName = typeMap[item.type] || 'अन्य';
                    if (!acc[typeName]) {
                        acc[typeName] = [];
                    }
                    acc[typeName].push(item);
                    return acc;
                }, {});

                for (const type in groupedResults) {
                    const groupTitle = document.createElement('div');
                    groupTitle.className = 'px-4 py-2 font-bold text-sm bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-b border-glass-border';
                    groupTitle.textContent = type;
                    searchDropdown.appendChild(groupTitle);

                    groupedResults[type].forEach(item => {
                        const link = document.createElement('a');
                        link.href = item.url;
                        link.className = 'block py-2 px-4 hover:bg-hover-bg-color text-text-color';
                        link.textContent = item.title;
                        searchDropdown.appendChild(link);
                    });
                }
                searchDropdown.classList.add('active');
            } else {
                const noResults = document.createElement('div');
                noResults.className = 'p-4 text-text-color';
                noResults.textContent = 'कोई परिणाम नहीं मिला';
                searchDropdown.appendChild(noResults);
                searchDropdown.classList.add('active');
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!searchInput.contains(event.target) && !searchDropdown.contains(event.target)) {
                searchDropdown.classList.remove('active');
            }
        });
    }

    // --- Animated Navigation Orb Logic ---
    const navOrb = document.getElementById('nav-orb');
    const navOrbMenu = document.getElementById('nav-orb-menu');
    const orbBhajanCategories = document.getElementById('orb-bhajan-categories');

    if (navOrb && navOrbMenu && orbBhajanCategories) {
        // Populate bhajan categories in the orb menu
        if (allContent.subCategories.bhajans) {
            orbBhajanCategories.innerHTML = allContent.subCategories.bhajans.map(cat => `
                <li><a href="${cat.url}" class="block py-1 px-2 hover:bg-hover-bg-color">${cat.title}</a></li>
            `).join('');
        }

        navOrb.addEventListener('click', () => {
            navOrb.classList.toggle('active');
            // Toggle menu visibility based on orb active state
            if (navOrb.classList.contains('active')) {
                navOrbMenu.classList.add('active');
            } else {
                navOrbMenu.classList.remove('active');
            }
        });

        // Close orb menu if clicked outside
        document.addEventListener('click', (event) => {
            if (!navOrb.contains(event.target) && !navOrbMenu.contains(event.target)) {
                navOrb.classList.remove('active');
                navOrbMenu.classList.remove('active');
            }
        });
    }

    // --- Dynamic Content Rendering for Pages ---
    const path = window.location.pathname;
    const currentFileName = path.substring(path.lastIndexOf('/') + 1);
    const currentFolderPath = path.substring(0, path.lastIndexOf('/'));
    const currentPageCategory = currentFolderPath.split('/').pop(); // e.g., 'bhajans', 'kathayein'

    // Function to generate content cards
    const generateContentCard = (item) => {
        // Correctly form the URL based on the item's `url` property
        const itemUrl = item.url.startsWith('/') ? item.url : `../${item.url}`;
        
        return `
            <div class="glass-card p-6 flex flex-col items-center text-center">
                <img loading="lazy" src="${item.thumbnail}" alt="${item.title}" class="w-full h-48 object-cover rounded-lg mb-4">
                <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                <p class="text-sm text-text-color mb-4 flex-grow">${item.description}</p>
                <a href="${itemUrl}" class="inline-block mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">और जानें →</a>
            </div>
        `;
    };

    // Homepage Specific Logic (index.html)
    if (currentFileName === 'index.html' || currentFileName === '') {
        const trendingGrid = document.getElementById('trending-content-grid');
        const newGrid = document.getElementById('new-content-grid');
        const globalSidebarNav = document.getElementById('global-sidebar-nav');

        if (trendingGrid) {
            const trendingItems = allContent.contentItems.filter(item => item.isTrending)
                                .sort((a,b) => new Date(b.uploadDate) - new Date(a.uploadDate))
                                .slice(0, 6); // Show top 6 trending
            trendingGrid.innerHTML = trendingItems.map(generateContentCard).join('');
        }
        if (newGrid) {
            const newItems = allContent.contentItems.filter(item => item.isNew)
                            .sort((a,b) => new Date(b.uploadDate) - new Date(a.uploadDate))
                            .slice(0, 6); // Show top 6 new
            newGrid.innerHTML = newItems.map(generateContentCard).join('');
        }
        if (globalSidebarNav) {
            globalSidebarNav.innerHTML = allContent.mainCategories.map(cat => `
                <li><a href="${cat.url}" class="block py-2 hover:bg-hover-bg-color">${cat.title}</a></li>
            `).join('');
        }
    }
    // Category Index Pages (e.g., bhajans/index.html)
    else if (currentFileName === 'index.html' && currentPageCategory && allContent.subCategories[currentPageCategory]) {
        const categoryGrid = document.getElementById('trending-content-grid') || document.getElementById('new-content-grid'); // Re-use if possible, or create a new div
        const sidebarNav = document.getElementById('global-sidebar-nav') || document.getElementById('dynamic-sidebar-nav'); // Use relevant sidebar

        if (categoryGrid) {
            const subCategoryCards = allContent.subCategories[currentPageCategory].map(subCat => `
                <div class="glass-card p-6 flex flex-col items-center text-center">
                    <img loading="lazy" src="${subCat.icon || '../assets/images/placeholder.png'}" alt="${subCat.title}" class="w-24 h-24 object-contain mb-4">
                    <h3 class="text-xl font-bold mb-2">${subCat.title}</h3>
                    <a href="${subCat.url}" class="inline-block mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">देखें →</a>
                </div>
            `).join('');
            categoryGrid.innerHTML = subCategoryCards;
            document.querySelector('h2').textContent = `${allContent.mainCategories.find(c => c.id === currentPageCategory)?.title || currentPageCategory} श्रेणियाँ`;
        }
        if (sidebarNav) {
            // This sidebar should list subcategories for the current main category
            sidebarNav.innerHTML = allContent.subCategories[currentPageCategory].map(subCat => `
                <li><a href="${subCat.url}" class="block py-2 hover:bg-hover-bg-color">${subCat.title}</a></li>
            `).join('');
            document.getElementById('sidebar-title').textContent = `${allContent.mainCategories.find(c => c.id === currentPageCategory)?.title || currentPageCategory} उप-श्रेणियाँ`;
        }
    }
    // Subcategory List Pages (e.g., bhajans/krishna-bhajan.html)
    else if (path.includes('/bhajans/') && currentFileName.includes('-bhajan.html') || path.includes('/kathayein/') && currentFileName.includes('-kathayein.html') ) { // Add similar checks for other categories
        // Extract subcategory ID from filename, e.g., 'krishna-bhajan.html' -> 'krishna'
        const subCategoryId = currentFileName.split('-')[0];
        const itemsListContainer = document.querySelector('.category-grid'); // Assuming a grid for listing items
        const sidebarNav = document.getElementById('dynamic-sidebar-nav');
        const sidebarTitle = document.getElementById('sidebar-title');

        if (itemsListContainer) {
            const filteredItems = allContent.contentItems.filter(item =>
                item.mainCategory === currentPageCategory && item.subCategory === subCategoryId
            );
            if (filteredItems.length > 0) {
                document.querySelector('h2').textContent = `${filteredItems[0].subCategory} ${filteredItems[0].mainCategory === 'bhajans' ? 'भजन' : 'कथाएँ'}`; // Dynamic title
                itemsListContainer.innerHTML = filteredItems.map(generateContentCard).join('');
            } else {
                itemsListContainer.innerHTML = '<p class="text-center text-text-color">इस श्रेणी में कोई सामग्री उपलब्ध नहीं है।</p>';
            }
        }
        if (sidebarNav && sidebarTitle) {
            // This sidebar should list ALL subcategories for the main category (e.g., all bhajan subcategories)
            const mainCategorySubCategories = allContent.subCategories[currentPageCategory];
            if (mainCategorySubCategories) {
                sidebarNav.innerHTML = mainCategorySubCategories.map(subCat => `
                    <li><a href="${subCat.url}" class="block py-2 hover:bg-hover-bg-color">${subCat.title}</a></li>
                `).join('');
                sidebarTitle.textContent = `${allContent.mainCategories.find(c => c.id === currentPageCategory)?.title || currentPageCategory} उप-श्रेणियाँ`;
            }
        }
    }
    // Single Content Pages (e.g., bhajans/single.html?id=achyutam-keshavam)
    else if (currentFileName === 'single.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const content = allContent.contentItems.find(item => item.id === id);

        const contentTitleElement = document.getElementById('content-title');
        const mainContentArea = document.getElementById('main-content-area');
        const dynamicSidebarNav = document.getElementById('dynamic-sidebar-nav');
        const sidebarTitleElement = document.getElementById('sidebar-title');

        if (content && contentTitleElement && mainContentArea && dynamicSidebarNav && sidebarTitleElement) {
            contentTitleElement.textContent = content.title;

            // Dynamically build content HTML based on type
            let contentHTML = `<p class="mb-4">${content.description}</p>`;
            if (content.type === 'bhajan' && content.videoUrl) {
                contentHTML += `<div class="aspect-w-16 aspect-h-9 mb-6"><iframe src="${content.videoUrl}" class="w-full h-64 md:h-96 rounded-lg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
                contentHTML += `<h3 class="text-2xl font-bold mb-4">गीत:</h3><pre class="whitespace-pre-wrap font-sans text-lg">${content.lyricsHindi}</pre>`;
            } else if (content.type === 'story' || content.type === 'festival' || content.type === 'sant' || content.type === 'place') {
                contentHTML += `<div class="prose max-w-none text-text-color">${content.fullText}</div>`;
            }
            mainContentArea.innerHTML = contentHTML;

            // Update Meta Tags and Schema Markup dynamically
            document.title = `${content.title} | ${allContent.mainCategories.find(c => c.id === content.mainCategory)?.title || ''}`;
            document.querySelector('meta[name="description"]').setAttribute('content', content.description);
            document.querySelector('meta[property="og:title"]').setAttribute('content', `${content.title} | ${allContent.mainCategories.find(c => c.id === content.mainCategory)?.title || ''}`);
            document.querySelector('meta[property="og:description"]').setAttribute('content', content.description);
            document.querySelector('meta[property="og:image"]').setAttribute('content', `../${content.thumbnail}`);
            
            // Add or update canonical tag
            let canonicalLink = document.querySelector('link[rel="canonical"]');
            if (!canonicalLink) {
                canonicalLink = document.createElement('link');
                canonicalLink.rel = 'canonical';
                document.head.appendChild(canonicalLink);
            }
            canonicalLink.href = `https://divyagyan.in/${content.url}`; // Assuming base URL for canonical

            // Add or update Schema Markup
            let schemaScript = document.querySelector('script[type="application/ld+json"]');
            if (!schemaScript) {
                schemaScript = document.createElement('script');
                schemaScript.type = 'application/ld+json';
                document.head.appendChild(schemaScript);
            }
            const schemaData = {
                "@context": "https://schema.org",
                "@type": {
                    'bhajan': 'MusicRecording',
                    'story': 'Article',
                    'festival': 'Event',
                    'sant': 'Person',
                    'place': 'Place'
                }[content.type] || 'Thing', // Default type
                "name": content.title,
                "description": content.description,
                "url": `https://divyagyan.in/${content.url}`,
                "thumbnailUrl": `https://divyagyan.in/${content.thumbnail}`,
                "inLanguage": "hi-IN"
            };
            if (content.type === 'bhajan') {
                schemaData.byArtist = { "@type": "MusicGroup", "name": "Traditional" };
                schemaData.video = { "@type": "VideoObject", "embedUrl": content.videoUrl };
            }
            // Add other specific schema properties as needed for other types
            schemaScript.textContent = JSON.stringify(schemaData, null, 2);


            // Populate Dynamic Sidebar with related content (e.g., other bhajans in the same subcategory)
            const relatedItems = allContent.contentItems
                                .filter(item => item.mainCategory === content.mainCategory && item.subCategory === content.subCategory && item.id !== content.id)
                                .slice(0, 10); // Show up to 10 related items

            if (relatedItems.length > 0) {
                sidebarTitleElement.textContent = `और ${allContent.mainCategories.find(c => c.id === content.mainCategory)?.title || ''}`;
                dynamicSidebarNav.innerHTML = relatedItems.map(item => `
                    <li><a href="../${item.url}" class="block py-2 hover:bg-hover-bg-color">${item.title}</a></li>
                `).join('');
            } else {
                // Fallback: Show all subcategories if no related items
                const subCats = allContent.subCategories[content.mainCategory];
                if (subCats) {
                    sidebarTitleElement.textContent = `${allContent.mainCategories.find(c => c.id === content.mainCategory)?.title || ''} उप-श्रेणियाँ`;
                    dynamicSidebarNav.innerHTML = subCats.map(subCat => `
                        <li><a href="../${subCat.url}" class="block py-2 hover:bg-hover-bg-color">${subCat.title}</a></li>
                    `).join('');
                }
            }

        } else if (mainContentArea) {
            mainContentArea.innerHTML = '<p class="text-center text-text-color text-2xl p-8">क्षमा करें, यह सामग्री उपलब्ध नहीं है।</p>';
            if (contentTitleElement) contentTitleElement.textContent = 'सामग्री नहीं मिली';
        }
    }

    // --- News Ticker Population ---
    const tickerContent = document.querySelector('.ticker-content');
    if (tickerContent) {
        tickerContent.innerHTML = allContent.newsTickerItems.map(item => `
            <a href="${item.url}" class="text-white hover:underline mx-4 whitespace-nowrap">${item.title}</a>
        `).join('');
    }

    // --- Footer Dynamic Year ---
    document.getElementById('year').textContent = new Date().getFullYear();
});