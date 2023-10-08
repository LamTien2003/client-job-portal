import { Field } from 'formik';
import { useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { TiDelete } from 'react-icons/ti';

const FieldImages = () => {
    const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
    const handleFiles = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const files = Array.from(event.target.files || []);
        const selectedImages: string[] = files.map((file) => URL.createObjectURL(file));

        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...selectedImages]);
    };

    const handleClearFile = (index: number) => {
        const updatedFiles = [...selectedFiles];
        updatedFiles.splice(index, 1); // Xóa tệp cụ thể khỏi danh sách

        setSelectedFiles(updatedFiles);
    };
    const handleClearFiles = (): void => {
        setSelectedFiles([]); // Xóa danh sách các tệp đã chọn
    };

    return (
        <div className="mt-7 flex flex-col gap-2">
            <h5 className="text-[15px] font-medium text-content-text">Photos Job*</h5>

            <div className="flex flex-col gap-10 justify-center items-center w-full">
                <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center px-16 py-3 border-2 border-primary-100 border-dashed rounded-lg cursor-pointer bg-primary-200  hover:bg-gray-100 "
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-3xl text-gray-500 dark:text-gray-400">
                            <AiOutlineCloudUpload />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click the files</span>
                        </p>
                    </div>
                    <Field name="photosJob" id="file" type="file" multiple className="hidden" onChange={handleFiles} />
                </label>
                {selectedFiles.length > 0 && (
                    <>
                        <div className="grid grid-cols-6 items-center gap-5  object-cover mb:grid-cols-2 tb:grid-cols-4">
                            {selectedFiles.map((image, index) => (
                                <div key={index} className="relative">
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Selected Image ${index}`}
                                        className="h-36 w-36  object-cover rounded-md"
                                    />
                                    <div
                                        className="absolute right-1 top-1 text-red-600 font-bold cursor-pointer text-2xl hover:text-red-800"
                                        onClick={() => handleClearFile(index)}
                                    >
                                        <TiDelete />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            onClick={handleClearFiles}
                            className="mt-2 text-sm font-semibold text-white rounded-md uppercase py-2 px-4 bg-red-600 hover:bg-red-800 duration-300"
                        >
                            Clear all files
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FieldImages;
