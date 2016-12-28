import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    render() {
        let styles = {
            title: {
                display: 'inline-block'
            }
        }
        return (
            <div>
                <h4 style={styles.title}>{this.props.text}</h4>
                <IconButton  style={styles.title} tooltip="Font Icon" iconClassName="material-icons">
                    x
                </IconButton>
            </div>

        );
    }
}

export default Header