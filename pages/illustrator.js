import {Col, Container, Form, Row, Tab, Tabs, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import profile from '../public/img/graph-temp.png'

export default function Illustrator() {
    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <Tabs defaultActiveKey="o1">
                        {/*TODO Fix event key*/}
                        <Tab eventKey="o1" title="Calculation and Illustration">
                            <Form>
                                <Row>
                                    <Form.Group controlId="effectSizeType">
                                        <Form.Label>Effect Size Type:</Form.Label>
                                        <Form.Select>
                                            <option>Cohen&#39;s d</option>
                                            <option>Hedge&#39;s g</option>
                                            <option>Glass&#39; Delta</option>
                                            <option>All</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <Form.Text>Group #1:</Form.Text>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>Name:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>N:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>Mean:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>Variance:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group controlId="errorBarsGroup1">
                                            <Form.Label >Error Bars</Form.Label>
                                            <Form.Select >
                                                <option>SD</option>
                                                <option>SE</option>
                                                <option>95% CI</option>                                           
                                            </Form.Select>                    
                                        </Form.Group>
                                        <Form.Group className="mt-2" as={Row} controlId="borderColorGroup1">
                                            <Form.Label column sm={4}>borderColor</Form.Label>
                                            <Col sm={8}>
                                                <Form.Select >
                                                    <option>color1</option>
                                                    <option>color2</option>
                                                    <option>color3</option>                                           
                                                </Form.Select> 
                                            </Col>                          
                                        </Form.Group>
                                        <Form.Group className="mt-2" as={Row} controlId="fillColorGroup1">
                                            <Form.Label column sm={4}>fillColor</Form.Label>
                                            <Col sm={8}>
                                                <Form.Select >
                                                    <option>color1</option>
                                                    <option>color2</option>
                                                    <option>color3</option>                                           
                                                </Form.Select> 
                                            </Col>                          
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Text>Group #2:</Form.Text>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>Name:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>N:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>Mean:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column sm={3}>Variance:</Form.Label>
                                            <Col sm={9}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group controlId="errorBarsGroup2">
                                            <Form.Label>Error Bars</Form.Label>
                                            <Form.Select >
                                                <option>SD</option>
                                                <option>SE</option>
                                                <option>95% CI</option>                                           
                                            </Form.Select>                    
                                        </Form.Group>
                                        <Form.Group className="mt-2" as={Row} controlId="borderColorGroup2">
                                            <Form.Label column sm={4}>borderColor</Form.Label>
                                            <Col sm={8}>
                                                <Form.Select >
                                                    <option>color1</option>
                                                    <option>color2</option>
                                                    <option>color3</option>                                           
                                                </Form.Select> 
                                            </Col>                          
                                        </Form.Group>
                                        <Form.Group className="mt-2" as={Row} controlId="fillColorGroup2">
                                            <Form.Label column sm={4}>fillColor</Form.Label>
                                            <Col sm={8}>
                                                <Form.Select >
                                                    <option>color1</option>
                                                    <option>color2</option>
                                                    <option>color3</option>                                           
                                                </Form.Select> 
                                            </Col>                          
                                        </Form.Group>
                                    </Col>

                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                        <p>Add more groups</p>
                                        <Button variant="outline-primary" column sm={3}>←</Button>{' '}
                                        <Button variant="outline-primary" column sm={3}>→</Button>{' '}
                                        <Button variant="outline-primary" column sm={3}>+</Button>{' '}
                                        <Button variant="outline-primary" column sm={3}>-</Button>
                                    </Col>
                                    
                                    
                                </Row>
                            </Form>
                        </Tab>
                        {/*TODO Fix event key*/}
                        <Tab eventKey="o2" title="Illustration Only">
                            {/* <h1>hello test</h1> */}
                            <Form>
                            <Row className="mt-3">
                                <Form.Group as={Row}>
                                            <Form.Label column sm={4}>Effect Size:</Form.Label>
                                            <Col sm={6}>
                                                <Form.Control as="input" type="text"></Form.Control>
                                            </Col>
                                        </Form.Group>
                                </Row>
                                <Row className="mt-3">
                                    <Form.Group as={Row} controlId="effectSizeType">
                                        <Form.Label>Effect Size Type:</Form.Label>
                                        <Form.Select >
                                            <option>Cohen&#39;s d</option>
                                            <option>Hedge&#39;s g</option>
                                            <option>Glass&#39; Delta</option>
                                            <option>All</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group  className="mt-2" as={Row} controlId="borderColorGroup">
                                            <Form.Label column sm={4}>borderColor</Form.Label>
                                            <Col sm={8}>
                                                <Form.Select sm={9}>
                                                    <option>color1</option>
                                                    <option>color2</option>
                                                    <option>color3</option>                                           
                                                </Form.Select> 
                                            </Col>                          
                                        </Form.Group>
                                        <Form.Group className="mt-2" as={Row} controlId="fillColorGroup">
                                            <Form.Label column sm={4}>fillColor</Form.Label>
                                            <Col sm={8}>
                                                <Form.Select >
                                                    <option>color1</option>
                                                    <option>color2</option>
                                                    <option>color3</option>                                           
                                                </Form.Select> 
                                            </Col>                          
                                        </Form.Group>
                                </Row>
                                
                            </Form>
                        </Tab>
                    </Tabs>
                </Col>
                <Col>
                    <Image src="/img/graph-temp.png" layout='responsive' height="489" width="878">

                    </Image>
                    <Image src = {profile}>
                    </Image>    
                    
                </Col>
            </Row>
        </Container>
    )
}