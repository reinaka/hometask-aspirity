import Image from 'next/image';

export type AvatarPropsT = {
    avatarSrc: string
};

export const Avatar = ({ avatarSrc } : AvatarPropsT) => {
    return (
        <div>
            <Image 
                width={160}
                height={160}
                alt="User photo"
                src={avatarSrc}
                className="rounded-full"
            />
        </div>
    )
};