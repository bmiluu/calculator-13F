import { useTheme } from '../context/ThemeContext'
import CalcButton from './CalcButton'

interface KeyBoardProps {
    onAction: (action: string) => void;
}

const KeyBoard = ({ onAction }: KeyBoardProps) => {
    const { tglkbdbg, delreBackColor, equalBgColor, delreShadowColor, equalShadowColor, equalColor } = useTheme()
    return (
        <div className="keypad" style={{ backgroundColor: tglkbdbg }}>
            <div className="key-grid">
                {['7', '8', '9', 'delete', '4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', '*'].map((key) => (
                    <CalcButton key={key} action={key === 'delete' ? 'delete' : key} onAction={onAction} variant={key === 'delete' ? 'control' : 'default'}>
                        {key === 'delete' ? 'DEL' : key === '*' ? 'x' : key}
                    </CalcButton>
                ))}
                <button type="button" className={`calc-button control wide ${delreBackColor}`} style={{ boxShadow: `0 4px 0 0 ${delreShadowColor}` }} onClick={() => onAction('reset')}>RESET</button>
                <button type="button" className={`calc-button equal wide ${equalBgColor} ${equalColor}`} style={{ boxShadow: `0 4px 0 0 ${equalShadowColor}` }} onClick={() => onAction('=')}>=</button>
            </div>
        </div>
    )
}

export default KeyBoard