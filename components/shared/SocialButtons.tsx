import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

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
        href="https://t.me/kolkataFFspace"
        target="_blank"
        className="flex items-center gap-2 bg-cyan-400 py-2 px-3 rounded-md text-white font-semibold hover:scale-105 duration-500"
      >
        <FaTelegramPlane className="text-white w-5 h-5" />
        Telegram
      </a>
    </section>
  );
};

export default SocialButton;
