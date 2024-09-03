import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoArrowUp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import img1 from "../img/bnsimg.png";
import "./BnsPage.css";
import { FaCalendar } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const BnsPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [a, seta] = useState(true);

  const handleSearch = async () => {
    seta(false);
    const API_KEY = "AIzaSyANGRBXkrIB27I0tJlfz_ns2l5Pbxl5ToU"; // Replace with your actual API key
    const CSE_ID = "170174b4b386f4f68"; // Replace with your actual Custom Search Engine ID
    const encodedQuery = encodeURIComponent(query); // Encode the query
    const languageCode = selectedLanguage === "Telugu" ? "lang_te" : ""; // Use Telugu language code if selected
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CSE_ID}&q=${encodedQuery}&lr=${languageCode}`;
    console.log("Request URL:", url); // Log the full request URL

    const maxRetries = 5; // Max number of retries
    const retryDelay = (retryCount) => 1000 * Math.pow(2, retryCount); // Exponential backoff delay

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      try {
        const response = await axios.get(url);
        console.log("API Response:", response.data);
        setResults(response.data.items || []);
        return; // Exit the function if successful
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error("Rate limit exceeded. Retrying...");
          await new Promise((resolve) =>
            setTimeout(resolve, retryDelay(attempt))
          );
        } else {
          console.error("Error fetching search results:", error);
          setResults([]);
          return; // Exit if the error is not related to rate limiting
        }
      }
    }

    console.error("Failed to fetch results after multiple attempts");
    setResults([]);
  };

  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [icon, seticon] = useState(false);

  const toggleLanguageDropdown = () => {
    seticon(!icon);
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  return (
    <div className="legal-research">
      <div className="sidebar">
        <div>Sidebar</div>
      </div>
      <div className="a">
        <div>
          <h3
            id={
              selectedLanguage === "Telugu"
                ? "tel"
                : selectedLanguage === "Hindi"
                ? "hin"
                : "p"
            }
            style={{ width: "55%" }}
          >
            {selectedLanguage === "English"
              ? "Bharatiya Nyaya Sanhita"
              : selectedLanguage === "Telugu"
              ? "భారతీయ న్యాయ సంహిత"
              : "भारतीय न्याय संहिता"}
          </h3>

          <div id="contact-header-textbox13" onClick={toggleLanguageDropdown}>
            <p>
              {selectedLanguage} {icon ? <IoArrowUp /> : <FaArrowDown />}
            </p>
            {showLanguageDropdown && (
              <ul className="language-dropdown">
                <li
                  onClick={() => handleLanguageChange("English")}
                  className="li"
                >
                  English
                </li>
                <li
                  onClick={() => handleLanguageChange("Telugu")}
                  className="li"
                >
                  Telugu
                </li>
                <li
                  onClick={() => handleLanguageChange("Hindi")}
                  className="li"
                >
                  Hindi
                </li>
                {/* Add more languages as needed */}
              </ul>
            )}
          </div>
        </div>

        <div className="containerr">
          <div className="p1-2">
            <p className="p12">
              {" "}
              {selectedLanguage === "English"
                ? "Changes Brought Forth by the Bharatiya Nyaya Sanhita, 2023"
                : selectedLanguage === "Telugu"
                ? "భారతీయ న్యాయ సంహిత, 2023 ద్వారా వచ్చిన మార్పులు"
                : "भारतीय न्याय संहिता, 2023 द्वारा लाए गए परिवर्तन"}
            </p>
          </div>
          <div style={{ display: "flex" }} className="div1">
            <img src={img1} alt="Description" style={{ width: "50%" }}></img>
            <div className="divbns1">
              <div className="h1div">
                <button className="btnf">
                  <FaFacebook
                    style={{ width: "30px", height: "30px" }}
                    className="iconf"
                  />
                </button>
                <button className="btnt">
                  <AiFillTwitterCircle
                    style={{ width: "35px", height: "35px" }}
                    className="iconf"
                  />
                </button>
                <button className="btni">
                  <TiSocialLinkedinCircular
                    style={{ width: "40px", height: "40px" }}
                    className="iconf"
                  />
                </button>

                <h1 className="bnsh1">
                  {selectedLanguage === "English"
                    ? "Changes Brought Forth by the Bharatiya Nyaya Sanhita, 2023"
                    : selectedLanguage === "Telugu"
                    ? "భారతీయ న్యాయ సంహిత, 2023 ద్వారా వచ్చిన మార్పులు"
                    : "भारतीय न्याय संहिता, 2023 द्वारा लाए गए परिवर्तन"}
                </h1>
              </div>
            </div>
          </div>

          <div className="bnsp1">
            <p className="bnsp2">
              <span>
                <FaCalendar />{" "}
              </span>
              July 4, 2024
              <span
                style={{ fontSize: "30px", position: "relative", top: "8px" }}
              >
                <RxDividerVertical />{" "}
              </span>
              {selectedLanguage === "English"
                ? "Bharatiya Nyaya Sanhita, 2023"
                : selectedLanguage === "Telugu"
                ? "భారతీయ న్యాయ సంహిత, 2023"
                : "भारतीय न्याय संहिता, 2023"}
            </p>
          </div>
          <div>
            <p className="bnsp4">
              {selectedLanguage === "English"
                ? `The Bhartiya Nyaya Sanhita, 2023 (hereinafter referred to as the “BNS”) is a criminal 
        legislation which seeks to replace the erstwhile Indian Penal Code, 1860 (hereinafter referred
         to as the “IPC”). A lot of significant changes can be observed in the BNS, such as the introduction 
         of community service as a punishment, the grouping of inchoate offences under the same chapter,
          among others. This article seeks to present a comparative analysis of these changes, highlighting
           the key differences and their potential impact on our criminal justice system.`
                : selectedLanguage === "Telugu"
                ? `భారతీయ న్యాయ సంహిత, 2023 (ఇకపై "BNS" గా సూచిస్తారు) నేరస్థుడు 
        పాత భారతీయ శిక్షాస్మృతి, 1860 (ఇకపై ప్రస్తావించబడింది
         "IPC" గా). పరిచయం వంటి చాలా ముఖ్యమైన మార్పులను BNSలో గమనించవచ్చు 
         శిక్షగా సమాజ సేవ, అదే అధ్యాయం కింద ఇంకోట్ నేరాల సమూహం,
          ఇతరులలో. ఈ కథనం ఈ మార్పుల యొక్క తులనాత్మక విశ్లేషణను హైలైట్ చేయడానికి ప్రయత్నిస్తుంది
           మన నేర న్యాయ వ్యవస్థపై కీలక వ్యత్యాసాలు మరియు వాటి సంభావ్య ప్రభావం.`
                : `भारतीय न्याय संहिता, 2023 (बाद में इसे "बीएनएस" के रूप में संदर्भित किया जाएगा) एक आपराधिक कानून है 
        कानून जो पूर्ववर्ती भारतीय दंड संहिता, 1860 (इसके बाद संदर्भित) को प्रतिस्थापित करना चाहता है
         "आईपीसी" के रूप में)। बीएनएस में कई महत्वपूर्ण बदलाव देखे जा सकते हैं, जैसे कि परिचय 
         सजा के रूप में सामुदायिक सेवा, एक ही अध्याय के अंतर्गत छोटे अपराधों का समूहीकरण,
          दूसरों के बीच में। यह आलेख इन परिवर्तनों पर प्रकाश डालते हुए उनका तुलनात्मक विश्लेषण प्रस्तुत करना चाहता है
           मुख्य अंतर और हमारी आपराधिक न्याय प्रणाली पर उनका संभावित प्रभाव।`}
            </p>
            <div class="row">
              <div class="column">
                <h4 className="bnsp5">
                  {selectedLanguage === "English"
                    ? "Addition and Alteration of Certain Language and Provisions"
                    : selectedLanguage === "Telugu"
                    ? "కొన్ని భాష మరియు నిబంధనలను జోడించడం మరియు మార్చడం"
                    : "कुछ भाषा और प्रावधानों का परिवर्धन और परिवर्तन"}
                </h4>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Commission of Offences through Electronic Means "
                    : selectedLanguage === "Telugu"
                    ? "ఎలక్ట్రానిక్ మార్గాల ద్వారా నేరాల కమిషన్"
                    : "इलेक्ट्रॉनिक माध्यम से अपराध करना"}{" "}
                </h4>
                <p className="bnsp7">
                  {selectedLanguage === "English"
                    ? `According to individual statistical reports[1], India has reportedly been
         home to approximately 750 million internet users and 460 million users of
          various platforms of social media, which equates to roughly 30% of the total
           users in the world. Further, according to recent independent studies[2], smartphone
            users in India were approximately 650 million strong. These and other
             studies on the subject make it obvious that a substantial portion of the Indian 
             population interacts, transacts and operates through digital mediums. Naturally, 
             incidents of criminal activity have risen. In fact, according to Crime in India 2022[3], 
             a publication of the National Crime Records Bureau, there has been an increase of 24.4% in 
             the registration of cases under Cybercrime as compared to 2021.`
                    : selectedLanguage === "Telugu"
                    ? `వ్యక్తిగత గణాంక నివేదికల ప్రకారం[1], భారతదేశం నివేదించబడింది
         సుమారు 750 మిలియన్ల ఇంటర్నెట్ వినియోగదారులు మరియు 460 మిలియన్ల వినియోగదారులకు నిలయం
          సోషల్ మీడియా యొక్క వివిధ ప్లాట్‌ఫారమ్‌లు, ఇది మొత్తంలో దాదాపు 30%కి సమానం
           ప్రపంచంలోని వినియోగదారులు. ఇంకా, ఇటీవలి స్వతంత్ర అధ్యయనాల ప్రకారం[2], స్మార్ట్‌ఫోన్
            భారతదేశంలోని వినియోగదారులు దాదాపు 650 మిలియన్ల మంది ఉన్నారు. ఇవి మరియు ఇతర
             ఈ విషయంపై అధ్యయనాలు భారతీయులలో గణనీయమైన భాగం అని స్పష్టంగా తెలియజేస్తున్నాయి 
             జనాభా సంకర్షణ చెందుతుంది, లావాదేవీలు చేస్తుంది మరియు డిజిటల్ మాధ్యమాల ద్వారా పనిచేస్తుంది. సహజంగా, 
             నేర కార్యకలాపాల ఘటనలు పెరిగాయి. నిజానికి, క్రైమ్ ఇన్ ఇండియా 2022[3] ప్రకారం, 
             నేషనల్ క్రైమ్ రికార్డ్స్ బ్యూరో యొక్క ప్రచురణలో 24.4% పెరుగుదల ఉంది 
             2021తో పోలిస్తే సైబర్ క్రైమ్ కింద కేసుల నమోదు.
