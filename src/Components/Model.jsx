import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height:600,
  borderRadius:2,
  
};

export default function BasicModal({isDilogOpen,handleClose}) {
  const [open, setOpen] = React.useState(false);
  

  return (
    <div>
      
      <Modal
      className='modal'
        open={isDilogOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Search Here
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="navbar-search">
            <input type="text" placeholder='Search' className="navbar-search-input" />
        </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}