import './form.modules.css'

import {useState} from "react";

function Form() {
    const [checkbox, setCheckbox] = useState(false);
    return (
        <>
            <div className="container">
            <form>
                <div className="name"> Имя:
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Введите имя"
                        disabled={checkbox}
                    />
                </div>
                <div className="email"> Email:
                    <input
                        type="text"
                        name="input_mail"
                        placeholder="example@gmail.com"
                        disabled={checkbox}
                    />
                </div>
                <div className="number"> Номер телефона:
                    <input
                        type="number"
                        name="phone"
                        placeholder="+996 XXX XX XX XX"
                        disabled={checkbox}
                    />
                </div>
                <div className="check">Согласен(а) с условией:
                    <input
                        type="checkbox"
                        name="box"
                        onChange={() => setCheckbox(!checkbox)}
                        value={checkbox}
                    />
                </div>
                <button className="btn" disabled={!checkbox} onClick={e => e.preventDefault()}>Send</button>
            </form>
            </div>
        </>
    );
}

export default Form;