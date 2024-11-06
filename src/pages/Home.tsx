import { useQuery } from "@tanstack/react-query";

import { ReactComponent as ClockIcon } from "../assets/images/clock.svg";
import { newsService } from "../services/newsService";
import Tag from "../components/Tag";
import BannerImage from "../assets/images/banner.svg";
import authorImageUrl from "../assets/images/reading_1.png";
import BannerImage2 from "../assets/images/banner_2.svg";
import BlockQuote from "../components/BlockQuote";
const Home = () => {
  const tags = ["Technology", "Cybersecurity", "Cloud", "Business", "Economy"];

  // utilized this for caching purposes to improve performance
  const { isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: newsService.getNews,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <div className="flex gap-2">
          {(tags as string[]).map((tag) => (
            <Tag key={tag} title={tag} />
          ))}
        </div>
        <div>
          <h1 className="text-[40px] font-[400] leading-[53.6px]">
            Cloud & Cybersecurity Experts Converge In Uganda
          </h1>
        </div>
        <div className="flex  items-center gap-[6px] mt-[9px]">
          <img
            src={authorImageUrl}
            className="w-[24px] h-[24px] rounded-full"
            alt="Banner"
          />
          <p className="text-[#000000B2] text-[12px] leading-[17.28px]">
            John Doe
          </p>
          <div className="h-[14px] w-px bg-[#312F3B40] mx-4"></div>
          <p className="text-[#000000B2] text-[12px] leading-[17.28px]">
            September 20, 2023
          </p>
          <div className="h-[14px] w-px bg-[#312F3B40] mx-4"></div>
          <div className="flex items-center gap-1">
            <ClockIcon />
            <p className="text-[#000000B2] text-[12px] leading-[17.28px]">
              2 min read
            </p>
          </div>
        </div>
        <div className="mt-[48px]">
          <img src={BannerImage} alt="Banner" />
        </div>
        <div>
          <h1 className="font-[600] text-[20px] leading-[24px] mt-[45px]">
            BUI East Africa General Manager
          </h1>
          <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
            Industry leaders, policymakers, and cloud and cybersecurity
            professionals from across East Africa recently gathered in Kampala,
            Uganda, for the Africa Cloud & Security Roadshow. Held at the Four
            Points by Sheraton hotel in Uganda&apos;s capital, the event focused
            on the dynamic world of cloud computing and cybersecurity.
          </p>
          <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
            Organised for the first time in Uganda by dx5, Africa&apos;s
            technology driver, and powered by BUI East Africa, an award-winning
            global technology consultancy specialising in cloud, security and
            networking solutions, the roadshow is a series of events dedicated
            to advancing the technological landscape of East Africa.
          </p>
        </div>
        <div className="grid  grid-cols-2  mt-[62px]">
          <img src={BannerImage2} alt="Banner" />
          <div className="grid grid-cols-1 gap-8">
            <p className="font-[400] text-[16px] leading-[26px]">
              BUI East Africa General Manager Hasmukh Chudasama delivered the
              keynote address titled “You&apos;ve been hacked - what next? Your
              breach response plan”. During his session, Chudasama outlined the
              immediate actions organisations need to take after a security
              incident, including incident containment, investigation, and
              communication strategies. Attendees learned how to minimise damage
              and swiftly restore operations after a breach.
            </p>
            <p className=" font-[400] text-[16px] leading-[26px]">
              Modern Work specialist Kelvin Ngware, also from BUI East Africa,
              introduced attendees to the AI-powered technology that is
              transforming workplaces in Africa and around the world: Microsoft
              Copilot. During his presentation, Ngware demonstrated the key
              features of Microsoft Copilot and provided real-world examples of
              how it can help users be more productive in Microsoft 365
              productivity apps like Excel, Word, and PowerPoint.
            </p>
            <p className="font-[400] text-[16px] leading-[26px]">
              In another session during the event, Allan Lwala (Cybersecurity
              and Forensics Lead at Xylem Networks) discussed the evolving role
              of cybersecurity professionals, the pressing issues facing the
              field, and the challenges ahead for the next generation of
              cybersecurity experts.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-[600] text-[20px] leading-[24px] mt-[45px]">
            BUI East Africa General Manager
          </h1>
          <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
            BUI East Africa General Manager Hasmukh Chudasama delivered the
            keynote address titled “You&apos;ve been hacked - what next? Your
            breach response plan”. During his session, Chudasama outlined the
            immediate actions organisations need to take after a security
            incident, including incident containment,
          </p>
          <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
            Modern Work specialist Kelvin Ngware, also from BUI East Africa,
            introduced attendees to the AI-powered technology that is
            transforming workplaces in Africa and around the world: Microsoft
            Copilot. During his presentation, Ngware demonstrated the key
            features of Microsoft Copilot and
          </p>
          <div className="mt-[35px]">
            <BlockQuote message="The Kampala gathering featured keynotes and sessions led by experts from across the region, offering deep insights into the latest technology trends and challenges." />
          </div>
          <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
            BUI East Africa General Manager Hasmukh Chudasama delivered the
            keynote address titled “You&apos;ve been hacked - what
          </p>
          <p className="mt-[35px] font-[400] text-[16px] leading-[26px]">
            Modern Work specialist Kelvin Ngware, also from BUI East Africa,
            introduced attendees to the AI-powered technology that is
            transforming workplaces in Africa and around the world:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
