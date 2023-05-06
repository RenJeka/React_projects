import React, {ChangeEvent, Component, FormEvent} from 'react';
import classes from "./JsonFormValidation.component.module.scss"

interface Props {
}

interface State {
    login: string;
    password: string;
    email: string;
    resultJson: string;
}

class JsonFormValidationComponent extends Component<Props, State> {
    state: State = {
        login: '',
        password: '',
        email: '',
        resultJson: ''
    }
    inputHandler(event: ChangeEvent<HTMLInputElement>) {
            const name: string = event.target.name;
            const value: string = event.target.value;
        this.setState((state: State) => {
            return {
                [name]: value
            } as Pick<State, keyof State>;
        });
    }

    submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        this.setState((state: State) => {
            const resultJson = {
                login: state.login,
                password: state.password,
                email: state.email,
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
                            value={this.state.login}
                            onChange={(e) => {this.inputHandler(e)}}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={(e) => {this.inputHandler(e)}}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={(e) => {this.inputHandler(e)}}
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

export default JsonFormValidationComponent;
