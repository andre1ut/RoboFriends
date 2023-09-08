import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            robotsF: [],
            inputValue:''
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            this.setState({ robots: users });
            this.setState({ robotsF: users});
        });
    }

    onSearchChange(event) {
        const filterR = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(event.target.value.toLowerCase());
        });
        this.setState({ robotsF: filterR });
        this.setState({ inputValue: event.target.value });
    }

    render() {
        if(this.state.robots === 0){
            return <h1>Loading</h1>
        }
        else{
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} robots={this.state.robots}/>
                    <br/> <br/>
                    <Scroll>
                        <CardList robots={this.state.robotsF} inputValue={this.state.inputValue}/>
                    </Scroll>    
                </div>
            );
        }
    }
}

export default App;