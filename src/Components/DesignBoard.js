import React from "react" ;
import DesignPad from "./DesignPad";

class DesignBoard extends React.Component {

    render(){
        return (
            <div className="design-board">
                <DesignPad/>
                <DesignPad/>
                <DesignPad/>
                <DesignPad/>
            </div>
        );
    }
}

export default DesignBoard;
