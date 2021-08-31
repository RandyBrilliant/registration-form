import { Link } from 'react-router-dom';
import Button from "@material-tailwind/react/Button";

function Home() {
    return (
        <div>
            This is homepage
            <Link to="/register">
                <Button
                    color="red"
                    buttonType="filled"
                    size="large"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                >
                    Register Now
                </Button>
            </Link>
        </div>
    )
}

export default Home
