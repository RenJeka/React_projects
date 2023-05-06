import React, {ChangeEvent, Component, FormEvent} from 'react';
import classes from "./ListRedux.component.module.scss";
import {connect} from "react-redux";
import {MyStore} from "../../../redux/initialStore";
import {Dispatch} from "redux";
import {addItemActionCreator} from "./listAction";

interface Props {
    listItems?: string[];
    needSort?: boolean;
    needUnique?: boolean;
    color?: string;
    colors?: string[];
    dispatch: Dispatch;
}

interface State {
    listItems?: string[];
    currentColor: string;
    colors: string[];
    newItem: string;
}

class ListReduxComponent extends Component<Props, State> {

    static defaultProps: Props = {
        needSort: false,
        needUnique: false
    } as unknown as Props;

    state: State = {
        currentColor: '',
        colors: this.props.colors || [],
        newItem: ''
    }

    private getUniqueItems(items: string[]) {
        return Array.from(new Set(items));
    }

    private alphabetSorting(items: string[]): string[] {
        const cloneArray = [...items];
        return cloneArray.sort((prev, next) => {
            if (prev.toLowerCase() < next.toLowerCase()) {
                return -1;
            }
            if (prev.toLowerCase() < next.toLowerCase()) {
                return 1;
            }
            return 0;
        })
    }

    private getItemsList(
        items: string[],
        needSort = false,
        needUnique = false,
        color?: string,
        colors?: string[]
    ) {

        let clonedItems = [...items];

        if (needSort) {
            clonedItems = this.alphabetSorting(clonedItems)
        }

        if (needUnique) {
            clonedItems = this.getUniqueItems(clonedItems)
        }

        if (color) {
            const currentColor = this.correctColor(color);
            return clonedItems.map((item, index) => <li style={{color: currentColor}} key={index}>{item}</li>);
        }

        if (colors && colors.length) {
            const colorsWithCorrectLength = this.normalizeColorArrayLength(colors, clonedItems.length);
            return clonedItems.map((item, index) => {
                const currentColor = this.correctColor(colorsWithCorrectLength[index]);
                return <li style={{color: currentColor}} key={index}>{item}</li>;
            });
        }

        return clonedItems.map((item, index) => <li key={index}>{item}</li>);
    }

    private normalizeColorArrayLength(colors: string[], needArrayLength: number): string[] {
        if (colors.length < needArrayLength) {
            const colorsWithCorrectLength = [];
            for (let i = 0; i < needArrayLength; i++) {
                colorsWithCorrectLength.push(colors[i % colors.length]);
            }
            return colorsWithCorrectLength;
        }

        if (colors.length > needArrayLength) {
            return colors.slice(0, needArrayLength)
        }

        return colors;
    }

    private correctColor(color: string): string {
        const currentColor = color
        if (CSS.supports("color", currentColor)) {
            return currentColor;
        } else {
            console.warn(`Color "${currentColor}" provided incorrectly and wouldn't be used.`)
            return 'inherit';
        }
    }

    private changeColor() {
        if (this.props.color) {
            this.setState((state: State) => {
                return {
                    currentColor: this.correctColor(this.props.color!)
                }
            });
        }
    }

    private shuffleColors() {
        if (this.props.colors) {
            if (this.state.colors.length) {
                this.setState((state: State) => {
                    const shuffledColors = [...state.colors!].sort(() => {
                        return Math.random() - 0.5;
                    });

                    return {
                        colors: shuffledColors
                    }
                });
            } else {
                this.setState((state: State, props: Props) => {
                    return {
                        colors: props.colors!
                    }
                });
            }
        }
    }

    inputHandler(event: ChangeEvent<HTMLInputElement>) {
        this.setState((state: State) => {
            return {
                newItem: event.target.value
            } as Pick<State, keyof State>
        })
    }

    submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.dispatch(addItemActionCreator(this.state.newItem));
    }

    render() {
        const {needSort, needUnique, listItems = []} = this.props;
        const {currentColor, colors} = this.state;
        return (
            <div className={classes.container}>
                <h5>List Redux</h5>
                {
                    this.props.color
                        ? <button onClick={() => {
                            this.changeColor()
                        }}>Change Color</button> : ''
                }
                {
                    this.props.colors
                        ? <button onClick={() => {
                            this.shuffleColors()
                        }}>Shuffle colors</button> : ''
                }

                <form onSubmit={(e) => {this.submitHandler(e)}}>
                    <input
                        type="text"
                        onChange={(e) => {this.inputHandler(e)}}
                        // onKeyPress={''}
                    />
                    <input type={"submit"} value={"Add Item"} />
                </form>
                <ul className={classes.listWrapper}>
                    {
                        (listItems.length > 0)
                            ? this.getItemsList(listItems, needSort, needUnique, currentColor, colors)
                            : <span>No names passed!</span>
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (store: MyStore) => {
    return {
        listItems: store.list
    }
};


// High order Component
export default connect(mapStateToProps)(ListReduxComponent);
