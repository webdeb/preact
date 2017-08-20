/** Copy own-properties from `props` onto `obj`.
 *	@returns obj
 *	@private
 */
export function extend(obj, props, noOverride) {
	for (let i in props) {
		if (noOverride && obj[i]!==undefined) continue;
		obj[i] = props[i];
	}
	return obj;
}

/** Call a function asynchronously, as soon as possible.
 *	@param {Function} callback
 */
export const defer = typeof Promise=='function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
