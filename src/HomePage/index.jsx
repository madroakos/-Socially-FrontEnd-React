import React from "react";
import "./index.css";
import NewPostButton from "./NewPostButton/NewPostButton";
import Header from "../Header/Header";
import Posts from "./Posts/Posts";
import {useParams} from "react-router-dom";

const Index = () =>{
    const { username } = useParams();
    return (
        <div className="homePageDiv">
            <Header />
            <NewPostButton />
            <Posts username={username}/>
        </div>
    );
};

export default Index;