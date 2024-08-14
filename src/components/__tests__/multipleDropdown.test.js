import { fireEvent, render } from '@testing-library/react-native';
import { KitraProvider } from '../../core/KitraProvider';
import Dropdown from '../Dropdown/index';

const data = [
  {
    id: 1,
    name: 'The Beatles',
    activeYears: '1960-1970',
    members: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
  },
  {
    id: 2,
    name: 'The Rolling Stones',
    activeYears: '1962-present',
    members: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
  },
  {
    id: 3,
    name: 'Led Zeppelin',
    activeYears: '1968-1980',
    members: ['Jimmy Page', 'Robert Plant', 'John Paul Jones', 'John Bonham'],
  },
  {
    id: 4,
    name: 'Pink Floyd',
    activeYears: '1965-1995, 2005, 2012-2014',
    members: ['Syd Barrett', 'Nick Mason', 'Roger Waters', 'Richard Wright', 'David Gilmour'],
  },
  {
    id: 5,
    name: 'The Who',
    activeYears: '1964-present',
    members: ['Roger Daltrey', 'Pete Townshend', 'John Entwistle', 'Keith Moon'],
  },
  {
    id: 6,
    name: 'Queen',
    activeYears: '1970-present',
    members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'],
  },
];
/* eslint-disable no-undef */
const renderWithContext = children => render(<KitraProvider>{children}</KitraProvider>);

