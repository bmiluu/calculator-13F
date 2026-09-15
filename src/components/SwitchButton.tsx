interface SwitchButtonProps {
  isActive: boolean;
  btnColor: string;
  handleClick?: () => void;
}

const SwitchButton = ({isActive, btnColor, handleClick}: SwitchButtonProps) => {
  return (
     <button onClick={handleClick} className={'w-4 h-4 transition-all duration-300 rounded-full text-numbers'} style={isActive ? {backgroundColor: btnColor}: {}}></button>
  )
}

export default SwitchButton