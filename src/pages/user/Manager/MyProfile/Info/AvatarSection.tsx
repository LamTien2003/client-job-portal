import { Field } from 'formik';
import { AiOutlineCamera } from 'react-icons/ai';
import { MdDeleteOutline } from 'react-icons/md';

const AvatarSection = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-GDKkHvxjQRbCDwugCcZpfq6qcBtOORwMMA&usqp=CAU"
                alt="avt"
                className="w-32 h-32 rounded-full"
            />
            <div className="flex gap-6">
                <div>
                    <label
                        htmlFor="image"
                        className="flex gap-2 items-center justify-center font-medium cursor-pointer text-primary-100"
                    >
                        <div className="text-xl">
                            <AiOutlineCamera />
                        </div>
                        Sửa
                    </label>
                    <input name="image" id="image" className="hidden" type="file" />
                </div>

                <button className="flex items-center hover:text-primary-100">
                    <span className="text-xl">
                        <MdDeleteOutline />
                    </span>
                    Xoá
                </button>
            </div>
        </div>
    );
};

export default AvatarSection;
