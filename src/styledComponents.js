import styled from 'styled-components'

export const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  padding: 20px;
  background-color:  #223a5f;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: #ffffff;
`

export const MainScoreContainer = styled.div`
  color: #fff;
  padding: 6px;
  padding-left: 12px;
  padding-right: 12px;
  border: 2px solid #fff; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
`

export const ScoreContainer = styled.div`
  text-align: center;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  background-color:  #fff;
  color: #223a5f;
  font-size: 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ButtonsContainer = styled.div`
  width: 30vw;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
  text-align: center;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Image = styled.img`
  height: 100px;
`

export const ResultContainer = styled.div`
  margin: 20px;
`
export const ChoiceImage = styled.img`
  width: 100px;
  height: 100px;
`

export const RulesImage = styled.img`
  width: 100%;
  height: 100%;
`

export const ResultViewContainer = styled.div`
  display: flex;
  gap: 50px;
`
export const RulesBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  padding: 5px;
  padding-left: 12px;
  padding-right: 12px;
  border: none;
  border-radius: 5px;
`

export const PlayAgainButton = styled(RulesBtn)`
  padding-left: 20px;
  padding-right: 20px;
`
export const PopupContainer = styled.div`
  padding: 30px;
  background-color: #ffffff;
  height: 450px;
`
export const Score = styled.p`
  font-family: 'Roboto';
  margin: '0px';
  fontWeight: '700';
  fontSize: '35px';
`
