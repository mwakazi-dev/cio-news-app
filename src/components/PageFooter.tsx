import Logo from "./Logo";
import Button from "./Button";
import { ButtonVariant } from "../types/enums";
import { ReactComponent as FacebookIcon } from "../assets/images/facebook.svg";
import { ReactComponent as TwitterIconfrom } from "../assets/images/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../assets/images/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/images/instagram.svg";
import { ReactComponent as YoutubeIcon } from "../assets/images/youtube.svg";
import { ReactComponent as FlickrIcon } from "../assets/images/flickr.svg";

const PageFooter = () => {
  return (
    <div className="bg-light mt-[85px] max-h-[425px]">
      <div className="w-[70%] mx-[222px] my-[52px]">
        <div className="flex justify-between items-center">
          <div>
            <Logo color="light" />
          </div>
          <div>
            <Button label="REGISTER" variant={ButtonVariant.Primary} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 mt-[30px]">
          <div className="w-2/4">
            <p>
              CIO Africa serves the enterprise community of CIOs and senior
              technology decision-makers with peer insight and expertise on
              Business Strategy, Innovation and Leadership. CIO attracts the
              highest concentration of enterprise CIOs and business technology
              executives of any media brand, reaching over one million.
            </p>
          </div>
          <div>
            <div>
              <nav>
                <ul>
                  <li>
                    <a href="/">Advertising</a>
                  </li>
                  <li>
                    <a href="/">Services</a>
                  </li>
                  <li>
                    <a href="/">About us</a>
                  </li>
                  <li>
                    <a href="/">Contact us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex flex-col items-center  justify-center gap-4">
            <div className="flex justify-center items-center gap-3">
              <FacebookIcon />
              <TwitterIconfrom />
            </div>
            <div className="flex justify-center items-center gap-3">
              <LinkedinIcon />
              <InstagramIcon />
            </div>
            <div className="flex justify-center items-center gap-3">
              <YoutubeIcon />
              <FlickrIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[58px]">
          <div>
            <p className="font-[400] leading-[18px] text-[15px] text-[#424242]">
              &copy; {new Date().getFullYear()} CIO Africa. All rights reserved.
            </p>
          </div>
          <div>
            <p className="font-[400] leading-[18px] text-[15px] text-[#424242]">
              Terms & Conditions
            </p>
          </div>
          <div>
            <p className="font-[400] leading-[18px] text-[15px] text-[#424242]">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
