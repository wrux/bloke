import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Logo } from 'components';
import NextLink from 'next/link';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SiteFooter({
  absolute = false,
}: {
  absolute?: boolean;
}) {
  return (
    <Box
      __css={
        absolute
          ? {
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
            }
          : {}
      }
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
    >
      <Flex h={16} alignItems={'center'} gap={4}>
        <Box fontSize="3xl">
          <NextLink href="/">
            <a>
              <Logo />
            </a>
          </NextLink>
        </Box>
        <Text>
          &copy;{' '}
          <Link fontWeight="900" href="https://wrux.com" isExternal>
            WRUX
          </Link>{' '}
          2020
        </Text>
        <Stack direction={'row'} spacing={6} ml="auto">
          <SocialButton label={'Twitter'} href={'https://twitter.com/wrux'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'Github'} href={'https://github.com/wrux'}>
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={'Instagram'}
            href={'https://instagram.com/etocallum'}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Flex>
    </Box>
  );
}
