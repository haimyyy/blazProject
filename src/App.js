import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SidebarContainer from './container/SidebarContainer'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <SidebarContainer/>
        );
    }
}


export default App;