import React from "react";

const ZappersItem = (props) => {
    return (
        <div className='container_card'>
            <article className="card">
                <img
                    className="thumbnail"
                    src="../../../public/logo192.png"/* src={image} */
                    alt="Foto"
                />
                <div>
                    <span className="person-name">Joao Ricardo{/* {name} */}</span>
                    <br/>
                    <span className="person-sector"> Marketing{/* {sector} */}</span>
                </div>
            </article>
            
            <article className="card">
                <img
                    className="thumbnail"
                    src="../../../public/logo192.png"/* src={image} */
                    alt="Foto"
                />
                <div>
                    <span className="person-name">Joao Ricardo{/* {name} */}</span>
                    <br/>
                    <span className="person-sector"> Marketing{/* {sector} */}</span>
                </div>
            </article>
        </div>
    )
}
export default ZappersItem;