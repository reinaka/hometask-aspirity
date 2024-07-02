export type SectionBlockPropsT = {
    className?: string,
    title: string,
    children?: React.ReactNode
}

export const SectionBlock = ( {className, title, children} : SectionBlockPropsT) => {
    return (
        <div className={className || ''}>
            <p className="text-txt-tertiary mb-2">{title}</p>
            <div>
                {children}
            </div>
        </div>
    )
}