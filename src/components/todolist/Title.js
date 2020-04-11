import React/* , { useState, useMemo, useEffect } */ from 'react'
import { Badge } from 'reactstrap';
function Title(props) {
    return (
        <div className="title">
           <h2><Badge color="success" pill>NEW</Badge> Danh mục công việc cần làm</h2>
           <hr/>
           <br/>
        </div>
    )
}

export default Title;