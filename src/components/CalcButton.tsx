import React from 'react'
import { useTheme } from '../context/ThemeContextProvider'

const CalcButton = () => {
    const {kbdbgColor, KbdkeytextColor, shadowColor} = useTheme()
  return (
    <button className={`md:h-10 h-11 width-4-5-rem text-2x1 mb-1 shrink rounded-lg flex items-center justify-center active:translate-y-1 transition-all duration-75 ${kbdbgColor} ${KbdkeytextColor}`} 
    style={{boxShadow: `0 6px 0 0 ${shadowColor}`}}/>
  )
}

export default CalcButton