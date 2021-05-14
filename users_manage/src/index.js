import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Users from './UsersList';

class Index extends PureComponent {
  state = {
      arrUsers: [
        {id: 1, name: "Artem", surname: "Golovin", age:24, gender: "М"}
      ]
  }

  onClickAddUser = (event) => {
    event.preventDefault();
    const arr = [...this.state.arrUsers]
    const formData = new FormData(event.target);
    const data = [...formData.values()];
    const usercard = {id: this.state.arrUsers.length + 1,name: data[0], surname: data[1], age: data[2], gender: data[3]};
    arr.push(usercard)
    this.setState({ arrUsers: arr })
    console.log(this.state)
  }



  onClickDelLiButton = (event) => {
    event.preventDefault();
    const arr = [...this.state.arrUsers];
    const arr2 = arr.filter((el) => {
      console.log(event.target.parentElement.textContent.split(' ')[0]); 
      return el.name !== event.target.parentElement.textContent.split(' ')[0];
    })
    this.setState( {arrUsers: arr2})
  }

  onClickFilterMale = (event) => {
    const arr = [...this.state.arrUsers];
    const arr2 = arr.filter((el) => {
      return el.gender === "М" 
    })
    this.setState( {arrUsers: arr2})
  }

  onClickFilterFemale = () => {
    const arr = [...this.state.arrUsers];
    const arr2 = arr.filter((el) => {
      return el.gender === "Ж" 
    })
    this.setState( {arrUsers: arr2})
  }

  onSubmitFormSearch = (event) => {
    event.preventDefault();
    const arr = [...this.state.arrUsers];
    const formData = new FormData(event.target);
    const data = [...formData.values()];
    const arr2 = arr.filter((el) => {
      return el.name === data[0]
    })
    this.setState( {arrUsers: arr2})
  }

  render() {
    return(
      <div className="all">
        <h1 className="h1">Список пользователей</h1>
        <Form onClickAddUserButton={this.onClickAddUser} />
        <div className="filters">
        <div className="buttonsfilter">
        <button className="buttonfilter malebutonchange" onClick={this.onClickFilterMale}>М</button>
        <button className="buttonfilter femalebutonchange" onClick={this.onClickFilterFemale}>Ж</button>
        <form className="searchform" onSubmit={this.onSubmitFormSearch}>
          <input className="inputsearch" name="searchofname" placeholder="name"></input>
          <button type="submit">Поиск по имени</button>
        </form>
        </div>
        </div>
        <Users arrPropsUsersList={this.state.arrUsers} onClickDelLiButtonProp={this.onClickDelLiButton} /> 
      </div>
    )

  }
}

const root = document.querySelector('#root')

ReactDOM.render(<Index />, root);


