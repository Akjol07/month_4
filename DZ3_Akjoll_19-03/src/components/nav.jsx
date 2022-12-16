import './components_css/nav.css'

function Nav() {
    let input = ''
    const butt = () => {
      alert(input)
    }

    const i = (f) => {
        input = f.target.value
        console.log(f.target.value)
    }

    return (
        <>
            <div className="nav">
                <h2>Apple</h2>
                <input type="text" className="inp" name="post" placeholder="Search" onChange={i}/>
                <button className="btnn" onClick={butt}>Search</button>
            </div>
        </>
    );
}

export default Nav;