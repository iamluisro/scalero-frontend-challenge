/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Title, Logo} from './lib'
import * as mq from '../styles/mediaqueries'

const Navbar = () => {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '4rem',
        padding: '1rem',
        marginBottom: '1rem',
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
      <Logo width="230" height="" mr="1rem" />
      <Title variant="primary" size="large">
        Records
      </Title>
    </div>
  )
}

export default Navbar
