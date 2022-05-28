import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, IconButton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, getCartById } from "../../../redux/actions";
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';


export default function ModalToRow({id, token, cantidad, setCantidad}) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  

  const handleSetCantidad = (e) => {
    setCantidad(e.target.value)
  }
  
  const handleSubmitCart = (e) => {
    e.preventDefault()
    dispatch(addItemToCart(id,token,cantidad))
    dispatch(getCartById(token))
    dispatch(getCartById(token))
    setOpen(false)
    Swal.fire({
        background: '#DFDCD3',
        icon: 'success',
        title: 'Modificado',
        showConfirmButton: false,
        timer: 1500
      })
  }

  return (
    <div>

    <IconButton onClick={handleOpen}>
        <EditIcon/>
    </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form onSubmit={(e)=>{handleSubmitCart(e)}}>
          <TextField
            margin="normal"
            type="number"
            required
            id="cantidad"
            label={cantidad}
            value={cantidad}
            name="cantidad"
            sx={{
              width: 100
            }}
            onChange={(e)=>{ handleSetCantidad(e)}}
          >
          </TextField>
            <Button type="submit"> Confirmar </Button>
            <Button onClick={() => setOpen(false)}> Volver </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}