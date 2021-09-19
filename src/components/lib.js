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
const Title = styled.h1(
  {
    fontFamily: 'Domine',
  },
  ({variant = 'primary'}) => titleVariants[variant],
)

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

export {Title, Logo}
