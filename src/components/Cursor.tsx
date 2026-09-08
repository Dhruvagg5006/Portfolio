import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run custom cursor on fine pointer devices (desktop/mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let hover = false;
    let animId: number;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const setX = gsap.quickSetter(cursor, "x", "px");
    const setY = gsap.quickSetter(cursor, "y", "px");

    const mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cursorPos = { x: mousePos.x, y: mousePos.y };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function loop() {
      if (!hover) {
        const delay = 5;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        setX(cursorPos.x);
        setY(cursorPos.y);
      }
      animId = requestAnimationFrame(loop);
    }
    animId = requestAnimationFrame(loop);

    const interactiveItems = document.querySelectorAll("[data-cursor]");
    const mouseOverHandlers: Array<{ elem: HTMLElement; fn: (e: MouseEvent) => void }> = [];
    const mouseOutHandlers: Array<{ elem: HTMLElement; fn: () => void }> = [];

    interactiveItems.forEach((item) => {
      const element = item as HTMLElement;
      const overHandler = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          setX(rect.left);
          setY(rect.top);
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const outHandler = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      element.addEventListener("mouseover", overHandler);
      element.addEventListener("mouseout", outHandler);
      mouseOverHandlers.push({ elem: element, fn: overHandler });
      mouseOutHandlers.push({ elem: element, fn: outHandler });
    });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      mouseOverHandlers.forEach(({ elem, fn }) => elem.removeEventListener("mouseover", fn));
      mouseOutHandlers.forEach(({ elem, fn }) => elem.removeEventListener("mouseout", fn));
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
