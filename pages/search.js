import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import Response from "../Request"

function Search({ results }) {
    const router = useRouter();
  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* header */}
        <Header />
        {/* search results */}
        <SearchResults results={results} />

    </div>
  )
}

export default Search;

export const getServerSideProps = async(context) => {
    const useDummyData = true;
    const startIndex = context.query.start || "0"
    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(response => response.json());

    return {
        props:{
            results: data,
        }
    }
}