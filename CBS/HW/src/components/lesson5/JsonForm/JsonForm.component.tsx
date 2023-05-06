import React, {ChangeEvent, Component, FormEvent} from 'react';
import classes from "./JsonForm.component.module.scss"


interface Props {
}

interface State {
    loginInput: string;
    passwordInput: string;
    emailInput: string;
    resultJson: string;
}

class JsonFormComponent extends Component<Props, State> {
    state: State = {
        loginInput: '',
        passwordInput: '',
        emailInput: '',
        resultJson: ''
    }


    loginInputHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState((state: State) => ({loginInput: event.target.value}))
    }

    passwordInputHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState((state: State) => ({passwordInput: event.target.value}))
    }

    emailInputHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState((state: State) => ({emailInput: event.target.value}))
    }

    submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log('Form event:', event);


        this.setState((state: State) => {

            const resultJson = {
                login: state.loginInput,
                password: state.passwordInput,
                email: state.emailInput,

            }
            return {
                resultJson: JSON.stringify(resultJson)

            }
        })

    }

    render() {
        return (<form
                className={classes.form}
                onSubmit={(e) => {this.submitHandler(e)}}
            >
                    <h5>JSON Form</h5>
                    <label>
                        Login:
                        <input
                            name="login"
                            type="text"
                            value={this.state.loginInput}
                            onChange={(e) => {this.loginInputHandler(e)}}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={this.state.passwordInput}
                            onChange={(e) => {this.passwordInputHandler(e)}}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            name="email"
                            type="email"
                            value={this.state.emailInput}
                            onChange={(e) => {this.emailInputHandler(e)}}
                        />
                    </label>
                    <input type="submit" value={'Get Form Data in JSON'}/>
                    {
                        this.state.resultJson
                        && <pre className={classes.jsonOutput}>{this.state.resultJson}</pre>
                    }
                </form>
        );
    }
}

export default JsonFormComponent;
