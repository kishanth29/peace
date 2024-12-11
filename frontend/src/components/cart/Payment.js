import { Fragment, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { orderCompleted } from "../../slices/cartSlice";
import { validateShipping } from '../cart/Shipping';
import Appbar from "../Appbar";
import MetaData from "../layouts/MetaData";
import Footer from "../Footer";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import video from '../../assets/videos/video.mp4';

export default function Payment() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
    const { user } = useSelector(state => state.authState);
    const { items: cartItems, shippingInfo } = useSelector(state => state.cartState);
    const { error: orderError } = useSelector(state => state.orderState);

    useEffect(() => {
        validateShipping(shippingInfo, navigate);
        if (orderError) {
            alert(orderError);
            return;
        }
    }, [shippingInfo, navigate, dispatch, orderError]);

    if (!orderInfo) {
        return <div>Loading...</div>;
    }

    const paymentData = {
        amount: Math.round(orderInfo.totalPrice * 100), // Amount in paise
        shipping: {
            name: user.name,
            address: {
                city: shippingInfo.city,
                postal_code: shippingInfo.postalCode,
                country: shippingInfo.country,
                state: shippingInfo.state,
                line1: shippingInfo.address
            },
            phone: shippingInfo.phoneNo
        }
    };

    const order = {
        orderItems: cartItems,
        shippingInfo,
        paymentInfo: {
            id: user._id,
            status: 'succeeded'
        }
    };

    if (orderInfo) {
        order.itemsPrice = orderInfo.itemsPrice;
        order.shippingPrice = orderInfo.shippingPrice;
        order.taxPrice = orderInfo.taxPrice;
        order.totalPrice = orderInfo.totalPrice;
    }

    const generatePDF = async () => {
        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
        const { width, height } = page.getSize();

        page.drawText('Payment Bill', { x: 50, y: height - 50, size: 30, color: rgb(0, 0, 0) });
        page.drawText(`Name: ${user.name}`, { x: 50, y: height - 100, size: 20, color: rgb(0, 0, 0) });
        page.drawText(`Address: ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.state}, ${shippingInfo.country}`, { x: 50, y: height - 130, size: 20, color: rgb(0, 0, 0) });
        page.drawText(`Phone: ${shippingInfo.phoneNo}`, { x: 50, y: height - 160, size: 20, color: rgb(0, 0, 0) });
        page.drawText(`Amount: Rs.${orderInfo.totalPrice}`, { x: 50, y: height - 190, size: 20, color: rgb(0, 0, 0) });
        page.drawText(`Order Items: ${cartItems.map(item => `Product: ${item.name}, Price: Rs.${item.price}, Quantity: ${item.quantity}`).join("\n")}`, { x: 50, y: height - 230, size: 20, color: rgb(0, 0, 0) });

        const pdfBytes = await pdfDoc.save();
        return pdfBytes;
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
                        // Fetch the video file
            const videoResponse = await axios.get(video, { responseType: 'blob' });
            const videoBlob = videoResponse.data;

                    // Generate PDF
            const pdfBytes = await generatePDF();

                         // Create a new ZIP file
            const zip = new JSZip();

                            // Add PDF file to the ZIP
            zip.file("payment-bill.pdf", pdfBytes);

            // Add video file to the ZIP
            zip.file("video.mp4", videoBlob);

            // Generate ZIP file
            const zipBlob = await zip.generateAsync({ type: "blob" });
            saveAs(zipBlob, "video and payment details.zip");

            // Dispatch the orderCompleted action
            dispatch(orderCompleted());
            alert("Payment Successful");

            // Navigate to the success page
            navigate('/order/success');
        } catch (error) {
            console.error('Error during payment processing:', error);
            // Handle error
        }
    };

    return (
        <Fragment>
            <MetaData title={'Payment'} />
            <Appbar />
            <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}>
                <Container fluid className="py-5 gradient-custom">
                    <Row className="d-flex justify-content-center py-5">
                        <Col md="7" lg="5" xl="4">
                            <Card style={{ borderRadius: "15px", backgroundColor: "transparent" }}>
                                <Card.Body className="p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: "15px" }}>
                                    <h1 className="mb-4 text-white">Card Info</h1>
                                    <Form onSubmit={submitHandler}>
                                        <Form.Group controlId="cardNumber" className="mb-3">
                                            <Form.Label className="text-white">Card Number</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="card_num_field"
                                                placeholder="1234 5678 9012 3457"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="cardExpiry" className="mb-3">
                                            <Form.Label className="text-white">Card Expiry</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="card_exp_field"
                                                placeholder="MM/YYYY"
                                                required
                                            />
                                        </Form.Group>

                                        <Form.Group controlId="cardCVC" className="mb-3">
                                            <Form.Label className="text-white">Card CVC</Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="card_cvc_field"
                                                placeholder="&#9679;&#9679;&#9679;"
                                                required
                                            />
                                        </Form.Group>

                                        <Button
                                            id="pay_btn"
                                            type="submit"
                                            className="btn btn-block py-3"
                                        >
                                            Pay - {` Rs.${orderInfo.totalPrice}`}
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </Fragment>
    );
}
