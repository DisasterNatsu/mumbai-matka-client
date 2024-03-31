import { IoLogoWhatsapp } from "react-icons/io";
import { FaWandMagicSparkles } from "react-icons/fa6";

const SocialButton = ({ home }: { home?: boolean }) => {
  return (
    <section
      className={`w-full flex ${
        home ? "sm:justify-start gap-5 justify-center" : "justify-around"
      }`}
    >
      <a
        href="https://chat.whatsapp.com/FxBXh6Hk15c06QtH8o8lI6"
        target="_blank"
        className="flex items-center gap-2 dark:bg-siteAccentDark bg-siteAccentLight py-2 px-3 rounded-md dark:text-black text-white font-semibold hover:scale-105 duration-500"
      >
        <IoLogoWhatsapp className="text-green-400 w-5 h-5" />
        Whatsapp
      </a>
      <a
        href="#last-ten-days"
        className="flex items-center gap-2 bg-red-600 py-2 px-3 rounded-md text-white font-semibold hover:scale-105 duration-500"
      >
        <FaWandMagicSparkles className="text-white w-5 h-5" />
        Magic Tools
      </a>
    </section>
  );
};

export default SocialButton;
