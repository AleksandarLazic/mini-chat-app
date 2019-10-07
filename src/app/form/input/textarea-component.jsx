import React from 'react';

const TextareaComponent = (props) => {
    const { handlers, value } = props;

    function textareaValueChange(e) {
        handlers.valueChange(e.target.value)
    }

    return (
        <textarea
            rows='10'
            onChange={ () => textareaValueChange(event) }
            value={ value }
        ></textarea>
    )
}

export default TextareaComponent