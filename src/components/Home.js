/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'
import {Title, Paragraph} from './lib'
import RecordCollection from './RecordCollection'

function Home() {
  return (
    <div>
      <Title variant="white">Welcome to Scalero Records!</Title>
      <Paragraph>Discover the Scalero team’s favorite records.</Paragraph>
      <Paragraph>
        Browse the records added to the Record Collection below, click on each
        record to view more info about it as well as your colleague’s reviews.
        Then like or dislike the album.
      </Paragraph>
      <Paragraph>
        Once everyone votes, we will have the team’s favorite records!
      </Paragraph>
      <RecordCollection />
    </div>
  )
}

export default Home
