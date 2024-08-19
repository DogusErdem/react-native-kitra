/* eslint-disable no-undef */
import { fireEvent, render } from '@testing-library/react-native';
import ToggleButton from '../ToggleButton/ToggleButton';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('ToggleButton', () => {
  const mockOnPress = jest.fn();
  const buttons = [{ label: 'button1', onPress: () => {} },
    { label: 'button2', onPress: () => {} }, { label: 'button3', onPress: mockOnPress }];

  it('default render', () => {
    const { getByText } = renderWithContext(<ToggleButton buttons={buttons} />);
    expect(() => getByText('button1')).not.toThrow();
    expect(() => getByText('button2')).not.toThrow();
  });
  describe('render with size prop', () => {
    it('render with small size', () => {
      const { getByTestId } = renderWithContext(<ToggleButton buttons={buttons} size="small" />);
      const button1 = getByTestId('toggleButton-item-0');
      const button2 = getByTestId('toggleButton-item-1');
      const toggleButtonLabel0 = getByTestId('toggleButtonLabel0');
      const toggleButtonLabel1 = getByTestId('toggleButtonLabel1');

      expect(button1).toHaveStyle({ paddingHorizontal: 10, paddingVertical: 5 });
      expect(button2).toHaveStyle({ paddingHorizontal: 10, paddingVertical: 5 });
      expect(toggleButtonLabel0).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
      expect(toggleButtonLabel1).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
    });

    it('render with medium size', () => {
      const { getByTestId } = renderWithContext(<ToggleButton buttons={buttons} size="medium" />);
      const button1 = getByTestId('toggleButton-item-0');
      const button2 = getByTestId('toggleButton-item-1');
      const toggleButtonLabel0 = getByTestId('toggleButtonLabel0');
      const toggleButtonLabel1 = getByTestId('toggleButtonLabel1');

      expect(button1).toHaveStyle({ paddingHorizontal: 20, paddingVertical: 10 });
      expect(button2).toHaveStyle({ paddingHorizontal: 20, paddingVertical: 10 });
      expect(toggleButtonLabel0).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
      expect(toggleButtonLabel1).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
    });
  });
  describe('render with custom theme', () => {
    it('render with default theme', () => {
      const { getByTestId } = renderWithContext(<ToggleButton
        theme={{ default: { background: 'white', border: '#195CEF', label: '#195CEF' } }}
        buttons={buttons}
      />);
      const button1 = getByTestId('toggleButton-item-0');
      const button2 = getByTestId('toggleButton-item-1');
      const toggleButtonLabel0 = getByTestId('toggleButtonLabel0');
      const toggleButtonLabel1 = getByTestId('toggleButtonLabel1');
      expect(button1).toHaveStyle({ borderColor: '#195CEF', backgroundColor: 'white' });
      expect(button2).toHaveStyle({ borderColor: '#195CEF', backgroundColor: 'white' });
      expect(toggleButtonLabel0).toHaveStyle({ color: '#195CEF' });
      expect(toggleButtonLabel1).toHaveStyle({ color: '#195CEF' });
    });
    it('render with active theme', () => {
      const { getByTestId } = renderWithContext(<ToggleButton
        theme={{ active: { background: '#195CEF', border: 'white', label: '#F6F9FF' } }}
        buttons={buttons}
      />);
      const button1 = getByTestId('toggleButton-item-0');
      const button2 = getByTestId('toggleButton-item-1');
      fireEvent.press(button1);
      fireEvent.press(button2);
      const toggleButtonLabel0 = getByTestId('toggleButtonLabel0');
      const toggleButtonLabel1 = getByTestId('toggleButtonLabel1');
      expect(button1).toHaveStyle({ borderColor: 'white', backgroundColor: '#195CEF' });
      expect(button2).toHaveStyle({ borderColor: 'white', backgroundColor: '#195CEF' });
      expect(toggleButtonLabel0).toHaveStyle({ color: '#F6F9FF' });
      expect(toggleButtonLabel1).toHaveStyle({ color: '#F6F9FF' });
    });
    it('render with active and default theme', () => {
      const { getByTestId } = renderWithContext(<ToggleButton
        theme={{ active: { background: '#195CEF', border: 'white', label: '#F6F9FF' },
          default: { background: 'white', border: '#195CEF', label: '#195CEF' } }}
        buttons={buttons}
      />);
      const button1 = getByTestId('toggleButton-item-0');
      const button2 = getByTestId('toggleButton-item-1');
      fireEvent.press(button1);
      const toggleButtonLabel0 = getByTestId('toggleButtonLabel0');
      const toggleButtonLabel1 = getByTestId('toggleButtonLabel1');
      expect(button1).toHaveStyle({ borderColor: 'white', backgroundColor: '#195CEF' });
      expect(button2).toHaveStyle({ borderColor: '#195CEF', backgroundColor: 'white' });
      expect(toggleButtonLabel0).toHaveStyle({ color: '#F6F9FF' });
      expect(toggleButtonLabel1).toHaveStyle({ color: '#195CEF' });
    });
  });
});
