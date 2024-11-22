import Navagation from "./Navigate";
import Stats from "./Content/Stats";

import Footer from "./Components/Footer";
import ContentBan from "./Content/Contentban";
import Work from "./Content/Work";
import Conser from "./Content/Conser";
import ContactForm from "./Content/Contact";
import ContentDevPartner from "./Content/contentdevpartner";
import WhatMakeusdiffer from "./Content/WhatMakeusdiffer";
// import WhyChooseUsHm from './Content/WhyChooseUs'
// import Companieslist from "./Components/Companies";

function ContentDevelopment() {
  return (
    <>
      <Navagation />
      <div style={{ backgroundColor: "#f0f7ff" }}>
        <ContentBan />
        <Stats />

        {/* <Work /> */}
        <Conser />
        <WhatMakeusdiffer />
        <ContentDevPartner />

        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
export default ContentDevelopment;
