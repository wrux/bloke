import { Box } from '@chakra-ui/react';
import Img from 'next/image';
import { getClient } from 'lib/sanity.server';
import { useNextSanityImage } from 'next-sanity-image';

export default function Image({ asset }) {
  const imageProps = useNextSanityImage(getClient(), asset);

  return (
    <Box
      maxW={{ lg: 'container.md', xl: 'container.lg' }}
      mx="auto"
      my={{ base: 6, md: 8, lg: 12 }}
    >
      <Img
        {...imageProps}
        layout="responsive"
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </Box>
  );
}
