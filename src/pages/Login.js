import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';

function Login() {
    return (
        <main className="bg-login-background bg-cover bg-center w-screen h-screen relative flex flex-col justify-between">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="max-w-sm w-96">
                    <Card>
                        <CardHeader color="lightBlue">
                            <H5 color="white" style={{ marginBottom: 0 }}>
                                Login
                            </H5>
                        </CardHeader>

                        <CardBody>
                            <div className="mb-12 px-4 bg-bb">
                                <InputIcon
                                    type="email"
                                    color="lightBlue"
                                    placeholder="Email Address"
                                    iconName="email"
                                />
                            </div>
                            <div className="mb-8 px-4">
                                <InputIcon
                                    type="password"
                                    color="lightBlue"
                                    placeholder="Password"
                                    iconName="lock"
                                />
                            </div>
                            <div className="mb-4 px-4">
                                <Checkbox
                                    color="lightBlue"
                                    text="Remember Me"
                                    id="remember"
                                />
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="flex justify-center bg-bb">
                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="lg"
                                    ripple="dark"
                                >
                                    Get Started
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    )
}

export default Login
