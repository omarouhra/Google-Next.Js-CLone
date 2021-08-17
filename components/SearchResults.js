import PaginationButton from "./PaginationButton";

function SearchResults({ results }) {
  console.log(results);

  return (
    <div className=' mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-md mb-5 mt-3'>
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map(result => (
        <div key={result.link} className='max-w-xl mb-8'>
          <div className='group'>
            <div>
              <a href='{result.link}' className='text-sm'>
                {result.formattedUrl}
              </a>
            </div>
            <div>
              <a
                href='{result.link}'
                className='text-xl truncate text-blue-800 font-medium group-hover:underline '>
                {result.title}
              </a>
            </div>
          </div>
          <p>{result.snippet}</p>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
}

export default SearchResults;
