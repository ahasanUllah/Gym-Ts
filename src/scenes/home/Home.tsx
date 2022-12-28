import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import homePageText from "../../assets/HomePageText.png";
import homePageGraphic from "../../assets/HomePageGraphic.png";
import redBullSponsor from "../../assets/SponsorRedBull.png";
import forbsSponsor from "../../assets/SponsorForbes.png";
import fortuneSponsor from "../../assets/SponsorFortune.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:content-evolvetext  before:absolute before:-top-20">
                <img src={homePageText} alt="" />
              </div>
            </div>
          </div>
          <p>
            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
            Studios to get the Body Shapes That you Dream of.. Get Your Dream
            Body Now.
          </p>
        </div>

        <div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Join Now
          </ActionButton>

          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-yellow-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            Learn More
          </AnchorLink>
        </div>

        {/* IMAGE */}
        <div>
          <img src={homePageGraphic} alt="home-page-graphic" />
        </div>
      </div>

      {isAboveMediumScreen && (
        <div>
          <div>
            <div>
              <img src={redBullSponsor} alt="red-bull-sponsor" />
              <img src={fortuneSponsor} alt="red-bull-sponsor" />
              <img src={forbsSponsor} alt="red-bull-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
