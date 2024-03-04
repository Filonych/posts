import { useDispatch, useSelector } from "react-redux";
import { setSearchValue, setSort } from "../../../redux/slices/filterSlice";
import { useEffect } from "react";

export const Filter = () => {
  const filter = useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();

  const filterPosts = (e) => {
    dispatch(setSearchValue(e));
  };

  const sortPosts = (e) => {
    dispatch(setSort(e));
  }

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <>
      <input
        type="text"
        value={filter.searchValue}
        onChange={(e) => filterPosts(e.target.value)}
      />
      <select onChange={(e) => sortPosts(e.target.value)} name="sort_by_list">
        <option value={"New"}>New</option>
        <option value={"title&_order=asc"}>By name (a-z)</option>
        <option value={"title&_order=desc"}>By name (z-a)</option>
      </select>
    </>
  );
};
