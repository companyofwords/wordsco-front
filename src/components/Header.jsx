import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
//import { Flex, Image } from 'rebass';
import { colors } from '../../tailwind';
import styled from 'react-emotion';
import Fade from 'react-reveal/Fade';
import RouteLink from './RouteLink';
//import Logo from './Logo/Portfolio.svg';

const capitalize = s => s && s[0].toUpperCase() + s.slice(1);

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => colors.orange};
  }

  position: absolute;
  width: 100%;
`;

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === 'home';
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          };
    },
    { links: [], home: null },
  );

const Header = () => (
  <HeaderContainer>
    <Fade top>

        <div>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks);

            const homeLink = home && (
              <Image
                //src={Logo}
                width="50px"
                alt="Portfolio Logo"
                onClick={home.onClick}
              />
            );
            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ));

            return (
              <Fragment>
                {homeLink}
                <div mr={[0, 3, 5]}>{navLinks}</div>
              </Fragment>
            );
          }}
        </div>
      
    </Fade>
  </HeaderContainer>
);

export default Header;