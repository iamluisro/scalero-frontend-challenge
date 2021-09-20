/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import * as colors from '../styles/colors'
import * as mq from '../styles/mediaqueries'
import React from 'react'
import {Title, Button, ItemTitle, ButtonCounterGroup, Counter} from './lib'
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

const tableCSS = {
  display: 'grid',
  gridGap: '.5rem',
  gridTemplateColumns: '1fr',
  width: '100%',
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
            fontSize: '1rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MdFilterList
            css={{
              marginRight: '.5rem',
            }}
          />
          Select view
        </summary>
        <div
          css={{
            zIndex: 4,
            position: 'absolute',
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

function TableHeader({children}) {
  return (
    <th
      colspan="1"
      role="columnheader"
      css={{textAlign: 'left', color: colors.base}}
    >
      {children}
    </th>
  )
}

function RecordTable({records, view}) {
  return (
    <div css={tableCSS}>
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
            <Button variant="contained">
              <IoHeartDislikeOutline />
            </Button>
            <span>{likes}</span>
          </Counter>
          <Counter>
            <Button>
              <IoHeartOutline />
            </Button>
            <span>{dislikes}</span>
          </Counter>
        </ButtonCounterGroup>
      </div>
    </div>
  )
}

function TableData({children}) {
  return (
    <td
      role="cell"
      css={{
        borderBottom: `1px solid ${colors.primary}`,
        margin: 0,
        padding: '1rem 0 .5rem 0',
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
          <Button variant="contained" mr={8}>
            <IoHeartDislikeOutline />
          </Button>
          <span>{likes}</span>
        </Counter>
      </TableData>
      <TableData>
        <Counter variant="table">
          <Button mr={8}>
            <IoHeartOutline />
          </Button>
          <span>{dislikes}</span>
        </Counter>
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
