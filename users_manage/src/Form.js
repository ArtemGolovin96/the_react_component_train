import React, { PureComponent } from 'react';

class Form extends PureComponent {
    render () {
        return (
            <form className="buttonscontainer" onSubmit={this.props.onClickAddUserButton}>
            <input className="inputform inputname" placeholder="name" name="name"></input>
            <input className="inputform inputsurname" placeholder="surname" name="surname"></input>
            <input className="inputform inputage" type="number" placeholder="age" name="age"></input>
            <input className="inputform inputgender" placeholder="gender" name="gender"></input>
            <button className="addbutton" type="submit">Добавить пользователя</button>
            </form>
        )
    }
}

export default Form;