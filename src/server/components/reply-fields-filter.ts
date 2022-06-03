// @ts-ignore
import jsonMask from 'json-mask';
/**
 *
 * @name replyFieldsFilter
 * @param {object} response
 * @param {string} fields to be filtered
 * @description removes fields not needed to be returned to the client
 */
export const replyFieldsFilter = ({ response, fields }: { response: object, fields: string }) => jsonMask(response, fields)