`
                    : `व्यक्तिगत सांख्यिकीय रिपोर्टों[1] के अनुसार, भारत कथित तौर पर रहा है
         लगभग 750 मिलियन इंटरनेट उपयोगकर्ताओं और 460 मिलियन उपयोगकर्ताओं का घर
          सोशल मीडिया के विभिन्न प्लेटफ़ॉर्म, जो कुल का लगभग 30% के बराबर है
           दुनिया में उपयोगकर्ता. इसके अलावा, हाल के स्वतंत्र अध्ययनों[2] के अनुसार, स्मार्टफोन
            भारत में उपयोगकर्ताओं की संख्या लगभग 650 मिलियन थी। ये और अन्य
             इस विषय पर अध्ययन से यह स्पष्ट होता है कि भारतीयों का एक बड़ा हिस्सा 
             जनसंख्या डिजिटल माध्यमों से बातचीत, लेन-देन और संचालन करती है। सहज रूप में, 
             आपराधिक गतिविधियों की घटनाएं बढ़ी हैं. दरअसल, क्राइम इन इंडिया 2022[3] के अनुसार, 
             राष्ट्रीय अपराध रिकॉर्ड ब्यूरो के एक प्रकाशन के अनुसार, इसमें 24.4% की वृद्धि हुई है 
             2021 की तुलना में साइबर अपराध के तहत मामलों का पंजीकरण।`}
                </p>
                <p className="bnsp7">
                  {selectedLanguage === "English"
                    ? `For this very purpose, a new addition in the form of Section 2(39) of the BNS clearly states 
             that all words or expressions with regards to technology and digital media in general, shall 
             have the same meanings as those given in the Information Technology Act, 2002, as well as the
              Bhartiya Nagarik Suraksha Sanhita, 2023. This will enable a much wider scope in terms of 
              recognising various acts that fall under the ambit of an offence, thereby contributing to the
               detection and deterrence of crime. Section 2(8) of the BNS states that documents now include
                electronic and digital records.`
                    : selectedLanguage === "Telugu"
                    ? `ఈ ప్రయోజనం కోసం, BNS యొక్క సెక్షన్ 2(39) రూపంలో కొత్త అదనంగా స్పష్టంగా పేర్కొంది 
             సాధారణంగా సాంకేతికత మరియు డిజిటల్ మీడియాకు సంబంధించి అన్ని పదాలు లేదా వ్యక్తీకరణలు 
             ఇన్ఫర్మేషన్ టెక్నాలజీ చట్టం, 2002, అలాగే ది
              భారతీయ నాగరిక్ సురక్ష సంహిత, 2023. ఇది పరంగా మరింత విస్తృత పరిధిని అనుమతిస్తుంది 
              నేరం పరిధిలోకి వచ్చే వివిధ చర్యలను గుర్తించడం, తద్వారా నేరానికి దోహదం చేయడం
               నేరాన్ని గుర్తించడం మరియు నిరోధించడం. BNS యొక్క సెక్షన్ 2(8) పత్రాలు ఇప్పుడు చేర్చబడిందని పేర్కొంది
                ఎలక్ట్రానిక్ మరియు డిజిటల్ రికార్డులు.`
                    : `इसी उद्देश्य के लिए, बीएनएस की धारा 2(39) के रूप में एक नया परिवर्धन स्पष्ट रूप से कहा गया है 
             कि सामान्यतः प्रौद्योगिकी और डिजिटल मीडिया के संबंध में सभी शब्द या अभिव्यक्तियाँ लागू होंगी 
             वही अर्थ हैं जो सूचना प्रौद्योगिकी अधिनियम, 2002 में दिए गए हैं, साथ ही
              भारतीय नागरिक सुरक्षा संहिता, 2023। इससे बहुत व्यापक दायरा संभव होगा 
              विभिन्न कृत्यों को पहचानना जो अपराध के दायरे में आते हैं, जिससे इसमें योगदान मिलता है
               अपराध का पता लगाना और निवारण करना। बीएनएस की धारा 2(8) में कहा गया है कि दस्तावेज़ों में अब शामिल हैं
                इलेक्ट्रॉनिक और डिजिटल रिकॉर्ड।
