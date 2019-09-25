import React from 'react';
import { Container } from '../../globalStyles';
import logo from '../../../logo.png';

const Header = () =>(
  <Container>
    <img src={logo} alt="NowTV" width="125" />
  </Container>
);

export default Header;