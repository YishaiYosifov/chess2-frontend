/* tslint:disable */
/* eslint-disable */
/**
 * Chess2
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum Color {
    White = 'white',
    Black = 'black'
}


export function ColorFromJSON(json: any): Color {
    return ColorFromJSONTyped(json, false);
}

export function ColorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Color {
    return json as Color;
}

export function ColorToJSON(value?: Color | null): any {
    return value as any;
}

