import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select,{ type SelectChangeEvent } from '@mui/material/Select';
import usefilterContext from '../hooks/usefilterContext';

export default function SelectSmall() {
  const {filter, setFilter} = usefilterContext()

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl  sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Filter</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="filter"
        onChange={handleChange}
      >
        <MenuItem value={"asc"}>Cheap</MenuItem>
        <MenuItem value={"desc"}>Costly</MenuItem>
      </Select>
    </FormControl>
  );
}