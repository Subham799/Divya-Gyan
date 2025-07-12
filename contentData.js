export const allContent = {
    mainCategories: [
        { id: 'home', title: 'होम', url: '/index.html' },
        { id: 'bhajans', title: 'भजन', url: '/bhajans/index.html' },
        { id: 'kathayein', title: 'कथाएँ', url: '/kathayein/index.html' },
        { id: 'tyohar', title: 'त्योहार', url: '/tyohar/index.html' },
        { id: 'sant-charitra', title: 'संत-चरित्र', url: '/sant-charitra/index.html' },
        { id: 'pavitra-sthal', title: 'पवित्र स्थल', url: '/pavitra-sthal/index.html' },
        { id: 'about-us', title: 'हमारे बारे में', url: '/about-us.html' },
        { id: 'contact', title: 'संपर्क करें', url: '/contact.html' },
        { id: 'privacy-policy', title: 'प्राइवेसी पॉलिसी', url: '/privacy-policy.html' }
    ],
    subCategories: {
        bhajans: [
            { id: 'krishna', title: 'श्री कृष्ण भजन', url: '/bhajans/krishna-bhajan.html', icon: 'assets/images/category-icons/krishna.png' },
            { id: 'shiv', title: 'शिव भजन', url: '/bhajans/shiv-bhajan.html', icon: 'assets/images/category-icons/shiv.png' },
            { id: 'mata', title: 'माता रानी के भजन', url: '/bhajans/mata-bhajan.html', icon: 'assets/images/category-icons/mata.png' },
            { id: 'hanuman', title: 'हनुमान भजन', url: '/bhajans/hanuman-bhajan.html', icon: 'assets/images/category-icons/hanuman.png' },
            { id: 'ganesh', title: 'श्री गणेश भजन', url: '/bhajans/ganesh-bhajan.html', icon: 'assets/images/category-icons/ganesh.png' },
            { id: 'ram', title: 'श्री राम भजन', url: '/bhajans/ram-bhajan.html', icon: 'assets/images/category-icons/ram.png' }
        ],
        kathayein: [
            { id: 'pauraanik', title: 'पौराणिक कथाएँ', url: '/kathayein/pauraanik-kathayein.html' },
            { id: 'prerak', title: 'प्रेरक कथाएँ', url: '/kathayein/prerak-kathayein.html' }
        ]
        // Add more as needed
    },
    contentItems: [
        {
            type: 'bhajan',
            id: 'achyutam-keshavam',
            title: 'अच्चुतम केशवं',
            mainCategory: 'bhajans',
            subCategory: 'krishna',
            description: 'एक बहुत ही मधुर और प्रसिद्ध कृष्ण भजन।',
            thumbnail: 'assets/images/bhajan-thumbnails/achyutam-keshavam-thumb.jpg',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            lyricsHindi: `अच्चुतम केशवं कृष्ण दामोदरं, राम नारायणं जानकी बल्लभम...`,
            uploadDate: '2025-06-28',
            isTrending: true,
            isNew: false
        },
        {
            type: 'bhajan',
            id: 'shiv-tandav-stotram',
            title: 'शिव तांडव स्तोत्रम्',
            mainCategory: 'bhajans',
            subCategory: 'shiv',
            description: 'रावण द्वारा रचित एक शक्तिशाली शिव स्तोत्र।',
            thumbnail: 'assets/images/bhajan-thumbnails/shiv-tandav-stotram-thumb.jpg',
            videoUrl: 'https://www.youtube.com/embed/stL24FmB07k',
            lyricsHindi: `जटाटवी गलज्जल प्रवाह पावितस्थले...`,
            uploadDate: '2025-06-29',
            isTrending: false,
            isNew: true
        }
        // Add more content
    ],
    newsTickerItems: [
        { type: 'story', title: 'नई कहानी: गजेंद्र मोक्ष की कथा अभी पढ़ें...', url: '/kathayein/single.html?id=gajendra-moksha' },
        { type: 'bhajan', title: 'नया भजन: शिव तांडव स्तोत्रम् जोड़ा गया...', url: '/bhajans/single.html?id=shiv-tandav-stotram' }
    ]
};