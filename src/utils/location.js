export const mapCategoryTag = (tag) => {
	if (tag.toLowerCase() === 'ui/ux') {
		return 'ui-ux'
	} else {
		return tag.toLowerCase()
	}
}
