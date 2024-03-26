// The following code fixes an issue with replying to blog comments.
// When the "reply" or "cancel reply" links are clicked, WordPress
// deletes the captcha from the DOM and rewrites it in another part
// of the page. This breaks the captcha unless the captcha is reloaded.
// This code makes the captcha reload automatically.

// The reload function waits 100ms before reloading in order to prevent
// the captcha from reloading before it is deleted/re-written.

jQuery(document).ready(
    function()
    {
        var current_timeout = false;

        function reload_after_move()
        {
            if(current_timeout != false)
            {
                clearTimeout(current_timeout);
            }

            current_timeout = setTimeout(function(){
                ACPuzzle.reload();
            },100);
        }

        jQuery("#cancel-comment-reply-link").click(reload_after_move);
        jQuery(".comment-reply-link").click(reload_after_move);
    }
);
