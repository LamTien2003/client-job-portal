const BtnBot = ({ toggleOpen }: { toggleOpen?: () => void }) => {
    return (
        <div className="flex gap-2 justify-end">
            <button
                onClick={toggleOpen}
                className="hover:bg-blue-gray-100 py-2 px-6 rounded-md font-medium text-content-text"
            >
                Huỷ
            </button>
            <button type="submit" className="bg-primary-100 py-2 px-6 text-white  font-semibold rounded-md">
                Lưu
            </button>
        </div>
    );
};

export default BtnBot;
