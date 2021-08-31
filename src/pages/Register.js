import HandleRegister from "../components/HandleRegister";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import HeaderLogo from "../components/HeaderLogo";
import Test from '../assets/img/test.jpg';

function Register() {
    return (
        <div className="min-h-screen w-screen bg-pink-50 overflow-x-hidden">
            <header>
                <HeaderLogo />
            </header>
            <main className="text-gray-600 font-primary container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <section className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start mb-16 md:mb-0">
                    <Card>
                        <CardHeader color="red" contentPosition="none">
                            <h1 className="text-white text-3xl font-bold">Admission Form 2021</h1>
                        </CardHeader>
                        <CardBody>
                            <HandleRegister />
                            <footer className="mt-16 italic text-sm">
                                <p>By completing this form, I hereby affirm that I agree with the IB IT&B Privacy Policy terms and to receive updates from the university that may include emails, calls, and text messages.</p>
                            </footer>
                        </CardBody>
                    </Card>
                </section>
                <section className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 self-start lg:block hidden">
                    <figure>
                        <img className="object-cover object-center rounded" alt="hero" src={Test} />
                        <figcaption className="mt-2 text-lg">Class of '16 Graduation in 2019 at IB IT&B Main Hall</figcaption>
                    </figure>
                </section>
            </main>
        </div>
        
    )
}

export default Register

