import React, { Component } from 'react';
import axios from 'axios';

class About extends Component{
    constructor(props){
        super(props);

        this.state = {
            books: [],
            name: '',
            description: '',
            writer: ''
        };
    }

    getAllBook(){
        axios
            .get('http://localhost:8000/book')
            .then(res => {
                // console.log(res.data);
                // this.setState({
                //     books: res.data
                // })
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount(){
        // console.log('did mount')
        // this.getAllBook();
        // this.onUpdate();
        // this.onDelete();
    }

    componentWillMount(){
        // console.log('will mount')
    }

    onChange = (e) => {
        // console.log(f.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onUpdate = () => {
        const data = {
            name: 'update 29',
            writer: 'update writer 29',
            description: 'update description'
        };

        axios
            .put('http://localhost:8000/book/29', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onDelete = () => {
        axios
            .delete('http://localhost:8000/book/29')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name: this.state.name,
            writer: this.state.writer,
            description: this.state.description
        };

        axios
            .put('http://localhost:8000/book/28', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        // axios({
        //     method: 'POST',
        //     url: 'http://localhost:8000/book',
        //     data: data
        // })
        // .then(res => {
        //     console.log(res);
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        // axios
        //     .post('http://localhost:8000/book', data)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })

    }
    render(){
        // console.log('render')
        // console.log(this.state);
        return(
            <div>
                <h4>About</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="name" placeholder="Enter name" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Writer</label>
                        <input type="text" className="form-control" name="writer" placeholder="Enter Writer" onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" name="description" onChange={this.onChange} placeholder="Enter Description" />
                    </div>
                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default About;