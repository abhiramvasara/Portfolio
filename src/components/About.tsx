import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para font-sans">
          I'm a <strong>Data Analyst and IT Business Analyst</strong> who enjoys the moment a messy dataset finally tells a clear story — and turning that story into something a business can act on.
        </p>
        <p className="para font-sans">
          I hold a <strong>Post-Graduate Degree in IT Business Analytics</strong> from Conestoga College (Kitchener, Canada) and a <strong>Bachelor of Computer Applications</strong> from Lovely Professional University, and I'm currently completing my <strong>Master of Computer Applications</strong> at Manipal University.
        </p>
        <p className="para font-sans">
          My toolkit spans advanced SQL analytics, relational database modeling, and interactive dashboards in Tableau and Power BI. Across my projects I've analyzed 15,000+ AI job postings and modeled customer churn for 7,000+ telecom users — always working back from one question: <strong>what decision does this data support?</strong>
        </p>
        <p className="para font-sans">
          I'm currently looking for data analyst and business analyst opportunities in Canada.
        </p>
      </div>
    </div>
  );
};

export default About;
