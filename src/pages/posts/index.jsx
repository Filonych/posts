import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";
import { Pagination } from "../../components/ui/Pagination";
import { Filter } from "../../components/ui/Filter";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const { searchValue, currentPage, sort } = useSelector(
    (state) => state.filter.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts({searchValue, currentPage, sort}));
  }, [searchValue, currentPage, sort, dispatch]);

  if (!list && loading) {
    return <Loader />;
  }

  if (!list) {
    return <Container>Error 404</Container>;
  }

  return (
    <>
      <Typo>Публикации</Typo>
      <Container>
        <Filter />
        <Posts posts={list} />
        <Pagination />
      </Container>
    </>
  );
};
