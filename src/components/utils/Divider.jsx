import React from "react";

const Divider = (props) => {
    return (
        <div 
            style={{
                padding: props.padding,
                paddingTop: props.paddingTop,
                paddingBottom: props.paddingBottom,
                paddingLeft: props.paddingLeft,
                paddingRight: props.paddingRight
            }}
        />
    );
}

export default Divider;