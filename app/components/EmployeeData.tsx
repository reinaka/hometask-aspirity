import { InfoBlock } from "./InfoBlock";
import currentUserData from '../../public/mockData/currentUserData';

export type EmployeeDataPropsT = {
    className?: string
}

export const EmployeeData = ({ className } : EmployeeDataPropsT) => {
    return (
        <InfoBlock className={`p-[30px] ${className || ''}`}>
            <div className="flex flex-row justify-between items-center">
                <h2 className="blockTitle">Загрузка сотрудника</h2>
                <p className="text-[14px] text-red-dim">100%</p>
            </div>
        </InfoBlock>
    )
}