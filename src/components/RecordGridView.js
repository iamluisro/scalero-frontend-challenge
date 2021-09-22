/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {ItemTitle, ButtonCounterGroup, Counter} from './lib'
import {AddDislikeBtn, AddLikeBtn} from './AddLikesBtns'
import * as mq from '../styles/mediaqueries'
import * as colors from '../styles/colors'
import {Link} from 'react-router-dom'

function RecordGrid({records, view}) {
  return (
    <div
      css={{
        display: 'grid',
        gridGap: '.5rem',
        gridTemplateColumns: '1fr',
        width: '100%',
        [mq.afterSmall]: {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
      }}
    >
      {records.map(record => (
        <RecordGridItem key={record.name} record={record} view={view} />
      ))}
    </div>
  )
}

function RecordGridItem({record, view}) {
  const {name, year, likes, dislikes} = record
  return (
    <div
      css={{
        marginBottom: '2rem',
      }}
    >
      <Link to={`/record/${name}`}>
        <div
          css={{
            borderRadius: '4px 4px 0 0',
            backgroundColor: 'rgb(139, 214, 209, .49)',
            height: 0,
            paddingBottom: '100%',
            position: 'relative',
            width: '100%',
          }}
        >
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'absolute',
              top: '16px',
              left: '16px',
              bottom: '16px',
              right: '16px',
            }}
          >
            <div>
              <div
                css={{
                  minHeight: '3rem',
                }}
              >
                <ItemTitle> {name}</ItemTitle>
              </div>
              <div>
                <ItemTitle> {year}</ItemTitle>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div
        css={{
          backgroundColor: colors.bgGreenShade,
          padding: '1rem',
          borderRadius: '0 0 4px 4px',
        }}
      >
        <ButtonCounterGroup>
          <Counter>
            <AddDislikeBtn name={name} />
            <span>{dislikes}</span>
          </Counter>
          <Counter>
            <AddLikeBtn name={name} />
            <span>{likes}</span>
          </Counter>
        </ButtonCounterGroup>
      </div>
    </div>
  )
}

export {RecordGrid}
