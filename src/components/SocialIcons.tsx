import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const cleanupFns: Array<() => void> = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        link.style.setProperty("--siLeft", `${x}px`);
        link.style.setProperty("--siTop", `${y}px`);
      };

      const handleMouseLeave = () => {
        link.style.setProperty("--siLeft", "50%");
        link.style.setProperty("--siTop", "50%");
      };

      elem.addEventListener("mousemove", handleMouseMove);
      elem.addEventListener("mouseleave", handleMouseLeave);

      cleanupFns.push(() => {
        elem.removeEventListener("mousemove", handleMouseMove);
        elem.removeEventListener("mouseleave", handleMouseLeave);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/Dhruvagg5006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/dhruvagg50306"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://leetcode.com/u/dhruv_agg/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
        </span>
        <span>
          <a
            href="mailto:dhruvagg5006@gmail.com"
            aria-label="Email"
          >
            <MdEmail />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="https://drive.google.com/file/d/1g-MwuKac8wSC2AhDVXvIAgFBMuU-NLqU/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
