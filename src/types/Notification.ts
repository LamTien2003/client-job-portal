import Company from './Company';
import JobSeeker from './JoobSeeker';

export default interface Notification {
    id: string;
    sender: Company | JobSeeker;
    receiver: Company | JobSeeker;
    type: 'job' | 'user';
    entityId: string;
    isSeen: boolean;
    content?: string;
    createdAt: string;
    updatedAt: string;
}
