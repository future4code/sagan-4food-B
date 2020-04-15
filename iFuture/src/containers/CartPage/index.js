import React, { useState } from 'react';
import * as S from '../CartPage/styles'
import Appbar from '../../components/Appbar';

import restaurant from '../RestaurantPage/mock'
import CardFood from '../../components/CardFood';
import Bottombar from '../../components/Bottombar';

function CartPage() {
  // const restaurant = { products: [] }
  const [payment, setpayment] = useState({ paymentMethod: '' })

  function savePaymentMethod(e) {
    setpayment({ paymentMethod: e.target.id })
  }

  function teste(e) {
    e.preventDefault()
  }

  let myOrders = restaurant.products.length === 0 ?
    <S.EmptyCartWrpper>
      <S.EmptyCartTypographyWrpper>
        Carrinho Vazio
    </S.EmptyCartTypographyWrpper>
    </S.EmptyCartWrpper>
    :
    <S.OrderInfoWrapper>
      <S.DivMain>
        <S.Title>
          Nome do restaurante
    </S.Title>
        <S.Title>
          Endereço do restaurante
    </S.Title>
        <S.Title>
          30 - 40 min
    </S.Title>
      </S.DivMain>

      {restaurant.products.map(item => (
        <CardFood item={item} />
      ))}

    </S.OrderInfoWrapper>

  return (
    <S.ContentWrapper>
      <Appbar page='cart' />

      <S.Container>
        <S.AdressBoxWrapper>

          <S.Title gray>
            Endereço da entrega
        </S.Title>

          <S.Title>
            Endereço
        </S.Title>

        </S.AdressBoxWrapper>

        {myOrders}

        <S.FareWrapper>
          Frete R$0,00
      </S.FareWrapper>

        <S.PriceBoxWrapper>

          <S.PriceTitleWrapper>
            SUBTOTAL
        </S.PriceTitleWrapper>

          <S.PriceWrapper>
            R$0,00
        </S.PriceWrapper>

        </S.PriceBoxWrapper>

        <S.PayementTitleWrapper>
          Forma de pagamento
      </S.PayementTitleWrapper>

        <S.DivisionBar />

        <S.FormWrapper onSubmit={teste}>
          <S.PayementOptionBoxWrapper>
            <S.RadioButtonWrapper
              name="payementOption"
              type="radio"
              value={payment.paymentMethod || ''}
              id='money'
              required
              onClick={savePaymentMethod}
              disabled={restaurant.products.length === 0 ? true : false}
            />
            <S.PayementOptionWrapper>
              Dinheiro
          </S.PayementOptionWrapper>
          </S.PayementOptionBoxWrapper>
          <S.PayementOptionBoxWrapper>
            <S.RadioButtonWrapper
              name="payementOption"
              type="radio"
              value={payment.paymentMethod || ''}
              id='creditcard'
              onClick={savePaymentMethod}
              disabled={restaurant.products.length === 0 ? true : false}
            />
            <S.PayementOptionWrapper>
              Cartão de crédito
          </S.PayementOptionWrapper>
          </S.PayementOptionBoxWrapper>
          <S.ConfirmButtonWrapper
            marginTop={restaurant.products.length === 0 ? '145px' : '19px'}
            color={restaurant.products.length === 0 ? 'rgba(232, 34, 46, 0.5)' : '#e8222e'}
            type='onsubmit'
          >
            <S.ButtonTitleWrapper>
              Confirmar
          </S.ButtonTitleWrapper>
          </S.ConfirmButtonWrapper>
        </S.FormWrapper>

      </S.Container>

      <Bottombar page='cart' />
    </S.ContentWrapper>
  )
}

export default CartPage;