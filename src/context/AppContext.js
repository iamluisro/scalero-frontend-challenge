import {createContext, useReducer, useContext} from 'react'

export const AppContext = createContext()
export const AppDispatchContext = createContext()

// if we have our records in localStorage, we get them here
const cachedRecords = JSON.parse(localStorage.getItem('records'))

// this is our initialState with our records array
const initialState = {
  records: cachedRecords || [
    {
      artist: 'Nirvana',
      name: 'Nevermind',
      description:
        'An overnight-success story of the 1990s, Nirvanas second album and its totemic ﬁrst single, “Smells Like Teen Spirit,” shot up from the Northwest underground — the nascent grunge scene in Seattle — to kick Michael Jackson’s Dangerous off the top of the Billboard charts and blow hair metal off the map. Few albums have had such an overpowering impact on a generation — a nation of teens suddenly turned punk — and such a catastrophic effect on its main creator. The weight of success led already-troubled singer-guitarist Kurt Cobain to take his own life in 1994. But his slashing riffs, corrosive singing, and deviously oblique writing — rammed home by the Zeppelin-via-Pixies might of bassist Krist Novoselic and drummer Dave Grohl — put warrior purity back in rock & roll. Lyrically, Cobain raged in code — shorthand grenades of inner tumult and self-loathing. His genius, though, in songs like “Lithium,” “Breed,” and “Teen Spirit” was the soft-loud tension he created between verse and chorus, restraint and assault. Cobain was a pop lover at heart — and a Beatlemaniac: Nevermind co-producer Butch Vig remembered hearing Cobain play John Lennon’s “Julia” at sessions. Cobain also fought to maintain his underground honor with songs like the scabrous punk purge “Territorial Pissings.” Ultimately, it was a losing battle, but it is part of this album’s enduring power. Vig recalled when Cobain was forced to overdub the guitar intro to “Teen Spirit” because he couldn’t nail it live with the band: “That pissed him off. He wanted to play the sond live all the way through.”',
      year: '1991',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-006-Nirvana-NEVERMIND-HR.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Daft Punk',
      name: 'Random Access Memories',
      description:
        'Having played a massive role in the rise of EDM in the late ‘00s, Thomas Bangalter and Guy-Manuel de Homem-Christo turned away from EDM altogether for a Seventies disco record featuring appearances by Donna Summer producer Giorgio Moroder and Chic’s Nile Rodgers (who played guitar on the gigantic hit “Get Lucky”). The result was a mushy, otherworldly concept LP that was retro, futuristic, trippy, and weirdly human all at once.',
      year: '2013',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-295-Daft-Punk-Random-Access-Memories.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'OutKast',
      name: 'Speakerboxxx/The Love Below',
      description:
        'For a decade, OutKast were a duo defined by dichotomies — regional versus celestial, order amid chaos, blackness and the universal. On their fifth studio album, that tension could no longer be contained on one CD. Big Boi’s verbal funk overflowed on Speakerboxxx, his half of the double-disc set, while André 3000’s inner crooner exhaled like never before on The Love Below. It was a gamble to break up their twin alchemy this way, but in dividing themselves, OutKast conquered: America fell as deeply in love with the borderless pop bliss of “Hey Ya!” as it did with the slick talk and soulful horns on “The Way You Move.”        ',
      year: '2003',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-290-Outkast-Speakerbox-The-Love-Below.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'The Beatles',
      name: 'Abbey Road',
      description:
        'The most influential band of the 1960s – and all of rock ‘n’ roll, many say – released their swan song in 1969. Made over the course of sporadic studio sessions in spring and summer 1969 that gathered the group together amid their slow dissolve, “Abbey Road” was released just days after the meeting of the band members where John Lennon informed them of his plans to split.',
      year: '1969',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-005-Beatles-ABBEY-ROAD.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Shakira',
      name: 'Dónde Están los Ladrones',
      description:
        'Long before she went blond and took her never-lying hips to the top of the American pop charts, Shakira was a raven-haired guitar rocker who’d hit peak superstardom in the Spanish-speaking world with her 1995 LP, Pies Descalzos. To keep up the momentum, Shakira enlisted Emilio Estefan to help produce her next LP, this stellar globetrotting dance-rock set, which blends sounds from Colombia, Mexico, and her father’s native Lebanon.',
      year: '1998',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-496-Shakira-Donde-Estan-los-Ladrones.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Lady Gaga',
      name: 'Born This Way',
      description: 'Lady Gaga',
      year: '2011',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-484-Lady-Gaga-Born-This-Way.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Kid Cudi',
      name: 'Man on the Moon: The End of the Day',
      description: 'Lady Gaga',
      year: '2009',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-459-Kid-Cudi-Man-of-the-Moon.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Queen',
      name: 'A Night at the Opera',
      description:
        '“Queen will be the Cecil B. DeMille of rock,” proclaimed singer Freddie Mercury, and this far-ranging, rococo album is the group’s ready-for-my-close-up moment. Bassist John Deacon wrote the melodic highlight “You’re My Best Friend,” a bouncy bit of Paul McCartney-esque pop; Mercury wrote the brutal rocker “Death on Two Legs,” about the band’s former manager; and guitarist Brian May wrote “The Prophet’s Song,” a doomy portent of a flood that runs 8:21 and includes a vocal canon from Mercury. But the coup was “Bohemian Rhapsody,” an opera buffa in which Mercury combined three different songs he’d been writing into a suite that took weeks to record.',
      year: '1975',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-128-Queen-A-Night-at-the-Opera.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Taylor Swift',
      name: 'Red',
      description:
        'Taylor Swift shocked the world with her fourth album, breaking away from country music to make a record that recalled classics by the Beatles and Prince in the way it pulled from across the pop and rock landscape and transformed every sound it touched. The lead single, “We Are Never Ever Getting Back Together,” was stomping, swaying electro-twang. “I Know You Were Trouble” rode a dubstep groove, and the title track was a swirl of banjos, dusty guitars, and talk-box elation. Tabloid types tied themselves in knots trying to figure out which song was about which ex, but the real news was Swift’s songwriting on high points like the astonishing “All Too Well,” as vivid a post-breakup remembrance as any artist has ever produced.',
      year: '2012',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-099-Taylor-Swift-Red.jpg?w=1000',
      reviews: [],
    },
    {
      artist: 'Drake',
      name: 'Take Care',
      description:
        'The Toronto MC had his creative and commercial breakthrough on Take Care, establishing his image as the Champagne Papi who can always find a way to overshare, whether in the club or the bedroom. Drake covers both seductive R&B finesse and hip-hop swagger, with his longtime producer Noah “40” Shebib, along with guests like Rihanna and Jamie xx. “Marvin’s Room” is the showstopper — late at night, Drake drunk-dials his ex to figure out what went wrong (“I’ve had sex four times this week, I’ll explain/I’m having a hard time adjusting to fame”). Hard time or not, Take Care showed that Drake is always best when he bares his feelings in the spotlight.',
      year: '2011',
      likes: 0,
      dislikes: 0,
      coverImg:
        'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-095-Drake-Take-Care.jpg?w=1000',
      reviews: [],
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    // because we're dealing with localStorage as our only data source,
    // our action.types will modify our records array
    // and then save the modified records array to our localStorage
    case 'LIKE_RECORD':
      const updatedRecordsWLikes = state.records.map(record =>
        record.name === action.payload
          ? {...record, likes: record.likes + 1}
          : record,
      )
      localStorage.setItem('records', JSON.stringify(updatedRecordsWLikes))
      return {
        records: updatedRecordsWLikes,
      }
    case 'DISLIKE_RECORD':
      const updatedRecordsWDislikes = state.records.map(record =>
        record.name === action.payload
          ? {...record, dislikes: record.dislikes + 1}
          : record,
      )
      localStorage.setItem('records', JSON.stringify(updatedRecordsWDislikes))
      return {
        records: updatedRecordsWDislikes,
      }
    case 'ADD_RECORD_REVIEW':
      const albumToReview = state.records.find(
        record => record.name === action.payload.recordName,
      )

      const newReviews = albumToReview.reviews.push(action.payload.form)

      const updatedRecordsWReview = state.records.map(record =>
        record.name === action.payload
          ? {...record, reviews: newReviews}
          : record,
      )
      localStorage.setItem('records', JSON.stringify(updatedRecordsWReview))
      return {
        records: updatedRecordsWReview,
      }
    case 'DELETE_RECORD_REVIEW':
      // DELETE_RECORD_REVIEW would be a future implementation
      return state
    case 'ADD_RECORD':
      console.log('action', action.payload)
      const updatedRecordsWNewRecord = [...state.records, action.payload]
      localStorage.setItem('records', JSON.stringify(updatedRecordsWNewRecord))
      console.log('updatedRecordsWNewRecord', updatedRecordsWNewRecord)
      return {
        records: updatedRecordsWNewRecord,
      }
    default:
      return state
  }
}

function AppContextProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  )
}

function useAppState() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useState can only be used within a AppContextProvider')
  }
  return context
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useState can only be used within a AppDispatchContextProvider',
    )
  }
  return context
}

export {AppContextProvider, useAppState, useAppDispatch}
