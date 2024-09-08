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
import imgbnss from "../img/bnss.jpeg";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Bnss = () => {
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

  const handleClick1 = () => {
    window.location.href =
      "https://prsindia.org/files/bills_acts/bills_parliament/2023/Bharatiya_Nagarik_Suraksha_Sanhita,_2023.pdf";
  };

  const handleClick2 = () => {
    window.location.href =
      "https://prsindia.org/files/bills_acts/bills_parliament/2023/SC_Report_Bharatiya_Nagarik_Suraksha_Sanhita_2023.pdf";
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
              ? "Bharatiya Nagarik Suraksha Sanhita"
              : selectedLanguage === "Telugu"
              ? "భారతీయ నాగరిక్ సురక్ష సంహిత"
              : "भारतीय नागरिक सुरक्षा संहिता"}
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
                ? "Bharatiya Nagarik Suraksha Sanhita(BNSS) Monthly Digest- July 2024"
                : selectedLanguage === "Telugu"
                ? "భారతీయ నాగరిక్ సురక్ష సంహిత(BNSS) మంత్లీ డైజెస్ట్- జూలై 2024"
                : "भारतीय नागरिक सुरक्षा संहिता (बीएनएसएस) मासिक डाइजेस्ट- जुलाई 2024"}
            </p>
          </div>
          <div style={{ display: "flex" }} className="div1">
            <img src={imgbnss} alt="Description" style={{ width: "45%" }}></img>
            <div className="divbns1">
              <div className="h1div">
                <button className="btnff">
                  <FaFacebook
                    style={{ width: "30px", height: "30px" }}
                    className="iconf"
                  />
                </button>
                <button className="btntt">
                  <AiFillTwitterCircle
                    style={{ width: "35px", height: "35px" }}
                    className="iconf"
                  />
                </button>
                <button className="btnii">
                  <TiSocialLinkedinCircular
                    style={{ width: "40px", height: "40px" }}
                    className="iconf"
                  />
                </button>

                <h1 className="bnsSh1">
                  {selectedLanguage === "English"
                    ? `Bharatiya Nagarik Suraksha Sanhita(BNSS) Monthly Digest- July 2024`
                    : selectedLanguage === "Telugu"
                    ? "భారతీయ నాగరిక్ సురక్ష సంహిత(BNSS) మంత్లీ డైజెస్ట్- జూలై 2024"
                    : "भारतीय नागरिक सुरक्षा संहिता (बीएनएसएस) मासिक डाइजेस्ट- जुलाई 2024"}
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
                ? "Bharatiya Nagarik Suraksha Sanhita(BNSS), 2023"
                : selectedLanguage === "Telugu"
                ? "భారతీయ నాగరిక్ సురక్ష సంహిత(BNSS), 2023"
                : "भारतीय नागरिक सुरक्षा संहिता (बीएनएसएस), 2023"}
            </p>
          </div>
          <div>
            <p className="bnsp4">
              {selectedLanguage === "English"
                ? `The Bharatiya Nagarik Suraksha Sanhita (BNSS) Monthly Digest for July 2024 serves as a comprehensive resource aimed at providing updates, analyses, and insights into the ongoing developments surrounding the BNSS. The BNSS, a landmark legislative framework, has been instrumental in reshaping India's approach to citizen security, focusing on modernizing laws and enhancing the safety of its citizens.`
                : selectedLanguage === "Telugu"
                ? `జూలై 2024 కోసం భారతీయ నాగరిక్ సురక్ష సంహిత (BNSS) మంత్లీ డైజెస్ట్ BNSS చుట్టూ జరుగుతున్న పరిణామాలకు సంబంధించిన అప్‌డేట్‌లు, విశ్లేషణలు మరియు అంతర్దృష్టులను అందించే లక్ష్యంతో ఒక సమగ్ర వనరుగా పనిచేస్తుంది. BNSS, ఒక ల్యాండ్‌మార్క్ లెజిస్లేటివ్ ఫ్రేమ్‌వర్క్, పౌర భద్రతకు భారతదేశం యొక్క విధానాన్ని పునర్నిర్మించడంలో, చట్టాలను ఆధునీకరించడం మరియు దాని పౌరుల భద్రతను పెంచడంపై దృష్టి సారించడంలో కీలకపాత్ర పోషించింది.`
                : `जुलाई 2024 के लिए भारतीय नागरिक सुरक्षा संहिता (बीएनएसएस) मासिक डाइजेस्ट एक व्यापक संसाधन के रूप में कार्य करता है जिसका उद्देश्य बीएनएसएस के आसपास चल रहे विकास में अद्यतन, विश्लेषण और अंतर्दृष्टि प्रदान करना है। बीएनएसएस, एक ऐतिहासिक विधायी ढांचा, नागरिक सुरक्षा के प्रति भारत के दृष्टिकोण को नया आकार देने, कानूनों को आधुनिक बनाने और अपने नागरिकों की सुरक्षा बढ़ाने पर ध्यान केंद्रित करने में सहायक रहा है।`}
            </p>
            <p className="bnsp4">
              {selectedLanguage === "English"
                ? `This digest seeks to inform policymakers, legal experts, law enforcement agencies, and the public about the latest legislative amendments, significant case studies, and the impact of BNSS on crime prevention and law enforcement. Through expert opinions, detailed case analyses, and statistical data, the digest offers a critical examination of how the BNSS is being implemented across the country and its effectiveness in addressing contemporary security challenges.`
                : selectedLanguage === "Telugu"
                ? `ఈ డైజెస్ట్ తాజా శాసన సవరణలు, ముఖ్యమైన కేస్ స్టడీస్ మరియు నేరాల నివారణ మరియు చట్ట అమలుపై BNSS ప్రభావం గురించి విధాన రూపకర్తలు, న్యాయ నిపుణులు, చట్టాన్ని అమలు చేసే ఏజెన్సీలు మరియు ప్రజలకు తెలియజేయడానికి ప్రయత్నిస్తుంది. నిపుణుల అభిప్రాయాలు, వివరణాత్మక కేసు విశ్లేషణలు మరియు గణాంక డేటా ద్వారా, దేశవ్యాప్తంగా BNSS ఎలా అమలు చేయబడుతోంది మరియు సమకాలీన భద్రతా సవాళ్లను ఎదుర్కోవడంలో దాని ప్రభావం గురించి డైజెస్ట్ క్లిష్టమైన పరిశీలనను అందిస్తుంది.`
                : `यह डाइजेस्ट नीति निर्माताओं, कानूनी विशेषज्ञों, कानून प्रवर्तन एजेंसियों और जनता को नवीनतम विधायी संशोधनों, महत्वपूर्ण मामले के अध्ययन और अपराध की रोकथाम और कानून प्रवर्तन पर बीएनएसएस के प्रभाव के बारे में सूचित करना चाहता है। विशेषज्ञों की राय, विस्तृत मामले के विश्लेषण और सांख्यिकीय डेटा के माध्यम से, डाइजेस्ट इस बात की एक महत्वपूर्ण जांच प्रदान करता है कि बीएनएसएस को देश भर में कैसे लागू किया जा रहा है और समकालीन सुरक्षा चुनौतियों से निपटने में इसकी प्रभावशीलता क्या है।`}
            </p>
            <p className="bnsp4">
              {selectedLanguage === "English"
                ? `Whether you're a legal professional, a public official, or simply a concerned citizen, the BNSS Monthly Digest provides valuable insights into the current landscape of citizen security in India and the evolving role of the BNSS in ensuring a safer and more just society.`
                : selectedLanguage === "Telugu"
                ? `మీరు న్యాయ నిపుణులు అయినా, ప్రభుత్వ అధికారి అయినా లేదా సంబంధిత పౌరుడైనా, BNSS మంత్లీ డైజెస్ట్ భారతదేశంలోని పౌర భద్రత యొక్క ప్రస్తుత ప్రకృతి దృశ్యం మరియు సురక్షితమైన మరియు మరింత న్యాయమైన సమాజాన్ని నిర్ధారించడంలో BNSS యొక్క అభివృద్ధి చెందుతున్న పాత్రపై విలువైన అంతర్దృష్టులను అందిస్తుంది.`
                : `चाहे आप एक कानूनी पेशेवर हों, एक सार्वजनिक अधिकारी हों, या बस एक चिंतित नागरिक हों, बीएनएसएस मासिक डाइजेस्ट भारत में नागरिक सुरक्षा के वर्तमान परिदृश्य और एक सुरक्षित और अधिक न्यायपूर्ण समाज सुनिश्चित करने में बीएनएसएस की उभरती भूमिका के बारे में बहुमूल्य अंतर्दृष्टि प्रदान करता है।`}
            </p>
            <div class="row">
              <div class="column">
                <h4 className="bnsp5">
                  {selectedLanguage === "English"
                    ? "The Bharatiya Nagarik Suraksha Sanhita, 2023"
                    : selectedLanguage === "Telugu"
                    ? "భారతీయ నాగరిక్ సురక్ష సంహిత, 2023"
                    : "भारतीय नागरिक सुरक्षा संहिता, 2023"}
                </h4>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Highlights of the Bill"
                    : selectedLanguage === "Telugu"
                    ? "బిల్లులోని ముఖ్యాంశాలు"
                    : "विधेयक की मुख्य बातें"}{" "}
                </h4>
                <p className="bnsp7">
                  <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `The Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) seeks to replace the Criminal Procedure Code, 1973 (CrPC).  The CrPC provides for the procedure for arrest, prosecution, and bail.`
                    : selectedLanguage === "Telugu"
                    ? `భారతీయ నాగరిక్ సురక్ష సంహిత, 2023 (BNSS) క్రిమినల్ ప్రొసీజర్ కోడ్, 1973 (CrPC)ని భర్తీ చేయడానికి ప్రయత్నిస్తుంది.  CrPC అరెస్టు, ప్రాసిక్యూషన్ మరియు బెయిల్ కోసం ప్రక్రియను అందిస్తుంది.`
                    : `भारतीय नागरिक सुरक्षा संहिता, 2023 (बीएनएसएस) आपराधिक प्रक्रिया संहिता, 1973 (सीआरपीसी) को प्रतिस्थापित करना चाहता है।  सीआरपीसी गिरफ्तारी, अभियोजन और जमानत की प्रक्रिया प्रदान करता है।`}
                </p>
                <p className="bnsp7">
                  <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `BNSS mandates forensic investigation for offences punishable with seven years of imprisonment or more.  Forensic experts will visit crime scenes to collect forensic evidence and record the process. `
                    : selectedLanguage === "Telugu"
                    ? `BNSS ఏడు సంవత్సరాల జైలు శిక్ష లేదా అంతకంటే ఎక్కువ శిక్ష విధించే నేరాలకు ఫోరెన్సిక్ విచారణను తప్పనిసరి చేస్తుంది.  ఫోరెన్సిక్ నిపుణులు నేరస్థలాలను సందర్శించి ఫోరెన్సిక్ ఆధారాలను సేకరించి ప్రక్రియను నమోదు చేస్తారు.`
                    : `बीएनएसएस सात साल या उससे अधिक की सजा वाले अपराधों के लिए फोरेंसिक जांच को अनिवार्य बनाता है।  फोरेंसिक विशेषज्ञ फोरेंसिक सबूत इकट्ठा करने और प्रक्रिया को रिकॉर्ड करने के लिए अपराध स्थलों का दौरा करेंगे।
`}
                </p>

                <p className="bnsp7">
                  <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `All trials, inquiries, and proceedings may be held in electronic mode.  Production of electronic communication devices, likely to contain digital evidence, will be allowed for investigation, inquiry, or trial.`
                    : selectedLanguage === "Telugu"
                    ? `అన్ని ట్రయల్స్, విచారణలు మరియు ప్రొసీడింగ్‌లను ఎలక్ట్రానిక్ మోడ్‌లో నిర్వహించవచ్చు.  ఎలక్ట్రానిక్ కమ్యూనికేషన్ పరికరాల ఉత్పత్తి, డిజిటల్ సాక్ష్యాలను కలిగి ఉండవచ్చు, దర్యాప్తు, విచారణ లేదా విచారణ కోసం అనుమతించబడుతుంది.`
                    : `सभी परीक्षण, पूछताछ और कार्यवाही इलेक्ट्रॉनिक मोड में आयोजित की जा सकती हैं।  इलेक्ट्रॉनिक संचार उपकरणों के उत्पादन, जिसमें डिजिटल साक्ष्य शामिल होने की संभावना है, को जांच, पूछताछ या परीक्षण के लिए अनुमति दी जाएगी।`}
                </p>
                <p className="bnsp78">
                  <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `If a proclaimed offender has absconded to evade trial and there is no immediate prospect of arresting him, the trial can be conducted and judgement pronounced in his absence.`
                    : selectedLanguage === "Telugu"
                    ? `ప్రకటిత నేరస్థుడు విచారణ నుండి తప్పించుకోవడానికి పరారీలో ఉండి, అతడిని వెంటనే అరెస్టు చేసే అవకాశం లేకుంటే, అతను గైర్హాజరైనప్పుడు విచారణ నిర్వహించి తీర్పును ప్రకటించవచ్చు.`
                    : `यदि कोई घोषित अपराधी मुकदमे से बचने के लिए भाग गया है और उसे गिरफ्तार करने की तत्काल कोई संभावना नहीं है, तो उसकी अनुपस्थिति में मुकदमा चलाया जा सकता है और फैसला सुनाया जा सकता है।`}
                </p>
                <p className="bnsp78">
                  <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Along with specimen signatures or handwriting, finger impressions and voice samples may be collected for investigation or proceedings.  Samples may be taken from a person who has not been arrested.`
                    : selectedLanguage === "Telugu"
                    ? `నమూనా సంతకాలు లేదా చేతివ్రాతతో పాటు, విచారణ లేదా విచారణ కోసం వేలి ముద్రలు మరియు వాయిస్ నమూనాలను సేకరించవచ్చు.  అరెస్టు చేయని వ్యక్తి నుండి నమూనాలను తీసుకోవచ్చు.`
                    : `जांच या कार्यवाही के लिए नमूना हस्ताक्षर या लिखावट के साथ-साथ उंगलियों के निशान और आवाज के नमूने भी एकत्र किए जा सकते हैं।  ऐसे व्यक्ति से नमूने लिए जा सकते हैं जिसे गिरफ्तार नहीं किया गया है।`}
                </p>

                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Key Issues and Analysis"
                    : selectedLanguage === "Telugu"
                    ? "కీలక సమస్యలు మరియు విశ్లేషణ"
                    : "प्रमुख मुद्दे और विश्लेषण"}{" "}
                </h4>
                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `The BNSS allows up to 15 days of police custody, which can be authorised in parts during the initial 40 or 60 days of the 60 or 90 days period of judicial custody.  This may lead to denial of bail for the entire period if the police has not exhausted the 15 days custody.`
                    : selectedLanguage === "Telugu"
                    ? `BNSS 15 రోజుల వరకు పోలీసు కస్టడీని అనుమతిస్తుంది, ఇది 60 లేదా 90 రోజుల జ్యుడీషియల్ కస్టడీలో ప్రారంభ 40 లేదా 60 రోజులలో భాగాలుగా అధికారం పొందవచ్చు.  దీంతో పోలీసులు 15 రోజుల కస్టడీని పూర్తి చేయకపోతే మొత్తం కాలానికి బెయిల్ తిరస్కరణకు దారితీయవచ్చు.`
                    : `बीएनएसएस 15 दिनों तक की पुलिस हिरासत की अनुमति देता है, जिसे न्यायिक हिरासत की 60 या 90 दिनों की अवधि के शुरुआती 40 या 60 दिनों के दौरान भागों में अधिकृत किया जा सकता है।  इससे अगर पुलिस ने 15 दिन की हिरासत अवधि समाप्त नहीं की है तो पूरी अवधि के लिए जमानत से इनकार किया जा सकता है।`}
                </p>












                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `The powers to attach property from proceeds of crime does not have safeguards provided in the Prevention of Money Laundering Act.`
                    : selectedLanguage === "Telugu"
                    ? `నేరం ద్వారా వచ్చే ఆదాయం నుండి ఆస్తిని అటాచ్ చేసే అధికారాలు మనీలాండరింగ్ నిరోధక చట్టంలో అందించబడిన రక్షణలను కలిగి లేవు.`
                    : `अपराध की आय से संपत्ति संलग्न करने की शक्तियों के लिए धन शोधन निवारण अधिनियम में सुरक्षा उपाय प्रदान नहीं किए गए हैं।`}
                </p>


                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `The CrPC provides for bail for an accused who has been detained for half the maximum imprisonment for the offence.   The BNSS denies this facility for anyone facing multiple charges.  As many cases involve charges under multiple sections, this may limit such bail. `
                    : selectedLanguage === "Telugu"
                    ? `CrPC నేరానికి గరిష్టంగా సగం జైలు శిక్ష విధించబడిన నిందితుడికి బెయిల్ అందిస్తుంది.   బహుళ ఆరోపణలు ఎదుర్కొంటున్న ఎవరికైనా BNSS ఈ సౌకర్యాన్ని తిరస్కరించింది.  అనేక కేసులు అనేక సెక్షన్ల కింద అభియోగాలను కలిగి ఉన్నందున, ఇది అటువంటి బెయిల్‌ను పరిమితం చేయవచ్చు.`
                    : `सीआरपीसी उस आरोपी के लिए जमानत का प्रावधान करती है जिसे अपराध के लिए अधिकतम कारावास की आधी सजा के लिए हिरासत में लिया गया हो।   बीएनएसएस कई आरोपों का सामना करने वाले किसी भी व्यक्ति के लिए इस सुविधा से इनकार करता है।  चूँकि कई मामलों में कई धाराओं के तहत आरोप शामिल होते हैं, इससे ऐसी जमानत सीमित हो सकती है।`}
                </p>


                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `The use of handcuffs is permitted in a range of cases including economic offences, contradicting Supreme Court directions.`
                    : selectedLanguage === "Telugu"
                    ? `ఆర్థిక నేరాలు, సుప్రీం కోర్టు ఆదేశాలకు విరుద్ధమైన కేసుల పరిధిలో హ్యాండ్‌కఫ్‌ల ఉపయోగం అనుమతించబడుతుంది.`
                    : `सुप्रीम कोर्ट के निर्देशों के विपरीत, आर्थिक अपराधों सहित कई मामलों में हथकड़ी के उपयोग की अनुमति है।`}
                </p>


                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `The BNSS allows evidence collected by retired or transferred investigating officers to be presented by their successors.   This violates normal rules of evidence when the author of the document can be cross examined.`
                    : selectedLanguage === "Telugu"
                    ? `BNSS రిటైర్డ్ లేదా బదిలీ చేయబడిన దర్యాప్తు అధికారులు సేకరించిన సాక్ష్యాలను వారి వారసులు సమర్పించడానికి అనుమతిస్తుంది.   పత్రం యొక్క రచయిత క్రాస్ ఎగ్జామినేషన్ చేసినప్పుడు ఇది సాక్ష్యం యొక్క సాధారణ నియమాలను ఉల్లంఘిస్తుంది.`
                    : `बीएनएसएस सेवानिवृत्त या स्थानांतरित जांच अधिकारियों द्वारा एकत्र किए गए साक्ष्य को उनके उत्तराधिकारियों द्वारा प्रस्तुत करने की अनुमति देता है।   यह साक्ष्य के सामान्य नियमों का उल्लंघन करता है जब दस्तावेज़ के लेखक से जिरह की जा सकती है।`}
                </p>


                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Recommendations of high level committees on changes to the CrPC such as reforms in sentencing guidelines and codifying rights of the accused have not been incorporated in the BNSS.`
                    : selectedLanguage === "Telugu"
                    ? `శిక్షాస్మృతి మార్గదర్శకాలలో సంస్కరణలు మరియు నిందితుల హక్కులను క్రోడీకరించడం వంటి CrPCలో మార్పులపై ఉన్నత స్థాయి కమిటీల సిఫార్సులు BNSSలో పొందుపరచబడలేదు.`
                    : `सीआरपीसी में बदलावों पर उच्च स्तरीय समितियों की सिफारिशें जैसे सजा दिशानिर्देशों में सुधार और अभियुक्तों के अधिकारों को संहिताबद्ध करना बीएनएसएस में शामिल नहीं किया गया है।`}
                </p>
                <h4 className="bnsp5">
                  {selectedLanguage === "English"
                    ? `PART A: HIGHLIGHTS OF THE BILL`
                    : selectedLanguage === "Telugu"
                    ? `పార్ట్ A: బిల్లు యొక్క ముఖ్యాంశాలు`
                    : "भाग ए: विधेयक की मुख्य बातें"}
                </h4>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Context"
                    : selectedLanguage === "Telugu"
                    ? "సందర్భం"
                    : "प्रसंग"}
                </h4>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `The Code of Criminal Procedure, 1973 (CrPC) is a procedural law established for the administration of the Indian Penal Code, 1860 (IPC).  It governs the procedure for investigation, arrest, prosecution, and bail for offences.  The CrPC was first passed in 1861 to address the problem of multiplicity of legal systems in India.[1]  Since then it has been revised on multiple occasions.  In 1973, the erstwhile act was repealed and replaced by the existing CrPC, and changes like anticipatory bail were introduced.[2]  It was amended in 2005 to add changes such as provisions for plea bargaining and rights of arrested persons.[3] `
                    : selectedLanguage === "Telugu"
                    ? `క్రిమినల్ ప్రొసీజర్ కోడ్, 1973 (CrPC) అనేది భారతీయ శిక్షాస్మృతి, 1860 (IPC) నిర్వహణ కోసం ఏర్పాటు చేయబడిన విధానపరమైన చట్టం.  ఇది నేరాలకు సంబంధించి విచారణ, అరెస్టు, ప్రాసిక్యూషన్ మరియు బెయిల్ కోసం ప్రక్రియను నియంత్రిస్తుంది.  CrPC భారతదేశంలోని అనేక న్యాయ వ్యవస్థల సమస్యను పరిష్కరించడానికి 1861లో మొదటిసారి ఆమోదించబడింది.[1]  అప్పటి నుండి ఇది అనేక సందర్భాల్లో సవరించబడింది.  1973లో, పూర్వపు చట్టం రద్దు చేయబడింది మరియు ప్రస్తుత CrPC ద్వారా భర్తీ చేయబడింది మరియు ముందస్తు బెయిల్ వంటి మార్పులు ప్రవేశపెట్టబడ్డాయి.[2]  2005లో ప్లీ బేరసారాలకు సంబంధించిన నిబంధనలు మరియు అరెస్టయిన వ్యక్తుల హక్కుల వంటి మార్పులను జోడించడానికి ఇది సవరించబడింది.[3]`
                    : `दंड प्रक्रिया संहिता, 1973 (सीआरपीसी) भारतीय दंड संहिता, 1860 (आईपीसी) के प्रशासन के लिए स्थापित एक प्रक्रियात्मक कानून है।  यह अपराधों की जांच, गिरफ्तारी, अभियोजन और जमानत की प्रक्रिया को नियंत्रित करता है।  भारत में कानूनी प्रणालियों की बहुलता की समस्या का समाधान करने के लिए सीआरपीसी पहली बार 1861 में पारित किया गया था।[1]  तब से इसे कई मौकों पर संशोधित किया गया है।  1973 में, तत्कालीन अधिनियम को निरस्त कर दिया गया और मौजूदा सीआरपीसी द्वारा प्रतिस्थापित किया गया, और अग्रिम जमानत जैसे बदलाव पेश किए गए।[2]  2005 में प्ली बार्गेनिंग के प्रावधानों और गिरफ्तार व्यक्तियों के अधिकारों जैसे बदलावों को जोड़ने के लिए इसमें संशोधन किया गया था।[3]`}
                </p>
                <p
                  className="bnsp78"
                >
                  {selectedLanguage === "English"
                    ? `Over the years, the Supreme Court has interpreted the CrPC in varied ways and revised its application.  These include: (i) mandating the registration of an FIR if the complaint relates to a cognisable offence, (ii) making arrests an exception when the punishment is less than seven years of imprisonment, (iii) ensuring bail for bailable offence is an absolute and in-defeasible right and no discretion is exercised in such matters.4  The Court has also ruled on procedural aspects such as establishing guidelines for custodial interrogations and emphasising the importance of speedy trials.[4]   However, the criminal justice system continues to face challenges like case backlogs, trial delays, and concerns about treatment of underprivileged groups.[5]`
                    : selectedLanguage === "Telugu"
                    ? `సంవత్సరాలుగా, సుప్రీంకోర్టు CrPCని వివిధ మార్గాల్లో వివరించింది మరియు దాని దరఖాస్తును సవరించింది.  వీటిలో ఇవి ఉన్నాయి: (i) ఫిర్యాదు గుర్తించదగిన నేరానికి సంబంధించినది అయితే ఎఫ్‌ఐఆర్ నమోదును తప్పనిసరి చేయడం, (ii) ఏడేళ్ల కంటే తక్కువ జైలుశిక్ష ఉన్నప్పుడు అరెస్టులకు మినహాయింపు ఇవ్వడం, (iii) బెయిలబుల్ నేరానికి బెయిల్‌ను ఖచ్చితంగా నిర్ధారించడం మరియు అటువంటి విషయాలలో నిలదీయలేని హక్కు మరియు విచక్షణ ఉండదు.4 కస్టోడియల్ ఇంటరాగేషన్‌ల కోసం మార్గదర్శకాలను ఏర్పాటు చేయడం మరియు త్వరిత విచారణల ప్రాముఖ్యతను నొక్కి చెప్పడం వంటి విధానపరమైన అంశాలపై కూడా కోర్టు తీర్పునిచ్చింది.[4]   ఏది ఏమైనప్పటికీ, నేర న్యాయ వ్యవస్థ కేసుల బ్యాక్‌లాగ్‌లు, విచారణ జాప్యాలు మరియు అణగారిన సమూహాల పట్ల ఆందోళనలు వంటి సవాళ్లను ఎదుర్కొంటూనే ఉంది.[5]`
                    : `वर्षों से, सुप्रीम कोर्ट ने सीआरपीसी की विभिन्न तरीकों से व्याख्या की है और इसके आवेदन को संशोधित किया है।  इनमें शामिल हैं: (i) यदि शिकायत संज्ञेय अपराध से संबंधित है तो एफआईआर दर्ज करना अनिवार्य है, (ii) सात साल से कम कारावास की सजा होने पर गिरफ्तारी को अपवाद बनाना, (iii) जमानती अपराध के लिए जमानत सुनिश्चित करना पूर्ण है और अक्षम्य अधिकार और ऐसे मामलों में किसी विवेक का प्रयोग नहीं किया जाता है।4 न्यायालय ने हिरासत में पूछताछ के लिए दिशानिर्देश स्थापित करने और त्वरित सुनवाई के महत्व पर जोर देने जैसे प्रक्रियात्मक पहलुओं पर भी फैसला सुनाया है।[4]   हालाँकि, आपराधिक न्याय प्रणाली को लंबित मामलों, मुकदमे में देरी और वंचित समूहों के उपचार के बारे में चिंताओं जैसी चुनौतियों का सामना करना पड़ रहा है।[5]`}
                </p>
                <p
                  className="bnsp78"
                >
                  {selectedLanguage === "English"
                    ? `The Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) was introduced on August 11, 2023 to replace the CrPC.  It amends provisions on bail, expands the scope of property seizure, and alters powers of police and Magistrates.  The Bill has been examined by the Standing Committee on Home Affairs.  `
                    : selectedLanguage === "Telugu"
                    ? `CrPC స్థానంలో భారతీయ నాగరిక్ సురక్ష సంహిత, 2023 (BNSS) ఆగస్టు 11, 2023న ప్రవేశపెట్టబడింది.  ఇది బెయిల్‌పై నిబంధనలను సవరిస్తుంది, ఆస్తి స్వాధీనం పరిధిని విస్తరిస్తుంది మరియు పోలీసు మరియు మేజిస్ట్రేట్‌ల అధికారాలను మారుస్తుంది.  ఈ బిల్లును హోం వ్యవహారాల స్టాండింగ్ కమిటీ పరిశీలించింది.`
                    : "भारतीय नागरिक सुरक्षा संहिता, 2023 (बीएनएसएस) को सीआरपीसी को बदलने के लिए 11 अगस्त, 2023 को पेश किया गया था।  यह जमानत के प्रावधानों में संशोधन करता है, संपत्ति जब्ती का दायरा बढ़ाता है और पुलिस और मजिस्ट्रेट की शक्तियों में बदलाव करता है।  विधेयक की जांच गृह मामलों की स्थायी समिति द्वारा की गई है।"}
                </p>
                <h4 className="bnsp6">
                  {selectedLanguage === "English"
                    ? "Key Features"
                    : selectedLanguage === "Telugu"
                    ? "కీ ఫీచర్లు"
                    : "प्रमुख विशेषताऐं"}
                </h4>
                <p
                  className="bnsp78"
                >
                  {selectedLanguage === "English"
                    ? `The CrPC governs the procedural aspects of criminal justice in India.  The key features of the Act include:`
                    : selectedLanguage === "Telugu"
                    ? `CrPC భారతదేశంలో నేర న్యాయం యొక్క విధానపరమైన అంశాలను నియంత్రిస్తుంది.  చట్టం యొక్క ముఖ్య లక్షణాలు:`
                    : `सीआरपीसी भारत में आपराधिक न्याय के प्रक्रियात्मक पहलुओं को नियंत्रित करती है।  अधिनियम की प्रमुख विशेषताओं में शामिल हैं:`}
                </p>
                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Separation of offences:  The CrPC classifies offences into two categories: cognisable and non-cognisable.  Cognisable offences are those in which the police can arrest and initiate an investigation without a warrant.  Non-cognisable offences require a warrant, and in some cases, a complaint by the victim or a third party.`
                    : selectedLanguage === "Telugu"
                    ? `నేరాల విభజన: CrPC నేరాలను రెండు వర్గాలుగా వర్గీకరిస్తుంది: గుర్తించదగిన మరియు నాన్-కాగ్నిసబుల్.  వారెంట్ లేకుండానే పోలీసులు అరెస్టు చేసి దర్యాప్తు ప్రారంభించే వాటిని కాగ్నిజబుల్ నేరాలు అంటారు.  నాన్-కాగ్నిసబుల్ నేరాలకు వారెంట్ మరియు కొన్ని సందర్భాల్లో, బాధితుడు లేదా మూడవ పక్షం ఫిర్యాదు అవసరం.`
                    : `अपराधों का पृथक्करण: सीआरपीसी अपराधों को दो श्रेणियों में वर्गीकृत करती है: संज्ञेय और गैर-संज्ञेय।  संज्ञेय अपराध वे होते हैं जिनमें पुलिस बिना वारंट के गिरफ्तार कर सकती है और जांच शुरू कर सकती है।  गैर-संज्ञेय अपराधों के लिए वारंट की आवश्यकता होती है, और कुछ मामलों में, पीड़ित या तीसरे पक्ष की शिकायत की आवश्यकता होती है।`}
                </p>

                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Nature of offences:  The CrPC deals with various types of criminal offences, ranging from traffic violations to murder.  It distinguishes between bailable and non-bailable offences, specifying the offences for which an accused has the right to bail from police custody. `
                    : selectedLanguage === "Telugu"
                    ? `నేరాల స్వభావం: CrPC ట్రాఫిక్ ఉల్లంఘనల నుండి హత్య వరకు వివిధ రకాల క్రిమినల్ నేరాలతో వ్యవహరిస్తుంది.  ఇది బెయిలబుల్ మరియు నాన్-బెయిలబుల్ నేరాల మధ్య తేడాను చూపుతుంది, నిందితుడికి పోలీసు కస్టడీ నుండి బెయిల్ పొందే హక్కు ఉన్న నేరాలను పేర్కొంటుంది.`
                    : `अपराधों की प्रकृति: सीआरपीसी यातायात उल्लंघन से लेकर हत्या तक विभिन्न प्रकार के आपराधिक अपराधों से निपटती है।  यह जमानती और गैर-जमानती अपराधों के बीच अंतर करता है, उन अपराधों को निर्दिष्ट करता है जिनके लिए आरोपी को पुलिस हिरासत से जमानत का अधिकार है।`}
                </p>
                <p className="bnsp78">
                  {selectedLanguage === "English"
                    ? `The BNSS retains most of the provisions of the CrPC.   Key changes proposed include:`
                    : selectedLanguage === "Telugu"
                    ? `BNSS CrPC యొక్క చాలా నిబంధనలను కలిగి ఉంది.   ప్రతిపాదించిన కీలక మార్పులు:`
                    : `बीएनएसएस सीआरपीसी के अधिकांश प्रावधानों को बरकरार रखता है।   प्रस्तावित प्रमुख परिवर्तनों में शामिल हैं:`}
                </p>
                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Detention of undertrials:  As per the CrPC, if an accused has spent half of the maximum period of imprisonment in detention, he must be released on personal bond.  This does not apply to offences punishable by death.  The Bill adds that this provision will also not apply to: (i) offences punishable by life imprisonment, and (ii) persons against whom proceedings are pending in more than one offence.`
                    : selectedLanguage === "Telugu"
                    ? `అండర్ ట్రయల్‌ల నిర్బంధం: CrPC ప్రకారం, ఒక నిందితుడు గరిష్ట కారాగార కాల వ్యవధిలో సగభాగం నిర్బంధంలో గడిపినట్లయితే, అతన్ని తప్పనిసరిగా వ్యక్తిగత పూచీకత్తుపై విడుదల చేయాలి.  మరణశిక్ష విధించదగిన నేరాలకు ఇది వర్తించదు.  ఈ నిబంధన కింది వాటికి కూడా వర్తించదని బిల్లు జతచేస్తుంది: (i) జీవిత ఖైదు విధించే నేరాలు మరియు (ii) ఒకటి కంటే ఎక్కువ నేరాలలో విచారణ పెండింగ్‌లో ఉన్న వ్యక్తులకు.`
                    : `विचाराधीन कैदियों की हिरासत: सीआरपीसी के अनुसार, यदि किसी आरोपी ने कारावास की अधिकतम अवधि का आधा हिस्सा हिरासत में बिताया है, तो उसे व्यक्तिगत बांड पर रिहा किया जाना चाहिए।  यह मृत्युदंड वाले अपराधों पर लागू नहीं होता है।  विधेयक में कहा गया है कि यह प्रावधान इन पर भी लागू नहीं होगा: (i) आजीवन कारावास की सजा वाले अपराध, और (ii) ऐसे व्यक्ति जिनके खिलाफ एक से अधिक अपराधों में कार्यवाही लंबित है।`}
                </p>
                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Medical examination:  The CrPC allows medical examination of the accused in certain cases, including rape cases.  Such examination is done by a registered medical practitioner on the request of at least a sub-inspector level police officer.  The Bill provides that any police officer can request such an examination.`
                    : selectedLanguage === "Telugu"
                    ? `వైద్య పరీక్ష: అత్యాచారం కేసులతో సహా కొన్ని కేసుల్లో నిందితులకు వైద్య పరీక్షలను CrPC అనుమతిస్తుంది.  కనీసం సబ్-ఇన్‌స్పెక్టర్ స్థాయి పోలీసు అధికారి అభ్యర్థన మేరకు రిజిస్టర్డ్ మెడికల్ ప్రాక్టీషనర్ అటువంటి పరీక్షను నిర్వహిస్తారు.  ఏ పోలీసు అధికారి అయినా అటువంటి పరీక్షను అభ్యర్థించవచ్చని బిల్లు అందిస్తుంది.`
                    : `मेडिकल जांच: सीआरपीसी बलात्कार के मामलों सहित कुछ मामलों में आरोपी की मेडिकल जांच की अनुमति देता है।  ऐसी जांच कम से कम एक उप-निरीक्षक स्तर के पुलिस अधिकारी के अनुरोध पर एक पंजीकृत चिकित्सक द्वारा की जाती है।  विधेयक में प्रावधान है कि कोई भी पुलिस अधिकारी ऐसी जांच का अनुरोध कर सकता है।`}
                </p>
                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Forensic investigation:  The Bill mandates forensic investigation for offences punishable with at least seven years of imprisonment.  In such cases, forensic experts will visit crime scenes to collect forensic evidence and record the process on mobile phone or any other electronic device.  If a state does not have forensics facility, it shall utilise such facility in another state.`
                    : selectedLanguage === "Telugu"
                    ? `ఫోరెన్సిక్ విచారణ: కనీసం ఏడేళ్ల జైలు శిక్షతో కూడిన నేరాలకు ఫోరెన్సిక్ విచారణను బిల్లు తప్పనిసరి చేస్తుంది.  అటువంటి సందర్భాలలో, ఫోరెన్సిక్ నిపుణులు నేర దృశ్యాలను సందర్శించి ఫోరెన్సిక్ సాక్ష్యాలను సేకరించి, మొబైల్ ఫోన్ లేదా ఏదైనా ఇతర ఎలక్ట్రానిక్ పరికరంలో ప్రక్రియను రికార్డ్ చేస్తారు.  ఒక రాష్ట్రానికి ఫోరెన్సిక్స్ సదుపాయం లేకపోతే, అది మరొక రాష్ట్రంలో అలాంటి సౌకర్యాన్ని ఉపయోగించుకుంటుంది.`
                    : `फोरेंसिक जांच: विधेयक कम से कम सात साल की कैद की सजा वाले अपराधों के लिए फोरेंसिक जांच को अनिवार्य बनाता है।  ऐसे मामलों में, फोरेंसिक विशेषज्ञ फोरेंसिक साक्ष्य इकट्ठा करने के लिए अपराध स्थलों का दौरा करेंगे और प्रक्रिया को मोबाइल फोन या किसी अन्य इलेक्ट्रॉनिक उपकरण पर रिकॉर्ड करेंगे।  यदि किसी राज्य के पास फोरेंसिक सुविधा नहीं है, तो वह दूसरे राज्य में ऐसी सुविधा का उपयोग करेगा।`}
                </p>
                <p className="bnsp78">
                <span
                    style={{
                      color: "#707070",
                      marginRight: "10px",
                      fontSize: "10px",
                    }}
                  >
                    <GoDotFill />
                  </span>
                  {selectedLanguage === "English"
                    ? `Signatures and finger impressions:  The CrPC empowers a Magistrate to order any person to provide specimen signatures or handwriting.  The Bill expands this to include finger impressions and voice samples.   It allows these samples to be collected from a person who has not been arrested.`
                    : selectedLanguage === "Telugu"
                    ? `సంతకాలు మరియు వేలి ముద్రలు: ఏదైనా వ్యక్తికి నమూనా సంతకాలు లేదా చేతివ్రాతను అందించమని ఆదేశించడానికి CrPC మేజిస్ట్రేట్‌కు అధికారం ఇస్తుంది.  వేలి ముద్రలు మరియు వాయిస్ నమూనాలను చేర్చడానికి బిల్లు దీన్ని విస్తరిస్తుంది.   అరెస్టు చేయని వ్యక్తి నుండి ఈ నమూనాలను సేకరించడానికి ఇది అనుమతిస్తుంది.`
                    : `हस्ताक्षर और उंगलियों के निशान: सीआरपीसी एक मजिस्ट्रेट को किसी भी व्यक्ति को नमूना हस्ताक्षर या लिखावट प्रदान करने का आदेश देने का अधिकार देता है।  विधेयक में इसका विस्तार करते हुए उंगलियों के निशान और आवाज के नमूनों को शामिल किया गया है।   यह इन नमूनों को ऐसे व्यक्ति से एकत्र करने की अनुमति देता है जिसे गिरफ्तार नहीं किया गया है।`}
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
                  <div className="bnssbox1">
                    <h4 className="bnsssh1" style={{ padding: "15px" }}>
                      Original Text
                    </h4>
                    <div style={{ backgroundColor: "#efefef" }}>
                      <p
                        style={{ color: "blue", padding: "10px" }}
                        className="bbbb"
                        onClick={handleClick1}
                      >
                        <BsFileEarmarkPdf style={{ color: "red" }} /> Bill Text
                      </p>
                      <p
                        style={{ color: "blue" }}
                        className="bbbbb"
                        onClick={handleClick2}
                      >
                        <BsFileEarmarkPdf style={{ color: "red" }} /> Standing
                        Committee Report
                      </p>

                      <p></p>
                    </div>
                  </div>
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

export default Bnss;
