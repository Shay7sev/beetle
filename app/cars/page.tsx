"use client"

import { Button } from "@/components/ui/button"
import useDict from "@/hooks/useDict"

const Home = () => {
  const { dict } = useDict()

  return (
    <div className="flex container flex-col items-center justify-between p-24">
      <Button>{dict?.title}22</Button>
      <Button>{dict?.title}22</Button>
      <Button>{dict?.title}</Button>
      <Button>{dict?.title}</Button>
      <Button>{dict?.title}</Button>
    </div>
  )
}

export default Home
