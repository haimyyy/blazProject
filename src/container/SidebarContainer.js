import React from "react";
import * as sidebarActions from "../actions/sidebarActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import RaisedButton from "material-ui/RaisedButton";
import Drawer from "material-ui/Drawer";
import BlazMenu from "../components/BlazMenu";
import Paper from 'material-ui/Paper';
class SidebarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this)
    }
    componentWillMount () {
        this.props.actions.loadData()
    }
    handleToggle() {
        this.setState({open: !this.state.open})
    }
    render() {
        let styles = {
            container: {
                padding: 30
            },
            paper: {
                width: 250,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block'
            }
        }

        return (
            <div style={styles.container}>
                <div>
                    <RaisedButton
                        label="open sidebar"
                        style={{float:'right'}}
                        onTouchTap={this.handleToggle}
                    />
                    <Drawer open={this.state.open}>
                        <BlazMenu></BlazMenu>
                    </Drawer>
                    <Paper style={styles.paper} zDepth={2} >
                        <BlazMenu></BlazMenu>
                    </Paper>

                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        state: state
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sidebarActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);