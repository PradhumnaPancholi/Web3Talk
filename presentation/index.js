import React, { Component } from 'react';
import { Appear, Deck, Fit, Heading, List, ListItem, Slide, Text } from 'spectacle';
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
          <Text textColor="secondary" textSize="36px">
            Dapps are applications that run on a blockchain network. Blockchains are known for their "decentralized" nature. That's where the 'D' comes from.
            A DApp could be written for any platform. So, in the most basic terms, it's like using a blockchain network a database instead of a traditional database.
            After cryptocurrencies, this is most pouplar use case of a blockchain.
          </Text>
        </Slide>

        {/* Most popular use cases */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>Where are DApps used ???</Heading>
          <List>
            <Fit>
              <Appear>
                <ListItem textSize="32px">Banking & Money Transfer</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="32px">Digital Identity Management ( Eg:- Medical Records ) </ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="32px">Documentation (Eg:- Real Estate, Wills)</ListItem>
              </Appear>
              <Appear>
                <ListItem textSize="32px">Gaming (Especially poker)</ListItem>
              </Appear>
            </Fit>
          </List>
        </Slide>

        {/* Why DApps */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>Why DApps???</Heading>
          <Text textColor="secondary" textSize="36px">
            The main reason for going with a blockchain rather than a traditional database would be security.
            The applications where you don't want your data to be tampered with.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
