import React  from 'react';
import axios from 'axios';
// import { axiosWithAuth } from '../../Utils/axiosWithAuth';
import HistoryItem from './historyBox';


export default class HistoryList extends React.Component{
    constructor(){
        super();
        this.state ={
            history: [],
        };
    }
    apiCall =()=>{
        axios.get('http://localhost:5000/api/math').then( response =>{
            this.setState({history:response.data});
        })
        .catch(error => {
            console.log(error)
        })
    }

    componentDidMount(){
        this.apiCall();
        this.interval = setInterval(this.apiCall, 200);

    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
        <div className ='historyCont'>
            {this.state.history.map((history, id)=>
            <HistoryItem key = {id} history ={history} />)}
        </div>
        )
    }
}