import React from 'react';
import './List.css';
import DropFileInput from './DropFileInput';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
//import Toggle from "./toggle"
//import { useTranslation } from 'react-i18next';
//import Test from './Test';
//import { faSignout } from "@fortawesome/free-solid-svg-icons";
//import LogoutIcon from '@mui/icons-material/Logout';
const PhotoPage = () => {

  const onFileChange = (files) => {
    console.log(files);
}
//const { t } = useTranslation();
  return (
    <div id="main">
          <div id="white">
              <div id="top"></div>
              <div id="abc">
                
                <p id="MText">What's next in Music</p>
              </div>
              <div id="pad">
              <div class="search-container">
                <form action="#search">
                  <input type="text" placeholder="Search here..." name="search" id="sname"/>
                  <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
                </form>
              </div>
              <h3 id="or">or</h3>
              <div>
                  <DropFileInput class="frontContent__uploadButton sc-button sc-button-cta sc-button-primary sc-button-large"
                        onFileChange={(files) => onFileChange(files)}
                    />
                  </div>
                    
              </div>
          </div>
    </div>
  );
};
  
export default PhotoPage;