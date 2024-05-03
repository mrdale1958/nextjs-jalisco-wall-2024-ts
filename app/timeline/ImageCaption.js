export default  function ImageCaption( props ) {
    function extract_credits(caption) {
        let credit = caption.match(/Crédito: (.*)/);
        if (credit !== null) {
            return "Crédito: " + credit[1];
        } else {
            return "";
        }
    }

    function remove_credit(caption) {
        let credit = caption.match(/Crédito: (.*)/);
        if (credit !== null) {
            return caption.replace(/Crédito: (.*)/,"");
        } else {
            return caption;
        }
    }

    return (
        <div className='image-caption'>
            {remove_credit(props.caption)}
             <div className='image-credit'>{extract_credits(props.caption)}</div>       
        </div>
    );
}
