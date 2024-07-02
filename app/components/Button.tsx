export type ButtonPropsT = {
    text: string,
    className?: string
}

export const Button = ({ text, className } : ButtonPropsT ) => {
    return (
        <button className={`uppercase py-[10px] bg-accent rounded text-sm hover:bg-accent-deep mx-auto w-full ${className || ''}`}>
            {text}
        </button>
    )
}