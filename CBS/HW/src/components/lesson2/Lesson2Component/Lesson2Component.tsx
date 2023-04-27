import React, {Component} from 'react';
import {Color} from '../../../barrel';
import "./Lesson2Component.scss";

interface Props {
    phrase?: string,
    colorSet?: Set<Color>
}

interface State {
    currentColor: Color,
    iterator: IterableIterator<[Color, Color]>
}

class Lesson2Component extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            currentColor: props.colorSet?.values().next().value,
            iterator: props.colorSet?.entries() as IterableIterator<[Color, Color]>
        };
    }

    static defaultProps: Props = {
        colorSet: new Set([Color.BLACK, Color.WHITE, Color.GREY, Color.BLUE, Color.GREEN]),
        phrase: 'lesson 2 default phrase'
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

    render() {
        return (
            <div style={{color: this.state.currentColor}} onClick={this.changeColor.bind(this)}>
                {this.props.phrase}
            </div>
        );
    }
}

export default Lesson2Component;
