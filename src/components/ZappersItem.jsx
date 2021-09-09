import React from "react";

const ZappersItem = ({ zapper: { image, name, sector } }) => {
    return (
        <div className='container_card'>
            <article className="article_card">
                <img
                    className="thumbnail"
                    src={image}
                    alt="Foto"
                />
                <div>
                    <span className="person-name">{ name }</span>
                    <br/>
                    <span className="person-sector">{ sector }</span>
                </div>
            </article>
                  
        </div>
    )
}
export default React.memo(ZappersItem);