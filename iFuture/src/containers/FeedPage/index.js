import React from 'react';
import { connect } from 'react-redux'
import { setInputSearch } from '../../actions/search'

import Appbar from '../../components/Appbar';

function FeedPage(props) {

  const { inputSearch, setInputSearch } = props

  const handleInputSearchChange = (e) => {
    setInputSearch(e.target.value)
  }

  return (
    <div>
      <Appbar page='feed'/>
      FeedPage
      <input 
        value={inputSearch}
        onChange={handleInputSearchChange}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  inputSearch: state.search.inputSearch
})

const mapDispatchToProps = dispatch => ({
  setInputSearch: (inputContent) => dispatch(setInputSearch(inputContent))
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);