import React, { useEffect, useState } from 'react'
import { MyUseForm } from './MyUseForm'
import { MyUseEffectFetchData } from './MyUseEffectFetchData'
import MyUseEffectHello from './MyUseEffectHello'

function MyUseEffect(props) {
    const [values, setValues] = MyUseForm({
        email: '',
        name: '',
        pass: ''
    })
    useEffect(() => {
        console.log('render MyUseEffect')
        return () => {
            console.log('unmount MyUseEffect')
        }
    }, [values.email, values.name, values.pass])

    const [showHello, setShowHello] = useState(false)


    const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0)
    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    })
    const {data, loading} = MyUseEffectFetchData(`http://numbersapi.com/${count}/trivia`)
    return (
        <div className="MyUseEffect">
            https://www.youtube.com/watch?v=RkBg0gDTLU8&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM&index=6 <br/><br/>
           <input type="text" name="email" placeholder="Nhap email" value={values.email} onChange={setValues}/>
           <input type="text" name="name" placeholder="Nhap ten" value={values.name} onChange={setValues}/>
           <input type="text" name="pass" placeholder="Nhap pass" value={values.pass} onChange={setValues}/>
           <br/>{'--------------------------------------------------------------------------------------------------------'}<br />
           <button onClick={() => setShowHello(!showHello)}>Toggle</button>
           {showHello && <MyUseEffectHello />}
           <br/>{'--------------------------------------------------------------------------------------------------------'}<br />
           <button onClick={() => setCount( curr => curr + 1)}>Tang bien count</button> {count}
           <h3>{loading ? 'loading...' : data}</h3>
           {/* <h3>{!data ? 'loading...' : data}</h3> */}
        </div>
    )
}

export default MyUseEffect;
