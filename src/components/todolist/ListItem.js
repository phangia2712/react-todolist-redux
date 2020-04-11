import React, { useState/* , useMemo, useEffect */ } from 'react'
import { Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux'
import { actRemoveItem, actOpenForm, actGetValueIsSelected } from '../../action/index'

function ListItem(props) {
    let {item, index, actRemoveItem, actEditItem} = props
    const [isShowModal, setIsShowModal] = useState(false)
    function showLevel (level) {
        let levelClass = 'secondary', levelLabel = 'Low'
        if (level === 1) {
            levelClass = 'primary'
            levelLabel = 'Normal'
        } else if (level === 2) {
            levelClass = 'danger'
            levelLabel = 'High'
        }
        let levelItem = <Badge color={`${levelClass}`} pill>{levelLabel}</Badge>
        return levelItem
    }
    function toggleDeleteItemModal () {
        setIsShowModal(!isShowModal)
    }
    function deleteItem (id) {
        actRemoveItem(id)
        toggleDeleteItemModal()
    }
    function editItem (item) {
        console.log(item)
        actEditItem(item)
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <th scope="row">{item.name}</th>
            <td>{showLevel(item.level)}</td>
            <td>
                <Button color="info" onClick={() => editItem(item)}>Chỉnh sửa</Button>
            </td>
            <td>
                <Button color="danger" onClick={toggleDeleteItemModal}>Xóa</Button>
                <Modal centered isOpen={isShowModal} toggle={toggleDeleteItemModal} backdropTransition={{ timeout: 50 }} modalTransition={{ timeout: 100 }}>
                    <ModalHeader toggle={toggleDeleteItemModal}>Bạn có muốn xóa <strong>{item.name}</strong>??</ModalHeader>
                    <ModalBody>
                        Uhm...., để tôi suy nghĩ xem!!!
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => deleteItem(item.id)}>Xóa</Button>{' '}
                        <Button color="secondary" onClick={toggleDeleteItemModal}>Hủy bỏ</Button>
                    </ModalFooter>
                </Modal>
            </td>
        </tr>
    )
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {

    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
        actRemoveItem: (id) => {
            dispatch(actRemoveItem(id))
        },
        actEditItem: (item) => {
            dispatch(actOpenForm())
            dispatch(actGetValueIsSelected(item))
        }
    }
}
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListItem)