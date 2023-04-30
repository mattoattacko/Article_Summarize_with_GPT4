import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const [allArticles, setAllArticles] = useState([]); //we will store all the articles here

  // This allows us to know if we have an error or if we are fetching data. 
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [copied, setCopied] = useState(''); //we will store the copied url here

  // Saves articles to local storage
  useEffect(() => {
    // localStorage.setItem('allArticles', JSON.stringify(allArticles)); copoilot suggestion

    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles') //gets the data back to us
    )

    if(articlesFromLocalStorage) { //if we have data in local storage, we will set it to the state
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data } = await getSummary({ articleUrl: article.url }); //we call the API here

    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAllArticles = [newArticle, ...allArticles]; //we add the new article to the array of all articles

      setArticle(newArticle);
      setAllArticles(updateAllArticles);

      // console.log(newArticle);

      localStorage.setItem('articles', JSON.stringify(updateAllArticles)); //we save the data to local storage. We need to "stringify" it because local storage only accepts strings
    }
  };

  // Copy URL to clipboard //
  const copyToClipboard = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl); //this is what makes the copy to clipboard work
    setTimeout(() => setCopied(false), 3000); //we set the copied state to empty after 3 seconds
  }

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
        {/* item = individual article. index = index of article */}
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          {allArticles.map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)} //when we click on the article, we will set the article to the state. Allows us to go back to previous articles.
              className='link_card'
            >
              {/* Copy URL incase we want to go back to it */}
              <div 
                className='copy_btn'
                onClick={() => copyToClipboard(item.url)}              
              >
                <img 
                  src={copied === item.url ? tick : copy} //if the copied state is equal to the item url, we will show the tick/check-mark icon, otherwise we will show the copy icon
                  alt='copy icon'
                  className='w-[40%] h-[40%] object-contain'
                />
              </div>

              {/* URL */}
              <p className='flex-1 font-satoshi truncate text-blue-700 font-medium text-sm'>
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className='flex my-10 max-w-full justify-center items-center'>
        {isFetching ? (
          <img 
            src={loader}
            alt='loader'
            className='w-20 h-20 object-contain'
          />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            ...well thats not right
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (         
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-xl text-gray-600'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>

              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}

export default Demo