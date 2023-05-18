const React = require('react');

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return(
            <div>
                <h1>Index Page</h1>

                <ul>
                    {logs.map((log, i)=>{

                        return (
                            <li>
                                Daily log is {' '} <a href={`/logs/${log_id}`}>
                                    {log.title}
                                        </a> {' '}

                                        entry is {log.entry} <br></br>

                                            {log.shipIsBroken
                                                ? `True`
                                                : `False`}
                                            <br></br>

                                            <a href={`/logs/${log_id}/edit`}>Edit</a>

                                            <form id = {`${log_id}`} action = {`/log/${log_id}?_method = DELETE`} method = 'POST'>
                                            <input type = 'submit' value = 'DELETE' />
                                            </form>
                                        </li>
                        );
                    })}

                </ul>

                <nav>
                    <a href = '/logs/new'>Creat Log</a>
                </nav>
            </div>
        );
    }
}

module.exports = Index;