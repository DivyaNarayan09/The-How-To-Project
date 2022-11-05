import React,{useState} from "react";
import {Tabs,Tab} from "@mui/material";

const Test =() => {
    const[value,setValue] = useState(0);
    return (

            <Tabs value={value} onChange={(e,val) => setValue(val) }
            textColor="white"
            indicatorColor="primary"
            aria-label="primary tabs example"
            sx={{marginLeft:47 , color:"white" , paddingLeft:9 }}>
                <Tab sx={{marginRight:3 , fontSize:23}} label="Watch History"></Tab>
                <Tab sx={{marginRight:3 , fontSize:23}}label="liked"></Tab>
                <Tab sx={{marginRight:2 , fontSize:23}}label="bookmark"></Tab>
            </Tabs>
    )
}
export default Test;