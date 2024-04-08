import { useState } from "react"
import Card from "./components/Card"
import OffAccount from "./components/OffAccount"
import Pagination from "./components/Pagination"
import Shop from "./components/Shop"
import Tel from "./components/Tel"



const CARD:number=0
const ACCOUNT:number=1
const PAGINATION:number=2
const SHOP:number=3
const TEL:number=4

function App() {

  const [tab,setTab]=useState<number>(CARD)

  const handlerNav=(selectTab:number)=>{
    return ()=>{
      setTab(selectTab)
    }
  }
  
  return (
    <div className="h-screen flex flex-col items-center gap-10">
      <nav className=" mt-5 border border-dotted border-[#EC4E20] min-w-[500px] sm:min-w-[650px] z-20 bg-white">
        <ul className="flex justify-between"> 
          <li 
            onClick={handlerNav(CARD)}
            className={tab===CARD? "bg-[#016FB9] text-white border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            CARD
          </li>
          <li 
            onClick={handlerNav(ACCOUNT)}
            className={tab===ACCOUNT? "bg-[#016FB9] text-white border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            ACCOUNT
          </li>
          <li 
            onClick={handlerNav(PAGINATION)}
            className={tab===PAGINATION? "bg-[#016FB9] text-white border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            PAGINATION
          </li>
          <li onClick={handlerNav(SHOP)} 
            className={tab===SHOP? "bg-[#016FB9] text-white border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            SHOP
          </li>
          <li 
            onClick={handlerNav(TEL)} 
            className={tab===TEL? "bg-[#016FB9] text-white border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            TEL
          </li>
        </ul>
      </nav> 

      <section>
        {tab===CARD && <Card />}
        {tab===ACCOUNT && <OffAccount />}
        {tab===PAGINATION && <Pagination />}
        {tab===SHOP && <Shop />}
        {tab===TEL && <Tel />}

      </section>        
    </div> 
  )
} 

export default App