`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Community Service as a Punishment"
                    : selectedLanguage === "Telugu"
                    ? "శిక్షగా సంఘం సేవ"
                    : "एक सज़ा के रूप में सामुदायिक सेवा"}{" "}
                </h4>
                <p className="bnsp7">
                  {selectedLanguage === "English"
                    ? `As a new addition to the chapter on punishments, community service has been added as one of the 
      punishments that may be given upon the conviction of an individual. It must also be noted that community 
      service as a punishment, according to the Statement of Object and Reasons, is only for petty offences, and 
      is therefore given in the BNS only under six offences as a means of punishment.`
                    : selectedLanguage === "Telugu"
                    ? `శిక్షల అధ్యాయానికి కొత్త అదనంగా, సమాజ సేవ ఒకటిగా జోడించబడింది 
      ఒక వ్యక్తి యొక్క నేరారోపణపై విధించే శిక్షలు. సంఘం కూడా గమనించాలి 
      ఆబ్జెక్ట్ మరియు కారణాల స్టేట్‌మెంట్ ప్రకారం శిక్షగా సేవ, చిన్న నేరాలకు మాత్రమే, మరియు 
      కాబట్టి BNSలో కేవలం ఆరు నేరాల క్రింద శిక్షా సాధనంగా ఇవ్వబడింది.`
                    : `दण्ड संबंधी अध्याय में एक नये अध्याय के रूप में, सामुदायिक सेवा को भी इसमें से एक के रूप में जोड़ा गया है 
      सज़ा जो किसी व्यक्ति के दोषी पाए जाने पर दी जा सकती है। यह भी ध्यान दिया जाना चाहिए कि समुदाय 
      उद्देश्य और कारणों के कथन के अनुसार, सजा के रूप में सेवा केवल छोटे अपराधों के लिए है, और 
      इसलिए सजा के साधन के रूप में बीएनएस में केवल छह अपराधों के तहत दिया जाता है।`}
                </p>
                <p className="bnsp7">
                  {selectedLanguage === "English"
                    ? ` Furthermore, a report of the Standing Committee[4] further recommended the insertion of a proper 
      definition of community service as well as contouring the scope of this punishment to the Parliament.
       However, this hasn’t been incorporated into the text of the Act as of now, with the laws being officially
        enforced[5]. The lack of proper clarity with regards to community service could result in massive
         judicial involvement in aiding the interpretation and setting of the law.`
                    : selectedLanguage === "Telugu"
                    ? `ఇంకా, స్టాండింగ్ కమిటీ[4] యొక్క నివేదిక సరైన చొప్పించడాన్ని మరింత సిఫార్సు చేసింది 
      సమాజ సేవ యొక్క నిర్వచనం అలాగే పార్లమెంటుకు ఈ శిక్ష యొక్క పరిధిని ఆకృతి చేయడం.
       అయితే, చట్టాలు అధికారికంగా ఉండటంతో ఇది ప్రస్తుతానికి చట్టం యొక్క పాఠంలో చేర్చబడలేదు
        అమలు[5]. కమ్యూనిటీ సేవకు సంబంధించి సరైన స్పష్టత లేకపోవడం భారీ ఫలితానికి దారి తీస్తుంది
         చట్టం యొక్క వివరణ మరియు అమరికకు సహాయం చేయడంలో న్యాయపరమైన ప్రమేయం.`
                    : `इसके अलावा, स्थायी समिति की एक रिपोर्ट[4] ने एक उचित सम्मिलन की सिफारिश की 
      सामुदायिक सेवा की परिभाषा के साथ-साथ संसद को इस सज़ा का दायरा तय करना।
       हालाँकि, अभी तक कानून आधिकारिक होने के कारण इसे अधिनियम के पाठ में शामिल नहीं किया गया है
        लागू[5]। सामुदायिक सेवा के संबंध में उचित स्पष्टता की कमी के परिणामस्वरूप बड़े पैमाने पर परिणाम हो सकते हैं
         कानून की व्याख्या और स्थापना में सहायता में न्यायिक भागीदारी।`}
                </p>

                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Use of Inclusive Language"
                    : selectedLanguage === "Telugu"
                    ? "సమ్మిళిత భాష యొక్క ఉపయోగం"
                    : "समावेशी भाषा का प्रयोग"}
                </h4>
                <p className="bnsp7">
                  {selectedLanguage === "English"
                    ? `As a first, the BNS uses the term transgender under Section 2(10), under the definition of “gender”,
 which was absent in the IPC. In general, various provisions have been made gender neutral, such as the
  offence of voyeurism, having been defined and punished under Section 77 of the BNS. However, it must be 
  noted that Section 77, along with other provisions, have incorporated the gender neutrality of the perpetrator,
   and not the victim. Therefore, for example, even though a woman may now be convicted for the offence of
    voyeurism, a man will never be able to complain about voyeuristic behaviour, an area where the BNS could’ve
     legislated upon.`
                    : selectedLanguage === "Telugu"
                    ? `మొదటిగా, BNS సెక్షన్ 2(10) కింద లింగమార్పిడి అనే పదాన్ని “లింగం” నిర్వచనం కింద ఉపయోగిస్తుంది,
 IPC లో లేనిది. సాధారణంగా, వివిధ నిబంధనలు లింగ తటస్థంగా చేయబడ్డాయి, వంటివి
  BNS యొక్క సెక్షన్ 77 కింద నిర్వచించబడిన మరియు శిక్షించబడిన voyeurism యొక్క నేరం. అయితే, అది ఉండాలి 
  సెక్షన్ 77, ఇతర నిబంధనలతో పాటు, నేరస్థుడి లింగ తటస్థతను పొందుపరిచింది,
   మరియు బాధితుడు కాదు. అందువలన, ఉదాహరణకు, ఒక మహిళ ఇప్పుడు నేరం కోసం దోషిగా ఉండవచ్చు కూడా
    voyeurism, ఒక మనిషి voyeuristic ప్రవర్తన గురించి ఫిర్యాదు చేయలేరు, BNS చేయగల ప్రాంతం
     మీద శాసనం.`
                    : `सबसे पहले, बीएनएस धारा 2(10) के तहत "लिंग" की परिभाषा के तहत ट्रांसजेंडर शब्द का उपयोग करता है।
 जो आईपीसी में अनुपस्थित था. सामान्य तौर पर, विभिन्न प्रावधानों को लिंग तटस्थ बनाया गया है, जैसे कि
  ताक-झांक का अपराध, बीएनएस की धारा 77 के तहत परिभाषित और दंडित किया गया है। हालाँकि, यह होना ही चाहिए 
  नोट किया गया कि धारा 77 में, अन्य प्रावधानों के साथ, अपराधी की लिंग तटस्थता को शामिल किया गया है,
   और पीड़ित नहीं. इसलिए, उदाहरण के लिए, भले ही एक महिला को अब अपराध के लिए दोषी ठहराया जा सकता है
    ताक-झांक, एक आदमी कभी भी ताक-झांक वाले व्यवहार के बारे में शिकायत नहीं कर पाएगा, एक ऐसा क्षेत्र जहां बीएनएस हो सकता था
     पर कानून बनाया.`}
                </p>
                <p
                  className={
                    selectedLanguage === "Telugu"
                      ? "bnsp78-telugu"
                      : selectedLanguage === "Hindi"
                      ? "bnsp78-telugu"
                      : "bnsp78"
                  }
                >
                  {selectedLanguage === "English"
                    ? `
    Similarly, a lot of offences, such as rape, have still been gendered, 
    wherein only a woman can be a victim. This excludes transgenders from availing themselves of 
    protection under various sexual offences, leaving their inclusion under Section 2(10) superficial.`
                    : selectedLanguage === "Telugu"
                    ? `అదేవిధంగా, అత్యాచారం వంటి చాలా నేరాలు ఇప్పటికీ లింగభేదం చేయబడ్డాయి, 
    ఇందులో ఒక మహిళ మాత్రమే బాధితురాలు కావచ్చు. ఇది లింగమార్పిడి చేయని వ్యక్తులు తమను తాము పొందకుండా మినహాయిస్తుంది 
    వివిధ లైంగిక నేరాల కింద రక్షణ, సెక్షన్ 2(10) కింద వాటిని చేర్చడం ఉపరితలం.`
                    : `इसी तरह, बलात्कार जैसे बहुत से अपराध अभी भी लिंग आधारित हैं, 
    जिसमें सिर्फ एक महिला ही शिकार हो सकती है. यह ट्रांसजेंडरों को इसका लाभ उठाने से रोकता है 
    विभिन्न यौन अपराधों के तहत सुरक्षा, धारा 2(10) के तहत उन्हें शामिल करना सतही है।`}
                </p>
                <p
                  className={
                    selectedLanguage === "Telugu"
                      ? "bnsp78-telugu"
                      : selectedLanguage === "Hindi"
                      ? "bnsp78-telugu"
                      : "bnsp78"
                  }
                >
                  {selectedLanguage === "English"
                    ? `However, it cannot be said that gender neutrality in the context of victims was not taken into consideration at all since, under Section 96, the BNS uses the word child, replacing the words minor girls in the erstwhile Section 366A of the IPC.`
                    : selectedLanguage === "Telugu"
                    ? `అయితే, సెక్షన్ 96 ప్రకారం, IPC యొక్క పూర్వపు సెక్షన్ 366Aలోని మైనర్ బాలికల పదాల స్థానంలో BNS చైల్డ్ అనే పదాన్ని ఉపయోగిస్తుంది కాబట్టి, బాధితుల సందర్భంలో లింగ తటస్థతను పరిగణనలోకి తీసుకోలేదని చెప్పలేము.`
                    : "हालाँकि, यह नहीं कहा जा सकता है कि पीड़ितों के संदर्भ में लिंग तटस्थता पर बिल्कुल भी ध्यान नहीं दिया गया था, क्योंकि धारा 96 के तहत, बीएनएस आईपीसी की पूर्ववर्ती धारा 366 ए में नाबालिग लड़कियों के शब्द की जगह बच्चा शब्द का उपयोग करता है।"}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Snatching as a Separate Offence"
                    : selectedLanguage === "Telugu"
                    ? "స్నాచింగ్ అనేది ప్రత్యేక నేరంగా పరిగణించబడుతుంది"
                    : "छीनना एक अलग अपराध के रूप में"}
                </h4>
                <p
                  className={
                    selectedLanguage === "Telugu" ? "bnsp78-telugu" : "bnsp78"
                  }
                >
                  {selectedLanguage === "English"
                    ? ` Section 304 of the BNS provides, for the first time, snatching as an offence distinct from theft. 
    Independent reports suggest that snatching is a high-frequency crime, reportedly[6] being conducted more
     than 5000 times per day in Delhi alone. It is not only based on frequency, but it also delineates 
     from regular theft in many ways, which justifies its separation. Snatching is a subset of theft 
     wherein movable property is taken by force or quickness of action from a person. Unlike theft, 
     where the accused may employ deceitful means and take away property even without the knowledge 
     of the person who owns it, snatching always involves the victim taking cognizance of the action
      at the time of commission itself,and it may even be accompanied with hurt or violence in order
       to give effect to the snatching. The maximum punishment for snatching has also been set at three
        years instead of seven years for theft.`
                    : selectedLanguage === "Telugu"
                    ? `BNS యొక్క సెక్షన్ 304, మొదటిసారిగా, దొంగతనం నుండి భిన్నమైన నేరంగా స్నాచింగ్‌ని అందిస్తుంది. 
    స్వతంత్ర నివేదికలు స్నాచింగ్ అనేది అధిక-ఫ్రీక్వెన్సీ నేరమని సూచిస్తున్నాయి, నివేదించబడిన[6] ఎక్కువగా నిర్వహించబడుతున్నాయి
     ఒక్క ఢిల్లీలోనే రోజుకు 5000 సార్లు. ఇది ఫ్రీక్వెన్సీ ఆధారంగా మాత్రమే కాకుండా, ఇది వివరిస్తుంది 
     అనేక విధాలుగా సాధారణ దొంగతనం నుండి, దాని విభజనను సమర్థిస్తుంది. స్నాచింగ్ అనేది దొంగతనం యొక్క ఉపసమితి 
     ఒక వ్యక్తి నుండి బలవంతంగా లేదా త్వరిత చర్య ద్వారా కదిలే ఆస్తి తీసుకోబడుతుంది. దొంగతనం కాకుండా, 
     నిందితుడు మోసపూరిత మార్గాలను ఉపయోగించుకోవచ్చు మరియు వారికి తెలియకుండానే ఆస్తిని తీసుకోవచ్చు 
     దానిని కలిగి ఉన్న వ్యక్తి యొక్క, స్నాచింగ్‌లో ఎల్లప్పుడూ బాధితుడు చర్య గురించి తెలుసుకోవడం జరుగుతుంది
      కమీషన్ సమయంలోనే,  మరియు అది క్రమంలో గాయం లేదా హింసతో కూడి ఉండవచ్చు
       స్నాచింగ్‌కు ప్రభావం చూపడానికి. స్నాచింగ్‌కు గరిష్ట శిక్షను కూడా మూడుగా నిర్ణయించారు
        దొంగతనానికి ఏడేళ్ల బదులు సంవత్సరాలు.`
                    : `बीएनएस की धारा 304, पहली बार, चोरी से अलग अपराध के रूप में छीनने का प्रावधान करती है। 
    स्वतंत्र रिपोर्टों से पता चलता है कि स्नैचिंग एक उच्च आवृत्ति वाला अपराध है, कथित तौर पर [6] अधिक बार किया जा रहा है
     अकेले दिल्ली में प्रति दिन 5000 से अधिक बार। यह न केवल आवृत्ति पर आधारित है, बल्कि यह रेखांकन भी करता है 
     कई मायनों में नियमित चोरी से, जो इसके अलगाव को उचित ठहराता है। छीनना चोरी का एक उपसमूह है 
     जिसमें चल संपत्ति किसी व्यक्ति से बलपूर्वक या कार्रवाई की शीघ्रता से ली जाती है। चोरी के विपरीत, 
     जहां आरोपी धोखेबाज तरीकों का इस्तेमाल कर सकता है और जानकारी के बिना भी संपत्ति छीन सकता है 
     जिस व्यक्ति का यह मालिक है, छीनने में हमेशा पीड़ित को कार्रवाई का संज्ञान लेना शामिल होता है
      कमीशन के समय ही, और इसके साथ चोट या हिंसा भी हो सकती है
       छीनाझपटी को प्रभाव देने के लिए. स्नैचिंग के लिए अधिकतम सज़ा भी तीन निर्धारित की गई है
        चोरी के लिए सात वर्ष के स्थान पर वर्ष।`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Provision Related to Mob Lynching"
                    : selectedLanguage === "Telugu"
                    ? "మాబ్ లిన్చింగ్‌కు సంబంధించిన నిబంధన"
                    : "मॉब लिंचिंग से संबंधित प्रावधान"}{" "}
                </h4>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `India has witnessed various cases[7] of deaths caused by groups of people motivated
     by religion and caste, among other factors. Specific data related to mob lynchings 
     in particular is difficult to obtain, primarily because the National Crime Records 
     Bureau does not maintain any, combined with the fact that police and public order are
      State subjects, for which no centralised data is available[8].`
                    : selectedLanguage === "Telugu"
                    ? `ప్రేరేపిత వ్యక్తుల సమూహాల వల్ల సంభవించే అనేక మరణాల[7] కేసులను భారతదేశం చూసింది
     మతం మరియు కులం ద్వారా, ఇతర కారకాలతో పాటు. మాబ్ లిన్చింగ్‌లకు సంబంధించిన నిర్దిష్ట డేటా 
     ముఖ్యంగా నేషనల్ క్రైమ్ రికార్డ్స్ కారణంగా పొందడం కష్టం 
     బ్యూరో ఏదీ నిర్వహించదు, పోలీసు మరియు పబ్లిక్ ఆర్డర్ అనే వాస్తవంతో కలిపి
      రాష్ట్ర సబ్జెక్ట్‌లు, వీటికి కేంద్రీకృత డేటా అందుబాటులో లేదు[8].
