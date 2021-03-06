import React, { useState } from 'react';
import { HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <h1>
      </h1>
      <ul className="app__navbar-links">
        {['about', 'experience', 'contact'].map((item) => (
          <li className="app__flex nav-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <a className="app__navbar-menu">
        <span onClick={() => setToggle(true)} />
        <span onClick={() => setToggle(true)} />
        <span onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['about', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </a>
    </nav>
  );
};

export default Navbar;