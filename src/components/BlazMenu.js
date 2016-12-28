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
        let headerHeight = ReactDOM.findDOMNode(this.refs.header).getBoundingClientRect().height
        let searchHeight = ReactDOM.findDOMNode(this.refs.search).getBoundingClientRect().height
        this.setState({listHeight: this.props.pageHeight - searchHeight - headerHeight})

    }
    /*componentDidUpdate(nextProps){
     if (nextProps.pageHeight !== this.props.pageHeight) {
     let headerHeight = ReactDOM.findDOMNode(this.refs.header).getBoundingClientRect().height
     let searchHeight = ReactDOM.findDOMNode(this.refs.search).getBoundingClientRect().height
     this.setState({listHeight: nextProps.pageHeight - searchHeight - headerHeight})
     }
     }*/
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
        let sortMenuItems
        let menuItems
        if(this.props.reports.length > 0) {
            sortMenuItems = this.props.reports
            sortMenuItems.sort(this.compare)
            menuItems = sortMenuItems.map((item,index) => {
                if (_.includes(item.name.toLowerCase(), this.props.searchValue))
                    return <div key={index}>
                        <BlazMenuItem
                            key={index}
                            name={item.name}
                            dataAndTime={item.updated}
                            type={item.type}
                            location={item.location}/>
                        <Divider />
                    </div>
            })
        } else {
            menuItems = null
        }
        return (
            <div>
                <Header
                    ref="header"
                    text={"Reports " + this.props.amountReports}
                    updateSidebarView={this.props.updateSidebarView}
                    loadData={this.props.loadData}
                />
                <Search
                    ref="search"
                    searchValue={this.props.searchValue}
                    updateSearchValue={this.props.updateSearchValue}/>
                <List style={styles.list}>
                    {menuItems}
                </List>
            </div>

        );
    }
}

export default BlazMenu