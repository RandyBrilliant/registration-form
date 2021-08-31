import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Radio from "@material-tailwind/react/radio";
import { useState, useEffect } from 'react';
import { Country } from 'country-state-city';

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function Personal({ nextStep, handleChange, data }) {
    const [countries, setCountries] = useState([]);
    const [formError, setFormError] = useState(false);

    const programs =[
        'Accounting', 
        'Entrepreneurship', 
        'Hospitality Management', 
        'Information Systems', 
        'International Trade', 
        'Management'
    ]

    const handleSubmit = e => {
        e.preventDefault();
        if (
            data.firstName.trim() === "" || 
            data.email.trim() === "" || 
            data.phone.trim() === "" || 
            data.whatsapp.trim() === "" || 
            data.gender.trim() === "" || 
            data.nationality.trim() === "" ||
            data.studyProgram.trim() === "" ||
            data.studyDate.trim() === "") {
            setFormError(true)
        } else {
            nextStep();
        }
        
    }

    useEffect(() => {
        const getCountries = async () => {
            try {
                const result = await Country.getAllCountries();
                let allCountries = [];
                allCountries = result?.map(({ isoCode, name }) => ({
                    isoCode,
                    name
                }));
                setCountries(allCountries);
            } catch (error) {
                setCountries([]);
            }
        };

        getCountries();
    }, []);

    if (data.step !== 1) {
        return null;
    } else {
        return (
            <form className="mt-10" onSubmit={handleSubmit}>
                <h2 className="text-red-500 text-md mt-3 mb-6 font-bold uppercase">
                    Personal Information
                </h2>
                <div className="flex flex-wrap mt-10">
                    <div className="w-full lg:w-4/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="First Name*"
                            value={data.firstName}
                            onChange={handleChange('firstName')}
                            error={formError && data.firstName.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-4/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Middle Name"
                            value={data.middleName}
                            onChange={handleChange('middleName')}
                        />
                    </div>
                    <div className="w-full lg:w-4/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Last Name"
                            value={data.lastName}
                            onChange={handleChange('lastName')}
                        />
                    </div>
                    <div className="w-full lg:w-12/12 px-3 mb-10 font-light">
                        <Input
                            type="email"
                            color="red"
                            placeholder="Email Address*"
                            value={data.email}
                            onChange={handleChange('email')}
                            error={formError && data.email.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="tel"
                            color="red"
                            placeholder="Phone Number*"
                            value={data.phone}
                            onChange={handleChange('phone')}
                            error={formError && data.phone.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="tel"
                            color="red"
                            placeholder="WhatsApp Number"
                            value={data.whatsapp}
                            onChange={handleChange('whatsapp')}
                            error={formError && data.whatsapp.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <label className="mb-3" htmlFor="gender">Gender*</label>
                        <div className="flex justify-between mt-3">
                            <Radio
                                color="red"
                                text="Male"
                                id="male"
                                name="gender"
                                checked={data.gender === 'Male'}
                                value="Male"
                                onClick={handleChange('gender')}
                            />
                            <Radio
                                color="red"
                                text="Female"
                                id="female"
                                name="gender"
                                checked={data.gender === 'Female'}
                                value="Female"
                                onClick={handleChange('gender')}
                            />
                            <Radio
                                color="red"
                                text="Other"
                                id="other"
                                name="gender"
                                checked={data.gender === 'Other'}
                                value="Other"
                                onClick={handleChange('gender')}
                            />
                        </div>
                        {formError && data.gender.trim() === "" && <p className="text-sm text-red-500">This field is required</p>}
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <label className="block" htmlFor="nationality">
                            Nationality*
                        </label>
                        <select
                            className="block w-full mt-3 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={data.nationality}
                            onChange={handleChange('nationality')}
                        >
                            <option value='' key={0} checked disabled>
                                Select Your Nationality
                            </option>
                            {countries.map(({isoCode, name}) => (
                                <option value={name} key={isoCode}>
                                    {name}
                                </option>
                            ))}
                        </select>
                        {formError && data.nationality.trim() === "" && <p className="text-sm text-red-500">This field is required</p>}
                    </div>
                </div>
                <h2 className="text-red-500 text-md mt-3 mb-6 font-bold uppercase">
                    Desired Program
                </h2>
                <div className="flex flex-wrap mt-10">
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <label className="block" htmlFor="study-program">
                            Study Program
                        </label>
                        <select
                            className="block w-full mt-3 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={data.studyProgram}
                            onChange={handleChange('studyProgram')}
                        >
                            <option value='' key={0} checked disabled>
                                Select Your Study Program
                            </option>
                            {programs.map(program => (
                                <option value={program} key={program}>
                                    {program}
                                </option>
                            ))}
                        </select>
                        {formError && data.studyProgram.trim() === "" && <p className="text-sm text-red-500">This field is required</p>}
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <label className="block" htmlFor="study-program">
                            Time of Study
                        </label>
                        <select
                            className="block w-full mt-3 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                            value={data.studyDate}
                            onChange={handleChange('studyDate')}
                        >
                            <option value='' key={0} checked disabled>
                                Select Your Time of Study
                            </option>
                            <option value='afternoon' key={1}>GMT+7 05.00 PM (17.00 WIB)</option>
                            <option value='night' key={2}>GMT+7 07.00 PM (19.00 WIB)</option>
                        </select>
                        {formError && data.studyDate.trim() === "" && <p className="text-sm text-red-500">This field is required</p>}
                    </div>
                </div>
                <div className="justify-self-end flex justify-around my-5">
                    <Button
                        color="red"
                        buttonType="filled"
                        size="large"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        type="submit"
                    >
                        Continue
                    </Button>
                </div>
            </form>
        )
    }

}

export default Personal
