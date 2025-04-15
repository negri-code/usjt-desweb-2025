import Pedido from "./Pedido"

const App = () => {
  return (
    <div className="container border border-dark">
      <div className="row">
        <div className="col-12">
          <div>
            <p>Meu hipo</p>
            <i className="fa-solid fa-hippo fa-3x"></i>
            <i className="ms-1 fa-solid fa-hippo fa-3x fa-flip-horizontal"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Cookie"
            descricao="Cookie suculento"
            ícone="cookie"
            />
            
          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Cookie"
            descricao="Cookie suculento"
            ícone="cookie"            
            />

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Cookie"
            descricao="Cookie suculento"
            ícone="cookie"            
            />

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Cookie"
            descricao="Cookie suculento"
            ícone="cookie"            
            />

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Cookie"
            descricao="Cookie suculento"
            ícone="cookie"            
            />
"
          </div>
        </div>
      </div>

    </div>
  )
}

export default App