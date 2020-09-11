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
      },
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
                I work on the Growth team at Bread as a Software Engineer.
                Previously, I was on the innovation team at Fidelity.
                I graduated from Lehigh University's Computer Science and Business program and spent some time interning at Deloitte.
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
            id="work-bread"
            title="Bread"
            description={
                <React.Fragment>
                    I went down yesterday to the <a href="#!">Piraeus with Glaucon</a> the son of Ariston, that I might offer up
                    my prayers to the goddess (Bendis, the <Link to="#">Thracian Artemis.</Link>); and also because{" "}
                    <em>I wanted to see</em> in what manner they would celebrate the festival, which was a new thing.
                </React.Fragment>
            }
            fluid={slideImages.imgBread.childImageSharp.fluid}
            overlayColor="lavender.base"
            highlightColor="lavender.base"
            isExpanded
            imagePosition="50% 50%"
            button={{ text: "Get started", href: "/readme" }}
        />

        <Slide
            id="work-fidelity"
            title="Fidelity"
            description={
                <React.Fragment>
                    I went down yesterday to the <a href="#!">Piraeus with Glaucon</a> the son of Ariston, that I might offer up
                    my prayers to the goddess (Bendis, the <Link to="#">Thracian Artemis.</Link>); and also because{" "}
                    <em>I wanted to see</em> in what manner they would celebrate the festival, which was a new thing.
                </React.Fragment>
            }
            fluid={slideImages.imgFidelity.childImageSharp.fluid}
            overlayColor="lime.dark"
            highlightColor="aloe.base"
            isExpanded
            isColorful
            imagePosition="50% 50%"
            button={{ text: "Get started", href: "/readme" }}
        />

        {/**
       * PROJECT
       */}
        { /* Photo credit: Jacob Ehnmark
            Flickr: https://flic.kr/p/jUbvK*/ }
      <Slide
        id="parapet"
        title="I built a database to discover vacant apartments in Jersey City"
        description={
          <React.Fragment>
            <p>
              You&apos;re looking at Polaroid&apos;s homepage. It&apos;s a great place to put together a{" "}
              <em>photo-rich portfolio</em>. Take a look at the <Link to="/theme-preview">Theme Preview</Link> page to
              see the other components that come with the theme.
            </p>
            <p sx={{ marginBottom: 0 }}>
              If you like what you see, get started with the <Link to="/readme">Readme</Link>.
            </p>
          </React.Fragment>
        }
        fluid={slideImages.imgParapet.childImageSharp.fluid}
        overlayColor="crystal.dark"
        highlightColor="crystal.base"
        isExpanded={false}
        imagePosition="80% 0%"
        button={{ text: "Theme Preview", href: "/theme-preview" }}
      />

      {/**
       * PROJECT
       */}
      <Slide
        id="lehigh"
        title="What if you replaced the noise of becoming with the silence of being?"
        description={
          <React.Fragment>
            Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite
            some of the best <em>blessings of existence</em>; and had lived nearly{" "}
            <a href="https://www.gutenberg.org/files/158/158-h/158-h.htm#link2HCH0001">twenty-one years</a> in the world
            with very little to distress or vex her.
          </React.Fragment>
        }
        fluid={slideImages.imgLehigh.childImageSharp.fluid}
        overlayColor="#855524"
        highlightColor="#c4731f"
        isColorful
        isExpanded
        hasDistinctBorder
      />

        {/**
         * PROJECT
         */}
        <Slide
            id="dots"
            title="What if you replaced the noise of becoming with the silence of being?"
            description={
                <React.Fragment>
                    Emma Woodhouse, handsome, clever, and rich, with a comfortable home and happy disposition, seemed to unite
                    some of the best <em>blessings of existence</em>; and had lived nearly{" "}
                    <a href="https://www.gutenberg.org/files/158/158-h/158-h.htm#link2HCH0001">twenty-one years</a> in the world
                    with very little to distress or vex her.
                </React.Fragment>
            }
            fluid={slideImages.imgDots.childImageSharp.fluid}
            overlayColor="mango.base"
            highlightColor="mediumorchid"
            isExpanded
            hasDistinctBorder
        />
        
      {/**
       * BLOG
       */}
      <SlideBlog id="blog" posts={posts} backgroundColor="mediumblue" overlayColor="primary">
        <SlideTitle>More</SlideTitle>
        <SlideDescription>
          <p>
            Yet so vain is man, and so <em>blinded by his vanity</em>, that no writer, up to the very end of the
            nineteenth century, expressed any idea that <a href="#">intelligent life</a> might have developed there far,
            or indeed at all, beyond its earthly level. Nor was it generally understood that since Mars is older than
            our earth... (<a href="https://www.gutenberg.org/files/36/36-h/36-h.htm">The War of Worlds</a>, H.G. Wells).
          </p>
        </SlideDescription>
        <p>
          <SlideButton
            href="https://github.com/shetharp/gatsby-theme-polaroid"
            sx={{ "&&&": { width: ["100%", null, "75%", "66.667%", "75%", null, "66.667%", null, "50%"] } }}
          >
            View on GitHub
          </SlideButton>
        </p>
        <SlideDescription>
          <p>
            <br />
            &mdash;
          </p>
          <p>
            <FooterLogo />
            <br />
            Polaroid Theme
            <br />
            By <a href="https://arpitsheth.com/">Arpit Sheth</a>
          </p>
        </SlideDescription>
      </SlideBlog>
    </React.Fragment>
  );
};
export default Slides;
