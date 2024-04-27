import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [selectCategory, setSelectCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategory)
    }, [selectCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchData(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents)
            setSearchResult(contents)
            setLoading(false)
        })
    }

    return(
    <Context.Provider 
        value={{
            loading,
            setLoading,
            searchResult,
            selectCategory,
            setSelectCategory,
            mobileMenu,
            setMobileMenu
        }}
    >
        {props.children}
    </Context.Provider>);
};

