import { useState } from 'react';
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

function Address({nextStep, prevStep, handleChange, data}) {
    const [formError, setFormError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (
            data.address.trim() === "" || 
            data.district.trim() === "" || 
            data.postalCode.trim() === "" || 
            data.city.trim() === "" || 
            data.province.trim() === "") {
            setFormError(true)
        } else {
            nextStep();
        }
    }

    if (data.step !== 2) {
        return null;
    } else {
        return (
            <form className="mt-10" onSubmit={handleSubmit}>
                <h2 className="text-red-500 text-md mt-3 mb-6 font-bold uppercase">
                    Address Information
                </h2>
                <div className="flex flex-wrap mt-10">
                    <div className="w-full lg:w-12/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Address*"
                            value={data.address}
                            onChange={handleChange('address')}
                            error={formError && data.address.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="District*"
                            value={data.district}
                            onChange={handleChange('district')}
                            error={formError && data.district.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Postal Code*"
                            value={data.postalCode}
                            onChange={handleChange('postalCode')}
                            error={formError && data.postalCode.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="City*"
                            value={data.city}
                            onChange={handleChange('city')}
                            error={formError && data.city.trim() === "" && "This field is required"}
                        />
                    </div>
                    <div className="w-full lg:w-6/12 px-3 mb-10 font-light">
                        <Input
                            type="text"
                            color="red"
                            placeholder="Province*"
                            value={data.province}
                            onChange={handleChange('province')}
                            error={formError && data.province.trim() === "" && "This field is required"}
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

export default Address
