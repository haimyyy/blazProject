import React from "react";
import * as sidebarActions from "../actions/sidebarActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import RaisedButton from "material-ui/RaisedButton";
import Drawer from "material-ui/Drawer";
import BlazMenu from "../components/BlazMenu";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class SidebarContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            pageHeight: 0,
            thirdInput:0,
            firstInput:0,
            secInput:0
        };
        this.handleToggle = this.handleToggle.bind(this)
        this.calculate = this.calculate.bind(this)
    }
    componentWillMount() {
        this.props.actions.loadData()
    }
    handleToggle() {
        this.props.actions.updateSidebarView()
    }
    componentDidMount() {
        //found screen height and update the component
        this.setState({pageHeight: window.innerHeight - 20})
    }
    calculate() {
        console.log(this.state.firstInput)
        console.log(this.state.secInput)
        console.log(this.state.thirdInput)
    }
    render() {
        let styles = {
            container: {
                paddingRight: 30
            },
            paper: {
                width: 250,
                textAlign: 'center',
                display: 'inline-block',
                height: this.state.pageHeight // body margin
            },
            paper2: {
                width: '50%',
                marginRight: '30%',
                marginLeft: '30%',
                marginTop: 30,
                textAlign: 'center',
                height: 700,  // body margin
                paddingTop:30
            },
            input:{
                fontSize: 14,
            },
            labelStyle:{
                marginLeft: 5
            }
        }

        // menu items
        let blazMenu = this.props.sidebar.isDisplayed ? <Paper style={styles.paper} zDepth={2} >
                <BlazMenu
                    reports={this.props.sidebar.reports}
                    updateSearchValue={this.props.actions.updateSearchValue}
                    searchValue={this.props.sidebar.searchValue}
                    pageHeight={this.state.pageHeight}
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
                    <Paper style={styles.paper2}>
                        <TextField
                            ref={node=> {this.firstInput = node}}
                            onChange={(node, value)=>(this.setState({firstInput:value}))}
                            style={styles.input}
                            hintStyle={styles.labelStyle}
                            inputStyle={styles.labelStyle}
                            hintText="enter number"/>
                        <TextField
                            onChange={(node, value)=>(this.setState({secInput:value}))}
                            ref={node=> {this.secInput = node}}
                            style={styles.input}
                            hintStyle={styles.labelStyle}
                            inputStyle={styles.labelStyle}
                            hintText="enter number"/>
                        <TextField
                            onChange={(node, value)=>(this.setState({thirdInput:value}))}
                            ref={node=> {this.thirdInput = node}}
                            style={styles.input}
                            hintStyle={styles.labelStyle}
                            inputStyle={styles.labelStyle}
                            hintText="enter number"/>
                    </Paper>
                    <RaisedButton
                        label={"calculate"}
                        style={{float:'none'}}
                        onTouchTap={this.calculate}
                    />
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