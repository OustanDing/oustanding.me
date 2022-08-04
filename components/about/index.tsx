import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <p>
        I&apos;m a 3rd-year Software Engineering student at the University of
        Waterloo with a passion for full stack engineering and consumer
        software. Currently at{" "}
        <a
          className="text-link"
          href="https://www.bloomberg.com/company/"
          target="_blank"
          rel="noreferrer"
        >
          Bloomberg
        </a>{" "}
        working on distributed systems for the ETF primary marketplace platform.
        Here is my{" "}
        <a
          className="text-link"
          href="/Resume%20-%20Oustan%20Ding.pdf"
          target="_blank"
          rel="noreferrer"
        >
          resume
        </a>{" "}
        :)
      </p>
      <p>
        I&apos;m extremely motivated by the positive impact of my work. As a
        Technical Lead on{" "}
        <a
          className="text-link"
          href="https://uwblueprint.org"
          target="_blank"
          rel="noreferrer"
        >
          UW Blueprint
        </a>
        , I lead a team of 10 student developers and designers to build
        open-source software for non-profit organizations.
      </p>
      <p>
        I 💙 learning new things and building projects to bring my ideas to
        life. So far, I&apos;ve built a{" "}
        <a
          className="text-link"
          href="https://autodj.party"
          target="_blank"
          rel="noreferrer"
        >
          custom Spotify party playlist generator
        </a>
        , a{" "}
        <a
          className="text-link"
          href="https://nestris-online.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          multiplayer Classic Tetris platform
        </a>{" "}
        and a{" "}
        <a
          className="text-link"
          href="https://itsohana.com"
          target="_blank"
          rel="noreferrer"
        >
          collaborative code editor/whiteboard
        </a>
        , with more to come.
        {/* I&apos;ve also lost many hours of sleep at various{" "}
        <a
          className="text-link"
          href="https://devpost.com/OustanDing"
          target="_blank"
          rel="noreferrer"
        >
          hackathons
        </a>
        . */}
      </p>
      <p>
        When I&apos;m not coding, you&apos;ll find me going on drives with my
        family 🚗&nbsp;, queuing up a game with the squad 🕹️&nbsp;, playing the
        piano 🎹&nbsp;, or catching up on K-dramas 📺&nbsp;.
      </p>
      <p>
        If you&apos;d like to chat, please feel free to reach out through{" "}
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
        </a>{" "}
        💡
      </p>
    </>
  );
};

export default About;
