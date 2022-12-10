import { useEffect, useState } from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-scroll';

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <motion.div
      initial={{ position: 'relative' }}
      animate={
        navbar ? { position: 'sticky', top: 0 } : { position: 'relative' }
      }
    >
      <div
        className={
          navbar
            ? 'stickyNavbarStyles dark:bg-gray-900'
            : 'flex bg-[#F6F8FB] items-center  dark:bg-gray-900 justify-between w-full py-8 px-8 sm:px-16 z-50'
        }
      >
        <Link
          to="Introduce"
          smooth={true}
          offset={-110}
          duration={200}
          activeClass="active"
          className="flex items-center space-x-3 cursor-pointer dark:bg-gray-900"
        >
          <h3 className="dark:bg-gray-900 text-2xl text-[#5C637C] font-light hidden md:flex">
            Jae
            <span className="font-semibold dark:bg-gray-900">won</span>
          </h3>
        </Link>
        <div className="flex dark:bg-gray-900  text-[#5C637C] items-center space-x-3">
          <div className="items-center hidden space-x-4 dark:bg-gray-900 lg:flex">
            <Link
              to="Introduce"
              spy={true}
              smooth={true}
              offset={-110}
              duration={200}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Introduce
            </Link>
            <Link
              to="Experience"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Experience
            </Link>
            <Link
              to="Project"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              activeClass="active"
              className="dark:bg-gray-900 navLink"
            >
              Project
            </Link>
          </div>
          <button
            className="lg:hidden dark:bg-gray-900 bg-white border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl"
            onClick={() => setSidebar(true)}
          >
            <RiMenuLine />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Nav;
