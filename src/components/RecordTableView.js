/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {ItemTitle, Counter} from './lib'
import {AddDislikeBtn, AddLikeBtn} from './AddLikesBtns'
import * as colors from '../styles/colors'
import {Link} from 'react-router-dom'

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
            <TableHeader>Artist</TableHeader>
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

function TableData({children, textAlign = 'left'}) {
  return (
    <td
      role="cell"
      css={{
        borderBottom: `1px solid ${colors.primary}`,
        marginRight: '1rem',
        padding: '1rem 1.5rem .5rem 0',
        textAlign: textAlign,
      }}
    >
      {children}
    </td>
  )
}

function RecordTableItem({record, view}) {
  const {name, artist, year, likes, dislikes} = record
  return (
    <tr>
      <TableData>
        <ItemTitle> {name}</ItemTitle>
      </TableData>
      <TableData>
        <ItemTitle> {year}</ItemTitle>
      </TableData>
      <TableData>
        <ItemTitle> {artist}</ItemTitle>
      </TableData>

      <TableData>
        <Counter variant="table">
          <AddDislikeBtn name={name} />
          <span
            css={{
              minWidth: '2rem',
              textAlign: 'right',
            }}
          >
            {dislikes}
          </span>
        </Counter>
      </TableData>
      <TableData>
        <Counter variant="table">
          <AddLikeBtn name={name} />
          <span
            css={{
              minWidth: '2rem',
              textAlign: 'right',
            }}
          >
            {likes}
          </span>
        </Counter>
      </TableData>
      <TableData textAlign="right">
        <Link
          to={`/record/${name.replace(/\//g, '-')}`}
          css={{textDecoration: 'none'}}
        >
          <ItemTitle>Visit</ItemTitle>
        </Link>
      </TableData>
    </tr>
  )
}

export {RecordTable}
