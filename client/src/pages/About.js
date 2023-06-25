import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Shopping.com"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        
        <div className="col-md-4">
          <h2>About Us</h2>
          <p className="text-justify mt-2">
            We are a company that obsesses over customers. Our actions, goals, projects, programmes and inventions begin and end with the customer at the forefront of our minds. In other words, we start with the customer and work backwards. When we hit on something that is really working for customers, we commit to it in the hope that it will turn into an even bigger success. However, it’s not always as straightforward as that. Inventing is messy, and over time, it’s certain that we’ll fail at some big bets too.
          </p>
          <p>
            Shopping.com does not sell products for purchase by children. We sell children's products for purchase by adults. If you are under 18, you may use Amazon Services only with the involvement of a parent or guardian. We do not knowingly collect personal information from children under the age of 13 without the consent of the child's parent or guardian.   
          </p>
          <p>
            Our Moto is that we continue to aspire to be Earth’s most customer-centric company and we recognise this to be no small or easy challenge. We know there is much we can do better and we find tremendous energy in the many challenges and opportunities that lie ahead.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;