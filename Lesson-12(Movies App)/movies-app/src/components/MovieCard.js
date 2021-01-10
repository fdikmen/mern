import React from 'react'
import { Card, Icon } from 'semantic-ui-react'



const MovieCard = ({propsMovie}) => (
  <Card
    image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'/*{propsMovie.cover}*/
    header={propsMovie.title}
    meta='20..'
  />
)

export default MovieCard