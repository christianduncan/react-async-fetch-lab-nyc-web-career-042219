import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    render() {
        return (
            <div>
                {this.state.peopleInSpace.map((people, id) => <h1 key={id}>{people.name}</h1>)}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(({ people }) => this.setState({ peopleInSpace: people }))

    }

}

