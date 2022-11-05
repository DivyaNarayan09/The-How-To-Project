import React from "react";
import NavBar from "./NavBar";
import Img1 from "./Images/6.png";
import Img2 from "./Images/7.png";
import Tabs from "./Tabs";
import BCards from "./BCards";
import Blogs from "./Blogs";
function MyActivity() {
  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   margin: "120px",
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   swipeToSlide: true,
  //   afterChange: function (index) {
  //     console.log(
  //       `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
  //     );
  //   },
  // };
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      <div class="search-bar2">
        <i class="fas fa-search search-icon2"></i>
      </div>

      <i class="profile-icon fa-3x fas fa-user-circle"></i>
      
      <NavBar />
      <Tabs/>
      <div class="feed myfeed">
        {Blogs.map((blog) => (
          <BCards
            key={blog.id}
            img={blog.imgURL}
            heading={blog.heading}
            
          />
        ))}
      </div>

    </>
  );
}

export default MyActivity;