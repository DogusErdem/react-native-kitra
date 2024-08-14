import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import Swipe from '../Swipe/index';

import { KitraProvider } from '../../core/KitraProvider';
/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);
describe('Swipe Component', () => {
  describe('renders children correctly', () => {
    const { getByText } = renderWithContext(
      <Swipe>
        <Text testID="child">Swipeable Content</Text>
      </Swipe>,
    );

    expect(getByText('Swipeable Content')).toBeTruthy();
  });
  describe('renders left action and handles press', () => {
    const leftActionPressMock = jest.fn();
    const { getByText, getByTestId } = renderWithContext(
      <Swipe
        leftAction={{
          label: 'Left Action',
          onPress: leftActionPressMock,
          style: { backgroundColor: 'red' },
        }}
      >
        <Text>Swipeable Content</Text>
      </Swipe>,
    );

    fireEvent(getByTestId('swipeable'), 'onSwipeableLeftOpen');

    fireEvent.press(getByText('Left Action'));
    expect(leftActionPressMock).toHaveBeenCalled();
  });

  it('renders right actions and handles press', () => {
    const rightActionPressMock1 = jest.fn();
    const rightActionPressMock2 = jest.fn();

    const { getByText, getByTestId } = renderWithContext(
      <Swipe
        rightActions={[
          {
            label: 'Right Action 1',
            onPress: rightActionPressMock1,
            style: { backgroundColor: 'green' },
          },
          {
            label: 'Right Action 2',
            onPress: rightActionPressMock2,
            style: { backgroundColor: 'blue' },
          },
        ]}
      >
        <Text>Swipeable Content</Text>
      </Swipe>,
    );

    fireEvent(getByTestId('swipeable'), 'onSwipeableRightOpen');

    fireEvent.press(getByText('Right Action 1'));
    expect(rightActionPressMock1).toHaveBeenCalled();

    fireEvent.press(getByText('Right Action 2'));
    expect(rightActionPressMock2).toHaveBeenCalled();
  });
});
