import Company from './Company';
import Job from './Job';
import JobSeeker from './JoobSeeker';

export default interface Comment {
    job: Job;
    sender: JobSeeker | Company;
    content: string;
}
