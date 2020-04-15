import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setDialog } from '../../actions/confirmationDialog'

import * as S from './styles'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from '@material-ui/core';

function ConfirmationDialog(props) {

    const { open, setOpen, item } = props

    const [quantity, setQuantity] = useState(0)

    const selectOption = (e) => {
        setQuantity(e.target.value)
    }

    const addQuantityAndClose = () => {
        // adicionar a quantidade ao respectivo produtos
            // ex: setQuantityInProduct(quantity, item.id)

        // e fecha
        setOpen(false);
    }

    return (
        <Dialog 
            disableBackdropClick disableEscapeKeyDown open={open} onClose={addQuantityAndClose}
            BackdropProps={{
                style: {
                //   backgroundColor: 'transparent',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
              }}
              
            >
            <S.DialogTitleStyled>
                Selecione a quantidade desejada
            </S.DialogTitleStyled>

            <S.OptionsContent>

                <TextField
                    select
                    fullWidth
                    variant='outlined'
                    value={quantity}
                    onChange={selectOption}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                        <MenuItem value={number}>{number}</MenuItem>
                    ))}
                </TextField>

            </S.OptionsContent>

            <DialogActions>

                <S.ButtonStyled onClick={addQuantityAndClose}>
                    Adicionar ao carrinho
                </S.ButtonStyled>

            </DialogActions>

        </Dialog>
    )
}

const mapStateToProps = state => ({
    open: state.confirmationDialog.dialogOpen
})

const mapDispatchToProps = dispatch => ({
    setOpen: (option) => dispatch(setDialog(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationDialog)
