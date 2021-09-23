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
// this is one way to add customization to our dev team
// there are some other ways to add these (involving forwarding refs)
// but these variations are simple to manage, modify and use
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
    justifyContent: 'center',
    padding: 0,
  },
  // future, other designs for icon buttons would be implemented below
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
    height: '50px',
    width: '50px',
  },
  large: {
    fontSize: '2rem',
  },
  small: {
    fontSize: '1rem',
    height: '30px',
    width: '30px',
  },
}
const IconButton = styled.button(
  {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  ({variant = 'contained', size = 'medium', mb = 0.5, mr = 0}) => [
    buttonVariants[variant],
    buttonSizeVariants[size],
    {marginBottom: `${mb}px`, marginRight: `${mr}px`},
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
  zIndex: 100,
})

const counterVariants = {
  grid: {
    flexDirection: 'column',
  },
  table: {
    flexDirection: 'row',
  },
}
const Counter = styled.div(
  {
    display: 'flex',
    alignItems: 'center',
    color: colors.base,
  },
  ({variant = 'grid'}) => counterVariants[variant],
)

const Paragraph = styled.p({
  color: colors.base,
  marginBottom: '.5rem',
  lineHeight: '1.5rem',
  fontFamily: 'Roboto',
})

// ideally, this component supports multiple logo formats
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

function Avatar({name = 'FN'}) {
  const getInitials = name.split(' ').map(letter => letter[0])
  // future would have a profile img added to the avatar
  return (
    <div
      css={{
        backgroundColor: colors.grey,
        color: colors.base,
        height: '50px',
        width: '50px',
        borderRadius: '50%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {getInitials}
    </div>
  )
}

const Button = styled.button({
  color: colors.dark,
  fontSize: '1rem',
  backgroundColor: colors.primary,
  border: 'none',
  justifyContent: 'center',
  padding: '12px',
  borderRadius: '4px',
  textTransform: 'uppercase',
  cursor: 'pointer',
  // future: some transitions to change from states would be sweet
  ':disabled': {
    backgroundColor: colors.grey,
    color: colors.base,
    filter: 'opacity(.3)',
    cursor: 'default',
  },
})

export {
  Title,
  Button,
  IconButton,
  ButtonCounterGroup,
  Counter,
  ItemTitle,
  Paragraph,
  Logo,
  Avatar,
}
