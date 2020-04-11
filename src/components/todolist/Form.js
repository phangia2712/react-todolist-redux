import React, { useState, useEffect/* , useReducer, useMemo */ } from 'react'
import { Row, Col, Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { actCloseForm, actAddItem, actResetIsSelected } from '../../action/index'

function FormX(props) {
    let {isShowForm, actCloseForm, actAddItem, isSelected} = props
    let textInput = React.createRef()

    const [inputForm, setInputForm] = useState({
        id: '',
        name: '',
        level: 1
    })
    const handleChangeInputForm = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        setInputForm(prev => ({ 
            ...prev,
            [name]: value
        }))
    }
    function addItem (e) {
        // actSearchItem(stateUserInput.name)
        if (inputForm.name.length > 0) {
            console.log(inputForm)
            actAddItem(inputForm)
        } else{
            alert('Vui lòng nhập vào thông tin công việc!')
        }
        e.preventDefault()
    }

    function clearValue (e) {
        textInput.current.focus()
        if (inputForm.name.length > 0) {
            setInputForm(prev => ({ 
                ...prev,
                name: ''
            }))
        }
        e.preventDefault()
    }
    
    function checkValueKeyUp (e) {
        if (e.key === "Escape") {
            clearValue(e)
        } else if (e.key === "Enter") {
            addItem(e)
        }
    }
    
    function closeForm (e) {
        actCloseForm()
        e.preventDefault()
    }
    useEffect(() => {
        if (isShowForm) {
            if (isSelected !== null) {
                setInputForm(prev => { 
                    return {
                        ...prev,
                        id: isSelected.id,
                        name: isSelected.name,
                        level: isSelected.level
                    }
                })
            }
        }
    }, [isSelected, isShowForm])

    // phai tach textInput ra 1 useEffect rieng, neu gop chung voi useEffect o tren se ko chay
    useEffect(() => {
        if (isShowForm) {
            textInput.current.focus()
        }
    }, [isShowForm, textInput])

    if (isShowForm) {
        return (
            <div className="my-form">
               {/* hello {inputForm.id} */}
               <Row>
                   <Col lg={{size: 4, offset: 8}}>
                   <Form onSubmit={addItem} inline className="align-items-start">
                        <FormGroup className="mywork">
                            {/* nếu xài component <Input> thì sẽ ko focus dc */}
                            <input className="form-control mr-1" ref={textInput} onKeyUp={checkValueKeyUp} type="text" name="name" placeholder="Nhập công việc..." autoComplete="off" value={inputForm.name} onChange={handleChangeInputForm} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="level" value={inputForm.level} onChange={handleChangeInputForm} id="exampleSelect" className="mr-1">
                                <option value={0}>Low</option>
                                <option value={1}>Normal</option>
                                <option value={2}>High</option>
                            </Input>
                        </FormGroup>
                        {/* dung onclik tren form vay se gay loi reload trang, suy ra nen dung submit form <Button outline color="primary mr-1" onClick={addItem}>Thêm</Button> */}
                        <Button outline color="primary mr-1" type="submit">Thêm</Button>
                        <Button outline color="secondary" onClick={closeForm}>Đóng Form</Button>
                    </Form>
                   </Col>
               </Row>
            </div>
        )
    } else {
        return null
    }
    
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        isShowForm: state.isShowForm,
        isSelected: state.isSelected
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        actCloseForm: () => {
            dispatch(actCloseForm())
            dispatch(actResetIsSelected())
        },
        actAddItem: (inputForm) => {
            dispatch(actAddItem(inputForm))
            dispatch(actCloseForm())
            dispatch(actResetIsSelected())
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormX)