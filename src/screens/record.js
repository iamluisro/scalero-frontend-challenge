/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import * as mq from '../styles/mediaqueries'
import * as colors from '../styles/colors'
import {useParams} from 'react-router-dom'
import {Paragraph, Title, Avatar, Button} from '../components/lib'

function Reviews() {
  return (
    <div
      css={{
        borderRadius: '4px',
        display: 'grid',
        gridTemplateColumns: '1fr 11fr',
        padding: '1rem',
        marginBottom: '2rem',
        backgroundColor: colors.bgGreenShade,
      }}
    >
      <Avatar />{' '}
      <div
        css={{
          //   padding: '0 1rem',
          width: '100%',
          [mq.afterSmall]: {
            padding: '0',
          },
        }}
      >
        <Paragraph css={{margin: '0', paddingLeft: '.5rem'}}>
          Review 1
        </Paragraph>{' '}
        <div css={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
          <Paragraph>Added by: Luis</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default function RecordScreen() {
  const {recordName} = useParams()
  console.log('param', recordName)
  return (
    <div>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          marginBottom: '4rem',
          [mq.afterSmall]: {
            gridTemplateColumns: '.4fr .6fr',
            direction: 'rtl',
          },
        }}
      >
        <div
          css={{
            marginBottom: '1rem',
            border: '1px solid white',
          }}
        >
          img
        </div>
        <div
          css={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
          }}
        >
          <Title size="medium" variant="white">
            {recordName}
          </Title>
          <Title size="small" variant="white">
            Year: 1991
          </Title>
        </div>
      </div>
      <div
        css={{
          marginBottom: '4rem',
        }}
      >
        <Title size="small" variant="white">
          Description
        </Title>
        <Paragraph>This is a paragraph for the description</Paragraph>
      </div>
      <div
        css={{
          width: '100%',
        }}
      >
        <Title size="small" variant="white">
          Reviews
        </Title>
        <Reviews />
        <Reviews />
        <Reviews />
        <div
          css={{
            textAlign: 'right',
          }}
        >
          <Button>Add a review</Button>
        </div>
      </div>
    </div>
  )
}
