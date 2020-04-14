import styled from 'styled-components'

export const OrderCardWrapper = styled.div`
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 8px 16px 8px 16px
  display: flex;
`
export const ImageWrapper = styled.div`
  width: 96px;
  height: 112px;
  object-fit: contain;
`
export const OrderInfosWrapper = styled.div`
    display: flex;
    flex-direction: column
`
export const NameandQuantityWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 0
`
export const DishNameWrapper = styled.div`
  width: 167px;
  height: 18px;
  color: #e8222e;
  margin: 18px 0 8px 16px;
`
export const QuantityWrapper = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 8px;
  border: solid 1px #e8222e;
  display: flex;
  justify-content: center;
  align-items: center
`
export const NumeberWrapper = styled.div`
  width: 9px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  text-align: center;
  color: #e8222e;
`

export const DishDescriptionWrapper = styled.div`
  width: 200px;
  height: 30px;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.3px;
  color: #b8b8b8;
  margin: 0 16px 4px 16px
`
export const PriceAndDeleteWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-right: 0
`
export const PriceWrapper = styled.div`
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.4px;
  margin: 4px 0 15px 16px;
`
export const DeleteButtonWrapper = styled.div`
  width: 90px;
  height: 31px;
  border-radius: 8px;
  border: solid 1px #e02020;
  display: flex;
  justify-content: center;
  align-items: center
`
export const DeleteWrapper = styled.div`
  width: 43px;
  height: 14px;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.3px;
  text-align: center;
  color: #e02020;
`