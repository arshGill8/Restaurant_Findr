import { connect } from "react-redux";
import InputFieldComponent from "../components/InputField";
import { updateInput } from "../actions";

const mapDispatchToProps = dispatch => ({
  updateInput: event => {
    dispatch(updateInput(event));
  },
});

export const InputField = connect(
  state => state.inputValue,
  mapDispatchToProps
)(InputFieldComponent);
