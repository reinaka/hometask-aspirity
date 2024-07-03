'use client';

import { InfoBlock } from './InfoBlock';
import { Formik } from 'formik';
import { FormContent } from './personal-data/FormContent';

export type PersonalInfoPropsT = {
    className?: string
}

const initialValues = {
    firstName: 'Иван',
    lastName: 'Иванов'
};

export const PersonalInfo = ( { className } : PersonalInfoPropsT) => {
    return (
        <InfoBlock className={`p-[30px] lg:max-w-[820px] lg:w-[55%] ${className || ''}`}>
            <div className="flex flex-row justify-between mb-8">
                <h2 className="blockTitle">Персональная информация</h2>
                <button className="text-txt-tertiary text-[14px] hover:text-accent">Изменить</button>
            </div>
            <Formik
                initialValues={initialValues} 
                onSubmit={() => console.log('submit: ')}
            >
            {({ values }) => (
                <FormContent disabled={true} />
            )}
            </Formik>
        </InfoBlock>  
    )
}