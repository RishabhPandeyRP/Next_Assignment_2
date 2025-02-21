import { useEffect } from "react"
import { useRouter } from "next/router"
import { useState } from "react"
const Custom404 = () => {

  const router = useRouter()
  const [count , setCount] = useState(5)

  useEffect(()=>{
    const intervalTimer = setInterval(()=>{
      setCount((prev)=>{
        if(prev <= 0) clearInterval(intervalTimer)
        return prev-1
      })
    },1000)

    const timer = setTimeout(()=>{

      router.push("/")
    },5000)

    return ()=> {
      clearTimeout(timer);
      clearInterval(intervalTimer);
    }
  },[])

  return (
    <div className=" min-h-[19em] flex justify-center items-center text-[30px] ">
      
      <main className="flex flex-col items-center">
        <div>Redirecting to home in {count} sec...</div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn't find the page you were looking for.</p>
      </main>
      
    </div>
  )
}

export default Custom404
