import { BiSearchAlt  } from "react-icons/bi";
import React, {useState} from 'react';

import {  FormContainer, FormStyle, InputStyle, SearchFormButton } from "./SearchForm.style";

import { Notify } from "notiflix";
// import { paramsNotify } from "components/api/api";

const SearchForm = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('');
    // const location = useLocation();
    // const history = useHistory();
    
    const handleChange = event => {
        setSearchQuery(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchQuery.trim()  === '') {
            Notify.failure('Enter your request, please!',
            //paramsNotify
            );  
            return;
        }
        // history.push({ ...location, search: `query=${searchQuery}` });
  
        onSubmit({ query: searchQuery });
    }
      return (
        <FormContainer>
          <FormStyle onSubmit={handleSubmit} >
            <SearchFormButton type="submit">
              <BiSearchAlt style={{ width: 25, height: 25 }} />
            </SearchFormButton>
            <InputStyle
               type="text"
               autoComplete="off"
               autoFocus
               placeholder="Search movies"
               value={searchQuery}
               onChange={handleChange}
            />
             
          </FormStyle>
        </FormContainer>
      );
    }
  export default SearchForm;