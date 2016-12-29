import React from 'react';
import TextField from 'material-ui/TextField';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event, value){
        this.props.updateSearchValue(value)
    }
    render() {
        let styles = {
            input:{
                fontSize: 14,
            },
            labelStyle:{
                marginLeft: 5
            }
        }
        return (
            <div style={styles.container}>
                <TextField
                    style={styles.input}
                    hintStyle={styles.labelStyle}
                    inputStyle={styles.labelStyle}
                    fullWidth={true}
                    hintText="Search Reports"
                    onChange={this.handleChange}
                    value={this.props.searchValue}
                />
            </div>
        );
    }
}
Search.propTypes = {
    searchValue: React.PropTypes.string, // Search value
    updateSearchValue: React.PropTypes.func, // function to update the Search value
}

export default Search