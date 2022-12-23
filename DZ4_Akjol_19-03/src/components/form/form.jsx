import './form.modules.css'
import React from "react";
import {useState} from "react";

// function Form() {
//     const [checkbox, setCheckbox] = useState(false);
//     const click = () => {
//         alert('Works')
//     }
//     return (
//         <>
//             <div className="container">
//             <form>
//                 <div className="name"> Имя:
//                     <input
//                         type="text"
//                         name="firstName"
//                         required="Заполните поле"
//                         placeholder="Введите имя"
//                         disabled={checkbox}
//                     />
//                 </div>
//                 <div className="email"> Email:
//                     <input
//                         type="text"
//                         name="input_mail"
//                         required="Заполните поле"
//                         placeholder="example@gmail.com"
//                         disabled={checkbox}
//                     />
//                 </div>
//                 <div className="number"> Номер телефона:
//                     <input
//                         type="number"
//                         name="phone"
//                         required="Заполните поле"
//                         placeholder="+996 XXX XX XX XX"
//                         disabled={checkbox}
//                     />
//                 </div>
//                 <div className="check">Согласен(а) с условией:
//                     <input
//                         type="checkbox"
//                         name="box"
//                         onChange={() => setCheckbox(!checkbox)}
//                         value={checkbox}
//                     />
//                 </div>
//                 <button className="btn" disabled={!checkbox} onClick={click}>Send</button>
//             </form>
//             </div>
//         </>
//     );
// }

class Form extends React.Component{
    constructor() {
        super();
        this.state = {
            checkbox: false
        }
        this.Checkbox = this.Checkbox.bind(this)
        this.click = this.click.bind(this)
    }
    Checkbox = () => {
        this.setState({checkbox: !this.state.checkbox})
    }
     click = () => {
         alert('Works')
     }
    render() {
        return(
            <div className="container">
                <form>
                    <div className="name"> Имя:
                        <input
                            type="text"
                            name="firstName"
                            required="Заполните поле"
                            placeholder="Введите имя"
                            disabled={this.state.checkbox}
                        />
                    </div>
                    <div className="email"> Email:
                        <input
                            type="text"
                            name="input_mail"
                            required="Заполните поле"
                            placeholder="example@gmail.com"
                            disabled={this.state.checkbox}
                        />
                    </div>
                    <div className="number"> Номер телефона:
                        <input
                            type="number"
                            name="phone"
                            required="Заполните поле"
                            placeholder="+996 XXX XX XX XX"
                            disabled={this.state.checkbox}
                        />
                    </div>
                    <div className="check">Согласен(а) с условией:
                        <input
                            type="checkbox"
                            name="box"
                            onChange={this.Checkbox}
                            value={this.state.checkbox}
                        />
                    </div>
                    <button className="btn" disabled={!this.state.checkbox} onClick={this.click}>Send</button>
                </form>
            </div>
        )
    }
}

export default Form;