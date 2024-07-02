import { InfoBlock } from './InfoBlock';

export type PersonalInfoPropsT = {
    className?: string
}

export const PersonalInfo = ( { className } : PersonalInfoPropsT) => {
    return (
        <InfoBlock className={`p-[30px] lg:max-w-[820px] lg:w-[55%] ${className || ''}`}>
            <div className="flex flex-row justify-between">
                <h2 className="blockTitle">Персональная информация</h2>
                <button className="text-txt-tertiary text-[14px] hover:text-accent">Изменить</button>
            </div>
        </InfoBlock>  
    )
}