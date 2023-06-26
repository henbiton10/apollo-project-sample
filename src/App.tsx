import { useState } from 'react'
import { gql } from '@apollo/client';
import './App.css';
import { useQuery } from '@apollo/client'

const query = gql`query MyQuery {
  stamTavla(nodeId: "") {
    address
    age
    id
  }
}
`;

function App() {
  useQuery(query, {onCompleted: (data) => console.log({data})})
  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
