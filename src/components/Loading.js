import { Flex, Grid, Heading } from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';

export default function Loading({ message }) {
  // TODO: Page transition animations
  return (
    <main>
      <Grid minH="100vh" p={3} bg="black" textColor="lightgray">
        <Flex align="center" justify="center">
          <BeatLoader isIndeterminate color="white" />
          <Heading fontFamily="alegreya" marginInlineStart={10}>
            {message || 'Loading...'}
          </Heading>
        </Flex>
      </Grid>
    </main>
  );
}
