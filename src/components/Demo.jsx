import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';

const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async (e) => {
    alert('submitting form');
  };

  return (
    <section className='w-full mt-16 max-w-xl'>
      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form 
          className='flex relative justify-center items-center' 
          onSubmit={handleSubmit}
        >
          <img 
            src={linkIcon}
            alt='link icon'
            className='absolute left-0 my-2 ml-3 w-5'
          />

          {/* When we need to style an element based on the state of a cyclic element, we can mark that sibling element with a 'peer' class and then use modifiers */}
          <input 
            type='url'
            placeholder='Enter URL'
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })} //spread operator to copy the existing state and then update the url
            required
            className='url_input peer'
          />

          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700' //if we focus the element, we will get the text/border as gray
          >
            ↵
          </button>
        </form>

        {/* Browse URL History */}

      </div>

      {/* Results */}
    </section>
  )
}

export default Demo