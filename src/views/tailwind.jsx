export default function () {
  const change = () => {
    const root = document.documentElement;
    root.classList.toggle('dark');
    // root.classList.contains('dark')
    //   ? root.classList.remove('dark')
    //   : root.classList.add('dark');
  };
  return (
    <>
      <h1 className='bg-sky-400 hover:bg-sky-800 cursor-pointer'>
        tailwind css
      </h1>
      <label className='block'>
        <span className="after:content-['*89'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 before:content-['before']">
          Email
        </span>
        <input
          type='email'
          name='email'
          className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          placeholder='you@example.com'
        />
      </label>

      <form>
        <label className='block'>
          <span className='block text-sm font-medium text-slate-700'>
            Social Security Number
          </span>
          <input className='border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500' />
          <p className='mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm'>
            We need this to steal your identity.
          </p>
        </label>
      </form>

      <h1 className='text-gray-500 dark:text-amber-50 dark:bg-black dark:text-orange-600'>
        dark mode
      </h1>
      <div
        className='px-3 py-1 border inline-block cursor-pointer'
        onClick={change}>
        暗黑模式
      </div>

      <hr />

      <div className='[color:red] hover:text- m-4 columns-3'>
        {' '}
        This is a bunch of text split into three columns using the CSS `columns`
        property. The text is equally distributed over the columns.
      </div>
    </>
  );
}
