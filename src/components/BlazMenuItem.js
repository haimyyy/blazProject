import React from 'react';
import Divider from 'material-ui/Divider';

var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "August", "Sep", "Oct", "Nov", "Dec"
];

class BlazMenuItem extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.formatAMPM = this.formatAMPM.bind(this)
        this.TextAbstract = this.TextAbstract.bind(this)
    }
    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    TextAbstract(text, length) {
        if (text == null) {
            return ""
        }
        if (text.length <= length) {
            return text;
        }
        text = text.substring(0, length);
        let last = text.lastIndexOf(" ");
        text = text.substring(0, last);
        return text + "..."
    }

    render() {
        let styles = {
            container : {
                height: 53,
                width: '100%',
                position: 'relative',
                paddingTop: 5
            },
            topName: {
                fontSize: 14,
                position: 'absolute',
                left: 0,
                paddingLeft: 12,
                textOverflow:'ellipsis'
            },
            rightSection:{
                position: 'absolute',
                right: 0,
                paddingRight: 12,
                fontSize: 13,
            },
            time:{
                paddingRight: 4
            },
            timeBottom:{
                top: 12,
                position: 'relative'
            },
            bottom:{
                fontSize: 13,
                float: 'left',
                position: 'relative',
                top: 25,
                paddingLeft: 12,
                color: 'rgb(200,200,200)'
            }
        }
        let date = new Date(this.props.dataAndTime)
        return (
            <div style={styles.container}>
                <span style={styles.topName} title={this.props.name}>{this.TextAbstract(this.props.name, 26)}</span>
                <div style={styles.rightSection}>
                    <div>
                        <span style={styles.time}>{monthNames[date.getMonth()]}</span>
                        <span style={styles.time}>{date.getDate()}</span>
                    </div>
                    <span style={styles.timeBottom}>{this.formatAMPM(date)}</span>
                </div>
                <span style={styles.bottom}>{this.props.type}</span>
                <span style={styles.bottom}>{this.props.location}</span>
            </div>
        );
    }
}
BlazMenuItem.propTypes = {
    name:  React.PropTypes.string,
    dataAndTime: React.PropTypes.number,
    type: React.PropTypes.string,
    location: React.PropTypes.string,
}
export default BlazMenuItem