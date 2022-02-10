import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`
const Info = styled.div`
  background-color: #00000032;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`
const Button = styled.button`
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border: none;
  padding: 10px;
`

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>Shop now!</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
