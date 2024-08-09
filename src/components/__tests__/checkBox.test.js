import { render, fireEvent } from '@testing-library/react-native';
import Animated, { withReanimatedTimer } from 'react-native-reanimated';
import { KitraProvider } from '../../core/KitraProvider';
import CheckBox from '../CheckBox/CheckBox';

/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('CheckBox', () => {
  it('default render', () => {
    const tree = renderWithContext(
      <CheckBox />,
    );
    expect(tree).toMatchSnapshot();
  });
  describe('render with press', () => {
    it('render with onPress', () => {
      const onPress = jest.fn();
      const { getByTestId } = renderWithContext(<CheckBox onPress={onPress} />);
      const checkbox = getByTestId('checkBoxContainer');
      fireEvent.press(checkbox);
      expect(onPress).toHaveBeenCalledWith(true);
    });

    it('render with onChange', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderWithContext(<CheckBox onChange={onChange} />);
      const checkbox = getByTestId('checkBoxContainer');
      fireEvent.press(checkbox);
      expect(onChange).toHaveBeenNthCalledWith(1, false);
      expect(onChange).toHaveBeenNthCalledWith(2, true);
    });
    it('render with onPress (disabled)', () => {
      const onPress = jest.fn();
      const { getByTestId } = renderWithContext(<CheckBox onPress={onPress} disabled />);
      const checkbox = getByTestId('checkBoxContainer');
      fireEvent.press(checkbox);
      expect(onPress).toHaveBeenCalledTimes(0);
    });
  });
  describe('render with custom style', () => {
    it('render with style prop', () => {
      const { getByTestId } = renderWithContext(
        <CheckBox
          style={{ padding: 10, marginTop: 20, paddingHorizontal: 5 }}
        />,
      );
      const container = getByTestId('checkBoxContainer');
      expect(container).toHaveStyle({ padding: 10, marginTop: 20, paddingHorizontal: 5 });
    });
  });
  //   describe('render with custom theme', () => {
  //     withReanimatedTimer(() => {
  //       const { getByTestId } = renderWithContext(
  //         <CheckBox theme={{ default: { background: 'blue', border: 'black', icon: 'white' } }} value={false} />,
  //       );
  //       const container = getByTestId('checkBoxContainer');

//       jest.advanceTimersByTime(200);
//       expect(container).toHaveAnimatedStyle({ backgroundColor: 'blue', borderColor: 'black' });
//     });
//   });
});
