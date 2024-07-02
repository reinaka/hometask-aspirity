import { teamMembersData } from '../../../public/mockData/teamMembersData';
import { Avatar } from '../Avatar';
import { ScrollArea } from '../Scroll';

export const TeamMembersModal = () => {
    const dataLength = teamMembersData.length;

    return dataLength ?
    (<ScrollArea>
        <ul className="flex flex-col gap-4 max-h-[560px]">
            {teamMembersData.map(item => (
                <li key={item.id} className="flex flex-row gap-2 cursor-pointer hover:text-blue-light">
                    <Avatar avatarSrc={item.photo} size="small"/>
                    <div className="flex flex-col">
                        <p>{item.name}</p>
                        <p className="text-sm text-txt-secondary">{item.role}</p>
                    </div>
                </li>
            ))}
        </ul>
    </ScrollArea>)
    : <div className="flex justify-center mb-10">
        <p className="text-txt-tertiary">Здесь пока никого нет</p>
    </div>
};