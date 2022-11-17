import PreviewVideo from "../PreviewVideo/PreviewVideo"
import {useState} from "react"

const Moj=()=>{
    const [stepCount,setStepCount] = useState(1)
    return(
        <PreviewVideo setStepCount={()=>setStepCount(2)}/>
    )
}

export default Moj