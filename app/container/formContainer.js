const React = require('react');
const FormComponent = require('../components/FormComponent');
const vipService = require('../../services/vip');

const formContainer = () => {
  const doRequest = (id) => {
    vipService.getSellerId(id)
  }

  return (
    <FormComponent doRequest={doRequest} />
  )
}

module.exports = formContainer;