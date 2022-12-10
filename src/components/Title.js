import { motion } from 'framer-motion';
import { fullName, positionTitle } from '../utils/data';
import HeroImage from './HeroImage';
import Signature from './Signature';
import SocialButtons from './SocialButtons';

function Title() {
  return (
    <div className="flex flex-col-reverse items-center justify-between px-8 pt-8 pb-16 md:flex-row sm:px-16">
      <div className="space-y-3 sm:space-y-6 items-center text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
        <div className="text-lg  font-normal md:text-xl lg:text-2xl xl:text-3xl">
          <motion.h1>안녕하세요,</motion.h1>
        </div>
        <h4 className="text-3xl font-extrabold md:hidden sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <motion.div>저는 {fullName}</motion.div>
        </h4>

        <h4 className="hidden text-3xl font-extrabold md:flex sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <motion.div>저는 {fullName}</motion.div>
        </h4>
        <div className="text-base font-light text- md:text-lg lg:text-xl xl:text-2xl">
          <motion.h1>{positionTitle}</motion.h1>
        </div>
        <motion.div>
          <SocialButtons />
        </motion.div>
      </div>
      <HeroImage />
    </div>
  );
}

export default Title;
