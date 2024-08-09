import { render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Icon from '../Icons/Icon';
import Badge from '../Badge/Badge';
import Avatar from '../Avatar/Avatar';

/* eslint-disable no-undef */

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('Badge', () => {
  it('render default', () => {
    const tree = renderWithContext(
      <Badge
        label="Kitra"
        size="medium"
        variant="circular"
      />,
      expect(tree).toMatchSnapshot(),
    );
  });
  it('render with false visible ', () => {
    const { queryByTestId } = renderWithContext(
      <Badge visible={false} />,
    );
    const container = queryByTestId('badgeContainer');
    expect(container).toBeNull();
  });
  describe('render with different size', () => {
    it('render with medium size and circular (no label no icon)', () => {
      const { getByTestId } = renderWithContext(
        <Badge />,
      );
      const container = getByTestId('badgeContainer');
      expect(container).toHaveStyle({ borderRadius: 50, borderWidth: 3, paddingHorizontal: 10, paddingVertical: 10 });
    });
    it('render with medium size and circular', () => {
      const { getByTestId } = renderWithContext(
        <Badge
          label="Test"
        />,
      );
      const container = getByTestId('badgeContainer');
      const label = getByTestId('badgeLabel');
      expect(label).toHaveStyle({ fontSize: 10 });
      expect(container).toHaveStyle({ borderRadius: 50, borderWidth: 3, paddingHorizontal: 7, paddingVertical: 7 });
    });
    it('render with medium size and rectangular', () => {
      const { getByTestId } = renderWithContext(
        <Badge
          label="Test"
          variant="rectangular"
        />,
      );
      const container = getByTestId('badgeContainer');
      const label = getByTestId('badgeLabel');
      expect(label).toHaveStyle({ fontSize: 10 });
      expect(container).toHaveStyle({ borderRadius: 3, borderWidth: 0, paddingHorizontal: 8, paddingVertical: 4 });
    });
    it('render with small size and circular', () => {
      const { getByTestId } = renderWithContext(
        <Badge
          label="Test"
          size="small"
        />,
      );
      const container = getByTestId('badgeContainer');
      const label = getByTestId('badgeLabel');
      expect(label).toHaveStyle({ fontSize: 8 });
      expect(container).toHaveStyle({ borderRadius: 50, borderWidth: 1.5, paddingHorizontal: 3, paddingVertical: 3 });
    });
    it('render with small size and rectangular', () => {
      const { getByTestId } = renderWithContext(
        <Badge
          label="Test"
          size="small"
          variant="rectangular"
        />,
      );
      const container = getByTestId('badgeContainer');
      const label = getByTestId('badgeLabel');
      expect(label).toHaveStyle({ fontSize: 8 });
      expect(container).toHaveStyle({ borderRadius: 3, borderWidth: 0, paddingHorizontal: 6, paddingVertical: 3 });
    });
  });
  describe('render with custom theme', () => {
    it('', () => {
      const { getByTestId } = renderWithContext(
        <Badge
          theme={{ default: { background: 'red', label: 'white', border: 'blue' } }}
          label="Test"
        />,
      );
      const container = getByTestId('badgeContainer');
      const label = getByTestId('badgeLabel');

      expect(container).toHaveStyle({ backgroundColor: 'red', borderColor: 'blue' });
      expect(label).toHaveStyle({ color: 'white' });
    });
  });
  describe('render with children', () => {
    it('render with badge position (topRight)', () => {
      const { getByTestId } = renderWithContext(
        <Badge badgePosition="topRight" label="Test">
          <Avatar
            source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
            borderStyle="circular"
            label="John Doe"
            avatarIcon={<Icon type="material-community" name="penguin" size={30} />}
          />
        </Badge>,
      );
      const container = getByTestId('badgeContainer');
      expect(container).toHaveStyle({ top: 0, right: 0 });
    });
    it('render with badge position (topLeft)', () => {
      const { getByTestId } = renderWithContext(
        <Badge badgePosition="topLeft" label="Test">
          <Avatar
            source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
            borderStyle="circular"
            label="John Doe"
            avatarIcon={<Icon type="material-community" name="penguin" size={30} />}
          />
        </Badge>,
      );
      const container = getByTestId('badgeContainer');
      expect(container).toHaveStyle({ top: 0, left: 0 });
    });
    it('render with badge position (bottomLeft)', () => {
      const { getByTestId } = renderWithContext(
        <Badge badgePosition="bottomLeft" label="Test">
          <Avatar
            source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
            borderStyle="circular"
            label="John Doe"
            avatarIcon={<Icon type="material-community" name="penguin" size={30} />}
          />
        </Badge>,
      );
      const container = getByTestId('badgeContainer');
      expect(container).toHaveStyle({ bottom: 0, left: 0 });
    });
    it('render with badge position (bottomRight)', () => {
      const { getByTestId } = renderWithContext(
        <Badge badgePosition="bottomRight" label="Test">
          <Avatar
            source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
            borderStyle="circular"
            label="John Doe"
            avatarIcon={<Icon type="material-community" name="penguin" size={30} />}
          />
        </Badge>,
      );
      const container = getByTestId('badgeContainer');
      expect(container).toHaveStyle({ bottom: 0, right: 0 });
    });
    it('render with avatar', () => {
      const { queryByTestId } = renderWithContext(
        <Badge badgePosition="bottomRight" label="Test">
          <Avatar
            source={{ uri: 'https://docs.teraportfoy.com/test-images/sliders/slider_1.jpg' }}
            borderStyle="circular"
            label="John Doe"
            avatarIcon={<Icon type="material-community" name="penguin" size={30} />}
          />
        </Badge>,
      );
      const avatarContainer = queryByTestId('avatarContainer');
      expect(avatarContainer).toBeTruthy();
    });
  });
  describe('render with custom styles', () => {
    const { getByTestId } = renderWithContext(
      <Badge
        badgeStyle={{ borderWidth: 1, padding: 3, borderColor: 'red' }}
        containerStyle={{ padding: 5, marginTop: 10 }}
        labelStyle={{ fontSize: 15, fontWeight: 'bold' }}
        label="Test"
      />,
    );
    const badgeContainer = getByTestId('badgeContainer');
    const badgeLabel = getByTestId('badgeLabel');
    const badgeNodeContainer = getByTestId('badgeNodeContainer');

    expect(badgeContainer).toHaveStyle({ borderWidth: 1, padding: 3, borderColor: 'red' });
    expect(badgeLabel).toHaveStyle({ fontSize: 15, fontWeight: 'bold' });
    expect(badgeNodeContainer).toHaveStyle({ padding: 5, marginTop: 10 });
  });
  describe('render with different props', () => {
    it('render with icon', () => {
      const { queryByTestId } = renderWithContext(
        <Badge
          icon={<Icon testID="icon" type="ionicon" name="person" color="white" />}
        />,
      );
      const icon = queryByTestId('icon');
      const badgeLabel = queryByTestId('badgeLabel');
      expect(icon).toBeTruthy();
      expect(badgeLabel).toBeNull();
    });
    it('render with label', () => {
      const { queryByTestId } = renderWithContext(
        <Badge
          label="Test"
        />,
      );
      const icon = queryByTestId('icon');
      const badgeLabel = queryByTestId('badgeLabel');
      expect(icon).toBeNull();
      expect(badgeLabel).toBeTruthy();
    });
    it('render with label and icon', () => {
      const { queryByTestId } = renderWithContext(
        <Badge
          label="Test"
          icon={<Icon testID="icon" type="ionicon" name="person" color="white" />}
        />,
      );
      const icon = queryByTestId('icon');
      const badgeLabel = queryByTestId('badgeLabel');
      expect(icon).toBeNull();
      expect(badgeLabel).toBeTruthy();
    });
  });
});
