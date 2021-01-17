import React from "react";
import PropTypes from "prop-types";
import { Card, Image,Grid } from "semantic-ui-react";

function ActorList(props) {
  return (
    <div>

<Grid columns={2}>
    <Grid.Row>
      {props.actorList.map((actor,index)=>(
        <Grid.Column key={index}>
        <Card>
        <Image src={actor.photoUrl} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{actor.name}</Card.Header>
          {/* <Card.Description>
            {actor.desc}
          </Card.Description> */}
        </Card.Content>
      </Card>
      </Grid.Column>
      ))}
    </Grid.Row>

  </Grid>




      
      
    </div>
  );
}

ActorList.propTypes = {};

export default ActorList;
