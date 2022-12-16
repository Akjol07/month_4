
function Product({product}) {
    return (
        <div className="product">
            <h2 className={product.clas}>Phone:{product.name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, modi.</p>
            <span className={product.clas}>Цена: {product.price}</span>
            <a href="https://www.apple.com/iphone-14/">
                <img src={product.url} className='imgs' alt=""/>
            </a>
        </div>
    )
}

export default Product;