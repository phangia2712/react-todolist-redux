import {useState} from 'react'

export const MyUseForm = (initialValues) => {
    const [values, setValues] = useState(initialValues)
    return [values, event => {
        const target = event.target
        const newValue = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        // setValues({...values, [name]: newValue})
        setValues( currentMyState => ({...currentMyState, [name]: newValue}))
    }]
}