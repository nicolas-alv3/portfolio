import React from 'react'
import { Button, Segment, Header, Icon, Image, Label, Modal } from 'semantic-ui-react'

const colors = [
    'yellow',
    'purple',
    'brown',
    'green',
    'teal',
    'blue',
    'olive',
    'violet',
    'pink',
    'grey',
    'orange',
    'black',
    'red',
  ]
  

function ProjectModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button 
        style={{float:"right"}} 
        basic 
        circular
        icon="eye circle" 
        color='blue' 
        content="Ver más"
        />}
    >
      <Modal.Header>
          {props.name}
        <div>
          {props.stack.map((t,index) =><Label color={colors[index % colors.length]}>{t}</Label> )}
        </div>
      </Modal.Header>
      <Modal.Content image>
      {props.ytId ? <Segment size="small">
            <Label as='a' color='red' ribbon>
            Serán solo 2'
            </Label>
            <iframe allowfullscreen="true" width="330" height="200" src={`https://www.youtube.com/embed/${props.ytId}`} frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Segment> : 
        <Image size='medium' src={props.srcImg} wrapped />
        }
        <Modal.Description className="modal-description">
          <Header>Descripción</Header>
          <div style={{width:"35vw"}}>
          <p>
            {props.description}
          </p>
          </div>
              <Button 
                icon="github"
                color="black"
                basic
                circular
                content="¿Querés ver el código?"
                onClick={() => window.open(props.githublink)}
              />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Muy bien!"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ProjectModal