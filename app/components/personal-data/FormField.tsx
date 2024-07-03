import { Field } from 'formik';

export type FormFieldPropsT = {
    labelText: string, 
    type: string, 
    placeholder?: string, 
    name: string,
    disabled?: boolean,
    fullSize?: boolean
};

export const FormField = ({ labelText, type, placeholder, name, disabled, fullSize } : FormFieldPropsT) => {
    return (
        <div className={`relative text-txt-secondary w-full ${fullSize ? 'lg:w-full' : 'sm:w-[48%]'}`}>
            <label 
                className="absolute top-0 left-2 px-1 bg-background-secondary text-xs translate-y-[-50%]"
            >
                <span>{labelText}</span>
            </label>
            <Field type={type} name={name} placeholder={placeholder} disabled={disabled || false}
                className="bg-background-secondary px-2 py-[14px] border border-border-primary rounded w-full text-sm"
            />
        </div>
    )
}   