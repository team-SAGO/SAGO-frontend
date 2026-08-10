import { useState } from 'react'
import bicycle from '../assets/other-information/bicycle.svg'
import motorcycle from '../assets/other-information/motorcycle.svg'
import otherVehicle from '../assets/other-information/other.svg'
import scooter from '../assets/other-information/scooter.svg'
import BackButton from '../components/BackButton'
import StatusBar from '../components/StatusBar'

const vehicleTypes = [
  { icon: motorcycle, label: '오토바이' },
  { icon: scooter, label: '스쿠터' },
  { icon: bicycle, label: '자전거' },
  { icon: otherVehicle, label: '기타' },
]

type InformationFieldProps = {
  label: string
  placeholder: string
  top: string
}

function InformationField({ label, placeholder, top }: InformationFieldProps) {
  return (
    <label className="absolute left-[2.736cqw] block w-[78.109cqw]" style={{ top }}>
      <span className="block text-[clamp(9px,2.488cqw,10px)] font-semibold leading-[16px] tracking-[0.5px] text-black">
        {label}
      </span>
      <input
        className="mt-[0.498cqw] h-[6.716cqw] w-full rounded-[6px] border border-[#e3e5e5] bg-white px-[3.98cqw] text-[clamp(9px,2.488cqw,10px)] font-normal leading-[16px] text-[#201f21] outline-none placeholder:text-[#72777a] focus:border-[#31f5ff]"
        placeholder={placeholder}
      />
    </label>
  )
}

function OtherInformationPage() {
  const [selectedVehicle, setSelectedVehicle] = useState('오토바이')

  return (
    <main className="flex min-h-[100svh] items-start justify-center overflow-hidden bg-[#f2f2f3] sm:items-center">
      <section className="sago-screen plain-screen shrink-0" aria-labelledby="other-information-title">
        <StatusBar />
        <BackButton to="/profile" />

        <h1
          id="other-information-title"
          className="absolute inset-x-0 top-[10.755%] -translate-y-1/2 text-center text-[clamp(18px,4.975cqw,20px)] font-semibold leading-normal text-[#201f21]"
        >
          기타 정보 수정
        </h1>

        <form onSubmit={(event) => event.preventDefault()}>
          <fieldset className="m-0 border-0 p-0">
            <legend className="absolute left-[8.458%] top-[14.874%] text-[clamp(12px,3.483cqw,14px)] font-semibold leading-normal text-black">
              이륜차 정보
            </legend>

            <div className="absolute left-[8.458%] top-[18.535%] h-[20.366%] w-[83.333%] rounded-[10px] border-[0.5px] border-[#868a91] bg-white">
              <span className="absolute left-[2.736cqw] top-[2.736cqw] text-[clamp(9px,2.488cqw,10px)] font-semibold leading-[16px] tracking-[0.5px] text-black">
                차종*
              </span>

              <div className="absolute left-[2.736cqw] top-[7.214cqw] flex gap-[1.99cqw]">
                {vehicleTypes.map(({ icon, label }) => {
                  const isSelected = selectedVehicle === label

                  return (
                    <button
                      key={label}
                      type="button"
                      aria-pressed={isSelected}
                      className={`flex h-[5.97cqw] w-[17.91cqw] items-center rounded-full border-[0.5px] px-[0.995cqw] text-[clamp(10px,2.736cqw,11px)] font-medium leading-[16px] ${
                        isSelected
                          ? 'border-[#31f5ff] bg-[#e4fdff] text-[#00d3ea]'
                          : 'border-[#cecfd1] bg-white text-[#cecfd1]'
                      }`}
                      onClick={() => setSelectedVehicle(label)}
                    >
                      <img className="h-[4.478cqw] w-[4.478cqw] shrink-0" src={icon} alt="" />
                      <span className="min-w-0 flex-1 text-center">{label}</span>
                    </button>
                  )
                })}
              </div>

              <InformationField label="모델명" placeholder="예) BMW MOTORRAD" top="15.174cqw" />
              <InformationField label="차량 번호" placeholder="예) 12가 345" top="28.358cqw" />
            </div>
          </fieldset>

          <fieldset className="m-0 border-0 p-0">
            <legend className="absolute left-[8.955%] top-[41.876%] text-[clamp(12px,3.483cqw,14px)] font-semibold leading-normal text-black">
              보험사 정보
            </legend>

            <div className="absolute left-[8.955%] top-[45.309%] h-[26.43%] w-[83.333%] rounded-[10px] border-[0.5px] border-[#868a91] bg-white">
              <InformationField label="계약자명" placeholder="OOO" top="2.736cqw" />
              <InformationField label="보험사" placeholder="보험사를 입력하세요." top="15.92cqw" />
              <InformationField label="보험 증권 번호" placeholder="보험 증권 번호를 입력하세요." top="29.104cqw" />
              <InformationField label="보험사 번호" placeholder="보험사 번호를 입력하세요." top="42.289cqw" />
            </div>
          </fieldset>

          <button
            type="submit"
            className="absolute left-1/2 top-[88.787%] flex h-[9.701cqw] w-[84.826%] -translate-x-1/2 items-center justify-center rounded-[6px] bg-[#69ffc0] text-[clamp(13px,3.483cqw,14px)] font-bold leading-[30px] tracking-[-0.28px] text-[#2b2e36]"
          >
            저장
          </button>
        </form>
      </section>
    </main>
  )
}

export default OtherInformationPage
