import { render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Divider from '../Divider/Divider';

/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Divider', () => {
  it('default render', () => {
    const tree = renderWithContext(<Divider />);
    expect(tree).toMatchSnapshot();
  });
  describe('render with custom theme', () => {
    it('render with default theme', () => {
      const { getByTestId } = renderWithContext(<Divider theme={{ default: { background: 'blue' } }} />);
      const divider = getByTestId('divider');
      expect(divider).toHaveStyle({ borderColor: 'blue' });
    });
  });
  describe('render with different style and prop', () => {
    it('render with width prop', () => {
      const { getByTestId } = renderWithContext(<Divider width={120} />);
      const container = getByTestId('dividerContainer');
      const divider = getByTestId('divider');
      expect(container).toHaveStyle({ width: 120 });
      expect(divider).toHaveStyle({ width: 120 });
    });
    it('render with borderWidth prop', () => {
      const { getByTestId } = renderWithContext(<Divider borderWidth={2} width={110} />);
      const container = getByTestId('dividerContainer');
      const divider = getByTestId('divider');
      expect(container).toHaveStyle({ width: 110 });
      expect(divider).toHaveStyle({ width: 110, borderWidth: 2 });
    });
    it('render with borderWidth prop', () => {
      const { getByTestId } = renderWithContext(<Divider
        borderWidth={2}
        width={110}
        style={{ marginTop: 10, padding: 15 }}
      />);
      const container = getByTestId('dividerContainer');
      const divider = getByTestId('divider');
      expect(container).toHaveStyle({ width: 110, marginTop: 10, padding: 15 });
      expect(divider).toHaveStyle({ width: 110, borderWidth: 2 });
    });
  });
  describe('render with different variant', () => {
    it('render with solid variant', () => {
      const { getByTestId } = renderWithContext(<Divider variant="solid" />);
      const divider = getByTestId('divider');
      expect(divider).toHaveStyle({ borderStyle: 'solid' });
    });
    it('render with solid dashed', () => {
      const { getByTestId } = renderWithContext(<Divider variant="dashed" />);
      const divider = getByTestId('divider');
      expect(divider).toHaveStyle({ borderStyle: 'dashed' });
    });
    it('render with solid dotted', () => {
      const { getByTestId } = renderWithContext(<Divider variant="dotted" />);
      const divider = getByTestId('divider');
      expect(divider).toHaveStyle({ borderStyle: 'dotted' });
    });
  });
});
