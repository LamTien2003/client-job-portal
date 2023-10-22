import React from 'react';
import Info from './Info/Info';
import InfoCompany from './InfoCompany/InfoCompany';

const MyProfile = () => {
    return (
        <div className="flex flex-col gap-6">
            <Info />
            <InfoCompany />
        </div>
    );
};

export default MyProfile;
