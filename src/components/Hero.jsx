import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="flex flex-col w-full justify-center items-center">
      <nav className="flex w-full justify-between items-center mb-10 pt-3">
        <img src={logo} alt="sumz-logo" className="w-28" />

        <button
          className='black_btn'
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
        Our website is a content curation platform that utilizes the power of AI language models to summarize long-form articles into shorter, more digestible pieces of information. We use Chat GPT, an advanced language model trained by OpenAI, to analyze and comprehend the content of articles, and generate a condensed version that captures the essence of the original text. Users can submit any article they wish to summarize, and Chat GPT will provide a summary within seconds. Our platform is perfect for busy individuals who want to stay informed but don't have the time to read lengthy articles. With Chat GPT, you can quickly and easily get the key points of an article and move on to your next task.
      </h2>
    </header>
  )
}

export default Hero