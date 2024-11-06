import Logo from "./Logo";
import Button from "./Button";
import { ButtonVariant } from "../types/enums";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as TwitterIconfrom } from "../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../assets/images/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import { ReactComponent as FlickrIcon } from "../assets/images/flickr.svg";
import { FOOTER_LINKS } from "../constants/data";

const PageFooter = () => {
  return (
    <div className="bg-light mt-[85px] ">
      <div className="mx-[16px] md:mx-[222px] my-[52px]">
        <div className="flex justify-between items-center">
          <div>
            <Logo color="light" />
          </div>
          <div>
            <Button label="REGISTER" variant={ButtonVariant.Primary} />
          </div>
        </div>
        <hr className="hidden md:block mt-[30px] mb-[20px]   border-light" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-[30px]">
          <div className="mt-[60px] ">
            <p className="text-[12px] leading-[14.57px] font-[300] md:w-[312px] ">
              CIO Africa serves the enterprise community of CIOs and senior
              technology decision-makers with peer insight and expertise on
              Business Strategy, Innovation and Leadership. CIO attracts the
              highest concentration of enterprise CIOs and business technology
              executives of any media brand, reaching over one million.
            </p>
          </div>
          <nav className="mt-[26px]">
            <ul className="list-none flex md:flex-col justify-center flex-wrap gap-4">
              {FOOTER_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="text-[15px] leading-[19.53px] font-[300] text-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className=" xs:block sm:block md:hidden">
                <a
                  href="/"
                  className="text-[15px] leading-[19.53px] font-[300] text-center"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-[15px] leading-[19.53px] font-[300] text-center"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex md:hidden items-center  justify-center gap-4 mt-[24px]">
            <FacebookIcon />
            <TwitterIconfrom />
            <LinkedinIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <FlickrIcon />
          </div>
          <div className="hidden md:flex md:flex-col items-center  justify-center gap-4 mt-[24px]">
            <div className="flex items-center gap-4">
              <FacebookIcon />
              <TwitterIconfrom />
            </div>
            <div className="flex items-center gap-4">
              <LinkedinIcon />
              <InstagramIcon />
            </div>
            <div className="flex items-center gap-4">
              <YoutubeIcon />
              <FlickrIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-between mt-[20.16px]">
          <p className="font-[300] leading-[16.8px] text-[14px] text-[#1c1b21]">
            &copy; {new Date().getFullYear()} CIO Africa. All rights reserved.
          </p>
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/"
              className="text-[15px] leading-[19.53px] font-[300] text-center"
            >
              Terms & Conditions
            </a>
            <a
              href="/"
              className="text-[15px] leading-[19.53px] font-[300] text-center"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
