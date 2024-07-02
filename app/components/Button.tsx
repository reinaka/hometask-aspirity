export type ButtonPropsT = {
    text: string,
}

export const Button = ({ text } : ButtonPropsT ) => {
    return (
        <button className="uppercase py-[10px] bg-accent rounded text-sm hover:bg-accent-deep">
            {text}
        </button>
    )
}