// import { url } from 'inspector';
import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { urlToHttpOptions } from 'url';
// import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import ListGutter from '@/components/Icons/ListGutter';
import ListColumn from '@/components/Icons/ListColumnt';
import Banner from '@/components/Banner/Banner';

import JobColumn from './components/JobColumn/JobColumn';
import JobGutter from './components/JobGutter/JobGutter';
import Sidebar from './components/Sidebar/Sidebar';

const JobListing = () => {
    const [listStyle, setListStyle] = useState('column')

    useEffect(() => {

    }, [])

    return (
        <div className="selection:bg-primary-100 selection:text-white">
            {/* banner */}
            <Banner page='Job Listing' />

            {/* job listing */}
            <div className=' max-w-7xl ml-auto mr-auto pt-28 flex justify-between xl:ml-7 xl:mr-7 xl:max-w-7xl lg:max-w-4xl lg:flex-col lg:ml-auto lg:mr-auto tb:max-w-3xl mb:max-w-2xl'>

                {/* job sidebar */}
                <div className=' w-4/12 pr-3 mr-auto ml-auto mb-8 xl:w-5/12 lg:pr-0 lg:w-10/12 mb:w-11/12'>
                    <div className=' w-full bg-content-bg rounded-xl pl-5 pr-5 pt-10 pb-10'>
                        <Sidebar/>
                        <button className=' w-full bg-primary-100 text-white text-base font-semibold rounded pt-3 pb-3 duration-300 cursor-pointer hover:bg-black'>Make A Job Post</button>
                    </div>
                </div>

                {/* list */}
                <div className=' w-2/3 ml-3 mr-3 flex flex-col xl:ml-auto xl:mr-auto lg:pr-0 lg:w-10/12 tb:w-11/12'>
                    <div className=' mb-6 pl-3 pr-3 flex justify-between lg:flex-col'>
                        <p className='text-content-text font-medium pt-2 pb-2'>Showing results 10 in 200 jobs list</p>
                        <div>
                            <button className=' mr-5 ml-7' onClick={() => setListStyle('gutter')}>
                                <ListGutter color={listStyle} />
                            </button>
                            <button onClick={() => setListStyle('column')}>
                                <ListColumn color={listStyle} />
                            </button>
                        </div>
                    </div>
                    <div>
                        {/* item */}
                        {listStyle === 'column' && <JobColumn />}
                        {listStyle === 'gutter' && <JobGutter/>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobListing;
