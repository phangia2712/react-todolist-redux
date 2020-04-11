import React, { useState } from 'react'
import { MyUseForm } from './MyUseForm'

function MyUseState(props) {
    const [myState, setMyState] = useState({
        count1: 10,
        count2: 78,
        email: 'phangia2712@gmail.com',
        name: 'Phan Gia Tuan Anh'
    })
    const [address, setAddress] = useState('Tui o nha')

    function IncreaseNum () {
        setMyState( currentMyState => ({...currentMyState, count1: currentMyState.count1 + 1, count2: currentMyState.count2 + 3}))
        setAddress( current => { return current + '. That su la vay'} )
        // cai nay ko co func nen ko chuan, co the gay loi
        // setMyState({...myState, count1: myState.count1 + 1, count2: myState.count2 + 3})
    }

    function handleChange (event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setMyState( currentMyState => ({...currentMyState, [name]: value}))
    }

    const [inform, setInform] = MyUseForm({
        age: 19,
        gentle: 2
    })

    return (
        <div className="MyUseState">
            https://www.youtube.com/watch?v=RkBg0gDTLU8&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=6 <br/><br/>
            Count1: {myState.count1} || Count2: {myState.count2} || Address: {address}
            <br/>
            <button onClick={IncreaseNum}>+</button>
            <input type="text" name="email" placeholder="Email" value={myState.email} onChange={handleChange} />
            <input type="text" name="name" placeholder="Name" value={myState.name} onChange={handleChange} />
            <br/>{'------------------------------------------------------------------------------------------------------------'}<br/>
            <input type="text" name="age" placeholder="Age" value={inform.age}  onChange={setInform}/>
            <select name="gentle" value={inform.gentle}  onChange={setInform}>
                <option value={0}>Male</option>
                <option value={1}>Female</option>
                <option value={2}>Gay</option>
            </select>
        </div>
    )
}

export default MyUseState;
