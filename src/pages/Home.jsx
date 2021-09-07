import React from "react";
import './Home.css';
import Input from "../components/Input";
import ZappersList from "../components/ZappersList";

const Home = ({ title }) => {
    return (
        <div className='home'>
            <h1>{ title }</h1>
            <Input/>
            <ZappersList></ZappersList>
        </div>
    )
}
export default Home;
