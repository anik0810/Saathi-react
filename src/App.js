import Devolpers from "./Components/Devolpers";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
const darkmode=()=>{
  document.style.body.backgroundColor='black';
}
export default function App(){
  return(
    <>
      <Navbar/>
      <Home/>
      {/* <Devolpers/> */}
    </>
  )
}