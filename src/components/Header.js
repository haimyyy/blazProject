import React from 'react';
import FaClose from 'react-icons/lib/fa/close';
import FaRefresh from 'react-icons/lib/fa/refresh';
import IconButton from 'material-ui/IconButton';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this)

    }
    handleToggle() {
        this.props.updateSidebarView()
    }
    render() {
        let styles = {
            title: {
                display: 'inline-block',
                color: 'rgb(82,155,205)',
                fontSize: 20,
                marginTop: 15,
                marginBottom: 15
            },
            container:{
                backgroundColor: 'rgb(247,248,248)',
                paddingLeft: 10,
                textAlign: 'left',
                position: 'relative'
            },
            xButton:{
                float: 'right',
                fontSize:17,
                fontWeight: 600,
                right: 0
            }
        }
        return (
            <div style={styles.container}>
                <span style={styles.title}>{this.props.text}</span>
                <IconButton  style={styles.xButton}
                             tooltip="Close"
                             onTouchTap={this.handleToggle}
                >
                   <FaClose/>
                </IconButton>

                <IconButton  style={styles.xButton}
                             tooltip="Refresh"
                             onTouchTap={this.props.loadData}
                >
                    <FaRefresh/>
                </IconButton>
            </div>

        );
    }
}

export default Header