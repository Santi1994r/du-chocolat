import React from "react";

function InfoCarrousel(props) {
  return (
    <div className="textoDeCarrousel">
      <h4 className="titCarrousel">{props.tit}</h4>
      <p className="parrCarrousel">
        {props.parr}
      </p>
    </div>
  );
}

export default InfoCarrousel;
