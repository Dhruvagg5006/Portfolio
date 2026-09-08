import { useRef } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  {
    name: "She-ield",
    category: "Women's Safety Platform",
    tools: "React, FastAPI, MySQL, JWT, REST APIs, Machine Learning",
    image: "/images/sheild.jpg",
    link: "https://github.com/Aayansh-singh-24/She-ield",
    description:
      "Full-stack women's safety platform with SOS alerts, live GPS location sharing, trusted contacts management, and secure real-time audio distress detection.",
  },
  {
    name: "HeaLLens",
    category: "AI Vital Sign & Health Analytics",
    tools: "Python, OpenCV, MediaPipe, Machine Learning",
    image: "/images/heallens.jpg",
    link: "https://github.com/Dhruvagg5006/HealLens",
    description:
      "Contactless camera-based rPPG system to monitor Heart Rate, HRV, SpO2, and Stress Levels in real-time. AI regression model predicts Blood Pressure with 87% accuracy.",
  },
  {
    name: "Credit Card Fraud Detection",
    category: "Fintech & Machine Learning",
    tools: "Python, XGBoost, FastAPI, Machine Learning",
    image: "/images/fraud.jpg",
    link: "https://github.com/Dhruvagg5006/Credit-Card-Fraud-Detection",
    description:
      "End-to-end ML pipeline using XGBoost achieving 81% recall and 85% precision on 284,807+ transactions. Deployed with FastAPI backend for real-time transaction scoring.",
  },
  {
    name: "Smart Expense Tracker",
    category: "Financial Analytics & Forecasting",
    tools: "Python, Power BI, Pandas, Time-Series Analysis",
    image: "/images/expense.jpg",
    link: "https://github.com/Dhruvagg5006/Smart_Expense_Tracker",
    description:
      "Financial analytics dashboard tracking spending patterns, time-series budget forecasting (+35% budget adherence), and automated anomaly detection.",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const flex = flexRef.current;
    if (!section || !flex) return;

    if (window.innerWidth <= 1024) return;

    const getScrollDistance = () => {
      const totalWidth = flex.scrollWidth;
      const viewWidth = window.innerWidth;
      return Math.max(400, totalWidth - viewWidth + 240);
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollDistance() * 1.25}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        anticipatePin: 1,
        invalidateOnRefresh: true,
        id: "work-pin",
      },
    });

    timeline.to(flex, {
      x: () => -getScrollDistance(),
      ease: "none",
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
      timeline.kill();
      ScrollTrigger.getById("work-pin")?.kill();
    };
  }, { scope: sectionRef });

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
