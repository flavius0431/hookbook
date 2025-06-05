Overview
The Form component is a simple React form that uses a custom hook useForm for managing form state. It features:

Controlled inputs for name and email

Basic validation with error feedback

Display of submitted data below the form

Reset form on successful submission

Import and use inside your app:
import Form from './components/Form';

function App() {
return (

<div>
<Form />
</div>
);
}

Form Behavior
State Management
Uses a custom hook useForm to track values and handle changes.

Tracks validation errors with a local errors state.

Stores submitted data in submittedData state for display.

Validation Rules
Name: Required, must not be empty or whitespace.

Email: Required, must be a valid email format (simple regex check).

Submission
On submit:

Validates inputs.

If errors exist, shows error messages and prevents submission.

If valid, clears the form and displays the submitted data below.

Key Functions
validateEmail(email: string): boolean
Simple regex check to verify email format.

validate(): boolean
Checks for empty fields and invalid email.

Updates errors state.

Returns true if form is valid, else false.

handleSubmit(event: Event)
Prevents default form submission.

Calls validate().

If valid, saves form data and resets inputs.

Styling
Inputs with errors have red borders.

Error messages appear below respective inputs in red.

Submitted data is displayed in a simple block below the form.

Extensibility Ideas
Add props to customize fields or submit behavior.

Integrate with APIs for async form submission.

Add loading state and disable button while submitting.

Support more fields and complex validation rules.
