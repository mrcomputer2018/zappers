import React from "react";
import './Home.css';
import Input from "../components/Input";
import ZappersList from "../components/ZappersList";
import Button from "../components/Button";
import Header from "../components/Header";

const Home = ({ title }) => {
    return (
        <div className='home'>
            <Header title="Conta Zap - Zappers" />
            <Input/>
            <ZappersList></ZappersList>
            <Button />
        </div>
    )
}
export default Home;
