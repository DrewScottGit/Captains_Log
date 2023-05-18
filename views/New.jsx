const React = require('react');

class New extends React.Component{
    render(){
        return(
           <div>
                <h1>Captains Log</h1> 
                    <form action='/logs' method="POST">
                       Title: <input type="text" name="title"/>
                       Entry:  <input type="text" name="entry"/>
                       Ship is Broken: <input type="checkbox" name="shipIsBroken"/>
                        <input type="submit" value="Create log"/>
                    </form>

            </div>

    )}
}

module.exports = New;