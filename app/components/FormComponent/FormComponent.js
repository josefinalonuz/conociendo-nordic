const React = require('react');
const Button = require('@andes/button');
const TextField = require('@andes/textfield');


const FormComponent = ({doRequest}) => {
  const [inputValue, setInputValue] = React.useState();

  const onChangeHandler = (event) => {
    setInputValue(event.target.value)
    console.log(event.target.value)
  }

  const onClickHandler = (event) => {
    doRequest(inputValue);
    console.log('apreté click')
  }

  return (
    <>
      <TextField
        value={inputValue}
        onChange={onChangeHandler}
        placeholder='seller IDsssss'
      />
      <Button
        onClick={onClickHandler}
      > Buscar Seller!!! </Button>
    </>
  )
}

module.exports = FormComponent;