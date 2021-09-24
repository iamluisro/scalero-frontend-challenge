/** @jsxRuntime classic */
/** @jsx jsx */
// in the future, this can be a dialog that pops up when a
// team member clicks on the "Add a review" btn
import {jsx} from '@emotion/react'
import React from 'react'
import {Title, Button} from './lib'
import {useAppDispatch} from '../context/AppContext'

const AddAReview = ({recordName}) => {
  const dispatch = useAppDispatch()
  const [form, setForm] = React.useState({
    review: '',
    reviewer: '',
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function submitReview(e) {
    e.preventDefault()
    dispatch({
      type: 'ADD_RECORD_REVIEW',
      payload: {
        recordName,
        form,
      },
    })
    setForm({
      review: '',
      reviewer: '',
    })
  }
  return (
    <div css={{}}>
      <Title>Add a review</Title>
      <form css={{display: 'flex', flexDirection: 'column'}}>
        <textarea
          rows="7"
          name="review"
          maxLength="250"
          placeholder="Write your review here"
          onChange={handleChange}
          value={form.review}
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
          name="reviewer"
          placeholder="Leave your name."
          onChange={handleChange}
          value={form.reviewer}
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
        <div css={{textAlign: 'right'}}>
          <Button
            type="submit"
            onClick={submitReview}
            disabled={form.review === '' || form.reviewer === ''}
          >
            Add review
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddAReview
