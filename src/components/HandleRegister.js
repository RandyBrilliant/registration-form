import { useState } from 'react';
import Personal from "./Personal";
import Address from './Address';
import Academic from './Academic';
import Confirm from './Confirm';
import RegStep from './RegStep';

function HandleRegister() {
    const [data, setData] = useState({
        step: 1,

        //Step 1
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        whatsapp: '',
        gender: '',
        nationality: '',
        studyProgram: '',
        studyDate: '',

        // //Step 2
        address: '',
        district: '',
        postalCode: '',
        city: '',
        province: '',

        // //Step 3
        schoolName: '',
        concentration: '',
        schoolLocation: '',
        graduationYear: '',
    });

    const prevStep = () => {
        setData({...data, step: data.step - 1});
    }

    const nextStep = () => {
        setData({...data, step: data.step + 1});
    }

    const handleChange = (input, date) => e => {
        setData({...data, [input]: e.target.value });
    }

    return (
        <>
            <RegStep data={data} />
            <Personal 
                nextStep = {nextStep}
                handleChange = {handleChange}
                data = {data}
            />
            <Address 
                nextStep = {nextStep}
                prevStep = {prevStep}
                handleChange = {handleChange}
                data = {data}
            />
            <Academic 
                nextStep = {nextStep}
                prevStep = {prevStep}
                handleChange = {handleChange}
                data = {data}
            />
            <Confirm 
                nextStep = {nextStep}
                prevStep = {prevStep}
                handleChange = {handleChange}
                data = {data}
            />
        </>
    )
}

export default HandleRegister
