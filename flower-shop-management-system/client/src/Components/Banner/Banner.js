import React from 'react';
import BannerImg from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div style= {{'backgroundColor': 'rgb(212, 197, 205)'}}>
            <img className="" src={BannerImg} alt="" style={{width: '700px' }}/>
        </div>
    );
};

export default Banner;