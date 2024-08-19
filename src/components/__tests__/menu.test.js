import { fireEvent, render, act } from '@testing-library/react-native';
import { Text } from 'react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Menu from '../Menu/Menu';
import Icon from '../Icons/Icon';

/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

const items = [
  {
    left: <Icon type="material" name="share" color="white" />,
    label: 'Share',
    onPress: () => console.log('Share'),
  },
  {
    left: <Icon type="material" name="delete" color="white" />,
    right: <Icon type="material" name="delete" color="white" />,
    label: 'Delete',
    onPress: () => console.log('Delete'),
  },
];
describe('Menu', () => {
  it('default render', () => {
    const tree = renderWithContext(<Menu items={items} />);
    expect(tree).toMatchSnapshot();
  });
  describe('render with diffent style props', () => {
    it('render with menuStyle prop', () => {
      const { getByTestId } = renderWithContext(<Menu
        items={items}
        menuStyle={{ padding: 10, margin: 10, marginTop: 5 }}
      />);
      const openButton = getByTestId('openButton');
      fireEvent.press(openButton);
      const itemsContainer = getByTestId('itemsContainer');
      expect(itemsContainer).toHaveStyle({ padding: 10, margin: 10, marginTop: 5 });
    });
    it('render with containerStyle prop', () => {
      const { getByTestId } = renderWithContext(<Menu
        items={items}
        containerStyle={{ padding: 10, margin: 10, marginTop: 5 }}
      />);
      const menuContainer = getByTestId('menuContainer');
      expect(menuContainer).toHaveStyle({ padding: 10, margin: 10, marginTop: 5 });
    });
    it('render with rowStyle prop', () => {
      const { getByTestId } = renderWithContext(<Menu
        items={items}
        rowStyle={{ padding: 10, margin: 10, marginTop: 5 }}
        rowTextStyle={{ fontSize: 14, lineHeight: 12, textAlign: 'center' }}
      />);
      const openButton = getByTestId('openButton');
      fireEvent.press(openButton);
      const listContainer1 = getByTestId('listContainer1');
      const listContainer0 = getByTestId('listContainer0');
      const itemLabel1 = getByTestId('itemLabel1');
      const itemLabel0 = getByTestId('itemLabel0');
      expect(listContainer1).toHaveStyle({ padding: 10, margin: 10, marginTop: 5 });
      expect(itemLabel1).toHaveStyle({ fontSize: 14, lineHeight: 12, textAlign: 'center' });
      expect(listContainer0).toHaveStyle({ padding: 10, margin: 10, marginTop: 5 });
      expect(itemLabel0).toHaveStyle({ fontSize: 14, lineHeight: 12, textAlign: 'center' });
    });
  });
  describe('render with custom theme', () => {
    it('render width custom active theme', () => {
      const { getByTestId } = renderWithContext(
        <Menu
          items={items}
          theme={{ active: { divider: 'white', itemBackground: 'blue', itemLabel: 'black' } }}
        />,
      );
      const openButton = getByTestId('openButton');
      fireEvent.press(openButton);
      const itemsContainer = getByTestId('itemsContainer');
      expect(itemsContainer).toHaveStyle({ backgroundColor: 'blue' });
      const itemLabel1 = getByTestId('itemLabel1');
      const itemLabel0 = getByTestId('itemLabel0');
      const divider = getByTestId('divider');
      expect(itemLabel1).toHaveStyle({ color: 'black' });
      expect(itemLabel0).toHaveStyle({ color: 'black' });
      expect(divider).toHaveStyle({ borderColor: 'white' });
    });
  });
  describe('open and close menu', () => {
    const onPress = jest.fn();
    const onPress1 = jest.fn();
    const onPress2 = jest.fn();
    it('toggles open on button press', async () => {
      const { getByTestId } = renderWithContext(<Menu
        closeOnPress
        items={[
          { label: 'test', left: <Text>sada</Text>, onPress },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, dividerColor: 'red', onPress: onPress1 },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, onPress: onPress2 },
        ]}
      />);
      const openButton = getByTestId('openButton');
      fireEvent.press(openButton);

      const menuContainer = getByTestId('itemsContainer');
      expect(menuContainer).toBeVisible();

      const closeButton = getByTestId('itemButton0');
      fireEvent.press(closeButton);

      expect(onPress).toHaveBeenCalled();
    });
    it('menu close with open button', async () => {
      const { getByTestId } = renderWithContext(<Menu
        items={[
          { label: 'test', left: <Text>sada</Text>, onPress },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, dividerColor: 'red', onPress: onPress1 },
          { label: 'test', right: <Text>test</Text>, left: <Text>test</Text>, onPress: onPress2 },
        ]}
      />);
      const openButton = getByTestId('openButton');
      fireEvent.press(openButton);
      const menuContainer = getByTestId('itemsContainer');

      expect(menuContainer).toBeVisible();

      fireEvent.press(openButton);
    });
  });
});
