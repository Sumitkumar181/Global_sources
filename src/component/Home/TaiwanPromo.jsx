import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Television from '../../assets/card/television.png'
import fashion from '../../assets/card/fashion.png'
import hardware from '../../assets/card/hardware.png'
import onlineShow from '../../assets/card/online_show.png'
import banner1 from '../../assets/homePageImage/newbanner-1.png';
import banner2 from '../../assets/homePageImage/newbanner-2.png';
import banner3 from '../../assets/homePageImage/newbanner3.png';


const categories = [
    { name: "Electronic", image: Television },
    { name: "Fashion", image: fashion },
    { name: "Shoes", image: hardware },
    { name: "Beauty", image: onlineShow },
];


const banners = [
    {
        
        image: banner1,
    },
    {
        
        image: banner2,
    },
    {
       
        image: banner3,
    },
    {

        image: banner1,
    },
    {

        image: banner2,
    }
];

const TaiwanPromo = () => {
    return (
        <div className="flex-1 font-roboto rounded p-4 shadow-md min-h-[250px] relative overflow-hidden">
            <div className="w-full rounded-xl overflow-hidden">
                <Swiper
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{ delay: 3500 }}
                    loop={true}
                >
                    {banners.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`w-full h-72 border rounded-lg flex items-center px-8 ${item.bgGradient} text-white`}>

                                <img src={item.image} className="h-full w-full rounded-lg object-fit" alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className=' mt-6 flex justify-evenly'>
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className='h-32 w-40 bg-[#f5f7fa] rounded-lg relative overflow-hidden'
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className='h-full w-full object-cover'
                        />
                        <p className='absolute bottom-0 left-0 w-full text-center text-white text-sm bg-black/60 py-1'>
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaiwanPromo;
