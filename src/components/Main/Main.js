import React from 'react'
import Discription from './Discription/Discription'
import Calls from './Calls/Calls'
import AdapriveMain from './adaptiveMain/AdapriveMain'

function Main(){
    return(
    <div className=' mainPage mainBG'>
      <Discription />
      <Calls />
      <AdapriveMain />
    </div>
    )
}

export default Main
