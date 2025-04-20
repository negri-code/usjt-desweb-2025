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
            icone="cookie"
            />
            
          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Sorvete"
            descricao="Sorvete cremoso"
            icone="ice-cream"            
            />

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Lanche"
            descricao="Hambúrguer Artesanal"
            icone="burger"            
            />

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Cappucino"
            descricao="Alpino quentinho"
            icone="mug-hot"            
            />

          </div>

          <div className="col-sm-12 col-lg-3 col-md-6">
            <Pedido
            data="14/04/2025"
            titulo="Drink"
            descricao="Vinho branco"
            icone="wine-glass"            
            />
"
          </div>
        </div>
      </div>

    </div>
  )
}

export default App