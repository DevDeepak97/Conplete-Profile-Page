import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MainPage.css'
import {BASE_URL} from '../services/helper'
const MainPage = () => {
    const [redirect, setRedirect] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            phone: "",
            linkedin: "",
            country: "",
            state: "",
            city: "",
            pin: "",
            isAgree: true,
        }
    )
    function hendleFormData(event) {
        const { name, value, type, checked } = event.target
        setFormData(pre => {
            return {
                ...pre,
                [name]: type === 'checkbox' ? checked : value
            }

        })
    }
    async function SubmitFormData(e) {
        e.preventDefault()
        if ((formData.name === '') && (formData.email === '')) {
            alert('name and email are required field!')
        }
        else {
            const name = formData.name
            const email = formData.email
            const response = await fetch(`${BASE_URL}/`, {
                method: 'POST',
                body: JSON.stringify({ name, email }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.status === 200) {
                console.log(response);
                alert('Successful')
                setRedirect(true)
            }
            else {
                alert(`failed`);
            }
        }
    }
    const navigate = useNavigate()
    if (redirect) {

        navigate('/profile')
    }
    return (
        <div className="main-page">
            <div className='main-vector-icon'>
                <img className="main-profile" alt="" src="/rafiki.png" />
            </div>
            <img className="main-vector-icon1" alt="" src="/vector.svg" />
            <div className="create-investor-profile-container">
                <span>{`Create `}</span>
                <span className="investor-profile">Investor Profile</span>
            </div>
            <form className='Form'>

                <div className='form--name'> <img src='/Group 12.png' alt='a person png img' /> <input type='txt' placeholder='Name' name='name' onChange={hendleFormData} value={formData.name}></input> </div>
                <div className='form--email'> <img src='/Mail.png' alt='a person png img' /> <input type='email' placeholder='Email' name='email' onChange={hendleFormData} value={formData.email}></input> </div>
                <div className='form--phone'> <img src='/push-notifications@2x.png' alt='a person png img' /> <input type='txt' placeholder='Phone no.' name='phone' onChange={hendleFormData} value={formData.phone}></input> </div>
                <div className='form--linked'> <img src='/linked-Circled.png' alt='a linked-in png img' /> <input type='txt' placeholder='Linkedin Link' name='linkedin' onChange={hendleFormData} value={formData.linkedin}></input> </div>
                <div className='form--country'> <img src='/flag@2x.png' alt='a country png img' /> <input type='txt' placeholder='Country' name='country' onChange={hendleFormData} value={formData.country}></input> </div>
                <div className='form--state'> <img src='/country@2x.png' alt='a state png img' /> <input type='txt' placeholder='State' name='state' onChange={hendleFormData} value={formData.state}></input> </div>
                <div className='form--city'> <img src='/city@2x.png' alt='a city png img' /> <input type='txt' placeholder='City' name='city' onChange={hendleFormData} value={formData.city}></input> </div>
                <div className='form--pin'> <img src='/pin-pad@2x.png' alt='a white radio box png img' /> <input type='txt' placeholder='Pin Code' name='pin' onChange={hendleFormData} value={formData.pin}></input> </div>
                <div className='form--radio'>
                    <input
                        type='checkbox'
                        onChange={hendleFormData}
                        checked={formData.isAgree}
                        id='isAgree'
                        name="isAgree"
                    />
                    <label htmlFor='isAgree'>I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information</label>
                </div>

                <button onClick={SubmitFormData}>Submit</button>
            </form>


        </div>
    )
}

export default MainPage