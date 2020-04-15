import React from 'react'
import * as S from '../orderCard/styles'

function OrderCard(){
    return(
            <S.OrderCardWrapper>
                <S.ImageWrapper src={require('../../assets/mao-santa-burguer-1531851949973-v-2-900-x-506.png')}/>
                <S.OrderInfosWrapper>
                    <S.NameandQuantityWrapper>
                        <S.DishNameWrapper>
                            Nome do prato
                        </S.DishNameWrapper>
                        <S.QuantityWrapper>
                            <S.NumeberWrapper>
                                1
                            </S.NumeberWrapper>
                        </S.QuantityWrapper>
                    </S.NameandQuantityWrapper>
                    <S.DishDescriptionWrapper>
                        Prato sofisticado formado por ingredientes exóticos
                    </S.DishDescriptionWrapper>
                    <S.PriceAndDeleteWrapper>
                        <S.PriceWrapper>
                            R$15,00
                        </S.PriceWrapper>
                        <S.DeleteButtonWrapper>
                            <S.DeleteWrapper>
                                Remover
                            </S.DeleteWrapper>
                        </S.DeleteButtonWrapper>
                    </S.PriceAndDeleteWrapper>
                </S.OrderInfosWrapper>
            </S.OrderCardWrapper>
    )
}
 export default OrderCard;