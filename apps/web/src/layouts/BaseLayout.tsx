import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { SiteFooter, SiteHeader } from '../components';

interface BaseLayoutProps {
  fullScreenContent?: boolean;
}

const BaseLayout: FC<BaseLayoutProps> = ({
  children,
  fullScreenContent = false,
}) => (
  <Box minH="100vh" display="flex" flexDir="column">
    <SiteHeader absolute={fullScreenContent} />
    <Box as="main" flex={1}>
      {children}
    </Box>
    <SiteFooter absolute={fullScreenContent} />
  </Box>
);

export default BaseLayout;
