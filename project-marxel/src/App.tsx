import { useState } from "react"



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
    <div className="h-screen flex flex-col items-center">
      <nav className=" mt-5 border border-dotted border-[#EC4E20] min-w-[500px] sm:min-w-[650px]">
        <ul className="flex justify-between"> 
          <li 
            onClick={handlerNav(CARD)}
            className={tab===CARD? "bg-slate-300 border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            CARD
          </li>
          <li 
            onClick={handlerNav(ACCOUNT)}
            className={tab===ACCOUNT? "bg-slate-300 border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            ACCOUNT
          </li>
          <li 
            onClick={handlerNav(PAGINATION)}
            className={tab===PAGINATION? "bg-slate-300 border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            PAGINTION
          </li>
          <li onClick={handlerNav(SHOP)} 
            className={tab===SHOP? "bg-slate-300 border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            SHOP
          </li>
          <li 
            onClick={handlerNav(TEL)} 
            className={tab===TEL? "bg-slate-300 border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center cursor-pointer" : "border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer"}>
            TEL
          </li>
        </ul>
      </nav> 

      <section>
        {tab}
      </section>        
    </div> 
  )
} 

export default App
