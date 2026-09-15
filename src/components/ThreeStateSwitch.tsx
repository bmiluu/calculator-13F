import { useState } from "react"
import SwitchButton from "./SwitchButton"
import { useTheme } from "../context/ThemeContext"

const ThreeStateSwitch = () => {
  const [btnIdx, setBtnIdx] = useState(1)
  const {tglkbdbg, textColor, bgColorhandler,
    textColorHandler, setDispColor,
    setTglKbdBg,
    setKbdBgColor, setKbdkeytextColor,
    setShadowColor, setDelReBackColor,
    setEqualBgColor,
    setDelReShadowColor, setEqualShadowColor
  } = useTheme()

  function handleClickTheme1(){
    setBtnIdx(1)
    bgColorhandler('hsl(222, 26%, 31%)')
    textColorHandler('white')
    setDispColor('hsl(224, 36%, 15%)')
    setTglKbdBg('hsl(223, 31%, 20%)')
    setKbdBgColor('bg-[rgb(234,227,220)]')
    setKbdkeytextColor('text-[rgb(53,53,44)]')
    setShadowColor('rgb(180,165,151)')
    setDelReBackColor('bg-[rgb(99,112,151)]')
    setEqualBgColor('bg-[rgb(208,63,47)]')
    setDelReShadowColor('rgb(64,78,114)')
    setEqualShadowColor('rgb(147,38,26)')
  }
  function handleClickTheme2(){
    setBtnIdx(2)
    bgColorhandler('hsl(0, 0%, 90%)')
    textColorHandler('rgb(27, 36, 40)')
    setDispColor('hsl(0, 0%, 93%)')
    setTglKbdBg('hsl(0, 5%, 81%)')
    setKbdBgColor('bg-[rgb(234,227,220)]')
    setKbdkeytextColor('text-[rgb(53,53,44)]')
    setShadowColor('rgb(166,157,145)')
    setDelReBackColor('bg-[rgb(55,127,134)]')
    setEqualBgColor('bg-[rgb(202,85,2)]')
    setDelReShadowColor('rgb(27,95,101)')
    setEqualShadowColor('rgb(137,57,1)')
  }
  function handleClickTheme3(){
    setBtnIdx(3)
    bgColorhandler('rgb(22, 6, 40)')
    textColorHandler('rgb(255, 229, 61)')
    setDispColor('hsl(268, 71%, 12%)')
    setTglKbdBg('hsl(268, 71%, 12%)')
    setKbdBgColor('bg-[rgb(88,7,125)]')
    setKbdkeytextColor('text-[rgb(255,229,61)]')
    setShadowColor('rgb(188,21,244)')
    setDelReBackColor('bg-[rgb(52,28,79)]')
    setEqualBgColor('bg-[rgb(0,224,209)]')
    setDelReShadowColor('rgb(135,28,156)')
    setEqualShadowColor('rgb(108,249,242)')
  }
  return (
    <div className="modeBtn flex flex-col">
      <div className="number flex gap-3 justify-center">
        <span className="text-xs" style={{color: textColor}}>1</span>
        <span className="text-xs" style={{color: textColor}}>2</span>
        <span className="text-xs" style={{color: textColor}}>3</span>
      </div>
      <div className="flex justify-between items-center rounded-full p-1 w-14 h-6" style={{backgroundColor:tglkbdbg}}>
        <SwitchButton label="Theme 1" handleClick={handleClickTheme1} isActive={btnIdx === 1} btnColor={'rgb(208,63,47)'}></SwitchButton>
        <SwitchButton label="Theme 2" handleClick={handleClickTheme2} isActive={btnIdx === 2} btnColor={'rgb(202,85,2)'}></SwitchButton>
        <SwitchButton label="Theme 3" handleClick={handleClickTheme3} isActive={btnIdx === 3} btnColor={'rgb(0,224,209)'}></SwitchButton>
      </div>
    </div>
  )
}

export default ThreeStateSwitch