import { useState } from "react";

function CheckoutForm({onConfirm})
{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault() 

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return  (
        <div>
            <form onSubmit={handleConfirm}>
            <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                <input className="input" type="text" value = {name} onChange={({target}) => setName(target.value)}  placeholder="Ingrese su nombre"></input>
            </div>
            <p className="help">Por ejemplo: Carlos</p>
            </div>

            <div className="field">
                <label className="label">Telefono</label>
                <div className="control">
                <input className="input" type="text" value = {phone} onChange={({target}) => setPhone(target.value)}  placeholder="Ingrese su numero de telefono"></input>
            </div>
            <p className="help">Por ejemplo: 2223010203</p>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                <input className="input" type="email" value = {email} onChange={({target}) => setEmail(target.value)} placeholder="Ingrese su email"></input>
            </div>
            <p className="help">Por ejemplo: emailprueba@gmail.com</p>
            </div>

            <div className="control">
            <button type = 'submit' className="button is-primary">Crear Orden</button>
            </div>
            </form>
        </div>
    )
}

export default CheckoutForm