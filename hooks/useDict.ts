"use client"

import { Dictionary, getDictionary } from "@/dictionaries"
import { useConfig } from "@/store"
import { useCallback, useEffect, useState } from "react"

const useDict = () => {
  const { lang } = useConfig()
  const [dict, setDict] = useState<Dictionary>()

  const asyncGetDict = useCallback(async () => {
    let json = await getDictionary(lang)
    setDict(json)
  }, [lang])

  useEffect(() => {
    asyncGetDict()
  }, [asyncGetDict])

  return {
    dict: dict,
  }
}

export default useDict
