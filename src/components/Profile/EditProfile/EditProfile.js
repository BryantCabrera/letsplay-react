import React, { Component } from 'react';

class EditProfle extends Component {
    state = {
        user: {
            id: 0,
            name: '',
            location: '',
            img_url: '',
            email: ''
        }
    }

    componentDidMount () {
        this.setState({
            user: {
                id: this.props.user.id,
                name: this.props.user.name,
                location: this.props.user.location,
                img_url: this.props.user.img_url,
                email: this.props.user.email
            }
        });
    }

    profileUpdate = async (e) => {
        e.preventDefault();

        const updatedUser = {
            name: this.state.name,
            location: this.state.location,
            img_url: this.state.img_url,
            email: 'this.state.user.email'
        };
        console.log(JSON.stringify(updatedUser))
        
        console.log(`http://localhost:8000/api/v1/users/${this.props.user.id}, this is update EditProfile URL`);
        try {
            const response = await fetch(`http://localhost:8000/api/v1/users/${this.props.user.id}`, {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify(updatedUser),
                // mode: 'no-cors', do NOT need
                headers: {
                'Content-Type': 'application/json'
                }
            });
        
            if(!response.ok) {
                throw Error()
            }

            const parsedResponse = await response.json();
            console.log(parsedResponse, ' this is parsedResponse from EditProfile profileUpdate fn');
            if (parsedResponse){
                this.props.history.push(`/profile/${this.props.user.id}`);
            }

        } catch (err) {
            console.log(err, ' this is error from Edit Profile')
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() {
        return (
            <div className="profile">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Edit Profile</h1>
                <form onSubmit={this.profileUpdate}>
                <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={this.props.user.name} name="name" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={this.props.user.location} name="location" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" defaultValue={"Img Url"} name="img_url" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Add Owned Boardgames" name="ownedGames" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Add Boardgames I've Played" name="playedGames" onChange={this.onChange}/>
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                </div>
            </div>
            </div>
            </div>
        )
    
    }
}


export default EditProfle
