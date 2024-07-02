import { Avatar } from './Avatar';
import { InfoBlock } from './InfoBlock';
import { UserPropsT } from '@/public/mockData/currentUserData';

export type UserBannerPropsT = Pick<UserPropsT, 'userName' | 'avatarSrc' | 'userRole' | 'userLocation'| 'localTime'> 
    & {children?: React.ReactNode};

export const UserBanner = (
    { userName, avatarSrc, userRole, userLocation, localTime, children } : UserBannerPropsT) => {
    return (
        <InfoBlock className="px-4 sm:px-10 pt-10 pb-5">
            <div className="flex flex-col mb-6 sm:mb-0">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 items-center">
                    <Avatar avatarSrc={avatarSrc} size="big"/>
                    <h1 className="font-bold text-2xl sm:text-5xl max-w-[398px] flex flex-col">
                        <span className="text-center sm:text-left">{userName.lastName}</span>
                        <span>{userName.firstName}</span>
                    </h1>
                </div>
            </div>
            <div className="sm:ml-[208px] text-base font-normal flex flex-col gap-4 text-center sm:text-left">
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