import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    num: "01",
    name: "Ontario Electricity Demand, Weather & Time-of-Use Cost Analysis",
    category: "Data Analytics & SQL",
    description: "Commercial electricity customers often overpay on energy bills without knowing when or why costs spike. Collected and merged 8,784 hours of Ontario grid demand (IESO) with Toronto weather data using Python and Pandas, building an automated cleaning pipeline. Built a MySQL Time-of-Use billing engine revealing that on-peak hours — just 18% of the year — drive 30.7% of total electricity costs. Recommended shifting flexible loads like EV charging and HVAC pre-cooling to off-peak hours (~52% cheaper per kWh) — delivering actionable cost reduction insights via an interactive Tableau dashboard.",
    tools: "Python, Pandas, MySQL, Tableau",
    link: "https://github.com/abhiramvasara/Ontario-Electricity-Demand-Weather-Time-of-Use-Cost-Analysis-2024-",
    tableau: "https://public.tableau.com/views/OntarioElectricityDemandWeatherTime-of-UseCostAnalysis2024/Dashboard1",
    image: "/images/ontario_energy.png",
  },
  {
    num: "02",
    name: "TELUS Wireless Billing Optimization — Capstone Project",
    category: "IT Business Analysis",
    description: "TELUS faced a 63% surge in wireless customer complaints (2024 CCTS Mid-Year Report) driven by billing errors, unauthorized contract changes, and lack of customer consent. Served as Assistant PM and Business Analyst coordinating Customer Support, IT, and Legal teams. Conducted SWOT, PESTEL, and Balanced Scorecard analysis; led AS-IS/TO-BE process mapping and elicited 10 business requirements and 20+ functional/non-functional requirements targeting a 30% complaint reduction and 95% billing accuracy. Evaluated 3 solution options using a weighted decision matrix and recommended a Proactive Confirmation & Assurance Program (consent-first model). Designed logical database model with ER diagrams, built Tableau and Power BI dashboards for complaint and billing KPIs, and deployed a working prototype via Vercel.",
    tools: "Tableau, Power BI, SQL, Microsoft Visio, Jira, Confluence, Agile, Vercel",
    link: "https://github.com/abhiramvasara/telus-capstone-project",
    image: "/images/telus.webp",
  },
  {
    num: "03",
    name: "AI Jobs Market Analysis 2024–2025",
    category: "Data Analytics & SQL",
    description: "Job seekers struggle to know which skills to prioritize for AI roles — the market is noisy and salary expectations are unclear. Collected and analyzed 15,000 global AI job postings across 20+ countries using 15+ advanced SQL queries (CTEs, window functions, subqueries). Built a labor market intelligence dashboard identifying Python and SQL as top in-demand skills, Canada as the 3rd largest AI hiring market (769 postings), and a $28,000 salary gap between large and small employers — enabling job seekers to make data-driven upskilling and career targeting decisions.",
    tools: "SQL, MySQL, Tableau",
    link: "https://github.com/abhiramvasara/ai-jobs-market-analysis",
    tableau: "https://public.tableau.com/views/AIJobsMarketAnalysis2024-2025/AIJobsMarketAnalysis2024-2025",
    image: "/images/ai_jobs.webp",
  },
  {
    num: "04",
    name: "Telecom Customer Churn Analysis",
    category: "Data Analytics & SQL",
    description: "Telecom companies lose significant revenue to customer churn without knowing which segments are most at risk or when to intervene. Analyzed 7,043 customer records using SQL cohort analysis (CTEs, window functions) to segment churn rates by contract type, tenure, and service type. Discovered month-to-month customers churn at 42.71% — 15x higher than two-year contract customers — and new customers (0–1 yr tenure) are the highest risk at 47.44%. Recommended focusing retention investment in the first 12 months of the customer lifecycle, delivering findings via a 5-chart Tableau dashboard for stakeholder review.",
    tools: "SQL, MySQL, Tableau",
    link: "https://github.com/abhiramvasara/telecom-churn-analysis",
    tableau: "https://public.tableau.com/views/TelecomCustomerChurnAnalysis_17798559144030/TelecomCustomerChurnAnalysis",
    image: "/images/churn.webp",
  },
];

const Work = () => {
  if (projects.length === 0) return null;
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.description && (
                  <p className="work-desc font-sans">{project.description}</p>
                )}
                <div className="work-tools-container">
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300 text-sm inline-flex items-center gap-1"
                    data-cursor="disable"
                  >
                    View Github &rarr;
                  </a>
                  {project.tableau && (
                    <a
                      href={project.tableau}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-purple-400 hover:text-purple-300 text-sm inline-flex items-center gap-1"
                      data-cursor="disable"
                    >
                      View Tableau &rarr;
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={import.meta.env.BASE_URL + project.image.slice(1)} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
