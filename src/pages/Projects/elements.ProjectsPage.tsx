import data from "./data.ProjectsPage.json";
import { useScreenSize } from "@/hooks";
import { keyGen, splitTextWithBreaks } from "@/helpers";
import {
  Navigation,
  HeadingBlock,
  ProjectPreview,
  ProjectInfo,
  Img,
} from "@/components";
import MoviesAppImg from "@/assets/mymoviesapp.jpg";
import MoviesAppImgSm from "@/assets/mymoviesapp_small.jpg";
import QualitrimImg from "@/assets/qualitrim.jpg";
import QualitrimImgSm from "@/assets/qualitrim_small2.jpg";
import HaikuImg1 from "@/assets/haiku1.jpg";
import HaikuImg2 from "@/assets/haiku2.jpg";
import HaikuImgSm from "@/assets/haiku_small.jpg";
import QmsImg1 from "@/assets/qms1.jpg";
import QmsImg2 from "@/assets/qms2.jpg";
import QmsImgSm from "@/assets/qms_small.jpg";

import styles from "./ProjectsPage.module.scss";

function elements() {
  const {
    oneColRange,
    twoColRange,
    threeColRange,
    fourColRange,
    showNav,
    noElement,
  } = useScreenSize();

  const [myMoviesApp, qms, wordGuessingHaiku, qualitrim] = data.projects;
  const { linkUrl: myMoviesAppUrl } = myMoviesApp.links[2];
  const { linkUrl: qmsUrl } = qms.links[2];
  const { linkUrl: haikuUrl } = wordGuessingHaiku.links[1];
  const { linkUrl: qualitrimUrl } = qualitrim.links[1];

  let moviesScratches;
  let qmsScratches;
  let haikuScratches;
  let qualitrimScratches;

  switch (true) {
    case twoColRange:
      moviesScratches = myMoviesApp.scratch;
      qmsScratches = qms.scratch2Col;
      haikuScratches = wordGuessingHaiku.scratch2Col;
      qualitrimScratches = qualitrim.scratch2Col;
      break;

    case oneColRange:
      moviesScratches = myMoviesApp.scratch1Col;
      qmsScratches = qms.scratch1Col;
      haikuScratches = wordGuessingHaiku.scratch1Col;
      qualitrimScratches = qualitrim.scratch1Col;
      break;

    default:
      moviesScratches = myMoviesApp.scratch;
      qmsScratches = qms.scratch;
      haikuScratches = wordGuessingHaiku.scratch;
      qualitrimScratches = qualitrim.scratch;
  }

  const allElements = [
    showNav
      ? {
          element: (
            <Navigation
              links={data.links as NavItem[]}
              align="center"
              className={styles.navigation}
              isReversed
              key={keyGen()}
            />
          ),
          gridSize: 2,
        }
      : noElement(),

    !showNav
      ? {
          element: (
            <HeadingBlock
              type={"double"}
              heading={data.heading}
              headingBig={data.headingBig}
              tag="h2"
              tagBig="span"
              className={styles["heading"]}
              bigHeadingClass={styles["heading--big"]}
              key={keyGen()}
            />
          ),
          gridSize: oneColRange ? 1 : 2,
        }
      : noElement(),

    /////My Movies App
    {
      element: (
        <ProjectInfo
          data={myMoviesApp as ProjectData}
          scratches={moviesScratches}
          withHeading
          isJustified
          className={styles["movies-info"]}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element: (
        <HeadingBlock
          heading={myMoviesApp.title}
          size="small"
          className={styles["movies-heading"]}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element:
        twoColRange || oneColRange ? (
          <Img
            src={MoviesAppImgSm}
            alt={myMoviesApp.title}
            url={myMoviesAppUrl}
            className={styles["movies-preview"]}
            key={keyGen()}
          />
        ) : (
          <ProjectPreview
            img={MoviesAppImg}
            alt={myMoviesApp.title}
            url={myMoviesAppUrl}
            title={myMoviesApp.title}
            animationIn={20}
            animationOut={5}
            delayIn={0.2}
            className={styles["movies-preview"]}
            key={keyGen()}
          />
        ),
      gridSize: twoColRange || oneColRange ? 1 : 2,
    },

    /////Queue Management System
    {
      element: (
        <HeadingBlock
          heading={qms.title}
          size="small"
          align={threeColRange || twoColRange ? "end" : "start"}
          className={styles["qms-heading"]}
          id="qms"
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element: (
        <ProjectInfo
          data={qms as ProjectData}
          scratches={qmsScratches}
          isRight={threeColRange || twoColRange}
          className={styles["qms-info"]}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element:
        twoColRange || oneColRange ? (
          <Img
            src={QmsImgSm}
            alt={qms.title}
            url={qmsUrl}
            className={styles["qms-preview"]}
            key={keyGen()}
          />
        ) : (
          <ProjectPreview
            img={QmsImg1}
            hoverImg={QmsImg2}
            alt={qms.title}
            url={qmsUrl}
            title={qms.title}
            className={styles["qms-preview"]}
            isStatic
            key={keyGen()}
          />
        ),
      gridSize: twoColRange || oneColRange ? 1 : 2,
    },

    /////Word Guessing Haiku
    {
      element: (
        <HeadingBlock
          heading={splitTextWithBreaks(wordGuessingHaiku.title)}
          size="small"
          align={fourColRange || threeColRange ? "end" : "start"}
          className={styles["haiku-heading"]}
          id="word-guessing-haiku"
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element: (
        <ProjectInfo
          data={wordGuessingHaiku as ProjectData}
          scratches={haikuScratches}
          className={styles["haiku-info"]}
          isRight={!twoColRange}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element:
        twoColRange || oneColRange ? (
          <Img
            src={HaikuImgSm}
            alt={wordGuessingHaiku.title}
            url={haikuUrl}
            className={styles["haiku-preview"]}
            key={keyGen()}
          />
        ) : (
          <ProjectPreview
            img={HaikuImg1}
            hoverImg={HaikuImg2}
            alt={wordGuessingHaiku.title}
            url={haikuUrl}
            title={wordGuessingHaiku.title}
            direction="vertical"
            className={styles["haiku-preview"]}
            isStatic
            key={keyGen()}
          />
        ),
      gridSize: twoColRange || oneColRange ? 1 : 2,
    },

    /////Qualitrim
    {
      element: (
        <HeadingBlock
          heading={qualitrim.title}
          size="small"
          align={fourColRange || twoColRange ? "end" : "start"}
          className={styles["qualitrim-heading"]}
          id="qualitrim"
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element: (
        <ProjectInfo
          data={qualitrim as ProjectData}
          scratches={qualitrimScratches}
          isRight={fourColRange || twoColRange}
          className={styles["qualitrim-info"]}
          key={keyGen()}
        />
      ),
      gridSize: 1,
    },

    {
      element:
        twoColRange || oneColRange ? (
          <Img
            src={QualitrimImgSm}
            alt={qualitrim.title}
            url={qualitrimUrl}
            className={styles["qualitrim-preview"]}
            key={keyGen()}
          />
        ) : (
          <ProjectPreview
            img={QualitrimImg}
            alt={qualitrim.title}
            url={qualitrimUrl}
            title={qualitrim.title}
            animationIn={30}
            animationOut={5}
            delayIn={0.2}
            className={styles["qualitrim-preview"]}
            key={keyGen()}
          />
        ),
      gridSize: twoColRange || oneColRange ? 1 : 2,
    },
  ];

  return allElements;
}

export default elements;
