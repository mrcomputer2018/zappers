import React, { useEffect, useState } from "react";
import './Home.css';
import Input from "../components/Input";
import ZappersList from "../components/ZappersList";
import Button from "../components/Button";
import Header from "../components/Header";
import Api from "../services/api";
const Home = () => {

    const [zappers, setZappers] = useState([]);
    const fetchData = async () => {
        try {
            const response = await Api.get(`/zappers`)
            console.log(response)
            setZappers(response.data)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div className='home'>
            <Header title="Conta Zap - Zappers" />
            <Input />
            <ZappersList zappers={zappers}/>
            <Button />
        </div>
    )
}
export default Home;
