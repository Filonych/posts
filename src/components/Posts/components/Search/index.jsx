import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentPage,
  setSearchValue,
} from "../../../../redux/slices/filterSlice";
import { useState } from "react";
import { Input } from "../../../ui/Input";
import debounce from 'lodash.debounce';

export const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(
    (state) => state.filter.filter)

  const [inputValue, setInputValue] = useState(searchValue);

  const updateSearchValue =     
    debounce((str) => {
      dispatch(setCurrentPage(1));
      dispatch(setSearchValue(str));
    }, 150)

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
      <div>
        <h3>Фильтрация</h3>
        <Input
          type="text"
          value={inputValue}
          onChange={onChangeInput}
        />
      </div>
  );
};
