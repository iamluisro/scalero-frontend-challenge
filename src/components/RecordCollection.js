/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import * as colors from '../styles/colors'
import * as mq from '../styles/mediaqueries'
import React from 'react'
import {Link} from 'react-router-dom'
import {Title, IconButton, ItemTitle, ButtonCounterGroup, Counter} from './lib'
import {MdFilterList} from 'react-icons/md'

import {IoHeartDislikeOutline, IoHeartOutline} from 'react-icons/io5'
import records from '../utils/data.json'

const gridCSS = {
  display: 'grid',
  gridGap: '.5rem',
  gridTemplateColumns: '1fr',
  width: '100%',
  [mq.afterSmall]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}

function RecordCollectionHeader({setView}) {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1rem',
      }}
    >
      <Title variant="white" size="small">
        Record Collection
      </Title>
      <details
        css={{
          display: 'flex',
          alignItems: 'center',
          color: colors.primary,
          backgroundColor: 'transparent',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          textTransform: 'uppercase',
        }}
      >
        <summary
          css={{
            fontSize: '0.75rem',
            display: 'block',
            [mq.afterSmall]: {
              fontSize: '1rem',
            },
          }}
        >
          <MdFilterList
            css={{
              marginRight: '.5rem',
            }}
          />
          <span>Select view</span>
        </summary>
        <div
          css={{
            zIndex: 4,
            position: 'absolute',
            right: '16px',
            [mq.afterSmall]: {
              right: 'auto',
            },
          }}
        >
          <ul
            css={{
              listStyle: 'none',
              backgroundColor: 'white',
              paddingLeft: '0rem',
              color: 'black',
              borderRadius: '4px',
              marginBlockStart: '.5rem',
            }}
          >
            <li
              css={{
                padding: '1rem',
                borderRadius: '4px 4px 0 0',
                ':hover': {
                  backgroundColor: '#EEEEEE',
                },
              }}
              onClick={() => setView('grid')}
            >
              Grid view
            </li>
            <li
              css={{
                padding: '1rem',
                borderRadius: '0 0 4px 4px',

                ':hover': {
                  backgroundColor: '#EEEEEE',
                },
              }}
              onClick={() => setView('table')}
            >
              Table view
            </li>
          </ul>
        </div>
      </details>
    </div>
  )
}

function RecordGrid({records, view}) {
  return (
    <div css={gridCSS}>
      {records.map(record => (
        <RecordGridItem key={record.name} record={record} view={view} />
      ))}
    </div>
  )
}

function TableHeader({children, textAlign = 'left'}) {
  return (
    <th
      colspan="1"
      role="columnheader"
      css={{
        textAlign: textAlign,
        color: colors.base,
        paddingRight: '1.5rem',
        whiteSpace: 'nowrap',
        '&:last-child': {
          paddingRight: '0',
        },
      }}
    >
      {children}
    </th>
  )
}

function RecordTable({records, view}) {
  return (
    <div
      css={{
        overflowX: 'auto',
      }}
    >
      <table
        role="table"
        css={{
          borderSpacing: 0,
          width: '100%',
        }}
      >
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Year</TableHeader>
            <TableHeader>Dislikes</TableHeader>
            <TableHeader>Likes</TableHeader>
            <TableHeader textAlign="right">View Page</TableHeader>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <RecordTableItem key={record.name} record={record} view={view} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function RecordGridItem({record, view}) {
  const {name, year, likes, dislikes} = record
  return (
    <div
      css={{
        borderRadius: '4px',
        backgroundColor: 'rgb(139, 214, 209, .49)',
        height: 0,
        paddingBottom: '100%',
        position: 'relative',
        width: '100%',
      }}
    >
      <Link to={`/record/${name}`}>
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
          <ButtonCounterGroup>
            <Counter>
              <IconButton variant="contained">
                <IoHeartDislikeOutline />
              </IconButton>
              <span>{likes}</span>
            </Counter>
            <Counter>
              <IconButton variant="contained">
                <IoHeartOutline />
              </IconButton>
              <span>{dislikes}</span>
            </Counter>
          </ButtonCounterGroup>
        </div>
      </Link>
    </div>
  )
}

function TableData({children, textAlign = 'left'}) {
  return (
    <td
      role="cell"
      css={{
        borderBottom: `1px solid ${colors.primary}`,
        margin: 0,
        padding: '1rem .5rem .5rem 0',
        textAlign: textAlign,
      }}
    >
      {children}
    </td>
  )
}

function RecordTableItem({record, view}) {
  const {name, year, likes, dislikes} = record
  return (
    <tr>
      <TableData>
        <ItemTitle> {name}</ItemTitle>
      </TableData>

      <TableData>
        <ItemTitle> {year}</ItemTitle>
      </TableData>

      <TableData>
        <Counter variant="table">
          <IconButton variant="contained" mr={8} size="small">
            <IoHeartDislikeOutline />
          </IconButton>
          <span>{likes}</span>
        </Counter>
      </TableData>
      <TableData>
        <Counter variant="table">
          <IconButton variant="contained" mr={8} size="small">
            <IoHeartOutline />
          </IconButton>
          <span>{dislikes}</span>
        </Counter>
      </TableData>
      <TableData textAlign="right">
        <Link to={`/record/${name}`}>
          <ItemTitle>Visit</ItemTitle>
        </Link>
      </TableData>
    </tr>
  )
}

const RecordCollection = () => {
  const [view, setView] = React.useState('grid')
  console.log(view)
  return (
    <div
      css={{
        marginTop: '4rem',
      }}
    >
      <RecordCollectionHeader setView={setView} />
      {view === 'grid' ? (
        <RecordGrid records={records} view={view} />
      ) : (
        <RecordTable records={records} view={view} />
      )}
    </div>
  )
}

export default RecordCollection
