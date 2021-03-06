import Form from '../../Widgets/Form'
import Input from '../../Widgets/Inputs/LoginInput/Input'
import Container from './Container'
import DateOfBirth from './DateOfBirth/DateOfBirth'
import DatePicker from './DatePicker/DatePicker'
import Gender from './Gender/Gender'
import PaymentType from './PaymentType/PaymentType'
import Row from './Row'
import './Template.css'


const Template = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <h4>Account</h4>
                    <Input type="text" placeholder="Full Name" icon="fa fa-user" />
                    <Input type="email" placeholder="Email Adress" icon="fa fa-envelope" />
                    <Input type="password" placeholder="Password" icon="fa fa-key" />
                </Row>
                <Row>
                    <div className="col-half">
                        <h4>Date of Birth</h4>
                        <DateOfBirth />
                    </div>
                    <div className="col-half">
                        <h4>Gender</h4>
                        <Gender />
                    </div>
                </Row>
                <Row>
                    <h4>Payment Details</h4>
                    <PaymentType />
                    <Input type="text" placeholder="Card Number" icon="fa fa-credit-card" />
                    <div className="col-half">
                        <Input type="text" placeholder="Card CVC" icon="fa fa-user" />
                    </div>
                    <div className="col-half">
                        <DatePicker />
                    </div>
                </Row>
                <div>
                    <h4>Terms and Conditions</h4>
                    <div className="input-group">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I accept the terms and conditions htmlFor signing up to this service, and hereby confirm I have read the privacy policy.</label>
                    </div>
                </div>
            </Form>
        </Container>
    )
}

export default Template
