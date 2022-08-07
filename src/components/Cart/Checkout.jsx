import classes from "./Checkout.module.scss";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput(isNotEmpty);
  const {
    value: codeValue,
    isValid: codeIsValid,
    hasError: codeHasError,
    valueChangeHandler: codeChangeHandler,
    inputBlurHandler: codeBlurHandler,
  } = useInput(isFiveChars);

  let formIsValid = false;

  if (nameIsValid && streetIsValid && cityIsValid && codeIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    props.onConfirm({
			name: nameValue,
			street: streetValue,
			city: cityValue,
			postalCode: codeValue,
		})
  };

  const nameClasses = `${classes.control} ${
    !nameHasError ? "" : classes.invalid
  }`;
  const streetClasses = `${classes.control} ${
    !streetHasError ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${
    !cityHasError ? "" : classes.invalid
  }`;
  const postalCodeClasses = `${classes.control} ${
    !codeHasError ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && <p>Please enter a valid name!</p>}
      </div>

      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetHasError && <p>Please enter a valid street!</p>}
      </div>

      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={cityValue}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityHasError && <p>Please enter a valid city!</p>}
      </div>

      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="number"
          id="postal"
          value={codeValue}
          onChange={codeChangeHandler}
          onBlur={codeBlurHandler}
        />
        {codeHasError && (
          <p>Please enter a valid postal code! (5 characters long)</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button disabled={!formIsValid} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
