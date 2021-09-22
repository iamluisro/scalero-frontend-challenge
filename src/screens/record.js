/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import React from 'react'
import * as mq from '../styles/mediaqueries'
import * as colors from '../styles/colors'
import {useParams} from 'react-router-dom'
import {useAppState} from '../context/AppContext'
import {AddDislikeBtn, AddLikeBtn} from '../components/AddLikesBtns'
import {
  Paragraph,
  Title,
  Avatar,
  Button,
  ButtonCounterGroup,
  Counter,
} from '../components/lib'

function Reviews({review}) {
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
          {review}
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
  const {records} = useAppState()
  const cachedRecords = localStorage.getItem('records')
  const readRecords = JSON.parse(cachedRecords) || records
  const record = readRecords.find(({name}) => name === recordName)
  const {name, year, description, likes, dislikes, reviews} = record

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          <ButtonCounterGroup>
            <Counter>
              <AddLikeBtn name={name} />
              <span>{likes}</span>
            </Counter>
            <Counter>
              <AddDislikeBtn name={name} />
              <span>{dislikes}</span>
            </Counter>
          </ButtonCounterGroup>
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
            {name}
          </Title>
          <Title size="small" variant="white">
            Year: {year}
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
        <Paragraph>{description}</Paragraph>
      </div>
      <div
        css={{
          width: '100%',
        }}
      >
        <Title size="small" variant="white">
          Reviews
        </Title>
        {reviews.map(review => (
          <Reviews review={review} />
        ))}
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
