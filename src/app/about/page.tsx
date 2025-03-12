import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
const About = () => {
  return (
    <div className="space-y-5 mt-10">
      <div className="text-white flex items-center justify-between">
        <Link href="/">
          <IoIosArrowBack className="text-2xl font-bold" />
        </Link>
        <h2 className="text-center text-2xl font-bold">About</h2>
        <span></span>
      </div>
      <p className="text-gray-300 !leading-snug">
        Vista Stream is your ultimate movie database app, designed to provide
        comprehensive information on your favorite films. Easily browse through
        an extensive collection of movie titles, each accompanied by captivating
        images and detailed descriptions. Whether you&apos;re a film enthusiast
        or simply looking for your next movie night pick, Vista Stream offers a
        seamless and intuitive experience to satisfy all your cinematic
        cravings.
      </p>
    </div>
  );
};

export default About;
