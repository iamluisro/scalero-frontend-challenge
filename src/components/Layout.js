/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import * as colors from '../styles/colors'
import * as mq from '../styles/mediaqueries'
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
        }}
      >
        {children}
      </main>
      <footer
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '4rem',
          padding: '1rem',
          color: colors.base,
          marginTop: '4rem',
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 50%)',
          [mq.medium]: {
            justifyContent: 'flex-start',
          },
          [mq.large]: {
            justifyContent: 'flex-start',
          },
        }}
      >
        Created by @iamluisro - Copyright {`${new Date().getFullYear()}`}
      </footer>
    </div>
  )
}
