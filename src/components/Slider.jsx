import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data/slider'

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  width: 100%;
`
const Arrow = styled.div`
  align-items: center;
  background-color: #fff7f7;
  border-radius: 50%;
  bottom: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  height: 50px;
  margin: auto;
  opacity: 0.5;
  position: absolute;
  top: 0;
  width: 50px;
`

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
  transition: all 1.1s ease;
`

const Slide = styled.div`
  align-items: center;
  background-color: #${({ bgColor }) => bgColor};
  display: flex;
  height: 100vh;
  width: 100vw;
`
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`
const Image = styled.img`
  height: 100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    const maxSliderIndex = sliderItems.length - 1
    if (direction === 'left')
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : maxSliderIndex)
    else setSlideIndex(slideIndex === maxSliderIndex ? 0 : slideIndex + 1)
  }
  return (
    <div>
      <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
          <ArrowLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((slide) => (
            <Slide key={slide.id} bgColor={slide.bgColor}>
              <ImageContainer>
                <Image src={slide.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{slide.title}</Title>
                <Description>{slide.description}</Description>
                <Button>Show now!</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction='left' onClick={() => handleClick('left')}>
          <ArrowLeft />
        </Arrow>
        <Arrow direction='right' onClick={() => handleClick('right')}>
          <ArrowRight />
        </Arrow>
      </Container>
    </div>
  )
}

export default Slider
