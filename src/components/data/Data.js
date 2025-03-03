import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import './DataStyles.css';

const Data = () => {
    return (
        <div className='data'>
            <div className="container">
                <div className="content">
                    <h2>About Squishapedia</h2>
                    <p>A blogging website that lets users share all news and content Squishmallow related. Post about new releases, recent squish purchases and your collection for fellow Squishmallow lovers to view!</p>
                    <div>
                        {/* Use the Link component to create a link to the desired page */}
                        <Link to="/signup">
                            <button>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;




