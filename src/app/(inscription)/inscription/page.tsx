
import InscriptionPage1 from "../components/Formm";
import NavBar from "../components/NavBar";
import Titlee from "../components/Titlee";

export default function Homee() {
    return (
        <>
            <div
                className="bg-fixed bg-center bg-cover h-screen overflow-x-hidden "
                style={{
                    backgroundImage: `url('/3.jpg')`,
                }}
            >
                <NavBar />
                <Titlee />
                <InscriptionPage1 />
            </div>





        </>

    )
} 