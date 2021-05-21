import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
      <Input type="text" placeholder="username" name="username" required />
        <Input type="text" placeholder="First Name" name="firstname" required />
        <Input type="text" placeholder="Last Name" name="lastname" required />
        <Input type="email" placeholder="Email" name="email" required/>
        <Input type="password" placeholder="Password" name="password" required />
        <Input type="number" placeholder="Contact Number" name="number" required />


        


      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
