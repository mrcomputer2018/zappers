import React, { useMemo } from "react";
import ZappersItem from "./ZappersItem";

const ZappersList = ({ zappers }) => {

     const renderCustomersList = useMemo(() => (
    zappers.map(pessoa => <ZappersItem key={pessoa.name} zapper={pessoa} />)
  ), [zappers]);
     
    return (
        <div className="div_card">
            {renderCustomersList}
        </div>
    )
}
export default ZappersList;