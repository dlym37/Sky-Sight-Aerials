import React, {Component} from 'react';
import '../App.css';
import ReactPlayer from 'react-player';

export default class Home extends Component{
    render(){
        return (
            <div className='home'>
                <ReactPlayer 
                    url='https://youtu.be/-q4Avwnop04' 
                    playing={true}
                    volume={0}
                    width='80%'
                    height='80vh'
                    className='video'
                />
            </div>
        )
    }
}