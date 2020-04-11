import React, { useRef, useEffect } from 'react'

function MyUseRef (prop) {
    const inputRefName = useRef()
    const inputRefEmail = useRef(true)
    const helloRef = useRef(() => console.log('function hello in ref'))
    function focusInputName () {
        inputRefName.current.focus()
        console.log(inputRefName.current)
    }
    console.log(inputRefEmail)
    useEffect(() => {
        inputRefEmail.current = false
        console.log(inputRefEmail)
    })
    return (<div className="MyUseref">
        <input ref={inputRefName} type="text" name="name" placeholder="Ten"/>
        <input ref={inputRefEmail} type="email" name="email" placeholder="Email"/>
        <button onClick={() => {
            focusInputName()
            helloRef.current()
        }}>Focus me</button>
    </div>)
}

export default MyUseRef