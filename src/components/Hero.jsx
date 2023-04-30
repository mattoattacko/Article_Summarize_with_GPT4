// import { logo } from '../assets'
// import { tldr3 } from '../assets'

// const Hero = () => {
//   return (
//     <header className="flex flex-col w-full justify-center items-center">
//       <nav className="flex w-full justify-between items-center mb-10 pt-3">
//         <img src={logo} alt="sumz-logo" className="w-28" />
//         <img src={tldr3} alt="sumz-logo" className="w-40 items-start" />

//         <button
//           className='black_btn'
//           type='button'
//           onClick={() => window.open('https://github.com/mattoattacko')}
//         >
//           GitHub
//         </button>
//       </nav>

//       <h1 className="head_text">
//         Summarize Articles using <br className="max-md:hidden" />
//         <span className="orange_gradient">
//           OpenAI GPT-4
//         </span>
//       </h1>

//       <h2 className="desc">
//         GPT TL;DR utilizes the power of AI language models to summarize long-form articles into shorter, more digestible pieces of information. We use Chat GPT, an advanced language model trained by OpenAI, to analyze and comprehend the content of articles, and generate a condensed version that captures the essence of the original text. Users can submit any article they wish to summarize, and Chat GPT will provide a summary within seconds. Our platform is perfect for busy individuals who want to stay informed but don't have the time to read lengthy articles. With GPT TL;DR, you can quickly and easily get the key points of an article and move on.
//       </h2>
//     </header>
//   )
// }

// export default Hero

import { logo } from '../assets'
import { tldr3 } from '../assets'

const Hero = () => {
  return (
    <header className="flex flex-col w-full justify-center items-center">
      <nav className="flex w-full justify-start items-center mb-10 pt-3">
        <div className="flex">
          <img src={logo} alt="sumz-logo" className="w-28" />
          <img src={tldr3} alt="sumz-logo" className="w-40 ml-[-0.8in] mt-2" />
        </div>

        <button
          className='black_btn ml-auto'
          type='button'
          onClick={() => window.open('https://github.com/mattoattacko')}
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles using <br className="max-md:hidden" />
        <span className="orange_gradient">
          OpenAI GPT-4
        </span>
      </h1>

      <h2 className="desc">
        <span className="orange_gradient"> GPT </span>TL<span className="orange_gradient">;</span>DR utilizes the power of AI language models to summarize long-form articles into shorter, more digestible pieces of information. We use Chat GPT, an advanced language model trained by OpenAI, to analyze and comprehend the content of articles, and generate a condensed version that captures the essence of the original text. Users can submit any article they wish to summarize, and Chat GPT will provide a summary within seconds. Our platform is perfect for busy individuals who want to stay informed but don't have the time to read lengthy articles. With <span className="orange_gradient"> GPT </span>TL<span className="orange_gradient">;</span>DR, you can quickly and easily get the key points of an article and move on.
      </h2>
    </header>
  )
}

export default Hero