`
                    : `भारत में प्रेरित लोगों के समूहों के कारण होने वाली मौतों के विभिन्न मामले [7] देखे गए हैं
     अन्य कारकों के अलावा धर्म और जाति के आधार पर। मॉब लिंचिंग से संबंधित विशिष्ट डेटा 
     विशेष रूप से राष्ट्रीय अपराध रिकॉर्ड प्राप्त करना कठिन है 
     ब्यूरो इस तथ्य के साथ संयुक्त रूप से पुलिस और सार्वजनिक व्यवस्था का कोई रखरखाव नहीं करता है
      राज्य के विषय, जिनके लिए कोई केंद्रीकृत डेटा उपलब्ध नहीं है[8]।`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `However, through an amendment adding to the provision of murder under Section 103 of the BNS,
     any murder committed by a group of five or more people, specifically based on conditions like
      religion, caste or community, place of birth, personal belief, etc., is now distinctly punishable 
      with death or life imprisonment with a fine, just like how a murder is punished. This is a 
      breakthrough addition to the BNS in light of the incidents of lynching that have been surfacing
       over the years and is expected to act as a potent deterrent against any such incidents in the future.`
                    : selectedLanguage === "Telugu"
                    ? `అయితే, BNS సెక్షన్ 103 కింద హత్యా నిబంధనకు జోడించిన సవరణ ద్వారా,
     ఐదు లేదా అంతకంటే ఎక్కువ మంది వ్యక్తుల సమూహం చేసిన ఏదైనా హత్య, ప్రత్యేకంగా వంటి పరిస్థితుల ఆధారంగా
      మతం, కులం లేదా సంఘం, పుట్టిన ప్రదేశం, వ్యక్తిగత నమ్మకం మొదలైనవి ఇప్పుడు స్పష్టంగా శిక్షార్హమైనవి 
      ఒక హత్యకు ఎలా శిక్షించబడుతుందో అలాగే మరణశిక్ష లేదా జరిమానాతో పాటు జీవిత ఖైదు. ఇది ఎ 
      వెలుగుచూస్తున్న హత్యల సంఘటనల వెలుగులో BNSకి పురోగతి అదనంగా
       సంవత్సరాల తరబడి మరియు భవిష్యత్తులో అలాంటి సంఘటనలు జరగకుండా శక్తివంతమైన నిరోధకంగా పనిచేస్తుందని భావిస్తున్నారు.`
                    : `हालाँकि, एक संशोधन के माध्यम से बीएनएस की धारा 103 के तहत हत्या के प्रावधान को जोड़ा गया।
     पाँच या अधिक लोगों के समूह द्वारा की गई कोई भी हत्या, विशेष रूप से जैसी स्थितियों पर आधारित
      धर्म, जाति या समुदाय, जन्म स्थान, व्यक्तिगत आस्था आदि अब स्पष्ट रूप से दंडनीय है 
      जुर्माने के साथ मृत्युदंड या आजीवन कारावास, ठीक वैसे ही जैसे हत्या की सजा दी जाती है। यह एक है 
      लिंचिंग की सामने आ रही घटनाओं के आलोक में बीएनएस में बड़ी सफलता मिली है
       वर्षों से और भविष्य में ऐसी किसी भी घटना के खिलाफ एक शक्तिशाली निवारक के रूप में कार्य करने की उम्मीद है।`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `Grievous hurt caused by a mob of five or more people has also been punished separately
     under the provision of Section 117(4) of the BNS, solidifying the resolve against mob justice.`
                    : selectedLanguage === "Telugu"
                    ? `ఐదుగురు లేదా అంతకంటే ఎక్కువ మంది వ్యక్తుల గుంపు వల్ల కలిగే తీవ్రమైన గాయం కూడా విడిగా శిక్షించబడింది
     BNS యొక్క సెక్షన్ 117(4) ప్రకారం, మూకుమ్మడి న్యాయానికి వ్యతిరేకంగా సంకల్పాన్ని పటిష్టం చేస్తుంది.`
                    : `पांच या अधिक लोगों की भीड़ द्वारा पहुंचाई गई गंभीर चोट के लिए भी अलग से सजा दी गई है
     बीएनएस की धारा 117(4) के प्रावधान के तहत, भीड़ न्याय के खिलाफ संकल्प को मजबूत करना।`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? `Removal of Certain Language and Provisions Removal of Adultery`
                    : selectedLanguage === "Telugu"
                    ? `నిర్దిష్ట భాష మరియు నిబంధనల తొలగింపు వ్యభిచారం యొక్క తొలగింపు`
                    : `कुछ भाषा और प्रावधानों को हटाना व्यभिचार का निवारण`}
                </h4>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `In conformity with a seminal decision[9] of the Hon’ble Supreme Court of India, which decriminalised 
        the offence of adultery as given under Section 497 of the IPC, the BNS completely removed the 
        provision. This judgment was based on the Hon’ble Supreme Court’s observation that the continuation
         of adultery as a crime is a direct interference with the personal lives of individuals. The organs 
         of the government must distance themselves from how individuals make personal choices, according to
          the opinion of the Hon’ble Supreme Court.`
                    : selectedLanguage === "Telugu"
                    ? `గౌరవనీయమైన సుప్రీం కోర్ట్ ఆఫ్ ఇండియా యొక్క ప్రాథమిక నిర్ణయానికి[9] అనుగుణంగా, ఇది నేరం కాదు 
        IPC యొక్క సెక్షన్ 497 కింద ఇచ్చిన వ్యభిచారం నేరం, BNS పూర్తిగా తొలగించబడింది 
        నిబంధన. ఈ తీర్పు కొనసాగింపునకు గౌరవనీయమైన సుప్రీంకోర్టు పరిశీలనపై ఆధారపడింది
         వ్యభిచారం నేరంగా వ్యక్తుల వ్యక్తిగత జీవితాల్లో ప్రత్యక్ష జోక్యం. అవయవాలు 
         వ్యక్తులు వ్యక్తిగత ఎంపికలను ఎలా తీసుకుంటారనే దాని నుండి ప్రభుత్వం తమను తాము దూరం చేసుకోవాలి
          గౌరవనీయమైన సుప్రీంకోర్టు అభిప్రాయం.`
                    : `भारत के माननीय सर्वोच्च न्यायालय के एक मौलिक निर्णय[9] के अनुरूप, जिसने अपराधमुक्त कर दिया 
        आईपीसी की धारा 497 के तहत दिए गए व्यभिचार के अपराध को बीएनएस ने पूरी तरह से हटा दिया 
        प्रावधान। यह निर्णय माननीय सर्वोच्च न्यायालय की निरंतरता पर आधारित था
         व्यभिचार को अपराध मानना ​​व्यक्तियों के निजी जीवन में सीधा हस्तक्षेप है। अंग 
         सरकार को इस बात से दूरी बनानी चाहिए कि व्यक्ति व्यक्तिगत चुनाव कैसे करते हैं
          माननीय सर्वोच्च न्यायालय की राय.`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? ` Various opinions suggest that adultery should be reintroduced in
         the BNS as an offence and should be gender neutral in nature. To the contrary, 
         the dissenting opinion suggests that it is a rather outdated position to consider marriage 
         to be sacred and should only be considered as a contract between individuals, which, if broken, 
         gives rise to civil remedies.`
                    : selectedLanguage === "Telugu"
                    ? `వ్యభిచారాన్ని మళ్లీ ప్రవేశపెట్టాలని వివిధ అభిప్రాయాలు సూచిస్తున్నాయి
         BNS ఒక నేరం మరియు స్వభావంలో లింగ తటస్థంగా ఉండాలి. దీనికి విరుద్ధంగా, 
         అసమ్మతి అభిప్రాయం వివాహాన్ని పరిగణనలోకి తీసుకోవడం చాలా కాలం చెల్లిన స్థానం అని సూచిస్తుంది 
         పవిత్రమైనది మరియు వ్యక్తుల మధ్య ఒక ఒప్పందంగా మాత్రమే పరిగణించాలి, ఇది విచ్ఛిన్నమైతే, 
         పౌర నివారణలకు దారి తీస్తుంది.`
                    : `विभिन्न मतों का सुझाव है कि व्यभिचार को फिर से शुरू किया जाना चाहिए
         बीएनएस को एक अपराध माना जाए और इसकी प्रकृति लिंग-तटस्थ होनी चाहिए। इसके विपरीत, 
         असहमतिपूर्ण राय से पता चलता है कि विवाह पर विचार करना एक पुरानी स्थिति है 
         पवित्र होना और इसे केवल व्यक्तियों के बीच एक अनुबंध माना जाना चाहिए, जो अगर टूट जाता है, 
         नागरिक उपचारों को जन्म देता है।`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? `Non-Reproduction of Section 377 of the IPC`
                    : selectedLanguage === "Telugu"
                    ? `IPC సెక్షన్ 377ని పునరుత్పత్తి చేయకపోవడం`
                    : `आईपीसी की धारा 377 का गैर-पुनरुत्पादन`}
                </h4>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `In 2018, a landmark judgment[10] of the Hon’ble Supreme Court of India struck down
         the provision of Section 377, which punished acts of consensual sexual intercourse
          between adults. The Hon’ble Court considered that the provision in question was a
           grave violation of Article 19(1)(a) of the Constitution[11], which guarantees all 
           citizens a fundamental right to freedom of expression[12]. However, the remainder of 
           the provision was kept in force, pertaining to bestiality, sodomy, etc., as they are 
           separate offences within the same section, having no link with the sub-section in contention.`
                    : selectedLanguage === "Telugu"
                    ? `2018లో, గౌరవనీయులైన సుప్రీం కోర్ట్ ఆఫ్ ఇండియా యొక్క ఒక మైలురాయి తీర్పు[10] కొట్టివేసింది
         సెక్షన్ 377 యొక్క నిబంధన, ఏకాభిప్రాయ లైంగిక సంపర్క చర్యలకు శిక్ష విధించింది
          పెద్దల మధ్య. గౌరవనీయమైన న్యాయస్థానం ప్రశ్నలోని నిబంధనను పరిగణించింది a
           రాజ్యాంగంలోని ఆర్టికల్ 19(1)(ఎ)[11] యొక్క తీవ్ర ఉల్లంఘన, ఇది అందరికీ హామీ ఇస్తుంది 
           భావప్రకటనా స్వేచ్ఛకు పౌరులకు ప్రాథమిక హక్కు[12]. అయితే, మిగిలినవి 
           పశుత్వం, సోడమీ మొదలైన వాటికి సంబంధించిన నిబంధన అమలులో ఉంచబడింది 
           ఒకే సెక్షన్‌లోని ప్రత్యేక నేరాలు, వివాదంలోని సబ్ సెక్షన్‌తో ఎలాంటి లింక్‌లు లేవు.`
                    : `2018 में, भारत के माननीय सर्वोच्च न्यायालय के एक ऐतिहासिक फैसले [10] ने इसे रद्द कर दिया
         धारा 377 का प्रावधान, जो सहमति से संभोग के कृत्यों को दंडित करता है
          वयस्कों के बीच. माननीय न्यायालय ने माना कि विचाराधीन प्रावधान एक था
           संविधान के अनुच्छेद 19(1)(ए) का गंभीर उल्लंघन[11], जो सभी की गारंटी देता है 
           नागरिकों को अभिव्यक्ति की स्वतंत्रता का मौलिक अधिकार है[12]। हालाँकि, शेष 
           पाशविकता, लौंडेबाज़ी आदि से संबंधित प्रावधानों को यथावत लागू रखा गया था 
           एक ही धारा के अंतर्गत अलग-अलग अपराध, जिनका विवाद में उप-धारा से कोई संबंध नहीं है।`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `However, the BNS has completely removed all the provisions of Section 377 
        of the IPC, even the ones that have not been expressly declared to be unconstitutional, 
        as discussed above.`
                    : selectedLanguage === "Telugu"
                    ? `అయితే, BNS సెక్షన్ 377లోని అన్ని నిబంధనలను పూర్తిగా తొలగించింది 
        IPC యొక్క, రాజ్యాంగ విరుద్ధమని స్పష్టంగా ప్రకటించబడనివి కూడా, 
        పైన చర్చించినట్లు.`
                    : `हालाँकि, BNS ने धारा 377 के सभी प्रावधानों को पूरी तरह से हटा दिया है 
        आईपीसी की, यहां तक ​​कि वे भी जिन्हें स्पष्ट रूप से असंवैधानिक घोषित नहीं किया गया है, 
        जैसा कि ऊपर चर्चा की गई है।`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? `Removal of Sedition`
                    : selectedLanguage === "Telugu"
                    ? `దేశద్రోహ తొలగింపు`
                    : `राजद्रोह को हटाना`}{" "}
                </h4>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `One of the most significant changes in the BNS is the removal of the colonial law of sedition,
   as was enshrined under Section 124A of the IPC. However, it must be noted that Section 152 of
    the BNS retains the essence of Section 124A, wording it in a manner that has been described as 
    vague in itself[13]. This removal comes after the Law Commission, in its 2023 Report[14] believed
     sedition, subject to certain amendments based on a landmark 1962 case law[15], should be retained
      in Indian criminology. The phrases subversive activities and endangers sovereignty in Section 152
       of the BNS have not been specifically defined, which may render the application of this Section 
       highly problematic, wherein an individual may be arrested or investigated based on a misinterpretation 
       of the BNS, which will only be rectified by the judiciary through a case before it. This, therefore,
        has a lot of potential to curtail the liberties of vast multitudes of people- before the new law
         actually has well defined limits supported by judicial decisions.`
                    : selectedLanguage === "Telugu"
                    ? `BNSలో అత్యంత ముఖ్యమైన మార్పులలో ఒకటి వలసవాద విద్రోహ చట్టాన్ని తొలగించడం,
   IPC సెక్షన్ 124A కింద పొందుపరచబడింది. అయితే, సెక్షన్ 152 ఆఫ్ అని గమనించాలి
    BNS సెక్షన్ 124A యొక్క సారాంశాన్ని నిలుపుకుంది, దానిని ఈ విధంగా వర్ణించబడింది 
    దానిలోనే అస్పష్టంగా ఉంది[13]. లా కమిషన్ తన 2023 నివేదిక[14]లో విశ్వసించిన తర్వాత ఈ తొలగింపు జరిగింది
     ల్యాండ్‌మార్క్ 1962 కేసు చట్టం[15] ఆధారంగా కొన్ని సవరణలకు లోబడి దేశద్రోహాన్ని కొనసాగించాలి
      భారతీయ నేర శాస్త్రంలో. సెక్షన్ 152లోని పదబంధాలు విధ్వంసకర కార్యకలాపాలు మరియు సార్వభౌమత్వాన్ని ప్రమాదంలో పడేస్తాయి
       BNS యొక్క నిర్దిష్టంగా నిర్వచించబడలేదు, ఇది ఈ విభాగం యొక్క అనువర్తనాన్ని అందించవచ్చు 
       చాలా సమస్యాత్మకమైనది, ఇందులో ఒక వ్యక్తిని తప్పుగా అర్థం చేసుకోవడం ఆధారంగా అరెస్టు చేయవచ్చు లేదా దర్యాప్తు చేయవచ్చు 
       BNS యొక్క, న్యాయవ్యవస్థ దాని ముందు ఉన్న కేసు ద్వారా మాత్రమే సరిదిద్దబడుతుంది. ఇది, కాబట్టి,
        కొత్త చట్టానికి ముందు విస్తారమైన ప్రజల స్వేచ్ఛను తగ్గించే సామర్ధ్యం చాలా ఉంది
         వాస్తవానికి న్యాయపరమైన నిర్ణయాల ద్వారా బాగా నిర్వచించబడిన పరిమితులను కలిగి ఉంది.`
                    : `बीएनएस में सबसे महत्वपूर्ण परिवर्तनों में से एक राजद्रोह के औपनिवेशिक कानून को हटाना है,
   जैसा कि आईपीसी की धारा 124ए के तहत निहित था। हालाँकि, यह ध्यान दिया जाना चाहिए कि धारा 152
    बीएनएस धारा 124ए के सार को बरकरार रखता है, इसे इस तरह से शब्दों में वर्णित करता है जैसा कि वर्णित किया गया है 
    अपने आप में अस्पष्ट[13]। यह निष्कासन विधि आयोग द्वारा अपनी 2023 रिपोर्ट[14] में विश्वास किए जाने के बाद हुआ है
     1962 के ऐतिहासिक मामले के कानून[15] पर आधारित कुछ संशोधनों के अधीन राजद्रोह को बरकरार रखा जाना चाहिए
      भारतीय अपराधशास्त्र में. धारा 152 में विध्वंसक गतिविधियाँ और संप्रभुता को खतरे में डालने वाले वाक्यांश
       बीएनएस को विशेष रूप से परिभाषित नहीं किया गया है, जो इस धारा के अनुप्रयोग को प्रस्तुत कर सकता है 
       अत्यधिक समस्याग्रस्त, जिसमें गलत व्याख्या के आधार पर किसी व्यक्ति को गिरफ्तार किया जा सकता है या जांच की जा सकती है 
       बीएनएस का, जिसे न्यायपालिका द्वारा उसके समक्ष एक मामले के माध्यम से ही ठीक किया जाएगा। अत: यह
        नए कानून से पहले इसमें बड़ी संख्या में लोगों की स्वतंत्रता को कम करने की काफी क्षमता है
         वास्तव में न्यायिक निर्णयों द्वारा समर्थित अच्छी तरह से परिभाषित सीमाएँ हैं।`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? `Other Relevant Additions and Alterations`
                    : selectedLanguage === "Telugu"
                    ? `ఇతర సంబంధిత చేర్పులు మరియు మార్పులు`
                    : `अन्य प्रासंगिक परिवर्धन और परिवर्तन`}
                </h4>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `Organised crime has been defined under Section 111 of the BNS, which includes certain
         recognised offences such as kidnapping, land grabbing, etc., among others, committed as
          a part of a syndicate, or on behalf of one.`
                    : selectedLanguage === "Telugu"
                    ? `BNS యొక్క సెక్షన్ 111 ప్రకారం వ్యవస్థీకృత నేరాలు నిర్వచించబడ్డాయి, ఇందులో కొన్ని ఉన్నాయి
         కిడ్నాప్, భూకబ్జా, మొదలైన నేరాలను గుర్తించింది
          సిండికేట్‌లో ఒక భాగం లేదా ఒకరి తరపున.`
                    : `संगठित अपराध को बीएनएस की धारा 111 के तहत परिभाषित किया गया है, जिसमें कुछ शामिल हैं
         अपहरण, भूमि कब्ज़ा इत्यादि जैसे अन्य अपराधों को मान्यता दी गई है
          किसी सिंडिकेट का एक हिस्सा, या किसी एक की ओर से।`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `Various definitions have been altered to clarify certain intentions, such as in Section
           43 of the BNS,  the word night given under Section 103 of the IPC has been replaced by 
           the words after sunset and before sunrise. Further, under Section 41, fire has been expanded 
           to include mischief by fire or any explosive substance.`
                    : selectedLanguage === "Telugu"
                    ? `సెక్షన్ వంటి నిర్దిష్ట ఉద్దేశాలను స్పష్టం చేయడానికి వివిధ నిర్వచనాలు మార్చబడ్డాయి
           BNS యొక్క 43, IPC సెక్షన్ 103 కింద ఇచ్చిన రాత్రి అనే పదం భర్తీ చేయబడింది 
           సూర్యాస్తమయం తర్వాత మరియు సూర్యోదయానికి ముందు పదాలు. ఇంకా, సెక్షన్ 41 కింద, అగ్నిని విస్తరించారు 
           అగ్ని లేదా ఏదైనా పేలుడు పదార్ధం ద్వారా అల్లర్లు చేర్చడానికి.`
                    : `कुछ इरादों को स्पष्ट करने के लिए विभिन्न परिभाषाएँ बदल दी गई हैं, जैसे कि अनुभाग में
           बीएनएस के 43 में आईपीसी की धारा 103 के तहत दिए गए रात शब्द को बदल दिया गया है 
           सूर्यास्त के बाद और सूर्योदय से पहले के शब्द. इसके अलावा, धारा 41 के तहत, आग का विस्तार किया गया है 
           आग या किसी विस्फोटक पदार्थ से होने वाली शरारत को शामिल करना।`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `All inchoate offences, namely conspiracy, attempt, and abetment, have been incorporated
   under the same chapter. Under the IPC, they were given in various sections present in different 
   Chapters of the Code.`
                    : selectedLanguage === "Telugu"
                    ? `కుట్ర, ప్రయత్నం మరియు ప్రేరేపణ వంటి అన్ని నేరాలు చేర్చబడ్డాయి
   అదే అధ్యాయం కింద. IPC కింద, వారు వివిధ విభాగాలలో వివిధ విభాగాలలో ఇవ్వబడ్డారు 
   కోడ్ యొక్క అధ్యాయాలు.`
                    : `सभी अचूक अपराध, अर्थात् षडयंत्र, प्रयास और उकसावे को शामिल कर लिया गया है
   उसी अध्याय के अंतर्गत. आईपीसी के तहत ये अलग-अलग धाराओं में दिए गए 
   संहिता के अध्याय.`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `Section 69 of the BNS is a relevant addition as it introduces an offence 
  that was not present in the IPC. The offence of practicing deceit in order to effect sexual intercourse 
  not amounting to rape has been considered a punishable offence under Section 69. Here, deceitful means are
   inclusive of false promises and inducements.`
                    : selectedLanguage === "Telugu"
                    ? `BNS యొక్క సెక్షన్ 69 ఒక నేరాన్ని పరిచయం చేస్తున్నందున సంబంధిత అదనంగా ఉంటుంది 
  అది ఐపీసీలో లేదు. లైంగిక సంపర్కాన్ని ప్రభావితం చేయడానికి మోసం చేయడం నేరం 
  సెక్షన్ 69 ప్రకారం అత్యాచారం చేయకపోవడం శిక్షార్హమైన నేరంగా పరిగణించబడుతుంది. ఇక్కడ, మోసపూరిత మార్గాలు
   తప్పుడు వాగ్దానాలు మరియు ప్రేరణలతో సహా.`
                    : `बीएनएस की धारा 69 एक प्रासंगिक अतिरिक्त है क्योंकि यह एक अपराध का परिचय देती है 
  जो आईपीसी में मौजूद नहीं था. संभोग को प्रभावित करने के लिए छल करने का अपराध 
  धारा 69 के तहत बलात्कार को दंडनीय अपराध नहीं माना गया है। यहां, धोखे का मतलब है
   इसमें झूठे वादे और प्रलोभन शामिल हैं।`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `The provision of Section 376DA of the IPC that dealt with gang rape has been expanded
   and incorporated in the BNS in the form of Section 70(2), wherein a major change is the
    alteration of the words from under the age of sixteen to under the age of eighteen, thereby 
    expanding the scope of the offence by bringing more cases under its purview.`
                    : selectedLanguage === "Telugu"
                    ? `సామూహిక అత్యాచారానికి సంబంధించిన IPC సెక్షన్ 376DA యొక్క నిబంధనను విస్తరించారు
   మరియు BNSలో సెక్షన్ 70(2) రూపంలో పొందుపరచబడింది, దీనిలో ఒక ప్రధాన మార్పు
    పదహారేళ్ళ లోపు నుండి పద్దెనిమిది సంవత్సరాల లోపు వరకు పదాల మార్పు, తద్వారా 
    మరిన్ని కేసులను దాని పరిధిలోకి తీసుకురావడం ద్వారా నేరం యొక్క పరిధిని విస్తరించడం.`
                    : `सामूहिक बलात्कार से संबंधित आईपीसी की धारा 376DA के प्रावधान का विस्तार किया गया है
   और धारा 70(2) के रूप में बीएनएस में शामिल किया गया, जिसमें एक बड़ा बदलाव है
    सोलह वर्ष से कम आयु से अठारह वर्ष से कम आयु तक शब्दों का परिवर्तन, जिससे 
    अधिक मामलों को इसके दायरे में लाकर अपराध के दायरे का विस्तार करना।`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `While punishments for various offenses have been significantly increased, one of the most 
  notable changes is the enhancement of the punishment for causing death by a rash or negligent act. 
  Previously covered under Section 304A IPC with a maximum sentence of two years, this offense now 
  carries a penalty of up to five years under Section 106(1) of the BNS.`
                    : selectedLanguage === "Telugu"
                    ? `వివిధ నేరాలకు శిక్షలు గణనీయంగా పెరిగినప్పటికీ, వాటిలో ఒకటి 
  గుర్తించదగిన మార్పులు ఏమిటంటే, దద్దుర్లు లేదా నిర్లక్ష్యపు చర్య ద్వారా మరణానికి కారణమైనందుకు శిక్షను పెంచడం. 
  గతంలో సెక్షన్ 304A IPC కింద గరిష్టంగా రెండేళ్ల జైలు శిక్ష విధించబడింది, ఇప్పుడు ఈ నేరం 
  BNS సెక్షన్ 106(1) ప్రకారం ఐదు సంవత్సరాల వరకు జరిమానా విధించబడుతుంది.`
                    : `जबकि विभिन्न अपराधों के लिए सज़ाओं में काफी वृद्धि की गई है, जो सबसे अधिक में से एक है 
  उल्लेखनीय परिवर्तन जल्दबाजी या लापरवाही से की गई मौत के लिए सजा में वृद्धि है। 
  पहले यह अपराध आईपीसी की धारा 304ए के तहत आता था, जिसमें अधिकतम दो साल की सजा होती थी, अब यह अपराध है 
  बीएनएस की धारा 106(1) के तहत पांच साल तक की सजा का प्रावधान है।`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `Section 113 of the BNS covers terrorist acts, which are a new addition to the purview. 
  Mostly inspired by the provisions of the Unlawful Activities (Prevention) Act, 1967 
  (hereinafter referred to as the “UAPA”), Section 113 introduces fines, the limits of
   which are specifically mentioned, across various sub-sections, which are absent under
    the scheme of the UAPA.`
                    : selectedLanguage === "Telugu"
                    ? `BNS యొక్క సెక్షన్ 113 తీవ్రవాద చర్యలను కవర్ చేస్తుంది, ఇవి పరిధికి కొత్తగా జోడించబడ్డాయి. 
  చట్టవిరుద్ధమైన కార్యకలాపాల (నివారణ) చట్టం, 1967లోని నిబంధనల ద్వారా ఎక్కువగా ప్రేరణ పొందింది 
  (ఇకపై "UAPA"గా సూచిస్తారు), సెక్షన్ 113 జరిమానాలు, పరిమితులను పరిచయం చేస్తుంది
   వివిధ ఉప-విభాగాలలో ప్రత్యేకంగా పేర్కొనబడినవి, క్రింద లేనివి
    UAPA యొక్క పథకం.`
                    : `बीएनएस की धारा 113 आतंकवादी कृत्यों को कवर करती है, जो इस दायरे में एक नया अतिरिक्त है। 
  अधिकतर गैरकानूनी गतिविधियां (रोकथाम) अधिनियम, 1967 के प्रावधानों से प्रेरित 
  (इसके बाद इसे "यूएपीए" के रूप में संदर्भित किया गया है), धारा 113 में जुर्माना, की सीमाएं शामिल हैं
   जिनका विभिन्न उप-अनुभागों में विशेष रूप से उल्लेख किया गया है, जो नीचे अनुपस्थित हैं
    UAPA की योजना.`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `As a step towards curbing the spread of misinformation, the BNS also includes Section 353,
   which renders the making, publishing or circulating of false information backed with dishonest
    intention a punishable offence. Such a provision was not explicitly mentioned in the IPC, and 
    it supplements the functioning of other laws dedicated to the same goal.`
                    : selectedLanguage === "Telugu"
                    ? `తప్పుడు సమాచారం యొక్క వ్యాప్తిని అరికట్టడానికి ఒక దశగా, BNS సెక్షన్ 353ని కూడా కలిగి ఉంది,
   ఇది నిజాయితీ లేని తప్పుడు సమాచారాన్ని తయారు చేయడం, ప్రచురించడం లేదా ప్రసారం చేయడం
    శిక్షార్హమైన నేరంగా ఉద్దేశించబడింది. అటువంటి నిబంధన IPCలో స్పష్టంగా పేర్కొనబడలేదు మరియు 
    అదే లక్ష్యానికి అంకితమైన ఇతర చట్టాల పనితీరును ఇది భర్తీ చేస్తుంది.`
                    : `गलत सूचना के प्रसार को रोकने की दिशा में एक कदम के रूप में, बीएनएस में धारा 353 भी शामिल है,
   जो बेईमानी से समर्थित झूठी जानकारी बनाने, प्रकाशित करने या प्रसारित करने का प्रतिपादन करता है
    इरादा एक दंडनीय अपराध है. इस तरह के प्रावधान का आईपीसी में स्पष्ट रूप से उल्लेख नहीं किया गया था, और 
    यह समान लक्ष्य के लिए समर्पित अन्य कानूनों के कामकाज को पूरक बनाता है।`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? ` Under Section 337 of the BNS, which has incorporated the erstwhile offence of forgery of a 
  document as given under Section 446 of the IPC, now the forgery of Government issued documents,
   such as the Aadhar Card, or the Voter Identity Card is also in the ambit, thereby expanding the 
   scope of the offence.`
                    : selectedLanguage === "Telugu"
                    ? `BNS యొక్క సెక్షన్ 337 కింద, ఇది ఫోర్జరీ యొక్క పూర్వపు నేరాన్ని చేర్చింది 
  IPC యొక్క సెక్షన్ 446 కింద ఇచ్చిన పత్రం, ఇప్పుడు ప్రభుత్వం జారీ చేసిన పత్రాల ఫోర్జరీ,
   ఆధార్ కార్డ్, లేదా ఓటరు గుర్తింపు కార్డు వంటివి కూడా పరిధిలో ఉన్నాయి, తద్వారా విస్తరించడం 
   నేరం యొక్క పరిధి.`
                    : `बीएनएस की धारा 337 के तहत, जिसमें एक की जालसाजी के पूर्ववर्ती अपराध को शामिल किया गया है 
  आईपीसी की धारा 446 के तहत दिए गए दस्तावेज, अब सरकार द्वारा जारी दस्तावेजों की जालसाजी,
   जैसे कि आधार कार्ड, या मतदाता पहचान पत्र भी इसके दायरे में है, जिससे इसका विस्तार हो रहा है 
   अपराध का दायरा.`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? ` Mischief as an offence has been given specific pecuniary limits[16] in sub-sections (4) and (5) of Section
   324 of the BNS, wherein the amount of imprisonment increases as the value of the property destroyed 
   or converted increases.`
                    : selectedLanguage === "Telugu"
                    ? `అపరాధం అనేది సెక్షన్‌లోని ఉప-విభాగాలు (4) మరియు (5)లో నిర్దిష్ట ద్రవ్య పరిమితులు[16] ఇవ్వబడ్డాయి
   BNS యొక్క 324, ధ్వంసమైన ఆస్తి విలువతో జైలు శిక్ష మొత్తం పెరుగుతుంది 
   లేదా మార్చబడిన పెరుగుదల.`
                    : `अपराध के रूप में शरारत को धारा की उपधारा (4) और (5) में विशिष्ट आर्थिक सीमाएं दी गई हैं।
   बीएनएस की धारा 324, जिसमें नष्ट की गई संपत्ति के मूल्य के साथ कारावास की राशि बढ़ जाती है 
   या परिवर्तित वृद्धि.`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? ` Section 309 of the IPC, which had become redundant due to Section 115 of the Mental Healthcare Act, 2017,
   where a person attempting suicide was presumed to have done so under extreme stress and was thus exempt 
   from prosecution under Section 309 of the IPC, has been partially revived by the BNS under Section 226. 
   However, only cases where a person commits suicide with the proven intention of compelling or restraining 
   any public servant from performing their duties are covered.`
                    : selectedLanguage === "Telugu"
                    ? `మెంటల్ హెల్త్‌కేర్ యాక్ట్, 2017లోని సెక్షన్ 115 కారణంగా IPC యొక్క సెక్షన్ 309 అనవసరంగా మారింది,
   ఆత్మహత్యాయత్నానికి ప్రయత్నించే వ్యక్తి తీవ్ర ఒత్తిడితో అలా చేసి ఉంటాడని భావించి మినహాయింపు పొందారు 
   IPC యొక్క సెక్షన్ 309 కింద ప్రాసిక్యూషన్ నుండి, సెక్షన్ 226 ప్రకారం BNS ద్వారా పాక్షికంగా పునరుద్ధరించబడింది. 
   అయితే, ఒక వ్యక్తి బలవంతం లేదా నిరోధించడం అనే నిరూపితమైన ఉద్దేశ్యంతో ఆత్మహత్య చేసుకున్న సందర్భాలు మాత్రమే 
   ఏ ప్రభుత్వోద్యోగి అయినా వారి విధులను నిర్వర్తించకుండా కవర్ చేస్తారు.`
                    : `आईपीसी की धारा 309, जो मानसिक स्वास्थ्य देखभाल अधिनियम, 2017 की धारा 115 के कारण निरर्थक हो गई थी,
   जहां आत्महत्या का प्रयास करने वाले व्यक्ति को यह माना जाता था कि उसने अत्यधिक तनाव में ऐसा किया था और इस प्रकार उसे छूट दे दी गई थी 
   आईपीसी की धारा 309 के तहत अभियोजन से, बीएनएस द्वारा धारा 226 के तहत आंशिक रूप से पुनर्जीवित किया गया है। 
   हालाँकि, केवल ऐसे मामले जहां कोई व्यक्ति मजबूर करने या रोकने के सिद्ध इरादे से आत्महत्या करता है 
   किसी भी लोक सेवक को अपने कर्तव्यों का पालन करने से रोका जाता है।`}
                </p>

                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `The offence of kidnapping as envisaged in Section 137 of the BNS has removed the distinction between
   the age of minor boys and girls for the purposes of kidnapping and now includes the words ‘any child’ 
   which has been defined under 2(3) to mean ‘any person below the age of eighteen years.’ This has brought
    the kidnapping of boys aged between sixteen and eighteen into the ambit of the offence of kidnapping,
     which had been absent under Section 361 of the IPC.`
                    : selectedLanguage === "Telugu"
                    ? `BNS సెక్షన్ 137లో ఊహించిన విధంగా కిడ్నాప్ నేరం మధ్య వ్యత్యాసాన్ని తొలగించింది
   కిడ్నాప్ కోసం మైనర్ బాలురు మరియు బాలికల వయస్సు మరియు ఇప్పుడు 'ఏదైనా చైల్డ్' అనే పదాలు ఉన్నాయి 
   2(3) కింద 'పద్దెనిమిది సంవత్సరాల కంటే తక్కువ వయస్సు ఉన్న వ్యక్తి' అని నిర్వచించబడింది.
    పదహారు మరియు పద్దెనిమిది సంవత్సరాల మధ్య వయస్సు గల బాలురను కిడ్నాప్ చేయడం నేరం యొక్క పరిధిలోకి,
     ఇది IPC సెక్షన్ 361 ప్రకారం గైర్హాజరైంది.`
                    : `बीएनएस की धारा 137 में परिकल्पित अपहरण के अपराध ने बीच के अंतर को हटा दिया है
   अपहरण के प्रयोजनों के लिए नाबालिग लड़कों और लड़कियों की उम्र और अब इसमें 'कोई भी बच्चा' शब्द शामिल हैं 
   जिसे 2(3) के तहत परिभाषित किया गया है जिसका अर्थ है 'अठारह वर्ष से कम आयु का कोई भी व्यक्ति।'
    अपहरण के अपराध के दायरे में सोलह से अठारह वर्ष की आयु के लड़कों का अपहरण,
     जो आईपीसी की धारा 361 के तहत अनुपस्थित था।`}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? `Conclusion`
                    : selectedLanguage === "Telugu"
                    ? `తీర్మానం`
                    : `निष्कर्ष`}
                </h4>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `The introduction of the BNS, for the most part, is a positive decision to reinvent the IPC in 
  a manner that fits the current social climate. It has made various significant changes, removing
   laws that have colonial roots, which is archaic, and also certain provisions that hold no credible 
   ground in today’s legal scenario. It rightfully promotes principles like gender neutrality; however, 
   it does seem to fall short of properly incorporating them. The BNS has not acted upon various calls for
    decriminalisation of offences, particularly those made by the Committee on Draft National Policy on 
    Criminal Justice[17]. After its commencement and after the creation of new questions of law based on 
    its revised provisions, the citizenry will be able to identify its impact in a better manner.`
                    : selectedLanguage === "Telugu"
                    ? `BNS పరిచయం, చాలా వరకు, IPCని తిరిగి ఆవిష్కరించడానికి సానుకూల నిర్ణయం 
  ప్రస్తుత సామాజిక వాతావరణానికి సరిపోయే పద్ధతి. ఇది వివిధ ముఖ్యమైన మార్పులు చేసింది, తొలగించడం
   కలోనియల్ మూలాలను కలిగి ఉన్న చట్టాలు, ఇది పురాతనమైనది, అలాగే విశ్వసనీయత లేని కొన్ని నిబంధనలు 
   నేటి చట్టపరమైన దృష్టాంతంలో గ్రౌండ్. ఇది లింగ తటస్థత వంటి సూత్రాలను సరిగ్గా ప్రోత్సహిస్తుంది; అయితే, 
   వాటిని సరిగ్గా పొందుపరచడంలో లోపం కనిపిస్తోంది. BNS వివిధ పిలుపులపై చర్య తీసుకోలేదు
    నేరాల నిర్మూలన, ముఖ్యంగా ముసాయిదా జాతీయ విధానంపై కమిటీ చేసిన నేరాలు 
    క్రిమినల్ జస్టిస్[17]. దాని ప్రారంభమైన తర్వాత మరియు ఆధారంగా చట్టం యొక్క కొత్త ప్రశ్నలను సృష్టించిన తర్వాత 
    దాని సవరించిన నిబంధనలు, పౌరులు దాని ప్రభావాన్ని మెరుగైన పద్ధతిలో గుర్తించగలుగుతారు.`
                    : `बीएनएस की शुरूआत, अधिकांश भाग के लिए, आईपीसी को फिर से स्थापित करने का एक सकारात्मक निर्णय है 
  एक ऐसा तरीका जो वर्तमान सामाजिक माहौल के अनुकूल हो। इसमें कई महत्वपूर्ण बदलाव किए गए हैं, हटा दिए गए हैं
   ऐसे कानून जिनकी जड़ें औपनिवेशिक हैं, जो पुरातन हैं, और कुछ ऐसे प्रावधान भी हैं जो विश्वसनीय नहीं हैं 
   आज के कानूनी परिदृश्य में जमीन। यह लैंगिक तटस्थता जैसे सिद्धांतों को उचित रूप से बढ़ावा देता है; तथापि, 
   ऐसा प्रतीत होता है कि यह उन्हें उचित रूप से शामिल करने से चूक रहा है। बीएनएस ने विभिन्न मांगों पर कार्रवाई नहीं की है
    अपराधों का गैर-अपराधीकरण, विशेष रूप से राष्ट्रीय नीति के मसौदे पर समिति द्वारा किए गए अपराध 
    आपराधिक न्याय[17]. इसके प्रारंभ होने के बाद और कानून के नये प्रश्नों के निर्माण के बाद 
    इसके संशोधित प्रावधानों से नागरिक इसके प्रभाव को बेहतर तरीके से पहचान सकेंगे।`}
                </p>
              </div>

              <div class="columnN" style={{ backgroundColor: "#002369" }}>
                <div className="bottonh4">
                  <h4 className="h43">
                    {selectedLanguage === "English"
                      ? `The introduction of the BNS, for the most part, is a positive
     decision to reinvent the IPC in a manner that fits the current social 
     climate. It has made various significant changes, removing laws
      that have colonial roots, which is archaic, and also certain provisions 
      that hold no credible ground in today’s legal scenario.`
                      : selectedLanguage === "Telugu"
                      ? `BNS పరిచయం, చాలా వరకు సానుకూలమైనది
     ప్రస్తుత సామాజిక పరిస్థితులకు తగిన విధంగా IPCని పునరుద్ధరించాలనే నిర్ణయం 
     వాతావరణం. ఇది వివిధ ముఖ్యమైన మార్పులను చేసింది, చట్టాలను తీసివేసింది
      వలసవాద మూలాలను కలిగి ఉంటాయి, ఇది పురాతనమైనది మరియు కొన్ని నిబంధనలను కూడా కలిగి ఉంటుంది 
      నేటి చట్టపరమైన దృష్టాంతంలో విశ్వసనీయమైన మైదానాన్ని కలిగి ఉండదు.`
                      : `अधिकांश भाग के लिए, बीएनएस का परिचय सकारात्मक है
     वर्तमान सामाजिक व्यवस्था के अनुरूप आईपीसी को पुनः स्थापित करने का निर्णय 
     जलवायु। इसने कानूनों को हटाते हुए कई महत्वपूर्ण बदलाव किए हैं
      जिसकी जड़ें औपनिवेशिक हैं, जो पुरातन है, और कुछ प्रावधान भी हैं 
      जिसका आज के कानूनी परिदृश्य में कोई विश्वसनीय आधार नहीं है।`}{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="bns-bottom">
            {" "}
            Copyright © 2020 - 2021 All rights reserved | This application is
            made by <span className="contact-footer-spam">SGU</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BnsPage;
