import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './Filter.styled';

export default function Filter({ filter }) {
  const onChange = e => {
    const value = e.target.value
    filter(value);
  };
  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input type="text" name="filter" onChange={onChange} />
    </Wrapper>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}