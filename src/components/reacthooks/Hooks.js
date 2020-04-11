import React from 'react'
// import MyUseState from './MyUseState'
// import MyUseEffect from './MyUseEffect'
import MyUseRef from './MyUseRef'

import {
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import testMatch from './TestMatch'

function hooks(props) {
    console.log('Hooks có props', props)
    let { match } = props

    let menuChild = [
        {to: `${match.url}/rectJS/ta`, title: 'ReactJS', exact: true, activeClassName: 'active troioi'},
        {to: `${match.url}/php/tt`, title: 'PHP', exact: false, activeClassName: 'active kinhvay'},
        {to: `${match.url}/Javascript/kk`, title: 'Javascript', exact: false, activeClassName: 'active khongtin'}
    ]

    function showMenuChild (array) {
        let xhtml = null
        xhtml = array.map((menu, index) => (
        <NavLink key={index} exact={menu.exact} type="button" activeClassName={menu.activeClassName} className="btn btn-secondary" to={menu.to}>{menu.title}</NavLink>
        ))
        return xhtml
    }

    return (
        <div className="hooks">
            {/* <MyUseState /> */}
            {/* <MyUseEffect /> */}
            <MyUseRef />
            <br />
            <div className="btn-group" role="group" aria-label="Basic example">
                {showMenuChild(menuChild)}
                {/* <NavLink exact type="button" activeClassName="active hehe" className="btn btn-secondary" to={`${match.url}/rectJS`}>ReactJS</NavLink>
                <NavLink type="button" activeClassName="active huhu" className="btn btn-secondary" to={`${match.url}/php`}>PHP</NavLink>
                <NavLink type="button" activeClassName="active haha" className="btn btn-secondary" to={`${match.url}/Javascript`}>Javascript</NavLink> */}
            </div>
            <div style={{marginTop: 20}}>
                {/* exact ở Route này sẽ quy định chính xác đường dẫn thì mới hiển thị nội dung, còn không thì không hiển thị. 
                VD: /course --> chính xác vậy thì hiển thị
                /course/abc/xyz ---> nó chỉ giống dc khúc đầu, không chính xác hoàn toàn nên không hiển thị */}
                <Route exact path={match.url} render={props => (
                    <h3>Vui lòng chọn khóa học</h3>
                )}></Route>
                <Route path={`${match.url}/:tuananh/:chieuduong`} component={testMatch}></Route>
            </div>
        </div>
    )
}

export default hooks;
