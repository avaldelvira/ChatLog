import styled, { keyframes } from 'styled-components';

const popUp = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const slideFromRight = keyframes`
  from { left: 100%; }
  to { left: 0; }
`;

export const Avatar = styled.img`
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  margin-right: 1rem;
  border: .125rem solid #FFF;
`;

export const ChatMetadata = styled.div`
  font-size: .825rem;
  margin-bottom: .5rem;
  opacity: 0.75;
`;

export const EmailLayer = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  width: 100%;
  animation-name: ${slideFromRight};
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  background-color: rgba(255,255,255, 0.95);
  color: #223153;
  font-size: 1.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatItemWrapper = styled.li`
  width:100%;
  display: flex;
  align-items: flex-start;
  border-radius: .5rem;
  background: linear-gradient(-45deg, rgba(2,0,36,1) 0%, rgba(34,49,83,1) 90%);
  padding: 1rem;
  margin-top: 1rem;
  animation-name: ${popUp};
  animation-duration: 300ms;
  animation-delay: ${({index}) => `${index * 50}ms`};
  animation-fill-mode: forwards;
  color: #FFF;
  position: relative;
  overflow: hidden;
  transform: scale(0);
  box-shadow: 0 0 0 0 transparent;
  transition: box-shadow 300ms;
  
  @media screen and (min-width: 756px) {
    width: 48%;
  }
  @media screen and (min-width: 900px) {
    width: 33%;
  }
  &:hover {
    box-shadow: 0 0 2rem 0 rgba(34,49,83,0.25);
  }
 `;


