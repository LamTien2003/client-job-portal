import Card from '../../../components/Card';
import FormInfo from './Form';
import { useState, useEffect } from 'react';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { isCompany } from '@/utils/helper';
import Company from '@/types/Company';
import { formatDate } from '@/utils/date';

const InfoCompany = () => {
    const currentUser = useSelector((state: RootState) => state.user.user);

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);

    const [company, setCompany] = useState<Company>();

    useEffect(() => {
        if (isCompany(currentUser)) {
            setCompany(currentUser);
        }
    }, [currentUser]);
    const date = company?.establishDate ? formatDate(company.establishDate.toString()) : '';

    return (
        <>
            <Card handleOpen={handleOpen}>
                <div className="flex flex-col gap-4 text-content-title">
                    <h5>Tên công ty: {company?.companyName}</h5>
                    <p>Mô tả: {company?.description}</p>
                    <p>Ngày thành lập: {date}</p>
                    <p>
                        Website:{' '}
                        <a className="text-primary-100 font-medium" href={company?.website}>
                            {company?.website ? 'Xem chi tiết' : 'Công ty chưa có website'}
                        </a>
                    </p>
                </div>
            </Card>

            <FormInfo handleOpen={handleOpen} open={open} />
        </>
    );
};

export default InfoCompany;
