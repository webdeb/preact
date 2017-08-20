import { extend } from '../util';


/** Check if two nodes are equivalent.
 *	@param {Element} node
 *	@param {VNode} vnode
 *	@private
 */
export function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode==='string' || typeof vnode==='number') {
		return node.splitText!==undefined;
	}
	if (typeof vnode.nodeName==='string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor===vnode.nodeName;
}


/** Check if an Element has a given normalized name.
*	@param {Element} node
*	@param {String} nodeName
 */
export function isNamedNode(node, nodeName) {
	return node.normalizedNodeName===nodeName || node.nodeName.toLowerCase()===nodeName.toLowerCase();
}


/**
 * Reconstruct Component-style `props` from a VNode.
 * Ensures default/fallback values from `defaultProps`:
 * Own-properties of `defaultProps` not present in `vnode.attributes` are added.
 * @param {VNode} vnode
 * @returns {Object} props
 */
export function getNodeProps(vnode) {
	let props = vnode.children!==undefined ? { children: vnode.children } : {};
	props = extend(props, vnode.attributes);

	return vnode.nodeName.defaultProps!==undefined
		? extend(props, vnode.nodeName.defaultProps, true)
		: props;
}
