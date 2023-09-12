import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardsSection = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        // Load data from local storage on component mount
        const savedItems = JSON.parse(localStorage.getItem('crudItems')) || [];
        setItems(savedItems);
    }, []);

    return (
        <div>
            <svg className='max-w-[100vw]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3A4D1C" fill-opacity="1" d="M0,192L20,213.3C40,235,80,277,120,245.3C160,213,200,107,240,101.3C280,96,320,192,360,234.7C400,277,440,267,480,250.7C520,235,560,213,600,186.7C640,160,680,128,720,101.3C760,75,800,53,840,74.7C880,96,920,160,960,197.3C1000,235,1040,245,1080,213.3C1120,181,1160,107,1200,90.7C1240,75,1280,117,1320,122.7C1360,128,1400,96,1420,80L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
            </svg>
            <div className="h-[80vh] px-[0] bg-[#3A4D1Cff] pb-10 flex justify-around items-center relative overflow-hidden flex-col">
                <h2 className='font-black text-5xl text-white uppercase'>Find locations</h2>
                <div className='overflow-x-scroll flex mx-auto gap-4 pb-4 container'>
                    {items.map((item, index) => (
                        <Card
                            image={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default CardsSection;