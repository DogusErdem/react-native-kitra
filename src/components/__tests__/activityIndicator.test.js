import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';
import { opacity } from '../../utilities';
/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('ActiviyIndicator', () => {
  it('renders avtivity indicator with children', () => {
    // eslint-disable-next-line react/no-children-prop
    const tree = renderWithContext(<ActivityIndicator children={<Text>TEST</Text>} />);
    expect(tree).toMatchSnapshot();
  });
  it('renders avtivity indicator', () => {
    const tree = renderWithContext(<ActivityIndicator />);
    expect(tree).toMatchSnapshot();
  });
  it('renders with custom theme', () => {
    const tree = renderWithContext(
      <ActivityIndicator theme={{ default: { background: 'black', indicator: 'green' } }} />,
    );
    const container = tree.getByTestId('container');
    // const activityIndicator = tree.getByTestId('activityIndicator');

    expect(container).toHaveStyle({ backgroundColor: opacity('black', 80) });
    // expect(activityIndicator).toHaveStyle({ color: 'green' });
  });
});
