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
