import "./styles/Education.css";

const educationList = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Manipal University",
    period: "Jan 2026 - Present",
    description: "Focusing on advanced software design, computer applications, and database administration.",
  },
  {
    degree: "PG in Information Technology Business Analytics",
    school: "Conestoga College",
    period: "May 2024 - Aug 2025",
    location: "Kitchener, Ontario, Canada",
    description: "Specialized in data analysis, process mapping, requirements elicitation, and business intelligence solutions.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Lovely Professional University",
    period: "Aug 2020 - June 2023",
    location: "Punjab, India",
    description: "Acquired core training in database management systems, data structures, and software engineering methodologies.",
  },
];

const certificationsList = [
  {
    title: "SQL Certification",
    issuer: "Scaler Academy",
  },
  {
    title: "Introduction to Data Science Specialization",
    issuer: "Coursera / IBM Partner",
  },
];

const languagesList = [
  { name: "English", level: "Full Professional Proficiency" },
  { name: "Hindi", level: "Native or Bilingual Proficiency" },
  { name: "Telugu", level: "Native or Bilingual Proficiency" },
];

const Education = () => {
  return (
    <div className="education-section section-container" id="education">
      <div className="education-grid">
        <div className="education-column">
          <h3>Education</h3>
          <div className="education-timeline">
            {educationList.map((edu, index) => (
              <div className="education-item" key={index}>
                <div className="education-header">
                  <h4>{edu.degree}</h4>
                  <span className="education-date">{edu.period}</span>
                </div>
                <h5>{edu.school}</h5>
                {edu.location && <span className="education-loc">{edu.location}</span>}
                <p className="font-sans">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="credentials-column">
          <div className="certifications-block">
            <h3>Certifications</h3>
            <ul className="certifications-list">
              {certificationsList.map((cert, index) => (
                <li key={index} className="font-sans">
                  <strong>{cert.title}</strong> — <span>{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="languages-block">
            <h3>Languages</h3>
            <div className="languages-flex">
              {languagesList.map((lang, index) => (
                <div key={index} className="language-badge">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
