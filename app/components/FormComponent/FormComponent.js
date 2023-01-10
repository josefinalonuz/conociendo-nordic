const React = require('react');
const Button = require('@andes/button');
const TextField = require('@andes/textfield');

const FormComponent = () => {
  const [inputValue, setInputValue] = React.useState('jose');

  const onChangeHandler = (event) => {
    console.log('hola')
  }

  return (
    <>
      <TextField
        value={inputValue}
        onChange={(e) => console.log(e)}
        placeholder='seller IDsssss'
      />
      <Button> Buscar Seller!!! </Button>
    </>
  )
}

module.exports = FormComponent;