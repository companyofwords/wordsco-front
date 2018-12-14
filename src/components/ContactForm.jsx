/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
//import { div   } from '../../tailwind';
import '../../tailwind.css';
import NetlifyForm from 'react-netlify-form'

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const FormBlock = styled.div`
  ${tw('md:flex md:items-center mb-12')};
`;

const Form = styled.form`
  ${tw('w-full max-w-lg')};
`;

const Label = styled.label`
  ${tw('block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4')};
`;

const Button = styled.button`
  ${tw('flex-no-shrink bg-teal hover:bg-teal-dark border-teal hover:border-teal-dark text-sm border-4 text-white py-1 px-2 rounded')};
`;

const Textarea = styled.textarea`
  ${tw('bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple')};
`;

const Input = styled.input`
  ${tw('bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple')};
`;

const Onethirdcolumn = styled.div`
  ${tw('md:w-1/3')};
`;

const Twothirdcolumn = styled.div`
  ${tw('md:w-2/3')};
`;

const ContactForm = () => (
    <React.Fragment>

<NetlifyForm
  name='Form With Invisible Recaptcha'
>
  {({ loading, error, success }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
        <div>       
          <FormBlock>
      <Onethirdcolumn>
        <Label>
          Name:
        </Label>
      </Onethirdcolumn>
      <Twothirdcolumn>
          <Input type='text' name='Name' required />
          </Twothirdcolumn>
    </FormBlock>
    <FormBlock>
      <Onethirdcolumn>
        <Label>
          Email:
        </Label>
      </Onethirdcolumn>
      <Twothirdcolumn>
          <Input type='text' name='Email' required />
          </Twothirdcolumn>
    </FormBlock>
    <FormBlock>
      <Onethirdcolumn>
        <Label>
          Message:
        </Label>
      </Onethirdcolumn>
      <Twothirdcolumn>
          <Textarea name='Message' required />
          </Twothirdcolumn>
      
      </FormBlock>
      <FormBlock>
        <Onethirdcolumn>
        </Onethirdcolumn>
        <Twothirdcolumn>
          <Button type="submit">Submit</Button>
          </Twothirdcolumn> 
      </FormBlock>
        </div>
      }
      {/* Invisible reCAPTCHA must be kept outside of conditionals */}
    </div>
  )}
</NetlifyForm>
  </React.Fragment>
  
);

export default ContactForm;

ContactForm.propTypes = {
};