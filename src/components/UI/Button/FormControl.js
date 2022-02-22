import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: black;
  }
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    background: transparent;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
  &.invalid input {
    border-color: #cd0000;
    background: #ff0909;
  }
  &.invalid label {
    color: #ff0909;
  }
`;
export default FormControl;