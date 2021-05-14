import React, { PureComponent } from 'react';

class Users extends PureComponent {
    render () {
        const arr = [...this.props.arrPropsUsersList];
        return (
            arr.map((el) => 
            <div className="userlistcontainer">
                <ol className="list">
                    <li className="user">
                        {el.name} {el.surname},  {el.age},  {el.gender}
                        <button className="delbutton" onClick={this.props.onClickDelLiButtonProp}>Удалить</button></li>
                </ol>
            </div>
            )
        )
    }
}

export default Users;   