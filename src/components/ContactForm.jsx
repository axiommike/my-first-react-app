import { Button, withStyles, TextField, Zoom } from '@material-ui/core';
import React, { Component } from 'react';
import Alert from '@material-ui/lab/Alert';
import validator from 'validator';


const useStyles = theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
});

class ContactForm extends Component {
    state = {
        name: "",
        message: "",
        email: "",
        subject: "",
        sent: false,
        buttonText: "Send Message",
        emailError: '',
        notificationStatus: false,
        notifcationSeverity: 'success',
        notification: ''
    };

    handleEmailChange(e) {
        var email = e.target.value
        validator.isEmail(email) ? this.setState({ emailError: '' }) : this.setState({ emailError: 'Invalid Email' })
        this.setState({ email: e.target.value });
        // this.setState({
        //     notification: 'Email has changed!'+e.target.value,
        //     notifcationSeverity: 'info',
        //     notificationStatus: true,
        //     emailError: 'etetaear'
        // })
    }
    sendEmail() {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const { email, message, name } = this.state;
        const msg = {
            to: 'mike@mikecameron.ca',
            from: email, // Use the email address or domain you verified above
            subject: 'Form email from: ' + name,
            text: message,
            html: message,
        };

        //ES6
        sgMail
            .send(msg)
            .then(() => { }, error => {
                this.setState({notification:'Something went wrong', notificationStatus: true})
                console.error(error);

                if (error.response) {
                    console.error(error.response.body)
                }
            }).then(()=>{this.setState({isSent: false})});

        //do stuff
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            isSent: '',
        })
        this.setState({ buttonText: 'sending email...' });
        this.sendEmail();



    }

    render() {
        const { classes } = this.props;
        return (
            <>
                <Zoom in={this.state.notificationStatus}>
                    <Alert
                        severity={this.state.notifcationSeverity} >{this.state.notification}</Alert>
                </Zoom>
                {!this.state.isSent &&
                    <form className={classes.root} onSubmit={(e) => this.handleSubmit(e)} >

                        <TextField label='Name'
                            onChange={(e) => this.setState({ name: e.target.value })} /><br />
                        <TextField
                            error={(this.state.emailError !== '')}
                            helperText={this.state.emailError}
                            label='email'
                            onChange={(e) => this.handleEmailChange(e)}
                        /><br />
                        <TextField
                            id="standard-multiline-flexible"
                            label="Message"
                            placeholder="Enter Message"
                            variant="outlined"
                            multiline
                            rowsMax={4}
                            value={this.state.message}
                            onChange={(e) => this.setState({ message: e.target.value })}
                            required
                            type="text"
                        />
                        <br />
                        <Button type='submit'
                            variant='contained'>{this.state.buttonText}</Button>

                    </form>}
            </>
        );
    }
}
export default withStyles(useStyles)(ContactForm);