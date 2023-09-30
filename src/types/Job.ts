import Comment from './Comment';
import Company from './Company';
import JobApplication from './JobApplication';

export default interface Job {
    id: string;
    postedBy: Company;
    title: string;
    description: string;
    photosJob: string[];
    skillsRequire: string[];
    jobRequire: string[];
    salary: number;
    type: 'Science' | 'IT' | 'Medical' | 'Copywrite';
    available: boolean;
    isDelete: boolean;
    applications?: JobApplication[];
    countApplication: number;
    comments: Comment[];
}
