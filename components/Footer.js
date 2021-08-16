function Footer() {
  return (
    <footer className='  h-36 w-full bg-gray-200 py-3 md:h-24 md:py-2'>
      <p className='text-sm text-gray-600 ml-5'>
        By{" "}
        <a href='https://www.instagram.com/omar.code/' className='linkFooter'>
          @omar.code
        </a>{" "}
        with <span className='animate-ping mx-1'>❤️</span> in{" "}
        <span className='animate-bounce'>🇲🇦</span>{" "}
      </p>
      <hr className='border-gray-300 my-3 md:my-2' />
      <div className='flex flex-col items-center space-y-5 md:flex-row md:justify-between  md:items-end md:px-5'>
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
