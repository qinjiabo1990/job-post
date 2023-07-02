import { Container, Label, Input } from './FormInputRow.styles';

function FormInputRow({ name, onChange, type }) {
  return (
    <Container>
      <Label htmlFor={name}>
        {name}
      </Label>
      <Input type={type} onChange={onChange} name={name} />
    </Container>
  );
}

export default FormInputRow;
