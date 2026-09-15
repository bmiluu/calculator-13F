import ThreeStateSwitch from "./ThreeStateSwitch"

const Header = () => {
    return (
        <div className="modeBox flex items-center justify-between w-full font-spartan">
            <span className="text-3x1 pt-2">calc</span>
            <div className='flex items-center gap-5'>
                <span className='text-xs flex h-full pt-6 items-end' style={{}}>THEME</span>
                <ThreeStateSwitch />
            </div>
        </div>
    )
}

export default Header