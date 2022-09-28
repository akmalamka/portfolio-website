export const isHashLocationExist = () => {
	return window.location.hash.length > 0
}

export const mapCategoryTag = (tag) => {
	if (tag.toLowerCase() === 'ui/ux') {
		return 'ui-ux'
	} else {
		return tag.toLowerCase()
	}
}
