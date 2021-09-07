import React from "react";

const Input = (props) => {
    return (
        <div className='input'>
            <label htmlFor='inputSearch'>Pesquisa :</label>
            <input className='inputSearch' 
                    type='text' placeholder='  Pesquisar...'></input>
        </div>
    )
}
export default Input;