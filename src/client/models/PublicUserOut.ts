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
 * @interface PublicUserOut
 */
export interface PublicUserOut {
    /**
     * 
     * @type {number}
     * @memberof PublicUserOut
     */
    userId: number;
    /**
     * 
     * @type {string}
     * @memberof PublicUserOut
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof PublicUserOut
     */
    about: string;
    /**
     * 
     * @type {string}
     * @memberof PublicUserOut
     */
    countryAlpha3: string;
    /**
     * 
     * @type {Date}
     * @memberof PublicUserOut
     */
    pfpLastChanged: Date;
}

/**
 * Check if a given object implements the PublicUserOut interface.
 */
export function instanceOfPublicUserOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "username" in value;
    isInstance = isInstance && "about" in value;
    isInstance = isInstance && "countryAlpha3" in value;
    isInstance = isInstance && "pfpLastChanged" in value;

    return isInstance;
}

export function PublicUserOutFromJSON(json: any): PublicUserOut {
    return PublicUserOutFromJSONTyped(json, false);
}

export function PublicUserOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicUserOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
        'username': json['username'],
        'about': json['about'],
        'countryAlpha3': json['country_alpha3'],
        'pfpLastChanged': (new Date(json['pfp_last_changed'])),
    };
}

export function PublicUserOutToJSON(value?: PublicUserOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
        'username': value.username,
        'about': value.about,
        'country_alpha3': value.countryAlpha3,
        'pfp_last_changed': (value.pfpLastChanged.toISOString()),
    };
}

