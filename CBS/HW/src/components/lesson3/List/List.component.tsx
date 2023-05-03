import React, {Component} from 'react';
import classes from "./List.component.module.scss";

interface Props {
    listItems?: string[];
    needSort?: boolean;
    needUnique?: boolean;
    color?: string;
}

interface State {

}

class ListComponent extends Component<Props, State> {

    static defaultProps: Props = {
        listItems: [],
        needSort: false,
        needUnique: false
    };

    getUniqueItems(items: string[]) {
        return Array.from(new Set(items));
    }

    alphabetSorting(items: string[]): string[] {
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

    getItemsList(items: string[], needSort = false, needUnique = false) {

        let clonedItems = [...items];

        if (needSort) {
            clonedItems = this.alphabetSorting(clonedItems)
        }

        if (needUnique) {
            clonedItems = this.getUniqueItems(clonedItems)
        }

        return clonedItems.map((item, index) => <li key={index}>{item}</li>)
    }

    private changeColor() {
        console.log('Need change color to ' + this.props.color + ' and make list from state');
    }

    render() {

        const {listItems = [], needSort, needUnique} = this.props;
        return (
            <div>
                {
                    this.props.color
                    ? <button onClick={() => {this.changeColor()}}>Change Color</button> : ''
                }
                <ul className={classes.listWrapper}>
                    {
                        (listItems.length > 0)
                            ? this.getItemsList(listItems, needSort, needUnique)
                            :  <span>No names passed!</span>
                    }
                </ul>
            </div>
        );
    }
}

export default ListComponent;
