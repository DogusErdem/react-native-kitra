import { render, fireEvent } from '@testing-library/react-native';
import { Text, View } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Chip from '../Chip/Chip';
import Icon from '../Icons/Icon';

/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Chip', () => {
  it('default render', () => {
    const tree = renderWithContext(<Chip label="Test" />);
    expect(tree).toMatchSnapshot();
  });
  describe('render with different size', () => {
    it('render with small size', () => {
      const { getByTestId } = renderWithContext(
        <Chip
          size="small"
          label="Test"
        />,
      );
      const container = getByTestId('chip');
      const label = getByTestId('chipLabel');
      expect(container).toHaveStyle({ height: 24 });
      expect(label).toHaveStyle({ fontSize: 10, lineHeight: 16 });
    });
    it('render with medium size', () => {
      const { getByTestId } = renderWithContext(
        <Chip
          size="medium"
          label="Test"
        />,
      );
      const container = getByTestId('chip');
      const label = getByTestId('chipLabel');
      expect(container).toHaveStyle({ height: 30 });
      expect(label).toHaveStyle({ fontSize: 12, lineHeight: 18 });
    });
    it('render with large size', () => {
      const { getByTestId } = renderWithContext(
        <Chip
          size="large"
          label="Test"
        />,
      );
      const container = getByTestId('chip');
      const label = getByTestId('chipLabel');
      expect(container).toHaveStyle({ height: 33 });
      expect(label).toHaveStyle({ fontSize: 14, lineHeight: 21 });
    });
  });
  describe('render with custom styles', () => {
    it('render with syle and labelStyle props', () => {
      const { getByTestId } = renderWithContext(
        <Chip
          style={{ padding: 5, marginTop: 10, paddingHorizontal: 3 }}
          labelStyle={{ fontSize: 14, lineHeight: 13, textAlign: 'center' }}
        />,
      );
      const container = getByTestId('chip');
      const label = getByTestId('chipLabel');
      expect(container).toHaveStyle({ padding: 5, marginTop: 10, paddingHorizontal: 3 });
      expect(label).toHaveStyle({ fontSize: 14, lineHeight: 13, textAlign: 'center' });
    });
  });
  describe('render with onChange and left right props', () => {
    const onChange = jest.fn();
    const left = jest.fn(item => <Text>{item ? 'LeftTrue' : 'LeftFalse'}</Text>);
    const right = jest.fn(item => <Text>{item ? 'RightTrue' : 'RightFalse'}</Text>);

    const { getByTestId, getByText } = renderWithContext(
      <Chip
        onChange={onChange}
        left={left}
        right={right}
      />,
    );
    const chip = getByTestId('chip');
    fireEvent.press(chip);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(left).toHaveBeenCalledWith(true);
    expect(right).toHaveBeenCalledWith(true);
    expect(getByText('LeftTrue')).toBeTruthy();
    expect(getByText('RightTrue')).toBeTruthy();
    fireEvent.press(chip);
    expect(onChange).toHaveBeenCalledWith(false);
    expect(left).toHaveBeenCalledWith(false);
    expect(right).toHaveBeenCalledWith(false);
    expect(getByText('LeftFalse')).toBeTruthy();
    expect(getByText('RightFalse')).toBeTruthy();
  });
  describe('render with label prop', () => {
    it('label prop', () => {
      const { getByText } = renderWithContext(
        <Chip label="Chip Label Test" />,
      );
      expect(getByText('Chip Label Test')).toBeTruthy();
    });
  });
  describe('render with disabled prop', () => {
    it('disabled prop', () => {
      const onChange = jest.fn();
      const { getByTestId } = renderWithContext(
        <Chip
          onChange={onChange}
          disabled
        />,
      );
      const chip = getByTestId('chip');
      fireEvent.press(chip);
      fireEvent.press(chip);
      expect(onChange).toHaveBeenCalledTimes(1);
    });
  });
});

// REANİMATED İLE STİLLERİ KONTROL ET
