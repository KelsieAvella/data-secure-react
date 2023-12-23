import React, { useEffect } from 'react';
import './CloudStyles.css';

import profilepic from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/StrawberryBG.png';
import post1 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/apple.jpg';
import post2 from '/Users/kelsie13/Documents/GitHub/data-secure-react/src/assets/bigfoot.jpg';

const Cloud = () => {
  useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add('cloud-page');
    
    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('cloud-page');
    };
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div className="feed-container">
    <div className="profile-container">
      {/* User profile section */}
      <div className="user-profile">
        <img src={profilepic} alt="Profile Picture" className="user-img" />
        <div className="user-info">
          <h2 className="user-name">Squishlover23</h2>
          <p className="bio">Bio: Passionate about squish hunting! 🦄✨</p>
          <div className="follow-count">
            <span>Followers: 15 </span>
            <span>Following: 38</span>
          </div>
        </div>
      </div>

      {/* Title for posts */}
      <h2 className="posts-title">My Posts:</h2>

      {/* Post container */}
      <div className="posts-container">
        {/* Post 1 */}
        <div className="post">
          <div className="post-user-info">
            <img
              src={profilepic}
              alt="Post 1 User"
              className="user-profile-img"
            />
            <div>
              <div className="post-username">Squishlover23</div>
            </div>
          </div>
          <img src={post1} alt="Post 1" className="post-img" />
          <p className="post-caption">
                Exploring the world of squishmallows!
              </p>
        </div>

        {/* Post 2 */}
        <div className="post">
          <div className="post-user-info">
            <img
              src={profilepic}
              alt="Post 2 User"
              className="user-profile-img"
            />
            <div>
              <div className="post-username">Squishlover23</div>
            </div>
          </div>
          <img src={post2} alt="Post 2" className="post-img" />
          <p className="post-caption">
                My latest squishmallow collection!
              </p>
        </div>

        {/* Add more posts as needed */}
      </div>
    </div>
    </div>
  );
};

export default Cloud;


