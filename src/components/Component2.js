import { useState } from "react"
import "../css/compo.css"


const Component=()=>{
    let [whitegroundColour,setbackgroundcolour]=useState(0)

    let changetheme=()=>{
        setbackgroundcolour(whitegroundColour+1)
    }

    let isDarkTheme=whitegroundColour%2===0

    let themestyles={
        
        backgroundColor: isDarkTheme ? "black" : "white"
        
    }

  

    



    return (

    
        <div  className="full" style={themestyles} >

            <button onClick={changetheme}>Switch theme</button>

        </div>
    

    


    
    )

}
export default Component