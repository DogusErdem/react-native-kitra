import { fireEvent, render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import TextInput from '../TextInput/TextInput';

/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Text Input', () => {
  it('default render', () => {
    const tree = renderWithContext(
      <TextInput label="Label" />,
    );
    expect(tree).toMatchSnapshot();
  });
  describe('render with different size', () => {
    it('render with small size', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          size="small"
          label="Label"
          bottomLabel="Test"
          count
          maxLength={20}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');
      const inputInside = getByTestId('inputInside');
      const input = getByTestId('input');
      const inputLabel = getByTestId('inputLabel');
      const inputBottomLabel = getByTestId('inputBottomLabel');
      const inputCountLabel = getByTestId('inputCountLabel');
      expect(input).toHaveStyle({ marginTop: 7, fontSize: 10, fontFamily: 'Poppins-Regular', lineHeight: 15 });
      expect(inputInnerContainer).toHaveStyle({ height: 36, maxHeight: 36 });
      expect(inputInside).toHaveStyle({ height: 36, paddingHorizontal: 10 });
      expect(inputLabel).toHaveStyle({ fontFamily: 'Poppins-Regular' });
      expect(inputBottomLabel).toHaveStyle({ fontFamily: 'Poppins-Regular', fontSize: 8, lineHeight: 12 });
      expect(inputCountLabel).toHaveStyle({ fontFamily: 'Poppins-Regular', fontSize: 8, lineHeight: 12 });
    });
    it('render with medium size', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          size="medium"
          label="Label"
          bottomLabel="Test"
          count
          maxLength={20}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');
      const inputInside = getByTestId('inputInside');
      const input = getByTestId('input');
      const inputLabel = getByTestId('inputLabel');
      const inputBottomLabel = getByTestId('inputBottomLabel');
      const inputCountLabel = getByTestId('inputCountLabel');
      expect(inputInnerContainer).toHaveStyle({ height: 42, maxHeight: 42 });
      expect(inputInside).toHaveStyle({ height: 42, paddingHorizontal: 12 });
      expect(input).toHaveStyle({ marginTop: 8, fontSize: 12, fontFamily: 'Poppins-Regular', lineHeight: 18 });
      expect(inputLabel).toHaveStyle({ fontFamily: 'Poppins-Regular' });
      expect(inputBottomLabel).toHaveStyle({ fontFamily: 'Poppins-Regular', fontSize: 10, lineHeight: 14 });
      expect(inputCountLabel).toHaveStyle({ fontFamily: 'Poppins-Regular', fontSize: 10, lineHeight: 14 });
    });
    it('render with large size', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          size="large"
          label="Label"
          bottomLabel="Test"
          count
          maxLength={20}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');
      const inputInside = getByTestId('inputInside');
      const input = getByTestId('input');
      const inputLabel = getByTestId('inputLabel');
      const inputBottomLabel = getByTestId('inputBottomLabel');
      const inputCountLabel = getByTestId('inputCountLabel');

      expect(inputInnerContainer).toHaveStyle({ height: 51, maxHeight: 51 });
      expect(inputInside).toHaveStyle({ height: 51, paddingHorizontal: 15 });
      expect(input).toHaveStyle({ marginTop: 8, fontSize: 14, fontFamily: 'Poppins-Regular', lineHeight: 21 });
      expect(inputLabel).toHaveStyle({ fontFamily: 'Poppins-Regular' });
      expect(inputBottomLabel).toHaveStyle({ fontFamily: 'Poppins-Regular', fontSize: 12, lineHeight: 16 });
      expect(inputCountLabel).toHaveStyle({ fontFamily: 'Poppins-Regular', fontSize: 12, lineHeight: 16 });
    });
  });
  describe('render with onChangeText prop', () => {
    const onChangeText = jest.fn();
    const { getByTestId } = renderWithContext(
      <TextInput
        label="Label"
        onChangeText={onChangeText}
      />,
    );
    fireEvent.changeText(getByTestId('input'), 'Hello World');
    expect(onChangeText).toHaveBeenCalledWith('Hello World');
    expect(onChangeText).toHaveBeenCalledTimes(1);
  });
  describe('render with onFocus and onEndEditing props', () => {
    const onFocus = jest.fn();
    const onEndEditing = jest.fn();

    const { getByPlaceholderText, getByTestId } = renderWithContext(
      <TextInput label="Label" onFocus={onFocus} onEndEditing={onEndEditing} />,
    );
    const input = getByTestId('input');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent(input, 'endEditing');
    expect(onEndEditing).toHaveBeenCalledTimes(1);
  });
  describe('render with left right props', () => {
    const left = jest.fn();
    const right = jest.fn();
    const { getByTestId } = renderWithContext(
      <TextInput
        left={left}
        right={right}
      />,
    );
    const input = getByTestId('input');
    expect(left).toHaveBeenCalledWith(false);
    expect(right).toHaveBeenCalledWith(false);
    fireEvent(input, 'focus');
    expect(left).toHaveBeenCalledWith(true);
    expect(right).toHaveBeenCalledWith(true);
  });
  describe('render with custom theme', () => {
    it('render with default theme', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          label="Label"
          bottomLabel="Bottom Label"
          count
          variant="outlined"
          maxLength={10}
          theme={{ default: {
            background: '#F6F9FF',
            border: '#195CEF',
            bottomLabel: '#195CEF',
            countLabel: '#195CEF',
            label: '#195CEF',
            value: '#195CEF',
          } }}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');// background
      const outlinedContainer = getByTestId('outlinedContainer');// background
      const input = getByTestId('input');// background
      const inputLabel = getByTestId('inputLabel');// label
      const inputBottomLabel = getByTestId('inputBottomLabel');// bottomLabel
      const inputCountLabel = getByTestId('inputCountLabel');// inputCountLabel

      expect(inputInnerContainer).toHaveStyle({ backgroundColor: '#F6F9FF' });
      expect(outlinedContainer).toHaveStyle({ backgroundColor: '#F6F9FF' });
      expect(input).toHaveStyle({ backgroundColor: '#F6F9FF' });
      expect(inputLabel).toHaveStyle({ color: '#195CEF' });
      expect(inputBottomLabel).toHaveStyle({ color: '#195CEF' });
      expect(inputCountLabel).toHaveStyle({ color: '#195CEF' });
    });
    it('render with focus theme', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          label="Label"
          bottomLabel="Bottom Label"
          count
          variant="outlined"
          maxLength={10}
          theme={{ focused: {
            background: 'white',
            border: 'grey',
            bottomLabel: '#195CEF',
            countLabel: 'red',
            label: 'black',
            value: '#195CEF',
          } }}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');// background
      const outlinedContainer = getByTestId('outlinedContainer');// background
      const input = getByTestId('input');// background
      const inputLabel = getByTestId('inputLabel');// label
      const inputBottomLabel = getByTestId('inputBottomLabel');// bottomLabel
      const inputCountLabel = getByTestId('inputCountLabel');// inputCountLabel
      fireEvent(input, 'focus');
      expect(inputInnerContainer).toHaveStyle({ backgroundColor: 'white' });
      expect(outlinedContainer).toHaveStyle({ backgroundColor: 'white' });
      expect(input).toHaveStyle({ backgroundColor: 'white' });
      expect(inputLabel).toHaveStyle({ color: 'black' });
      expect(inputBottomLabel).toHaveStyle({ color: '#195CEF' });
      expect(inputCountLabel).toHaveStyle({ color: 'red' });
    });
    it('render with error theme', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          label="Label"
          bottomLabel="Bottom Label"
          count
          variant="outlined"
          error
          maxLength={10}
          theme={{ error: {
            background: 'white',
            border: 'red',
            bottomLabel: 'red',
            countLabel: 'red',
            label: 'red',
            value: 'red',
          } }}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');// background
      const outlinedContainer = getByTestId('outlinedContainer');// background
      const input = getByTestId('input');// background
      const inputLabel = getByTestId('inputLabel');// label
      const inputBottomLabel = getByTestId('inputBottomLabel');// bottomLabel
      const inputCountLabel = getByTestId('inputCountLabel');// inputCountLabel
      expect(inputInnerContainer).toHaveStyle({ backgroundColor: 'white' });
      expect(outlinedContainer).toHaveStyle({ backgroundColor: 'white' });
      expect(input).toHaveStyle({ backgroundColor: 'white' });
      expect(inputLabel).toHaveStyle({ color: 'red' });
      expect(inputBottomLabel).toHaveStyle({ color: 'red' });
      expect(inputCountLabel).toHaveStyle({ color: 'red' });
    });
    it('render with error theme', () => {
      const { getByTestId } = renderWithContext(
        <TextInput
          label="Label"
          bottomLabel="Bottom Label"
          count
          editable={false}
          variant="outlined"
          maxLength={10}
          theme={{ disabled: {
            background: 'grey',
            border: 'grey',
            bottomLabel: 'grey',
            countLabel: 'grey',
            label: 'white',
            value: 'white',
          } }}
        />,
      );
      const inputInnerContainer = getByTestId('inputInnerContainer');// background
      const outlinedContainer = getByTestId('outlinedContainer');// background
      const input = getByTestId('input');// background
      const inputLabel = getByTestId('inputLabel');// label
      const inputBottomLabel = getByTestId('inputBottomLabel');// bottomLabel
      const inputCountLabel = getByTestId('inputCountLabel');// inputCountLabel
      expect(inputInnerContainer).toHaveStyle({ backgroundColor: 'grey' });
      expect(outlinedContainer).toHaveStyle({ backgroundColor: 'grey' });
      expect(input).toHaveStyle({ backgroundColor: 'grey' });
      expect(inputLabel).toHaveStyle({ color: 'white' });
      expect(inputBottomLabel).toHaveStyle({ color: 'grey' });
      expect(inputCountLabel).toHaveStyle({ color: 'grey' });
    });
  });
  describe('render with count,label and bottomLabel props', () => {
    const { getByTestId, getByText } = renderWithContext(
      <TextInput
        label="Label"
        count
        maxLength={10}
        bottomLabel="Bottom Label"
      />,
    );
    fireEvent.changeText(getByTestId('input'), 'HelloWorld');
    expect(getByText('10/10')).toBeTruthy();
    expect(getByText('Bottom Label')).toBeTruthy();
    expect(getByText('Label')).toBeTruthy();
  });
  describe('render with custom styles', () => {
    const { getByTestId } = renderWithContext(
      <TextInput
        label="Label"
        bottomLabel="Bottom Label"
        count
        inputStyle={{ fontSize: 12, fontWeight: 'bold', lineHeight: 11 }}// input
        labelStyle={{ fontWeight: '500' }}// inputLabel
        containerStyle={{ marginTop: 10, paddingHorizontal: 13, paddingVertical: 3 }}// inputContainer
        bottomLabelStyle={{ fontSize: 8, fontWeight: '500', lineHeight: 10 }}// inputBottomLabel , inputCountLabel
        inputContainerStyle={{ marginTop: 6, paddingHorizontal: 9, paddingVertical: 5 }}// inputInnerContainer
        labelContainerStyle={{ marginTop: 3, paddingHorizontal: 6, paddingVertical: 2 }} // labelContainer
      />,
    );
    const inputInnerContainer = getByTestId('inputInnerContainer');
    const inputContainer = getByTestId('inputContainer');
    const labelContainer = getByTestId('labelContainer');
    const input = getByTestId('input');
    const inputLabel = getByTestId('inputLabel');
    const inputBottomLabel = getByTestId('inputBottomLabel');
    const inputCountLabel = getByTestId('inputCountLabel');

    expect(input).toHaveStyle({ fontSize: 12, fontWeight: 'bold', lineHeight: 11 });
    expect(inputLabel).toHaveStyle({ fontWeight: '500' });
    expect(inputContainer).toHaveStyle({ marginTop: 10, paddingHorizontal: 13, paddingVertical: 3 });
    expect(inputBottomLabel).toHaveStyle({ fontSize: 8, fontWeight: '500', lineHeight: 10 });
    expect(inputCountLabel).toHaveStyle({ fontSize: 8, fontWeight: '500', lineHeight: 10 });
    expect(inputInnerContainer).toHaveStyle({ marginTop: 6, paddingHorizontal: 9, paddingVertical: 5 });
    expect(labelContainer).toHaveStyle({ marginTop: 3, paddingHorizontal: 6, paddingVertical: 2 });
  });
});
