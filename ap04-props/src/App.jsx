import Pedido from "./componentes/Pedido"
import Cartao from "./componentes/Cartao"
import Feedback from "./componentes/Feedback"

const App = () => {
  const textoOK = "Chegou"
  const textoNOK = "Não Chegou"
  const funcaoOK = () => alert ("Obrigado pelo seu feedback")
  const funcaoNOK = () => alert ("Verificaremos!")

  const componenteFeedback = (
    <Feedback
    textoOK = {textoOK}
    textoNOK = {textoNOK}
    funcaoOK = {funcaoOK}
    funcaoNOK = {funcaoNOK}
    />
  )

  return (
    <div className="container border border-dark">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meu hipo</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
            <i className="ms-1 fa-solid fa-hippo fa-3x fa-flip-horizontal"></i>
            <i className="ms-1 fa-solid fa-hippo fa-2x fa-flip-horizontal"></i>
            <i className="ms-1 fa-solid fa-hippo fa-1x fa-flip-horizontal"></i>
            <i className="ms-1 fa-solid fa-hippo fa-1x fa-flip-horizontal"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="22/03/2025">
              <Pedido
              data="14/04/2025"
              titulo="Cookie"
              descricao="Cookie suculento"
              icone="cookie"/>  
              {componenteFeedback}     
            </Cartao>
          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="28/03/2028">
              <Pedido
              titulo="Sorvete"
              descricao="Sorvete cremoso"
              icone="ice-cream"/>
              {componenteFeedback}
            </Cartao>

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="14/04/2025">
              <Pedido
              titulo="Lanche"
              descricao="Hambúrguer Artesanal"
              icone="burger"/>
              {componenteFeedback}
            </Cartao>

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Cartao cabecalho="17/04/2025">
              <Pedido
              titulo="Cappucino"
              descricao="Alpino quentinho"
              icone="mug-hot"/>
              {componenteFeedback}
            </Cartao>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App