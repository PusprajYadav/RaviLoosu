import React from 'react';
import './ContentDevPartner.css'; // External CSS file for styling
import contentpartner1 from './assset/contentpartner1.png';
import contentpartner2 from './assset/contentpartner2.png';
import contentpartner3 from './assset/contentpartner3.png';
import contentpartner4 from './assset/contentpartner4.png';


const ContentDevPartner = () => {
  return (
    <section className="contentdevpartner">
      <h2>Our Client</h2>
      <p>
        Bluink360 proudly serves diverse clients, from corporations to educational and
        government institutions, delivering high-quality, customized learning materials that
        advance training and development initiatives.
      </p>
      <div className="client-logos">
        <img src={contentpartner1} alt="Synechron" />
        <img src={contentpartner2} alt="Brillio" />
        <img src={contentpartner3} alt="Radisys" />
        <img src={contentpartner4} alt="Global Academy" />
      </div>
    </section>
  );
};

export default ContentDevPartner;
