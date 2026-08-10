import detailsChevron from '../assets/saved-documents/details-chevron.svg'
import documentThumbnail from '../assets/saved-documents/document-thumbnail.svg'

const savedDocumentNames = ['운전면허증', '신분증 사본', '통장 사본', '진단서', '보험금 청구서']

export function SavedDocumentCard({ title }: { title: string }) {
  return (
    <article className="relative h-[12.935cqw] w-full shrink-0 rounded-[8px] border border-[#868a91] bg-white">
      <div className="absolute left-[2.239cqw] top-[1.99cqw] flex size-[8.706cqw] items-center justify-center overflow-hidden rounded-[4px] bg-[#e4fdff]">
        <img className="size-[6.219cqw]" src={documentThumbnail} alt="" />
      </div>

      <h2 className="absolute left-[18.408cqw] top-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(14px,3.98cqw,16px)] font-semibold leading-normal text-black">
        {title}
      </h2>

      <button
        type="button"
        className="absolute right-[2.985cqw] top-1/2 flex -translate-y-1/2 items-center gap-[0.995cqw] text-[clamp(8px,2.239cqw,9px)] font-normal leading-[1.4] text-[#868a91]"
        aria-label={`${title} 자세히 보기`}
      >
        <span>자세히</span>
        <span className="flex h-[2.239cqw] w-[0.995cqw] items-center justify-center">
          <img className="h-[0.995cqw] w-[2.239cqw] rotate-90" src={detailsChevron} alt="" />
        </span>
      </button>
    </article>
  )
}

export function SavedDocumentList({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-[1.99cqw] ${className}`}>
      {savedDocumentNames.map((document) => (
        <SavedDocumentCard key={document} title={document} />
      ))}
    </div>
  )
}
