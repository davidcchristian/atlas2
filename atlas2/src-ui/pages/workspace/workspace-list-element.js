/*jshint esversion: 6 */

import React, {PropTypes} from 'react';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Button,
  ButtonGroup,
  Table,
  ListGroup,
  ListGroupItem,
  Glyphicon
} from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap';
import Actions from '../../actions';

export default class WorkspaceListElement extends React.Component {
  archive(id) {
    Actions.archiveWorkspace(id);
  }
  openEditWorkspaceDialog(id) {
    Actions.openEditWorkspaceDialog(id);
  }
  render() {
    var workspaceID = this.props.id;
    var hrefOpen = 'workspace/' + workspaceID;
    var hrefDeduplicate = 'deduplicate/' + workspaceID;
    var mapsCount = this.props.maps.length;
    var mapsCountInfo = "";
    if(mapsCount === 0){
      mapsCountInfo = "(empty)";
    } else if(mapsCount == 1){
      mapsCountInfo = "(1 map)";
    } else {
      mapsCountInfo = "(" + mapsCount + " maps)";
    }
    return (
      <ListGroupItem header={this.props.name + "  " + mapsCountInfo}>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={8}>{this.props.description}</Col>
            <Col xs={4}>
              <ButtonGroup>
                <Button bsStyle="default" href="#" onClick={this.openEditWorkspaceDialog.bind(this, workspaceID)}>
                  <Glyphicon glyph="edit"></Glyphicon>
                </Button>
                <Button bsStyle="default" href={hrefOpen}>
                  <Glyphicon glyph="open"></Glyphicon>
                </Button>
                <Button bsStyle="default" href={hrefDeduplicate}>
                  <Glyphicon glyph="pawn"></Glyphicon>
                  <Glyphicon glyph="pawn" style={{
                    color: "silver"
                  }}></Glyphicon>
                </Button>
                <Button bsStyle="default" href="#" onClick={this.archive.bind(this, workspaceID)}>
                  <Glyphicon glyph="remove"></Glyphicon>
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Grid>
      </ListGroupItem>
    );
  }
}
