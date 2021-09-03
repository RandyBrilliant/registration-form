import { useState } from 'react';
import Button from "@material-tailwind/react/Button";
import Checkbox from "@material-tailwind/react/Checkbox";

function StudentDeclaration({ data, prevStep, handleChange }) {
    const [formError, setFormError] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!data.confirmation) {
            setFormError(true)
        } else {
            console.log("Sending...");
        }
    }

    if (data.step !== 5) {
        return null;
    } else {
        return (
            <form className="mt-10" onSubmit={handleSubmit}>
                <h2 className="text-red-500 text-2xl mt-3 font-bold uppercase">
                    Student Declaration
                </h2>
                <p class="text-md text-gray-700 font-bold">
                    Please read the Student Declaration carefully!
                    <ol class="list-decimal mt-5 list-inside font-normal">
                        <li>I declare that I have understood all information, including the requirements for admission.</li>
                        <li>I declare that the information provided by me in connection with this admission is true and complete.</li>
                        <li>
                            I understand that IB IT&B reserves the right to vary or reverse any decisions regarding admission 
                            or enrolment made on the basis of incorrect or incomplete information provided by me and that 
                            any such act on my part will be placed on record and will form part of confidential information 
                            forwarded to administrators in assessing any subsequent application.
                        </li>
                        <li>
                            I agree to obey the statutes, regulations and rules of IB IT&B as far as they apply to me. I declare that 
                            the information I have submitted with this application is a true and complete record of all academic 
                            results I have achieved at educational institution which I have attended and I acknowledge that 
                            my failure to disclose my true and complete academic record, the provision incorrect information or 
                            withholding of relevant information, may result in the cancellation of my enrolment at any stage, and 
                            action may be recorded on my student file. I will inform IB IT&B immediately of any changes to my 
                            contact details. 
                        </li>
                        <li>
                            I understand that IB IT&B authority who collects the information on this form is to allow IB IT&B 
                            to properly administer its course programmes, that the information may be shared for those purposes 
                            between IB IT&B and the Kementerian Pendidikan dan Kebudayaan, information collected may be 
                            disclosed without my consent only as authorized or required by the Act or another law. 
                        </li>
                        <li>
                            I understand that the maximum duration of Strata 1 (S-1) and Diploma 4 (D-4) study program 
                            is 7 (seven) years counted from the beginning intake year as required by 
                            (Permendikbud No 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi Pasal 17 Ayat 1.d).
                        </li>
                        <li>
                            I understand that all fees paid shall be non-refundable and non-transferable <b>UNLESS</b>;
                            <ul className="list-disc list-inside pl-4">
                                <li>Failed on SMA National Examination</li>
                                <li>Accepted to Indonesian Government University</li>
                            </ul>
                            IB IT&B will refund the Registration Fee if students are having such kind of one of the two points mentioned above.
                        </li>
                    </ol>
                </p>

                <div className="mt-3 pt-3 border-t-2 border-gray-600">
                    <Checkbox
                        color="red"
                        text="I agree to the terms and condition above."
                        id="checkbox"
                        onChange={handleChange('confirmation')}
                    />
                    {formError && !data.confirmation && <p className="text-sm text-red-500">This field is required</p>}
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
                        onClick={handleSubmit}
                    >
                        Continue
                    </Button>
                </div>
            </form>
        )
    }
}

export default StudentDeclaration
