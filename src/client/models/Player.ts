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
import type { Color } from './Color';
import {
    ColorFromJSON,
    ColorFromJSONTyped,
    ColorToJSON,
} from './Color';
import type { PublicUserOut } from './PublicUserOut';
import {
    PublicUserOutFromJSON,
    PublicUserOutFromJSONTyped,
    PublicUserOutToJSON,
} from './PublicUserOut';

/**
 * 
 * @export
 * @interface Player
 */
export interface Player {
    /**
     * 
     * @type {PublicUserOut}
     * @memberof Player
     */
    user: PublicUserOut;
    /**
     * 
     * @type {Color}
     * @memberof Player
     */
    color: Color;
    /**
     * 
     * @type {number}
     * @memberof Player
     */
    timeRemaining: number;
}

/**
 * Check if a given object implements the Player interface.
 */
export function instanceOfPlayer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "user" in value;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "timeRemaining" in value;

    return isInstance;
}

export function PlayerFromJSON(json: any): Player {
    return PlayerFromJSONTyped(json, false);
}

export function PlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Player {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': PublicUserOutFromJSON(json['user']),
        'color': ColorFromJSON(json['color']),
        'timeRemaining': json['time_remaining'],
    };
}

export function PlayerToJSON(value?: Player | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': PublicUserOutToJSON(value.user),
        'color': ColorToJSON(value.color),
        'time_remaining': value.timeRemaining,
    };
}

