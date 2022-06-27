import { Flex, Grid, Heading } from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';

export default function Loading({ message }) {
  // TODO: Page transition animations
  return (
    <Flex align="center" justify="center">
      <BeatLoader isIndeterminate color="white" />
    </Flex>
  );
}
