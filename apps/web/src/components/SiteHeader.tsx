import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FC } from 'react';
import Logo from 'assets/icons/logo.svg';
import NextLink from 'next/link';
import styled from '@emotion/styled';

const StyledLogo = styled(Logo)`
  display: block;
  width: 1.4em;
`;

interface NavLinkProps {
  href?: string | undefined;
}

const NavLink: FC<NavLinkProps> = ({ children, href }) => {
  const hover = {
    textDecoration: 'none',
    bg: useColorModeValue('gray.200', 'gray.700'),
  };
  return (
    <NextLink href={href} passHref>
      <Link
        as="a"
        px={4}
        py={1}
        bg={useColorModeValue('gray.100', 'gray.900')}
        rounded={'md'}
        _hover={hover}
        _focus={hover}
        transitionProperty={['background-color', 'color']}
        transitionDuration="normal"
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default function SiteHeader({
  absolute = false,
}: {
  absolute?: boolean;
}) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      as="header"
      position={absolute ? 'absolute' : 'sticky'}
      top={0}
      width="100%"
      px={4}
      zIndex={100}
      bg={useColorModeValue('rgba(255, 255, 255, 0.1)', 'rgba(0, 0, 0, 0.15)')}
      backdropFilter="blur(12px)"
      boxShadow="xl"
    >
      <Flex h={16} alignItems={'center'} gap={4}>
        <Box fontSize="3xl">
          <NextLink href="/">
            <a>
              <Flex as="span" gap={2}>
                <StyledLogo aria-hidden />
                <Text fontWeight="bold">Bloke.</Text>
              </Flex>
            </a>
          </NextLink>
        </Box>
        <Flex as="nav" gap={3}>
          <NavLink href="/countries">Countries</NavLink>
        </Flex>
        <Button
          onClick={toggleColorMode}
          ml="auto"
          bg={useColorModeValue('gray.200', 'gray.700')}
        >
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Box>
  );
}
