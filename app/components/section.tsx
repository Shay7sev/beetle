"use client"

import Aircraft from "@/components/model/aircraft"
import { Card, CardContent } from "@/components/ui/card"
import { EyeIcon } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ModelListItem } from "../page"

export default function Section({ item }: { item: ModelListItem }) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  return (
    <Card
      className={cn(
        "border border-border bg-card text-card-foreground transition-all",
        isHovered && "bg-accent text-accent-foreground shadow-md"
      )}
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
      }}>
      <CardContent className="pl-0">
        <div className="grid grid-cols-12 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div
            className={cn(
              "relative col-span-6 md:col-span-4 transition-all",
              isHovered && "scale-150"
            )}>
            <Canvas
              shadows
              className="pl-0"
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 0, 10],
              }}>
              {/*环境*/}
              <Environment
                files={`./environment/${"the_sky_is_on_fire_2k"}.hdr`}
              />
              <Aircraft />
            </Canvas>
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">
                  {item.title}
                </h3>
                <p className="text-small text-foreground/80">12 Tracks</p>
                <h1 className="text-large font-medium mt-2">
                  Render By Threejs
                </h1>
              </div>
              <div className="mt-1.5 flex font-mono text-xs font-normal text-muted-foreground/50">
                <EyeIcon className="mr-1 h-4 w-4" />
                <span>{1}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
