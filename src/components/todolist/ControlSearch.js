import React, { /* useState, */ useReducer, useEffect/* , useMemo */ } from 'react'
import { Button, Form, FormGroup } from 'reactstrap';
import { connect } from 'react-redux'
import { actSearchItem } from '../../action/index'

function ControlSearch(props) {
    let {actSearchItem} = props
    let textInput = React.createRef()
    // const [strSearch, setStrSearch] = useState('');
    const [stateUserInput, dispatchSetUserInput] = useReducer(
        (state, newState) => ({...state, ...newState}),
        {
            strSearch: ''
            // lastName: '',
            // phoneNumber: '',
        }
    )
    function searchItem (e) {
        actSearchItem(stateUserInput.strSearch)
        e.preventDefault()
    }

    function clearValue (e) {
        textInput.current.focus()
        if (stateUserInput.strSearch.length > 0) {
            dispatchSetUserInput({strSearch: ''})
            actSearchItem('')
        }
        e.preventDefault()
    }
    
    function checkValueKeyUp (e) {
        if (e.key === "Escape") {
            clearValue(e)
        } else if (e.key === "Enter") {
            searchItem(e)
        }
    }
    
    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        // setStrSearch(value)
        dispatchSetUserInput({[name]: value});
      }

    useEffect(() => {
        textInput.current.focus()
    })

    return (
        <div className="control-search">
           <Form onSubmit={searchItem} inline className="align-items-start mb-3">
                <FormGroup className="mr-3">
                    {/* nếu xài component <Input> thì sẽ ko focus dc */}
                    <input className="form-control" ref={textInput} onKeyUp={checkValueKeyUp} type="text" name="strSearch" placeholder="Nhập công việc cần tìm" autoComplete="off" value={stateUserInput.strSearch} onChange={handleInputChange} />
                </FormGroup>
                {/* dung onclik tren form vay se gay loi reload trang, suy ra nen dung submit form <Button color="success" className="mr-3" onClick={searchItem}>Tìm kiếm</Button> */}
                <Button color="success" className="mr-3" type="submit">Tìm kiếm</Button>
                <Button color="secondary" onClick={clearValue}>Hủy bỏ</Button>
            </Form>
        </div>
    )
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
      items: state.items
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        actSearchItem: (strSearch) => {
            dispatch(actSearchItem(strSearch))
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ControlSearch)