import React from 'react'
import { useTheme } from '../context/ThemeContextProvider'
import CalcButton from './CalcButton'

const KeyBoard = () => {
    const { tglkbdbg } = useTheme()
    return (
        <div className='w-fit h-fit rounded-lg flex p-6 md:p-5 items-center justify-center' style={{ backgroundColor: tglkbdbg }}>
            <div className='w-fit flex flex-wrap md:gap-x-[0.75rem] md:gap-y-[0.82rem] gap-x-[0.8rem] gap-y-[0.9rem] sm:gap-x-[0.2rem] sm:gap-y-[0.9rem]'>
                <CalcButton>7</CalcButton>
                <CalcButton>8</CalcButton>
                <CalcButton >9</CalcButton>
                <CalcButton>4</CalcButton>
                <CalcButton>5</CalcButton>
                <CalcButton>6</CalcButton>
                <CalcButton>+</CalcButton>
                <CalcButton>1</CalcButton>
                <CalcButton>2</CalcButton>
                <CalcButton >3</CalcButton>
                <CalcButton >−</CalcButton>
                <CalcButton >.</CalcButton>
                <CalcButton >0</CalcButton>
                <CalcButton >/</CalcButton>
                <CalcButton >x</CalcButton>
            </div>
        </div>
    )
}

export default KeyBoard