import { useEffect, useState } from 'react';

import Banner from '@/components/Banner/Banner';
import ListColumn from '@/components/Icons/ListColumnt';
import ListGutter from '@/components/Icons/ListGutter';
import CompanyColumn from './components/CompanyColumn/CompanyColumn';
import CompanyGutter from './components/CompanyGutter/CompanyGutter';
import Category from './components/Category/Category';
import Company from '@/types/Company';
import { useGetCompaniesQuery } from '@/services/companiesApiSlice';

function CompanyListing() {
    const [listStyle, setListStyle] = useState('column');
    const [companies, setCompanies] = useState<Company[]>([])

    const { data, isLoading, isError } = useGetCompaniesQuery({
    });

    useEffect(() => {
        if(!isLoading && !isError && data?.data?.data) {
            setCompanies(data?.data?.data)
        }
    })

    return (
        <div className="selection:bg-primary-100 selection:text-white">
            <Banner page="Company Listing" />

            <div className=" max-w-7xl ml-auto mr-auto pt-28 flex justify-between xl:ml-7 xl:mr-7 xl:max-w-7xl lg:max-w-4xl lg:flex-col lg:ml-auto lg:mr-auto tb:max-w-3xl mb:max-w-2xl">
                {/* job sidebar */}
                <div className=" w-4/12 pr-3 mr-auto ml-auto mb-8 xl:w-5/12 lg:pr-0 lg:w-10/12 mb:w-11/12">
                    <div className=" w-full bg-content-bg rounded-xl pl-5 pr-5 pt-10 pb-10">
                        <div className=" bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3 mb-5">
                            <h3 className=" text-content-title font-semibold text-xl mb-2 lg:text-lg">Job Category</h3>
                            <div className=" max-h-64 overflow-scroll">
                                <Category name="Health Care" amount={80} />
                                <Category name="Accounts & Finance" amount={80} />
                                <Category name="Transportation" amount={80} />
                                <Category name="Medical & Finance" amount={80} />
                                <Category name="Development" amount={80} />
                                <Category name="Engineering" amount={80} />
                                <Category name="Receptionist" amount={80} />
                                <Category name="Non-Profile Org" amount={80} />
                                <Category name="Non-Profile Org" amount={80} />
                                <Category name="Non-Profile Org" amount={80} />
                            </div>
                        </div>
                        <div className=" bg-white border-content-border border rounded-md pt-10 pb-10 pl-6 pr-3">
                            <h3 className=" text-content-title font-semibold text-xl mb-2 lg:text-lg">
                                Type of Emlpoyments
                            </h3>
                            <div className=" max-h-64 overflow-scroll">
                                <Category name="Health Care" amount={80} />
                                <Category name="Accounts & Finance" amount={80} />
                                <Category name="Transportation" amount={80} />
                                <Category name="Medical & Finance" amount={80} />
                                <Category name="Development" amount={80} />
                                <Category name="Engineering" amount={80} />
                                <Category name="Receptionist" amount={80} />
                                <Category name="Non-Profile Org" amount={80} />
                                <Category name="Non-Profile Org" amount={80} />
                                <Category name="Non-Profile Org" amount={80} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* list */}
                <div className=" w-2/3 ml-3 mr-3 flex flex-col xl:ml-auto xl:mr-auto lg:pr-0 lg:w-10/12 tb:w-11/12">
                    <div className=" mb-6 pl-3 pr-3 flex justify-between lg:flex-col">
                        <p className="text-content-text font-medium pt-2 pb-2">Showing results 10 in 200 jobs list</p>
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
                        {!isLoading && !isError && companies && listStyle === 'column' && <CompanyColumn data={companies} />}
                        {!isLoading && !isError && companies && listStyle === 'gutter' && <CompanyGutter data={companies} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyListing;
