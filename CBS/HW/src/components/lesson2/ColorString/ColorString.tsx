import React, {Component} from 'react';
import {Color} from '../../../barrel';
import "./ColorString.scss";

interface Props {
    phrase?: string,
    colorSet?: Set<Color>
}

interface State {
    currentColor: Color,
    iterator: IterableIterator<[Color, Color]>
}

class ColorString extends Component<Props, State> {

    state = {
        currentColor: this.props.colorSet?.values().next().value,
        iterator: this.props.colorSet?.entries() as IterableIterator<[Color, Color]>
    };

    static defaultProps: Props = {
        colorSet: new Set([Color.WHITE, Color.YELLOW, Color.RED, Color.GREEN, Color.BLUE]),
        phrase: 'Default color string phrase'
    };

    changeColor() {
        this.setState((state: State, props: Props) => {

            const { value, done } = state.iterator.next();
            if (done) {

                const iterator = props.colorSet?.entries() as IterableIterator<[Color, Color]>

                return {
                    iterator: iterator,
                    currentColor: iterator?.next().value[0]
                }
            }

            return {
                iterator: state.iterator,
                currentColor: value[0]
            };
        });
    }

    resetColor() {
        this.setState((state, props) => {
            const newIterator = this.props.colorSet?.entries() as IterableIterator<[Color, Color]>;
            return {
                iterator: newIterator,
                currentColor: newIterator?.next().value[0]
            }
        })
    }

    render() {
        const {phrase} = this.props;
        return (
            <div
                style={{color: this.state.currentColor}}
                className={'color-string-wrapper'}
                onClick={this.changeColor.bind(this)}
            >
                {phrase}
            </div>
        );
    }
}

export default ColorString;
