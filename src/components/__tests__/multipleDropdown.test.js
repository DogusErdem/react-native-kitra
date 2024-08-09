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
    });
  });
});
