import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = e => {
    const filterText = e.target.value.trim();
    dispatch(setFilter(filterText));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleFilter} />
    </Label>
  );
};
