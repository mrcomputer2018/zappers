import React, { useRef, useState, useEffect } from "react";
import Select from "./Select";

const Input = (props) => {
    const inputSearchRef = useRef(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        inputSearchRef.current.focus();
    }, []);

    return (
        <div className='input'>
            <label htmlFor='inputSearch'>Pesquisa :</label>
            <input className='inputSearch' 
                    type='text' placeholder='  Pesquisa um colaborador...'
                    value={ search }
                    onChange={(event) => setSearch(event.target.value)}
                    ref={ inputSearchRef }></input>
                    {/* {console.log({search})} */}
            <Select />
        </div>
    )
}
export default Input;