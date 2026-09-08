import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Member</h4>
                <h5>Innogeeks Technical Society, KIET</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Collaborate with cross-functional teams on real-world software projects spanning data analytics, machine learning, and full-stack web development using Agile practices. Conduct technical workshops on emerging AI/ML technologies for 50+ peers.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>
                  NoviTech R&D Pvt Ltd{" "}
                  <a
                    href="https://drive.google.com/file/d/1kOm-D3YP94ck_1t9pz8h6ECMn702fBN0/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="career-cert-link"
                    data-cursor="disable"
                  >
                    🔗 Certificate
                  </a>
                </h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Analyzed large-scale datasets using Python (Pandas, NumPy) and deployed Power BI dashboards tracking 10+ KPIs, reducing data processing time by 60%. Surfaced performance trends via statistical analysis and time-series forecasting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (8.79 CGPA)</h4>
                <h5>KIET Group of Institutions</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Bachelor of Technology in Computer Science and Engineering (2024–2028) at Ghaziabad, UP. Solid foundation in Data Structures, Algorithms, OOP, Database Management Systems, and Cloud Architectures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary (95.8%)</h4>
                <h5>Lord Mahavira Academy</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed CBSE Class XII with 95.8% and CBSE Class X with 95.6% at Saharanpur, Uttar Pradesh, demonstrating academic excellence in Science and Mathematics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
