import React, { Component } from 'react';

class EditProfle extends Component {
    state = {
        name: '',
        location: '',
        img_url: ''
    }

    profileUpdate = async (e) => {
        e.preventDefault();

        const updatedUser = {
            name: this.state.name,
            location: this.state.location,
            img_url: this.state.img_url
        };
    
        // try {
        // const response = await fetch(`http://localhost:8000/api/v1/users/${}`, {
        //     method: 'PUT',
        //     credentials: 'include',
        //     body: JSON.stringify(updatedUser),
        //     // mode: 'no-cors', do NOT need
        //     headers: {
        //     'Content-Type': 'application/json'
        //     }
        // });
    
        // if(!response.ok) {
        //     throw Error()
        // }

        // const parsedResponse = await response.json();
        // console.log(parsedResponse);
        // if (parsedResponse){
        //     this.props.history.push(`/profile/${parsedResponse.id}/edit`);
        // }

        // } catch (err) {
        // console.log(err, ' this is error from Registers')
        // }
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
                    <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Profile Picture URL" name="img_url" onChange={this.onChange}/>
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
