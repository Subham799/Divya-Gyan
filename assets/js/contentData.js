// assets/js/contentData.js

export const allContent = {
    // Main categories for the global sidebar
    mainCategories: [
        { id: 'home', title: 'होम', url: 'index.html' },
        { id: 'bhajans', title: 'भजन', url: 'bhajans/index.html' },
        { id: 'kathayein', title: 'कथाएँ', url: 'kathayein/index.html' },
        { id: 'tyohar', title: 'त्योहार', url: 'tyohar/index.html' },
        { id: 'sant-charitra', title: 'संत-चरित्र', url: 'sant-charitra/index.html' },
        { id: 'pavitra-sthal', title: 'पवित्र स्थल', url: 'pavitra-sthal/index.html' },
        { id: 'about-us', title: 'हमारे बारे में', url: 'about-us.html' },
        { id: 'contact', title: 'संपर्क करें', url: 'contact.html' },
        { id: 'privacy-policy', title: 'प्राइवेसी पॉलिसी', url: 'privacy-policy.html' }
    ],

    // Subcategories for dynamic sidebars and nested navigation
    subCategories: {
        bhajans: [
            { id: 'krishna', title: 'श्री कृष्ण भजन', url: 'bhajans/krishna-bhajan.html', icon: 'assets/images/category-icons/krishna.png' },
            { id: 'shiv', title: 'शिव भजन', url: 'bhajans/shiv-bhajan.html', icon: 'assets/images/category-icons/shiv.png' },
            { id: 'mata', title: 'माता रानी के भजन', url: 'bhajans/mata-bhajan.html', icon: 'assets/images/category-icons/mata.png' },
            { id: 'hanuman', title: 'हनुमान भजन', url: 'bhajans/hanuman-bhajan.html', icon: 'assets/images/category-icons/hanuman.png' },
            { id: 'ganesh', title: 'श्री गणेश भजन', url: 'bhajans/ganesh-bhajan.html', icon: 'assets/images/category-icons/ganesh.png' },
            { id: 'ram', title: 'श्री राम भजन', url: 'bhajans/ram-bhajan.html', icon: 'assets/images/category-icons/ram.png' },
        ],
        kathayein: [
            { id: 'pauraanik', title: 'पौराणिक कथाएँ', url: 'kathayein/pauraanik-kathayein.html' },
            { id: 'prerak', title: 'प्रेरक कथाएँ', url: 'kathayein/prerak-kathayein.html' },
        ],
        tyohar: [
            { id: 'hindu-tyohar', title: 'प्रमुख हिन्दू त्यौहार', url: 'tyohar/hindu-tyohar.html' },
            { id: 'upvas', title: 'व्रत और उपवास', url: 'tyohar/upvas.html' },
        ],
        'sant-charitra': [
            { id: 'kabir', title: 'कबीर दास जी', url: 'sant-charitra/kabir-das.html' },
            { id: 'tulsidas', title: 'तुलसीदास जी', url: 'sant-charitra/tulsidas-ji.html' },
        ],
        'pavitra-sthal': [
            { id: 'mathura-vrindavan', title: 'मथुरा-वृंदावन', url: 'pavitra-sthal/mathura-vrindavan.html' },
            { id: 'kashi', title: 'काशी विश्वनाथ', url: 'pavitra-sthal/kashi-vishwanath.html' },
        ]
    },

    // All individual content items
    contentItems: [
        // Bhajans
        {
            type: 'bhajan',
            id: 'achyutam-keshavam',
            title: 'अच्चुतम केशवं कृष्ण दामोदरं',
            mainCategory: 'bhajans',
            subCategory: 'krishna',
            description: 'एक बहुत ही मधुर और प्रसिद्ध कृष्ण भजन। यह भजन भगवान कृष्ण के विभिन्न नामों और रूपों का महिमामंडन करता है, जिसमें उन्हें अच्युत, केशव, दामोदर, राम और जानकी वल्लभ के रूप में वर्णित किया गया है।',
            thumbnail: 'assets/images/bhajan-thumbnails/achyutam-keshavam-thumb.jpg',
            // Note: For local testing, use a placeholder or relative path. For live, embed actual YouTube.
            // Replace 'https://www.youtube.com/embed/dQw4w9WgXcQ' with a real YouTube embed URL.
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=abcdef', // Example Embed URL
            lyricsHindi: `अच्चुतम केशवं कृष्ण दामोदरं,
राम नारायणं जानकी बल्लभम।

कौन कहता है भगवान आते नहीं,
तुम मीरा के जैसे बुलाते नहीं।
अच्चुतम केशवं कृष्ण दामोदरं...

कौन कहता है भगवान खाते नहीं,
बेर शबरी के जैसे खिलाते नहीं।
अच्चुतम केशवं कृष्ण दामोदरं...

कौन कहता है भगवान सोते नहीं,
माँ यशोदा के जैसे सुलाते नहीं।
अच्चुतम केशवं कृष्ण दामोदरं...

कौन कहता है भगवान नाचते नहीं,
गोपियों की तरह तुम नचाते नहीं।
अच्चुतम केशवं कृष्ण दामोदरं...`,
            uploadDate: '2025-06-28T10:00:00Z', // ISO 8601 format for easy sorting
            isTrending: true,
            isNew: false,
            url: 'bhajans/single.html?id=achyutam-keshavam' // Relative URL for script.js to use
        },
        {
            type: 'bhajan',
            id: 'shiv-tandav-stotram',
            title: 'शिव तांडव स्तोत्रम्',
            mainCategory: 'bhajans',
            subCategory: 'shiv',
            description: 'रावण द्वारा रचित एक शक्तिशाली शिव स्तोत्र, जो भगवान शिव के ब्रह्मांडीय नृत्य और महिमा का वर्णन करता है।',
            thumbnail: 'assets/images/bhajan-thumbnails/shiv-tandav-stotram-thumb.jpg',
            videoUrl: 'https://www.youtube.com/embed/3Qe673v305M?si=abcdef', // Example Embed URL
            lyricsHindi: `जटाटवी गलज्जल प्रवाह पावितस्थले,
गलेऽवलम्ब्य लम्बितां भुजङ्ग तुङ्ग मालिकाम्।
डमड्डमड्डमन्निनाद वड्डमर्वयं चकार,
चण्डताण्डवं तनोतु नः शिवः शिवम्॥

जटाकटाह सम्भ्रम भ्रमन्निलिम्प निर्झरी,
विलोलवीचि वल्लरी विराजमान मूर्धनि।
धगद्धगद्धगज्ज्वल ललाट पट्ट पावके,
किशोर चन्द्र शेखरे रतिः प्रतिक्षणं मम॥`,
            uploadDate: '2025-06-29T14:30:00Z',
            isTrending: false,
            isNew: true,
            url: 'bhajans/single.html?id=shiv-tandav-stotram'
        },
        // Stories
        {
            type: 'story',
            id: 'gajendra-moksha',
            title: 'गजेंद्र मोक्ष की कथा',
            mainCategory: 'kathayein',
            subCategory: 'pauraanik',
            description: 'भगवान विष्णु द्वारा गजेंद्र के उद्धार की प्रेरणादायक कथा, जो बताती है कि कैसे सच्चे विश्वास से भगवान स्वयं भक्तों की रक्षा करते हैं।',
            thumbnail: 'assets/images/story-thumbnails/gajendra-moksha-thumb.jpg',
            fullText: `प्राचीन काल में, गजेंद्र नामक एक शक्तिशाली हाथी था जो अपने झुंड के साथ त्रिकूट पर्वत के एक सुंदर सरोवर में रहता था। एक दिन जब वह सरोवर में स्नान कर रहा था, तो एक विशालकाय मगरमच्छ ने उसके पैर को पकड़ लिया। गजेंद्र ने अपनी पूरी शक्ति लगाकर छूटने का प्रयास किया, लेकिन वह असफल रहा। जब कोई सहायता नहीं मिली, तो उसने भगवान विष्णु का आह्वान किया और कमल का फूल उठाकर उनकी ओर बढ़ाया। भगवान विष्णु तुरंत प्रकट हुए और सुदर्शन चक्र से मगरमच्छ को मारकर गजेंद्र को मुक्ति दिलाई। यह कथा हमें बताती है कि सच्ची भक्ति और शरणागति से भगवान हर संकट से उबारते हैं।`,
            uploadDate: '2025-06-27T08:00:00Z',
            isTrending: true,
            isNew: false,
            url: 'kathayein/single.html?id=gajendra-moksha'
        },
        {
            type: 'story',
            id: 'shravan-kumar',
            title: 'श्रवण कुमार की कथा',
            mainCategory: 'kathayein',
            subCategory: 'prerak',
            description: 'माता-पिता के प्रति भक्ति और सेवा का प्रतीक श्रवण कुमार की अमर कथा।',
            thumbnail: 'assets/images/story-thumbnails/shravan-kumar-thumb.jpg',
            fullText: `प्राचीन समय में, श्रवण कुमार नामक एक पुत्र था जिसके माता-पिता अंधे थे। श्रवण कुमार अपने माता-पिता की बड़ी सेवा करता था। एक बार वे तीर्थयात्रा पर जाना चाहते थे, तो श्रवण ने उन्हें एक कांवड़ में बैठाकर अपने कंधों पर उठाया और यात्रा पर निकल पड़ा। एक दिन जब वह अपने माता-पिता के लिए पानी लेने गया, तो राजा दशरथ ने गलती से उसे तीर मार दिया। मरने से पहले श्रवण ने दशरथ को अपने माता-पिता के अंधेपन और उनकी पीड़ा के बारे में बताया। यह कथा पुत्र धर्म और माता-पिता के प्रति निस्वार्थ सेवा का सर्वोच्च उदाहरण है।`,
            uploadDate: '2025-06-26T12:00:00Z',
            isTrending: false,
            isNew: false,
            url: 'kathayein/single.html?id=shravan-kumar'
        },
        // Festivals
        {
            type: 'festival',
            id: 'janmashtami',
            title: 'जन्माष्टमी: भगवान कृष्ण का जन्मोत्सव',
            mainCategory: 'tyohar',
            subCategory: 'hindu-tyohar',
            description: 'भगवान कृष्ण के जन्म का पावन पर्व, जिसमें भक्त उपवास रखते हैं और भगवान का जन्मोत्सव मनाते हैं।',
            thumbnail: 'assets/images/festival-thumbnails/janmashtami-thumb.jpg',
            fullText: `जन्माष्टमी हिन्दू धर्म का एक महत्वपूर्ण त्योहार है जो भगवान कृष्ण के जन्मोत्सव के रूप में मनाया जाता है। यह भाद्रपद मास के कृष्ण पक्ष की अष्टमी तिथि को पड़ता है। इस दिन भक्त उपवास रखते हैं, मंदिरों में विशेष पूजा-अर्चना की जाती है और मध्यरात्रि में भगवान कृष्ण के जन्म के बाद आरती और भजन किए जाते हैं।`,
            uploadDate: '2025-06-25T09:00:00Z',
            isTrending: true,
            isNew: false,
            url: 'tyohar/single.html?id=janmashtami'
        },
        // Sant Charitra
        {
            type: 'sant',
            id: 'tulsidas-ji',
            title: 'गोस्वामी तुलसीदास जी का जीवन चरित्र',
            mainCategory: 'sant-charitra',
            subCategory: 'tulsidas',
            description: 'रामचरितमानस के रचयिता गोस्वामी तुलसीदास जी के जीवन और उनके साहित्यिक योगदान पर आधारित।',
            thumbnail: 'assets/images/saint-thumbnails/tulsidas-thumb.jpg',
            fullText: `गोस्वामी तुलसीदास जी हिंदी साहित्य के महानतम कवियों में से एक थे। उनका जन्म राजापुर में हुआ था और उन्होंने अपना पूरा जीवन भगवान राम की भक्ति में समर्पित कर दिया। उनकी सबसे प्रसिद्ध रचना 'रामचरितमानस' है, जो अवधी भाषा में लिखी गई रामायण का एक भक्तिमय रूपांतरण है।`,
            uploadDate: '2025-06-24T11:00:00Z',
            isTrending: false,
            isNew: true,
            url: 'sant-charitra/single.html?id=tulsidas-ji'
        },
        // Holy Places
        {
            type: 'place',
            id: 'mathura-vrindavan',
            title: 'मथुरा-वृंदावन: भगवान कृष्ण की लीलाभूमि',
            mainCategory: 'pavitra-sthal',
            subCategory: 'mathura-vrindavan',
            description: 'भगवान कृष्ण के जन्म और बाल लीलाओं से संबंधित पवित्र स्थल मथुरा और वृंदावन का विस्तृत विवरण।',
            thumbnail: 'assets/images/holy-place-thumbnails/mathura-vrindavan-thumb.jpg',
            fullText: `मथुरा भगवान कृष्ण का जन्म स्थान है और वृंदावन वह स्थान है जहाँ उन्होंने अपनी बचपन की कई लीलाएँ कीं। ये दोनों शहर हिंदुओं के लिए अत्यंत पवित्र माने जाते हैं और हर साल लाखों भक्त यहाँ दर्शन के लिए आते हैं।`,
            uploadDate: '2025-06-23T15:00:00Z',
            isTrending: true,
            isNew: false,
            url: 'pavitra-sthal/single.html?id=mathura-vrindavan'
        }
    ],

    // Items specifically for the news ticker
    newsTickerItems: [
        { type: 'story', title: 'नई कहानी: गजेंद्र मोक्ष की कथा अभी पढ़ें!', url: 'kathayein/single.html?id=gajendra-moksha' },
        { type: 'bhajan', title: 'नया भजन: शिव तांडव स्तोत्रम् जोड़ा गया!', url: 'bhajans/single.html?id=shiv-tandav-stotram' },
        { type: 'festival', title: 'आगामी त्योहार: जन्माष्टमी की हार्दिक शुभकामनाएँ!', url: 'tyohar/single.html?id=janmashtami' },
        { type: 'story', title: 'प्रेरक कथा: श्रवण कुमार की सेवा की कहानी!', url: 'kathayein/single.html?id=shravan-kumar' },
        { type: 'sant', title: 'नया संत चरित्र: गोस्वामी तुलसीदास जी के जीवन से सीखें!', url: 'sant-charitra/single.html?id=tulsidas-ji' },
    ]
};