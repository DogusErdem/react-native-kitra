/* eslint-disable no-undef */
import { render, fireEvent, act } from '@testing-library/react-native';
import AccordionList from '../AccordionList/AccordionList';
import Icon from '../Icons/Icon';
import { KitraProvider } from '../../core/KitraProvider';

const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

const mockData = [
  {
    title: 'title1',
    content: 'content1',
  },
  {
    title: 'title2',
    content: 'content2',
  },
  {
    title: 'title3',
    content: 'content3',
  },
];

const mockData2 = ['title1', 'title2', 'title3'];

describe('AccordionList', () => {
  describe('renders with different data types', () => {
    it('renders default', () => {
      const tree = renderWithContext(
        <AccordionList
          data={mockData}
          label="title"
          onSelect={x => x}
          itemDisplay={x => x.title}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with string array data', () => {
      const tree = renderWithContext(
        <AccordionList
          data={mockData2}
          label="title"
          onSelect={x => x}
          itemDisplay={x => x.title}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders with icons', () => {
    it('renders with left icon prop', () => {
      const tree = renderWithContext(
        <AccordionList
          data={mockData}
          left={() => <Icon type="material-community" name="flower-tulip" size={24} color="dimgrey" />}
          label="title"
          onSelect={x => x}
          itemDisplay={x => x.title}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with right icon prop', () => {
      const tree = renderWithContext(
        <AccordionList
          data={mockData}
          right={() => <Icon type="material-community" name="flower-tulip" size={24} color="dimgrey" />}
          label="title"
          onSelect={x => x}
          itemDisplay={x => x.title}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('renders with different styles', () => {
    it('renders with default style', () => {
      const tree = renderWithContext(
        <AccordionList
          data={mockData}
          label="title"
          onSelect={x => x}
          itemDisplay={x => x.title}
        />,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with custom style', () => {
      const tree = renderWithContext(
        <AccordionList
          data={mockData}
          label="title"
          onSelect={x => x}
          itemDisplay={x => x.title}
          rowStyle={{ padding: 10 }}
          labelStyle={{ fontSize: 20 }}
          labelContainerStyle={{ padding: 5 }}
          rowTextStyle={{ fontSize: 15 }}
          testID="accordionList"
          theme={{ default: {
            background: 'red',
            collapseIcon: 'green',
            collapseIconBackground: 'grey',
            label: 'yellow',
          } }}
        />,
      );
      const labelContainer = tree.getByTestId('labelContainerTestID');
      const label = tree.getByTestId('labelTestID');
      const iconContainer = tree.getByTestId('collapseIconContainerTestID');

      expect(labelContainer).toHaveStyle({ padding: 5, backgroundColor: 'red' });
      expect(label).toHaveStyle({ fontSize: 20, color: 'yellow' });
      expect(iconContainer).toHaveStyle({ backgroundColor: 'grey' });

      // fireEvent.press(getByTestId('accordionList'));

      // expect(tree).toMatchSnapshot();
    });
  });

  it('calls onSelect when an item is pressed', async () => {
    const mockOnExpand = jest.fn();

    const { getByTestId } = renderWithContext(

      <AccordionList
        data={mockData}
        label="Test Label"
        onExpand={mockOnExpand}
        itemDisplay={item => item.title}
        testID="accordionList"
      />,

    );
    fireEvent.press(getByTestId('accordionList'));
    expect(mockOnExpand).toHaveBeenCalled();
  });
});
