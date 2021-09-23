/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import * as colors from '../styles/colors'
import * as mq from '../styles/mediaqueries'
import React, {useRef, useState} from 'react'
import {Title} from './lib'
import {MdFilterList} from 'react-icons/md'
import {useAppState} from '../context/AppContext'
import {RecordGrid} from './RecordGridView'
import {RecordTable} from './RecordTableView'
import {AddRecord} from './AddRecord'
// using this react-use dependency so as to not re-invent the wheel
import {useClickAway} from 'react-use'

function RecordCollectionHeader({setView}) {
  const [openMenu, setOpenMenu] = useState(false)
  const ref = useRef()

  useClickAway(ref, () => {
    setOpenMenu(false)
  })

  function saveView(option) {
    setView(option)
    localStorage.setItem('selectedView', JSON.stringify(option))
  }

  const onToggle = e => {
    e.preventDefault()
    setOpenMenu(!openMenu)
  }

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
        ref={ref}
        open={openMenu}
        onClick={onToggle}
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
              onClick={() => saveView('grid')}
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
              onClick={() => saveView('table')}
            >
              Table view
            </li>
          </ul>
        </div>
      </details>
    </div>
  )
}

const RecordCollection = () => {
  const cachedRecords = JSON.parse(localStorage.getItem('records'))

  const {records} = useAppState()
  const [view, setView] = React.useState('grid')
  const readRecords = cachedRecords || records
  const savedView = JSON.parse(localStorage.getItem('selectedView')) || view

  // if there's time, improve this with a useCallback or useMemo hook
  // the goal is to not re-sort the array while a team member is voting for their fav records
  // instead, wait until the pg has refreshed or the view has changed
  const sortedRecords = readRecords.sort((a, b) => b.likes - a.likes)
  // const {ref, active, toggle} = useClickAway()
  return (
    <div
      css={{
        marginTop: '4rem',
      }}
    >
      <RecordCollectionHeader setView={setView} />
      {savedView === 'grid' ? (
        <RecordGrid records={sortedRecords} view={view} />
      ) : (
        <RecordTable records={sortedRecords} view={view} />
      )}
      <AddRecord />
    </div>
  )
}

export default RecordCollection
