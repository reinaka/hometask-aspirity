import { InfoBlock } from '../InfoBlock';
import { UserPropsT } from '../../../public/mockData/currentUserData';
import { SectionBlock } from './SectionBlock';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { teamMembersData } from '../../../public/mockData/teamMembersData';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '../modals/Modal';
import { TeamMembersModal } from '../modals/TeamMembersModal';

export type EmployeeDataPropsT = Pick<UserPropsT, 'project' | 'startDate' | 'endDate'> & {
    className?: string
}

export const EmployeeData = ({ className, project, startDate, endDate } : EmployeeDataPropsT) => {
    const membersLength = teamMembersData.length;

    return (
        <InfoBlock className="p-[30px] flex flex-col gap-10">
            <div className="flex flex-row justify-between items-center">
                <h2 className="blockTitle">Загрузка сотрудника</h2>
                <p className="text-[14px] text-red-dim">100%</p>
            </div>
            <div className="flex flex-wrap gap-y-10">
                <SectionBlock
                    title='Название проекта'
                    className="w-1/2 "
                >
                    <p>{project.title}</p>
                </SectionBlock>

                <SectionBlock
                    title='Тип проекта'
                    className="w-1/2 "
                >
                    <p>{project.type}</p>
                </SectionBlock>

                <SectionBlock
                    title='Ответственный'
                    className="w-1/2 "
                >
                    <div className="flex flex-row items-center gap-2">
                        <Avatar 
                            avatarSrc='/userPhotos/Kuznetsova.jpg'
                            size="small"
                        />
                        <p>{project.manager}</p>
                    </div>
                </SectionBlock>

                <SectionBlock
                    title='Команда'
                    className="w-1/2 "
                >
                {membersLength && (
                    <Dialog>
                        <DialogTrigger>
                            <div className="flex flex-row items-center gap-2 cursor-pointer">
                                <ul className="flex flex-row">
                                    {
                                        teamMembersData.map((item, index) => {
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
                        </DialogTrigger>
                        <DialogContent title="Команда" className="w-[360px] xs:w-[500px] sm:w-[700px] max-h-[700px]">
                            <TeamMembersModal />
                        </DialogContent>
                    </Dialog>
                )}
                </SectionBlock>

                <SectionBlock
                    title='Сроки работы'
                    className="w-1/2 "
                >
                    <div className="flex flex-row gap-2">
                        <span>{startDate}</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071C12.9024 18.3166 12.9024 17.6834 13.2929 17.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L13.2929 6.70711C12.9024 6.31658 12.9024 5.68342 13.2929 5.29289Z" fill="#0047BB"/>
                        </svg>
                        <span>{endDate}</span>
                    </div>
                </SectionBlock>
            </div>
            <Button text="Посмотреть всю загрузку" />
        </InfoBlock>
    )
}