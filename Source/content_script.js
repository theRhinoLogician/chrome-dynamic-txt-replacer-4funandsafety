walk(document.body);

function walk(node)
{
	// cloud-to-butt author stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bJoshua\b/g, "Jerrold");
	v = v.replace(/\bjoshua\b/g, "jerrold");
	v = v.replace(/\bJosh\b/g, "Jerry");
	v = v.replace(/\bjosh\b/g, "jerry");

	textNode.nodeValue = v;
}
