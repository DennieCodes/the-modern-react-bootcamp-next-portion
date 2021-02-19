import axios from "axios";

const Post = ({ id, comments }) => {
  const postComments = comments.map((comment) => (
    <Comment {...comment} key={comment.id} />
  ));

  return (
    <div>
      <h1>{`This is post ${id}`}</h1>
      {postComments}
    </div>
  );
};

const Comment = ({ email, body }) => (
  <div>
    <h5>{email}</h5>
    <p>{body}</p>
  </div>
);

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const { data } = res;

  return { props: { id: id, comments: data } };
}

export default Post;

// http://jsonplaceholder.typicode.com/comments?postId=id

// EXAMPLE: useRouter
// ===========================
//
// import { useRouter } from "next/router";

// function Post() {
//   const router = useRouter();
//   return <p>{`This is post ${router.query.id}`}</p>;
// }

// export default Post;

// EXAMPLE: withRouter
// ===========================
//
// import { withRouter } from "next/router";

// function Post({ router }) {
//   return <p>{`This is post ${router.query.id}`}</p>;
// }

// export default withRouter(Post);

// EXAMPLE: getServerSideProps
// ===========================
//
// const Post = ({ query }) => {
//   return <h1>{`This is post ${query.id}`}</h1>;
// };
//
// export async function getServerSideProps({ query }) {
//   return { props: { query: query } };
// }

// export default Post;
