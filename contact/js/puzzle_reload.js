// Copyright (c) 2010 SolveMedia Inc.
// $Id$

// The puzzle needs to be reset after a CF7 form submission
// in case the user needs to submit the form again
jQuery(document).ajaxSuccess(function(evt, xhr, options)
{
	try
	{
		// Check that the AJAX call involves Contact-Form-7
		// submission and a Solve Media puzzle
		if (options.data.match("_wpcf7_is_ajax_call=1") &&
			options.data.match("adcopy_response="))
		{
			ACPuzzle.reload();
		}
	}
	catch(e) {}
});
