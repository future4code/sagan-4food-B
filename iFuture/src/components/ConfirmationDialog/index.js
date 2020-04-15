import React, { useState } from 'react'
import { connect } from 'react-redux'

import { setDialog } from '../../actions/confirmationDialog'

import * as S from './styles'
import { Dialog, DialogActions, TextField, MenuItem } from '@material-ui/core';

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
                    backgroundColor: 'black',
                    opacity: 0.1,
                },
            }}
            PaperProps={{
                style: {
                    boxShadow: "none",
                },
            }}
        >
            <S.DialogTitleStyled>
                Selecione a quantidade desejada
            </S.DialogTitleStyled>

            <S.OptionsContent>

                <S.Input
                    select
                    fullWidth
                    variant='outlined'
                    value={quantity}
                    onChange={selectOption}
                    // SelectProps={{
                    //     background: "#000000 url('../../assets/back.svg') 95.5% 50% no-repeat" 
                    //     // url('../imagens/bgs/seta.png') 95.5% 50% no-repeat
                    // }}
                    // IconComponent = {<div>oi</div>}
                    SelectProps={{
                        IconComponent: () => <S.Img src={require("../../assets/dropdown.svg")} alt='home' />,
                      }}
                >
                    <MenuItem value='0'>0</MenuItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
                        <MenuItem value={number}>{number}</MenuItem>
                    ))}
                </S.Input>

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
