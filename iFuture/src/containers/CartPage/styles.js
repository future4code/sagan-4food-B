import styled from 'styled-components'

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    height:  ${props => props.height}
    margin: 0 auto
`

export const AdressBoxWrapper = styled.div`
  width: 100%;
  height: 76px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center
`
export const AdressTitleWrapper = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
  margin-left: 16px
`
export const AdressWrapper = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin-left: 16px
  margin-right: 16px
`
export const EmptyCartWrpper = styled.div`
  width: 296px;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
  margin: 12px 32px 37px 32px;
`
export const FareWrapper = styled.div`
  width: 104px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: right;
  margin: 8px 16px 14px 240px
`
export const PriceBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 16px;
    margin-left: 16px;
`
export const PriceTitleWrapper = styled.div`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
`
export const PriceWrapper = styled.div`
  width: 164px;
  height: 18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: right;
  color: #e8222e;
`
export const PayementTitleWrapper = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin: 24px 18px 8px 16px
`
export const DivisionBar = styled.div`
  width: 328px;
  height: 1px;
  border: solid 1px #000000;
  margin: 0 16px 11px 16px
`
export const PayementOptionBoxWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px 16px 14px 16px
`
export const CheckboxWrapper = styled.div`
  width: 24px;
  height: 24px;
  object-fit: contain;
`
export const ClickedCheckboxWrapper = styled.div`
  width: 21px;
  height: 21px;
  background-color: #000000;
  border-radius: 50% 50%;
`
export const PayementOptionWrapper = styled.div`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin-left: 10px;
`
export const ConfirmButtonWrapper = styled.div`
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: ${props => props.color};
  margin: ${props => props.marginTop} 16px 16px 16px
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ButtonTitleWrapper = styled.div`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
`
export const OrderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column
`
export const RestaurantNameWrraper = styled.div`
  width: 328px;
  height: 18px;
  color: #e8222e;
  margin: 16px 16px 8px 16px
`
export const AdressAndDeliveryTimeWrapper = styled.div`
  width: 328px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
  margin: 0 16px 8px 16px
`