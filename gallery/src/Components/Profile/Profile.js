import React, {Component} from 'react';
import Link from 'react-router-dom';
import axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryArr: []
        }
    }

    componentDidMount = () => {
        axios
        .get(`https://data.cityofnewyork.us/resource/43hw-uvdj.json?name=${this.props.name}`)
        .then(res => {
            console.log("res:", res)
            this.setState({
                galleryArr: res.data[0]
            });
        })
        .catch(err => {
            console.log("error fetching gallery data");
        })
    }

    render() {
        const {galleryArr} = this.state;
        return(
            <div>
                <p>{galleryArr.name}</p>
                <p>{galleryArr.address1}</p>
                <p>{galleryArr.tel}</p>
                <p><a href={galleryArr.url} target="_blank">Website</a></p>
            </div>
        )
    }
}

export default Profile;