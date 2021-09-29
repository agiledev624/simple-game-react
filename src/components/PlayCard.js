import React, { useState } from "react";
import { Types } from "../constants/types";
import trophy from "../assets/trophy.png";

const Button = (props) => {
    return (
      <div value={props.name} onClick={props.onClick}>
        <img className={`user-selection-img ${props.name === props.selection ? "selected" : ""}`} src={props.img} alt="img" />
      </div>
    );
  };

export default ({state, playGame, position}) => {
    const maxScore = 10;
    return (
        <div className="box user-box">
          <h1>{position==="left"?state.leftName:state.rightName}</h1>
          {state.leftScore < maxScore && state.rightScore < maxScore ? (
            <>
              <div className="user-selection">
                  {Types.map(e => 
                      <Button
                      selection={position==="left" ? state.leftSelection : state.rightSelection}
                      name={e.name}
                      onClick={state.mode === 0 && 
                        state.leftScore < maxScore && 
                        state.rightScore < maxScore && 
                        position === "left" ? playGame : ""}
                      img={e.img}
                    />
                  )}
              </div>
              <h3>
                {state.leftSelection === ""
                  ? "Pick one!"
                  : `${position === "left" ? state.leftName : state.rightName} selected: ${position==="left" ? state.leftSelection:state.rightSelection}`}
              </h3>
            </>
          ) : (
            <>
            {position==="left" && state.leftScore >= maxScore && 
            <>
              <img src={trophy} alt="img" data-cy="victory" />
              <h3>Victory!</h3>
            </>}
            {position==="right" && state.rightScore >= maxScore && 
            <>
              <img src={trophy} alt="img" data-cy="victory" />
              <h3>Victory!</h3>
            </>}
            </>
          )}
        </div>
    );
}
