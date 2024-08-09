import { fireEvent, render, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import ProgressBar from '../ProgressBar/ProgressBar';

/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('ProgressBar', () => {
  it('default render', () => {
    const tree = renderWithContext(<ProgressBar />);
    expect(tree).toMatchSnapshot();
  });
  describe('render with custom styles', () => {
    it('render with progressStyle and barStyle props', () => {
      const { getByTestId } = renderWithContext(<ProgressBar
        testID="progressBar"
        barStyle={{ margin: 10, padding: 10, marginTop: 12 }}
        progressStyle={{ margin: 5, padding: 15, marginTop: 11 }}
      />);
      const bar = getByTestId('progressBar');
      const progress = getByTestId('progressBarAnimation');
      expect(bar).toHaveStyle({ margin: 10, padding: 10, marginTop: 12 });
      expect(progress).toHaveStyle({ margin: 5, padding: 15, marginTop: 11 });
    });
  });
  describe('render with custom theme', () => {
    it('render with default theme', () => {
      const { getByTestId } = renderWithContext(<ProgressBar
        testID="progressBar"
        theme={{ default: { bar: 'red', progress: 'white' } }}
      />);
      const bar = getByTestId('progressBar');
      const progress = getByTestId('progressBarAnimation');
      expect(bar).toHaveStyle({ backgroundColor: 'red' });
      expect(progress).toHaveStyle({ backgroundColor: 'white' });
    });
  });
});

// ANİMASYON TESTİ EKSİK
