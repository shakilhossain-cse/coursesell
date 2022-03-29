import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Course = () => {
  return (
    <Container>
      <Row xs={1} md={3} className="g-4 p-4">
  {Array.from({ length: 6 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN" />
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center my-2'>
          <Card.Title>Card title</Card.Title>
          <Button variant="outline-primary">Enroll</Button>
          </div>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </Container>
  )
}

export default Course