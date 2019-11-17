import React, { Component } from 'react';
import { Appear, Deck, Fit, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';
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

const images = {
  node: require('../assets/img/node.png')
};

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
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>What are DApps ?</Heading>
          <Text textColor="secondary" textSize="36px">
            Dapps are applications that run on a blockchain network. Blockchains are known for their "decentralized" nature. That's where the 'D' comes from.
            A DApp could be written for any platform. So, in the most basic terms, it's like using a blockchain network a database instead of a traditional database.
            After cryptocurrencies, this is most pouplar use case of a blockchain.
          </Text>
        </Slide>

        {/* Most popular use cases */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>Where are DApps used ?</Heading>
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
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>Why DApps?</Heading>
          <Text textColor="secondary" textSize="36px">
            The main reason for going with a blockchain rather than a traditional database would be security.
            The applications where you don't want your data to be tampered with.
          </Text>
        </Slide>

        {/* How do we talk to a blockchain */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>So, how do we talk to a Blockchain network ???</Heading>
        </Slide>

        {/* Where does Web3.js comes to play? */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>Web3.JS</Heading>
          <Text textColor="secondary" textSize="36px">
            Here Web3.js comes to the play. Web3.js is javascript library which provides you with the capability to talk
            to a Ethereum based blockchain network. You can use Node, React, Angular, Vue, Svelete, or any javascript library/framework.
          </Text>
        </Slide>

        {/* Web3.js explanation diagram 1*/}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>How Web3.js helps?</Heading>
          <Image src="https://www.blockchainexpert.uk/blog/Uploads/BlogImage/what-is-web3js-blockchain-decentralized-web-1.jpg" width={620}/>
        </Slide>

        {/* Web3.js explanation diagram 2*/}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>How Web3.js works?</Heading>
          <Image src="https://www.dappuniversity.com/web3-js-diagram.png"/>
        </Slide>

        {/* Web3.js example with node */}
        <Slide>
          <Heading margin="0 0 50px 0" size={5} textColor="secondary" bold>Web3.js with Node</Heading>
          <Image src={images.node} width={650} />
        </Slide>

      </Deck>
    );
  }
}
