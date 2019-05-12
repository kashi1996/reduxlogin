import React, { Component } from "react";



import { CustomButton, Card, CardSection, Input } from "./common";
import { connect } from "react-redux";
import { emailchange } from "./actions"


class LoginForm extends Component {

    // To handle the text input we need the state in the action
    onEmailChange(text) {

    }
    render() {

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email: "
                        placeholder="user@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />


                </CardSection>
                {/* For Password */}
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                    />

                </CardSection>

                <CardSection>
                    <CustomButton>Sign In</CustomButton>
                </CardSection>
            </Card>
        );
    }
}

export default connect (null, emailchange) (LoginForm);