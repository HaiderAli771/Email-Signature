import Image from "next/image";
import Header from "./Header/page"
import Hero from './Hero/page'
import Template from './Template/page'
// import Templates from "./Templates/page"
export default function Home() {
  return(
    <>
    <Header />
    <div className="mt-48">
    <Hero />
    </div>
    <Template />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    {/* <Templates />  */}
    </div>
    </>
  )
   
  
}
