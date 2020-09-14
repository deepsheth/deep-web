/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import {
  Post,
  Slide,
  SlideBlog,
  SlideTitle,
  SlideDescription,
  FooterLogo,
  SlideButton,
} from "@shetharp/gatsby-theme-polaroid";
import { useStaticQuery, graphql, Link } from "gatsby";

export type SlidesProps = {
  posts: Post[];
};

/**
 * Shadow this file to add your own Slides to the homepage.
 * You can also split individual slides into their own file and import them here.
 */
const Slides: React.FC<SlidesProps> = (props) => {
  const { posts } = props;

  /**
   * Query for images
   * By default, these images should be located in your `/content/images` directory
   * The configuration for slideImageFragment is in `/src/data/slide-image-fragment.ts`
   */
  const slideImages = useStaticQuery(graphql`
    query {
      imgIntro: file(relativePath: { eq: "intro-deep-sheth.jpg" }) {
        ...slideImageFragment
      }
      imgParapet: file(relativePath: { eq: "parapet.jpg" }) {
        ...slideImageFragment
      }
      imgBread: file(relativePath: { eq: "bread.jpg" }) {
        ...slideImageFragment
      }
      imgFidelity: file(relativePath: { eq: "fidelity.jpg" }) {
        ...slideImageFragment
      }
      imgLehigh: file(relativePath: { eq: "lehigh.jpg" }) {
        ...slideImageFragment
      }
      imgDots: file(relativePath: { eq: "dots.jpg" }) {
        ...slideImageFragment
      }
    }
  `);

  return (
    <React.Fragment>
      {/**
       * INTRO
       */}
      <Slide
        id="intro"
        title="I’m a full-stack engineer developing greenfield innovations in the fintech industry."
        description={
          <React.Fragment>
            <p>
              I work on the Growth team at <a href="#bread">Bread</a> as a Software Engineer. Previously, I was on the
              innovation team at <a href="#fidelity">Fidelity</a>. I graduated from{" "}
              <a href="#lehigh">Lehigh University's</a> Computer Science and Business program and spent some time
              interning at Deloitte.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgIntro.childImageSharp.fluid}
        overlayColor="saffron.dark"
        highlightColor="primary"
        imagePosition="70% 20%"
        isBorderless
        hasScrollIndicator
      />

      {/**
       * WORK
       */}
      {/* Photo by Mark Konig
          Unsplash: https://unsplash.com/photos/Tl8mDaue_II */}
      <Slide
        id="bread"
        title="At Bread I'm building software products to expand payment options across the internet."
        description={
          <React.Fragment>
              <p>
            I'm a product-focused engineer who works heavily on our frontend. I focus on a mix of greenfield and growth work. I've
            pioneered our new design system, launched a new customer portal, and improved app performance to prepare us for unprecedented scale.
              </p>
              <p>As part of the Growth team, I run data-driven A/B tests to lift our checkout conversions and improve the
            overall customer journey.
              </p>
          </React.Fragment>
        }
        fluid={slideImages.imgBread.childImageSharp.fluid}
        overlayColor="lavender.base"
        highlightColor="lavender.base"
        isExpanded
        isColorful
        imagePosition="50% 50%"
        button={{ text: "Contact Me", href: "/contact" }}
      />

      <Slide
        id="fidelity"
        title="I developed firm-wide best practices for Fidelity's brokerage technology."
        description={
          <React.Fragment>
            As a software engineer on the <em>Center of Excellence</em> team, I developed proof of concepts to evaluate
            new tech stacks for legacy and greenfield applications. I've worked with{" "}
            <a href="https://ethereum.org/en/">Ethereum</a> to manage Alternative Investments,{" "}
            <a href="https://kafka.apache.org/">Kafka</a> to rebuild our core brokerage platform, and frontend
            frameworks to create dashboards for executives.
          </React.Fragment>
        }
        fluid={slideImages.imgFidelity.childImageSharp.fluid}
        overlayColor="lime.dark"
        highlightColor="aloe.base"
        isExpanded={false}
        isColorful={true}
        imagePosition="50% 50%"
      />

      {/**
       * PROJECT
       */}
      {/* Photo credit: Jacob Ehnmark
            Flickr: https://flic.kr/p/jUbvK*/}
      <Slide
        id="parapet"
        title="I built a database to discover vacant apartments in Jersey City."
        description={
          <React.Fragment>
            <p>
              As someone frustrated with trying to find broker-free apartments around NYC, I decided to make the process
              easier. <em>I launched Parapet</em> to make apartment hunting a data-driven decision. I worked across the
              stack, from the backend webscraper to the React frontend.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgParapet.childImageSharp.fluid}
        overlayColor="crystal.dark"
        highlightColor="crystal.base"
        isExpanded={false}
        imagePosition="80% 0%"
        button={{ text: "Open Parapet App", href: "https://parapet.deepsheth.com" }}
      />

      {/**
       * PROJECT
       */}
      <Slide
        id="lehigh"
        title="I come ready to tackle fintech challenges with my undergraduate experience."
        description={
          <React.Fragment>
            <p>
              At Lehigh, I <em>consistently won</em>{" "}
              <a href="https://thebrownandwhite.com/2015/04/27/coding-house-hackathon/">hackathons</a> and{" "}
              <a href="https://www2.lehigh.edu/news/app-inventors-display-practicality-creativity">
                coding competitions
              </a>
              . Along the way, I worked on many side projects with roommates.
            </p>
            <p>
              I graduated from Lehigh's{" "}
              <a href="https://engineering.lehigh.edu/cse/academics/undergraduate/computer-science-business-bs">
                Computer Science and Business program
              </a>
              , where I was a teaching assistant for two courses and a <em>founding member</em> of the{" "}
              <a href="http://www.lehighfintech.org/">Lehigh Fintech Group</a>.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgLehigh.childImageSharp.fluid}
        overlayColor="#69431d"
        highlightColor="mango.base"
        isColorful
        isExpanded
        hasDistinctBorder
      />

      {/**
       * PROJECT
       */}
      <Slide
        id="dots"
        title="As a fun project, I created a web app to play a game of connect-the-dots."
        description={
          <React.Fragment>
            I was inspired by the <a href="https://www.dots.co/">Dots mobile</a> game and recreated a cross-platform
            version using HTML5 canvas. <em>My top score is 573</em> — shouldn't be too hard to top. 😛
          </React.Fragment>
        }
        fluid={slideImages.imgDots.childImageSharp.fluid}
        overlayColor="saffron.base"
        highlightColor="saffron.base"
        isExpanded
        // isColorful
        hasDistinctBorder
        button={{ text: "Play Dots Game", href: "https://deepsheth.github.io/connect-the-dots-game/" }}
      />

      {/**
       * BLOG
       */}

      {/*<SlideBlog id="blog" posts={posts} backgroundColor="mediumblue" overlayColor="primary">*/}
      {/*  <SlideTitle>More</SlideTitle>*/}
      {/*  <SlideDescription>*/}
      {/*    <p>*/}
      {/*      Yet so vain is man, and so <em>blinded by his vanity</em>, that no writer, up to the very end of the*/}
      {/*      nineteenth century, expressed any idea that <a href="#">intelligent life</a> might have developed there far,*/}
      {/*      or indeed at all, beyond its earthly level. Nor was it generally understood that since Mars is older than*/}
      {/*      our earth... (<a href="https://www.gutenberg.org/files/36/36-h/36-h.htm">The War of Worlds</a>, H.G. Wells).*/}
      {/*    </p>*/}
      {/*  </SlideDescription>*/}
      {/*  <p>*/}
      {/*    <SlideButton*/}
      {/*      href="https://github.com/shetharp/gatsby-theme-polaroid"*/}
      {/*      sx={{ "&&&": { width: ["100%", null, "75%", "66.667%", "75%", null, "66.667%", null, "50%"] } }}*/}
      {/*    >*/}
      {/*      View on GitHub*/}
      {/*    </SlideButton>*/}
      {/*  </p>*/}
      {/*  <SlideDescription>*/}
      {/*    <p>*/}
      {/*      <br />*/}
      {/*      &mdash;*/}
      {/*    </p>*/}
      {/*    <p>*/}
      {/*      <FooterLogo />*/}
      {/*      <br />*/}
      {/*        /!*<a href="/">Deep Sheth</a>*!/*/}
      {/*    </p>*/}
      {/*  </SlideDescription>*/}
      {/*</SlideBlog>*/}
    </React.Fragment>
  );
};
export default Slides;
