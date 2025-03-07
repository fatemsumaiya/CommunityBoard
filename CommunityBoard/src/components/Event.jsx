import React from "react";

const Event = (props) => {
    return (
        <div className={'Event '}>
            <h3>{props.name}</h3>
            <h4>{props.subtitle}</h4>
            <p>{props.date}</p>
        </div>
    )
}

export default Event;