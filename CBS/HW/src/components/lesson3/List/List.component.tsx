import React, {Component} from 'react';
import classes from "./List.component.module.scss";

interface Props {
    names?: string[];
    needSort?: boolean
}

interface State {
}

class ListComponent extends Component<Props, State> {

    static defaultProps: Props = {
        names: [],
        needSort: false
    };

    getUniqueNames(names: string[]) {
        return Array.from(new Set(names));
    }

    getNameList(names: string[], needSort: boolean = false) {

        const uniqueNames = this.getUniqueNames(names);

        const sortedName = [...uniqueNames.sort((prev, next) => {
            if (prev.toLowerCase() < next.toLowerCase()) {
                return -1;
            }
            if (prev.toLowerCase() < next.toLowerCase()) {
                return 1;
            }
            return 0;
        })]
        return sortedName.map((name, index) => <li key={index}>{name}</li>)
    }

    render() {

        const {names = [], needSort} = this.props;
        return (
            <ul className={classes.listWrapper}>
                {
                    (names.length > 0)
                    ? this.getNameList(names, needSort)
                    :  <span>No names passed!</span>
                }
            </ul>
        );
    }
}

export default ListComponent;
