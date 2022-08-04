import React, {useState} from 'react';
import { IoIosArrowForward, IoIosLock } from "react-icons/io";

const FindCar = () => {
    const [error, setError] = useState(false);

    const findError = (e) => {
        if (/^[A-Za-z\s-z0-9]*$/.test(e.key)) {
            setError(false)
        } else setError(true)
    }

    return (
        <div className='container'>
            <div className='find-container'>
                <p className='find-container__title'>Find your car</p>
                <div className='find-container__block'>
                    <p className='find-container__description'>Enter your car's registration number and we'll find the car for you</p>
                    <div className='find-container__reg-input'>
                        <div className='find-container__reg-input__gb'>GB</div>
                        <input
                            type="text"
                            placeholder='ENTER YOUR REG'
                            maxLength="10"
                            onKeyDown={(e) => findError(e)}
                        />
                    </div>
                    {error && <p className='input-error'>The registration enter must only contain letters, numbers and 1 spaces</p>}
                    <button className='find-container__btn'>GET A QUOTE</button>
                    <p className='find-container__text'>
                        <div>
                            <a href="">Don't know the registration</a>
                            <IoIosArrowForward size='18px' className='find-container__text__icon'/>
                        </div>
                        <span>or</span>
                        <div>
                            <a href="">Retrieve a quote</a>
                            <IoIosArrowForward size='18px' className='find-container__text__icon'/>
                        </div>
                    </p>
                </div>
            </div>

            <div className='locked-container'>
                <IoIosLock size='40px'/>
                <p className='locked-container__title'>Your car - locked</p>
                <p className='locked-container__description'>To unlock this section, please complete the <span>Manual Entry</span> section</p>
            </div>

        </div>
    );
};

export default FindCar;