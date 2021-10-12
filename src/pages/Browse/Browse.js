import { Link } from 'react-router-dom'
import { useParams} from 'react-router-dom'

import { useDogApi } from 'hooks/useDogApi'
import { S } from './Browse.styles'
import DogCard from 'components/DogCard'
import DogControls from 'components/DogControls'
import DogExtras from 'components/DogExtras'

const Browse = () => {
  const { filter } = useParams()
  const { dog, loading, message, api } = useDogApi()

  if (!loading && message) {
    return (
      <S.Browse>
        <p>{message}</p>
        <Link to="/preferences">Set Preferences</Link>
      </S.Browse>
    )
  }

  return (
    <S.Browse>
      {!loading && (
        <>
          <DogCard {...dog} />
          <DogControls status={filter} api={api} />
          <Link to="/preferences">Set Preferences</Link>
          {dog && <DogExtras {...dog} />}
        </>
      )}
    </S.Browse>
  )
}

export default Browse
