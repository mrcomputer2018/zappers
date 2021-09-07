import React from "react";
import Select from "./Select";

const Input = (props) => {
    return (
        <div className='input'>
            <label htmlFor='inputSearch'>Pesquisa :</label>
            <input className='inputSearch' 
                    type='text' placeholder='  Pesquisar...'></input>
            <Select />
        </div>
    )
}
export default Input;