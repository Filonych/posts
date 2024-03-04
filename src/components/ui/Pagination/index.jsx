import { useDispatch } from "react-redux";
import * as SC from "./styles";
import { setCurrentPage } from "../../../redux/slices/filterSlice";

export const Pagination = () => {    
  const pagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const dispatch = useDispatch();

  const changeCurrentPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <SC.Wrap>
      {pagination.map((page) => (
        <SC.Page
          key={page}
          onClick={() => changeCurrentPage(page)}
        >
          {page}
        </SC.Page>
      ))}
    </SC.Wrap>
  );
};
