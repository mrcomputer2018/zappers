import React from "react";
import ZappersItem from "./ZappersItem";

const ZappersList = (props) => {
   /*  const renderCustomersList = () => (
        zappers.map(pessoa => <ZappersItem key={pessoa.name} zapper={pessoa} />) */
     
    return (
        <div>
            <ZappersItem></ZappersItem>
            {/* {renderCustomersList} */}
        </div>
    )
}
export default ZappersList;