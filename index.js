const html = require('yo-yo')
const redux = require('redux')
const clone = require('clone')
const request = require('superagent')

const template = require('./views/template')

const initialState = {
  beers: [
    {
         "name": "The Beast",
         "brewery": "Te Aro Brewing Company",
         "country": "New Zealand",
         "style": "Pinot Barrel Aged Russian Imperial Stout",
         "abv": "11.7%"
       },
       {
         "name": "Brewdog Black Hammer",
         "brewery": "BrewDog Brewery",
         "country": "Scotland",
         "style": "Black IPA",
         "abv": "7.2%"
       }
  ],
  isLoading: false
}

function reducer(state, action) {
  const newState = clone(state)
  switch (action.type){
    case 'RECEIVE_BEERS':
      newState.beers = action.payload
      console.log(action.payload);
      return newState
    case 'TOGGLE_LOADING':
      newState.isLoading = !newState.isLoading
      return newState
    default:
    return newState
  }
}

const store = redux.createStore(reducer, initialState)
const {dispatch, getState, subscribe} = store

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

subscribe(() => {
  const state = getState()
  html.update(app, template(state, dispatch))
})
dispatch({type: 'INIT'})
