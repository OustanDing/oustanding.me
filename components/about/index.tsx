import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <p>
        I&apos;m a senior Software Engineering student at the{" "}
        <a
          className="text-link"
          href="https://uwaterloo.ca/"
          target="_blank"
          rel="noreferrer"
        >
          University of Waterloo
        </a>{" "}
        interested in distributed systems and full stack engineering. In the
        past, I&apos;ve interned at Citadel, Jane Street, Bloomberg and Wish.
      </p>
      <p>
        Outside of software engineering, I enjoy playing the piano, building{" "}
        <a
          className="text-link"
          href="https://uwblueprint.org/about"
          target="_blank"
          rel="noreferrer"
        >
          software for social good
        </a>
        , and queuing up some games of Apex Legends.
      </p>
      <p>
        If you&apos;d like to chat, let&apos;s connect through{" "}
        <a
          className="text-link"
          href="https://www.linkedin.com/in/oustanding/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        or at{" "}
        <a
          className="text-link"
          href="mailto:oustan10@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          oustan10@gmail.com
        </a>
        .
      </p>
    </>
  );
};

export default About;
