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
    localTime: '14:03'
}

export default currentUserData;