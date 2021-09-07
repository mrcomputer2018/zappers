import React from "react";
import ZappersList from "../components/ZappersList";

const Home = ({ title }) => {
    return (
        <div>
            { title }
            <ZappersList></ZappersList>
        </div>
    )
}
export default Home;
