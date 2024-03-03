import React, { useEffect } from "react";
import { Posts } from "../../components/Posts";
import { Container } from "../../components/ui/Container";
import { Typo } from "../../components/ui/Typo";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { Loader } from "../../components/ui/Loader";
import { Pagination } from "../../components/ui/Pagination";

export const PostsPage = () => {
  const { list, loading } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getPosts());
    }    
  }, []);

  if (!list && loading) {
    return <Loader />
  }

  if (!list) {
    return <Container>Error 404</Container>
  }
  console.log(list)

  return (
    <>
      <Typo>Публикации</Typo>
      <Container>
        <Posts posts={list} />
        <Pagination />
      </Container>
    </>
  );
};
