import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { IoArrowUp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import img1 from '../img/bnsimg.png'
import './BnsPage.css'
import { FaCalendar } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";




const BnsPage = () => {

    
      
    
     
    
      
    
    
     
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
  
  
    
    
    
    
    
    
    
    
    
    
    
      
     
      
     
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  return (
    <div className="legal-research">
    <div className="sidebar">
    <div >Sidebar</div>
    </div>
    <div className="a">
      <div>
      <h3 id={selectedLanguage === 'Telugu' ? 'tel' : selectedLanguage === 'Hindi' ? 'hin' : 'p'} style={{width:"55%"}}>
{selectedLanguage === 'English'
  ? 'Bharatiya Nyaya Sanhita'
  : selectedLanguage === 'Telugu'
  ? 'భారతీయ న్యాయ సంహిత'
  : 'भारतीय न्याय संहिता'}
</h3>


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

      <div className="containerr">






      <div className='p1-2'>
    <p className='p12'>Changes Brought Forth by the Bharatiya Nyaya Sanhita, 2023</p>
</div>
<div style={{display:"flex"}} className='div1'>



<img src={img1} alt="Description" style={{width:"50%"}}></img>
<div className='divbns1'>
<div className='h1div'>
    <h1 className='bnsh1'>Changes Brought Forth by the Bharatiya Nyaya Sanhita, 2023
    </h1>
</div>
</div>







</div>

<div className='bnsp1'>
    <p className='bnsp2'><span><FaCalendar />    </span>July 4, 2024<span style={{fontSize:"30px",position:"relative",top:"8px"}}><RxDividerVertical />    </span>    Bharatiya Nyaya Sanhita, 2023</p>
</div>
<div>
    <p className='bnsp4' >The Bhartiya Nyaya Sanhita, 2023 (hereinafter referred to as the “BNS”) is a criminal 
        legislation which seeks to replace the erstwhile Indian Penal Code, 1860 (hereinafter referred
         to as the “IPC”). A lot of significant changes can be observed in the BNS, such as the introduction 
         of community service as a punishment, the grouping of inchoate offences under the same chapter,
          among others. This article seeks to present a comparative analysis of these changes, highlighting
           the key differences and their potential impact on our criminal justice system.
           </p>
           <div class="row">
           <div class="column" >
    <h4 className='bnsp5'>Addition and Alteration of Certain Language and Provisions</h4>
    <h4 className='bnsp6'>Commission of Offences through Electronic Means    </h4>
    <p className='bnsp7'>According to individual statistical reports[1], India has reportedly been
         home to approximately 750 million internet users and 460 million users of
          various platforms of social media, which equates to roughly 30% of the total
           users in the world. Further, according to recent independent studies[2], smartphone
            users in India were approximately 650 million strong. These and other
             studies on the subject make it obvious that a substantial portion of the Indian 
             population interacts, transacts and operates through digital mediums. Naturally, 
             incidents of criminal activity have risen. In fact, according to Crime in India 2022[3], 
             a publication of the National Crime Records Bureau, there has been an increase of 24.4% in 
             the registration of cases under Cybercrime as compared to 2021.
             </p>
             <p className='bnsp7'>
             For this very purpose, a new addition in the form of Section 2(39) of the BNS clearly states 
             that all words or expressions with regards to technology and digital media in general, shall 
             have the same meanings as those given in the Information Technology Act, 2002, as well as the
              Bhartiya Nagarik Suraksha Sanhita, 2023. This will enable a much wider scope in terms of 
              recognising various acts that fall under the ambit of an offence, thereby contributing to the
               detection and deterrence of crime. Section 2(8) of the BNS states that documents now include
                electronic and digital records.
      </p>
      <h4 className='bnsp6'>Community Service as a Punishment      </h4>
      <p className='bnsp7'>
      As a new addition to the chapter on punishments, community service has been added as one of the 
      punishments that may be given upon the conviction of an individual. It must also be noted that community 
      service as a punishment, according to the Statement of Object and Reasons, is only for petty offences, and 
      is therefore given in the BNS only under six offences as a means of punishment.


      </p>
      <p className='bnsp7'>
      Furthermore, a report of the Standing Committee[4] further recommended the insertion of a proper 
      definition of community service as well as contouring the scope of this punishment to the Parliament.
       However, this hasn’t been incorporated into the text of the Act as of now, with the laws being officially
        enforced[5]. The lack of proper clarity with regards to community service could result in massive
         judicial involvement in aiding the interpretation and setting of the law.
      </p>

      <h4 className='bnsp6'>Use of Inclusive Language     </h4>
<p className='bnsp7'>
As a first, the BNS uses the term transgender under Section 2(10), under the definition of “gender”,
 which was absent in the IPC. In general, various provisions have been made gender neutral, such as the
  offence of voyeurism, having been defined and punished under Section 77 of the BNS. However, it must be 
  noted that Section 77, along with other provisions, have incorporated the gender neutrality of the perpetrator,
   and not the victim. Therefore, for example, even though a woman may now be convicted for the offence of
    voyeurism, a man will never be able to complain about voyeuristic behaviour, an area where the BNS could’ve
     legislated upon.
</p>
<p className='bnsp78'>
    Similarly, a lot of offences, such as rape, have still been gendered, 
    wherein only a woman can be a victim. This excludes transgenders from availing themselves of 
    protection under various sexual offences, leaving their inclusion under Section 2(10) superficial.
    </p>
    <p className='bnsp78'>
    However, it cannot be said that gender neutrality in the context of victims was not taken into consideration at all since, under Section 96, the BNS uses the word child, replacing the words minor girls in the erstwhile Section 366A of the IPC.
    </p>
    <h4 className='bnsp6'> Snatching as a Separate Offence</h4>
    <p className='bnsp78'>
    Section 304 of the BNS provides, for the first time, snatching as an offence distinct from theft. Independent reports suggest that snatching is a high-frequency crime, reportedly[6] being conducted more than 5000 times per day in Delhi alone. It is not only based on frequency, but it also delineates from regular theft in many ways, which justifies its separation. Snatching is a subset of theft wherein movable property is taken by force or quickness of action from a person. Unlike theft, where the accused may employ deceitful means and take away property even without the knowledge of the person who owns it, snatching always involves the victim taking cognizance of the action at the time of commission itself, and it may even be accompanied with hurt or violence in order to give effect to the snatching. The maximum punishment for snatching has also been set at three years instead of seven years for theft.
    </p>
    <h4 className='bnsp6'> Provision Related to Mob Lynching</h4>
    <p className='bnsp78'>
    India has witnessed various cases[7] of deaths caused by groups of people motivated by religion and caste, among other factors. Specific data related to mob lynchings in particular is difficult to obtain, primarily because the National Crime Records Bureau does not maintain any, combined with the fact that police and public order are State subjects, for which no centralised data is available[8].
    </p>
    <p className='bnsp78'>
    However, through an amendment adding to the provision of murder under Section 103 of the BNS, any murder committed by a group of five or more people, specifically based on conditions like religion, caste or community, place of birth, personal belief, etc., is now distinctly punishable with death or life imprisonment with a fine, just like how a murder is punished. This is a breakthrough addition to the BNS in light of the incidents of lynching that have been surfacing over the years and is expected to act as a potent deterrent against any such incidents in the future. 
    </p>
    <p className='bnsp78'>
    Grievous hurt caused by a mob of five or more people has also been punished separately under the provision of Section 117(4) of the BNS, solidifying the resolve against mob justice.
        </p>
        <h4 className='bnsp6'>  Removal of Certain Language and Provisions
        Removal of Adultery</h4>
        <p className='bnsp78'>
        In conformity with a seminal decision[9] of the Hon’ble Supreme Court of India, which decriminalised the offence of adultery as given under Section 497 of the IPC, the BNS completely removed the provision. This judgment was based on the Hon’ble Supreme Court’s observation that the continuation of adultery as a crime is a direct interference with the personal lives of individuals. The organs of the government must distance themselves from how individuals make personal choices, according to the opinion of the Hon’ble Supreme Court.
        </p>
        <p className='bnsp78'>
        Various opinions suggest that adultery should be reintroduced in the BNS as an offence and should be gender neutral in nature. To the contrary, the dissenting opinion suggests that it is a rather outdated position to consider marriage to be sacred and should only be considered as a contract between individuals, which, if broken, gives rise to civil remedies.
        </p>
        <h4 className='bnsp6'>
        Non-Reproduction of Section 377 of the IPC
        </h4>
        <p className='bnsp78'>
        In 2018, a landmark judgment[10] of the Hon’ble Supreme Court of India struck down the provision of Section 377, which punished acts of consensual sexual intercourse between adults. The Hon’ble Court considered that the provision in question was a grave violation of Article 19(1)(a) of the Constitution[11], which guarantees all citizens a fundamental right to freedom of expression[12]. However, the remainder of the provision was kept in force, pertaining to bestiality, sodomy, etc., as they are separate offences within the same section, having no link with the sub-section in contention.
        </p>
        <p className='bnsp78'>
        However, the BNS has completely removed all the provisions of Section 377 of the IPC, even the ones that have not been expressly declared to be unconstitutional, as discussed above.
        </p>
        <h4 className='bnsp6'>Removal of Sedition</h4>
        <p className='bnsp78'>One of the most significant changes in the BNS is the removal of the colonial law of sedition, as was enshrined under Section 124A of the IPC. However, it must be noted that Section 152 of the BNS retains the essence of Section 124A, wording it in a manner that has been described as vague in itself[13]. This removal comes after the Law Commission, in its 2023 Report[14] believed sedition, subject to certain amendments based on a landmark 1962 case law[15], should be retained in Indian criminology. The phrases subversive activities and endangers sovereignty in Section 152 of the BNS have not been specifically defined, which may render the application of this Section highly problematic, wherein an individual may be arrested or investigated based on a misinterpretation of the BNS, which will only be rectified by the judiciary through a case before it. This, therefore, has a lot of potential to curtail the liberties of vast multitudes of people- before the new law actually has well defined limits supported by judicial decisions.</p>
        <h4 className='bnsp6'>Other Relevant Additions and Alterations</h4>
        <p className='bnsp78'>Organised crime has been defined under Section 111 of the BNS, which includes certain recognised offences such as kidnapping, land grabbing, etc., among others, committed as a part of a syndicate, or on behalf of one.</p>
        <p className='bnsp78'>Various definitions have been altered to clarify certain intentions, such as in Section 43 of the BNS,  the word night given under Section 103 of the IPC has been replaced by the words after sunset and before sunrise. Further, under Section 41, fire has been expanded to include mischief by fire or any explosive substance.</p>

        <p className='bnsp78'>All inchoate offences, namely conspiracy, attempt, and abetment, have been incorporated under the same chapter. Under the IPC, they were given in various sections present in different Chapters of the Code.</p>

        <p className='bnsp78'>Section 69 of the BNS is a relevant addition as it introduces an offence that was not present in the IPC. The offence of practicing deceit in order to effect sexual intercourse not amounting to rape has been considered a punishable offence under Section 69. Here, deceitful means are inclusive of false promises and inducements.</p>

        <p className='bnsp78'>The provision of Section 376DA of the IPC that dealt with gang rape has been expanded and incorporated in the BNS in the form of Section 70(2), wherein a major change is the alteration of the words from under the age of sixteen to under the age of eighteen, thereby expanding the scope of the offence by bringing more cases under its purview.</p>

        <p className='bnsp78'>While punishments for various offenses have been significantly increased, one of the most notable changes is the enhancement of the punishment for causing death by a rash or negligent act. Previously covered under Section 304A IPC with a maximum sentence of two years, this offense now carries a penalty of up to five years under Section 106(1) of the BNS.</p>

        <p className='bnsp78'>Section 113 of the BNS covers terrorist acts, which are a new addition to the purview. Mostly inspired by the provisions of the Unlawful Activities (Prevention) Act, 1967 (hereinafter referred to as the “UAPA”), Section 113 introduces fines, the limits of which are specifically mentioned, across various sub-sections, which are absent under the scheme of the UAPA.</p>

        <p className='bnsp78'>As a step towards curbing the spread of misinformation, the BNS also includes Section 353, which renders the making, publishing or circulating of false information backed with dishonest intention a punishable offence. Such a provision was not explicitly mentioned in the IPC, and it supplements the functioning of other laws dedicated to the same goal.</p>

        <p className='bnsp78'>Under Section 337 of the BNS, which has incorporated the erstwhile offence of forgery of a document as given under Section 446 of the IPC, now the forgery of Government issued documents, such as the Aadhar Card, or the Voter Identity Card is also in the ambit, thereby expanding the scope of the offence.</p>
        <p className='bnsp78'>Mischief as an offence has been given specific pecuniary limits[16] in sub-sections (4) and (5) of Section 324 of the BNS, wherein the amount of imprisonment increases as the value of the property destroyed or converted increases.</p>

        <p className='bnsp78'>Section 309 of the IPC, which had become redundant due to Section 115 of the Mental Healthcare Act, 2017, where a person attempting suicide was presumed to have done so under extreme stress and was thus exempt from prosecution under Section 309 of the IPC, has been partially revived by the BNS under Section 226. However, only cases where a person commits suicide with the proven intention of compelling or restraining any public servant from performing their duties are covered.</p>

        <p className='bnsp78'>The offence of kidnapping as envisaged in Section 137 of the BNS has removed the distinction between the age of minor boys and girls for the purposes of kidnapping and now includes the words ‘any child’ which has been defined under 2(3) to mean ‘any person below the age of eighteen years.’ This has brought the kidnapping of boys aged between sixteen and eighteen into the ambit of the offence of kidnapping, which had been absent under Section 361 of the IPC.</p>
         <h4 className='bnsp6'>Conclusion</h4>
        <p className='bnsp78'>The introduction of the BNS, for the most part, is a positive decision to reinvent the IPC in a manner that fits the current social climate. It has made various significant changes, removing laws that have colonial roots, which is archaic, and also certain provisions that hold no credible ground in today’s legal scenario. It rightfully promotes principles like gender neutrality; however, it does seem to fall short of properly incorporating them. The BNS has not acted upon various calls for decriminalisation of offences, particularly those made by the Committee on Draft National Policy on Criminal Justice[17]. After its commencement and after the creation of new questions of law based on its revised provisions, the citizenry will be able to identify its impact in a better manner.</p>



















</div> 





























































<div class="columnN" style={{backgroundColor:"#002369"}}>
    <div className='bottonh4'>
<h4 className='h43'>The introduction of the BNS, for the most part, is a positive
     decision to reinvent the IPC in a manner that fits the current social 
     climate. It has made various significant changes, removing laws
      that have colonial roots, which is archaic, and also certain provisions 
      that hold no credible ground in today’s legal scenario. </h4>

      
</div>
</div>
</div>




           
</div>


















       
      </div>
      <div><p className="bns-bottom"> Copyright © 2020 - 2021 All rights reserved | This application
        is made by <span className="contact-footer-spam">SGU</span></p></div>
    </div>
    
     
  </div>
  )
}

export default BnsPage