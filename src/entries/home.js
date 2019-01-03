import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/containers/home';
//import Playlist from './src/playlist/components/playlist';
//import Category from './src/category/components/category';
import data from '../api.json';

const homeContainer = document.getElementById('home-container')
const holaMundo = <h1>Hola Mundo!!</h1>;


ReactDOM.render(<Home data={data} />, homeContainer)
