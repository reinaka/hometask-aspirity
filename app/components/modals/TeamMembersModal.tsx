import React from 'react';
import { TeamMemberT } from '../../../public/mockData/teamMembersData';
import { Avatar } from '../Avatar';
import { ScrollArea } from '../UI/Scroll';
import {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogClose,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '../UI/Modal';

type TeamMembersModalPropsT = {
    children: React.ReactNode;
    data: TeamMemberT[];
}

export const TeamMembersModal = ({children, data} : TeamMembersModalPropsT) => {
    return (
        <Dialog>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogOverlay>
                <DialogContent className="max-h-dvh h-[700px] w-[650px] max-w-[calc(100vw-16px)]">
                    <DialogHeader className="flex flex-row justify-between items-center">
                        <DialogTitle>Команда</DialogTitle>
                        <DialogClose className="w-6 h-6 flex justify-center items-center">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311 13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill="#B0B1B6"/>
                            </svg>
                            <span className="sr-only">Close</span>
                        </DialogClose>
                    </DialogHeader>
                    <ScrollArea>
                        <ul className="flex flex-col gap-4 max-h-[560px]">
                            {data.map(item => (
                                <li key={item.id} className="flex flex-row gap-2 cursor-pointer hover:text-blue-light">
                                    <Avatar avatarSrc={item.photo} size="small"/>
                                    <div className="flex flex-col">
                                        <p>{item.name}</p>
                                        <p className="text-sm text-txt-secondary">{item.role}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
};