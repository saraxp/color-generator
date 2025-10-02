import React from 'react'

const ShareButton = () => {
  return (
    <button className='bg-[FFF9F9] border-2 rounded-full border-[#936666] w-[37px] h-[35px] flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#936666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-icon lucide-share"><path d="M12 2v13"/><path d="m16 6-4-4-4 4"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/></svg>
    </button>
  )
}

export default ShareButton