describe('MultipleDropdown', () => {
  it('default render', () => {
    const { getByText } = renderWithContext(
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        multiple
      />,
    );
    expect(getByText('Please Select')).toBeTruthy();
  });
  describe('render with different size', () => {
    it('render with small size', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => x.name}
          multiple
          size="small"
        />,
      );
      const multipleDropdownButton = getByTestId('multipleDropdownButton');
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      fireEvent.press(multipleDropdownButton);
      const multipleDropdownListContainer = getByTestId('multipleDropdownListContainer');
      const multipleItemButton0 = getByTestId('multipleItemButton0');
      const multipleItemButton2 = getByTestId('multipleItemButton2');
      const multipleItemButtonLabel0 = getByTestId('multipleItemButtonLabel0');
      const multipleItemButtonLabel2 = getByTestId('multipleItemButtonLabel2');

      expect(multipleDropdownButton).toHaveStyle({ height: 36 });
      expect(multipleDropdownButtonLabel).toHaveStyle({ fontSize: 10, lineHeight: 16, fontFamily: 'Poppins-Medium' });
      expect(multipleDropdownListContainer).toHaveStyle({ maxHeight: 6 * 35 });
      expect(multipleItemButton0).toHaveStyle({ height: 35 });
      expect(multipleItemButton2).toHaveStyle({ height: 35 });
      expect(multipleItemButtonLabel0).toHaveStyle({ fontSize: 10, lineHeight: 16, fontFamily: 'Poppins-Medium' });
      expect(multipleItemButtonLabel2).toHaveStyle({ fontSize: 10, lineHeight: 16, fontFamily: 'Poppins-Medium' });
    });
    it('render with medium size', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => x.name}
          multiple
          size="medium"
        />,
      );
      const multipleDropdownButton = getByTestId('multipleDropdownButton');
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      fireEvent.press(multipleDropdownButton);
      const multipleDropdownListContainer = getByTestId('multipleDropdownListContainer');
      const multipleItemButton0 = getByTestId('multipleItemButton0');
      const multipleItemButton2 = getByTestId('multipleItemButton2');
      const multipleItemButtonLabel0 = getByTestId('multipleItemButtonLabel0');
      const multipleItemButtonLabel2 = getByTestId('multipleItemButtonLabel2');

      expect(multipleDropdownButton).toHaveStyle({ height: 42 });
      expect(multipleDropdownButtonLabel).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
      expect(multipleDropdownListContainer).toHaveStyle({ maxHeight: 6 * 38 });
      expect(multipleItemButton0).toHaveStyle({ height: 38 });
      expect(multipleItemButton2).toHaveStyle({ height: 38 });
      expect(multipleItemButtonLabel0).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
      expect(multipleItemButtonLabel2).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
    });
    it('render with large size', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedButtonValue={x => x.name}
          displayedRowValue={x => x.name}
          multiple
          size="large"
        />,
      );
      const multipleDropdownButton = getByTestId('multipleDropdownButton');
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      fireEvent.press(multipleDropdownButton);
      const multipleDropdownListContainer = getByTestId('multipleDropdownListContainer');
      const multipleItemButton0 = getByTestId('multipleItemButton0');
      const multipleItemButton2 = getByTestId('multipleItemButton2');
      const multipleItemButtonLabel0 = getByTestId('multipleItemButtonLabel0');
      const multipleItemButtonLabel2 = getByTestId('multipleItemButtonLabel2');

      expect(multipleDropdownButton).toHaveStyle({ height: 51 });
      expect(multipleDropdownButtonLabel).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
      expect(multipleDropdownListContainer).toHaveStyle({ maxHeight: 6 * 41 });
      expect(multipleItemButton0).toHaveStyle({ height: 41 });
      expect(multipleItemButton2).toHaveStyle({ height: 41 });
      expect(multipleItemButtonLabel0).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
      expect(multipleItemButtonLabel2).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
    });
  });
  describe('render with left right props', () => {
    const left = jest.fn();
    const right = jest.fn();
    const { getByTestId } = renderWithContext(
      <Dropdown
        data={data}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
        left={left}
        right={right}
        multiple
      />,
    );
    const dropdownButton = getByTestId('multipleDropdownButton');

    expect(left).toHaveBeenCalledWith(false);
    expect(right).toHaveBeenCalledWith(false);
    fireEvent.press(dropdownButton);
    expect(left).toHaveBeenCalledWith(true);
    expect(right).toHaveBeenCalledWith(true);
  });
  describe('render with custom theme', () => {
    it('render with default theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          multiple
          selectall
          theme={{ default: {
            background: '#124CCA',
            border: '#F6F9FF',
            checkBackground: '#F6F9FF',
            checkBorder: '#F6F9FF',
            checkIcon: '#F6F9FF',
            collapseBackground: '#F6F9FF',
            collapseIcon: 'white',
            completeBackground: '#F6F9FF',
            completeLabel: '#F6F9FF',
            itemBackground: '#F6F9FF',
            itemLabel: '#F6F9FF',
            label: 'white',
            selectAllLabel: 'white',
          } }}
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      const multipleDropwdownButtonIcon = getByTestId('multipleDropwdownButtonIcon');
      expect(dropdownButton).toHaveStyle({ backgroundColor: '#124CCA', borderColor: '#F6F9FF' });
      expect(multipleDropdownButtonLabel).toHaveStyle({ color: 'white' });
      expect(multipleDropwdownButtonIcon).toHaveStyle({ color: 'white' });
    });
    it('render with active theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          multiple
          selectall
          theme={{ active: {
            background: '#F6F9FF',
            border: '#195CEF',
            checkBackground: '#195CEF',
            checkBorder: '#195CEF',
            checkIcon: '#195CEF',
            collapseBackground: '#195CEF',
            collapseIcon: '#195CEF',
            completeBackground: '#195CEF',
            completeLabel: '#195CEF',
            itemBackground: '#195CEF',
            itemLabel: 'white',
            label: '#195CEF',
            selectAllLabel: '#195CEF',
          } }}
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      fireEvent.press(dropdownButton);
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      const multipleDropwdownButtonIcon = getByTestId('multipleDropwdownButtonIcon');
      const multipleDropdownListContainer = getByTestId('multipleDropdownListContainer');
      const multipleItemButton0 = getByTestId('multipleItemButton0');
      const multipleItemButton1 = getByTestId('multipleItemButton1');
      const dropdownCheckBoxButton0 = getByTestId('dropdownCheckBoxButton0');
      const dropdownCheckBoxButton1 = getByTestId('dropdownCheckBoxButton1');
      const multipleItemButtonLabel0 = getByTestId('multipleItemButtonLabel0');
      const multipleItemButtonLabel1 = getByTestId('multipleItemButtonLabel1');

      expect(dropdownButton).toHaveStyle({ backgroundColor: '#F6F9FF', borderColor: '#195CEF' });
      expect(multipleDropdownButtonLabel).toHaveStyle({ color: '#195CEF' });
      expect(multipleDropwdownButtonIcon).toHaveStyle({ color: '#195CEF' });
      expect(multipleDropdownListContainer).toHaveStyle({ backgroundColor: '#195CEF' });
      expect(multipleItemButton0).toHaveStyle({ backgroundColor: '#F6F9FF' });
      expect(multipleItemButton1).toHaveStyle({ backgroundColor: '#F6F9FF' });
      expect(dropdownCheckBoxButton0).toHaveStyle({ backgroundColor: '#195CEF', borderColor: '#195CEF' });
      expect(dropdownCheckBoxButton1).toHaveStyle({ backgroundColor: '#195CEF', borderColor: '#195CEF' });
      expect(multipleItemButtonLabel0).toHaveStyle({ color: 'white' });
      expect(multipleItemButtonLabel1).toHaveStyle({ color: 'white' });
    });
    it('render with selected theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          multiple
          selectall
          theme={{ selected: {
            background: '#195CEF',
            border: '#F6F9FF',
            checkBackground: 'white',
            checkBorder: '#F6F9FF',
            checkIcon: '#F6F9FF',
            collapseBackground: '#124CCA',
            collapseIcon: 'white',
            completeBackground: '#F6F9FF',
            completeLabel: '#F6F9FF',
            itemBackground: '#124CCA',
            itemLabel: 'white',
            label: '#F6F9FF',
            selectAllLabel: '#F6F9FF',
          } }}
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      fireEvent.press(dropdownButton);
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      const multipleDropwdownButtonIcon = getByTestId('multipleDropwdownButtonIcon');
      const multipleDropdownListContainer = getByTestId('multipleDropdownListContainer');
      const multipleItemButton0 = getByTestId('multipleItemButton0');
      const multipleItemButton1 = getByTestId('multipleItemButton1');
      const dropdownCheckBoxButton0 = getByTestId('dropdownCheckBoxButton0');
      fireEvent.press(dropdownCheckBoxButton0);
      const dropdownCheckBoxButton1 = getByTestId('dropdownCheckBoxButton1');
      fireEvent.press(dropdownCheckBoxButton1);
      const multipleItemButtonLabel0 = getByTestId('multipleItemButtonLabel0');
      const multipleItemButtonLabel1 = getByTestId('multipleItemButtonLabel1');
      const dropdownCheckBoxIcon0 = getByTestId('dropdownCheckBoxIcon0');
      const dropdownCheckBoxIcon1 = getByTestId('dropdownCheckBoxIcon1');

      expect(dropdownButton).toHaveStyle({ backgroundColor: '#195CEF', borderColor: '#F6F9FF' });
      expect(multipleDropdownButtonLabel).toHaveStyle({ color: '#F6F9FF' });
      expect(multipleDropwdownButtonIcon).toHaveStyle({ color: 'white' });
      expect(multipleDropdownListContainer).toHaveStyle({ backgroundColor: '#124CCA' });
      expect(multipleItemButton0).toHaveStyle({ backgroundColor: '#195CEF' });
      expect(multipleItemButton1).toHaveStyle({ backgroundColor: '#195CEF' });
      expect(dropdownCheckBoxButton0).toHaveStyle({ backgroundColor: 'white', borderColor: '#F6F9FF' });
      expect(dropdownCheckBoxButton1).toHaveStyle({ backgroundColor: 'white', borderColor: '#F6F9FF' });
      expect(dropdownCheckBoxIcon0).toHaveStyle({ color: '#F6F9FF' });
      expect(dropdownCheckBoxIcon1).toHaveStyle({ color: '#F6F9FF' });
      expect(multipleItemButtonLabel0).toHaveStyle({ color: 'white' });
      expect(multipleItemButtonLabel1).toHaveStyle({ color: 'white' });
    });
    it('render with disabled theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          multiple
          selectall
          disabled
          theme={{ disabled: {
            background: 'grey',
            border: 'black',
            checkBackground: '#F6F9FF',
            checkBorder: '#F6F9FF',
            checkIcon: '#F6F9FF',
            collapseBackground: '#F6F9FF',
            collapseIcon: '#F6F9FF',
            completeBackground: '#F6F9FF',
            completeLabel: '#F6F9FF',
            itemBackground: '#F6F9FF',
            itemLabel: '#F6F9FF',
            label: 'blue',
            selectAllLabel: 'white',
          } }}
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
      const multipleDropwdownButtonIcon = getByTestId('multipleDropwdownButtonIcon');
      expect(dropdownButton).toHaveStyle({ backgroundColor: 'grey', borderColor: 'black' });
      expect(multipleDropdownButtonLabel).toHaveStyle({ color: 'blue' });
      expect(multipleDropwdownButtonIcon).toHaveStyle({ color: '#F6F9FF' });
    });
  });
  describe('render with left right props', () => {
    const left = jest.fn();
    const right = jest.fn();
    const { getByTestId } = renderWithContext(
      <Dropdown
        data={data}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
        left={left}
        right={right}
        multiple
      />,
    );
    const dropdownButton = getByTestId('multipleDropdownButton');

    expect(left).toHaveBeenCalledWith(false);
    expect(right).toHaveBeenCalledWith(false);
    fireEvent.press(dropdownButton);
    expect(left).toHaveBeenCalledWith(true);
    expect(right).toHaveBeenCalledWith(true);
  });
  describe('render with display props', () => {
    it('render with displayRowValue prop', () => {
      const { getByText, getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.activeYears}
          displayedButtonValue={item => item.name}
          multiple
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      fireEvent.press(dropdownButton);
      const pleseSelect = getByText('Please Select');
      const rowValue1 = getByText('1960-1970');
      const rowValue2 = getByText('1962-present');
      const rowValue3 = getByText('1968-1980');

      expect(pleseSelect).toBeTruthy();
      expect(rowValue1).toBeTruthy();
      expect(rowValue2).toBeTruthy();
      expect(rowValue3).toBeTruthy();
    });
    it('render with displayButtonValue prop', () => {
      const { getByText, getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.activeYears}
          displayedButtonValue={item => item.name}
          multiple
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      fireEvent.press(dropdownButton);
      const itemButton0 = getByTestId('multipleItemButton0');
      fireEvent.press(itemButton0);
      const selectItem = getByText('The Beatles');
      expect(selectItem).toBeTruthy();
    });
    it('render with displayLength', () => {
      const { getByText, getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.activeYears}
          displayedButtonValue={item => item.name}
          multiple
          displayLength={3}
        />,
      );
      const dropdownButton = getByTestId('multipleDropdownButton');
      fireEvent.press(dropdownButton);
      const itemButton0 = getByTestId('multipleItemButton0');
      const itemButton1 = getByTestId('multipleItemButton1');
      const itemButton2 = getByTestId('multipleItemButton2');
      const itemButton3 = getByTestId('multipleItemButton3');
      fireEvent.press(itemButton0);
      fireEvent.press(itemButton1);
      fireEvent.press(itemButton2);
      fireEvent.press(itemButton3);
      expect(getByText('4 Selected')).toBeTruthy();
    });
  });
  describe('render with buttonTitle prop', () => {
    const { getByText, getByTestId, queryByText } = renderWithContext(
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        multiple
        buttonTitle="Test"
      />,
    );
    const multipleDropdownButton = getByTestId('multipleDropdownButton');
    expect(getByText('Test')).toBeTruthy();
    fireEvent.press(multipleDropdownButton);
    const itemButton0 = getByTestId('multipleItemButton0');
    fireEvent.press(itemButton0);
    expect(queryByText('Test')).toBeNull();
  });
  describe('render with selectall prop', () => {
    const onSelect = jest.fn();
    const { getByText, getByTestId } = renderWithContext(
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        onSelect={onSelect}
        multiple
        selectall
      />,
    );
    const multipleDropdownButton = getByTestId('multipleDropdownButton');
    fireEvent.press(multipleDropdownButton);
    const multipleDropdownSelectAllButton = getByTestId('multipleDropdownSelectAllButton');
    fireEvent.press(multipleDropdownSelectAllButton);
    expect(getByText('6 Selected'));
    fireEvent.press(multipleDropdownSelectAllButton);
    expect(getByText('Please Select'));
    expect(onSelect).toHaveBeenCalledTimes(2);
  });
  describe('render with completeButtonLabel prop', () => {
    const onComplete = jest.fn();
    const { getByText, getByTestId, queryByText } = renderWithContext(
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        multiple
        completeButtonLabel="Test"
        onComplete={onComplete}
      />,
    );
    const multipleDropdownButton = getByTestId('multipleDropdownButton');
    fireEvent.press(multipleDropdownButton);
    const dropdownCompleteButton = getByTestId('dropdownCompleteButton');
    expect(getByText('Test')).toBeTruthy();
    fireEvent.press(dropdownCompleteButton);
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(queryByText('Test')).toBeNull();
  });
  describe('render with defaultValue prop', () => {
    const { getByText } = renderWithContext(
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        multiple
        defaultValue={[{
          id: 1,
          name: 'The Beatles',
          activeYears: '1960-1970',
          members: ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'],
        },
        {
          id: 2,
          name: 'The Rolling Stones',
          activeYears: '1962-present',
          members: ['Mick Jagger', 'Keith Richards', 'Charlie Watts', 'Ronnie Wood'],
        }]}
      />,
    );
    expect(getByText('The Beatles,The Rolling Stones'));
  });
  describe('render with disabled prop', () => {
    const { getByTestId, queryByTestId } = renderWithContext(
      <Dropdown
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        multiple
        disabled
      />,
    );
    const multipleDropdownButton = getByTestId('multipleDropdownButton');
    const multipleDropdownListContainer = queryByTestId('multipleDropdownListContainer');
    fireEvent.press(multipleDropdownButton);
    expect(multipleDropdownListContainer).toBeNull();
  });
  describe('render with custom styles', () => {
    const { getByTestId } = renderWithContext(
      <Dropdown
        testID="dropdown"
        data={data}
        displayedButtonValue={x => x.name}
        displayedRowValue={x => x.name}
        multiple
        buttonStyle={{ marginTop: 10, padding: 5, paddingVertical: 3 }}
        buttonTextStyle={{ fontSize: 14, lineHeight: 13, fontWeight: 'bold' }}
        containerStyle={{ marginTop: 4, padding: 3, paddingHorizontal: 5 }}
        listContainerStyle={{ paddingHorizontal: 3, paddingVertical: 4, margin: 2 }}
        rowStyle={{ margin: 4, paddingBottom: 3 }}
        rowTextStyle={{ fontSize: 10, fontWeight: '500', textAlign: 'center' }}
        completeButtonLabelStyle={{ fontSize: 14, fontWeight: '700', lineHeight: 13 }}
      />,
    );
    const multipleDropdownButton = getByTestId('multipleDropdownButton');
    const multipleDropdownButtonLabel = getByTestId('multipleDropdownButtonLabel');
    const dropdown = getByTestId('dropdown');
    expect(multipleDropdownButton).toHaveStyle({ marginTop: 10, padding: 5, paddingVertical: 3 });
    expect(multipleDropdownButtonLabel).toHaveStyle({ fontSize: 14, lineHeight: 13, fontWeight: 'bold' });
    expect(dropdown).toHaveStyle({ marginTop: 4, padding: 3, paddingHorizontal: 5 });
    fireEvent.press(multipleDropdownButton);
    const multipleDropdownListContainer = getByTestId('multipleDropdownListContainer');
    const multipleItemButton0 = getByTestId('multipleItemButton0');
    const multipleItemButtonLabel0 = getByTestId('multipleItemButtonLabel0');
    const buttonLabel = getByTestId('buttonLabel');
    expect(multipleDropdownListContainer).toHaveStyle({ paddingHorizontal: 3, paddingVertical: 4, margin: 2 });
    expect(multipleItemButton0).toHaveStyle({ margin: 4, paddingBottom: 3 });
    expect(multipleItemButtonLabel0).toHaveStyle({ fontSize: 10, fontWeight: '500', textAlign: 'center' });
    expect(buttonLabel).toHaveStyle({ fontSize: 14, fontWeight: '700', lineHeight: 13 });
  });
});
