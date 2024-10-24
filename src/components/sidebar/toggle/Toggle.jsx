import { motion } from 'framer-motion';
import { useState } from 'react';

const Toggle = ({ setOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
    setOpen(prev => !prev);
  };

  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <button
      onClick={toggleButton}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        width: '50px',
        height: '50px',
        padding: '0',
        backgroundColor: "#FFDE59",
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        <Path
          variants={{
            open: { d: "M 12 12 L 38 38" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          d="M 10 25 L 40 25"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
          animate={isOpen ? "open" : "closed"}
        />
        <Path
          variants={{
            open: { d: "M 12 38 L 38 12" }
          }}
          animate={isOpen ? "open" : "closed"}
        />
      </svg>
    </button>
  );
};

export default Toggle;