import React from 'react'
import WhatKindom from './WhantKindom'

function Plans(){
    return(
        <div className='wrapper mt clearfix'>
           <iframe 
           className='discordWidg clearfix'
            src="https://discord.com/widget?id=856643368770732042&theme=dark"
            width="350" height="500"
            allowtransparency="true" 
            frameborder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">

           </iframe>
           <WhatKindom className='clearfix' />
        </div>
    )
}

export default Plans
