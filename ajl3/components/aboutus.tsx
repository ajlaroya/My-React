import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>I will help you ship better apps, faster, smarter. </strong>
          As an expert full stack web developer I have created the best user
          experiences in some of the most popular apps worldwide.
        </p>
      </div>
      <div className='container mx-auto px-11 text-center mt-28'>
        <h2>Indie Web Dev</h2>
        <div className='mt-2'>from Melbourne, AU</div>
        <div className='mt-5 grid grid-cols-1'>
            <Member id='arthur' name='Arthur' socialId='@ajlaroya' link="https://github.com/ajlaroya" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
