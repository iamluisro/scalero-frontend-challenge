/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx, keyframes} from '@emotion/react'
import * as colors from '../styles/colors'
import React from 'react'
import {Button} from './lib'
import {useAppDispatch} from '../context/AppContext'

const HandleSuccess = ({openSuccess}) => {
  const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`
  return (
    <div
      css={{
        backgroundColor: colors.green,
        color: colors.base,
        position: 'sticky',
        left: '32px',
        zIndex: '420',
        height: '2rem',
        display: openSuccess ? 'flex' : 'none',
        alignItems: 'center',
        minWidth: '120px',
        padding: '0 1rem',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: '4px',
        boxShadow: '-2px 3px 5px 0px rgba(0,0,0,0.75)',
        animation: openSuccess ? `${fadeOut} 2s 0.5s` : '',
        margin: '2rem 0',
      }}
    >
      Record added successfully!
    </div>
  )
}

const AddRecord = () => {
  const dispatch = useAppDispatch()
  const [form, setForm] = React.useState({
    artist: '',
    name: '',
    description: '',
    year: '',
    likes: 0,
    dislikes: 0,
    coverImg:
      'https://i1.wp.com/www.furnacemfg.com/wp-content/uploads/2018/12/black_vinyl.jpg?fit=2218%2C2216&ssl=1',
    spotifyUrl: '',
    reviews: [],
  })
  const [openForm, setOpenForm] = React.useState(false)
  const [openSuccess, setOpenSuccess] = React.useState(false)

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  function submitReview(e) {
    e.preventDefault()
    dispatch({
      type: 'ADD_RECORD',
      payload: form,
    })
    setForm({
      artist: '',
      name: '',
      description: '',
      year: '',
      likes: 0,
      dislikes: 0,
      coverImg: '',
      spotifyUrl: '',
      reviews: [],
    })
    setOpenSuccess(true)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setOpenSuccess(false)
    }, 4000)
  }, [openSuccess])

  return (
    <div
      css={{
        textAlign: 'right',
        marginTop: '4rem',
      }}
    >
      <Button onClick={() => setOpenForm(!openForm)}>
        {openForm ? 'Cancel adding new record' : 'Add new record'}
      </Button>
      <HandleSuccess openSuccess={openSuccess} />
      {/* This isn't amazing by any means. Ideally a dialog would be better suited here to render this add new record form. */}
      {openForm ? (
        <form
          css={{display: 'flex', flexDirection: 'column', marginTop: '4rem'}}
        >
          <input
            type="text"
            name="artist"
            placeholder="Name of artist"
            onChange={handleChange}
            value={form.artist}
            css={{
              padding: '10px',
              maxWidth: '100%',
              lineHeight: '1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '1px 1px 1px #999',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            name="name"
            placeholder="Name of album"
            onChange={handleChange}
            value={form.name}
            css={{
              padding: '10px',
              maxWidth: '100%',
              lineHeight: '1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '1px 1px 1px #999',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            name="year"
            placeholder="Release year of album"
            onChange={handleChange}
            value={form.year}
            css={{
              padding: '10px',
              maxWidth: '100%',
              lineHeight: '1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '1px 1px 1px #999',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            name="description"
            placeholder="Description of album"
            onChange={handleChange}
            value={form.description}
            css={{
              padding: '10px',
              maxWidth: '100%',
              lineHeight: '1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '1px 1px 1px #999',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            name="coverImg"
            placeholder="Cover Image of album (must be in url)"
            onChange={handleChange}
            value={form.coverImg}
            css={{
              padding: '10px',
              maxWidth: '100%',
              lineHeight: '1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '1px 1px 1px #999',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />
          <input
            type="text"
            name="spotifyUrl"
            placeholder="Spotify url: https://open.spotify.com/album/2eprpJCYbCbPZRKVGIEJxZ?si=iSrDdixWRnijpId071Z_zQ&dl_branch=1"
            onChange={handleChange}
            value={form.spotifyUrl}
            css={{
              padding: '10px',
              maxWidth: '100%',
              lineHeight: '1.5rem',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxShadow: '1px 1px 1px #999',
              marginBottom: '1rem',
              fontSize: '1rem',
            }}
          />
          <p
            css={{
              textAlign: 'left',
              color: colors.base,
              wordBreak: 'break-all',
              margin: '0 0 1rem 0',
            }}
          >
            To get the spotifyUrl, go to Spotify, search for the album you want
            to add, then in the "Share" options, click on "Copy Album Link" and
            paste it here.
          </p>
          <div css={{textAlign: 'right'}}>
            <Button
              type="submit"
              onClick={submitReview}
              disabled={
                form.artist === '' ||
                form.name === '' ||
                form.description === '' ||
                form.year === '' ||
                form.coverImg === ''
              }
            >
              Add record
            </Button>
          </div>
        </form>
      ) : (
        <></>
      )}
    </div>
  )
}

export {AddRecord}
