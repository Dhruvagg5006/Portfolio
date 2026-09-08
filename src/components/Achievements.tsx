import { FaTrophy, FaCertificate, FaCode, FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./styles/Achievements.css";

const achievements = [
  {
    title: "Galgotias International Hackathon (GIH 2025)",
    badge: "Top 50 / 2000+ Teams",
    desc: "Ranked in the top 50 among 2000+ participating teams globally, building an impactful AI-driven real-world solution.",
    certificateUrl: "https://drive.google.com/file/d/1P4Baf_AwsfifjpiZwG9Zwos_riKUCzWn/view?usp=sharing",
  },
  {
    title: "CodeVeda 2025",
    badge: "Top 150 National Rank",
    desc: "Secured a top 150 rank in the prestigious national-level competitive programming and algorithmic problem-solving contest.",
    certificateUrl: "https://drive.google.com/file/d/1H6me2onwUFMxm03O2U9FAzyxYzXJDPs3/view?usp=sharing",
  },
  {
    title: "HackCBS 8.0",
    badge: "MLH Hackathon Participant",
    desc: "Participated in one of India's largest student hackathons backed by Major League Hacking (MLH), developing rapid prototypes under Agile time constraints.",
    certificateUrl: "https://drive.google.com/file/d/1bsVKLKvJM42GKb1vggyNOvErEOiX8Bod/view?usp=sharing",
  },
  {
    title: "Inter-College Coding & Hacking",
    badge: "Multiple Awards",
    desc: "Consistent recognition, podium finishes, and accolades across inter-college coding contests, algorithmic showdowns, and hackathons.",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    badge: "Cloud Architecture",
    desc: "Demonstrated fundamental understanding of AWS Cloud concepts, security, core services, and global cloud infrastructure.",
    certificateUrl: "https://drive.google.com/file/d/1EEr7Svo3KuuIm1qxyKKeOtDC39Q9n3x2/view?usp=sharing",
  },
  {
    title: "AWS Certified Data Engineering – Associate",
    issuer: "Amazon Web Services",
    badge: "Data Pipelines",
    desc: "Validated expertise in designing, implementing, and maintaining scalable data pipelines, ETL workflows, and lakehouse architectures on AWS.",
    certificateUrl: "https://drive.google.com/file/d/18QYXe7oAp-xgVPCS8AhJIR3oEl-O8JWU/view?usp=sharing",
  },
  {
    title: "Deloitte Data Analytics Simulation",
    issuer: "Deloitte / Forage",
    badge: "Business Analytics",
    desc: "Completed end-to-end data analytics virtual simulation including dataset exploratory analysis, forensic telemetry, and executive dashboarding.",
    certificateUrl: "https://drive.google.com/file/d/1CsU2eBqOA_Dgrz3ewblmqpdXKNYzSjyM/view?usp=sharing",
  },
];

const skillCategories = [
  {
    name: "Languages & Core",
    skills: ["Python", "Java", "JavaScript", "SQL", "Data Structures", "Algorithms", "OOP"],
  },
  {
    name: "Frameworks & Backend",
    skills: ["React", "FastAPI", "REST APIs", "JWT Authentication", "Node.js", "Express"],
  },
  {
    name: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Matplotlib", "Statistical Analysis", "Supervised Learning"],
  },
  {
    name: "AI & Computer Vision",
    skills: ["OpenCV", "MediaPipe", "Generative AI", "rPPG Systems", "Real-time AI Inference"],
  },
  {
    name: "Data Viz & Databases",
    skills: ["MySQL", "Power BI", "Tableau", "Plotly Dash", "Power Query", "MS Excel"],
  },
  {
    name: "Cloud & Dev Tools",
    skills: ["AWS Cloud", "Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="achievements-header">
        <h2>
          Honors <span>&</span> Credentials
        </h2>
        <p>
          Highlights of hackathon achievements, competitive programming milestones, industry-standard certifications, and technical proficiencies.
        </p>
      </div>

      <div className="achievements-grid-dual">
        <div className="achieve-column">
          <h3>
            <FaTrophy /> Hackathons & Awards
          </h3>
          <div className="achieve-card-list">
            {achievements.map((item, idx) => (
              <div className="achieve-card" key={idx}>
                <div className="achieve-card-head">
                  <h4>{item.title}</h4>
                  <span className="achieve-badge">{item.badge}</span>
                </div>
                <p>{item.desc}</p>
                {item.certificateUrl && (
                  <div className="achieve-card-foot">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-btn"
                      data-cursor="disable"
                    >
                      <span>Verify Credential</span>
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="achieve-column">
          <h3>
            <FaCertificate /> Certifications
          </h3>
          <div className="achieve-card-list">
            {certifications.map((item, idx) => (
              <div className="achieve-card" key={idx}>
                <div className="achieve-card-head">
                  <div>
                    <h4>{item.title}</h4>
                    <span style={{ color: "var(--accentColor)", fontSize: "13px", fontWeight: 400 }}>
                      {item.issuer}
                    </span>
                  </div>
                  <span className="achieve-badge">{item.badge}</span>
                </div>
                <p>{item.desc}</p>
                {item.certificateUrl && (
                  <div className="achieve-card-foot">
                    <a
                      href={item.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-btn"
                      data-cursor="disable"
                    >
                      <span>Verify Credential</span>
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="skills-container">
        <h3>
          <FaCode style={{ verticalAlign: "middle", marginRight: "10px" }} />
          Technical Skills & Tooling
        </h3>
        <div className="skills-categories">
          {skillCategories.map((cat, idx) => (
            <div className="skill-cat-box" key={idx}>
              <h5>{cat.name}</h5>
              <div className="skill-pill-list">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-pill" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
