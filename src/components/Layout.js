/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import * as colors from '../styles/colors'
import Navbar from './Navbar'

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
      <Navbar />
      <main
        css={{
          margin: '0 auto',
          padding: '1rem',
          maxWidth: '840px',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '1fr',
        }}
      >
        {children}
      </main>
    </div>
  )
}
