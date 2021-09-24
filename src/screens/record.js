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
  ButtonCounterGroup,
  Counter,
} from '../components/lib'
import AddAReview from '../components/AddAReview'

function Reviews({reviewData}) {
  const {review, reviewer} = reviewData
  return (
    <div
      css={{
        borderRadius: '4px',
        display: 'grid',
        gridTemplateColumns: '1fr 11fr',
        padding: '1rem',
        marginBottom: '2rem',
        backgroundColor: colors.bgGreenShade,
        boxShadow: '-2px 3px 5px 0px rgba(0,0,0,0.75)',
      }}
    >
      <Avatar name={reviewer} />
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
          <Paragraph>Added by: {reviewer}</Paragraph>
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
  const title = recordName.replace(/-/i, '/')
  console.log('recordName.replace(/%47/i', title.replace(/-/i, '/'))

  const record = readRecords.find(({name}) => name === title)

  const {
    name,
    artist,
    year,
    description,
    likes,
    dislikes,
    reviews,
    coverImg,
    spotifyUrl,
  } = record

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
              border: `1px solid ${colors.dark}`,
              boxShadow: '-2px 3px 5px 0px rgba(0,0,0,0.75)',
              height: 0,
              paddingBottom: '100%',
              position: 'relative',
              width: '100%',
            }}
          >
            <img
              src={coverImg}
              alt={`${name} - coverImg`}
              css={{
                position: 'relative',
                width: '100%',
              }}
            />
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
            {artist}
          </Title>
          <Title size="medium" variant="white">
            {name}
          </Title>
          <Title size="small" variant="white">
            Year released: {year}
          </Title>
          <div css={{marginTop: '1rem'}}>
            <iframe
              title={name}
              src={spotifyUrl}
              css={{
                width: '100%',
                [mq.afterSmall]: {
                  width: '85%',
                },
              }}
              height="80"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
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
        {reviews.length > 0 ? (
          <>
            {reviews.map((review, index) => (
              <Reviews key={index} reviewData={review} />
            ))}
          </>
        ) : (
          <Paragraph>
            No reviews yet! Be the first to review this album.{' '}
          </Paragraph>
        )}
        <div
          css={{
            marginTop: '4rem',
          }}
        >
          <AddAReview recordName={name} />
        </div>
      </div>
    </div>
  )
}
