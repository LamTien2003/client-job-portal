import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import BtnBot from '../../../components/BtnBot';
import { useState } from 'react';
import { useJobseekerChangeMeMutation } from '@/services/jobseekerApiSlice';
import { MdTipsAndUpdates } from 'react-icons/md';
interface FormIntro {
    handleOpen: () => void;
    open: boolean;
}
const Form = ({ handleOpen, open }: FormIntro) => {
    const [introduce, setIntroduce] = useState<string>('');
    const [changeIntroduce, { isLoading }] = useJobseekerChangeMeMutation();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (introduce) {
                const data: any = {
                    introduce: introduce.trim(),
                };

                await changeIntroduce(data);
                setIntroduce('');
                handleOpen();
            }
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <Dialog className="rounded-sm" size="lg" open={open} handler={handleOpen}>
                <DialogHeader className="px-8 bg-primary-200 text-3xl font-family-title">
                    Giới thiệu bản thân
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <DialogBody divider className="p-8">
                        <div className="flex gap-2 mb-5 text-lg">
                            <div className="flex items-center gap-2 text-primary-100 font-title">
                                <div className="text-2xl">
                                    <MdTipsAndUpdates />
                                </div>
                                Mẹo:
                            </div>
                            <p className="text-content-text font-normal">
                                Tóm tắt kinh nghiệm chuyên môn, chú ý làm nổi bật các kỹ năng và điểm mạnh.
                            </p>
                        </div>
                        <textarea
                            disabled={isLoading}
                            className="border-primary-100 border-2 outline-none w-full p-3 rounded-md"
                            name="introduce"
                            id="introduce"
                            value={introduce}
                            onChange={(e) => setIntroduce(e.target.value)}
                            cols={30}
                            rows={5}
                        ></textarea>

                        <div className="text-content-text font-semibold">0/2500 Kí tự</div>
                    </DialogBody>
                    <DialogFooter className="px-8">
                        <BtnBot isLoading={isLoading} toggleOpen={handleOpen} />
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
};

export default Form;
