import React from 'react';

function Editor({ onChange, text }) {
    return (
        <div id="editorWrap">
            <div className="toolbar">Editor</div>
            <textarea 
                id="editor" 
                value={text}
                onChange={event => onChange(event.target.value)}
            />
        </div>
    )
}

export default Editor;