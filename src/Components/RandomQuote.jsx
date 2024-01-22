import React, { useState } from 'react'
import twitter_icon from './assets/twitter-x.png'
import reload_icon from './assets/reload.png'

const RandomQuote = () => {
  
  let quotes = []

  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes")
    quotes = await response.json()
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select)
  }

  const [quote,setQuote] = useState(
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgan von Goethe",
    }
  )

  const twitter = ()=> {
    // window.open('https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}')
    window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(quote.text)+' - '+encodeURIComponent(quote.author.split(',')[0]))
  }

  loadQuotes()

  return(
    <div className='flex flex-col items-center m-auto mt-[150px] bg-[#625ac4] w-[800px] rounded-2xl pb-3'> {/* container */}
        <div className='py-[60px] px-[110px] text-white text-[32px] text-center'>{quote.text}</div>{/* quote */}
        <div>
          <div className='w-[680px] h-[1.5px] bg-white'></div>{/* line */}
          <div className='flex flex-row justify-between items-center my-[30px] mx-0'>{/* bottom */}
            <div className='text-white text-[20px] font-medium'>~ {quote.author.split(',')[0]}</div>{/* author */}
            <div className='flex gap-10'> {/* icons */}
              <img src={reload_icon} onClick={()=>{random()}} alt="" className='cursor-pointer h-9'/>
              <img src={twitter_icon} onClick={()=>{twitter()}} alt="" className='cursor-pointer h-9'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RandomQuote