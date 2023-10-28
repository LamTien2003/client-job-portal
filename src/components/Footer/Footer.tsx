import BotFooter from "./BotFooter/BotFooter";
import TopFooter from "./TopFooter/TopFooter";


const Footer = () => {
    return (
        <div className=" text-white bg-[#1a1a1a] pt-[90px]">
            <div className=" max-w-7xl mx-auto xl:max-w-4xl lg:max-w-2xl">
                <TopFooter />
                <BotFooter />
            </div>
        </div>
    );
};

export default Footer;
