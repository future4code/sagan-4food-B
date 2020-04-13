import React, { useState} from 'react';
import Appbar from '../../components/Appbar';

function FeedPage() {

  const [inputSearch, setInputSearch] = useState('')

  return (
    <div>
      <Appbar page='feed' inputSearch={inputSearch} />
      FeedPage
    </div>
  )
}

export default FeedPage;