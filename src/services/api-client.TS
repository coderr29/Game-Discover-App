import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'bd026eb22cfe40aaac09aee4fff437aa'
    }
})