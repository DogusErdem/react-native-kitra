import { fireEvent, render, waitFor, act } from '@testing-library/react-native';
import { useContext } from 'react';
import { KitraProvider } from '../../core/KitraProvider';
import Icon from '../Icons/Icon';
import Button from '../Button/Button';
import { opacity } from '../../utilities';

/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Button', () => {
  it('default render', () => {
    const tree = renderWithContext(
      <Button />,
    );
    expect(tree).toMatchSnapshot();
  });
  describe('render with different size', () => {
    it('render with small', () => {
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          right={() => <Icon testID="rightIcon" type="material-community" name="penguin" size={10} />}
          left={() => <Icon testID="leftIcon" type="material-community" name="penguin" />}
          size="small"
        />,
      );
      const label = getByTestId('buttonLabel');
      const pressable = getByTestId('pressable');
      expect(label).toHaveStyle({ fontSize: 10, lineHeight: 16, fontFamily: 'Poppins-Medium', fontWeight: '500' });
      expect(pressable).toHaveStyle({ paddingHorizontal: 20, paddingVertical: 10.5 });
    });
    it('render with medium', () => {
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          right={() => <Icon testID="rightIcon" type="material-community" name="penguin" size={10} />}
          left={() => <Icon testID="leftIcon" type="material-community" name="penguin" />}
          size="medium"
        />,
      );
      const label = getByTestId('buttonLabel');
      const pressable = getByTestId('pressable');
      expect(label).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium', fontWeight: '500' });
      expect(pressable).toHaveStyle({ paddingHorizontal: 24, paddingVertical: 12 });
    });
    it('render with large', () => {
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          right={() => <Icon testID="rightIcon" type="material-community" name="penguin" size={10} />}
          left={() => <Icon testID="leftIcon" type="material-community" name="penguin" />}
          size="large"
        />,
      );
      const label = getByTestId('buttonLabel');
      const pressable = getByTestId('pressable');
      expect(label).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium', fontWeight: '500' });
      expect(pressable).toHaveStyle({ paddingHorizontal: 30, paddingVertical: 15 });
    });
  });
  describe('render with press', () => {
    it('render with onPressIn', async () => {
      const onPressInMock = jest.fn();
      const onPress = jest.fn();
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          onPress={onPress}
          onPressIn={onPressInMock}
        />,
      );
      const pressable = getByTestId('pressable');
      fireEvent(pressable, 'onPressIn');
      expect(onPressInMock).toHaveBeenCalledTimes(1);
    });
    it('render with onPressOut', async () => {
      const onPressOut = jest.fn();
      const onPress = jest.fn();
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          onPress={onPress}
          onPressOut={onPressOut}
        />,
      );
      const pressable = getByTestId('pressable');
      fireEvent(pressable, 'onPressOut');
      expect(onPressOut).toHaveBeenCalledTimes(1);
    });
  });
  describe('disabled button', () => {
    const onPress = jest.fn();
    it('render with disabled prop', () => {
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          disabled
          onPress={onPress}
        />,
      );
      const pressable = getByTestId('pressable');
      fireEvent(pressable, 'onPress');
      expect(onPress).toHaveBeenCalledTimes(0);
    });
  });
  describe('render with custom theme', () => {
    it('default theme', () => {
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          theme={{ default: { background: 'blue', label: 'white' } }}
        />,
      );
      const pressable = getByTestId('pressable');
      const buttonLabel = getByTestId('buttonLabel');
      expect(pressable).toHaveStyle({ backgroundColor: 'blue' });
      expect(buttonLabel).toHaveStyle({ color: 'white' });
    });
    it('disabled theme', () => {
      const { getByTestId } = renderWithContext(
        <Button
          label="Press Me!"
          theme={{ disabled: { background: 'grey', label: 'white' } }}
          disabled
        />,
      );
      const pressable = getByTestId('pressable');
      const buttonLabel = getByTestId('buttonLabel');
      expect(pressable).toHaveStyle({ backgroundColor: 'grey' });
      expect(buttonLabel).toHaveStyle({ color: 'white' });
    });
    // it('pressed theme', () => {
    //   const onPressInMock = jest.fn();
    //   const { getByTestId } = renderWithContext(
    //     <Button
    //       label="Press Me!"
    //       theme={{ pressed: { background: 'black', label: 'white' } }}
    //       onPressIn={onPressInMock}
    //     />,
    //   );
    //   const pressable = getByTestId('pressable');
    //   const buttonLabel = getByTestId('buttonLabel');
    //   fireEvent(pressable);
    //   expect(pressable).toHaveStyle({ backgroundColor: 'black' });
    //   expect(buttonLabel).toHaveStyle({ color: 'white' });
    // });
  });
  describe('render with custom styles', () => {
    it('render with labelStyle and style props', () => {
      const { getByTestId } = renderWithContext(
        <Button
          labelStyle={{ fontSize: 20, fontWeight: 'bold', lineHeight: 20 }}
          label="Test"
          style={{ padding: 10, marginTop: 10, paddingHorizontal: 10 }}
        />,
      );
      const pressable = getByTestId('pressable');
      const label = getByTestId('buttonLabel');

      expect(pressable).toHaveStyle({ padding: 10, marginTop: 10, paddingHorizontal: 10 });
      expect(label).toHaveStyle({ fontSize: 20, fontWeight: 'bold', lineHeight: 20 });
    });
  });
});
