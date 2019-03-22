import React from "react";

import "@Styles/components/carousel/wrapper";


const Wrapper = (props) => (
    <div className="wrapper">
        { props.children }
    </div>
);

export default Wrapper;