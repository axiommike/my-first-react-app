import { Button, withStyles, TextField, Zoom } from "@material-ui/core";
import React, { Component } from "react";
import Alert from "@material-ui/lab/Alert";
import validator from "validator";
import axios from "axios";

const useStyles = (theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1),
    },
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
    emailError: "",
    notificationStatus: false,
    notifcationSeverity: "",
    notification: "",
  };

  handleEmailChange(e) {
    var email = e.target.value;
    validator.isEmail(email)
      ? this.setState({ emailError: "" })
      : this.setState({ emailError: "Invalid Email" });
    this.setState({ email: e.target.value });
  }
  sendEmail() {
    const { email, message, name } = this.state;
    axios
      .post("/sendmail", { email: email, message: message, name: name })
      .then((response) => {
          if(response.data[0].status === 202){
                    //all good
                    this.setState({
                        notification: "Your message has been sent!",
                        notifcationSeverity: "success",
                        notificationStatus: true,
                        isSent: true,
                      });
          }else{
              //something went sideways
              this.setState({
                notification: "Something went horribly wrong!" + response.data[0].status.message,
                notifcationSeverity: "error",
                notificationStatus: true,
                isSent: false,
              });
          };
        console.log(response);
      })
      .catch((error) => {
        this.setState({
          isSent: false,
          notification: "There was an error: " + error,
          notifcationSeverity: "error",
          notificationStatus: true,
        });
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSent: "",
    });
    this.setState({ buttonText: "Sending email..." });
    this.sendEmail();
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Zoom in={this.state.notificationStatus}>
          <Alert severity={this.state.notifcationSeverity} style={{marginTop:20}}>
            {this.state.notification}
          </Alert>
        </Zoom>
        {!this.state.isSent && (
          <form className={classes.root} onSubmit={(e) => this.handleSubmit(e)}>
            <TextField
              label="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <br />
            <TextField
              error={this.state.emailError !== ""}
              helperText={this.state.emailError}
              label="email"
              onChange={(e) => this.handleEmailChange(e)}
            />
            <br />
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
            <Button type="submit" variant="contained">
              {this.state.buttonText}
            </Button>
          </form>
        )}
      </>
    );
  }
}
export default withStyles(useStyles)(ContactForm);
