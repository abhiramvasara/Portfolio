import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My <span>experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern (Marketing)</h4>
                <h5>DEC Industries PVT Ltd</h5>
                <span className="career-location" style={{ fontSize: "14px", color: "#a1a1aa", display: "block", marginTop: "4px" }}>
                  Hyderabad, India
                </span>
              </div>
              <h3 className="career-date" style={{ fontSize: "28px", lineHeight: "34px", whiteSpace: "nowrap" }}>
                Dec '22 - Aug '23
              </h3>
            </div>
            <div className="career-description-container" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="font-sans" style={{ fontSize: "16px", lineHeight: "1.6", fontWeight: 300, color: "#e4e4e7" }}>
                Queried and analyzed sales, production, and customer retention datasets using SQL and Excel to surface trends and performance gaps for sales managers, production leads, and the marketing team. Built and maintained interactive Tableau dashboards consolidating manual weekly reports into automated visual summaries for stakeholders. Wrote recurring SQL reports to monitor customer retention patterns, flag at-risk segments, and evaluate marketing campaign performance. Validated and maintained relational database records to ensure data accuracy and consistency across reporting cycles.
              </p>
              <div className="career-tools-used" style={{ fontSize: "14px", fontWeight: 500, color: "#a78bfa" }}>
                Tools & Tech: <span style={{ fontWeight: 400, color: "#a1a1aa" }}>SQL, Excel, Tableau</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
