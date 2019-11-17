import React, { Component } from 'react';
import { Deck, Slide } from 'spectacle';

export default class Presentation extends Component {
  render() {
    return (
      <Deck>
        <Slide>Spectable 1</Slide>
      </Deck>
    );
  }
}
