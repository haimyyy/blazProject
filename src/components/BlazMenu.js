import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Header from './Header'

class BlazMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    render() {
        let styles = {

        }
        return (
            <div>
                <Header
                    text={"Reports " + this.props.amountReports}
                />

                <List>
                    <ListItem primaryText="Inbox"  />
                    <ListItem primaryText="Starred"  />
                    <ListItem primaryText="Sent mail"  />
                    <ListItem primaryText="Drafts"  />
                    <ListItem primaryText="Inbox"  />
                </List>
            </div>

        );
    }
}

export default BlazMenu