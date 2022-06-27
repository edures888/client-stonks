import { useState } from 'react';

export default function useHover() {
  const [hover, setHover] = useState(false);
  const handleMouseIn = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return [hover, handleMouseIn, handleMouseOut];
}
