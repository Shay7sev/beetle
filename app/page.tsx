"use client"

import { useState } from "react"
import Section from "./components/section"

export interface ModelListItem {
  id: string
  title: string
}

const Home = () => {
  const [modelList] = useState<ModelListItem[]>([
    {
      id: "1",
      title: "Aircraft Model",
    },
  ])
  return (
    <div className="relative m-auto max-w-screen-md">
      <div className="space-y-4 p-4">
        {modelList.map((item) => (
          <Section item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
