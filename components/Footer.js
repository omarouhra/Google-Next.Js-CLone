function Footer() {
  return (
    <footer className=' flex flex-col bg-gray-100 px-2 py-3 sm:p-5'>
      <p className='text-sm text-gray-600 '>
        By{" "}
        <a href='https://www.instagram.com/omar.code/' className='linkFooter'>
          @omar.code
        </a> 
        <span className='animate-bounce ml-2 text-lg'>🇲🇦</span>{" "}
      </p>
      <hr className='border-gray-300 my-3 md:my-2' />
      <div className=' flex  flex-col  items-center   sm:flex-row sm:justify-between'>
        <div className='space-x-6'>
          <a className='linkFooter' href='#'>
            About
          </a>
          <a className='linkFooter' href='#'>
            Advertising
          </a>
          <a className='linkFooter' href='#'>
            Business
          </a>
          <a className='linkFooter' href='#'>
            How Search Works
          </a>
        </div>
        <div className='space-x-6'>
          <a className='linkFooter' href='#'>
            Privacy
          </a>
          <a className='linkFooter' href='#'>
            Terms
          </a>
          <a className='linkFooter' href='#'>
            Settings
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
