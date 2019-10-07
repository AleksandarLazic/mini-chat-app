import React from 'react';

const FormComponent = (props) => {
    const { handlers } = props;

    function formOnSubmit(e) {
        e.preventDefault();
        handlers.formSubmit();
    }

    return (
        <form onSubmit={ () => formOnSubmit(event) }>
            { props.children }
            <button type="submit">Send message</button>
        </form>
    )
}

export default FormComponent