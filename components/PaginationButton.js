import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function PaginationButton() {
  const router = useRouter();
  const StartIndex = Number(router.query.start) || 0;

  return (
    <div className='flex max-w-lg  text-blue-700 mb-10 justify-between items-center'>
      {StartIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${StartIndex - 10}`}>
          <div className='paginationLink'>
            <ChevronLeftIcon className='h-5' />
            <p>Previous</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${StartIndex + 10}`}>
        <div className='paginationLink'>
          <ChevronRightIcon className='h-5' />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButton;
