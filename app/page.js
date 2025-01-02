import React from 'react'
import MainHead from './(components)/main-head'
import Engine from './(components)/engine'
import MainPageDescription from './(components)/MainPageDescription'


export default function Main() {

  return (
    <div className='min-h-screen pt-5 bg-gray-900'>
      <MainHead/>
      <Engine/>
      <MainPageDescription/>
    </div>
  )
}
