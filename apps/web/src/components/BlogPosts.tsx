import {
  Box,
  Button,
  Grid,
  Heading,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { Image } from 'components';
import NextLink from 'next/link';
import { PortableText } from '@portabletext/react';
import { custom16by9ImageBuilder } from 'lib/sanity';
import styled from '@emotion/styled';

const PortableTextContainer = styled(Box)`
  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

const Teaser = ({ excerpt, mainImage, slug, title }) => {
  // const bluryImage = placeholderImage(mainImage);
  const href = `/posts/${slug}`;

  return (
    <LinkBox display="grid" gap={[4, 6, 8, 12]} alignItems="flex-start">
      {mainImage && (
        <Image
          alt=""
          asset={mainImage}
          imageBuilder={custom16by9ImageBuilder}
        />
      )}
      <Heading as="h2" fontSize="2xl" fontFamily="body" fontWeight={500}>
        <NextLink href={href} passHref>
          <LinkOverlay>{title}</LinkOverlay>
        </NextLink>
      </Heading>
      {!!excerpt && (
        <PortableTextContainer maxW="60ch">
          <PortableText value={excerpt} />
        </PortableTextContainer>
      )}
      <NextLink href={href} passHref>
        <Button as={LinkOverlay} width="fit-content">
          Read more
        </Button>
      </NextLink>
    </LinkBox>
  );
};

const BlogPosts = ({ posts = [] }) => (
  <Grid as="section" gap={16}>
    {posts.map((post) => (
      <Teaser key={post._id} {...post} />
    ))}
  </Grid>
);

export default BlogPosts;
