import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import {render} from '@testing-library/react';
import Button from './index';

test('Should not allowed click button if ifDisabled is present',()=>{
  const {container} = render(<Button isDisabled/>)

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('Shold render loading/spinner',()=>{
  const {container, getByText} = render(<Button isLoading/>)

  // eslint-disable-next-line jest/valid-expect, testing-library/prefer-screen-queries
  expect(getByText(/loading/i)).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('span')).toBeInTheDocument()
})

test('Should render <a> tag',()=>{
  const {container} = render(<Button type='link' isExternal />)

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('a')).toBeInTheDocument()
})

test('Should render <Link> component', ()=>{
  const {container} = render(<Router><Button href='' type='link'></Button></Router>)

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('a')).toBeInTheDocument()
})


