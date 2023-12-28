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


import * as runtime from '../runtime';
import type {
  ErrorResponseStr,
  GameSettings,
  HTTPValidationError,
} from '../models/index';
import {
    ErrorResponseStrFromJSON,
    ErrorResponseStrToJSON,
    GameSettingsFromJSON,
    GameSettingsToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models/index';

export interface StartPoolGameRequest {
    gameSettings: GameSettings;
}

/**
 * 
 */
export class GameRequestsApi extends runtime.BaseAPI {

    /**
     * Searches for a game request that fits the criterias. If a game was not found, it will create a new game request with an unspecified recipient.
     * Start Pool Game
     */
    async startPoolGameRaw(requestParameters: StartPoolGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.gameSettings === null || requestParameters.gameSettings === undefined) {
            throw new runtime.RequiredError('gameSettings','Required parameter requestParameters.gameSettings was null or undefined when calling startPoolGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2PasswordBearerCookie", []);
        }

        const response = await this.request({
            path: `/game-requests/pool/join`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameSettingsToJSON(requestParameters.gameSettings),
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<any>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Searches for a game request that fits the criterias. If a game was not found, it will create a new game request with an unspecified recipient.
     * Start Pool Game
     */
    async startPoolGame(requestParameters: StartPoolGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.startPoolGameRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
