import React, { Component,  } from 'react'
import {connect} from "react-redux";


 class LoginPage extends Component {
    constructor(){
        super()
        this.userNameInput = React.createRef()
        this.userpassword = React.createRef()
    };
    async onSubmitHandler(event){
        event.preventDefault()
      const  userName = this.userNameInput.current.value;
       const password = this.userPassword.current.value;
        this.setState({
            userName,
            password
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(event)=> this.onSubmitHandler(event)}>
                <input type='text' required={true} ref={this.userNameInput()}>user name</input>
                <input type='password' required={true} ref={this.userPassword()}>password</input>
                <input type='submit' >submit </input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        user: state.users.currentUser

    }
}




export default connect(mapStateToProps, null)(LoginPage);
