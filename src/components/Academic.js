import { useState } from 'react';
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

function Academic({nextStep, prevStep, handleChange, data}) {
    const [formError, setFormError] = useState(false);
    
    const handleSubmit = e => {
        e.preventDefault();
        if (
            data.schoolName.trim() === "" || 
            data.concentration.trim() === "" || 
            data.schoolLocation.trim() === "" || 
            data.graduationYear.trim() === "") {
            setFormError(true)
        } else {
            nextStep();
        }
    }

    if (data.step !== 3) {
        return null;
    } else {
        return (
            <form className="mt-10" onSubmit={handleSubmit}>
                <h2 className="text-red-500 text-md mt-3 mb-6 font-bold uppercase">
                    Academic Information
                </h2>
                <div className="flex flex-wrap mt-10">
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Former School Name*"
                            value={data.schoolName}
                            onChange={handleChange('schoolName')}
                            error={formError && data.schoolName.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Concentration*"
                            value={data.concentration}
                            onChange={handleChange('concentration')}
                            error={formError && data.concentration.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="School Location (City)*"
                            value={data.schoolLocation}
                            onChange={handleChange('schoolLocation')}
                            error={formError && data.schoolLocation.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Graduation Year*"
                            value={data.graduationYear}
                            onChange={handleChange('graduationYear')}
                            error={formError && data.graduationYear.trim() === "" && "This field is required"}
                        />
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
                        onClick={prevStep}
                    >
                        Go Back
                    </Button>
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

export default Academic
