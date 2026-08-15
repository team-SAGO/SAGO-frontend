import React from 'react';

export type ChecklistItem = {
  id: string;
  text: string;
  checked: boolean;
};

export type ChecklistSectionData = {
  title: string;
  items: ChecklistItem[];
};

export interface ChecklistCardProps {
  sections: ChecklistSectionData[];
  onToggle: (sectionIndex: number, itemId: string) => void;
}

export const ChecklistCard: React.FC<ChecklistCardProps> = ({ sections, onToggle }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {sections.map((section, sIndex) => (
        <div
          key={sIndex}
          className="w-full bg-white border border-gray-300 rounded-lg p-4 flex flex-col gap-2.5 box-border"
        >
          {/* 섹션 제목 */}
          <span className="text-xs font-bold text-gray-900">
            {section.title}
          </span>

          {/* 체크리스트 항목들 */}
          <div className="flex flex-col gap-1.5">
            {section.items.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => onToggle(sIndex, item.id)}
                  className={`w-full h-10 border-[1px] ${
                    item.checked ? 'border-[#26EAFA] bg-[#F0FBFC]' : 'border-gray-300 bg-white'
                  } rounded-md flex items-center px-3 gap-2.5 cursor-pointer box-border`}
                >
                  {/* 커스텀 체크박스 아이콘 박스 */}
                  <div
                    className={`w-4 h-4 border-[1px] ${
                      item.checked ? 'border-[#00D1E0] bg-[#26EAFA]' : 'border-gray-300 bg-white'
                    } rounded flex items-center justify-center box-border`}
                  >
                    {item.checked && (
                      <span className="text-white text-[10px] font-extrabold leading-none">
                        ✓
                      </span>
                    )}
                  </div>
                  {/* 텍스트 */}
                  <span
                    className={`text-xs ${
                      item.checked ? 'font-semibold text-gray-700' : 'font-normal text-gray-500'
                    }`}
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChecklistCard;