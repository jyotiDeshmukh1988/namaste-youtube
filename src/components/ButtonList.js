import React from 'react'
import Button from './Button'

const buttonitems = ["All","Live","Music","Bollywood Music","Stock Market","BK Shivani","Satsang","Animated Movies"];

const ButtonList = () => {
  return (
    <div className='flex gap-3'>
      {
        buttonitems.map((buttonname)=>{
          return <Button name={buttonname} key={buttonname}/>
        })
      }
    </div>
  )
}

export default ButtonList