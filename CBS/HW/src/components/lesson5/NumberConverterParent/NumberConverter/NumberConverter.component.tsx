import React, {ChangeEvent, Component} from 'react';
import classes from "./NumberConverter.component.module.scss"

interface Props {
    fraction?: number;
}

interface State {
    numberValue: number;
}

const FRACTION_LIMIT = 6;
const MULTIPLICATION_FACTOR = 5;

class NumberConverterComponent extends Component<Props, State> {

    state: State = {
        numberValue: 0
    }

    static defaultProps = {
        fraction: 0
    }
    numberConverterHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState({numberValue: Math.round(parseInt(event.target.value))})
    }


    getNormalizedFraction(): number {
        let {fraction = 0} = this.props;
        if (fraction > FRACTION_LIMIT) {
            console.warn(`The fraction that you have passed (${fraction}) is more than ${FRACTION_LIMIT}. Please, pass the fraction from 0 to ${FRACTION_LIMIT}`);
            fraction = 0
        }
        return fraction;
    }

    getConvertedRatio() {
        const fraction = this.getNormalizedFraction();
        return (MULTIPLICATION_FACTOR / (Math.pow(10, fraction)));
    }

    convertNumber(number: number): number | string {
        const outputNumber = number * this.getConvertedRatio();
        return outputNumber;
        // return outputNumber.toFixed(this.getNormalizedFraction());
    }


    render() {
        return (
            <div className={classes.wrapper}>
                <label>
                    Number converter ( number * {this.getConvertedRatio()})
                    <input type="number" value={this.state.numberValue} onChange={(e)=> {this.numberConverterHandler(e)}} />
                </label>
                {(this.state.numberValue < 0 || this.state.numberValue > 0) && <div className={classes.numberOutput}>{this.convertNumber(this.state.numberValue)}</div>}
            </div>
        );
    }
}

export default NumberConverterComponent;
