import React from 'react';
import { Card } from './Card';
import { Input } from './Input';
import { VehicleTypeSelect, type VehicleType } from './Button/VehicleTypeSelect';

interface VehicleInfoCardProps {
  vehicleType: VehicleType;
  onVehicleTypeChange: (type: VehicleType) => void;
  modelName: string;
  onModelNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  licensePlate: string;
  onLicensePlateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VehicleInfoCard: React.FC<VehicleInfoCardProps> = ({
  vehicleType,
  onVehicleTypeChange,
  modelName,
  onModelNameChange,
  licensePlate,
  onLicensePlateChange,
}) => {
  return (
    <div>
      <h2 className="text-[11px] font-semibold text-gray-900 mb-2">
        이륜차 정보
      </h2>
      <Card className="py-1.5 px-3 border border-gray-300 flex flex-col gap-2">
        <div>
          <label className="text-[10px] font-semibold text-gray-900 block mb-0.5">
            차종<span className="text-[#FF4D4D]">*</span>
          </label>
          <VehicleTypeSelect value={vehicleType} onChange={onVehicleTypeChange} />
        </div>

        <Input
          label="모델명"
          placeholder="예) BMW MOTORRAD"
          value={modelName}
          onChange={onModelNameChange}
          className="border border-gray-200 text-xs"
        />

        <Input
          label="차량 번호"
          placeholder="예) 12가 345"
          value={licensePlate}
          onChange={onLicensePlateChange}
          className="border border-gray-200 text-xs mb-1"
        />
      </Card>
    </div>
  );
};

export default VehicleInfoCard;