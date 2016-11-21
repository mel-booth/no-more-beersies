const html = require('yo-yo')
const refresh = require('./refresh')

module.exports = template

function template(state, dispatch){
  return html`<div>${refresh(state, dispatch)}
  <div class='beers'>${displayBeers(state)}</div></div>`
}

function displayBeers(state, dispatch){
  return html`<div>${state.beers.map(function(beer){
    return html`<div><h3>${beer.name}</h3>
    <div>${beer.brewery}</div>
    <div>${beer.abv}</div>
    <div>${beer.country}</div>
    <div>${beer.style}</div>
    </div>
    `
  })}</div>
  `
}
