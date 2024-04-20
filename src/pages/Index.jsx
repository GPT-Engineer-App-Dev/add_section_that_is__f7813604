import { Box, Center, Text, keyframes, css, Fade } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

// Define keyframes for the falling hearts
const fall = keyframes`
  0% { transform: translateY(-100%); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

import styled from '@emotion/styled';

// Create a styled component for the falling hearts
// Apply the animations directly within the FallingHeart component using the css prop
const FallingHeart = styled(FaHeart)(() => ({
  position: 'fixed',
  color: 'white',
  fontSize: `${Math.random() * 1 + 0.5}rem`, // Make them smaller
  animation: `${fall} ${4 + Math.random() * 6}s linear ${Math.random() * 5}s infinite`,
  left: `${Math.random() * 100}vw`,
}));

const Index = () => {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.style.opacity = 1;
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box position='relative' h='100vh' overflow='hidden' bg='black'>
      <Center position='absolute' top='50%' left='50%' transform='translate(-50%, -50%)'>
        <Text fontFamily='monospace' fontSize='6xl' color='white'>
          Lovable
        </Text>
      </Center>
      {Array.from({ length: 50 }).map((_, index) => (
        <FallingHeart
          key={index}
          style={{
            animation: `${fall} ${4 + Math.random() * 6}s linear ${Math.random() * 5}s infinite`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}
      <Fade in={true} ref={ref}>
        <Text color='white' p={5}>
          This is some placeholder text that will fade in when it comes into view.
        </Text>
      </Fade>
    </Box>
  );
};

export default Index;
