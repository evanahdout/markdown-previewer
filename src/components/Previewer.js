import React from "react";

function Previewer({ markdown }) {
    return (
        <div id="previewWrap">
            <div className="toolbar">Preview</div>
            <div 
                id="preview"
                dangerouslySetInnerHTML={{
                    __html: markdown
                }}
            />
        </div>
    )
}

export default Previewer;