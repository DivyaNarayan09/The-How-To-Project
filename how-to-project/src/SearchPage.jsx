import React from "react";
import Chips from './Chips';
import BlogChips from './BlogChips';
import NavBar from "./NavBar";
import Img1 from "./Images/6.png";
import Img2 from "./Images/7.png";
import {Typography} from '@mui/material';
function SearchPage() {
  
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />
      <div className="header-search">
        <Typography variant="h2" marginTop={"20px"}>TOPICS</Typography>
      </div>
      <div class="search-bar3">
        <i class="fas fa-search search-icon2"></i>
      </div>
      <div className="search-container">     
       <Typography variant='h4' color="white" margin="30px">BROWSE CATEGORIES</Typography>
       <Chips/><br/>
       <a href="">Show more</a>
       <Typography variant='h4' color="white" margin="30px">FOR YOU</Typography>
       <BlogChips/><br/>
       <a href="">view more</a>
      </div>


      <NavBar />

      
    </>
  );
}

export default SearchPage;
