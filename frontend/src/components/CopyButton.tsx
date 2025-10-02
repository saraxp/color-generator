import React from 'react'

const CopyButton = () => {
  return (
    <button className='bg-[FFF9F9] border-2 rounded-full border-[#936666] w-[37px] h-[35px] flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#936666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-clipboard-icon lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
    </button>
  )
}

export default CopyButton