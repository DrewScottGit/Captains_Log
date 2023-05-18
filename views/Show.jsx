const React = require('react');

class Show extends React.Component {
    render () {
        const log = this.props.log
        return (
            <div>
                <h1>Show Page</h1>
                The {log.name} is {log.title}
                {log.shipIsBroken? '. Its broken' : '. It is not broken'}

                <nav>
                    <a href='/logs'>Return to Captains log</a>
                </nav>
            </div>
        );
    }
}

module.exports = Show;