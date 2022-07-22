import Header from "../../components/Header/Header"
import image from "../../assets/sobre.svg"
import Footer from "../../components/Footer/Footer"
import './sobre.css'


function Sobre (){
    return(
        <>
        <Header image={image} description="Ilustração de mulher">Um pouco sobre mim</Header>
        <hr></hr>

        <div className="apresentacao">
            <h2>Olá, seja bem vinde!</h2>
            <div className="informacoes">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQErkWgUEpKnKQ/profile-displayphoto-shrink_800_800/0/1634942988127?e=1663804800&v=beta&t=-NdV-4TaUWREV4fThZAWkLXMeJN_3RmNy9LHyssTXv0" alt="Fotografia da criadora do site."/>
                <p>Tenho 24 anos, sou nordestina, e uma grande apaixonada pela educação! Licenciada em História pela Universidade Federal de Campina Grande, 
                    meu maior objetivo é de levar as possibilidades de ensino para o máximo de pessoas possíveis e impactar suas vidas positivamente. <br></br>
                    Atualmente sou líder de comunicação na Edumi, programa que leva capacitação em tecnologia para jovens de baixa renda. 
                    Também faço parte do Coletivo Alguma Coisa (CAC) que constrói a organização de artistas independentes e a coletiva Papel Mulher, 
                    que espalha poesia escrita por mulheres pelas ruas do Brasil, além de construir o Grupo de Estudos Literários em Escrituras Negras (GELEN - CG), 
                    junto a pesquisadores interessades pela investigação do campo étnico-racial. </p>
            </div>
        </div>
        

        <Footer />
        </>
    )
}

export default Sobre