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
import type { UserType } from './UserType';
import {
    UserTypeFromJSON,
    UserTypeFromJSONTyped,
    UserTypeToJSON,
} from './UserType';

/**
 * Should be used when the user could be a guest.
 * Only includes the information about the user.
 * @export
 * @interface UnauthedProfileOut
 */
export interface UnauthedProfileOut {
    /**
     * 
     * @type {number}
     * @memberof UnauthedProfileOut
     */
    userId: number;
    /**
     * 
     * @type {UserType}
     * @memberof UnauthedProfileOut
     */
    userType: UserType;
    /**
     * 
     * @type {string}
     * @memberof UnauthedProfileOut
     */
    username: string;
}

/**
 * Check if a given object implements the UnauthedProfileOut interface.
 */
export function instanceOfUnauthedProfileOut(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "userId" in value;
    isInstance = isInstance && "userType" in value;
    isInstance = isInstance && "username" in value;

    return isInstance;
}

export function UnauthedProfileOutFromJSON(json: any): UnauthedProfileOut {
    return UnauthedProfileOutFromJSONTyped(json, false);
}

export function UnauthedProfileOutFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnauthedProfileOut {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': json['user_id'],
        'userType': UserTypeFromJSON(json['user_type']),
        'username': json['username'],
    };
}

export function UnauthedProfileOutToJSON(value?: UnauthedProfileOut | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
        'user_type': UserTypeToJSON(value.userType),
        'username': value.username,
    };
}

