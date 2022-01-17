import React from 'react';
import Slide from '@mui/material/Slide';
import { Dialog, DialogTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './Modal.css';
import moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Modal({dialogData,open,handleClose}) {
    
    return (
        <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth={false}
        maxWidth={'md'}
      > 
      <article>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 5,
            top: 5,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle className="title text-center" 
        sx={{
            mt:3,
            fontWeight:'bold'
          }}>{dialogData.title}
          </DialogTitle>
        <p className="date text-center">
            {moment(dialogData.publicationDate).format('DD.MM.YYYY HH:mm')}
        </p>
        
        { dialogData.teaser 
                    ? <p className="teaser">{dialogData.teaser}</p>
                    : null
        }
        { dialogData.imageUrl 
                    ? <img src={dialogData.imageUrl} />
                    : null
        }
        <p className="content">{dialogData.text}</p>
        <footer>Źródło: <a href={dialogData.url}>{dialogData.url}</a></footer>
        </article>
      </Dialog>
    );
}

export default Modal;