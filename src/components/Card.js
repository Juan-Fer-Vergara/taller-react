import React, { useEffect, useState } from "react";

const Card = () => {

    

    return(
        <div className="Card">
            <img src="https://pin.it/iNx7FxLBy" alt="Imagen de ejemplo" className="card-img" />
            <div className="card-content">
                <h3 className="card-title">Título de la Card</h3>
                <p className="card-text">Esta es una breve descripción de la tarjeta.</p>
                <button className="card-btn">Leer más</button>
            </div>
        </div>
    )
}

export default Card