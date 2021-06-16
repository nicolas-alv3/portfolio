import React from 'react'
import { Button, Modal } from 'semantic-ui-react'  

function PodcastModal(props) {
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
        icon="headphones"
        color='blue'
        content="Quiero escuchar!"
        />}
    >
      <Modal.Header>
          La nave Geek
      </Modal.Header>
      <Modal.Content>
          <Modal.Description>
              En esta pandemia me animé a difundir mas contenido sobre lo que me apasiona, y pensé que sería genial hacerlo en formato audio y así poder fortalecer mis habilidades de orador.
        </Modal.Description>
        <br/>
      <iframe title="podcast" src="https://anchor.fm/nicolas-sebastian-alvarez/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
      <br/>
      Podes enviarme sugerencias a lanavegeekpodcast@gmail.com o visitar el sitio <b style={{color:"blue",cursor:"pointer"}} onClick={() => window.open("https://lanavegeek.wordpress.com","_blank")}>lanavegeek.wordpress.com</b>
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

export default PodcastModal