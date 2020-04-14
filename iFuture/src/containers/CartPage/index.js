import React, {useState} from 'react';
import * as S from '../CartPage/styles'
import Appbar from '../../components/Appbar';
import OrderCard from '../../components/orderCard/index'

function CartPage() {
  const [checkBox, setcheckBox] = useState({money: true, card: true})
  const [order, setOrder] = useState({orders: [1]})
  const checkBoxImage = <img src={require('../../assets/radiobutton-unchecked.png')}/>

  let clickedCheckBoxMoney = checkBox.money?  
  <S.CheckboxWrapper onClick={toggleCheckBoxMoney}>
    {checkBoxImage}
  </S.CheckboxWrapper> 
  : 
  <S. ClickedCheckboxWrapper onClick={toggleCheckBoxMoney}>
    {checkBoxImage}
  </S. ClickedCheckboxWrapper>
                                        
  let clickedCheckBoxCard = checkBox.card?  
  <S.CheckboxWrapper onClick={toggleCheckBoxCard}>
    {checkBoxImage}
  </S.CheckboxWrapper> 
  : 
  <S. ClickedCheckboxWrapper onClick={toggleCheckBoxCard}>
    {checkBoxImage}
  </S. ClickedCheckboxWrapper>

  function toggleCheckBoxMoney(){
    if(checkBox.money){
      setcheckBox({money: false, card: true})
    }
    else{
      setcheckBox({money: true, card: true})
    }
  }
  function toggleCheckBoxCard(){
    if(checkBox.card){
      setcheckBox({money: true, card: false})
    }
    else{
      setcheckBox({money: true, card: true})
    }
  }
  let myOrders = order.orders.length === 0?
  <S.EmptyCartWrpper>
    Carrinho Vazio
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
    <OrderCard/>
  </S.OrderInfoWrapper>

  return (
    <S. ContentWrapper height={order.orders.length === 0? '640 px' : '781 px'}>
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
      <S.PayementOptionBoxWrapper>
        {clickedCheckBoxMoney}
        <S.PayementOptionWrapper>
          Dinheiro
        </S.PayementOptionWrapper>
      </S.PayementOptionBoxWrapper>
      <S.PayementOptionBoxWrapper>
        {clickedCheckBoxCard}
        <S.PayementOptionWrapper>
          Cartão de crédito
        </S.PayementOptionWrapper>
      </S.PayementOptionBoxWrapper>
      <S.ConfirmButtonWrapper 
      marginTop={order.orders.length === 0? '145px' : '19px'}
      color={order.orders.length === 0? 'rgba(232, 34, 46, 0.5)' : '#e8222e'}
      >
        <S.ButtonTitleWrapper>
          Confirmar
        </S.ButtonTitleWrapper>
      </S.ConfirmButtonWrapper>
    </S. ContentWrapper>
  )
}

export default CartPage;