'use client';

import { InfoBlock } from '../InfoBlock';
import { Formik } from 'formik';
import { FormContent } from './FormContent';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '../modals/Modal';

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
            <Dialog>
                <div className="flex flex-row justify-between mb-8">
                    <h2 className="blockTitle">Персональная информация</h2>
                    <DialogTrigger>
                        <div className="text-txt-tertiary text-[14px] hover:text-accent">Изменить</div>
                    </DialogTrigger>
                </div>
                <DialogContent title="Персональная информация" className="w-[90%] md:w-[824px] max-h-[700px]">
                <Formik
                    initialValues={initialValues} 
                    onSubmit={() => alert('К сожалению, форма сырая, ее нужно дорабатывать. Приношу извинения за временные неудобства')}
                >
                    {({ values }) => (
                        <FormContent disabled={false} />
                    )}
                </Formik>
                </DialogContent>
            </Dialog>
            <Formik
                initialValues={initialValues} 
                onSubmit={() => console.log('form submit')}
            >
            {({ values }) => (
                <FormContent disabled={true} />
            )}
            </Formik>
        </InfoBlock>  
    )
}