import React, {useState} from 'react';
import * as S from '../CartPage/styles'
import Appbar from '../../components/Appbar';

import restaurant from '../RestaurantPage/mock'
import CardFood from '../../components/CardFood';

function CartPage() {
  const [payment, setpayment] = useState({paymentMethod: ''})

  function savePaymentMethod(e){
    setpayment({paymentMethod: e.target.id })
  }

  function teste(e){
    e.preventDefault()
  }

  let myOrders = restaurant.products.length === 0?
  <S.EmptyCartWrpper>
    <S.EmptyCartTypographyWrpper>
    Carrinho Vazio
    </S.EmptyCartTypographyWrpper>
  </S.EmptyCartWrpper>
  :
  <S.OrderInfoWrapper>
    <S.RestaurantNameWrraper>
      Nome do restaurante
    </S.RestaurantNameWrraper>
    <S.AdressAndDeliveryTimeWrapper>
      Endereço do restaurante
    </S.AdressAndDeliveryTimeWrapper>
    <S.AdressAndDeliveryTimeWrapper>
      30 - 40 min
    </S.AdressAndDeliveryTimeWrapper>

    {restaurant.products.map(item => (
      <CardFood item={item}/>
    ))}

  </S.OrderInfoWrapper>

  return (

    <S. ContentWrapper 
    height={restaurant.products.length === 0? '640 px' : '781 px'}>
      <Appbar page='cart'/>
      
      <S.AdressBoxWrapper>

        <S.AdressTitleWrapper>
          Endereço da entrega
        </S.AdressTitleWrapper>
        
        <S.AdressWrapper>
          Endereço
        </S.AdressWrapper>

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

      <S.DivisionBar/>

      <S.FormWrapper onSubmit={teste}>
        <S.PayementOptionBoxWrapper>
          <S.RadioButtonWrapper 
          name="payementOption" 
          type="radio"
          value={payment.paymentMethod || ''}
          id='money'
          required
          onClick={savePaymentMethod}
          disabled={restaurant.products.length === 0? true : false}
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
          disabled={restaurant.products.length === 0? true : false}
          />
          <S.PayementOptionWrapper>
            Cartão de crédito
          </S.PayementOptionWrapper>
        </S.PayementOptionBoxWrapper>
        <S.ConfirmButtonWrapper 
        marginTop={restaurant.products.length === 0? '145px' : '19px'}
        color={restaurant.products.length === 0? 'rgba(232, 34, 46, 0.5)' : '#e8222e'}
        type='onsubmit'
        >
          <S.ButtonTitleWrapper>
            Confirmar
          </S.ButtonTitleWrapper>
        </S.ConfirmButtonWrapper>
      </S.FormWrapper>
    </S. ContentWrapper>
  )
}

export default CartPage;