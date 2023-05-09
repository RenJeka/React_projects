import React, {ChangeEvent, Component, FormEvent} from 'react';
import classes from "./JsonFormValidation.component.module.scss"

interface Props {
}

type inputs = "login" | "password" | "email";

interface State {
    login: string;
    password: string;
    email: string;
    resultJson: string;
    validation?: {
        login:  boolean,
        password: boolean,
        email: boolean
    }
}

class JsonFormValidationComponent extends Component<Props, State> {
    state: State = {
        login: '',
        password: '',
        email: '',
        resultJson: '',
        validation: {
            login: false,
            password: false,
            email: false
        }
    }
    inputHandler(event: ChangeEvent<HTMLInputElement>) {
        const name: keyof State = event.target.name as inputs;
        const value: string = event.target.value;
        this.setState((state: State) => {
            let validation = {...state.validation!};
            validation[name] = this.validateInput(name, value)
            return {
                [name]: value,
                validation:validation
            } as unknown as Pick<State, keyof State>;
        });
    }

    submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (Object.values(this.state.validation!).some(value => !value)) {
            console.log('Form is not valid:');
            return
        }

        console.log('submit success:');
    }

    validateInput(inputName: string, inputValue: string): boolean {
        switch (inputName) {
            case "login": {
                return !!inputValue;
            }

            case "password": {
                return !!inputValue;
            }
            case "email": {
                return !!inputValue &&  /^\S+@\S+\.\S+$/.test(inputValue);
            }

            default: {
                return true;
            }
        }
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
                            aria-invalid={!this.state.validation?.login}
                            onChange={(e) => {this.inputHandler(e)}}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            aria-invalid={!this.state.validation?.password}
                            onChange={(e) => {this.inputHandler(e)}}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            name="email"
                            type="email"
                            value={this.state.email}
                            aria-invalid={!this.state.validation?.email}
                            onChange={(e) => {this.inputHandler(e)}}
                        />
                    </label>
                    <input type="submit" value={'Get Form Data in JSON'}/>
                </form>
        );
    }
}

export default JsonFormValidationComponent;
