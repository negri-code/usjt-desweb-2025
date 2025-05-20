const Imagem = ({pic, imgStyle}) => {
    return(
        <div className={`${imgStyle}`}>
            <img src={pic}/>
        </div>
        )
}

export default Imagem