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
    componentDidMount(){
        axios.get('http://localhost:5000/api/math').then( response =>{
            console.log(response.data);
            this.setState({history:response.data});
        })
        .catch(error => {
            console.log(error)
        })
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