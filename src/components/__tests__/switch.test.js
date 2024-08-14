import { fireEvent, render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Switch from '../Switch/Switch';

/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Switch', () => {
  it('default render', () => {
    const tree = renderWithContext(
      <Switch />,
    );
    expect(tree).toMatchSnapshot();
  });
  describe('render with onValueChange prop', () => {
    const onValueChange = jest.fn();
    const { getByTestId } = renderWithContext(
      <Switch
        onValueChange={onValueChange}
      />,
    );
    const switchElement = getByTestId('switch');
    fireEvent(switchElement, 'valueChange', true);
    expect(onValueChange).toHaveBeenCalledWith(true);
    fireEvent(switchElement, 'valueChange', false);
    expect(onValueChange).toHaveBeenCalledWith(false);
  });
});

// CUSTOM THEME EKSİK
