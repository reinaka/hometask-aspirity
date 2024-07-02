import { Avatar } from './Avatar';
import { InfoBlock } from './InfoBlock';
import { UserPropsT } from '@/public/mockData/currentUserData';

export const UserBanner = (
    { userName, avatarSrc, userRole, userLocation, localTime, children } : UserPropsT & {children?: React.ReactNode}
) => {
    return (
        <InfoBlock className="px-10 pt-10 pb-5">
            <div className="flex flex-col">
                <div className="flex flex-row gap-12 items-center">
                    <Avatar avatarSrc={avatarSrc}/>
                    <h1 className="font-bold text-5xl max-w-[398px] flex flex-col">
                        <span>{userName.lastName}</span>
                        <span>{userName.firstName}</span>
                    </h1>
                </div>
            </div>
            <div className="ml-[208px] text-base font-normal flex flex-col gap-4">
                <p>{userRole}</p>
                <p>
                    {userLocation}
                    <span className="before:content-['•'] before:px-2 text-txt-tertiary">{localTime}</span>
                </p>
            </div>
            {children}
        </InfoBlock>
    )
};