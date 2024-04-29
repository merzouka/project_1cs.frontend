
import InscriptionPage1 from "../components/Formm";
import NavBar from "../components/NavBar";
import Title from "../components/Titlee";

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
                <Title />
                <InscriptionPage1 />
            </div>
        </>
    )
} 
