import React from "react";

const Event = (props) => {
    return (
        <div className={'Event '}>
            <h3>{props.name}</h3>
            <p>{props.date}</p>
            <p>{props.sign}</p>
        </div>
    )
}

export default Event;