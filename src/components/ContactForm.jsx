/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { form   } from '../../tailwind';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactForm = () => (
    <React.Fragment>

<form name="frontform" netlify netlify-honeypot="bot-field" class="w-full max-w-xs">
<div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Full Name:
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="text" value="frontform" name="name" placeholder="******************"/>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Email:
        </label>
      </div>
      <div class="md:w-2/3">
        <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" type="email" name="email" value="frontform" placeholder="******************"/>
      </div>
    </div>
    <div class="md:flex md:items-center mb-6">
      <div class="md:w-1/3">
        <label class="block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
          Message:
        </label>
      </div>
      <div class="md:w-2/3">
        <textarea class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-purple" id="inline-full-name" name="message" value="frontform" placeholder="******************"/>
      </div>
    </div>
    <button type="submit">Send</button>
</form>
  </React.Fragment>
  
);

export default ContactForm;

ContactForm.propTypes = {
};