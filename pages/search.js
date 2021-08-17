import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import HeaderOptions from "../components/HeaderOptions";
import SearchResults from "../components/SearchResults";
import { API_KEY, CONTEXT_KEY } from "../Keys";
import Response from "../Response";
function Search({ results }) {
  const router = useRouter();
  console.log(results);

  return (
    <div>
      <Head>
        <title>{router.query.term} -Google Search</title>
        <link rel='shortcut icon' href='favicon.ico' />
      </Head>

      {/* Header */}
      <Header />
      <HeaderOptions />

      {/* Search Results */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then(r => r.json());

  return {
    props: {
      results: data,
    },
  };
}
