import { useEffect, useLayoutEffect, useState } from 'react';

import Banner from '@/components/Banner/Banner';
import CompanyColumn from './components/CompanyColumn/CompanyColumn';
import CompanyGutter from './components/CompanyGutter/CompanyGutter';
import Category from './components/Category/Category';
import Company from '@/types/Company';
import { useGetCompaniesQuery } from '@/services/companiesApiSlice';
import Sidebar from './components/Sidebar/Sidebar';
import { ListColumn, ListGutter } from '@/components/Icons';
import Loader from '@/components/Loader/Loader';

function CompanyListing() {
    const [listStyle, setListStyle] = useState('column');
    const [companies, setCompanies] = useState<Company[]>([])
    const [companyList, setCompanyList] = useState<Company[]>([])

    const { data, isLoading, isError } = useGetCompaniesQuery({
    });

    const countCompanies = companyList.length

    const filterJob = (id:string) => {
        const companyFilter = companies?.filter(company => {
            // return company.jobList.type.id === id
        })
        // setCompanyList(companyFilter)
    }

    useEffect(() => {
        if(!isLoading && !isError && data?.data?.data) {
            setCompanies(data?.data?.data)
            setCompanyList(data?.data?.data)
        }
    }, [data?.data?.data, isLoading, isError])

    useLayoutEffect(() => {
        scrollTo(0,0)
    }, [])

    return (
        <>
            {isLoading && <Loader/>}
            <div className="selection:bg-primary-100 selection:text-white">
                <Banner page="Company Listing" />

                <div className=" max-w-7xl ml-auto mr-auto pt-28 flex justify-between xl:ml-7 xl:mr-7 xl:max-w-7xl lg:max-w-4xl lg:flex-col lg:ml-auto lg:mr-auto tb:flex-col tb:max-w-3xl mb:flex-col mb:max-w-2xl">
                    {/* job sidebar */}
                    
                        <Sidebar filterJob={filterJob} />

                    {/* list */}
                    <div className=" w-3/4 ml-3 mr-3 flex flex-col xl:ml-auto xl:mr-auto lg:pr-0 lg:w-10/12 lg:mx-auto tb:w-11/12 mb:w-11/12 mb:mx-auto">
                        <div className=" mb-6 pl-3 pr-3 flex justify-between lg:flex-col">
                            <p className="text-content-text font-medium pt-2 pb-2">Hiện có <span className=' text-primary-100 font-semibold'>{countCompanies}</span> công ty</p>
                            <div>
                                <button className=" mr-5 ml-7" onClick={() => setListStyle('gutter')}>
                                    <ListGutter color={listStyle} />
                                </button>
                                <button onClick={() => setListStyle('column')}>
                                    <ListColumn color={listStyle} />
                                </button>
                            </div>
                        </div>
                        <div>
                            {/* item */}
                            {isLoading && 'Loading...'} 
                            {!isLoading && !isError && companyList && listStyle === 'column' && <CompanyColumn data={companyList} />}
                            {!isLoading && !isError && companyList && listStyle === 'gutter' && <CompanyGutter data={companyList} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompanyListing;
