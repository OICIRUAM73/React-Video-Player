import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css'

function Category(props) {
	const { title, description, playlist} = props
	return(
		<div className="Category">
			<p className="Category-description">{description}</p>
			<h2 className="Category-title">{title}</h2>
			<Playlist
				handleOpenModal = {props.handleOpenModal} 
				playlist={props.playlist}
			/>
		</div>
	)
}

export default Category;