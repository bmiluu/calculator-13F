interface SwitchButtonProps {
  isActive: boolean;
  btnColor: string;
  handleClick?: () => void;
  label?: string;
}

const SwitchButton = ({isActive, btnColor, handleClick, label}: SwitchButtonProps) => {
  return (
     <button type="button" aria-label={label} aria-pressed={isActive} onClick={handleClick} className={'w-4 h-4 transition-all duration-300 rounded-full text-numbers'} style={isActive ? {backgroundColor: btnColor}: {}}></button>
  )
}

export default SwitchButton