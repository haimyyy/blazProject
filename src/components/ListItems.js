import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from 'material-ui/TextField';


export default class ListItems extends React.Component {
    constructor(props) {
        super();
        this.calculate = this.calculate.bind(this)
        this.updateSelectedList = this.updateSelectedList.bind(this)
    }

    calculate() {
        return ((1 /this.props.num1) + (1 /this.props.num2) + (1 /this.props.num3)).toFixed(3)
    }
    componentDidUpdate() {

    }
    updateSelectedList() {
        this.props.updateSelectedList(this.props.listNumber, this.calculate())
    }
    render () {
        let styles = {
            liStyle: {
                display: 'inline-block',
                width: '18%',
                background: this.calculate() > 1 ? '#eeeeee' : 'red',
                border: '1px solid #494949',
                padding: 5,
            },
            ulStyle: {
                width: '100%',
                margin: '0 auto',
                padding: 0,
                marginTop: 10,
                marginBottom: 10
            }
        }
        return (
            <div>
                <ul style={styles.ulStyle}>
                    <li style={{display:'inline-block', }}>
                        <RaisedButton style={{position: 'relative', }}
                                      onTouchTap={this.updateSelectedList}>select</RaisedButton>
                    </li>
                    <li style={styles.liStyle}>
                        {this.props.num1}
                    </li>
                    <li style={styles.liStyle}>
                        {this.props.num2}
                    </li>
                    <li style={styles.liStyle}>
                        {this.props.num3}
                    </li>

                    <li style={styles.liStyle}>
                        <span>sum = </span>
                        <span>{this.calculate()}</span>
                    </li>
                </ul>
                {this.props.isSelectedList == true ?
                    <div>
                        <span>{this.calculate()}</span>
                        <TextField
                            onChange={(node, value)=>(this.props.updateDualNumber(value))}
                            ref={node=> {this.firstInput = node}}
                            style={styles.input}
                            hintStyle={styles.labelStyle}
                            inputStyle={styles.labelStyle}
                            hintText="How much do you whant to bet"/>
                        <div>
                            <span>price: {this.props.betNumber / this.calculate()} </span>
                            <span></span>
                        </div>
                    </div> : null}
            </div>
        )
    }
}