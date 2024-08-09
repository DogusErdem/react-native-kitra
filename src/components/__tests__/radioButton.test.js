import { fireEvent, render, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import RadioButton from '../RadioButton/RadioButton';

/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('RadioButton', () => {
  it('default render', () => {
    const tree = renderWithContext(<RadioButton />);
    expect(tree).toMatchSnapshot();
  });
  it('render with onChange prop', () => {
    const onChange = jest.fn();
    const { getByTestId } = renderWithContext(<RadioButton testID="radioButton" onChange={onChange} />);
    const radioButton = getByTestId('radioButton');
    fireEvent.press(radioButton);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(true);
    fireEvent.press(radioButton);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenCalledWith(false);
  });
  it('render with custom style', () => {
    const { getByTestId } = renderWithContext(<RadioButton
      testID="radioButton"
      style={{ marginTop: 10, padding: 5, margin: 10 }}
    />);
    const radioButton = getByTestId('radioButton');
    expect(radioButton).toHaveStyle({ marginTop: 10, padding: 5, margin: 10 });
  });
  describe('render with custom theme', () => {
    it('render with default custom theme', () => {
      const { getByTestId } = renderWithContext(<RadioButton
        testID="radioButton"
        theme={{ default: { background: 'white', border: 'blue', dot: 'blue' } }}
      />);
      const radioButton = getByTestId('radioButton');
      expect(radioButton).toHaveStyle({ backgroundColor: 'white', borderColor: 'blue' });
    });
    it('render with active custom theme', () => {
      const { getByTestId } = renderWithContext(<RadioButton
        testID="radioButton"
        theme={{ active: { background: 'blue', border: 'white', dot: 'white' } }}
      />);
      const radioButton = getByTestId('radioButton');
      fireEvent.press(radioButton);
      const dot = getByTestId('radioDot');
      expect(radioButton).toHaveStyle({ backgroundColor: 'blue', borderColor: 'white' });
      expect(dot).toHaveStyle({ backgroundColor: 'white' });
    });
  });
});
