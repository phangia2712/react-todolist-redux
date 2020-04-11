import { useEffect, useState } from 'react'

export const MyUseEffectFetchData = (url) => {
    const [myState, setMyState] = useState({
        data: null,
        loading: true
    })
    useEffect(() => {
        setMyState(curr => ({...curr, data: null, loading: true}))
        fetch(url).then(x => x.text())
                  .then(y => {
                    setMyState(curr => ({...curr, data: y, loading: false}))
                  })
    }, [url])
    
    return myState
}