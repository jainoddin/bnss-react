import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { IoArrowUp } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa6";
import img1 from '../img/bnsimg.png'
import './BnsPage.css'


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
    <div >hh</div>
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

      <div className="containerr">







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
    <p className='bnsp2'>Bharatiya Nyaya Sanhita, 2023</p>
</div>
<div>
    <p>sssssssssssssssssssssss</p>
</div>


















       
      </div>
    </div>
  </div>
  )
}

export default BnsPage