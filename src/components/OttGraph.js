import React, {useState, useEffect} from 'react';
import '../styles/ott.css';

// specified function from d3 will reduce the loading time 
import {selectAll} from "d3-selection";

function OttGraph({category, value, arrayValue}) {
    // setting up the state for right and left rectangle filling 
    const [showPos, setShowPos] = useState(false);
    const [showNeg, setShowNeg] = useState(false);

    // ES6 destructing 
    const [data] = useState(arrayValue);
    const demo = [data["avg-SG-per-round"]];

    // runs only once at the begining
    useEffect(() => {
        // seperating positive and negative sides to fill the rectangle
        if(Math.sign(demo) === 1){
            setShowPos(true);
            let selected = selectAll('.rect_rightFill').data([demo]);
            selected.classed('rect_rightFill', true)
                .style('width', function(d, i) { return dataFormat(demo)});
        }else if(Math.sign(demo) === -1){
            setShowNeg(true);
            let selected = selectAll('.rect_leftFill').data([demo]);
            selected.classed('rect_leftFill', true)
                .style('width', function(d, i) { dataFormat(demo)});
        }
    }, [])

    // if it exceeds maximum value it should fill (data formatting)
    const dataFormat = (demo) => {
        if(Math.ceil(Math.abs(demo)*25) <= 100){
            return `${Math.ceil(Math.abs(demo)*25)}px`
        }else{
            return '100px'
        }
    }

    // rectagle filling styles 
    const leftStyle = {
        width: dataFormat(demo)
    };

    const rightStyle = {
        width: dataFormat(demo)
    };


    // bar graph naming format
    const categoryFormat = () => {
        // console.log(category);
        switch(category) {
            case "SG_TEE":
              return "SG OTT"
            case "SG_APP":
                return "SG APP"
            case "SG_ARG":
                return "SG ARG"
            case "SG_PUTT":
                return "SG PUT"
            default:
                return "SG OTT"
          }
            
    }

    // checking the number of digits for bar graph
    const checkVal = (value) => {
        // console.log("value :",value.toString().length);
        if(Math.abs(value).toString().length <= 3){
            let val = value.toString();
            let addZero = val + '0';
            console.log("value :",addZero);
            return addZero;
        }
        else{
            return value.toString();
        }
    }

    return (
        <div className="OTT__body">
            <div className="graph__title">
                {categoryFormat()}
            </div>          
            <div className="rect">                   
                <div className="line__mone"></div>
                <div className="line__mtwo"></div>
                <div className="line__mthree"></div>
                <div className="mid__line"></div>            
                <div className="line__one"></div>
                <div className="line__two"></div>
                <div className="line__three"></div>
            </div>
            <div className={showPos === true ? "rect__rightFill" : "rect__leftFill"} 
            style={rightStyle}
            ></div>
            <div className={showNeg === true ? "rect__leftFill" : "rect__rightFill"} 
            style={leftStyle}
            ></div>
            <div className="graph__num">
                {checkVal(value) || 0.00  }
            </div>
        </div>
    )
}

export default OttGraph
