import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from '@material-tailwind/react';
import BtnBot from '../../components/BtnBot';
interface FormIntro {
    handleOpen: () => void;
    open: boolean;
}
const Form = ({ handleOpen, open }: FormIntro) => {
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
                    <form action="#">
                        <textarea
                            className="border-primary-100 border-2 outline-none w-full p-3 rounded-xl"
                            name="introduce"
                            id="introduce"
                            cols={30}
                            rows={5}
                        ></textarea>
                    </form>
                </DialogBody>
                <DialogFooter>
                    <BtnBot toggleOpen={handleOpen} />
                </DialogFooter>
            </Dialog>
        </>
    );
};

export default Form;
