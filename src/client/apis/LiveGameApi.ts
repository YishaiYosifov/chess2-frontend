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
  HTTPValidationError,
  LiveGame,
} from '../models/index';
import {
    ErrorResponseStrFromJSON,
    ErrorResponseStrToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    LiveGameFromJSON,
    LiveGameToJSON,
} from '../models/index';

export interface GetLiveGameRequest {
    token: string;
}

/**
 * 
 */
export class LiveGameApi extends runtime.BaseAPI {

    /**
     * Fetch everything neccasary to load a game
     * Get Live Game
     */
    async getLiveGameRaw(requestParameters: GetLiveGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LiveGame>> {
        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling getLiveGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/live-game/{token}/load`.replace(`{${"token"}}`, encodeURIComponent(String(requestParameters.token))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LiveGameFromJSON(jsonValue));
    }

    /**
     * Fetch everything neccasary to load a game
     * Get Live Game
     */
    async getLiveGame(requestParameters: GetLiveGameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LiveGame> {
        const response = await this.getLiveGameRaw(requestParameters, initOverrides);
        return await response.value();
    }

}