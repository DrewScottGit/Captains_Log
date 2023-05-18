const React = require('react');

class Edit extends React.Component{
    render() {
        return(
            <div>
                <form action = {`/logs/${this.props.log_id}?_method = PUT`} method = "POST">
                    Title: <input type = 'text' name = 'title' defaultValue={this.props.log.title} />
                    Entry: <input type='text' name='entry' defaultValue={this.props.log.entry} />
                    Ship broken?:
                        {this.props.log.shipIsBroken? <input type='checkbox' name='shipIsBroken' defaultChecked />: <input type='checkbox' name='shipIsBroken' />}
                        <br></br>

                        <input type="submit" value="Submit Changes" />
                </form>
            </div>
        );
    }
}

module.exports = Edit;