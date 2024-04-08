function App() {

  const CARD:number=0
  const ACCOUNT:number=1
  const PAGINATION:number=2
  const SHOP:number=3
  const TEL:number=4

  

  return (
    <div className="h-screen flex flex-col items-center">
      <nav className=" mt-5 border border-dotted border-[#EC4E20] min-w-[500px] sm:min-w-[650px]">
        <ul className="flex justify-between"> 
          <li className="border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer">Card</li>
          <li className="border-r border-dotted border-[#EC4E20] w-full  py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer">Acount</li>
          <li className="border-r border-dotted border-[#EC4E20] w-full py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer">Pagination</li>
          <li className="border-r border-dotted border-[#EC4E20] w-full py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer">Shop</li>
          <li className="border-r border-dotted border-[#EC4E20] w-full py-1 text-xl font-semibold text-center hover:bg-slate-300 transition-all duration-700 cursor-pointer">Tel</li>
        </ul>
      </nav>          
    </div> 
  )
}

export default App
