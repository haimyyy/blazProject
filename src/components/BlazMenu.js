import React from 'react';
import ReactDOM from 'react-dom';
import BlazMenuItem from './BlazMenuItem';
import {List, ListItem} from 'material-ui/List';
import Header from './Header'
import Search from './Search'
import Divider from 'material-ui/Divider';
import _ from 'lodash'

class BlazMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            listHeight: 0
        };
        this.compare = this.compare.bind(this)
    }
    componentDidMount() {
        //found components (search and header) height and update the list height
        let headerHeight = ReactDOM.findDOMNode(this.refs.header).getBoundingClientRect().height
        let searchHeight = ReactDOM.findDOMNode(this.refs.search).getBoundingClientRect().height
        this.setState({listHeight: this.props.pageHeight - searchHeight - headerHeight -20 })// 20 => for padding

    }
    //Sort by update function
    compare(a,b){
        if (a.updated > b.updated)
            return -1;
        if (a.updated < b.updated)
            return 1;
        return 0;
    }

    render() {
        let styles = {
            list: {
                overflowY: 'scroll',
                height: this.state.listHeight
            }
        }
        let menuItems // list of reports to show
        let amountReports = 0 // reports amount

        if(this.props.reports.length > 0) {
            menuItems = this.props.reports
            menuItems.sort(this.compare)
            menuItems = menuItems.map((item,index) => {
                if (_.includes(item.name.toLowerCase(), this.props.searchValue.toLowerCase())){
                    amountReports++;
                    return <div key={index}>
                        <BlazMenuItem
                            key={index}
                            name={item.name}
                            dataAndTime={item.updated}
                            type={item.type}
                            location={item.location}/>
                        <Divider />
                    </div>
                }
            })
        } else {
            menuItems = null
        }
        return (
            <div>
                <Header
                    ref="header"
                    text={"Reports " + amountReports}
                    updateSidebarView={this.props.updateSidebarView}
                    loadData={this.props.loadData}
                />
                <Search
                    ref="search"
                    searchValue={this.props.searchValue}
                    updateSearchValue={this.props.updateSearchValue}
                />
                <List style={styles.list}>
                    {menuItems}
                </List>
            </div>

        );
    }
}

BlazMenu.propTypes = {
    reports: React.PropTypes.array,
    updateSearchValue: React.PropTypes.func,
    searchValue: React.PropTypes.string,
    pageHeight: React.PropTypes.number,
    updateSidebarView: React.PropTypes.func,
    loadData: React.PropTypes.func,
}

export default BlazMenu