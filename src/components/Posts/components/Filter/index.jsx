import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setSearchValue, setSort } from "../../../../redux/slices/filterSlice";
import { useEffect, useState } from "react";
import { Input } from "../../../ui/Input";
import { Link } from "../../../ui/Link";
import * as SC from "./styles";

export const Filter = () => {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(filter.searchValue);
  const [debouncedValue, setDebouncedValue] = useState("");

  const sortList = [
    { name: "A-Z", sortProperty: "title&_order=asc" },
    { name: "Z-A", sortProperty: "title&_order=desc" },
  ];

  const sortPosts = (sortProperty) => {
    dispatch(setCurrentPage(1))
    dispatch(setSort(sortProperty))
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {    
    console.log('chack2')
    dispatch(setCurrentPage(1))
    dispatch(setSearchValue(inputValue));
  }, [debouncedValue]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <SC.Wrap>
      <div>
        <h3>Фильтрация</h3>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <h3>Сортировка</h3>
        <SC.LinkWrap>
          {sortList.map((obj) => (
            <Link
              onClick={() => sortPosts(obj.sortProperty)}
              className={
                obj.sortProperty === filter.sort ? "active" : undefined
              }
            >
              {obj.name}
            </Link>
          ))}
        </SC.LinkWrap>
      </div>
    </SC.Wrap>
  );
};
