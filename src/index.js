// React files
import React        from "react";
import ReactDOM     from "react-dom";




// Fontawesome icons
import { library }  from "@fortawesome/fontawesome-svg-core";
import { faHome, 
        faChevronRight, faChevronLeft,
        faCog, faRss}   from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
/**
 * Icon sizes:
 *  lg, xs, sm
 *  1x, 2x, 3x, 4x, 5x
 *  Add them as a size="" attribute on the component
 */
library.add(
    faHome,
    faRss,
    faTwitter,
    faChevronLeft,
    faChevronRight,
    faCog); // TODO: Add settings page




// App files
import AppRouter          from "AppRouter";

import "@Styles/app.scss";



// Render whatever the route returns
ReactDOM.render(<AppRouter/>, document.getElementById("root"));