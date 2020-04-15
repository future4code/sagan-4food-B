import styled from 'styled-components'
import {Typography, Button} from '@material-ui/core'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:  ${props => props.height}
  margin: 0 auto
`
export const AdressBoxWrapper = styled.div`
  width: 100%;
  height: 76px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px
`
export const AdressTitleWrapper = styled(Typography)`
  width: 90%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
  margin-bottom: 8px
`
export const AdressWrapper = styled(Typography)`
  width: 90%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
`
export const EmptyCartWrpper = styled.div`
  width: 100%;
  height: 42px;
  margin-bottom: 37px;
  display: flex;
  justify-content: center;
  align-items: center
`
export const EmptyCartTypographyWrpper = styled(Typography)`
  width: 100%;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
`
export const FareWrapper = styled(Typography)`
  width: 90%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: right;
  margin: 8px 0 16px 0
`
export const PriceBoxWrapper = styled.div`
  display: flex;
  width: 90%
  flex-direction: row;
`
export const PriceTitleWrapper = styled.div`
  width: 50%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
`
export const PriceWrapper = styled.div`
  width: 50%;
  height: 18px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.4px;
  text-align: right;
  color: #e8222e;
`
export const PayementTitleWrapper = styled(Typography)`
  width: 90%;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin: 24px 0 8px 0
`
export const DivisionBar = styled.div`
  width: 90%;
  height: 1px;
  border: solid 1px #000000;
  margin-bottom: 11px;
`
export const FormWrapper = styled.form`
  width: 100%
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PayementOptionBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 14px;
`
export const RadioButtonWrapper = styled.input`
  width: 24px;
  height: 24px;
`
export const PayementOptionWrapper = styled(Typography)`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin-left: 8px;
`
export const ConfirmButtonWrapper = styled(Button)`
  width: 90%;
  height: 42px;
  border-radius: 2px;
  background-color: ${props => props.color};
  margin: ${props => props.marginTop} 0 16px 0
`
export const ButtonTitleWrapper = styled(Typography)`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
`
export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  width: 90%
`
export const RestaurantNameWrraper = styled(Typography)`
  height: 18px;
  color: #e8222e;
  margin-bottom: 8px
`
export const AdressAndDeliveryTimeWrapper = styled(Typography)`
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  color: #b8b8b8;
  margin-bottom: 8px
`