import React from 'react'

export default function GridItem({src}) {
  return (
    <div className="bg-slate-500 h-80">
        <img src={src} alt="" className='object-cover object-top w-full h-full' />
    </div>
  )
}
