import Progress from "@material-tailwind/react/Progress";

function RegStep({ data }) {
    let stepPercentage = 0;
    let stepDetails = "Let's embark together for a better Future!";

    if (data.step === 1) {
        stepPercentage = 25;
    } else if (data.step === 2) {
        stepPercentage = 50;
    } else if (data.step === 3) {
        stepPercentage = 75;
    } else if (data.step === 4) {
        stepPercentage = 100;
    } else {
        stepPercentage = 0;
    }

    if (data.step === 1) {
        stepDetails = "Let's embark together for a better Future!";
    } else if (data.step === 2) {
        stepDetails = "You're one step closer...";
    } else if (data.step === 3) {
        stepDetails = "Just a little bit more...";
    } else if (data.step === 4) {
        stepDetails = "You're almost there!";
    } else {
        stepDetails = 0;
    }

    return (
        <aside className="w-full my-10">
            <p className="animate-bounce text-center text-2xl mb-5">{stepDetails}</p>
            <Progress 
                color="red" 
                value={String(stepPercentage)} 
                percentage={true}
            />
        </aside>
    )
}

export default RegStep
