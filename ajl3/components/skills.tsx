import React, { useContext, useRef } from "react";
import styles from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";

const fallbackCommits = 272

interface Props {
  commits: number
}

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1
  return 0.2
};

const Skills: React.FC<Props> = ({ commits }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 4;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
            clientHeight + halfH,
            Math.max(-screenH, scrollY - offsetTop) + halfH
        ) / clientHeight
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  const numOfCommits = Math.round(commits + fallbackCommits || 0).toLocaleString()

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <span
            className={styles.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            I know my full-stack tools & technologies inside out.
          </span>
          <span
            className={`${styles.skillText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            I have created <strong>12</strong> different web projects, using a
            wide variety of different technologies
          </span>
          <span
            className={`${styles.skillText} inline-block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            I specialize in React applications
          </span>
          <span
            className={`${styles.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 3),
            }}
          >
            Over <strong>{numOfCommits}</strong> git contributions in web development over the past year
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
