import React from 'react'
import './RecoveryStyles.css'
import Slider from 'react-slick';

import customProfile from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/owlBG.png';
import profile2 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/bee-removebg-preview.png';
import Post1 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/bears.jpg';
import Post2 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/standard_resolution.jpg';
import profile3 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/catBG1.png';
import Post3 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/sakuracat.jpg';
import profile4 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/dogBG.png';
import Post4 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/coffeesquish.jpg';
import profile5 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/NeopolitanBG.png';
import post6 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/Sanriosquish.jpg';
import profile6 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/caterpillarBG.png';
import post5 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/kelsiepost.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Recovery = () => {
    const posts = [
      {
        id: 1,
        userProfile: customProfile,
        postImage: Post1,
        username: 'Squishfanatic01',
        caption: 'Put up a net for my bears! #organization #cute',
      },

      {
        id: 2,
        userProfile: profile2,
        postImage: Post2,
        username: 'Squishmalove13',
        caption: 'Cozy night in with Carmelita #smores #movienight',
      },

      {
        id: 3,
        userProfile: profile3,
        postImage: Post3,
        username: 'squishyvibes4',
        caption: 'In love with the sakura cat! Wish I could travel to Japan to see the cherry blosoms irl. #cats #pink',
      },

      {
        id: 4,
        userProfile: profile4,
        postImage: Post4,
        username: 'goldenmirmy',
        caption: 'My new setup inspired by the color palette of this coffee mallow! #cozygames #twitchstreamer',
      },

      {
        id: 5,
        userProfile: profile5,
        postImage: post5,
        username: 'Kelsie13',
        caption: "I'm outnumbered! #sendhelp #ihavenomoney "
      },


      {
        id: 6,
        userProfile: profile6,
        postImage: post6,
        username: 'squishyvibes4',
        caption: 'Spotted the summer sanrio collection at the 5 below in Oakbrook! #sanrio #chicagolandarea',
      },
      // Add more post objects as needed
    ];
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 6000,  // Set autoplay speed in milliseconds
      };
  
    return (
      <div className="feed-container">
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.id} className="post">
              <div className="user-profile">
                <img src={post.userProfile} alt="Custom Profile"  />
                <div className="user-info">{post.username}</div>
              </div>
              <img src={post.postImage} alt={`Post ${post.id}`} className = "post-img" />
              <div className="post-caption">{post.caption}</div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Recovery;
  