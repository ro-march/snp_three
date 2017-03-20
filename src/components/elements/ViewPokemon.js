import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom'
import { users } from '../../constants/Users'


export default class ViewPokemon extends Component {

	static contextTypes = {
		my_pokemons: PropTypes.array.isRequired,
		actions: PropTypes.object.isRequired
	}


	componentWillMount() {
		const routeId = this.props.match.params.routeId;
		const {id, name, avatar, info} = this.context.my_pokemons[routeId];
		this.data = {id: id, avatar: avatar, name: name, info: info}
	}


	onRandomAvatar() {
		let id = random(0, users.length-1);
		this.data.avatar = users[id].avatar;
		this.context.actions.changePokemon(this.data);
	}


	onChangeName(e) {
		this.data.name = e.target.value;
		this.context.actions.changePokemon(this.data);
	}


	onChangeInfo(e) {
		this.data.info = e.target.value;
		this.context.actions.changePokemon(this.data);
	}


	render() {
		const {id, avatar, name, info} = this.data;

		const avatarStyle = {
		  backgroundImage: 'url(../../'+avatar+')'
		}

		return (
			<div className="view-pokemon">
				<div className="avatar" style={avatarStyle} onClick={::this.onRandomAvatar}></div>
				<input className="name" defaultValue={name} onChange={::this.onChangeName}/>
				<textarea className="info" defaultValue={info} onChange={::this.onChangeInfo}></textarea>
				<Link to="/" className="back-btn"></Link>
			</div>
		);
	}
}

const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}