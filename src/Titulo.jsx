function Titulo ({nome, paragrafo, cor}){

    // let nome = "Eduardo Rocha";
    // const soma = 10 + 10
    // const imgUrl = "https://media.licdn.com/dms/image/D4E03AQGezeEm_YrUFA/profile-displayphoto-shrink_400_400/0/1667218882403?e=1690416000&v=beta&t=-kS8LX91q3-J-zrx-oDNveD8j4iqf4W3KFKxS4Xti5U"

    return(
        <div>
            <h1 style={{color: cor}}>Eu sou {nome ? nome : "Fulano"}</h1>
            {/* <img width={100} src={imgUrl}/> */}
            { paragrafo ? 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro, ex molestiae, quos fuga eum enim officiis corrupti deleniti odio est sunt exercitationem rem odit quibusdam, quis cupiditate! Libero, laborum.</p>
            :
            <p>Nada</p>
        }
        </div>
        
    )
}

export default Titulo