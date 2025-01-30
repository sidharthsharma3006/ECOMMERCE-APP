import React from 'react'

const NewsletterBox = () => { 
  
  const onSubmitHandler = (event) => {
    event.PreventDefault(); 
    
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem Ipsum is simply dummy text of printing and typesetting industry.
      </p>

      <form className='w-full sm:w:1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          type="email"
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your Email"
          required
        /> 
        <button type='Submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterBox