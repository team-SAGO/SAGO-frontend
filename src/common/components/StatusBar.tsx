import battery from '@/assets/network-error/battery.svg'
import cellular from '@/assets/network-error/cellular.svg'
import statusWifi from '@/assets/network-error/wifi-status.svg'

export function StatusBar() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 z-30 h-[7.323%] text-black">
      <span className="absolute left-[14.925%] top-[37.5%] -translate-x-1/2 text-[clamp(15px,4.23cqw,17px)] font-bold leading-none tracking-[-0.4px]">
        9:41
      </span>

      <div className="absolute left-1/2 top-[21.875%] h-[57.813%] w-[31.095%] -translate-x-1/2 rounded-[999px] bg-black" />

      <div className="absolute right-[8.706%] top-[40.625%] flex items-center gap-[1.824cqw]">
        <img className="h-auto w-[4.808cqw]" src={cellular} alt="" />
        <img className="h-auto w-[4.145cqw]" src={statusWifi} alt="" />
        <img className="h-auto w-[6.799cqw]" src={battery} alt="" />
      </div>
    </div>
  )
}

export default StatusBar