const html = require('yo-yo')
const request = require('superagent');

module.exports = refresh

function refresh (state, dispatch) {
  return html`<div>
  ${state.isLoading ? html`<div>Loading...</div>` : ''}
  <button class='refresh' onclick=${() => getBeers(dispatch)}>Refresh</button>
  </div>`
  function getBeers(dispatch){
    dispatch({type: 'TOGGLE_LOADING'})
    const url = 'https://rogue-beers.herokuapp.com/api/v1/beers'
    request
      .get(url)
      .end((err, res) => {
        if (err) return
        dispatch({type: 'TOGGLE_LOADING'})
        dispatch({type: 'RECEIVE_BEERS', payload: res.body.beers})
      })
  }
}
