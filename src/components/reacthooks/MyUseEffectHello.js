import React, { useEffect } from 'react'

function MyUseEffectHello () {

    useEffect(() => {
        console.log('render MyUseEffectHello')
        return () => {
            console.log('unmount MyUseEffectHello')
        }
    })

    return (<div>Helloxxx</div>)
}

export default MyUseEffectHello