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
            pageHeight: 0
        };
        this.handleToggle = this.handleToggle.bind(this)
    }
    componentWillMount() {
        this.props.actions.loadData()
    }
    handleToggle() {
        this.props.actions.updateSidebarView()
    }
    componentDidMount() {
        this.setState({pageHeight: window.screen.availHeight})
    }
    render() {
        let styles = {
            container: {
                padding: 30
            },
            paper: {
                width: 250,
                textAlign: 'center',
                display: 'inline-block',
                height: this.state.pageHeight
            }
        }

        let blazMenu = this.props.sidebar.isDisplayed ? <Paper style={styles.paper} zDepth={2} >
            <BlazMenu
                amountReports={this.props.sidebar.reports.length}
                reports={this.props.sidebar.reports}
                updateSearchValue={this.props.actions.updateSearchValue}
                searchValue={this.props.sidebar.searchValue}
                pageHeight={this.state.pageHeight - 30}
                updateSidebarView={this.props.actions.updateSidebarView}
                loadData={this.props.actions.loadData}
            />
        </Paper> : null

        return (
            <div style={styles.container}>
                <div>
                    <RaisedButton
                        label={this.props.sidebar.isDisplayed ? "close sidebar" : "open sidebar"}
                        style={{float:'right'}}
                        onTouchTap={this.handleToggle}
                    />
                    {blazMenu}
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        sidebar: state.sidebar
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sidebarActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);