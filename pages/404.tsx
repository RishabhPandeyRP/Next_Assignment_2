import { useEffect } from "react"
import { useRouter } from "next/router"
import { useState } from "react"

const Custom404 = () => {
  const router = useRouter()
  const [count, setCount] = useState<number>(5)

  useEffect(() => {
    // Set up countdown timer
    const intervalTimer = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) clearInterval(intervalTimer)
        return prev - 1
      })
    }, 1000)

    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      router.push("/")
    }, 5000)

    // Clean up the timers when the component is unmounted or on re-render
    return () => {
      clearTimeout(timer)
      clearInterval(intervalTimer)
    }
  }, [router])

  return (
    <div className="min-h-[19em] flex justify-center items-center text-[30px]">
      <main className="flex flex-col items-center">
        <div>Redirecting to home in {count} sec...</div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, we couldn&apos;t find the page you were looking for.</p>
      </main>
    </div>
  )
}

export default Custom404
