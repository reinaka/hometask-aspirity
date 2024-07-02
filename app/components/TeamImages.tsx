'use client';

import { Avatar } from './Avatar';
import { TeamMemberT } from '../../public/mockData/teamMembersData';

export const TeamImages = ({ data } : TeamMemberT[]) => {
    const membersLength = data.length;
    console.log(data);

    return (
        <div className="flex flex-row items-center gap-2 cursor-pointer">
            <ul className="flex flex-row">
                {
                    data.map((item : TeamMemberT, index : number) => {
                        if(index < 7) return (
                            <li key={item.id} className={`z-[membersLength - index] ${index !== 0 && "ml-[-15px]"}`}>
                                <Avatar avatarSrc={item.photo} size="small" className="border border-[2px] border-background-secondary"/>
                            </li>
                        )
                    })
                }
            </ul>
            {membersLength > 7 && (
                <div className="">+ {membersLength - 7}</div>
            )}
        </div>
    )
}