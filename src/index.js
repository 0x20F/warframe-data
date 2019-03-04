// React files
import React        from "react";
import ReactDOM     from "react-dom";


// Fontawesome icons
import { library }  from "@fortawesome/fontawesome-svg-core";
import { faBars }   from "@fortawesome/free-solid-svg-icons";
library.add(faBars);


// App files
import AppRouter          from "AppRouter";

import "@Styles/app.scss";


// Render whatever the route returns
ReactDOM.render(<AppRouter/>, document.getElementById("root"));