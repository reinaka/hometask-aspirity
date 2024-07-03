import { FormField } from './FormField';
import { Form } from 'formik';
import { Button } from '../Button';

export type FormContentPropsT = {
    disabled: boolean
}

export const FormContent = ({ disabled } : FormContentPropsT) => {
    return (
        <Form className="flex flex-col gap-6 sm:gap-10">
            <div className="flex flex-wrap justify-between gap-y-4 sm:gap-y-6">
                <FormField 
                    labelText="Имя"
                    name="firstName"
                    type="text"
                    placeholder="Иван"
                    disabled={disabled}
                />
                <FormField 
                    labelText="Фамилия"
                    name="lasttName"
                    type="text"
                    placeholder="Иванов"
                    disabled={disabled}
                />
                <FormField 
                    labelText="Отчество"
                    name="surName"
                    type="text"
                    placeholder="Иванович"
                    fullSize={true}
                    disabled={disabled}
                />
                <FormField 
                    labelText="Дата рождения"
                    name="birthDate"
                    type="date"
                    placeholder="31.12.1921"
                    disabled={disabled}

                />
                <FormField 
                    labelText="Дата трудоустройства"
                    name="employmentStart"
                    type="date"
                    placeholder="31.12.1951"
                    disabled={disabled}
                />
                <FormField 
                    labelText="Страна"
                    name="country"
                    type="text"
                    placeholder="Иванович"
                    disabled={disabled}
                />
                <FormField 
                    labelText="Город"
                    name="city"
                    type="text"
                    placeholder="Красноярск"
                    disabled={disabled}
                />
                <FormField 
                    labelText="Должность"
                    name="role"
                    type="text"
                    placeholder="UI/UX designer"
                    disabled={disabled}
                />
                <FormField 
                    labelText="Электронная почта"
                    name="email"
                    type="email"
                    placeholder="test@gmail.com"
                    disabled={disabled}
                />
            </div>
            {!disabled && <Button text="Сохранить"/>}
        </Form>
    )
}