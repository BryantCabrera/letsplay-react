import React, { Component } from 'react';

class EditProfle extends Component {
    state = {
        id: 0,
        name: '',
        location: '',
        img_url: '',
        email: ''
    }

    componentDidMount () {
        this.setState({
            id: this.props.user.id,
            name: this.props.user.name,
            location: this.props.user.location,
            img_url: this.props.user.img_url,
            email: this.props.user.email
        });
    }

    profileUpdate = async (e) => {
        e.preventDefault();

        const updatedUser = {
            name: this.state.name,
            location: this.state.location,
            img_url: this.state.img_url,
            email: this.state.email
        };
        
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
            if (parsedResponse){
                this.props.updateUser(updatedUser);
                this.props.history.push(`/profile/${this.props.user.id}`);
            }

        } catch (err) {
            console.log(err, ' this is error from Edit Profile');
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    deleteProfile = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/api/v1/users/${this.props.user.id}`, {
                method: 'DELETE',
                credentials: 'include',
                // mode: 'no-cors', do NOT need
                headers: {
                'Content-Type': 'application/json'
                }
            });
        
            if(!response.ok) {
                throw Error()
            }

            const parsedResponse = await response.json();
            if (parsedResponse){
                this.setState({
                    id: 0,
                    name: '',
                    location: '',
                    img_url: '',
                    email: ''

                });

                const deletedUser = {
                    id: this.state.id,
                    name: this.state.name,
                    location: this.state.location,
                    img_url: this.state.img_url,
                    email: this.state.email
                }

                this.props.updateUser(deletedUser);
                this.props.history.push('/');
            }
        } catch (err) {
            console.log(err, ' this is error from Edit Profile');
        }
        // get id From backend
        //
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
                                    <input type="number" minLength="5" maxLength="5" className="form-control form-control-lg" defaultValue={this.props.user.location} name="location" onChange={this.onChange}/>
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
                            <button type="submit" onClick = {this.deleteProfile} className="btn btn-danger btn-block mt-4">Delete My Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default EditProfle;
