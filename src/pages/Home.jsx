import React from "react";
import Input from "../components/Input";
import ZappersList from "../components/ZappersList";

const Home = ({ title }) => {
    return (
        <div>
            { title }
            <Input/>
            <ZappersList></ZappersList>
        </div>
    )
}
export default Home;
