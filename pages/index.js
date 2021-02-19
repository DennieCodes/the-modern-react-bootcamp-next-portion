import axios from "axios";
import Link from "next/link";

const Index = ({ data }) => {
  return (
    <div>
      <h1>Our Index Page</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// getStaticProps
// ==================
// Note: getStaticProps seems to be called server side on mounting, and each time the page is refreshed or returned to by Link

export async function getStaticProps() {
  const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
  const { data } = res;

  return { props: { data } };
}

export default Index;

/* Alternatives to using axios
https://www.npmjs.com/package/isomorphic-unfetch
https://www.npmjs.com/package/isomorphic-fetch


GetServerSideProps
==================
Note: getserverSideProps seems to be called server side on mounting, and each time the page is refreshed or returned to by Link

export async function getServerSideProps() {

  const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
  const { data } = res;

  return { props: { data } };
}

getInitialProps
===============
Note: getInitialProps is not recommeded past Next 9.3, it was included here for reference

Index.getInitialProps = async (ctx) => {
  // const res = await axios.get("http://jsonplaceholder.typicode.com/posts");
  // const { data } = res;

  return { props: { data } };
};

*/
