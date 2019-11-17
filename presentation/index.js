import React, { Component } from 'react';
import { Deck, Heading, Slide, Text } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

// for theme//
const theme = createTheme(
  {
    primary: '#2D55B3',
    secondary: '#80A6FF',
    tertiary: '#6694FF'
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
        {/* Intro */}
        <Slide>
          <Heading margin="150px" size={5} textColor="secondary" bold>DApps with Ethereum & Web3.js</Heading>
          <Text textColor="secondary">Pradhumna Pancholi</Text>
        </Slide>

        {/* What are Dapps */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>What are DApps</Heading>
          <Text textColor="secondary">
            Dapps are applications that run on a blockchain network. Blockchains are known for their "decentralized" nature. That's where the 'D' comes from.
            A DApp could be written for any platform. So, in the most basic terms, it's like using a blockchain network a database instead of a traditional database.
            After cryptocurrencies, this is most pouplar use case of blockchain.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
