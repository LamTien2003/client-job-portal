import Notification from './Notification';

export default interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: 'male' | 'female';
    photo: string;
    location: string;
    follows: User[];
    followers: User[];
    role: 'user' | 'admin';
    ban: boolean;
    notifications: Notification[];
    type: 'jobseeker' | 'company';
}
