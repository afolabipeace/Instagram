import React from 'react'
import { Slide } from 'react-slideshow-image';
import '../Style/style.css';
import 'react-slideshow-image/dist/styles.css';
import pic3 from '../asset/imges/1618160121685.jpg';
import pic6 from '../asset/imges/bir10.gif';
import pic7 from '../asset/imges/python.PNG';
import pic8 from '../asset/imges/images (24).jfif'
import pic9 from '../asset/imges/christmas tree.png'
import pic10 from '../asset/imges/Screenshot_2019-07-02-15-31-39.png'
import 'react-slideshow-image'
const Slideshow = ()=>{
    const style = {
        padding:"20px 0",
        width:"100%",
    };
    const properties = {
        duration :3000,
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:false,
        indicators:true,
        responsive:[
            {
                breakpoint: 500,
                settings:{
                    slidesToShow:4,
                    slidesToScroll:1
                }
            },
            {
                breakpoint: 500,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:2
                }
            }
        ]
    }
    return(
        <>
            <div>
                    <Slide {...properties}>
                    <div style={style}><img src={pic6} alt="" style={{borderRadius:'50px',width:'60px', height:'60px',border: '2px solid green' }}/></div>
                    <div style={style}><img src={pic3} alt="" style={{borderRadius:'50px',width:'60px', height:'60px',border: '2px solid green' }}/></div>
                    <div style={style}><img src={pic7} alt="" style={{borderRadius:'50px',width:'60px', height:'60px',border: '2px solid green' }}/></div>
                    <div style={style}><img src={pic8} alt="" style={{borderRadius:'50px',width:'60px', height:'60px',border: '2px solid green' }}/></div>
                    <div style={style}><img src={pic9} alt="" style={{borderRadius:'50px',width:'60px', height:'60px',border: '2px solid green' }}/></div>
                    <div style={style}><img src={pic10} alt="" style={{borderRadius:'50px',width:'60px', height:'60px',border: '2px solid green' }}/></div>
                    </Slide>
            </div>
        </>
    )
}
export default Slideshow