import React from "react";
import Img1 from "./Images/6.png";
import Img2 from "./Images/7.png";
import Img3 from "./Images/image 2.png";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Chips from './Chips';
function BlogPost() {

  return (

    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />
      
      <Button size="large"  disableTouchRipple>
      <i class="arrow fa-solid fa-3x fa-circle-arrow-left"></i></Button>
      <Button disableTouchRipple>
      <i class="arrow fa-solid fa-3x fa-circle-arrow-right"></i></Button>
      
      
      
      <div class="right-bar">

        <Button size="large" sx={{color:"white",margin:2}}>
          <i class="fa fa-3x fa-check-square-o"  aria-hidden="true"></i> 
          <Typography variant="h6" align="center" >In This Article</Typography>
        </Button>
         <Typography variant="body1" align="center">item1</Typography>
         <Typography align="center">item1</Typography>
         <Typography align="center">item1</Typography>
      </div>


      <div className="left-bar">
        <Typography variant="h5" align="center">TAGS</Typography>
        
      </div>



      <div className="container-head">
        <Typography align="center">Building an image searching app using Alpine and Tailwind CSS</Typography>
        <Button  size="large" disableTouchRipple>
          <i class="user-icon fa-3x fa-solid fa-user" ></i>
          <Typography variant="h6" align="center" color="white" marginLeft={5}>By Author</Typography>
        </Button>
      </div>     
       <img class="img3" src={Img3} alt="" />
       

      <div class="container-content">

      <Typography variant="h6" align="center">Alpine.js is a collection of 14 attributes, 6 properties, and 2 methods; you can think of it as jQuery for the modern web.<br/>
However, unlike jQuery — which provides imperative DOM APIs, Alpine.js provides a declarative way to bind data to the DOM using the x-bind directive.<br/>
Alpine.js is very beginner-friendly, you barely need to know any JavaScript to get up and running with it.</Typography>
      </div>



      <div class="footer">
          <Button size="large">
            <i class="footer-icon fa fa-3x fa-heart-o"></i>
          </Button>
          <Button size="large">
            <i class="footer-icon fa fa-3x fa-share-alt"></i>
          </Button>
          <Button size="large">
            <i class="footer-icon fa fa-3x fa-bookmark-o" ></i>
          </Button>
      </div>

    </>
  );
}

export default BlogPost;
