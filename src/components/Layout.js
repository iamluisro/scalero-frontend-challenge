/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Route} from 'react-router'
import * as colors from '../styles/colors'

export default function Layout({children}) {
  return (
    <div
      css={{
        width: '100%',
        margin: '0',
        backgroundColor: colors.dark,
        height: '100vh',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '4rem',
          padding: '1rem',
        }}
      >
        <div>Scalero</div>
        <h1 css={{fontFamily: 'Domine'}}>Records</h1>
      </div>
      <div
        css={{
          margin: '0 auto',
          padding: '4em 2em',
          maxWidth: '840px',
          //   width: '100%',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '1fr',
          border: '1px solid red',
        }}
      >
        <main css={{width: '100%'}}>{children}</main>
      </div>
    </div>
  )
}
