import Image from 'next/image';

type SizeMapT = {
    [key in 'big' | 'small']: number;
};

const sizeMap: SizeMapT = {
    big: 160,
    small: 48,
    mini: 24
};

export type AvatarPropsT = {
    avatarSrc: string,
    size: 'big' | 'small' | 'mini',
    className?: string
};

export const Avatar = ({ avatarSrc, size, className } : AvatarPropsT) => {
    return (
        <div>
            <Image 
                width={sizeMap[size] ?? 48}
                height={sizeMap[size] ?? 48}
                alt="User photo"
                src={avatarSrc}
                className={`rounded-full ${className || ''}`}
            />
        </div>
    )
};