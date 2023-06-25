import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Shopping.com"}>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img
            src="/images/privacypolicy.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        
        <div className="col-md-4">
          <h2>Private Policy</h2>
          <p className="text-justify mt-3">
            We operates our business with your security and privacy in mind.
          </p>
          <p className="text-justify mt-3"> 
            1. We work to protect the security of your personal information during transmission by using encryption protocols and software.
          </p>
          <p className="text-justify mt-3"> 
            2. We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data.
          </p>
          <p className="text-justify mt-3"> 
            3. We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, processing, and disclosure of personal customer information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you.
          </p>
          <p className="text-justify mt-3"> 
            4. Our devices offer security features to protect them against unauthorized access and loss of data. You can control these features and configure them based on your needs.
          </p>
          <p className="text-justify mt-3"> 
            5. t is important for you to protect against unauthorized access to your password and to your computers, devices and applications. Be sure to sign off when finished using a shared computer.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;