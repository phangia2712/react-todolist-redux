import React from 'react'


function testMatch(props) {
    console.log('testMatch có props', props)
    let courseName = props.match.params.tuananh
    return (
        <div className="test-match">
            <h2>{courseName}</h2>
        </div>
    )
}

export default testMatch;
