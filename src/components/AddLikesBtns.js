import React from 'react'
import {IconButton} from './lib'
import {IoHeartDislikeOutline, IoHeartOutline} from 'react-icons/io5'
import {useAppDispatch} from '../context/AppContext'

const AddDislikeBtn = ({name}) => {
  const dispatch = useAppDispatch()

  function addDislike() {
    dispatch({
      type: 'DISLIKE_RECORD',
      payload: name,
    })
  }
  return (
    <IconButton variant="contained" type="button" onClick={() => addDislike()}>
      <IoHeartDislikeOutline />
    </IconButton>
  )
}

const AddLikeBtn = ({name}) => {
  const dispatch = useAppDispatch()

  function addLike() {
    dispatch({
      type: 'LIKE_RECORD',
      payload: name,
    })
  }
  return (
    <IconButton variant="contained" type="button" onClick={() => addLike()}>
      <IoHeartOutline />
    </IconButton>
  )
}

export {AddDislikeBtn, AddLikeBtn}
