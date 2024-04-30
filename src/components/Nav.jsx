import { useNavigate } from "react-router-dom"
import Home from "../pages/Home"

export default function Nav() {
    const navigate = useNavigate()
    return <div>
        <button onClick={()=>navigate("/")} >Home</button>
        <button onClick={()=>navigate("./about")}>About</button>
        <button onClick={()=>navigate("./contact")}>Contact</button>
        < button onClick={()=>navigate("./blog/"+ Math.floor(Math.random()*9))}>Blog</button>
    </div>
}