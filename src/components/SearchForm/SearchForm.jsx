import { BiSearchAlt } from 'react-icons/bi';

import {
  FormContainer,
  FormStyle,
  InputStyle,
  SearchFormButton,
} from './SearchForm.style';

const SearchForm = ({ onSubmitForm }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const searchValue = event.target.elements.searchName.value;
    onSubmitForm(searchValue);

    event.target.elements.searchName.value = "";
  };

  return (
    <FormContainer>
      <FormStyle onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BiSearchAlt style={{ width: 25, height: 25 }} />
        </SearchFormButton>
        <InputStyle
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="searchName"
        />
      </FormStyle>
    </FormContainer>
  );
};
export default SearchForm;
