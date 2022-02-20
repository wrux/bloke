import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Image } from 'components';
import { SanityImageAssetDocument } from '@sanity/client';
import styled from '@emotion/styled';

type ImageGalleryProps = {
  images: SanityImageAssetDocument[];
};

const ImageTile = styled(Box)`
  break-inside: avoid-column;
`;

const ImageGallery: FC<ImageGalleryProps> = ({ images = [] }) => {
  if (!images || images.length === 0) return null;
  return (
    <Box as="section" maxW="full" my={{ base: 0, md: 8, lg: 12 }}>
      <Box
        w="100%"
        mx="auto"
        sx={{ columnCount: [1, 2, 3], columnGap: [8, 12, 16] }}
      >
        {images.map((image) => (
          <ImageTile key={image._key} mb={4}>
            <Image alt="" asset={image.asset} />
          </ImageTile>
        ))}
      </Box>
    </Box>
  );
};

export default ImageGallery;
