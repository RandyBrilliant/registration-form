import Button from "@material-tailwind/react/Button";

function Confirm({nextStep, prevStep, handleChange, data}) {
    const handleSubmit = e => {
        e.preventDefault();
        nextStep();
    }

    const camel2title = (camelCase) => camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();

    if (data.step !== 4) {
        return null;
    } else {
        return (
            <form className="mt-10" onSubmit={handleSubmit}>
                <h2 className="text-red-500 text-2xl mt-3 font-bold uppercase">
                    Data Confirmation
                </h2>
                <p class="text-md text-gray-700">
                    Please check your data carefully as it could affect your admission acceptance.
                </p>
                <ul className="divide-y divide-gray-700 mt-10">
                    {Object.entries(data).map(([key, value]) => (
                        key !== "step" && key !== "confirmation" ? (
                            <li key={key} className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
                                <span className="font-bold text-lg">{camel2title(key)}</span>
                                <span className="text-md font-secondary">: {value === "" ? "-" : value}</span>
                            </li>
                        ) : (
                            null
                        )
                        
                    ))}
                </ul>             
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

export default Confirm
