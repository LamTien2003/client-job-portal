import { Dialog, DialogHeader, DialogBody } from '@material-tailwind/react';
import BtnBot from '../../../components/BtnBot';
import { useState } from 'react';
import { useChangeMeMutation } from '@/services/jobseekerApiSlice';
interface FormIntro {
    handleOpen: () => void;
    open: boolean;
}
const Form = ({ handleOpen, open }: FormIntro) => {
    const [introduce, setIntroduce] = useState<string>('');
    const [changeIntroduce, { isLoading }] = useChangeMeMutation();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (introduce) {
                const data: any = {
                    introduce: introduce.trim(),
                };
                console.log(data);

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
            <Dialog size="lg" open={open} handler={handleOpen}>
                <DialogHeader>Giới thiệu bản thân</DialogHeader>
                <DialogBody divider>
                    <div className="flex gap-2 mb-5 text-lg">
                        <div className="text-primary-100 font-title">Tip:</div>
                        <p className="text-content-text">
                            Tóm tắt kinh nghiệm chuyên môn, chú ý làm nổi bật các kỹ năng và điểm mạnh.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            disabled={isLoading}
                            className="border-primary-100 border-2 outline-none w-full p-3 rounded-xl"
                            name="introduce"
                            id="introduce"
                            value={introduce}
                            onChange={(e) => setIntroduce(e.target.value)}
                            cols={30}
                            rows={5}
                        ></textarea>
                        <BtnBot isLoading={isLoading} toggleOpen={handleOpen} />
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default Form;
