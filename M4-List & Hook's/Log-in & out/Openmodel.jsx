import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const Openmodel = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div>
        <h2>Model Login Form</h2>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login to my Account
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="text" placeholder='Email address' /><br />
            <input type="text" placeholder='Password' /><br />
            <input type="checkbox" />Remember Me On This Computer <br />
            <button>LOGIN</button><br />
            <a href="#">Forgot Your Password?</a><br />
            <a href="#">Create A New Account</a>

          </Typography>
        </Box>
      </Modal>
      <h2>Model Registration Form</h2>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Account
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="text" placeholder='Enter your full name' /><br />
            <input type="text" placeholder='Create Password' /><br />
            <button>REGISTRATION</button><br />
            <a href="#">Already Have Account?</a>

          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Openmodel