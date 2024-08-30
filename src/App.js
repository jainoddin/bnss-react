import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import { MdArrowBackIos } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";





import './App.css';

function App() {

  function Card({ image, title }) {
    return (
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
      </div>
    );
  }

  const [slideIndex, setSlideIndex] = useState(1);

  const slides = [
    {
      images: [
        "https://jotwani.com/wp-content/uploads/2021/06/DelhiPolice.jpg",
        "https://jotwani.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-20-at-4.39.26-PM.jpeg",
        "https://jotwani.com/wp-content/uploads/2023/08/harpeet-maam.jpg",
      ],
    },
    {
      images: [
        "https://jotwani.com/wp-content/uploads/2021/06/SCBA.jpg",
        "https://jotwani.com/wp-content/uploads/2023/08/aditimam.jpg",
        "https://jotwani.com/wp-content/uploads/2021/06/Supreme-Court-Lawyer-1.jpg",
      ],
    },
    {
      images: [
        "https://jotwani.com/wp-content/uploads/2023/08/prernamam.jpg",
        "https://jotwani.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-20-at-4.48.21-PM.jpeg",
        "https://media.istockphoto.com/id/1499401564/photo/two-lawyers-are-discussing-about-contract-paper-law-matters-determination-pointing-law-and.webp?b=1&s=612x612&w=0&k=20&c=q78BkUJ-2v0OQEwklJWKAES1pYSV9NteTKoKgITHYJw=",
      ],
    },
  ];

  const [isTelugu, setIsTelugu] = useState(false);

  

  const cards = [
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/Patent.png',
      title: isTelugu ? 'పేటెంట్లు మరియు ఆవిష్కరణలు' : 'Patents and Innovations',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/Patent-2.png',
      title: isTelugu ? 'గ్లోబల్ ట్రేడ్‌మార్కులు' : 'Global Trademarks',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2024/07/Untitled-design-61.png',
      title: 'Litigation',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/7-1.png',
      title: 'Family Law',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/3-2.png',
      title: 'Government Relations',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/4-1.png',
      title: 'Corporate and Business Laws',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/6-1.png',
      title: 'Anti-Piracy and Copyrights',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/contract.png',
      title: 'Transactions and Contracts',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/full1.jpg',
      title: 'Supreme Court of India',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/LPO.jpg',
      title: 'Legal Process Outsorucing',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/what-is-cyber-law.jpg',
      title: 'Cyber and IT Laws',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2021/06/Employment-Law.jpg',
      title: 'Employment Laws',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2022/11/company-registration.webp',
      title: 'Company Incorporation',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2022/11/Crime.jpeg',
      title: 'Crime Lawyer',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2022/01/5-1.png',
      title: 'Not for Profit Organizations',
    },
    {
      image: 'https://jotwani.com/wp-content/uploads/2022/11/VISA.jpeg',
      title: 'VISA and Immigration',
    },
  ];

  const teluguTitles = [
    'పేటెంట్లు మరియు ఆవిష్కరణలు',
    'గ్లోబల్ ట్రేడ్‌మార్కులు',
    'వ్యవహారాలు',
    'కుటుంబ చట్టం',
    'వ్యవహారాలు',
    'కుటుంబ చట్టం',
    'వ్యవహారాలు',
    'కుటుంబ చట్టం',
    'వ్యవహారాలు',
    'కుటుంబ చట్టం',
    'సైబర్ చట్టం',
    'ఉద్యోగ చట్టం',
  ];

  const getTranslatedTitle = (title, language) => {
    const translations = {
      'Patents and Innovations': {
        'Telugu': 'పేటెంట్లు మరియు ఆవిష్కరణలు',
        'Hindi': 'पेटेंट्स और नवाचार',
      },
      'Global Trademarks': {
        'Telugu': 'గ్లోబల్ ట్రేడ్‌మార్కులు',
        'Hindi': 'वैश्विक ट्रेडमार्क',
      },
      'Litigation': {
        'Telugu': 'వ్యాజ్యం',
        'Hindi': 'मुकदमेबाजी',
      },
      'Family Law': {
        'Telugu': 'కుటుంబ చట్టం',
        'Hindi': 'पारिवारिक कानून',
      },
      'Government Relations': {
        'Telugu': 'ప్రభుత్వ సంబంధాలు',
        'Hindi': 'सरकारी संबंध',
      },
      'Corporate and Business Laws': {
        'Telugu': 'కార్పొరేట్ మరియు వ్యాపార చట్టాలు',
        'Hindi': 'कॉर्पोरेट और व्यावसायिक कानून',
      }, 
      'Anti-Piracy and Copyrights': {
        'Telugu': 'యాంటీ పైరసీ మరియు కాపీరైట్‌లు',
        'Hindi': 'एंटी-पाइरेसी और कॉपीराइट',
      },
      'Transactions and Contracts': {
        'Telugu': 'లావాదేవీలు మరియు ఒప్పందాలు',
        'Hindi': 'लेन-देन और अनुबंध',
      },
       'Supreme Court of India': {
        'Telugu': 'భారత సుప్రీంకోర్టు',
        'Hindi': 'भारत का सर्वोच्च न्यायालय',
      },
      'Legal Process Outsorucing': {
        'Telugu': 'లీగల్ ప్రాసెస్ అవుట్‌సోర్సింగ్',
        'Hindi': 'कानूनी प्रक्रिया आउटसोर्सिंग',
      },
      'Cyber and IT Laws': {
        'Telugu': 'సైబర్ మరియు ఐటీ చట్టాలు',
        'Hindi': 'साइबर और आईटी कानून',
      },
      'Employment Laws': {
        'Telugu': 'ఉపాధి చట్టాలు',
        'Hindi': 'रोजगार कानून',
      },
      'Company Incorporation': {
        'Telugu': 'కంపెనీ ఇన్కార్పొరేషన్',
        'Hindi': 'कंपनी निगमन',
      },
      'Crime Lawyer': {
        'Telugu': 'క్రైమ్ లాయర్',
        'Hindi': 'अपराध वकील',
      },
      'VISA and Immigration': {
        'Telugu': 'వీసా మరియు ఇమ్మిగ్రేషన్',
        'Hindi': 'वीज़ा और आप्रवासन',
      },
      'Not for Profit Organizations': {
        'Telugu': 'లాభదాయక సంస్థల కోసం కాదు',
        'Hindi': 'लाभ संगठनों के लिए नहीं',
      },
     
    };

    return translations[title]?.[language] || title;
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = slides.length;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [a, seta] = useState(true);

  const handleSearch = async () => {
    seta(false);
    const API_KEY = 'AIzaSyANGRBXkrIB27I0tJlfz_ns2l5Pbxl5ToU'; // Replace with your actual API key
    const CSE_ID = '170174b4b386f4f68'; // Replace with your actual Custom Search Engine ID
    const encodedQuery = encodeURIComponent(query); // Encode the query
    const languageCode = selectedLanguage === 'Telugu' ? 'lang_te' : ''; // Use Telugu language code if selected
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}&q=${encodedQuery}&lr=${languageCode}`;
    console.log('Request URL:', url); // Log the full request URL

    const maxRetries = 5; // Max number of retries
    const retryDelay = (retryCount) => 1000 * Math.pow(2, retryCount); // Exponential backoff delay

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await axios.get(url);
            console.log('API Response:', response.data);
            setResults(response.data.items || []);
            return; // Exit the function if successful
        } catch (error) {
            if (error.response && error.response.status === 429) {
                console.error('Rate limit exceeded. Retrying...');
                await new Promise((resolve) => setTimeout(resolve, retryDelay(attempt)));
            } else {
                console.error('Error fetching search results:', error);
                setResults([]);
                return; // Exit if the error is not related to rate limiting
            }
        }
    }

    console.error('Failed to fetch results after multiple attempts');
    setResults([]);
};



  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [icon,seticon]=useState(false)

  const toggleLanguageDropdown = () => {
 
seticon(!icon)
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleLanguageChange = (language) => {
   

    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };
  useEffect(() => {
    console.log('Updated isTelugu state:', isTelugu);
  }, [isTelugu]);

  console.log('isTelugu:', isTelugu);
  










  const [currentSlidee, setCurrentSlidee] = useState(0);

  const testimonials = [
    {
      name: {
        English: "Karishma Rai",
        Telugu: "కరిష్మా రాయ్",
        Hindi: "करिश्मा राय",
      },
      date: "6 July, 2022",
      rating: "★★★★★",
      text: {
        English: "I hired Ms Jasmine Hora, Advocate associate at Jotwani Associate as my divorce lawyer to represent me...",
        Telugu: "నేను నా విడాకుల న్యాయవాదిగా జాస్మిన్ హోరా, జోట్వానీ అసోసియేట్ న్యాయవాది సహకారిని నియమించాను...",
        Hindi: "मैंने अपने तलाक के वकील के रूप में जस्मीन होरा, जॉत्वानी एसोसिएट में अधिवक्ता सहयोगी को नियुक्त किया..."
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZ7jr7wNfyIStPPGqfirYpDd9sqEx33Rm2A&s"
    },
    {
      name: {
        English: "Bharat Ram",
        Telugu: "భరత్ రామ్",
        Hindi: "भरत राम",
      },
      date: "5 July, 2022",
      rating: "★★★★★",
      text: {
        English: "Highly recommend for the Delhi High Court Property Case. My family property dispute got resolved in single hearing...",
        Telugu: "ఢిల్లీ హైకోర్టు ఆస్తి కేసుకు అత్యంత సిఫార్సు చేస్తున్నాను. నా కుటుంబ ఆస్తి వివాదం ఒకే వినతిలో పరిష్కారమైంది...",
        Hindi: "दिल्ली उच्च न्यायालय संपत्ति मामले के लिए अत्यधिक अनुशंसा की जाती है। मेरे परिवार की संपत्ति विवाद एक ही सुनवाई में हल हो गया..."
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Y34aolXBTUD6C1e1G4QoF2c8XGNNEy--_w&s"
    },
    {
      name: {
        English: "Jhon",
        Telugu: "జాన్",
        Hindi: "जॉन",
      },
      date: "4 July, 2022",
      rating: "★★★★★",
      text: {
        English: "Good Results. However, all senior advocates are very busy during day time...",
        Telugu: "మంచి ఫలితాలు. అయితే, అన్ని సీనియర్ న్యాయవాదులు పగటిపూట చాలా బిజీగా ఉంటారు...",
        Hindi: "अच्छे परिणाम। हालाँकि, सभी वरिष्ठ अधिवक्ता दिन के समय बहुत व्यस्त रहते हैं..."
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaizazwQtqYtxIz6-5scSWz97PERGqBBDpZA&s"
    },
  
      {
      name: {
        English: "Sk jainoddin",
        Telugu: "Sk జైనోద్దీన్",
        Hindi: "एसके जैनोद्दीन",
      },
      date: "5 July, 2022",
      rating: "★★★★★",
      text: {
        English: "Highly recommend for the Delhi High Court Property Case. My family property dispute got resolved in single hearing...",
        Telugu: "ఢిల్లీ హైకోర్టు ప్రాపర్టీ కేసు కోసం అత్యంత సిఫార్సు. నా కుటుంబ ఆస్తి వివాదం ఒకే విచారణలో పరిష్కరించబడింది...",
        Hindi: "दिल्ली उच्च न्यायालय संपत्ति मामले के लिए अत्यधिक अनुशंसा। मेरा पारिवारिक संपत्ति विवाद एक ही सुनवाई में सुलझ गया..."
      },
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2P7sBvuK7RhiKdqRx9fMhzFOBb0ScLT0Cvg&s",
    },
    {
      name: "Abhi",
      date: "4 July, 2022",
      rating: "★★★★★",
      text: {
        English: "Good Results. However, all senior advocates are very busy during day time...",
        Telugu: "మంచి ఫలితాలు. అయితే, అన్ని సీనియర్ న్యాయవాదులు పగటిపూట చాలా బిజీగా ఉంటారు...",
        Hindi: "अच्छे परिणाम। हालाँकि, सभी वरिष्ठ अधिवक्ता दिन के समय बहुत व्यस्त रहते हैं..."
      },
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gYGat6RBssK9Vn90UKUBoRUPA0YRjxKElr_mFI1mh84CivqvsG0CRZowgk96TiIMdpM&usqp=CAU"
    },
    // Add more testimonials here
  ];
  const [currentSlideee, setCurrentSlideee] = useState(0);
  const slideCount = testimonials.length;
  
  const nextSlide = () => {
    if (currentSlideee < slideCount - 3) {
      setCurrentSlideee(currentSlideee + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentSlideee > 0) {
      setCurrentSlideee(currentSlideee - 1);
    }
  };
  




















  useEffect(() => {
    // Function to load Google Translate script
    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google-translate-script")) {
        const addScript = document.createElement("script");
        addScript.id = "google-translate-script";
        addScript.src = "https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate";
        document.body.appendChild(addScript);
      }
    };

    // Function to initialize the Google Translate Element
    window.loadGoogleTranslate = function () {
      if (!document.getElementById('google_translate_element')) {
        const translateElement = document.createElement("div");
        translateElement.id = "google_translate_element";
        document.getElementById('tra').appendChild(translateElement);

        new window.google.translate.TranslateElement(
          { pageLanguage: 'en' }, // Set the default page language
          'google_translate_element'
        );
      }
    };


    

    // Load the script and initialize Google Translate
    loadGoogleTranslateScript();

    // Cleanup: Remove the script and translate element when the component unmounts
    return () => {
      const script = document.getElementById("google-translate-script");
      if (script) {
        document.body.removeChild(script);
      }
      const translateElement = document.getElementById('google_translate_element');
      if (translateElement) {
        document.getElementById('tra').removeChild(translateElement);
      }
    };
  }, []);



  

  return (
    <div className="legal-research">
      <div className="sidebar">
      <div id="tra">hh</div>
      </div>
      <div className="a">
        <div>
        <h3 id={selectedLanguage === 'Telugu' ? 'tel' : selectedLanguage === 'Hindi' ? 'hin' : 'p'} style={{width:"35%"}}>
  {selectedLanguage === 'English'
    ? 'Legal Research and Knowledge Base'
    : selectedLanguage === 'Telugu'
    ? 'న్యాయ పరిశోధన మరియు నాలెడ్జ్ బేస్'
    : 'कानूनी अनुसंधान और ज्ञान आधार'}
</h3>

          <div id="contact-header-textbox12">
            <input
              type="text"
              name="search"
              placeholder={
                selectedLanguage === 'English'
                  ? 'SEARCH'
                  : selectedLanguage === 'Telugu'
                  ? 'శోధించు'
                  : 'खोजें'
              }
                        className="contact-header-textfeild"
              value={query}
              onChange={(e) => {setQuery(e.target.value);handleSearch()}}
            />
          
          </div>

          <div id="contact-header-textbox13" onClick={toggleLanguageDropdown}>
            <p>
              {selectedLanguage} {icon ?(<IoArrowUp /> ):(<FaArrowDown />

)}
            </p>
            {showLanguageDropdown && (
              <ul className="language-dropdown">
                <li onClick={() => handleLanguageChange('English')} className="li">English</li>
                <li onClick={() => handleLanguageChange('Telugu')} className="li">Telugu</li>
                <li onClick={() => handleLanguageChange('Hindi')} className="li">Hindi</li>
                {/* Add more languages as needed */}
              </ul>
            )}
          </div>
        </div>

        <div className="container">
          {a ? (
            <div className="slideshow-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`mySlides fade ${slideIndex === index + 1 ? "" : ""}`}
                  style={{ display: slideIndex === index + 1 ? "block" : "none" }}
                >
                  <div className="slide-images">
                    {slide.images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        className={`slide-image ${idx === 1 ? "shift-left" : ""}`}
                        alt={`Slide ${index + 1} - Image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              ))}

              <a className="prev" onClick={() => plusSlides(-1)}>
                ❮
              </a>
              <a className="next" onClick={() => plusSlides(1)}>
                ❯
              </a>

              <div style={{ textAlign: "center" }}>
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`dot ${slideIndex === index + 1 ? "active" : ""}`}
                    onClick={() => currentSlide(index + 1)}
                  ></span>
                ))}
              </div>
            </div>
          ) : null}

          {a ? (
            <div>
              <h3 className="h3">{selectedLanguage === 'English' ? 'Jotwani Associates - Best Law Firm in India' : selectedLanguage === 'Telugu' ? 'జోత్వాని అసోసియేట్స్ - భారతదేశంలో ఉత్తమ న్యాయ సంస్థ' :'जोतवानी एसोसिएट्स - भारत में सर्वश्रेष्ठ लॉ फर्म'}</h3>
              <div style={{ display: 'flex' }}>
                <p className="ptag">
                  {selectedLanguage === 'English'
                    ? 'Jotwani Associates is the foremost multi-disciplinary Global Law Firm supporting Fortune 500 corporations, Indian Business Houses, Academic and Research Institutes, Startups, and Individuals.'
                  : selectedLanguage === 'Telugu' ? 'జోత్వాని అసోసియేట్స్ ఫార్చ్యూన్ 500 కార్పొరేషన్లు, ఇండియన్ బిజినెస్ హౌస్‌లు, అకడమిక్ మరియు రీసెర్చ్ ఇన్‌స్టిట్యూట్‌లు, స్టార్టప్‌లు మరియు వ్యక్తులకు మద్దతునిచ్చే అగ్రశ్రేణి బహుళ-క్రమశిక్షణా గ్లోబల్ లా సంస్థ.'
                :'जोतवानी एसोसिएट्स फॉर्च्यून 500 निगमों, भारतीय व्यावसायिक घरानों, शैक्षणिक और अनुसंधान संस्थानों, स्टार्टअप और व्यक्तियों का समर्थन करने वाली अग्रणी बहु-विषयक वैश्विक लॉ फर्म है।'
                }
                </p>
                <p className="ptag">
                  {selectedLanguage === 'English'
                    ? 'Jotwani Associates is Top Forbes India Law Firm for the year 2020 and 2021 in the practice areas of Intellectual Property Rights Laws and Technology Laws.'
                    : selectedLanguage === 'Telugu' ?  'జోత్వాని అసోసియేట్స్ మేధో సంపత్తి హక్కుల చట్టాలు మరియు సాంకేతిక చట్టాల సాధన విభాగాలలో 2020 మరియు 2021 సంవత్సరాలకు సంబంధించిన టాప్ ఫోర్బ్స్ ఇండియా లా సంస్థ.'
                  :'जोतवानी एसोसिएट्स बौद्धिक संपदा अधिकार कानूनों और प्रौद्योगिकी कानूनों के अभ्यास क्षेत्रों में वर्ष 2020 और 2021 के लिए शीर्ष फोर्ब्स इंडिया लॉ फर्म है।'
                  }
                </p>
              </div>
              <div>
                <h3 className="k">{selectedLanguage === 'English' ? 'The Law Firm’s Areas of Practice' : selectedLanguage === 'Telugu' ? 'న్యాయ సంస్థ యొక్క ప్రాక్టీస్ ప్రాంతాలు':'लॉ फर्म के अभ्यास के क्षेत्र'}</h3>
              </div>
              <div className="card-gridd">
              {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={
              selectedLanguage === 'English'
                ? card.title
                : getTranslatedTitle(card.title, selectedLanguage)
            }
          />
        ))}
              </div>


              <h3 style={{justifyContent:"center"}} className="h32">{selectedLanguage === 'English' ? 'Testimonials' : selectedLanguage === 'Telugu' ? 'టెస్టిమోనియల్స్' :'प्रशंसापत्र'}</h3>


              <div>
              
              <h4 className="e1">{selectedLanguage === 'English' ? 'Excellent' : selectedLanguage === 'Telugu' ? 'అద్భుతమైన' :'उत्कृष्ट'}</h4>

              {[1, 2, 3, 4, 5].map((star) => (
  <span
    key={star}
    className={`fa fa-star`}
    style={{
      cursor: 'pointer',
      color: 'orange',
      position: 'relative',left:"30px"
    }}
  >
    {star === 5 && (
      <span
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundColor: 'white', // This should match the background color of your page or container
          zIndex: 1,
        }}
      ></span>
    )}
  </span>
))}


      <p className="b1">{selectedLanguage === 'English' ? 'Based on 35 reviews' : selectedLanguage === 'Telugu' ? '35 సమీక్షల ఆధారంగా' :'35 समीक्षाओं पर आधारित'}</p>
      <img className="m2" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" style={{width:"90px"}}></img>






              </div>









              <div className="ca">
    <button onClick={prevSlide} className="btn11"><MdKeyboardArrowLeft />    </button>
    <div className="sidecard">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlideee * (100 / 3)}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`slideee ${
              index >= currentSlideee && index < currentSlideee + 3
                ? "active"
                : "inactive"
            }`}
          >
            <div className="testimonial-card">
              <div style={{display:"flex"}}>
            
              <img src={testimonial.img} alt={testimonial.name} className="img11" />

              <h3 className="t1">{testimonial.name[selectedLanguage]}</h3>
              </div>
              <p className="t2">{testimonial.date}</p>
              <p style={{color:"orange"}}>{testimonial.rating}</p>
              <p className="t4">{testimonial.text[selectedLanguage]}</p>
              <a href="#" className="t5">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <button onClick={nextSlide} className="btn13"><MdKeyboardArrowRight />
    </button>
  </div>










            </div>
            
          ) : (
            <div className="card-grid">
              {results.length > 0 ? (
                results.map((result, index) => (
                  <div key={index} className="cardd">
                    {result.pagemap?.cse_image?.[0]?.src && (
                      <img src={result.pagemap.cse_image[0].src} alt={result.title} className="card-imagee" />
                    )}
                    <div className="card-contentt">
                      <h3 className="card-titlee">{result.title}</h3>
                      <p className="card-snippett">{result.snippet}</p>
                      <a href={result.link} target="_blank" rel="noopener noreferrer" className="card-linkk">
                        Read more
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <div>No results found</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;