import React, { Component } from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

// for theme//
const theme = createTheme(
  {
    primary: '#2D55B3',
    secondary: '#80A6FF',
    tertiary: '#6565FF'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);
export default class Presentation extends Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading margin="150px" size={5} textColor="secondary" bold>Dapps with Ethereum & Web3.js</Heading>
          <Text textColor="secondary">Pradhumna Pancholi</Text>
        </Slide>
      </Deck>
    );
  }
}
