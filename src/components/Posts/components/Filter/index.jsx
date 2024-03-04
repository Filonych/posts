import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setSort } from "../../../../redux/slices/filterSlice";
import { useEffect, useState } from "react";
import { Input } from "../../../ui/Input";
import { Link } from "../../../ui/Link";
import { Container } from "../../../ui/Container";

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
    dispatch(setSort(sortProperty));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    dispatch(setSearchValue(inputValue));
  }, [debouncedValue]);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {sortList.map((obj) => (
          <Link onClick={() => sortPosts(obj.sortProperty)}>{obj.name}</Link>
        ))}
      </ul>
    </Container>
  );
};
