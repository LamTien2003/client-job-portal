import { FaList, FaUserAlt } from 'react-icons/fa';
import Item from './Item';
import { MdWork } from 'react-icons/md';
import { BiSolidUserDetail } from 'react-icons/bi';

const Total = () => {
    return (
        <div className="flex justify-between">
            <Item icon={<FaUserAlt />} title="Người dùng" total="86" />
            <Item icon={<MdWork />} title="Đơn xin việc" total="75" />
            <Item icon={<BiSolidUserDetail />} title="Công việc" total="86" />
            <Item icon={<FaList />} title="Danh mục" total="86" />
        </div>
    );
};

export default Total;
