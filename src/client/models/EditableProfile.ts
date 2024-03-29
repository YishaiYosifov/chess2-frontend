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
 * @interface EditableProfile
 */
export interface EditableProfile {
    /**
     * 
     * @type {string}
     * @memberof EditableProfile
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof EditableProfile
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof EditableProfile
     */
    countryAlpha3: string;
    /**
     * 
     * @type {string}
     * @memberof EditableProfile
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof EditableProfile
     */
    about: string;
}

/**
 * Check if a given object implements the EditableProfile interface.
 */
export function instanceOfEditableProfile(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "countryAlpha3" in value;
    isInstance = isInstance && "location" in value;
    isInstance = isInstance && "about" in value;

    return isInstance;
}

export function EditableProfileFromJSON(json: any): EditableProfile {
    return EditableProfileFromJSONTyped(json, false);
}

export function EditableProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): EditableProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'countryAlpha3': json['country_alpha3'],
        'location': json['location'],
        'about': json['about'],
    };
}

export function EditableProfileToJSON(value?: EditableProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'country_alpha3': value.countryAlpha3,
        'location': value.location,
        'about': value.about,
    };
}

