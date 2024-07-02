export type UserPropsT = {
    userName: {
        lastName: string,
        firstName: string
    }
    avatarSrc: string,
    userRole: string,
    userLocation: string,
    workLoad: number,
    localTime: string,
    project: {
        title: string,
        type: string,
        manager: string
    },
    startDate: string,
    endDate: string
};

const currentUserData = {
    userName: {
        lastName: 'Иванов',
        firstName: 'Иван Иванович'
    },
    avatarSrc: '/userPhotos/Ivanov.jpg',
    userRole: 'UI/UX designer',
    userLocation: 'Россия, Красноярск',
    workLoad: 100,
    localTime: '14:03',
    project: {
        title: 'MedPoint 24',
        type: 'Коммерческий',
        manager: 'Анна Кузнецова'
    },
    startDate: '03 марта 2023',
    endDate: '23 марта 2023'
}

export default currentUserData;