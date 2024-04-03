import { useDispatch, useSelector } from "react-redux";
import FormPost from "../components/posts/FormPost";
import UpLoading from "../components/utils/UpLoading";
import { DispatchApp, RootState } from "../redux/stroe";
import Layout from "../template/Layout/Layout";
import { renderPosts } from "../redux/postActh";
import { useEffect } from "react";
import OnePost from "../components/posts/OnePost";
import styled from "styled-components";

const ContentPosts = styled.div`
display:flex;
flex-direction:column;
gap:15px;
color: ${(props) => props.theme.colors.text};
background-color: ${(props) => props.theme.colors.background};
`

const Home = () => {
  const dispatch: DispatchApp = useDispatch();
  const { post } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(renderPosts());
  }, [dispatch]);

  return (
    
    <Layout>
      <FormPost />
      <UpLoading progress={0} />
      <ContentPosts>
        {post?.map((post) => {
          return <OnePost key={post.id} postData={post} />;
        })}{" "}
      </ContentPosts>
    </Layout>
  );
};

export default Home;
