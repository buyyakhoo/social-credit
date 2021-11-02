import { useState } from 'react';
import danger from "./static/Danger_Alarm.mp3";
import ding from "./static/Ding.mp3";

function Score() {
    // const [count, setCount] = useState(0);
    const [pic, setPic] = useState("https://i.redd.it/ut2x9bq8odr61.jpg");
    /*
    useEffect(() => {
        console.log('use effect hook');
        
        var i = 0;
        setInterval(() => {
            if (i % 2 === 0){
                setPic("https://i.ytimg.com/vi/YFPrzl-8vvA/sddefault.jpg");
            } else {
                setPic("https://i.redd.it/ut2x9bq8odr61.jpg");
            }
            i++;
        }, 2000);

    }, []);
    */

    //random pic
    const picInc = ['https://i.redd.it/ut2x9bq8odr61.jpg', 'https://i.ytimg.com/vi/jujP_ekluIM/maxresdefault.jpg', 'https://i.ytimg.com/vi/TFiH0ssY5xA/hqdefault.jpg?sqp=-oaymwEiCKgBEF5IWvKriqkDFQgBFQAAAAAYASUAAMhCPQCAokN4AQ==&rs=AOn4CLCj5qpSUDrgZlSBTpghN1L52TLhoA', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaw96lhOjdD_rGWA2GtF9Yvhtopls5Ha8QA&usqp=CAU', 'https://i.ytimg.com/vi/7Kl_lU_ZaBw/maxresdefault.jpg'];
    const picDec = ['https://i.ytimg.com/vi/YFPrzl-8vvA/sddefault.jpg', 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/90a8abbfd55f50ca98370a6d963491da71ba4434c2da0e43f8dacac46c84843a_1.jpg', 'https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/1553bc9e5b04be03db66a0dc3f711d3c40f24cb4931f0a45b34932e9b966e611_1.jpg', 'https://i.redd.it/knx19jp9mur71.png', 'https://i.ytimg.com/vi/8k8dmZ5c0vI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCNL69OylRXEppZYYPednESMfvKw', 'https://i.imgflip.com/5pop39.jpg'];

    const myDing = new Audio(ding);
    const myDanger = new Audio(danger);
    const scoreInc = () => {
        var randomNum = Math.floor(Math.random() * picInc.length);
        setPic(picInc[randomNum]);
        myDing.play();      
    }

    const scoreDec = () => {
        var randomNum = Math.floor(Math.random() * picDec.length);
        setPic(picDec[randomNum]);
        myDanger.play();  
    }



    return (
        <div>
            <button onClick={scoreInc}>Increase</button>
            <button onClick={scoreDec}>Decrease</button>
            <br />
            {/* <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me!!</button> */}
            <img src={pic} /> 
            

        </div>
    );
}

export default Score;
