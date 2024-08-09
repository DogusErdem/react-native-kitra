import { render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icons/Icon';
/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Avatar', () => {
  it('renders default', () => {
    const tree = renderWithContext(
      <Avatar
        size="small"
        variant="rounded"
        label="Test"
        avatarIcon={<Icon type="octicon" name="person" size={10} color="white" />}
        source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('render with size', () => {
    it('render with image and medium size', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          size="medium"
          source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
        />,
      );
      const container = getByTestId('avatarContainer');
      const image = getByTestId('avatarImage');

      expect(container).toHaveStyle({ width: 100, height: 100 });
      expect(image).toHaveStyle({ width: 100, height: 100 });
    });
    it('render with image and small size', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          size="small"
          source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
        />,
      );
      const container = getByTestId('avatarContainer');
      const image = getByTestId('avatarImage');
      expect(container).toHaveStyle({ width: 30, height: 30 });
      expect(image).toHaveStyle({ width: 30, height: 30 });
    });
    it('render with label and medium size', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          size="medium"
          label="Test"
        />,
      );
      const container = getByTestId('avatarContainer');
      const label = getByTestId('avatarLabel');
      expect(container).toHaveStyle({ width: 100, height: 100 });
      expect(label).toHaveStyle({ fontSize: 28 });
    });
    it('render with label and small size', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          size="small"
          label="Test"
        />,
      );
      const container = getByTestId('avatarContainer');
      const label = getByTestId('avatarLabel');
      expect(container).toHaveStyle({ width: 30, height: 30 });
      expect(label).toHaveStyle({ fontSize: 12 });
    });
  });
  describe('render with variant props', () => {
    it('render with circular', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          variant="circular"
          source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
        />,
      );
      const container = getByTestId('avatarContainer');
      const image = getByTestId('avatarImage');
      expect(container).toHaveStyle({ borderRadius: 50 });
      expect(image).toHaveStyle({ borderRadius: 50 });
    });
    it('render with rounded', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          variant="rounded"
          source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
        />,
      );
      const container = getByTestId('avatarContainer');
      const image = getByTestId('avatarImage');
      expect(container).toHaveStyle({ borderRadius: 10 });
      expect(image).toHaveStyle({ borderRadius: 10 });
    });
  });
  describe('render with custom theme', () => {
    it('render with default custom theme label', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          theme={{ default: { background: 'blue', label: 'white' } }}
          label="TEST"
        />,
      );
      const container = getByTestId('avatarContainer');
      const label = getByTestId('avatarLabel');
      expect(container).toHaveStyle({ backgroundColor: 'blue' });
      expect(label).toHaveStyle({ color: 'white' });
    });
    it('render with default custom theme icon', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          theme={{ default: { background: 'blue', label: 'white' } }}
        />,
      );
      const container = getByTestId('avatarContainer');
      const icon = getByTestId('avatarIcon');
      expect(container).toHaveStyle({ backgroundColor: 'blue' });
      expect(icon).toHaveStyle({ color: 'white' });
    });
  });
  describe('render with custom styles', () => {
    it('render with containerStyle and labelSyle props', () => {
      const { getByTestId } = renderWithContext(
        <Avatar
          label="TEST"
          labelStyle={{ fontSize: 20, fontWeight: '600', textAlign: 'center' }}
          containerStyle={{ marginTop: 20, padding: 10 }}
        />,
      );
      const container = getByTestId('avatarContainer');
      const label = getByTestId('avatarLabel');
      expect(container).toHaveStyle({ marginTop: 20, padding: 10 });
      expect(label).toHaveStyle({ fontSize: 20, fontWeight: '600', textAlign: 'center' });
    });
  });
  // it('render with icon and medium size', () => {
  //   const { getByTestId } = renderWithContext(
  //     <Avatar
  //       size="medium"
  //     />,
  //   );
  //   const container = getByTestId('container');
  //   const icon = getByTestId('icon');
  //   expect(container).toHaveStyle({ width: 100, height: 100 });
  //   expect(icon).toHaveStyle({ size: 30 });
  // });
  // it('render with icon and small size', () => {
  //   const { getByTestId } = renderWithContext(
  //     <Avatar
  //       size="small"
  //     />,
  //   );
  //   const container = getByTestId('container');
  //   const icon = getByTestId('icon');
  //   expect(container).toHaveStyle({ width: 30, height: 30 });
  //   expect(icon).toHaveStyle({ size: 10 });
  // });
});
