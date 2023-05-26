import Titulo from "./Titulo"

function App(){
  return(
    <> 
    <Titulo cor="red" nome="Eduardo" paragrafo={true} />
    <Titulo cor="blue" />
    <Titulo cor="green"/>
    <Titulo cor="orangered" />
    </>
  )
}

export default App