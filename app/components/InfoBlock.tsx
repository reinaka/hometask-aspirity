export type InfoBlockPropsT = {
    children: React.ReactNode,
    className?: string
};

export const InfoBlock = ({ children, className } : InfoBlockPropsT) => {
    return (
        <div className={`rounded-xl bg-background-secondary ${className || ''}`}>
            {children}
        </div>
    )
};