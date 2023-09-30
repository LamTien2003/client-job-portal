import JobSeeker from '@/types/JoobSeeker';

export const isJobSeeker = (user: any): user is JobSeeker => {
    return (
        user !== null &&
        user?.type === 'jobseeker' &&
        user?.projects &&
        user?.experiences &&
        user?.certificate &&
        user?.educate &&
        user?.skills
    );
};

export const buildQueryString = (queryStringObj: any) => {
    return Object.entries(queryStringObj)
        .map(([key, value]) => {
            return `${key}=${JSON.stringify(value)}`;
        })
        .join('&');
};
