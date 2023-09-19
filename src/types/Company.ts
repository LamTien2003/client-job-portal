import Job from './Job';
import User from './User';

export default interface Company extends User {
    companyName: string;
    description: string;
    establishDate: Date;
    website: string;
    jobList: Job[];
}
