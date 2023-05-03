import React, {Component} from 'react';
import {ListComponent} from "../../../barrel";
import classes from "./TwoListAndButton.component.module.scss";
import {strict} from "assert";


interface Props {
    listItems?: string[];
}

interface State {
    leftList: string[];
    rightList: string[];
}

class TwoListAndButtonComponent extends Component<Props, State> {

    state: State = {
        leftList: this.props.listItems || [],
        rightList: []
    }

    translateListItem() {
        if (this.state.leftList.length < 1) {
            return
        }
        this.setState((state: State) => {
            const firstElementLeftList = state.leftList.shift();
            if (firstElementLeftList) {
                state.rightList.push(firstElementLeftList)
            }
            return {
                leftList: state.leftList,
                rightList: state.rightList
            };
        });
    }

    render() {

        const {listItems = []} = this.props;

        return (
            <div className={classes.wrapper}>
                <ListComponent listItems={this.state.leftList} needSort={false}/>
                <button onClick={() => {this.translateListItem()}}>{this.state.leftList.length ? '→' : 'No items!'}</button>
                <ListComponent listItems={this.state.rightList} needSort={false}/>
            </div>
        );
    }
}

export default TwoListAndButtonComponent;
