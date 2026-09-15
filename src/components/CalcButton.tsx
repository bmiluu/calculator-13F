import { useTheme } from '../context/ThemeContext'

interface CalcButtonProps {
  children: string;
  action?: string;
  onAction: (action: string) => void;
  variant?: 'default' | 'control' | 'equal';
}

const CalcButton = ({ children, action = children, onAction, variant = 'default' }: CalcButtonProps) => {
    const {kbdbgColor, KbdkeytextColor, shadowColor} = useTheme()
  return (
    <button type="button" onClick={() => onAction(action)} className={`calc-button ${variant !== 'default' ? variant : ''} ${kbdbgColor} ${KbdkeytextColor}`} style={{boxShadow: `0 4px 0 0 ${shadowColor}`}}>
      {children}
    </button>
  )
}

export default CalcButton