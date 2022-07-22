import './projetos.css'

const projetos = [
    {
      id: 1,
      nome: 'Vênus Tattoo',
      descricao: 'Site de divulgação do Vênus Tatoo',
      conteudo: 'Feito com html e css.',
      imagem: 'https://media0.giphy.com/media/J2xPIogifUQPwIYY9N/giphy.gif?cid=790b76115587c3938b76efac944c061dfc1d005d0e7253ff&rid=giphy.gif&ct=g',

    },
    {
      id: 2,
      nome: 'M de Maravilhosa',
      descricao: 'Site sobre a escritora Conceição Evaristo',
      conteudo: 'HTML e CSS',
      imagem: 'https://media3.giphy.com/media/ch5Zh894f2DPlpUbBl/giphy.gif?cid=790b761120bbdf6e1a7e921477281494bf75559b1a6e39c5&rid=giphy.gif&ct=g',

    },
  ]

function Projetos() {
    return(
        <>
            <div className="container">

                {projetos.map(infos => {
                return (
                    <div className="card" key={infos.id}>
                        <h3 className="name">{infos.nome}</h3>
                        <img className="gif" src={infos.imagem} alt={infos.name} />
                    </div>
            
            )
            })}
            </div>
        </>
    )
}

export default Projetos