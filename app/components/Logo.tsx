import Image from 'next/image';

type SizeT = {
    w: number,
    h: number,
}

type SizeMapT = {
    [key in 'big' | 'small']: SizeT;
};

const sizeMap: SizeMapT = {
    big: {
        w: 180,
        h: 40,
    },
    small: {
        w: 135,
        h: 30,
    },
};

export type LogoPropsT = {
    size: 'big' | 'small',
    className?: string
};

export const Logo = ({ size, className } : LogoPropsT) => {
    return (
        <div>
            <Image 
                width={sizeMap[size].w ?? 135}
                height={sizeMap[size].h ?? 30}
                alt="Logo"
                src='/logo.png'
                className={`${className || ''}`}
            />
        </div>
    )
};