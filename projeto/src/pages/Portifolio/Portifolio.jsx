import Header from "../../components/Header/Header"
import image from "../../assets/portfolio.svg"
import Footer from "../../components/Footer/Footer"
import Projetos from "../../components/Projetos/Projetos"


function Portifolio(){
    return(
        <>
        <Header image={image} description="Ilustração de mulher">Meus projetos</Header>

        <Projetos />

        <Footer />
        </>
    )
}

export default Portifolio