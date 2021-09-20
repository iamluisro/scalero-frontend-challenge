/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import * as colors from '../styles/colors'
import styled from '@emotion/styled/macro'
import logo from '../images/Logotype_Monochrome_half.png'
import {Link} from 'react-router-dom'

const titleVariants = {
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  white: {
    color: colors.base,
  },
}
const titleSizeVariants = {
  medium: {
    fontSize: '1.5rem',
  },
  large: {
    fontSize: '2rem',
  },
  small: {
    fontSize: '1.25rem',
  },
}
const Title = styled.h1(
  {
    fontFamily: 'Domine',
    fontWeight: 400,
  },
  ({variant = 'primary', size = 'medium'}) => [
    titleVariants[variant],
    titleSizeVariants[size],
  ],
)

const buttonVariants = {
  contained: {
    color: 'rgb(23, 107, 101, .49)',
    fontSize: '1.25rem',
    backgroundColor: '#01ECB9',
    border: 'none',
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    justifyContent: 'center',
  },
  outlined: {
    color: colors.secondary,
  },
  text: {
    color: colors.base,
  },
}
const buttonSizeVariants = {
  medium: {
    fontSize: '1.5rem',
  },
  large: {
    fontSize: '2rem',
  },
  small: {
    fontSize: '1rem',
  },
}
const Button = styled.button(
  {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '.5rem',
  },
  ({variant = 'contained', size = 'medium'}) => [
    buttonVariants[variant],
    buttonSizeVariants[size],
  ],
)

const ItemTitle = styled.p({
  margin: 0,
  color: colors.base,
  fontFamily: 'Domine',
  fontWeight: 400,
})

const ButtonCounterGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

const Counter = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  color: colors.base,
})

const Paragraph = styled.p({
  color: colors.base,
  marginBottom: '.5rem',
})

function Logo({width = '48', height = '48', mr = 0}) {
  return (
    <div
      css={{
        width: `${width}px`,
        height: `${height}px`,
        marginRight: mr,
      }}
    >
      <Link to="/">
        <img
          alt="Scalero Logo"
          src={logo}
          css={{
            width: '100%',
          }}
        />
      </Link>
    </div>
  )
}

export {Title, Button, ButtonCounterGroup, Counter, ItemTitle, Paragraph, Logo}
