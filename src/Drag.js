import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';

export default class Drag extends Component {
  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring
            to={{
              x: down ? xDelta : 0,
            }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <Card
                style={{
                  transform: `translateX(${x}px)`,
                }}
              >
                <h1>Drag me </h1>
              </Card>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
