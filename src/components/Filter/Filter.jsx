import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/selectors';

import { updateFilter } from 'redux/actions';
import { Button } from '../common.styled';
import { FilterWrapper } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(updateFilter(e.target.value));
        }}
      />
      <Button
        type="button"
        onClick={() => {
          dispatch(updateFilter(''));
        }}
      >
        Clear field
      </Button>
    </FilterWrapper>
  );
};

export default Filter;
