import { fireEvent, render, act } from '@testing-library/react-native';
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

describe('Dropdown', () => {
  it('default render', () => {
    const { getByText } = renderWithContext(
      <Dropdown
        data={data}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
      />,
    );
    expect(getByText('Please Select')).toBeTruthy();
  });
  describe('render with different size', () => {
    it('render with small size', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          size="small"
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      fireEvent.press(dropdownButton);
      const dropdownListContainer = getByTestId('dropdownListContainer');
      const itemButton0 = getByTestId('itemButton0');
      const itemButton1 = getByTestId('itemButton1');
      const itemButtonLabel0 = getByTestId('itemButtonLabel0');
      const itemButtonLabel1 = getByTestId('itemButtonLabel1');

      expect(dropdownButton).toHaveStyle({ height: 36 });
      expect(dropdownButtonLabel).toHaveStyle({ paddingHorizontal: 10,
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Poppins-Medium' });
      expect(dropdownListContainer).toHaveStyle({ maxHeight: 35 * 4.5 });
      expect(itemButton0).toHaveStyle({ height: 35 });
      expect(itemButton1).toHaveStyle({ height: 35 });
      expect(itemButtonLabel0).toHaveStyle({ fontSize: 10, lineHeight: 16, fontFamily: 'Poppins-Medium' });
      expect(itemButtonLabel1).toHaveStyle({ fontSize: 10, lineHeight: 16, fontFamily: 'Poppins-Medium' });
    });
    it('render with medium size', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          size="medium"
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      fireEvent.press(dropdownButton);
      const dropdownListContainer = getByTestId('dropdownListContainer');
      const itemButton0 = getByTestId('itemButton0');
      const itemButton1 = getByTestId('itemButton1');
      const itemButtonLabel0 = getByTestId('itemButtonLabel0');
      const itemButtonLabel1 = getByTestId('itemButtonLabel1');

      expect(dropdownButton).toHaveStyle({ height: 42 });
      expect(dropdownButtonLabel).toHaveStyle({ paddingHorizontal: 12,
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins-Medium' });
      expect(dropdownListContainer).toHaveStyle({ maxHeight: 38 * 4.5 });
      expect(itemButton0).toHaveStyle({ height: 38 });
      expect(itemButton1).toHaveStyle({ height: 38 });
      expect(itemButtonLabel0).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
      expect(itemButtonLabel1).toHaveStyle({ fontSize: 12, lineHeight: 18, fontFamily: 'Poppins-Medium' });
    });
    it('render with large size', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          size="large"
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      fireEvent.press(dropdownButton);
      const dropdownListContainer = getByTestId('dropdownListContainer');
      const itemButton0 = getByTestId('itemButton0');
      const itemButton1 = getByTestId('itemButton1');
      const itemButtonLabel0 = getByTestId('itemButtonLabel0');
      const itemButtonLabel1 = getByTestId('itemButtonLabel1');

      expect(dropdownButton).toHaveStyle({ height: 51 });
      expect(dropdownButtonLabel).toHaveStyle({ paddingHorizontal: 15,
        fontSize: 14,
        lineHeight: 21,
        fontFamily: 'Poppins-Medium' });
      expect(dropdownListContainer).toHaveStyle({ maxHeight: 41 * 4.5 });
      expect(itemButton0).toHaveStyle({ height: 41 });
      expect(itemButton1).toHaveStyle({ height: 41 });
      expect(itemButtonLabel0).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
      expect(itemButtonLabel1).toHaveStyle({ fontSize: 14, lineHeight: 21, fontFamily: 'Poppins-Medium' });
    });
  });
  describe('render with custom theme', () => {
    it('render with custom default theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
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
      const dropdownButton = getByTestId('dropdownButton');
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      const dropwdownButtonIcon = getByTestId('dropwdownButtonIcon');

      expect(dropdownButton).toHaveStyle({ borderColor: '#F6F9FF', backgroundColor: '#124CCA' });
      expect(dropdownButtonLabel).toHaveStyle({ color: 'white' });
      expect(dropwdownButtonIcon).toHaveStyle({ color: 'white' });
    });
    it('render with custom active theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
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
      const dropdownButton = getByTestId('dropdownButton');
      fireEvent.press(dropdownButton);
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      const dropwdownButtonIcon = getByTestId('dropwdownButtonIcon');
      const dropdownListContainer = getByTestId('dropdownListContainer');
      const itemButton0 = getByTestId('itemButton0');
      const itemButton1 = getByTestId('itemButton1');
      const itemButtonLabel0 = getByTestId('itemButtonLabel0');
      const itemButtonLabel1 = getByTestId('itemButtonLabel1');

      expect(dropdownButton).toHaveStyle({ borderColor: '#195CEF', backgroundColor: '#F6F9FF' });
      expect(dropdownButtonLabel).toHaveStyle({ color: '#195CEF' });
      expect(dropwdownButtonIcon).toHaveStyle({ color: '#195CEF' });
      expect(dropdownListContainer).toHaveStyle({ backgroundColor: '#195CEF' });
      expect(itemButton0).toHaveStyle({ backgroundColor: '#195CEF' });
      expect(itemButton1).toHaveStyle({ backgroundColor: '#195CEF' });
      expect(itemButtonLabel0).toHaveStyle({ color: 'white' });
      expect(itemButtonLabel1).toHaveStyle({ color: 'white' });
    });
    it('render with custom selected theme', () => {
      const { getByTestId, queryByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
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
      const dropdownButton = getByTestId('dropdownButton');
      fireEvent.press(dropdownButton);
      const itemButton0 = getByTestId('itemButton0');
      fireEvent.press(itemButton0);
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      const dropwdownButtonIcon = getByTestId('dropwdownButtonIcon');

      expect(dropdownButton).toHaveStyle({ borderColor: '#F6F9FF', backgroundColor: '#195CEF' });
      expect(dropdownButtonLabel).toHaveStyle({ color: '#F6F9FF' });
      expect(dropwdownButtonIcon).toHaveStyle({ color: 'white' });
    });
    it('render with custom disabled theme', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          disabled
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          theme={{ disabled: {
            background: 'grey',
            border: 'black',
            checkBackground: '#F6F9FF',
            checkBorder: '#F6F9FF',
            checkIcon: '#F6F9FF',
            collapseBackground: '#F6F9FF',
            collapseIcon: 'white',
            completeBackground: '#F6F9FF',
            completeLabel: '#F6F9FF',
            itemBackground: '#F6F9FF',
            itemLabel: '#F6F9FF',
            label: 'blue',
            selectAllLabel: 'white',
          } }}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      const dropwdownButtonIcon = getByTestId('dropwdownButtonIcon');

      expect(dropdownButton).toHaveStyle({ borderColor: 'black', backgroundColor: 'grey' });
      expect(dropdownButtonLabel).toHaveStyle({ color: 'blue' });
      expect(dropwdownButtonIcon).toHaveStyle({ color: 'white' });
    });
  });
  describe('render with display props', () => {
    it('render with displayRowValue prop', () => {
      const { getByText, getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.activeYears}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
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
    it('render with displayRowValue prop', () => {
      const { getByText, getByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.activeYears}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      fireEvent.press(dropdownButton);
      const itemButton0 = getByTestId('itemButton0');
      fireEvent.press(itemButton0);
      const selectItem = getByText('The Beatles');
      expect(selectItem).toBeTruthy();
    });
  });
  describe('dropdown open and close', () => {
    it('close dropdown', () => {
      const { getByTestId, queryByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownListContainer = queryByTestId('dropdownListContainer');
      expect(dropdownListContainer).toBeNull();
    });
    it('open dropdown', () => {
      const { getByTestId, queryByTestId } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      fireEvent.press(dropdownButton);
      const dropdownListContainer = queryByTestId('dropdownListContainer');
      expect(dropdownListContainer).toBeVisible();
    });
  });
  describe('render with onSelect prop', () => {
    const onSelect = jest.fn();
    const { getByTestId } = renderWithContext(
      <Dropdown
        data={data}
        displayedRowValue={item => item.name}
        displayedButtonValue={item => item.name}
        onSelect={onSelect}
      />,
    );
    const dropdownButton = getByTestId('dropdownButton');
    fireEvent.press(dropdownButton);
    const itemButton3 = getByTestId('itemButton3');

    fireEvent.press(itemButton3);
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith({
      id: 4,
      name: 'Pink Floyd',
      activeYears: '1965-1995, 2005, 2012-2014',
      members: ['Syd Barrett', 'Nick Mason', 'Roger Waters', 'Richard Wright', 'David Gilmour'],
    });
  });
  describe('render with defaultValue and buttonTitle props', () => {
    it('render with buttonTitle prop', () => {
      const { getByText } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          buttonTitle="TEST"
        />,
      );
      expect(getByText('TEST')).toBeTruthy();
    });
    it('render with defaultValue prop', () => {
      const { getByText } = renderWithContext(
        <Dropdown
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.members[3]}
          defaultValue={{ id: 6,
            name: 'Queen',
            activeYears: '1970-present',
            members: ['Freddie Mercury', 'Brian May', 'Roger Taylor', 'John Deacon'] }}
        />,
      );
      expect(getByText('John Deacon')).toBeTruthy();
    });
  });
  describe('render with custom styles', () => {
    it('close dropdown custom styles', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          testID="dropdown"
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          buttonStyle={{ paddingHorizontal: 15, marginTop: 10, padding: 5 }}
          containerStyle={{ marginHorizontal: 10, paddingVertical: 15 }}
          buttonTextStyle={{ fontSize: 15, lineHeight: 13, fontWeight: '600' }}
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      const dropdown = getByTestId('dropdown');
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      expect(dropdownButton).toHaveStyle({ paddingHorizontal: 15, marginTop: 10, padding: 5 });
      expect(dropdown).toHaveStyle({ marginHorizontal: 10, paddingVertical: 15 });
      expect(dropdownButtonLabel).toHaveStyle({ fontSize: 15, lineHeight: 13, fontWeight: '600' });
    });
    it('open dropdown custom styles', () => {
      const { getByTestId } = renderWithContext(
        <Dropdown
          testID="dropdown"
          data={data}
          displayedRowValue={item => item.name}
          displayedButtonValue={item => item.name}
          buttonStyle={{ paddingHorizontal: 15, marginTop: 10, padding: 5 }}
          buttonTextStyle={{ fontSize: 15, lineHeight: 13, fontWeight: '600' }}
          rowStyle={{ padding: 5, margin: 5 }}// itemButton${index}
          rowTextStyle={{ fontSize: 9, lineHeight: 10 }} // itemButtonLabel${index}
          containerStyle={{ marginHorizontal: 10, paddingVertical: 15 }}
          listContainerStyle={{ paddingHorizontal: 7, paddingVertical: 10, margin: 6 }}// dropdownListContainer
        />,
      );
      const dropdownButton = getByTestId('dropdownButton');
      fireEvent.press(dropdownButton);
      const dropdownButtonLabel = getByTestId('dropdownButtonLabel');
      const dropdown = getByTestId('dropdown');
      const itemButton0 = getByTestId('itemButton0');
      const itemButtonLabel0 = getByTestId('itemButtonLabel0');
      const dropdownListContainer = getByTestId('dropdownListContainer');

      expect(dropdown).toHaveStyle({ marginHorizontal: 10, paddingVertical: 15 });
      expect(dropdownButton).toHaveStyle({ paddingHorizontal: 15, marginTop: 10, padding: 5 });
      expect(dropdownButtonLabel).toHaveStyle({ fontSize: 15, lineHeight: 13, fontWeight: '600' });
      expect(itemButton0).toHaveStyle({ padding: 5, margin: 5 });
      expect(itemButtonLabel0).toHaveStyle({ fontSize: 9, lineHeight: 10 });
      expect(dropdownListContainer).toHaveStyle({ paddingHorizontal: 7, paddingVertical: 10, margin: 6 });
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
      />,
    );
    const dropdownButton = getByTestId('dropdownButton');

    expect(left).toHaveBeenCalledWith(false);
    expect(right).toHaveBeenCalledWith(false);
    fireEvent.press(dropdownButton);
    expect(left).toHaveBeenCalledWith(true);
    expect(right).toHaveBeenCalledWith(true);
  });
});

// AUTOPOSİTİON TEST EDİLMELİ
