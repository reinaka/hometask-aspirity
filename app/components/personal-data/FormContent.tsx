import { FormField } from './FormField';
import { Form } from 'formik';

export type FormContentPropsT = {
    disabled: boolean
}

export const FormContent = ({ disabled } : FormContentPropsT) => {
    return (
        <Form className="flex flex-wrap justify-between gap-y-6">
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
                disabled={disabled}

            />
            <FormField 
                labelText="Дата трудоустройства"
                name="employmentStart"
                type="date"
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
        </Form>
    )
}