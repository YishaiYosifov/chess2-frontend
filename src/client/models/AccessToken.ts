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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccessToken
 */
export interface AccessToken {
    /**
     * 
     * @type {string}
     * @memberof AccessToken
     */
    tokenType?: string;
    /**
     * 
     * @type {string}
     * @memberof AccessToken
     */
    accessToken?: string | null;
}

/**
 * Check if a given object implements the AccessToken interface.
 */
export function instanceOfAccessToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccessTokenFromJSON(json: any): AccessToken {
    return AccessTokenFromJSONTyped(json, false);
}

export function AccessTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tokenType': !exists(json, 'token_type') ? undefined : json['token_type'],
        'accessToken': !exists(json, 'access_token') ? undefined : json['access_token'],
    };
}

export function AccessTokenToJSON(value?: AccessToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token_type': value.tokenType,
        'access_token': value.accessToken,
    };
}

